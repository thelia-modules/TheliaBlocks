import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import { NumberParam } from "serialize-query-params";
import { useDispatch } from "react-redux";
import { useQueryParam } from "use-query-params";

import { GroupTypeResponse, GroupTypeStore, IBlock } from "../types";
import { setBlocks } from "../redux/blocks";
import { setGroup } from "../redux/group";

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

export function useGroups() {
  return useQuery<GroupTypeResponse[]>(["block_group"], () =>
    fetcher(`/open_api/block_group/list`)
  );
}

export function useGroup() {
  const dispatch = useDispatch();
  const [blockGroupId] = useQueryParam("id", NumberParam);
  return useQuery<GroupTypeResponse>(
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
      onSuccess: (data: GroupTypeResponse) => {
        const { jsonContent, ...rest } = data;
         
        dispatch(setGroup(rest));

        if (jsonContent) {
          dispatch(setBlocks(JSON.parse(jsonContent))); 
        }
      },
    }
  );
}

export function useCreateOrUpdateGroup() {
  const dispatch = useDispatch();
  const [groupId, setGroupId] = useQueryParam("id", NumberParam);

  return useMutation(({ group, blocks } : { group: GroupTypeStore, blocks: IBlock[]}) =>
    fetcher(
      `/open_api/block_group`,
      {
        method: groupId ? "PATCH" : "POST",
        data: {
          blockGroup: {
            id: groupId,
            ...group,
            jsonContent: JSON.stringify(blocks),
          },
          locale: "en_US",
        },
      }
    ),
    {
      onSuccess: (data: GroupTypeStore) => {
        if(!groupId && data.id) {
          dispatch(setGroup(data));
          setGroupId(parseInt(data.id, 10));
        }
      },
    }
  );
}
