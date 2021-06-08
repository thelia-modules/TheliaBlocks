declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    ui: import("../types").uiStoreType;
    group: import("../types").GroupTypeStore;
    blocks: import("../types").IBlock[];
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    ui: import("../types").uiStoreType;
    group: import("../types").GroupTypeStore;
    blocks: import("../types").IBlock[];
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
    ui: import("../types").uiStoreType;
    group: import("../types").GroupTypeStore;
    blocks: import("../types").IBlock[];
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export default store;
//# sourceMappingURL=store.d.ts.map