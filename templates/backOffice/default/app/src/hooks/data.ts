import {
  ErrorType,
  GroupTypeResponse,
  GroupTypeStore,
  IBlock,
  LibraryImage,
  itemBlockGroupsType,
} from "../types";
import axios, { AxiosRequestConfig } from "axios";
import { initializeWindowConstantsGroupId, setUnsaved } from "../redux/ui";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { CURRENT_LOCAL } from "../constants";
import GroupOptions from "../components/GroupOptions";
import { RootState } from "../redux/store";
import { initialState as initialBlocksState } from "../redux/blocks";
import { initialState as initialGroupState } from "../redux/group";
import { setBlocks } from "../redux/blocks";
import { setGroup } from "../redux/group";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

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

export function useGroup({ id }: { id?: number }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      dispatch(setGroup(initialGroupState));
      dispatch(setBlocks(initialBlocksState));
      dispatch(setUnsaved(false));
    }
  }, [id]);

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

        dispatch(setGroup(rest));
        dispatch(setUnsaved(false));

        if (jsonContent) {
          dispatch(setBlocks(JSON.parse(jsonContent)));
        }
      },
    }
  );
}

export function useCreateOrUpdateGroup({ id }: { id?: number }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );

  return useMutation(
    ({ group, blocks }: { group: GroupTypeStore; blocks: IBlock[] }) => {
      const { itemBlockGroups, ...groupOmitItemBlockGroups } = group;

      let data: {
        blockGroup: Omit<GroupTypeStore, "itemBlockGroups"> & {
          jsonContent: string;
        };
        locale: string;
        itemBlockGroup?: {
          itemId?: itemBlockGroupsType["itemId"];
          itemType?: itemBlockGroupsType["itemType"];
        };
      } = {
        blockGroup: {
          ...groupOmitItemBlockGroups,
          jsonContent: JSON.stringify(blocks),
        },
        locale: CURRENT_LOCAL,
      };

      if (id) {
        data.blockGroup.id = id;
      } else {
        if (windowConstants.itemType && windowConstants.itemId) {
          data.itemBlockGroup = {
            itemType: windowConstants.itemType,
            itemId: windowConstants.itemId,
          };
        }
      }

      return fetcher(`/open_api/block_group`, {
        method: id ? "PATCH" : "POST",
        data,
      });
    },
    {
      onSuccess: (data: GroupTypeStore) => {
        dispatch(setUnsaved(false));

        if (!id && data.id) {
          dispatch(setGroup(data));
          if (history) {
            history.push(`/edit/${data.id}`);
          }
        }
      },
    }
  );
}

export function useDeleteGroup({ onSuccess }: { onSuccess: () => any }) {
  return useMutation(
    ({ id }: { id: GroupTypeStore["id"] }) =>
      fetcher(`/open_api/block_group/${id}`, {
        method: "DELETE",
      }),
    {
      onSuccess,
    }
  );
}

export function useDuplicateGroup() {
  let history = useHistory();

  return useMutation(
    ({ id }: { id: GroupTypeStore["id"] }) =>
      fetcher(`/open_api/block_group/duplicate/${id}`, {
        method: "POST",
      }),
    {
      onSuccess: (newGroupId: GroupTypeStore["id"]) => {
        history.push(`/edit/${newGroupId}`);
      },
    }
  );
}

export function useLibraryImage(options: {
  id?: number | null;
  limit?: number | null;
  offset?: number;
  title?: string | null;
}) {
  return useQuery(
    ["LibraryImage", options],
    () =>
      fetcher(`/open_api/library/image`, {
        method: "GET",
        params: {
          id: options.id || null,
          limit: options.limit || 5,
          offset: options.offset || 0,
          title: options.title || null,
        },
      }),
    {
      keepPreviousData: true,
      onSuccess: (data: Array<LibraryImage>) => {},
    }
  );
}

export function useCreateImage() {
  const queryClient = useQueryClient();
  return useMutation<LibraryImage, ErrorType, FormData>(
    (data) => {
      if (!data.has("locale")) {
        data.set("locale", CURRENT_LOCAL);
      }

      return fetcher(`/open_api/library/image`, {
        method: "POST",
        headers: {
          "content-type": "multipart/form-data",
        },
        data,
      });
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return [...oldData, data];
          }

          return oldData;
        });
      },
    }
  );
}

export function useDeleteImage() {
  const queryClient = useQueryClient();
  return useMutation(
    (id: LibraryImage["id"]) => {
      return fetcher(`/open_api/library/image/${id}`, {
        method: "DELETE",
      });
    },
    {
      onSuccess: (_, id) => {
        queryClient.setQueryData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return oldData.filter((i) => i.id !== id);
          }

          return oldData;
        });
      },
    }
  );
}
export function useUpdateImage() {
  const queryClient = useQueryClient();
  return useMutation(
    (id: LibraryImage["id"]) => {
      return fetcher(`/open_api/library/image/${id}`, {
        method: "POST",
      });
    },
    {
      onSuccess: (data, id) => {
        queryClient.setQueryData(["LibraryImage"], (oldData) => {
          if (oldData && Array.isArray(oldData)) {
            return oldData.map((i) => (i.id === id ? data : i));
          }

          return oldData;
        });
      },
    }
  );
}

export function useLinkContentToGroup() {
  const dispatch = useDispatch();
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );

  return useMutation(
    ({ id }: { id: GroupTypeStore["id"] }) =>
      fetcher(`/open_api/item_block_group`, {
        method: "POST",
        data: {
          itemBlockGroup: {
            blockGroupId: id,
            itemId: windowConstants.itemId,
            itemType: windowConstants.itemType,
          },
        },
      }),
    {
      onSuccess: (data: GroupTypeResponse) => {
        const { jsonContent, ...rest } = data;

        dispatch(setGroup(rest));
        dispatch(setUnsaved(false));

        if (jsonContent) {
          dispatch(setBlocks(JSON.parse(jsonContent)));
        }
      },
    }
  );
}

export function useUnlinkContentFromGroup() {
  const dispatch = useDispatch();

  return useMutation(
    ({ id }: { id: GroupTypeStore["id"] }) =>
      fetcher(`/open_api/item_block_group/${id}`, {
        method: "DELETE",
      }),
    {
      onSuccess: () => {
        dispatch(setGroup(initialGroupState));
        dispatch(setBlocks(initialBlocksState));
        dispatch(initializeWindowConstantsGroupId());
        dispatch(setUnsaved(false));

        toast.success("Le groupe a bien été délié");
      },
    }
  );
}
