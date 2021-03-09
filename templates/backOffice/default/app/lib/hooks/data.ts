import axios, { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";

import { PageType } from "../types";

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
  return useQuery(["pages"], () => fetcher(`/api/TheliaBlocks}`));
}

export function usePage(pageId: string) {
  return useQuery(
    ["pages", pageId],
    () => fetcher(`/api/TheliaBlocks/${pageId}`),
    {
      enabled: !!pageId,
    }
  );
}

export function useCreatePage() {
  return useMutation((page: PageType) =>
    fetcher("/api/TheliaBlocks", { method: "POST", data: page })
  );
}
