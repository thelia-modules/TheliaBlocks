import { ErrorType, GroupTypeResponse, GroupTypeStore, IBlock, LibraryImage } from "../types";
export declare function useGroups(): import("react-query").UseQueryResult<GroupTypeResponse[], unknown>;
export declare function useGroup({ id }: {
    id?: number;
}): import("react-query").UseQueryResult<GroupTypeResponse, unknown>;
export declare function useCreateOrUpdateGroup({ id }: {
    id?: number;
}): import("react-query").UseMutationResult<GroupTypeStore, unknown, {
    group: GroupTypeStore;
    blocks: IBlock[];
}, unknown>;
export declare function useDeleteGroup({ onSuccess }: {
    onSuccess: () => any;
}): import("react-query").UseMutationResult<any, unknown, {
    id: GroupTypeStore["id"];
}, unknown>;
export declare function useDuplicateGroup(): import("react-query").UseMutationResult<number | undefined, unknown, {
    id: GroupTypeStore["id"];
}, unknown>;
export declare function useLibraryImage(options: {
    id?: number | null;
    limit?: number | null;
    offset?: number;
    title?: string | null;
}): import("react-query").UseQueryResult<LibraryImage[], unknown>;
export declare function useLibraryImageById(id: number | null): import("react-query").UseQueryResult<any, unknown>;
export declare function useCreateImage(): import("react-query").UseMutationResult<LibraryImage, ErrorType, FormData, unknown>;
export declare function useDeleteImage(): import("react-query").UseMutationResult<any, unknown, number | null, unknown>;
export declare function useUpdateImage(): import("react-query").UseMutationResult<any, unknown, number | null, unknown>;
export declare function useLinkContentToGroup(): import("react-query").UseMutationResult<GroupTypeResponse, unknown, {
    id: GroupTypeStore["id"];
}, unknown>;
export declare function useUnlinkContentFromGroup(): import("react-query").UseMutationResult<any, unknown, {
    id: GroupTypeStore["id"];
}, unknown>;
//# sourceMappingURL=data.d.ts.map