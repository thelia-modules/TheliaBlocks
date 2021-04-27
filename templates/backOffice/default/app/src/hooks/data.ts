import axios, { AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

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
  const { id } : { id: string } = useParams();
  console.log(id);

  return useQuery<GroupTypeResponse>(
    ["block_group", id],
    () =>
      fetcher(`/open_api/block_group`, {
        method: "GET",
        params: {
          id,
        },
      }),
    {
      enabled: !!id,
      onSuccess: (data: GroupTypeResponse) => {
        const { jsonContent, ...rest } = data;

        console.log(data);
         
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
  let history = useHistory();
  let { id } : { id: string } = useParams();

  return useMutation(({ group, blocks } : { group: GroupTypeStore, blocks: IBlock[]}) =>
    fetcher(
      `/open_api/block_group`,
      {
        method: id ? "PATCH" : "POST",
        data: {
          blockGroup: {
            id,
            ...group,
            jsonContent: JSON.stringify(blocks),
          },
          locale: "fr_FR",
        },
      }
    ),
    {
      onSuccess: (data: GroupTypeStore) => {
        if(!id && data.id) {
          dispatch(setGroup(data));
          history.push(`/edit/${data.id}`);
        }
      },
    }
  );
}
