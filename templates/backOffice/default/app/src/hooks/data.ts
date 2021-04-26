import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import { NumberParam } from "serialize-query-params";
import { useDispatch } from "react-redux";
import { useQueryParam } from "use-query-params";

import { PageTypeResponse, PageTypeStore, IBlock } from "../types";
import { setBlocks } from "../redux/blocks";
import { setPage } from "../redux/page";

async function fetcher(url: string, config: AxiosRequestConfig = {}) {
  try {
    const response = await axios({
      url,
      withCredentials: true,
      ...config,
    });
    return response.data;
  } catch (error) {
    throw Error(error);
  }
}

export function useBlockGroupsList() {
  return useQuery<PageTypeResponse[]>(["block_group"], () =>
    fetcher(`/open_api/block_group/list`)
  );
}

export function useBlockGroup() {
  const dispatch = useDispatch();
  const [blockGroupId] = useQueryParam("id", NumberParam);
  return useQuery<PageTypeResponse>(
    ["block_group", blockGroupId],
    () =>
      fetcher(`/open_api/block_group`, {
        method: "GET",
        params: {
          id: blockGroupId,
        },
      }),
    {
      enabled: !!blockGroupId,
      onSuccess: (data: PageTypeResponse) => {
        const { jsonContent, ...rest } = data;
         
        dispatch(setPage(rest));

        if (jsonContent) {
          dispatch(setBlocks(JSON.parse(jsonContent))); 
        }
      },
    }
  );
}

export function useCreateOrUpdatePage() {
  const dispatch = useDispatch();
  const [pageId, setPageId] = useQueryParam("id", NumberParam);

  return useMutation(({ page, blocks } : { page: PageTypeStore, blocks: IBlock[]}) =>
    fetcher(
      `/open_api/block_group`,
      {
        method: pageId ? "PATCH" : "POST",
        data: {
          blockGroup: {
            id: pageId,
            ...page,
            jsonContent: JSON.stringify(blocks),
          },
          locale: "en_US",
        },
      }
    ),
    {
      onSuccess: (data: PageTypeStore) => {
        if(!pageId && data.id) {
          dispatch(setPage(data));
          setPageId(parseInt(data.id, 10));
        }
      },
    }
  );
}
