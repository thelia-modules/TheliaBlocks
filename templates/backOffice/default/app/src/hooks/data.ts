import { IBlock, PageType } from "../types";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";

import { NumberParam } from "serialize-query-params";
import { setBlocks } from "../redux/blocks";
import { useDispatch } from "react-redux";
import { useQueryParam } from "use-query-params";

async function fetcher(url: string, config: AxiosRequestConfig = {}) {
  try {
    const response = await axios({
      url,
      withCredentials: true,
      ...config,
    });
    return response;
  } catch (error) {
    throw Error(error);
  }
}

export function useBlockGroupsList() {
  return useQuery<AxiosResponse<PageType[]>, string>(["block_group"], () =>
    fetcher(`/open_api/block_group/list`)
  );
}

export function useBlockGroup() {
  const dispatch = useDispatch();
  const [blockGroupId] = useQueryParam("id", NumberParam);
  return useQuery(
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
      onSuccess: (data: IBlock[]) => {
        dispatch(setBlocks(data));
      },
    }
  );
}

export function useCreateOrUpdatePage() {
  const [pageId] = useQueryParam("id", NumberParam);

  return useMutation((page: PageType) =>
    fetcher(`/open_api/block_group`, {
      method: pageId ? "PATCH" : "POST",
      data: {
        blockGroup: {
          id: pageId,
          ...page,
        },
        locale: "en_US",
      },
    })
  );
}
