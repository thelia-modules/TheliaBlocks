import { IBlock, PageType } from "../types";
import axios, { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import { NumberParam } from "serialize-query-params";
import { setBlocks } from "../redux/blocks";
import { useDispatch } from "react-redux";
import { useQueryParam } from "use-query-params";

async function fetcher(url: string, config: AxiosRequestConfig = {}) {
  console.log(config);
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

export function usePages() {
  return useQuery(["pages"], () => fetcher(`/open_api/block_group/list`));
}

export function usePage() {
  const dispatch = useDispatch();
  const [pageId] = useQueryParam("id", NumberParam);
  return useQuery(
    ["pages", pageId],
    () =>
      fetcher(`/open_api/block_group`, {
        method: "GET",
        params: {
          id: pageId,
        },
      }),
    {
      enabled: !!pageId,
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
