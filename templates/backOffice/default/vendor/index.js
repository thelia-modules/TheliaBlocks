var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.tsx
import "tippy.js/dist/tippy.css";

// src/BlocksEditor.tsx
import { Suspense as Suspense3, useLayoutEffect as useLayoutEffect3 } from "react";

// src/components/AddBlocks/AddBlocks.tsx
import * as React34 from "react";
import { groupBy, partition } from "lodash";

// src/components/BlockTooltip/BlockTooltip.tsx
var BlockTooltip = ({
  title,
  description
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlockTooltip"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-semibold"
  }, title), description && /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-sm"
  }, description));
};
var BlockTooltip_default = BlockTooltip;

// assets/svg/drag.svg
import * as React2 from "react";
var SvgDrag = (props) => /* @__PURE__ */ React2.createElement("svg", {
  width: 33,
  height: 32,
  viewBox: "0 0 33 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React2.createElement("path", {
  d: "M3.04007 13.0524C3.32723 12.6855 3.85427 12.6307 4.2172 12.9297L6.59917 14.8913C6.13983 9.67928 9.27272 4.70023 14.3434 3.15603C17.1741 2.29397 20.18 2.61562 22.8074 4.06187C23.2174 4.28751 23.3757 4.80764 23.161 5.22343C22.9463 5.63933 22.4399 5.79356 22.0299 5.56777C19.7993 4.33985 17.2471 4.06682 14.8437 4.79875C10.4373 6.14068 7.75656 10.5378 8.30343 15.0753L10.5355 12.2238C10.8226 11.8568 11.3497 11.8021 11.7127 12.1011C12.0757 12.4 12.1372 12.9397 11.8501 13.3065L8.51826 17.5627C8.518 17.563 8.51782 17.5632 8.51768 17.5635C8.43628 17.6674 8.33572 17.7462 8.22496 17.7992C8.18812 17.8168 8.15009 17.8316 8.11128 17.8434C7.85576 17.9212 7.5664 17.8722 7.34058 17.6863L3.17761 14.2579C2.81443 13.9588 2.75298 13.4192 3.04007 13.0524Z",
  fill: "#222222"
}), /* @__PURE__ */ React2.createElement("path", {
  d: "M28.1911 14.26C27.4517 14.4581 27.0124 15.2189 27.2106 15.9583L27.6293 17.521C27.6623 17.6443 27.5891 17.7711 27.4659 17.8041C27.3426 17.8371 27.2158 17.7639 27.1828 17.6407L26.5248 15.185C26.3267 14.4456 25.5658 14.0063 24.8264 14.2044C24.087 14.4025 23.6478 15.1634 23.8459 15.9028L24.5039 18.3585C24.5369 18.4817 24.4637 18.6085 24.3404 18.6415C24.2172 18.6746 24.0904 18.6013 24.0574 18.4781L23.1601 15.1295C22.962 14.3901 22.2011 13.9508 21.4618 14.1489C20.7224 14.347 20.2831 15.1079 20.4812 15.8473L21.3785 19.1959C21.4115 19.3192 21.3383 19.446 21.215 19.479C21.0918 19.512 20.965 19.4388 20.932 19.3156L18.4795 10.1626C18.2813 9.4232 17.5205 8.98392 16.7811 9.18203C16.0417 9.38015 15.6024 10.141 15.8005 10.8804L18.5983 21.3219L15.2536 20.3298L15.2509 20.3306C15.0209 20.2582 14.7607 20.2513 14.5017 20.3207C13.7605 20.5193 13.3226 21.2779 13.5212 22.0191C13.5906 22.2781 13.729 22.509 13.918 22.6784L13.9152 22.6754L19.885 28.4922C20.8189 29.402 22.1629 29.753 23.4229 29.4153L29.4281 27.8062C31.4007 27.2777 32.5715 25.2498 32.0429 23.2773L29.8895 15.2405C29.6914 14.5011 28.9305 14.0618 28.1911 14.26Z",
  fill: "#222222"
}));

// src/components/AddBlocks/AddBlocks.tsx
import Modal2 from "react-modal";
import Tippy4 from "@tippyjs/react";
import { nanoid as nanoid3 } from "nanoid";

// src/hooks/useBlockContext.tsx
import * as React4 from "react";

// src/providers/BlockContext.tsx
import { createContext as createContext3, useContext as useContext2, useEffect as useEffect4, useState as useState4 } from "react";

// src/providers/BlockGroupContext.tsx
import * as React3 from "react";

// src/utils/queries.tsx
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient
} from "react-query";
import axios from "axios";
import { useContext, useEffect as useEffect2, useState as useState2 } from "react";

// src/providers/LocaleContext.tsx
import { createContext, useEffect, useState } from "react";
var LocaleContext = createContext({
  currentLocale: "",
  locales: [],
  setCurrentLocale: () => {
  }
});
function LocaleProvider({
  locales,
  children
}) {
  const [currentLocale, setCurrentLocale] = useState("");
  useEffect(() => {
    if (Array.isArray(locales)) {
      const current = locales.find((locale) => locale.active);
      if (current) {
        setCurrentLocale(current.code);
      }
    }
  }, [locales]);
  return /* @__PURE__ */ React.createElement(LocaleContext.Provider, {
    value: { locales, currentLocale, setCurrentLocale }
  }, children);
}

// src/utils/queries.tsx
import toast from "react-hot-toast";
var instance = axios.create();
async function fetcher(url, config = {}) {
  try {
    const response = await instance({
      url,
      withCredentials: true,
      ...config
    });
    return response.data;
  } catch (error) {
    throw Error(error);
  }
}
var queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: false,
      cacheTime: Infinity
    }
  }
});
function BlocksProvider({
  children,
  api
}) {
  const [initialized, setInitialized] = useState2(false);
  useEffect2(() => {
    instance.defaults.baseURL = api;
    setInitialized(true);
  }, [api]);
  if (!initialized) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(QueryClientProvider, {
    client: queryClient
  }, children);
}
function useGroups() {
  return useQuery(["block_group"], () => fetcher(`/block_group/list`));
}
function useGroup(id) {
  const { groupId: contextGroupId } = useContext(BlocksGroupContext);
  const { currentLocale } = useContext(LocaleContext);
  const groupId = id || contextGroupId;
  const key = ["block_group", groupId, currentLocale];
  const queryClient2 = useQueryClient();
  const query = useQuery(key, async () => {
    const data = await fetcher(`/block_group`, {
      method: "GET",
      params: {
        id: groupId,
        locale: currentLocale
      }
    });
    return data;
  }, {
    enabled: !!groupId,
    cacheTime: Infinity
  });
  return {
    ...query,
    editGroup: (data) => {
      queryClient2.setQueryData(key, () => {
        return data;
      });
    }
  };
}
function useCreateOrUpdateGroup() {
  const {
    groupId: contextGroupId,
    itemId: contextItemId,
    itemType: contextItemType
  } = useContext(BlocksGroupContext);
  const { currentLocale } = useContext(LocaleContext);
  const { group: contextGroup } = useContext(BlocksGroupContext);
  return useMutation(({
    groupId = contextGroupId,
    itemId = contextItemId,
    itemType = contextItemType,
    group = contextGroup,
    blocks
  }) => {
    const { itemBlockGroups = {}, ...groupOmitItemBlockGroups } = group;
    let data = {
      blockGroup: {
        ...groupOmitItemBlockGroups,
        jsonContent: JSON.stringify(blocks)
      },
      locale: currentLocale
    };
    console.log(itemId, itemType, contextItemId, contextItemType);
    if (itemId || itemType) {
      data.itemBlockGroup = {
        itemType,
        itemId,
        blockGroupId: group.id
      };
    }
    if (!data.blockGroup.slug) {
      data.blockGroup.slug = null;
    }
    return fetcher(`/block_group`, {
      method: groupId ? "PATCH" : "POST",
      data
    });
  }, {
    onSuccess: (data) => {
    }
  });
}
function useDeleteGroup() {
  const queryClient2 = useQueryClient();
  const { groupId: contextGroupId } = useContext(BlocksGroupContext);
  const { currentLocale } = useContext(LocaleContext);
  return useMutation((id) => {
    if (!id && !contextGroupId) {
      throw new Error("id is mandatory, and no fallback groupId was found in current context");
    }
    return fetcher(`/block_group/${id || contextGroupId}`, {
      method: "DELETE"
    });
  }, {
    onSuccess: (data, groupId) => {
      queryClient2.invalidateQueries(["block_group"]);
      toast.success("groupe supprim\xE9");
    }
  });
}
function useDuplicateGroup() {
  const { groupId } = useContext(BlocksGroupContext);
  return useMutation((id) => {
    if (!id && !groupId) {
      throw new Error("id is mandatory, and no fallback groupId was found in current context");
    }
    return fetcher(`/block_group/duplicate/${id}`, {
      method: "POST"
    });
  }, {
    onSuccess: (newGroupId) => {
      window.location.replace(`/admin/TheliaBlocks/${newGroupId}`);
    }
  });
}
function usePreviewGroup(timestamp, data) {
  const { currentLocale } = useContext(LocaleContext);
  const key = ["preview_block_group", currentLocale, timestamp];
  const query = useQuery(key, async () => {
    return fetcher(`/preview`, {
      baseURL: window.location.origin + "/TheliaBlocks",
      method: "POST",
      data: {
        json: data
      }
    });
  }, {
    enabled: !!timestamp && !!currentLocale,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    suspense: false
  });
  return query;
}

// src/providers/BlockGroupContext.tsx
var BlocksGroupContext = React3.createContext({
  group: void 0,
  editGroup: () => {
  }
});
var BlocksGroupProvider = ({
  groupId,
  itemType,
  itemId,
  children
}) => {
  const [group, setGroup] = React3.useState({
    visible: true,
    title: "",
    slug: null
  });
  const { data, editGroup } = useGroup(groupId);
  React3.useEffect(() => {
    if (data) {
      setGroup(data);
    }
  }, [data]);
  return /* @__PURE__ */ React3.createElement(BlocksGroupContext.Provider, {
    value: { group, editGroup, groupId, itemType, itemId }
  }, /* @__PURE__ */ React3.createElement(React3.Suspense, {
    fallback: "loading group"
  }, children));
};

// src/providers/BlockContext.tsx
var BlockContext = createContext3({ blocks: [], setBlocks: () => [] });
var BlockContextProvider = ({
  children,
  defaultBlocks,
  root = false
}) => {
  const [blocks, setBlocks] = useState4(defaultBlocks || []);
  const { group } = useContext2(BlocksGroupContext);
  useEffect4(() => {
    if (root && group?.jsonContent) {
      setBlocks(JSON.parse(group?.jsonContent));
    }
  }, [group?.jsonContent, root]);
  return /* @__PURE__ */ React.createElement(BlockContext.Provider, {
    value: { blocks, setBlocks }
  }, children);
};

// src/utils/array.ts
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// src/hooks/useBlockContext.tsx
var useBlocksContext = () => {
  const { blocks, setBlocks } = React4.useContext(BlockContext);
  const findBlockIndex = React4.useCallback((blockId) => blocks.findIndex((block) => block.id === blockId), []);
  const addBlock = React4.useCallback((newBlock) => {
    setBlocks((blocks2) => [...blocks2, newBlock]);
  }, []);
  const removeBlock = React4.useCallback((blockId) => {
    setBlocks((blocks2) => blocks2.filter((block) => block.id !== blockId));
  }, []);
  const updateBlock = React4.useCallback((blockId, data) => {
    setBlocks((blocks2) => blocks2.map((block) => block.id === blockId ? { ...block, data } : block));
  }, []);
  const moveBlockUp = React4.useCallback((blockIndex) => {
    if (blockIndex !== -1 && blockIndex !== 0) {
      setBlocks((blocks2) => [...reorder(blocks2, blockIndex, blockIndex - 1)]);
    }
  }, []);
  const moveBlockDown = React4.useCallback((blockIndex) => {
    if (blockIndex !== -1 && blockIndex < blocks.length) {
      setBlocks((blocks2) => [...reorder(blocks2, blockIndex, blockIndex + 1)]);
    }
  }, []);
  const moveBlockTo = React4.useCallback((blockIndex, to) => {
    if (typeof to === "number" && to <= blocks.length) {
      setBlocks((blocks2) => [...reorder(blocks2, blockIndex, to)]);
    }
  }, []);
  return {
    addBlock,
    removeBlock,
    updateBlock,
    moveBlockUp,
    moveBlockDown,
    moveBlockTo,
    findBlockIndex,
    blockList: blocks
  };
};

// src/blocks/MultiColumns/MultiColumns.tsx
import * as React10 from "react";
import produce from "immer";

// src/components/Block/Block.tsx
import * as React7 from "react";

// src/components/BlockControls/BlockControls.tsx
import * as React6 from "react";
import Tippy from "@tippyjs/react";

// src/hooks/useWindowSize.tsx
import * as React5 from "react";
var useWindowSize = () => {
  const [size, setSize] = React5.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  React5.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
};
var useWindowSize_default = useWindowSize;

// src/components/BlockControls/BlockControls.tsx
var BlockControls = ({
  blockId,
  blockIndex,
  inLayout = false,
  DndDragHandle: DndDragHandle2
}) => {
  const { blockList, removeBlock, moveBlockUp, moveBlockDown } = useBlocksContext();
  const { width } = useWindowSize_default();
  return /* @__PURE__ */ React6.createElement("div", {
    className: "flex"
  }, DndDragHandle2 && /* @__PURE__ */ React6.createElement("div", {
    className: `${!inLayout && width > 768 ? "border-y-2 border-l-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} text-darkCharbon`
  }, /* @__PURE__ */ React6.createElement(DndDragHandle2, null)), /* @__PURE__ */ React6.createElement(Tippy, {
    delay: [700, 0],
    disabled: !inLayout && width > 768,
    content: "Monter l'\xE9l\xE9ment"
  }, /* @__PURE__ */ React6.createElement("button", {
    className: `${!inLayout && width > 768 ? "border-y-2 border-l-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} ${blockIndex === 0 ? "text-gray-400" : "text-darkCharbon"}`,
    disabled: blockIndex === 0,
    onClick: () => moveBlockUp(blockIndex)
  }, /* @__PURE__ */ React6.createElement("i", {
    className: "fa fa-arrow-up"
  }), !inLayout && width > 768 ? " Monter" : "")), /* @__PURE__ */ React6.createElement(Tippy, {
    delay: [700, 0],
    disabled: !inLayout && width > 768,
    content: "Descendre l'\xE9l\xE9ment",
    placement: "bottom"
  }, /* @__PURE__ */ React6.createElement("button", {
    className: `${!inLayout && width > 768 ? "border-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} ${blockIndex === blockList.length - 1 ? "text-gray-400" : "text-darkCharbon"}`,
    disabled: blockIndex === blockList.length - 1,
    onClick: () => moveBlockDown(blockIndex)
  }, /* @__PURE__ */ React6.createElement("i", {
    className: "fa fa-arrow-down"
  }), !inLayout && width > 768 ? " Descendre" : "")), /* @__PURE__ */ React6.createElement(Tippy, {
    delay: [700, 0],
    disabled: !inLayout && width > 768,
    content: "Supprimer l'\xE9l\xE9ment",
    placement: "bottom"
  }, /* @__PURE__ */ React6.createElement("button", {
    className: `${!inLayout && width > 768 ? "border-y-2 border-r-2 border-mediumGrey px-2 md:px-6" : "px-2 sm:px-3"} text-error`,
    onClick: () => removeBlock(blockId)
  }, /* @__PURE__ */ React6.createElement("i", {
    className: "fa fa-trash-alt"
  }), !inLayout && width > 768 ? " Supprimer" : "")));
};
var BlockControls_default = BlockControls;

// src/components/Block/Block.tsx
import Tippy2 from "@tippyjs/react";
var Block = ({
  block,
  inLayout = false,
  className,
  DndDragHandle: DndDragHandle2
}) => {
  const { findBlockIndex, updateBlock } = useBlocksContext();
  const blockIndex = findBlockIndex(block.id);
  const plugins = usePlugins();
  const currentPlugin = plugins.find((plugin) => plugin.type.id === block.type.id);
  if (!currentPlugin) {
    return /* @__PURE__ */ React7.createElement("div", {
      style: {
        backgroundColor: "red",
        padding: "1rem",
        margin: "1rem 0"
      }
    }, /* @__PURE__ */ React7.createElement("div", null, "Unsupported Block"), /* @__PURE__ */ React7.createElement(BlockControls_default, {
      blockIndex,
      blockId: block.id,
      DndDragHandle: DndDragHandle2
    }));
  }
  const Component2 = currentPlugin.component;
  const Icon2 = currentPlugin.icon;
  return /* @__PURE__ */ React7.createElement("div", {
    className: `Block mb-4 py-4 md:py-8 rounded-md ${className} ${inLayout ? "bg-pearlLight shadow-md px-4 md:px-8" : ""}`
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "flex justify-between mb-6"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "flex items-center gap-4"
  }, /* @__PURE__ */ React7.createElement(Icon2, null), /* @__PURE__ */ React7.createElement("div", {
    className: `${inLayout ? "font-bold" : "font-extrabold"} md:text-xl`
  }, currentPlugin.title.fr_FR), /* @__PURE__ */ React7.createElement(Tippy2, {
    content: /* @__PURE__ */ React7.createElement("span", null, currentPlugin?.description?.fr_FR)
  }, /* @__PURE__ */ React7.createElement("i", {
    className: "fa fa-info-circle cursor-help"
  }))), /* @__PURE__ */ React7.createElement(BlockControls_default, {
    blockIndex,
    inLayout,
    blockId: block.id,
    DndDragHandle: DndDragHandle2
  })), /* @__PURE__ */ React7.createElement(Component2, {
    data: block.data,
    onUpdate: (data) => updateBlock(block.id, data)
  }));
};
var Block_default = Block;

// src/hooks/useDragAndDrop.tsx
import Tippy3 from "@tippyjs/react";
import * as React8 from "react";
import {
  DragDropContext,
  Draggable,
  Droppable
} from "react-beautiful-dnd";
var DndDragHandle = ({
  dragHandleProps,
  className
}) => {
  return /* @__PURE__ */ React8.createElement("div", {
    className: `BlockWrapper-dragHandle ${className}`,
    ...dragHandleProps
  }, /* @__PURE__ */ React8.createElement(Tippy3, {
    content: "Faites glisser l'\xE9l\xE9ment pour le d\xE9placer",
    delay: [700, 0]
  }, /* @__PURE__ */ React8.createElement("i", {
    className: "fa fa-bars"
  })));
};
var DndWrapper = ({
  id,
  children,
  onDragEnd,
  wrapperClass = ""
}) => {
  return /* @__PURE__ */ React8.createElement(DragDropContext, {
    onDragEnd
  }, /* @__PURE__ */ React8.createElement(Droppable, {
    droppableId: id
  }, (provided, snapshot) => /* @__PURE__ */ React8.createElement("div", {
    className: `${wrapperClass} relative`,
    ...provided.droppableProps,
    ref: provided.innerRef
  }, children, provided.placeholder, snapshot.isDraggingOver && /* @__PURE__ */ React8.createElement("div", {
    className: "absolute inset-0 opacity-60 bg-pearlMedium"
  }))));
};
var DndWrapElement = ({
  id,
  children,
  index,
  wrapperClass = ""
}) => {
  return /* @__PURE__ */ React8.createElement(Draggable, {
    draggableId: id,
    index
  }, (provided) => /* @__PURE__ */ React8.createElement("div", {
    key: `${id}-wrapper`,
    ref: provided.innerRef,
    className: wrapperClass,
    ...provided.draggableProps
  }, children({
    DndDragHandle: () => /* @__PURE__ */ React8.createElement(DndDragHandle, {
      dragHandleProps: provided.dragHandleProps
    })
  })));
};
var useDragAndDrop = () => ({ DndWrapper, DndWrapElement });
var useDragAndDrop_default = useDragAndDrop;

// src/blocks/MultiColumns/assets/column.svg
import * as React9 from "react";
var SvgColumn = (props) => /* @__PURE__ */ React9.createElement("svg", {
  width: 27,
  height: 7,
  viewBox: "0 0 27 7",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React9.createElement("path", {
  d: "M24.0482 0.551392H3.58632C2.80345 0.551392 2.05265 0.862384 1.49908 1.41595C0.945514 1.96952 0.634521 2.72032 0.634521 3.50319C0.634521 4.28606 0.945514 5.03686 1.49908 5.59043C2.05265 6.144 2.80345 6.45499 3.58632 6.45499H24.0482C24.4359 6.45499 24.8197 6.37864 25.1778 6.2303C25.536 6.08195 25.8614 5.86453 26.1355 5.59043C26.4096 5.31633 26.627 4.99092 26.7753 4.63279C26.9237 4.27467 27 3.89083 27 3.50319C27 3.11555 26.9237 2.73171 26.7753 2.37359C26.627 2.01546 26.4096 1.69005 26.1355 1.41595C25.8614 1.14185 25.536 0.924426 25.1778 0.776084C24.8197 0.627742 24.4359 0.551392 24.0482 0.551392ZM3.58632 5.61878C3.02523 5.61878 2.48712 5.39589 2.09037 4.99914C1.69362 4.60239 1.47073 4.06428 1.47073 3.50319C1.47073 2.9421 1.69362 2.40399 2.09037 2.00724C2.48712 1.61049 3.02523 1.3876 3.58632 1.3876H9.14708V5.61878H3.58632ZM9.98328 5.61878V1.3876H17.6596V5.61878H9.98328ZM24.0482 5.61878H18.4958V1.3876H24.0482C24.6093 1.3876 25.1474 1.61049 25.5442 2.00724C25.9409 2.40399 26.1638 2.9421 26.1638 3.50319C26.1638 4.06428 25.9409 4.60239 25.5442 4.99914C25.1474 5.39589 24.6093 5.61878 24.0482 5.61878Z",
  fill: "#444444"
}));

// src/blocks/MultiColumns/MultiColumns.tsx
var NestedColumn = ({ onUpdate }) => {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper: DndWrapper2, DndWrapElement: DndWrapElement2 } = useDragAndDrop_default();
  React10.useEffect(() => {
    onUpdate(blockList);
  }, [blockList]);
  const onDragEnd = (e) => {
    if (e.destination) {
      moveBlockTo(e.source.index, e.destination.index);
    }
  };
  return /* @__PURE__ */ React10.createElement(React10.Fragment, null, blockList.length > 0 && /* @__PURE__ */ React10.createElement(DndWrapper2, {
    id: "main",
    onDragEnd
  }, blockList.map((block, index) => /* @__PURE__ */ React10.createElement(DndWrapElement2, {
    key: block.id,
    id: block.id,
    index
  }, ({ DndDragHandle: DndDragHandle2 }) => /* @__PURE__ */ React10.createElement(Block_default, {
    DndDragHandle: DndDragHandle2,
    inLayout: true,
    key: index,
    className: "border-l-8 border-l-lighterVermillon",
    block
  })))));
};
var ColumnIcon = ({
  cols,
  currentCol
}) => {
  const { width } = useWindowSize_default();
  return /* @__PURE__ */ React10.createElement("div", {
    className: "h-3 rounded-full flex overflow-hidden border bg-white border-white mr-3",
    style: { minWidth: width > 768 ? "80px" : "60px" }
  }, [...Array(cols)].map((_, index) => /* @__PURE__ */ React10.createElement("div", {
    key: index,
    style: { width: 100 / cols + "%" },
    className: `${index !== cols - 1 && "mr-px"} ${currentCol === index ? "bg-white" : "bg-mediumCharbon"}`
  })));
};
var ColumnComponent = ({
  column,
  index,
  data,
  onUpdate
}) => {
  const [open, setOpen] = React10.useState(true);
  const { width } = useWindowSize_default();
  return /* @__PURE__ */ React10.createElement("div", {
    key: index,
    className: "flex flex-col rounded-md shadow-md border-l-8 border-l-vermillon bg-white"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: `py-2 md:py-4 px-4 md:px-8 bg-mediumCharbon text-white rounded-tr-md ${!open && "rounded-br-md"} flex justify-between items-center`
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "flex items-center"
  }, width > 400 && /* @__PURE__ */ React10.createElement(ColumnIcon, {
    cols: data.length,
    currentCol: index
  }), /* @__PURE__ */ React10.createElement("span", {
    className: "md:text-xl font-bold"
  }, `Colonne #${index + 1}`)), /* @__PURE__ */ React10.createElement("button", {
    onClick: () => setOpen(!open),
    className: "flex"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "bg-lightVermillon px-2 py-1 rounded-l-md"
  }, open ? /* @__PURE__ */ React10.createElement("i", {
    className: "fa fa-chevron-down"
  }) : /* @__PURE__ */ React10.createElement("i", {
    className: "fa fa-chevron-right"
  })), /* @__PURE__ */ React10.createElement("div", {
    className: "bg-vermillon px-2 py-1 rounded-r-md"
  }, open ? "Replier" : "D\xE9plier"))), /* @__PURE__ */ React10.createElement("div", {
    className: `p-4 md:py-8 md:px-11 ${!open ? "hidden" : null}`
  }, /* @__PURE__ */ React10.createElement(BlockContextProvider, {
    defaultBlocks: column
  }, /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(NestedColumn, {
    onUpdate: (columnNewData) => {
      const nextState = produce(data, (draft) => {
        draft[index] = columnNewData;
      });
      onUpdate(nextState);
    }
  }), /* @__PURE__ */ React10.createElement(AddBlock, {
    excludeLayout: ["Column", "Accordion"]
  })))));
};
var MultiColumnsComponent = ({
  data,
  onUpdate
}) => {
  return /* @__PURE__ */ React10.createElement("div", {
    className: "flex flex-col gap-5 justify-between"
  }, data.map((column, index) => {
    return /* @__PURE__ */ React10.createElement(ColumnComponent, {
      key: index,
      data,
      onUpdate,
      column,
      index
    });
  }));
};
var moduleLayout = "Column";
var moduleType = {
  id: "multiColumns"
};
var Column = {
  type: moduleType,
  component: MultiColumnsComponent,
  initialData: [[]],
  layout: moduleLayout,
  icon: SvgColumn,
  title: {
    default: "Columns",
    fr_FR: "Colonnes"
  },
  description: {
    default: "Display blocks in multiple columns",
    fr_FR: "Affiche des blocks dans diff\xE9rentes colonnes"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&multiColumns"
  }
};
var TwoColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "2cols" },
  title: {
    default: "2 Columns",
    fr_FR: "2 Colonnes"
  },
  layout: moduleLayout,
  initialData: [[], []]
};
var ThreeColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "3cols" },
  layout: moduleLayout,
  title: {
    default: "3 Columns",
    fr_FR: "3 Colonnes"
  },
  initialData: [[], [], []]
};
var FourColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "4cols" },
  layout: moduleLayout,
  title: {
    default: "4 Columns",
    fr_FR: "4 Colonnes"
  },
  initialData: [[], [], [], []]
};
var FiveColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "5cols" },
  layout: moduleLayout,
  title: {
    default: "5 Columns",
    fr_FR: "5 Colonnes"
  },
  initialData: [[], [], [], [], []]
};
var SixColumns = {
  ...Column,
  component: MultiColumnsComponent,
  type: { id: "6cols" },
  layout: moduleLayout,
  title: {
    default: "6 Columns",
    fr_FR: "6 Colonnes"
  },
  initialData: [[], [], [], [], [], []]
};

// src/blocks/Accordion/Accordion.tsx
import * as React12 from "react";
import produce2 from "immer";

// src/components/LayoutHeader/LayoutHeader.tsx
var LayoutHeader = ({
  title,
  open,
  setOpen
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `py-2 md:py-4 px-4 md:px-8 bg-mediumCharbon text-white rounded-tr-md ${!open && "rounded-br-md"} flex justify-between items-center`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "md:text-xl font-bold"
  }, title)), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-lightVermillon px-2 py-1 rounded-l-md"
  }, open ? /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-chevron-down"
  }) : /* @__PURE__ */ React.createElement("i", {
    className: "fa fa-chevron-right"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bg-vermillon px-2 py-1 rounded-r-md"
  }, open ? "Replier" : "D\xE9plier")));
};
var LayoutHeader_default = LayoutHeader;

// src/blocks/Accordion/assets/accordion.svg
import * as React11 from "react";
var SvgAccordion = (props) => /* @__PURE__ */ React11.createElement("svg", {
  width: 22,
  height: 18,
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React11.createElement("path", {
  d: "M4.77332 8.72599H16.9231C17.4777 8.75248 18.032 8.66612 18.5523 8.47212C19.0726 8.27812 19.5481 7.98052 19.95 7.59736C20.3519 7.2142 20.6718 6.75345 20.8904 6.24301C21.109 5.73257 21.2217 5.18306 21.2217 4.62778C21.2217 4.0725 21.109 3.523 20.8904 3.01256C20.6718 2.50212 20.3519 2.04136 19.95 1.6582C19.5481 1.27504 19.0726 0.977448 18.5523 0.783448C18.032 0.589449 17.4777 0.503081 16.9231 0.529576H4.77332C3.72027 0.579878 2.72698 1.03362 1.99951 1.79667C1.27204 2.55972 0.866211 3.57352 0.866211 4.62778C0.866211 5.68204 1.27204 6.69585 1.99951 7.4589C2.72698 8.22195 3.72027 8.67569 4.77332 8.72599ZM4.77332 1.43613H16.9231C17.353 1.41276 17.7832 1.47725 18.1873 1.62568C18.5915 1.77411 18.9611 2.00335 19.2737 2.29942C19.5863 2.59548 19.8353 2.95216 20.0055 3.34766C20.1756 3.74316 20.2634 4.16919 20.2634 4.59974C20.2634 5.03029 20.1756 5.45633 20.0055 5.85183C19.8353 6.24733 19.5863 6.60401 19.2737 6.90007C18.9611 7.19614 18.5915 7.42538 18.1873 7.57381C17.7832 7.72224 17.353 7.78673 16.9231 7.76335H4.77332C3.96402 7.71935 3.20235 7.36686 2.64501 6.77839C2.08768 6.18993 1.77706 5.41025 1.77706 4.59974C1.77706 3.78924 2.08768 3.00956 2.64501 2.42109C3.20235 1.83263 3.96402 1.48014 4.77332 1.43613Z",
  fill: "#444444"
}), /* @__PURE__ */ React11.createElement("path", {
  d: "M16.9045 9.7078H4.75477C3.70171 9.7581 2.70843 10.2118 1.98096 10.9749C1.25348 11.7379 0.847656 12.7517 0.847656 13.806C0.847656 14.8603 1.25348 15.8741 1.98096 16.6371C2.70843 17.4002 3.70171 17.8539 4.75477 17.9042H16.9045C17.4592 17.9307 18.0134 17.8443 18.5337 17.6503C19.054 17.4563 19.5295 17.1587 19.9314 16.7756C20.3333 16.3924 20.6532 15.9317 20.8718 15.4212C21.0905 14.9108 21.2032 14.3613 21.2032 13.806C21.2032 13.2507 21.0905 12.7012 20.8718 12.1908C20.6532 11.6803 20.3333 11.2196 19.9314 10.8364C19.5295 10.4533 19.054 10.1557 18.5337 9.96167C18.0134 9.76767 17.4592 9.6813 16.9045 9.7078ZM16.9045 16.9696H4.75477C3.94546 16.9256 3.1838 16.5731 2.62646 15.9847C2.06912 15.3962 1.7585 14.6165 1.7585 13.806C1.7585 12.9955 2.06912 12.2158 2.62646 11.6274C3.1838 11.0389 3.94546 10.6864 4.75477 10.6424H16.9045C17.3344 10.619 17.7646 10.6835 18.1688 10.8319C18.5729 10.9804 18.9426 11.2096 19.2552 11.5057C19.5678 11.8017 19.8168 12.1584 19.9869 12.5539C20.1571 12.9494 20.2448 13.3755 20.2448 13.806C20.2448 14.2366 20.1571 14.6626 19.9869 15.0581C19.8168 15.4536 19.5678 15.8103 19.2552 16.1063C18.9426 16.4024 18.5729 16.6316 18.1688 16.7801C17.7646 16.9285 17.3344 16.993 16.9045 16.9696Z",
  fill: "#444444"
}), /* @__PURE__ */ React11.createElement("path", {
  d: "M14.96 4.99674H16.0348V6.10891C16.0331 6.15947 16.0423 6.20981 16.0616 6.25655C16.0809 6.30329 16.11 6.34536 16.147 6.37995C16.2208 6.45578 16.3215 6.49944 16.4273 6.50144C16.5311 6.49837 16.6305 6.45864 16.7077 6.38929C16.744 6.35228 16.7726 6.30844 16.7918 6.26032C16.8111 6.2122 16.8206 6.16074 16.8199 6.10891V4.99674H17.8947C18.0005 4.99474 18.1012 4.95108 18.175 4.87525C18.211 4.83996 18.2395 4.79777 18.2588 4.75119C18.2781 4.70461 18.2877 4.65462 18.2872 4.60421C18.2885 4.55232 18.2792 4.50071 18.2599 4.45251C18.2406 4.40431 18.2117 4.36054 18.175 4.32384C18.1012 4.248 18.0005 4.20434 17.8947 4.20234H16.8199V3.12755C16.8206 3.07573 16.8111 3.02427 16.7918 2.97615C16.7726 2.92802 16.744 2.88419 16.7077 2.84717C16.6297 2.78007 16.5302 2.74316 16.4273 2.74316C16.3244 2.74316 16.225 2.78007 16.147 2.84717C16.1107 2.88419 16.0821 2.92802 16.0628 2.97615C16.0436 3.02427 16.0341 3.07573 16.0348 3.12755V4.23972H14.96C14.9075 4.2402 14.8557 4.2512 14.8075 4.27207C14.7594 4.29294 14.7159 4.32325 14.6796 4.36122C14.6429 4.39792 14.6141 4.4417 14.5948 4.4899C14.5755 4.53809 14.5662 4.5897 14.5675 4.6416C14.567 4.692 14.5766 4.742 14.5959 4.78857C14.6152 4.83515 14.6436 4.87735 14.6796 4.91263C14.7588 4.97577 14.8592 5.00591 14.96 4.99674Z",
  fill: "#444444"
}), /* @__PURE__ */ React11.createElement("path", {
  d: "M17.8941 13.4359H16.8193V12.3611C16.8173 12.2553 16.7737 12.1545 16.6978 12.0807C16.6223 12.0124 16.524 11.9746 16.4221 11.9746C16.3203 11.9746 16.222 12.0124 16.1464 12.0807C16.1102 12.1177 16.0816 12.1616 16.0623 12.2097C16.0431 12.2578 16.0335 12.3093 16.0343 12.3611V13.4359H14.9501C14.8482 13.4425 14.7522 13.486 14.6799 13.5582C14.6077 13.6304 14.5642 13.7265 14.5576 13.8284C14.559 13.9325 14.599 14.0324 14.6698 14.1088C14.7068 14.1451 14.7506 14.1737 14.7987 14.1929C14.8469 14.2122 14.8983 14.2217 14.9501 14.221H16.0343V15.3051C16.0337 15.3555 16.0434 15.4055 16.0627 15.4521C16.0819 15.4986 16.1104 15.5408 16.1464 15.5761C16.1827 15.6141 16.2262 15.6444 16.2743 15.6653C16.3225 15.6861 16.3743 15.6971 16.4268 15.6976C16.5288 15.691 16.6248 15.6475 16.697 15.5753C16.7693 15.5031 16.8127 15.407 16.8193 15.3051V14.221H17.8941C17.946 14.2217 17.9974 14.2122 18.0455 14.1929C18.0937 14.1737 18.1375 14.1451 18.1745 14.1088C18.2453 14.0324 18.2853 13.9325 18.2867 13.8284C18.286 13.7404 18.2564 13.655 18.2025 13.5854C18.1653 13.5393 18.1184 13.502 18.0651 13.4761C18.0118 13.4503 17.9534 13.4365 17.8941 13.4359Z",
  fill: "#444444"
}));

// src/blocks/Accordion/Accordion.tsx
var NestedBlocks = ({ onUpdate }) => {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper: DndWrapper2, DndWrapElement: DndWrapElement2 } = useDragAndDrop_default();
  React12.useEffect(() => {
    onUpdate(blockList);
  }, [blockList]);
  const onDragEnd = (e) => {
    if (e.destination) {
      moveBlockTo(e.source.index, e.destination.index);
    }
  };
  return /* @__PURE__ */ React12.createElement("div", null, blockList.length > 0 && /* @__PURE__ */ React12.createElement(DndWrapper2, {
    id: "main",
    onDragEnd
  }, blockList.map((block, index) => /* @__PURE__ */ React12.createElement(DndWrapElement2, {
    key: block.id,
    id: block.id,
    index
  }, ({ DndDragHandle: DndDragHandle2 }) => /* @__PURE__ */ React12.createElement(Block_default, {
    DndDragHandle: DndDragHandle2,
    inLayout: true,
    key: index,
    className: "border-l-8 border-l-lighterVermillon",
    block
  })))));
};
var AccordionContentComponent = ({
  blocks,
  index,
  data,
  onUpdate
}) => {
  const [open, setOpen] = React12.useState(true);
  return /* @__PURE__ */ React12.createElement("div", {
    key: index,
    className: "flex flex-col rounded-md shadow-md border-l-8 border-l-vermillon bg-white"
  }, /* @__PURE__ */ React12.createElement(LayoutHeader_default, {
    title: "Accord\xE9on",
    open,
    setOpen
  }), /* @__PURE__ */ React12.createElement("div", {
    className: `p-4 md:py-8 md:px-11 ${!open ? "hidden" : null}`
  }, /* @__PURE__ */ React12.createElement(BlockContextProvider, {
    defaultBlocks: blocks
  }, /* @__PURE__ */ React12.createElement(React12.Fragment, null, /* @__PURE__ */ React12.createElement(NestedBlocks, {
    onUpdate: (columnNewData) => {
      const nextState = produce2(data, (draft) => {
        draft[index] = columnNewData;
      });
      onUpdate(nextState);
    }
  }), /* @__PURE__ */ React12.createElement(AddBlock, {
    excludeLayout: ["Column", "Accordion"]
  })))));
};
var AccordionComponent = ({
  data,
  onUpdate
}) => {
  return /* @__PURE__ */ React12.createElement("div", {
    className: "flex flex-col gap-5 justify-between"
  }, data.map((blocks, index) => {
    return /* @__PURE__ */ React12.createElement(AccordionContentComponent, {
      key: index,
      data,
      onUpdate,
      blocks,
      index
    });
  }));
};
var moduleLayout2 = "Accordion";
var moduleType2 = {
  id: "Accordion"
};
var Accordion = {
  type: moduleType2,
  component: AccordionComponent,
  initialData: [[]],
  layout: moduleLayout2,
  title: {
    default: "Accordion",
    fr_FR: "Accord\xE9on"
  },
  icon: SvgAccordion,
  description: {
    default: "Display blocks in accordion",
    fr_FR: "Affiche des blocs en accord\xE9on"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&multiColumns"
  }
};
var Accordion_default = Accordion;

// src/blocks/Button/Button.tsx
import * as React15 from "react";

// src/components/Input/Input.tsx
import React13 from "react";
var Input = ({
  value,
  onChange,
  className,
  placeholder,
  icon,
  iconAlignment = "right",
  isValid,
  label,
  ...props
}) => {
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, label && /* @__PURE__ */ React13.createElement("label", {
    className: "text-sm md:text-base"
  }, label), /* @__PURE__ */ React13.createElement("div", {
    className: "relative w-full flex flex-wrap items-stretch"
  }, /* @__PURE__ */ React13.createElement("input", {
    value,
    onChange,
    className: `relative w-full rounded-md shadow outline-none placeholder-mediumGrey ${iconAlignment === "left" && isValid ? "px-10" : iconAlignment === "left" ? "pl-10" : ""} ${className}`,
    placeholder,
    ...props
  }), icon && /* @__PURE__ */ React13.createElement(Icon, {
    className: iconAlignment === "right" ? "right-0" : "left-0",
    icon
  }), icon && isValid && iconAlignment === "left" && /* @__PURE__ */ React13.createElement(Icon, {
    className: "right-0",
    icon: /* @__PURE__ */ React13.createElement("i", {
      className: "fas fa-check text-greenDark"
    })
  })));
};
var Icon = ({ icon, className }) => {
  return /* @__PURE__ */ React13.createElement("span", {
    className: `absolute py-1 px-5 w-8 h-full leading-snug rounded text-base font-normal text-center flex items-center justify-center ${className}`
  }, icon);
};
var Input_default = Input;

// src/blocks/Button/assets/button.svg
import * as React14 from "react";
var SvgButton = (props) => /* @__PURE__ */ React14.createElement("svg", {
  width: 25,
  height: 17,
  viewBox: "0 0 25 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React14.createElement("path", {
  d: "M22.1277 8.32771C23.0244 8.08057 23.809 7.47447 24.3331 6.62408C24.8572 5.77368 25.0844 4.73797 24.9718 3.71286C24.8592 2.68775 24.4146 1.74434 23.722 1.0611C23.0294 0.377865 22.137 0.00217757 21.2135 0.0051124H3.97091C3.45883 -0.0230592 2.94696 0.0654142 2.46637 0.265164C1.98579 0.464914 1.5465 0.771777 1.17516 1.16713C0.803825 1.56249 0.508183 2.03809 0.306174 2.56509C0.104165 3.09209 0 3.65949 0 4.23287C0 4.80625 0.104165 5.37365 0.306174 5.90065C0.508183 6.42765 0.803825 6.90325 1.17516 7.29861C1.5465 7.69396 1.98579 8.00083 2.46637 8.20058C2.94696 8.40033 3.45883 8.4888 3.97091 8.46063H17.7851V14.5952C17.7737 14.719 17.7986 14.8436 17.8562 14.9501C17.9138 15.0566 18.0009 15.1393 18.1042 15.1855C18.2075 15.2317 18.3215 15.239 18.4289 15.2063C18.5363 15.1736 18.6312 15.1026 18.6993 15.0042L20.7106 12.7446L22.1277 16.6503C22.1528 16.7189 22.1897 16.7813 22.2364 16.8339C22.2831 16.8865 22.3386 16.9282 22.3998 16.9567C22.461 16.9852 22.5266 17 22.5928 17C22.6591 17.0001 22.7247 16.9855 22.7859 16.957C22.9106 16.8981 23.0099 16.7873 23.0628 16.648C23.1156 16.5087 23.118 16.3519 23.0694 16.2107L21.6157 12.305H24.4773C24.5774 12.3067 24.6755 12.2744 24.7588 12.2123C24.8421 12.1502 24.9065 12.0613 24.9436 11.9573C24.9836 11.8531 24.9946 11.7378 24.975 11.6265C24.9555 11.5152 24.9062 11.4131 24.8338 11.3337L22.1277 8.32771ZM3.96177 7.30528C3.23436 7.30528 2.53674 6.98212 2.02238 6.40689C1.50802 5.83166 1.21905 5.05148 1.21905 4.23798C1.21905 3.42448 1.50802 2.64431 2.02238 2.06908C2.53674 1.49385 3.23436 1.17069 3.96177 1.17069H21.2135C21.5736 1.16733 21.9309 1.24334 22.2648 1.39439C22.5987 1.54543 22.9027 1.76855 23.1595 2.051C23.4164 2.33345 23.6209 2.66971 23.7615 3.04056C23.9021 3.41142 23.976 3.80962 23.979 4.21242C23.982 4.61522 23.9141 5.01474 23.779 5.38817C23.6439 5.7616 23.4444 6.10162 23.1919 6.38881C22.9393 6.67601 22.6386 6.90477 22.307 7.06201C21.9754 7.21926 21.6193 7.30192 21.2592 7.30528L18.6627 4.43224C18.5946 4.3338 18.4997 4.26284 18.3923 4.23013C18.2849 4.19742 18.171 4.20473 18.0676 4.25095C17.9643 4.29718 17.8772 4.3798 17.8197 4.48631C17.7621 4.59282 17.7371 4.71741 17.7485 4.84122V7.3155L3.96177 7.30528ZM20.8569 11.1701C20.7908 11.1698 20.7252 11.1841 20.6641 11.2121C20.6029 11.2402 20.5472 11.2815 20.5003 11.3337L18.809 13.2252V6.21128L23.2431 11.1701H20.8569Z",
  fill: "#333333"
}));

// src/blocks/Button/Button.tsx
var BlockButtonComponent = ({
  data,
  onUpdate
}) => {
  const [label, setLabel] = React15.useState("");
  const [url, setUrl] = React15.useState("");
  React15.useEffect(() => {
    if (data.url) {
      setUrl(data.url);
    }
    if (data.label) {
      setLabel(data.label);
    }
  }, [data]);
  const onChangeLabel = (e) => {
    setLabel(e.target.value);
  };
  const onBlurLabel = (e) => {
    if (e.target.value) {
      onUpdate({ ...data, label: e.target.value });
    }
  };
  const onChangeUrl = (e) => {
    setUrl(e.target.value);
  };
  const onBlurUrl = (e) => {
    if (e.target.value) {
      onUpdate({ ...data, url: e.target.value });
    }
  };
  return /* @__PURE__ */ React15.createElement("div", {
    className: "BlockButton"
  }, /* @__PURE__ */ React15.createElement("div", {
    className: "BlockButton-field"
  }, /* @__PURE__ */ React15.createElement(Input_default, {
    type: "text",
    name: "field-text",
    id: "field-text",
    placeholder: "Indiquez le texte du bouton",
    value: label,
    onChange: onChangeLabel,
    onBlur: onBlurLabel,
    label: "Texte du bouton"
  })), /* @__PURE__ */ React15.createElement("div", {
    className: "BlockButton-field mt-4"
  }, /* @__PURE__ */ React15.createElement(Input_default, {
    type: "text",
    name: "field-url",
    id: "field-url",
    placeholder: "Indiquez le lien du bouton",
    value: url,
    icon: /* @__PURE__ */ React15.createElement("i", {
      className: "fa fa-link text-darkCharbon"
    }),
    iconAlignment: "left",
    onChange: onChangeUrl,
    onBlur: onBlurUrl,
    label: "URL du bouton"
  })));
};
var initialData = {
  label: "",
  url: ""
};
var moduleType3 = {
  id: "blockButton"
};
var blockButton = {
  type: moduleType3,
  component: BlockButtonComponent,
  initialData,
  title: {
    default: "Button",
    fr_FR: "Bouton"
  },
  icon: SvgButton,
  description: {
    default: "Link to an URL",
    fr_FR: "Lien vers une URL"
  }
};
var Button_default = blockButton;

// src/blocks/Image/Image.tsx
import * as React18 from "react";

// src/blocks/Image/assets/mediatheque.svg
import * as React16 from "react";
var SvgMediatheque = (props) => /* @__PURE__ */ React16.createElement("svg", {
  width: 28,
  height: 26,
  viewBox: "0 0 28 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React16.createElement("path", {
  d: "M7.25281 20.4814C5.42678 20.4814 3.80262 19.3023 3.21296 17.5469L3.17304 17.4146C3.03389 16.9499 2.97572 16.5588 2.97572 16.1677V8.32471L0.20873 17.6401C-0.147124 19.0102 0.663812 20.4308 2.0245 20.8093L19.6609 25.5728C19.8811 25.6303 20.1012 25.6579 20.3179 25.6579C21.4539 25.6579 22.4918 24.8976 22.7826 23.7771L23.8103 20.4814H7.25281Z",
  fill: "#222222"
}), /* @__PURE__ */ React16.createElement("path", {
  d: "M10.3885 8.40309C11.6466 8.40309 12.6696 7.37124 12.6696 6.10242C12.6696 4.83361 11.6466 3.80176 10.3885 3.80176C9.1305 3.80176 8.10742 4.83361 8.10742 6.10242C8.10742 7.37124 9.1305 8.40309 10.3885 8.40309Z",
  fill: "#222222"
}), /* @__PURE__ */ React16.createElement("path", {
  d: "M24.6453 0.350098H7.53694C5.96525 0.350098 4.68555 1.64077 4.68555 3.22593V15.8796C4.68555 17.4648 5.96525 18.7554 7.53694 18.7554H24.6453C26.217 18.7554 27.4967 17.4648 27.4967 15.8796V3.22593C27.4967 1.64077 26.217 0.350098 24.6453 0.350098ZM7.53694 2.65076H24.6453C24.9601 2.65076 25.2156 2.90844 25.2156 3.22593V11.3921L21.6126 7.15202C21.2305 6.69994 20.6773 6.45837 20.0831 6.44456C19.4923 6.44801 18.938 6.71259 18.5593 7.17042L14.3233 12.2986L12.9432 10.9102C12.163 10.1233 10.8936 10.1233 10.1146 10.9102L6.96666 14.0839V3.22593C6.96666 2.90844 7.22215 2.65076 7.53694 2.65076Z",
  fill: "#222222"
}));

// src/blocks/Image/assets/image.svg
import * as React17 from "react";
var SvgImage = (props) => /* @__PURE__ */ React17.createElement("svg", {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React17.createElement("path", {
  d: "M19.86 15.26V2.47C19.8574 1.814 19.5949 1.18577 19.1301 0.722836C18.6653 0.259906 18.036 -5.33299e-06 17.38 0H2.5C2.16847 0.00126416 1.84048 0.068193 1.53497 0.196922C1.22945 0.32565 0.952464 0.513628 0.72 0.75C0.268046 1.20961 0.0102384 1.82548 1.31138e-09 2.47V17.38C-1.06443e-05 17.7074 0.0647931 18.0315 0.190674 18.3337C0.316554 18.6359 0.50102 18.9102 0.733432 19.1407C0.965844 19.3713 1.2416 19.5535 1.5448 19.677C1.848 19.8004 2.17264 19.8626 2.5 19.86H17.38C18.0369 19.8574 18.6662 19.5952 19.1307 19.1307C19.5952 18.6662 19.8574 18.0369 19.86 17.38V15.38V15.25V15.26ZM15.61 13.04L18.7 15.52L18.79 15.6V17.38C18.7821 17.7478 18.6298 18.0978 18.3659 18.3541C18.1021 18.6105 17.7479 18.7527 17.38 18.75H2.5C2.31454 18.7508 2.13075 18.715 1.95916 18.6446C1.78756 18.5743 1.63153 18.4707 1.5 18.34C1.36742 18.2098 1.26271 18.0541 1.19222 17.8821C1.12174 17.7102 1.08696 17.5258 1.09 17.34V16.47L1.18 16.39L6.25 12.14C6.39167 12.0175 6.5727 11.95 6.76 11.95C6.95222 11.9494 7.13771 12.0208 7.28 12.15L9.8 14.75C10.1157 15.0571 10.5305 15.2414 10.97 15.27C11.4102 15.304 11.8476 15.176 12.2 14.91L14.66 13C14.7961 12.8988 14.9604 12.8428 15.13 12.84C15.2999 12.8407 15.4649 12.8969 15.6 13L15.61 13.04ZM18.78 13.67V14.19L18.38 13.86L16.26 12.18C15.9416 11.9269 15.5468 11.7891 15.14 11.7891C14.7332 11.7891 14.3384 11.9269 14.02 12.18L11.56 13.97C11.4214 14.0831 11.2489 14.1465 11.07 14.15C10.8861 14.1476 10.7091 14.0803 10.57 13.96L8.02 11.44C7.6917 11.1055 7.24813 10.9089 6.77983 10.8904C6.31152 10.8718 5.85377 11.0326 5.5 11.34L1.5 14.75L1.09 15.1V2.47C1.09 2.28531 1.12654 2.10243 1.19752 1.93192C1.2685 1.76141 1.37252 1.60663 1.50358 1.4765C1.63464 1.34636 1.79016 1.24345 1.96117 1.17368C2.13218 1.10392 2.31531 1.06868 2.5 1.07H17.38C17.5658 1.06696 17.7502 1.10174 17.9221 1.17222C18.0941 1.24271 18.2498 1.34742 18.38 1.48C18.5107 1.61153 18.6143 1.76756 18.6846 1.93916C18.755 2.11075 18.7908 2.29454 18.79 2.48L18.78 13.67Z",
  fill: "#333333"
}), /* @__PURE__ */ React17.createElement("path", {
  d: "M14.0707 4.37993C13.5919 4.18009 13.0647 4.12687 12.5557 4.22701C12.0467 4.32715 11.5788 4.57613 11.2115 4.94241C10.8441 5.30869 10.5938 5.77578 10.4922 6.28449C10.3905 6.7932 10.4422 7.32062 10.6407 7.79993C10.8466 8.2856 11.1953 8.69714 11.6407 8.97992C12.1453 9.31662 12.7511 9.46778 13.3547 9.4076C13.9584 9.34742 14.5224 9.07963 14.9507 8.64992C15.2546 8.34523 15.4788 7.97034 15.6035 7.5584C15.7281 7.14646 15.7494 6.71016 15.6654 6.28805C15.5813 5.86595 15.3946 5.47104 15.1217 5.13824C14.8488 4.80544 14.4981 4.545 14.1007 4.37993H14.0707ZM14.3507 7.65992C14.1855 7.91702 13.9443 8.11626 13.6607 8.22992C13.3763 8.34874 13.0629 8.38007 12.7607 8.31992C12.4597 8.25811 12.1824 8.11251 11.9607 7.89992C11.7994 7.73572 11.6763 7.53809 11.5999 7.32101C11.5235 7.10393 11.4958 6.87271 11.5187 6.64373C11.5416 6.41475 11.6146 6.1936 11.7324 5.99594C11.8502 5.79828 12.0101 5.62895 12.2007 5.49993C12.4548 5.32915 12.7544 5.23857 13.0607 5.23992C13.4736 5.24265 13.8687 5.40791 14.1607 5.69992C14.3062 5.84383 14.4217 6.01513 14.5007 6.20392C14.5796 6.39272 14.6204 6.59528 14.6207 6.79993C14.6216 7.10759 14.5273 7.40801 14.3507 7.65992Z",
  fill: "#333333"
}));

// src/blocks/Image/Image.tsx
var BlockImageComponent = ({}) => {
  return /* @__PURE__ */ React18.createElement("div", {
    className: "BlockImage flex lg:flex-nowrap flex-wrap justify-center w-full gap-5 lg:px-4"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "border border-dotted border-greyDark rounded-md w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center py-12 px-6 text-center"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "rounded-full bg-darkCharbon text-white px-2.5 py-1"
  }, /* @__PURE__ */ React18.createElement("i", {
    className: "fa fa-arrow-down"
  })), /* @__PURE__ */ React18.createElement("button", {
    className: "font-semibold w-max border-2 border-vermillon text-vermillon hover:bg-vermillon hover:text-white px-2 md:px-4 md:py-1 rounded-md"
  }, "T\xE9l\xE9charger une image"), /* @__PURE__ */ React18.createElement("span", null, "ou d\xE9posez une image")), /* @__PURE__ */ React18.createElement("div", {
    className: "bg-white rounded-md w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center py-12 text-center"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "rounded-full bg-pearlLight text-white p-3"
  }, /* @__PURE__ */ React18.createElement(SvgMediatheque, null)), /* @__PURE__ */ React18.createElement("span", null, "S\xE9lectionnez une image depuis votre m\xE9diath\xE8que")));
};
var initialData2 = {
  url: null,
  id: null,
  title: "",
  fileName: ""
};
var moduleType4 = {
  id: "blockImage"
};
var blockImage = {
  type: moduleType4,
  component: BlockImageComponent,
  initialData: initialData2,
  title: {
    default: "Image",
    fr_FR: "Image"
  },
  description: {
    default: "Display an image",
    fr_FR: "Affiche une image"
  },
  icon: SvgImage,
  image: {
    default: ""
  }
};
var Image_default = blockImage;

// src/blocks/Text/Text.tsx
import * as React20 from "react";

// src/blocks/Text/assets/text.svg
import * as React19 from "react";
var SvgText = (props) => /* @__PURE__ */ React19.createElement("svg", {
  width: 15,
  height: 15,
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React19.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.92 12.67H9.5C9.70952 12.67 9.91046 12.7532 10.0586 12.9014C10.2068 13.0495 10.29 13.2505 10.29 13.46C10.29 13.6695 10.2068 13.8705 10.0586 14.0186C9.91046 14.1668 9.70952 14.25 9.5 14.25H4.75C4.54048 14.25 4.33954 14.1668 4.19139 14.0186C4.04323 13.8705 3.96 13.6695 3.96 13.46C3.96 13.2505 4.04323 13.0495 4.19139 12.9014C4.33954 12.7532 4.54048 12.67 4.75 12.67H6.33V1.58H1.58V3.17C1.58 3.37952 1.49677 3.58046 1.34861 3.72861C1.20046 3.87677 0.999521 3.96 0.79 3.96C0.580479 3.96 0.379539 3.87677 0.231386 3.72861C0.0832319 3.58046 0 3.37952 0 3.17V0.79C0 0.580479 0.0832319 0.379539 0.231386 0.231386C0.379539 0.0832319 0.580479 0 0.79 0H13.5C13.7095 0 13.9105 0.0832319 14.0586 0.231386C14.2068 0.379539 14.29 0.580479 14.29 0.79V3.17C14.29 3.37952 14.2068 3.58046 14.0586 3.72861C13.9105 3.87677 13.7095 3.96 13.5 3.96C13.2905 3.96 13.0895 3.87677 12.9414 3.72861C12.7932 3.58046 12.71 3.37952 12.71 3.17V1.58H7.92V12.67Z",
  fill: "#333333"
}));

// src/blocks/Text/Text.tsx
function BlockTextComponent({
  data,
  onUpdate
}) {
  const [localData, setData] = React20.useState(data.value);
  React20.useEffect(() => {
    setData(data.value);
  }, [data]);
  const onChangeText = (e) => {
    setData(e.target.value);
  };
  const onBlurText = (e) => {
    if (e.target.value) {
      onUpdate({
        value: e.target.value
      });
    }
  };
  return /* @__PURE__ */ React20.createElement("div", {
    className: "BlockText"
  }, data !== void 0 ? /* @__PURE__ */ React20.createElement("textarea", {
    className: "w-full rounded-md",
    placeholder: "Votre texte ici",
    rows: 5,
    onChange: onChangeText,
    onBlur: onBlurText,
    defaultValue: localData
  }) : null);
}
var initialData3 = {
  value: ""
};
var moduleType5 = {
  id: "blockText"
};
var Blocktext = {
  type: moduleType5,
  component: BlockTextComponent,
  initialData: initialData3,
  title: {
    default: "Text",
    fr_FR: "Texte"
  },
  icon: SvgText,
  description: {
    default: "Display a formated text",
    fr_FR: "Affiche un texte mis en forme"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockText"
  }
};
var Text_default = Blocktext;

// src/blocks/List/List.tsx
import React22 from "react";

// src/blocks/List/assets/accordion.svg
import * as React21 from "react";
var SvgAccordion2 = (props) => /* @__PURE__ */ React21.createElement("svg", {
  width: 22,
  height: 18,
  viewBox: "0 0 22 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React21.createElement("path", {
  d: "M4.77332 8.72599H16.9231C17.4777 8.75248 18.032 8.66612 18.5523 8.47212C19.0726 8.27812 19.5481 7.98052 19.95 7.59736C20.3519 7.2142 20.6718 6.75345 20.8904 6.24301C21.109 5.73257 21.2217 5.18306 21.2217 4.62778C21.2217 4.0725 21.109 3.523 20.8904 3.01256C20.6718 2.50212 20.3519 2.04136 19.95 1.6582C19.5481 1.27504 19.0726 0.977448 18.5523 0.783448C18.032 0.589449 17.4777 0.503081 16.9231 0.529576H4.77332C3.72027 0.579878 2.72698 1.03362 1.99951 1.79667C1.27204 2.55972 0.866211 3.57352 0.866211 4.62778C0.866211 5.68204 1.27204 6.69585 1.99951 7.4589C2.72698 8.22195 3.72027 8.67569 4.77332 8.72599ZM4.77332 1.43613H16.9231C17.353 1.41276 17.7832 1.47725 18.1873 1.62568C18.5915 1.77411 18.9611 2.00335 19.2737 2.29942C19.5863 2.59548 19.8353 2.95216 20.0055 3.34766C20.1756 3.74316 20.2634 4.16919 20.2634 4.59974C20.2634 5.03029 20.1756 5.45633 20.0055 5.85183C19.8353 6.24733 19.5863 6.60401 19.2737 6.90007C18.9611 7.19614 18.5915 7.42538 18.1873 7.57381C17.7832 7.72224 17.353 7.78673 16.9231 7.76335H4.77332C3.96402 7.71935 3.20235 7.36686 2.64501 6.77839C2.08768 6.18993 1.77706 5.41025 1.77706 4.59974C1.77706 3.78924 2.08768 3.00956 2.64501 2.42109C3.20235 1.83263 3.96402 1.48014 4.77332 1.43613Z",
  fill: "#444444"
}), /* @__PURE__ */ React21.createElement("path", {
  d: "M16.9045 9.7078H4.75477C3.70171 9.7581 2.70843 10.2118 1.98096 10.9749C1.25348 11.7379 0.847656 12.7517 0.847656 13.806C0.847656 14.8603 1.25348 15.8741 1.98096 16.6371C2.70843 17.4002 3.70171 17.8539 4.75477 17.9042H16.9045C17.4592 17.9307 18.0134 17.8443 18.5337 17.6503C19.054 17.4563 19.5295 17.1587 19.9314 16.7756C20.3333 16.3924 20.6532 15.9317 20.8718 15.4212C21.0905 14.9108 21.2032 14.3613 21.2032 13.806C21.2032 13.2507 21.0905 12.7012 20.8718 12.1908C20.6532 11.6803 20.3333 11.2196 19.9314 10.8364C19.5295 10.4533 19.054 10.1557 18.5337 9.96167C18.0134 9.76767 17.4592 9.6813 16.9045 9.7078ZM16.9045 16.9696H4.75477C3.94546 16.9256 3.1838 16.5731 2.62646 15.9847C2.06912 15.3962 1.7585 14.6165 1.7585 13.806C1.7585 12.9955 2.06912 12.2158 2.62646 11.6274C3.1838 11.0389 3.94546 10.6864 4.75477 10.6424H16.9045C17.3344 10.619 17.7646 10.6835 18.1688 10.8319C18.5729 10.9804 18.9426 11.2096 19.2552 11.5057C19.5678 11.8017 19.8168 12.1584 19.9869 12.5539C20.1571 12.9494 20.2448 13.3755 20.2448 13.806C20.2448 14.2366 20.1571 14.6626 19.9869 15.0581C19.8168 15.4536 19.5678 15.8103 19.2552 16.1063C18.9426 16.4024 18.5729 16.6316 18.1688 16.7801C17.7646 16.9285 17.3344 16.993 16.9045 16.9696Z",
  fill: "#444444"
}), /* @__PURE__ */ React21.createElement("path", {
  d: "M14.96 4.99674H16.0348V6.10891C16.0331 6.15947 16.0423 6.20981 16.0616 6.25655C16.0809 6.30329 16.11 6.34536 16.147 6.37995C16.2208 6.45578 16.3215 6.49944 16.4273 6.50144C16.5311 6.49837 16.6305 6.45864 16.7077 6.38929C16.744 6.35228 16.7726 6.30844 16.7918 6.26032C16.8111 6.2122 16.8206 6.16074 16.8199 6.10891V4.99674H17.8947C18.0005 4.99474 18.1012 4.95108 18.175 4.87525C18.211 4.83996 18.2395 4.79777 18.2588 4.75119C18.2781 4.70461 18.2877 4.65462 18.2872 4.60421C18.2885 4.55232 18.2792 4.50071 18.2599 4.45251C18.2406 4.40431 18.2117 4.36054 18.175 4.32384C18.1012 4.248 18.0005 4.20434 17.8947 4.20234H16.8199V3.12755C16.8206 3.07573 16.8111 3.02427 16.7918 2.97615C16.7726 2.92802 16.744 2.88419 16.7077 2.84717C16.6297 2.78007 16.5302 2.74316 16.4273 2.74316C16.3244 2.74316 16.225 2.78007 16.147 2.84717C16.1107 2.88419 16.0821 2.92802 16.0628 2.97615C16.0436 3.02427 16.0341 3.07573 16.0348 3.12755V4.23972H14.96C14.9075 4.2402 14.8557 4.2512 14.8075 4.27207C14.7594 4.29294 14.7159 4.32325 14.6796 4.36122C14.6429 4.39792 14.6141 4.4417 14.5948 4.4899C14.5755 4.53809 14.5662 4.5897 14.5675 4.6416C14.567 4.692 14.5766 4.742 14.5959 4.78857C14.6152 4.83515 14.6436 4.87735 14.6796 4.91263C14.7588 4.97577 14.8592 5.00591 14.96 4.99674Z",
  fill: "#444444"
}), /* @__PURE__ */ React21.createElement("path", {
  d: "M17.8941 13.4359H16.8193V12.3611C16.8173 12.2553 16.7737 12.1545 16.6978 12.0807C16.6223 12.0124 16.524 11.9746 16.4221 11.9746C16.3203 11.9746 16.222 12.0124 16.1464 12.0807C16.1102 12.1177 16.0816 12.1616 16.0623 12.2097C16.0431 12.2578 16.0335 12.3093 16.0343 12.3611V13.4359H14.9501C14.8482 13.4425 14.7522 13.486 14.6799 13.5582C14.6077 13.6304 14.5642 13.7265 14.5576 13.8284C14.559 13.9325 14.599 14.0324 14.6698 14.1088C14.7068 14.1451 14.7506 14.1737 14.7987 14.1929C14.8469 14.2122 14.8983 14.2217 14.9501 14.221H16.0343V15.3051C16.0337 15.3555 16.0434 15.4055 16.0627 15.4521C16.0819 15.4986 16.1104 15.5408 16.1464 15.5761C16.1827 15.6141 16.2262 15.6444 16.2743 15.6653C16.3225 15.6861 16.3743 15.6971 16.4268 15.6976C16.5288 15.691 16.6248 15.6475 16.697 15.5753C16.7693 15.5031 16.8127 15.407 16.8193 15.3051V14.221H17.8941C17.946 14.2217 17.9974 14.2122 18.0455 14.1929C18.0937 14.1737 18.1375 14.1451 18.1745 14.1088C18.2453 14.0324 18.2853 13.9325 18.2867 13.8284C18.286 13.7404 18.2564 13.655 18.2025 13.5854C18.1653 13.5393 18.1184 13.502 18.0651 13.4761C18.0118 13.4503 17.9534 13.4365 17.8941 13.4359Z",
  fill: "#444444"
}));

// src/blocks/List/List.tsx
import { nanoid } from "nanoid";
var types = [
  {
    label: "Ordered",
    value: "ol" /* Ordered */
  },
  {
    label: "Unordered",
    value: "ul" /* Unordered */
  }
];
function BlockListComponent({
  data,
  onUpdate
}) {
  const [listItems, setListItems] = React22.useState([]);
  React22.useEffect(() => {
    if (data.values) {
      setListItems(data.values.map((value) => ({ id: nanoid(), value })));
    }
  }, []);
  const onChangeType = (e) => {
    onUpdate({ ...data, type: e.target.value });
  };
  const addLine = () => {
    const newListItems = [...listItems, { id: nanoid(), value: "" }];
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };
  const deleteLine = (id) => {
    const newListItems = listItems.filter(({ id: currentId }) => currentId !== id);
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };
  const handleUpdateText = (listItem, textData) => {
    const newListItems = listItems.map(({ id, value }) => ({
      id,
      value: id === listItem.id ? textData.value : value
    }));
    setListItems(newListItems);
    onUpdate({
      ...data,
      values: newListItems.map(({ value }) => value)
    });
  };
  return /* @__PURE__ */ React22.createElement("div", {
    className: "BlockList"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "BlockList-config flex flex-col w-1/3 mb-4"
  }, /* @__PURE__ */ React22.createElement("label", {
    htmlFor: "title-level"
  }, "Type"), /* @__PURE__ */ React22.createElement("select", {
    name: "title-level",
    id: "title-level",
    className: "rounded-md border p-2",
    onChange: onChangeType,
    value: data.type
  }, types.map(({ label, value }) => /* @__PURE__ */ React22.createElement("option", {
    key: value,
    value
  }, label)))), /* @__PURE__ */ React22.createElement("div", {
    className: "BlockList-list flex flex-col gap-4"
  }, listItems.map((listItem) => /* @__PURE__ */ React22.createElement("div", {
    className: "BlockList-line bg-white p-4 border-l-8 border-vermillon rounded-md",
    key: listItem.id
  }, /* @__PURE__ */ React22.createElement(Text_default.component, {
    id: `text-${listItem.id}`,
    data: { value: listItem.value },
    onUpdate: (textData) => {
      handleUpdateText(listItem, textData);
    }
  }), /* @__PURE__ */ React22.createElement("button", {
    type: "button",
    onClick: () => deleteLine(listItem.id),
    disabled: listItems.length === 1,
    className: `${listItems.length === 1 ? "text-gray-400" : "text-error"}`
  }, /* @__PURE__ */ React22.createElement("i", {
    className: "fa fa-trash"
  })))), /* @__PURE__ */ React22.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React22.createElement("button", {
    type: "button",
    className: "BlockList-add font-semibold w-max border-2 border-vermillon text-vermillon hover:bg-vermillon hover:text-white px-2 md:px-4 md:py-1 rounded-md",
    onClick: addLine
  }, /* @__PURE__ */ React22.createElement("i", {
    className: "fa fa-plus"
  }), " Ajouter une ligne"))));
}
var initialData4 = {
  type: "ul" /* Unordered */,
  values: [""]
};
var moduleType6 = {
  id: "blockList"
};
var BlockList = {
  type: moduleType6,
  component: BlockListComponent,
  initialData: initialData4,
  title: {
    default: "List",
    fr_FR: "Liste"
  },
  icon: SvgAccordion2,
  description: {
    default: "Display a list",
    fr_FR: "Affiche une liste"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockList"
  }
};
var List_default = BlockList;

// src/blocks/Product/Product.tsx
import * as React24 from "react";
import useSWR from "swr";

// src/blocks/Product/assets/product.svg
import * as React23 from "react";
var SvgProduct = (props) => /* @__PURE__ */ React23.createElement("svg", {
  width: 24,
  height: 25,
  viewBox: "0 0 24 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React23.createElement("path", {
  d: "M23.1203 19.6913V5.12125C23.1208 5.01464 23.0898 4.91027 23.031 4.82129C22.9723 4.73232 22.8886 4.66271 22.7903 4.62125L11.7603 0.0112518C11.6944 -0.00279117 11.6263 -0.00279117 11.5603 0.0112518C11.4945 -0.00375059 11.4262 -0.00375059 11.3603 0.0112518L0.330342 4.62125C0.23049 4.66039 0.145181 4.72944 0.0861036 4.81895C0.0270265 4.90847 -0.0029286 5.01405 0.000342419 5.12125V19.6913C-0.00356197 19.7998 0.0260012 19.907 0.0850279 19.9982C0.144055 20.0894 0.229693 20.1603 0.330342 20.2013L11.3303 24.8013C11.4402 24.841 11.5605 24.841 11.6703 24.8013L11.8503 24.7413L22.7903 20.2213C22.8926 20.1768 22.9789 20.1023 23.0378 20.0076C23.0968 19.913 23.1255 19.8026 23.1203 19.6913ZM11.5603 1.10125H11.6503L14.9003 2.46125L5.48034 6.67125L1.85034 5.15125L11.5603 1.10125ZM11.0303 23.4913L1.03034 19.3313V6.00125L5.03034 7.67125V11.9713C5.01987 12.0476 5.02589 12.1254 5.04798 12.1993C5.07007 12.2731 5.10772 12.3414 5.15841 12.3995C5.2091 12.4576 5.27164 12.5042 5.34183 12.5361C5.41202 12.5681 5.48824 12.5846 5.56534 12.5846C5.64245 12.5846 5.71866 12.5681 5.78885 12.5361C5.85905 12.5042 5.92159 12.4576 5.97228 12.3995C6.02296 12.3414 6.06062 12.2731 6.08271 12.1993C6.1048 12.1254 6.11081 12.0476 6.10034 11.9713V8.11125L11.0003 10.1113L11.0303 23.4913ZM11.5603 9.22125H11.4603L6.86034 7.22125L16.2703 3.05125H16.3703L21.2603 5.05125L20.7103 5.28125L11.5603 9.22125ZM22.0603 19.3413L21.9003 19.4013L12.1203 23.4913V10.1613L12.2703 10.1013L22.0903 6.00125L22.0603 19.3413Z",
  fill: "#333333"
}));

// src/blocks/Product/Product.tsx
var Product = ({
  productId,
  productIndex,
  data,
  onUpdate
}) => {
  const { data: product } = useSWR(`/product/search?id=${productId}`, {
    revalidateIfStale: false,
    revalidateOnFocus: false
  });
  return /* @__PURE__ */ React24.createElement("div", {
    className: "w-full flex justify-between bg-white rounded-md gap-4 md:gap-8 p-2 mb-4 items-center sm:h-20"
  }, product?.[0]?.images.length > 0 ? /* @__PURE__ */ React24.createElement("img", {
    className: "h-full hidden sm:block",
    src: product?.[0]?.images[0].url,
    alt: "product image"
  }) : /* @__PURE__ */ React24.createElement("img", {
    className: "h-full hidden sm:block",
    src: "https://via.placeholder.com/150",
    alt: "product image"
  }), /* @__PURE__ */ React24.createElement("div", {
    className: "flex flex-col md:flex-row md:w-1/5 md:justify-between md:gap-4"
  }, /* @__PURE__ */ React24.createElement("div", {
    className: "font-semibold text-left"
  }, product?.[0]?.i18n.title), /* @__PURE__ */ React24.createElement("div", {
    className: "text-sm md:text-base text-left text-gray-400"
  }, "#", product?.[0]?.reference)), /* @__PURE__ */ React24.createElement("div", {
    className: "md:border-x md:border-gray-400 flex gap-8 px-2 md:px-4"
  }, /* @__PURE__ */ React24.createElement("button", {
    className: `${productIndex === 0 && "text-gray-400"}`,
    disabled: productIndex === 0,
    onClick: () => onUpdate({
      ...data,
      productList: [...reorder(data.productList, productIndex, productIndex - 1)]
    })
  }, /* @__PURE__ */ React24.createElement("i", {
    className: "fa fa-arrow-up"
  })), /* @__PURE__ */ React24.createElement("button", {
    className: `${productIndex === data.productList.length - 1 && "text-gray-400"}`,
    disabled: productIndex === data.productList.length - 1,
    onClick: () => onUpdate({
      ...data,
      productList: [...reorder(data.productList, productIndex, productIndex + 1)]
    })
  }, /* @__PURE__ */ React24.createElement("i", {
    className: "fa fa-arrow-down"
  }))), /* @__PURE__ */ React24.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: product?.[0]?.url,
    className: "hidden font-semibold tracking-wider border-2 border-vermillon text-vermillon hover:bg-vermillon hover:text-white px-2 md:px-4 md:py-1 rounded-md text-center lg:flex items-center"
  }, /* @__PURE__ */ React24.createElement("span", {
    className: "md:mr-2"
  }, "Fiche produit"), /* @__PURE__ */ React24.createElement("i", {
    className: "fa fa-arrow-right hidden md:block"
  })), /* @__PURE__ */ React24.createElement("button", {
    className: "md:self-start hover:text-vermillon pr-1",
    onClick: () => onUpdate({
      ...data,
      productList: data.productList.filter((id) => id != product?.[0]?.id)
    })
  }, /* @__PURE__ */ React24.createElement("i", {
    className: "fa fa-xmark"
  })));
};
function BlockProductComponent({ data, onUpdate }) {
  const [searchByRef, setSearchByRef] = React24.useState(false);
  const [query, setQuery] = React24.useState("");
  React24.useEffect(() => query.startsWith("#") ? setSearchByRef(true) : setSearchByRef(false), [query]);
  const { data: products, isValidating } = useSWR(query.length > 0 ? `/product/search?${searchByRef ? "reference" : "title"}=${searchByRef ? query.substring(1) : query}` : null);
  return /* @__PURE__ */ React24.createElement("div", {
    className: "BlockProduct"
  }, data.productList.map((productId, index) => {
    return /* @__PURE__ */ React24.createElement(Product, {
      key: index,
      productIndex: index,
      productId,
      data,
      onUpdate
    });
  }), /* @__PURE__ */ React24.createElement("div", {
    className: "bg-white border-l-8 border-vermillon rounded-md shadow-md px-4 md:px-14 py-4 md:py-8"
  }, /* @__PURE__ */ React24.createElement("span", {
    className: "md:text-xl font-extrabold"
  }, "Ajouter un produit"), /* @__PURE__ */ React24.createElement("div", {
    className: "mt-4 xl:w-2/3 relative"
  }, /* @__PURE__ */ React24.createElement(Input_default, {
    onChange: (e) => setQuery(e.target.value),
    value: query,
    placeholder: "R\xE9f\xE9rence, nom, ...",
    name: "product-field",
    type: "text",
    className: searchByRef ? "text-vermillon" : "",
    icon: /* @__PURE__ */ React24.createElement("i", {
      className: "fa fa-search text-vermillon"
    }),
    iconAlignment: "right",
    label: "Rechercher"
  }), /* @__PURE__ */ React24.createElement("ul", {
    className: "top-full bg-white rounded-md shadow-xl overflow-hidden w-full absolute"
  }, isValidating ? /* @__PURE__ */ React24.createElement("li", {
    className: "text-center py-4 text-2xl text-vermillon"
  }, /* @__PURE__ */ React24.createElement("i", {
    className: "fa fa-circle-notch fa-spin"
  })) : /* @__PURE__ */ React24.createElement(React24.Fragment, null, products?.length > 0 ? /* @__PURE__ */ React24.createElement(React24.Fragment, null, products?.filter((product) => !data.productList.includes(product.id)).map((product) => /* @__PURE__ */ React24.createElement("li", {
    key: product.id,
    onClick: () => {
      onUpdate({
        ...data,
        productList: [...data.productList, product.id]
      });
      setQuery("");
    },
    className: "px-8 py-4 cursor-pointer hover:bg-gray-200 flex flex-col"
  }, /* @__PURE__ */ React24.createElement("span", null, product.i18n.title), /* @__PURE__ */ React24.createElement("span", {
    className: "text-gray-400 text-sm"
  }, "#", product.reference)))) : query.length > 1 ? /* @__PURE__ */ React24.createElement("li", {
    className: "px-8 py-4 text-center"
  }, /* @__PURE__ */ React24.createElement("span", null, "Aucun r\xE9sultat", " ", query.length > 0 ? /* @__PURE__ */ React24.createElement("span", null, 'pour "', /* @__PURE__ */ React24.createElement("span", {
    className: `font-bold text-vermillon`
  }, query), '"') : "")) : null)))));
}
var initialData5 = {
  productList: []
};
var moduleType7 = {
  id: "blockProduct"
};
var blockProduct = {
  type: moduleType7,
  component: BlockProductComponent,
  initialData: initialData5,
  title: {
    default: "Product",
    fr_FR: "Produit"
  },
  icon: SvgProduct,
  description: {
    default: "Display a product",
    fr_FR: "Affiche des produits du catalogue"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockProduct"
  }
};
var Product_default = blockProduct;

// src/blocks/Raw/Raw.tsx
import * as React27 from "react";

// src/blocks/Raw/assets/html.svg
import * as React25 from "react";
var SvgHtml = (props) => /* @__PURE__ */ React25.createElement("svg", {
  width: 21,
  height: 21,
  viewBox: "0 0 21 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React25.createElement("path", {
  d: "M18.95 2.85741e-05H1.76C1.52934 -0.00128947 1.30071 0.0430028 1.08723 0.130358C0.873755 0.217714 0.679654 0.346409 0.51609 0.509043C0.352527 0.671677 0.222729 0.865041 0.134159 1.07801C0.0455887 1.29099 -3.76563e-06 1.51937 2.33271e-10 1.75003V18.92C-3.76563e-06 19.1507 0.0455887 19.3791 0.134159 19.592C0.222729 19.805 0.352527 19.9984 0.51609 20.161C0.679654 20.3236 0.873755 20.4523 1.08723 20.5397C1.30071 20.6271 1.52934 20.6713 1.76 20.67H18.95C19.4124 20.6674 19.8549 20.4818 20.181 20.1539C20.507 19.826 20.69 19.3824 20.69 18.92V1.75003C20.69 1.28763 20.507 0.844017 20.181 0.516114C19.8549 0.188211 19.4124 0.00267087 18.95 2.85741e-05ZM19.69 18.92C19.6874 19.1013 19.6135 19.2742 19.4844 19.4015C19.3553 19.5287 19.1813 19.6 19 19.6H1.76C1.57965 19.6 1.40669 19.5284 1.27917 19.4009C1.15164 19.2733 1.08 19.1004 1.08 18.92V5.92003H19.69V18.92ZM19.69 4.92003H1.08V1.75003C1.08 1.56968 1.15164 1.39672 1.27917 1.2692C1.40669 1.14167 1.57965 1.07003 1.76 1.07003H18.95C19.1313 1.07001 19.3053 1.14133 19.4344 1.26858C19.5635 1.39582 19.6374 1.56877 19.64 1.75003L19.69 4.92003Z",
  fill: "#333333"
}), /* @__PURE__ */ React25.createElement("path", {
  d: "M6.31094 15.6204C6.41206 15.7209 6.54832 15.7783 6.69094 15.7804C6.79721 15.7796 6.9009 15.7476 6.98903 15.6882C7.07716 15.6288 7.14581 15.5447 7.18638 15.4465C7.22695 15.3483 7.23764 15.2403 7.21711 15.136C7.19657 15.0317 7.14572 14.9359 7.07094 14.8604L5.01094 12.8004L7.07094 10.7304C7.12174 10.681 7.16212 10.6219 7.1897 10.5566C7.21727 10.4913 7.23148 10.4212 7.23148 10.3504C7.23148 10.2795 7.21727 10.2094 7.1897 10.1441C7.16212 10.0788 7.12174 10.0197 7.07094 9.97035C6.9688 9.87252 6.83236 9.81866 6.69094 9.82035C6.54971 9.81971 6.41365 9.87342 6.31094 9.97035L3.87094 12.4204C3.82023 12.4698 3.77995 12.5289 3.75247 12.5942C3.72499 12.6594 3.71087 12.7295 3.71094 12.8004C3.71164 12.8696 3.72615 12.938 3.75362 13.0015C3.7811 13.065 3.82098 13.1224 3.87094 13.1704L6.31094 15.6204Z",
  fill: "#333333"
}), /* @__PURE__ */ React25.createElement("path", {
  d: "M15.6892 12.8H15.6392L13.6392 14.8C13.5436 14.9034 13.4905 15.0391 13.4905 15.18C13.4905 15.3208 13.5436 15.4565 13.6392 15.56C13.7414 15.6588 13.877 15.7159 14.0192 15.72C14.09 15.72 14.1601 15.7059 14.2254 15.6784C14.2906 15.651 14.3497 15.6107 14.3992 15.56L16.8492 13.11C16.8978 13.0616 16.9361 13.0038 16.9619 12.9403C16.9877 12.8767 17.0003 12.8086 16.9992 12.74C17.0011 12.6698 16.9888 12.5999 16.963 12.5346C16.9373 12.4693 16.8985 12.4099 16.8492 12.36L14.3992 9.90997C14.3492 9.8606 14.2898 9.82186 14.2245 9.79609C14.1592 9.77031 14.0894 9.75802 14.0192 9.75997C13.9128 9.75783 13.8083 9.78775 13.7191 9.84583C13.63 9.90391 13.5604 9.98747 13.5194 10.0856C13.4785 10.1838 13.468 10.292 13.4893 10.3962C13.5107 10.5005 13.5629 10.5958 13.6392 10.67L15.6892 12.8Z",
  fill: "#333333"
}), /* @__PURE__ */ React25.createElement("path", {
  d: "M8.95914 16.9703C9.09442 17.0147 9.24176 17.0039 9.36911 16.9402C9.49647 16.8765 9.59351 16.7651 9.63914 16.6303L12.0891 9.30026C12.1336 9.16498 12.1228 9.01764 12.0591 8.89028C11.9954 8.76293 11.884 8.66588 11.7491 8.62026H11.5791C11.4654 8.61762 11.3538 8.65238 11.2617 8.71922C11.1696 8.78605 11.1019 8.88127 11.0691 8.99026L8.62914 16.3203C8.60191 16.3852 8.58789 16.4549 8.58789 16.5253C8.58789 16.5957 8.60191 16.6653 8.62914 16.7303C8.70644 16.8476 8.8237 16.9329 8.95914 16.9703Z",
  fill: "#333333"
}), /* @__PURE__ */ React25.createElement("path", {
  d: "M4.24933 2.43957H3.02933C2.95294 2.4291 2.87519 2.43511 2.80132 2.4572C2.72744 2.4793 2.65915 2.51695 2.60104 2.56764C2.54294 2.61832 2.49636 2.68087 2.46445 2.75106C2.43253 2.82125 2.41602 2.89746 2.41602 2.97457C2.41602 3.05168 2.43253 3.12789 2.46445 3.19808C2.49636 3.26827 2.54294 3.33082 2.60104 3.3815C2.65915 3.43219 2.72744 3.46985 2.80132 3.49194C2.87519 3.51403 2.95294 3.52004 3.02933 3.50957H4.24933C4.37864 3.49185 4.49715 3.4279 4.58295 3.32954C4.66875 3.23119 4.71601 3.10509 4.71601 2.97457C4.71601 2.84405 4.66875 2.71795 4.58295 2.6196C4.49715 2.52124 4.37864 2.45729 4.24933 2.43957Z",
  fill: "#333333"
}), /* @__PURE__ */ React25.createElement("path", {
  d: "M7.90934 2.43957H6.68934C6.56003 2.45729 6.44152 2.52124 6.35572 2.6196C6.26993 2.71795 6.22266 2.84405 6.22266 2.97457C6.22266 3.10509 6.26993 3.23119 6.35572 3.32954C6.44152 3.4279 6.56003 3.49185 6.68934 3.50957H7.90934C7.98574 3.52004 8.06348 3.51403 8.13736 3.49194C8.21123 3.46985 8.27952 3.43219 8.33763 3.3815C8.39573 3.33082 8.44231 3.26827 8.47423 3.19808C8.50614 3.12789 8.52266 3.05168 8.52266 2.97457C8.52266 2.89746 8.50614 2.82125 8.47423 2.75106C8.44231 2.68087 8.39573 2.61832 8.33763 2.56764C8.27952 2.51695 8.21123 2.4793 8.13736 2.4572C8.06348 2.43511 7.98574 2.4291 7.90934 2.43957Z",
  fill: "#333333"
}), /* @__PURE__ */ React25.createElement("path", {
  d: "M11.5794 2.43957H10.3594C10.283 2.4291 10.2053 2.43511 10.1314 2.4572C10.0575 2.4793 9.98923 2.51695 9.93112 2.56764C9.87302 2.61832 9.82644 2.68087 9.79452 2.75106C9.76261 2.82125 9.74609 2.89746 9.74609 2.97457C9.74609 3.05168 9.76261 3.12789 9.79452 3.19808C9.82644 3.26827 9.87302 3.33082 9.93112 3.3815C9.98923 3.43219 10.0575 3.46985 10.1314 3.49194C10.2053 3.51403 10.283 3.52004 10.3594 3.50957H11.5794C11.6558 3.52004 11.7336 3.51403 11.8074 3.49194C11.8813 3.46985 11.9496 3.43219 12.0077 3.3815C12.0658 3.33082 12.1124 3.26827 12.1443 3.19808C12.1762 3.12789 12.1927 3.05168 12.1927 2.97457C12.1927 2.89746 12.1762 2.82125 12.1443 2.75106C12.1124 2.68087 12.0658 2.61832 12.0077 2.56764C11.9496 2.51695 11.8813 2.4793 11.8074 2.4572C11.7336 2.43511 11.6558 2.4291 11.5794 2.43957Z",
  fill: "#333333"
}));

// src/blocks/Raw/Raw.tsx
import Modal from "react-modal";

// assets/svg/html-warning.svg
import * as React26 from "react";
var SvgHtmlWarning = (props) => /* @__PURE__ */ React26.createElement("svg", {
  width: 317,
  height: 274,
  viewBox: "0 0 317 274",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  ...props
}, /* @__PURE__ */ React26.createElement("rect", {
  width: 317,
  height: 274,
  fill: "url(#pattern0)"
}), /* @__PURE__ */ React26.createElement("defs", null, /* @__PURE__ */ React26.createElement("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: 1,
  height: 1
}, /* @__PURE__ */ React26.createElement("use", {
  xlinkHref: "#image0_640_49951",
  transform: "translate(-0.000748686) scale(0.000576236)"
})), /* @__PURE__ */ React26.createElement("image", {
  id: "image0_640_49951",
  width: 1738,
  height: 1500,
  xlinkHref: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AFvRHVja3kAAQAEAAAAPAACAHgAAAA6AG0AZQB0AGEAcABoAG8AcgBzAC4AIABWAGUAYwB0AG8AcgAgAGkAcwBvAGwAYQB0AGUAZAAgAGMAbwBuAGMAZQBwAHQAIABtAGUAdABhAHAAaABvAHIAIABpAGwAbAB1AHMAdAByAGEAdABpAG8AbgBzAC4AAwDeAAAAbQBGAG8AcgAgAGEAbABsACAAcQB1AGUAcwB0AGkAbwBuAHMAIABjAG8AbgBjAGUAcgBuAGkAbgBnACAAYwBvAHAAeQByAGkAZwBoAHQAIABwAGwAZQBhAHMAZQAgAGMAbwBuAHQAYQBjAHQAIAB2AGkAYQAgAGUAbQBhAGkAbAAgAGkAbgBmAG8AQAB2AGkAZwBlAC4AYwBvACAAbwByACAAdgBpAHMAaQB0ACAAbwB1AHIAIAB3AGUAYgBzAGkAdABlACAAdwB3AHcALgB2AGkAZwBlAC4AYwBvAAD/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAKWzAADH+gABVeEAAeLb/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wgARCAXcBsoDAREAAhEBAxEB/8QA+QABAAIDAQEBAAAAAAAAAAAAAAECAwQFBgcIAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUGEAABAgQDBwQDAQACAwEAAAAAAQIREgMEIDATEEBQYDEUBSEyMwZwIjQVIzXAQSQWEQABAgIECgcHAwQBAwQDAAABAAIRMSFxMgMQIDBgQVGBkRIiQFBhobHRc8FCUnIjMwThYhNwgpKy0vFTFMDwQ2OiwoMSAAEDAQcEAgMAAAAAAAAAAHABESGAACAwQGAxYVCQsMAQcaDQQRMAAgEBBQYHAQEBAQAAAAAAAAERMSAhQVFhEDDwcYGRQFBgobHB0fHhcMD/2gAMAwEAAhEDEQAAAfqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQULkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9oACAEBAAEFAv8AxBZ9eiwd5CkL5Fx/o1j/AELiP+jdCeVchT8pZvVFRU/J9a9psKl1WqZCoijW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ABCSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS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SSSSSSIaANMVdSSSSSSSSSSSSHBySSSSSRKMSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSYEySSSSSSt8SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSPJSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSRSXSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS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"
})));

// src/blocks/Raw/Raw.tsx
var WarningModal = ({
  isOpen,
  setIsOpen
}) => {
  const [checked, setChecked] = React27.useState(false);
  return /* @__PURE__ */ React27.createElement(Modal, {
    ariaHideApp: false,
    isOpen,
    onRequestClose: () => setIsOpen(false),
    overlayClassName: "Overlay",
    className: "Modal-htmlWarning"
  }, /* @__PURE__ */ React27.createElement("div", {
    className: "Modal-content flex flex-col p-4"
  }, /* @__PURE__ */ React27.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "self-end"
  }, /* @__PURE__ */ React27.createElement("i", {
    className: "fa fa-xmark hover:text-vermillon text-xl md:text-3xl"
  })), /* @__PURE__ */ React27.createElement(SvgHtmlWarning, {
    className: "mx-auto"
  }), /* @__PURE__ */ React27.createElement("div", {
    className: "lg:px-12 lg:pb-12 text-mediumCharbon"
  }, /* @__PURE__ */ React27.createElement("p", {
    className: "mb-4"
  }, "Ici un petit message pour informer sur l'utilisation de HTML directement dans le back-office. Ce message apparait en pop-in \xE0 chaque fois que l'utilisateur ajoute un bloc de HTML."), /* @__PURE__ */ React27.createElement("div", {
    className: "flex gap-2 items-center mb-6"
  }, /* @__PURE__ */ React27.createElement("input", {
    type: "checkbox",
    checked,
    onChange: () => setChecked(!checked),
    name: "display-alert",
    id: "display-alert"
  }), /* @__PURE__ */ React27.createElement("label", {
    className: "mb-0 tracking-normal select-none",
    htmlFor: "display-alert"
  }, "Ne plus afficher l'alerte")), /* @__PURE__ */ React27.createElement("button", {
    onClick: () => {
      setIsOpen(false);
      if (checked) {
        localStorage.setItem("display-html-alert", "false");
      }
    },
    className: "bg-vermillon hover:bg-lightVermillon text-white py-2 px-4 rounded-md"
  }, "J'ai compris"))));
};
function BlockRawComponent({
  data,
  onUpdate
}) {
  const [value, setValue] = React27.useState("");
  const [isOpen, setIsOpen] = React27.useState(localStorage.getItem("display-html-alert") === "false" ? false : true);
  React27.useEffect(() => {
    if (data.value) {
      setValue(data.value);
    }
  }, [data]);
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const onBlurValue = (e) => {
    if (e.target.value) {
      onUpdate({ value: e.target.value });
    }
  };
  return /* @__PURE__ */ React27.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React27.createElement("textarea", {
    className: "w-full rounded-md",
    placeholder: "Value",
    rows: 5,
    onChange: onChangeValue,
    onBlur: onBlurValue,
    value
  }), /* @__PURE__ */ React27.createElement(WarningModal, {
    isOpen,
    setIsOpen
  }));
}
var initialData6 = {
  value: ""
};
var moduleType8 = {
  id: "blockRaw"
};
var blockRaw = {
  type: moduleType8,
  component: BlockRawComponent,
  initialData: initialData6,
  title: {
    default: "HTML",
    fr_FR: "HTML"
  },
  icon: SvgHtml,
  description: {
    default: "Raw HTML content",
    fr_FR: "Contenu libre HTML"
  }
};
var Raw_default = blockRaw;

// src/blocks/Separator/Separator.tsx
import * as React29 from "react";

// src/blocks/Separator/assets/separator.svg
import * as React28 from "react";
var SvgSeparator = (props) => /* @__PURE__ */ React28.createElement("svg", {
  width: 19,
  height: 21,
  viewBox: "0 0 19 21",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React28.createElement("path", {
  d: "M14.1924 13.45H4.09598C3.57853 13.45 3.06614 13.5519 2.58808 13.7499C2.11001 13.9479 1.67563 14.2382 1.30974 14.6041C0.570782 15.343 0.15564 16.3453 0.15564 17.3903V20.5884C0.189519 20.707 0.261113 20.8114 0.359585 20.8856C0.458057 20.9599 0.578047 21.0001 0.701394 21.0001C0.824741 21.0001 0.94473 20.9599 1.0432 20.8856C1.14167 20.8114 1.21327 20.707 1.24715 20.5884V17.3903C1.24708 17.0187 1.32112 16.6508 1.46495 16.3082C1.60877 15.9656 1.81949 15.6551 2.08477 15.3949C2.35005 15.1347 2.66456 14.93 3.0099 14.7929C3.35524 14.6557 3.72447 14.5888 4.09598 14.596H14.1924C14.9335 14.596 15.6442 14.8904 16.1683 15.4145C16.6923 15.9385 16.9867 16.6492 16.9867 17.3903V20.5884C17.0206 20.707 17.0922 20.8114 17.1906 20.8856C17.2891 20.9599 17.4091 21.0001 17.5324 21.0001C17.6558 21.0001 17.7758 20.9599 17.8743 20.8856C17.9727 20.8114 18.0443 20.707 18.0782 20.5884V17.3903C18.0783 16.3546 17.6707 15.3606 16.9435 14.6232C16.2163 13.8858 15.228 13.4643 14.1924 13.45Z",
  fill: "#333333"
}), /* @__PURE__ */ React28.createElement("path", {
  d: "M0.723483 11.2237H2.4044C2.52301 11.1898 2.62735 11.1182 2.70163 11.0197C2.77591 10.9213 2.81609 10.8013 2.81609 10.6779C2.81609 10.5546 2.77591 10.4346 2.70163 10.3361C2.62735 10.2377 2.52301 10.1661 2.4044 10.1322H0.723483C0.639013 10.1081 0.550095 10.1039 0.463729 10.1199C0.377364 10.136 0.295908 10.1719 0.225776 10.2248C0.155643 10.2777 0.0987481 10.3462 0.0595699 10.4248C0.0203918 10.5034 0 10.5901 0 10.6779C0 10.7658 0.0203918 10.8524 0.0595699 10.9311C0.0987481 11.0097 0.155643 11.0782 0.225776 11.1311C0.295908 11.184 0.377364 11.2199 0.463729 11.2359C0.550095 11.252 0.639013 11.2478 0.723483 11.2237Z",
  fill: "#333333"
}), /* @__PURE__ */ React28.createElement("path", {
  d: "M5.77597 10.0885C5.6915 10.0644 5.60259 10.0602 5.51622 10.0762C5.42985 10.0923 5.3484 10.1282 5.27827 10.1811C5.20813 10.234 5.15124 10.3025 5.11206 10.3811C5.07288 10.4597 5.05249 10.5464 5.05249 10.6342C5.05249 10.7221 5.07288 10.8087 5.11206 10.8874C5.15124 10.966 5.20813 11.0345 5.27827 11.0874C5.3484 11.1403 5.42985 11.1762 5.51622 11.1922C5.60259 11.2083 5.6915 11.2041 5.77597 11.18H7.47873C7.59733 11.1461 7.70167 11.0745 7.77595 10.976C7.85023 10.8776 7.89041 10.7576 7.89041 10.6342C7.89041 10.5109 7.85023 10.3909 7.77595 10.2924C7.70167 10.194 7.59733 10.1224 7.47873 10.0885H5.77597Z",
  fill: "#333333"
}), /* @__PURE__ */ React28.createElement("path", {
  d: "M10.8199 10.0885C10.7354 10.0644 10.6465 10.0602 10.5602 10.0762C10.4738 10.0923 10.3923 10.1282 10.3222 10.1811C10.2521 10.234 10.1952 10.3025 10.156 10.3811C10.1168 10.4597 10.0964 10.5464 10.0964 10.6342C10.0964 10.7221 10.1168 10.8087 10.156 10.8874C10.1952 10.966 10.2521 11.0345 10.3222 11.0874C10.3923 11.1403 10.4738 11.1762 10.5602 11.1922C10.6465 11.2083 10.7354 11.2041 10.8199 11.18H12.5008C12.5853 11.2041 12.6742 11.2083 12.7606 11.1922C12.847 11.1762 12.9284 11.1403 12.9985 11.0874C13.0687 11.0345 13.1256 10.966 13.1648 10.8874C13.2039 10.8087 13.2243 10.7221 13.2243 10.6342C13.2243 10.5464 13.2039 10.4597 13.1648 10.3811C13.1256 10.3025 13.0687 10.234 12.9985 10.1811C12.9284 10.1282 12.847 10.0923 12.7606 10.0762C12.6742 10.0602 12.5853 10.0644 12.5008 10.0885H10.8199Z",
  fill: "#333333"
}), /* @__PURE__ */ React28.createElement("path", {
  d: "M17.5533 10.0885H15.8724C15.7879 10.0644 15.699 10.0602 15.6127 10.0762C15.5263 10.0923 15.4448 10.1282 15.3747 10.1811C15.3046 10.234 15.2477 10.3025 15.2085 10.3811C15.1693 10.4597 15.1489 10.5464 15.1489 10.6342C15.1489 10.7221 15.1693 10.8087 15.2085 10.8874C15.2477 10.966 15.3046 11.0345 15.3747 11.0874C15.4448 11.1403 15.5263 11.1762 15.6127 11.1922C15.699 11.2083 15.7879 11.2041 15.8724 11.18H17.5533C17.6378 11.2041 17.7267 11.2083 17.8131 11.1922C17.8995 11.1762 17.9809 11.1403 18.051 11.0874C18.1212 11.0345 18.1781 10.966 18.2172 10.8874C18.2564 10.8087 18.2768 10.7221 18.2768 10.6342C18.2768 10.5464 18.2564 10.4597 18.2172 10.3811C18.1781 10.3025 18.1212 10.234 18.051 10.1811C17.9809 10.1282 17.8995 10.0923 17.8131 10.0762C17.7267 10.0602 17.6378 10.0644 17.5533 10.0885Z",
  fill: "#333333"
}), /* @__PURE__ */ React28.createElement("path", {
  d: "M4.09493 7.86195H14.1914C15.2345 7.85906 16.234 7.44264 16.9706 6.70399C17.7072 5.96535 18.1208 4.96476 18.1208 3.9216V0.723483C18.1449 0.639013 18.1491 0.550095 18.1331 0.463729C18.117 0.377364 18.0811 0.295908 18.0282 0.225776C17.9753 0.155643 17.9068 0.0987481 17.8282 0.0595699C17.7495 0.0203918 17.6629 0 17.5751 0C17.4872 0 17.4006 0.0203918 17.3219 0.0595699C17.2433 0.0987481 17.1748 0.155643 17.1219 0.225776C17.069 0.295908 17.0331 0.377364 17.017 0.463729C17.001 0.550095 17.0052 0.639013 17.0293 0.723483V3.9216C17.0293 4.66369 16.7353 5.37555 16.2115 5.90131C15.6878 6.42707 14.9771 6.72389 14.235 6.72678H4.09493C3.35095 6.72678 2.63744 6.43123 2.11137 5.90516C1.58529 5.37909 1.28975 4.66558 1.28975 3.9216V0.723483C1.25587 0.60488 1.18428 0.500542 1.0858 0.42626C0.987333 0.351979 0.867343 0.311797 0.743996 0.311797C0.620649 0.311797 0.500659 0.351979 0.402188 0.42626C0.303716 0.500542 0.232122 0.60488 0.198242 0.723483V3.9216C0.198179 4.95912 0.607322 5.95481 1.33686 6.69252C2.0664 7.43024 3.05747 7.85045 4.09493 7.86195Z",
  fill: "#333333"
}));

// src/blocks/Separator/Separator.tsx
var types2 = [
  { label: "Espace", value: "space" },
  { label: "Bordure", value: "hr" }
];
var initialData7 = {
  type: "space",
  size: 1
};
var BlockSeparatorComponent = ({
  data,
  onUpdate
}) => {
  const [type, setType] = React29.useState(initialData7.type);
  const [size, setSize] = React29.useState(initialData7.size);
  React29.useEffect(() => {
    if (data.type) {
      setType(data.type);
    }
    if (data.size) {
      setSize(data.size);
    }
  }, [data]);
  const onChangeType = (e) => {
    setType(e.target.value);
    onUpdate({ ...data, type: e.target.value });
  };
  const onChangeSize = (e) => {
    setSize(+e.target.value);
  };
  const onBlurSize = (e) => {
    if (e.target.value) {
      onUpdate({ ...data, size: +e.target.value });
    }
  };
  return /* @__PURE__ */ React29.createElement("div", {
    className: "BlockSeparator",
    "data-type": type
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "BlockSeparator-field"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "flex flex-col w-full md:w-1/2 mb-6"
  }, /* @__PURE__ */ React29.createElement("label", {
    htmlFor: "separator-type"
  }, "Style du s\xE9parateur"), /* @__PURE__ */ React29.createElement("select", {
    className: "rounded-md mb-4",
    name: "separator-type",
    id: "separator-type",
    onChange: onChangeType,
    value: type.toString()
  }, types2.map(({ label, value }) => /* @__PURE__ */ React29.createElement("option", {
    key: value,
    value
  }, label))), /* @__PURE__ */ React29.createElement(Input_default, {
    type: "number",
    name: "separator-size",
    id: "separator-size",
    className: "rounded-md",
    value: size.toString(),
    onChange: onChangeSize,
    onBlur: onBlurSize,
    label: "Taille du s\xE9parateur"
  })))), /* @__PURE__ */ React29.createElement("div", {
    className: "border-dotted border rounded-md p-4 border-black"
  }, type === "hr" ? /* @__PURE__ */ React29.createElement("div", {
    className: "bg-black h-px"
  }) : null));
};
var moduleType9 = {
  id: "blockSeparator"
};
var BlockSeparator = {
  type: moduleType9,
  component: BlockSeparatorComponent,
  initialData: initialData7,
  title: {
    default: "Separator",
    fr_FR: "S\xE9parateur"
  },
  icon: SvgSeparator,
  description: {
    default: "Display a separator",
    fr_FR: "Affiche un s\xE9parateur"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockSeparator"
  }
};
var Separator_default = BlockSeparator;

// src/blocks/Title/Title.tsx
import * as React31 from "react";

// src/blocks/Title/assets/title.svg
import * as React30 from "react";
var SvgTitle = (props) => /* @__PURE__ */ React30.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React30.createElement("path", {
  d: "M11.9 0C9.54598 8.31164e-07 7.24484 0.698177 5.28768 2.00621C3.33052 3.31424 1.80527 5.17336 0.904881 7.34838C0.004493 9.5234 -0.230582 11.9166 0.229393 14.2253C0.689368 16.5339 1.82373 18.6543 3.48897 20.3181C5.15422 21.982 7.27553 23.1145 9.58456 23.5726C11.8936 24.0306 14.2866 23.7935 16.4609 22.8913C18.6351 21.9891 20.493 20.4623 21.7994 18.504C23.1057 16.5457 23.802 14.244 23.8 11.89C23.7947 8.73647 22.5389 5.71376 20.3081 3.48481C18.0773 1.25587 15.0535 0.00264336 11.9 0V0ZM11.9 22.54C9.79363 22.54 7.73456 21.9154 5.98318 20.7452C4.23179 19.5749 2.86676 17.9116 2.06068 15.9656C1.25461 14.0195 1.04371 11.8782 1.45464 9.81229C1.86557 7.74639 2.87988 5.84874 4.36931 4.35931C5.85874 2.86988 7.75639 1.85557 9.82229 1.44464C11.8882 1.0337 14.0295 1.24461 15.9756 2.05068C17.9216 2.85676 19.5849 4.22179 20.7552 5.97318C21.9254 7.72456 22.55 9.78363 22.55 11.89C22.5474 14.7137 21.4245 17.4211 19.4278 19.4178C17.4311 21.4145 14.7237 22.5374 11.9 22.54Z",
  fill: "#333333"
}), /* @__PURE__ */ React30.createElement("path", {
  d: "M16.4507 6.87996H7.5707C7.48103 6.87861 7.392 6.89528 7.30889 6.92897C7.22578 6.96267 7.15028 7.01271 7.08686 7.07612C7.02345 7.13954 6.97341 7.21504 6.93972 7.29815C6.90602 7.38126 6.88935 7.47029 6.8907 7.55996V9.21996C6.8907 9.40031 6.96234 9.57327 7.08987 9.70079C7.21739 9.82832 7.39035 9.89996 7.5707 9.89996C7.75105 9.89996 7.92401 9.82832 8.05153 9.70079C8.17906 9.57327 8.2507 9.40031 8.2507 9.21996V8.21996H11.3307V15.74H10.3307C10.1504 15.74 9.97739 15.8116 9.84987 15.9391C9.72234 16.0666 9.6507 16.2396 9.6507 16.42C9.6507 16.6003 9.72234 16.7733 9.84987 16.9008C9.97739 17.0283 10.1504 17.1 10.3307 17.1H13.6707C13.851 17.1 14.024 17.0283 14.1515 16.9008C14.2791 16.7733 14.3507 16.6003 14.3507 16.42C14.3507 16.2396 14.2791 16.0666 14.1515 15.9391C14.024 15.8116 13.851 15.74 13.6707 15.74H12.6707V8.23996H15.7507V9.23996C15.7507 9.42031 15.8223 9.59327 15.9499 9.72079C16.0774 9.84832 16.2504 9.91996 16.4307 9.91996C16.611 9.91996 16.784 9.84832 16.9115 9.72079C17.0391 9.59327 17.1107 9.42031 17.1107 9.23996V7.55996C17.112 7.47197 17.096 7.38458 17.0635 7.30279C17.0311 7.22099 16.9828 7.14639 16.9216 7.08325C16.8603 7.0201 16.7871 6.96965 16.7063 6.93477C16.6256 6.89989 16.5387 6.88126 16.4507 6.87996Z",
  fill: "#333333"
}));

// src/blocks/Title/Title.tsx
var levels = [
  {
    label: "Neutre",
    value: 0
  },
  {
    label: "Niveau 1",
    value: 1
  },
  {
    label: "Niveau 2",
    value: 2
  },
  {
    label: "Niveau 3",
    value: 3
  },
  {
    label: "Niveau 4",
    value: 4
  },
  {
    label: "Niveau 5",
    value: 5
  },
  {
    label: "Niveau 6",
    value: 6
  }
];
function BlockTitleComponent({
  data,
  onUpdate
}) {
  const [level, setLevel] = React31.useState(initialData8.level);
  const [text, setText] = React31.useState(initialData8.text);
  React31.useEffect(() => {
    if (data.level) {
      setLevel(data.level);
    }
    if (data.text) {
      setText(data.text);
    }
  }, [data]);
  const onChangeLevel = (e) => {
    setLevel(parseInt(e.target.value, 10));
    onUpdate({ ...data, level: parseInt(e.target.value, 10) });
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onBlurText = (e) => {
    if (e.target.value) {
      onUpdate({ ...data, text: e.target.value });
    }
  };
  return /* @__PURE__ */ React31.createElement("div", {
    className: "BlockTitle"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: "BlockTitle-field md:w-1/2"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React31.createElement("label", {
    htmlFor: "title-level"
  }, "Style"), /* @__PURE__ */ React31.createElement("select", {
    name: "title-level",
    id: "title-level",
    className: "rounded-md",
    onChange: onChangeLevel,
    value: level.toString()
  }, levels.map(({ label, value }) => /* @__PURE__ */ React31.createElement("option", {
    key: value,
    value
  }, label))))), /* @__PURE__ */ React31.createElement("div", {
    className: "flex-grow BlockTitle-field mt-4 md:w-1/2"
  }, /* @__PURE__ */ React31.createElement(Input_default, {
    type: "text",
    name: "title-text",
    id: "title-text",
    className: "rounded-md",
    value: text,
    onChange: onChangeText,
    onBlur: onBlurText,
    placeholder: "Votre titre ici"
  })));
}
var initialData8 = {
  level: 0,
  text: ""
};
var moduleType10 = {
  id: "blockTitle"
};
var BlockTitle = {
  type: moduleType10,
  component: BlockTitleComponent,
  initialData: initialData8,
  title: {
    default: "Title",
    fr_FR: "Titre"
  },
  icon: SvgTitle,
  description: {
    default: "Display a title",
    fr_FR: "Affiche un titre"
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockTitle"
  }
};
var Title_default = BlockTitle;

// src/blocks/Video/Video.tsx
import * as React33 from "react";

// src/blocks/Video/assets/video.svg
import * as React32 from "react";
var SvgVideo = (props) => /* @__PURE__ */ React32.createElement("svg", {
  width: 21,
  height: 24,
  viewBox: "0 0 21 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props
}, /* @__PURE__ */ React32.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M19.9551 9.80845H5.13784L19.3717 5.67813C19.4267 5.66411 19.4782 5.63875 19.5229 5.60366C19.5675 5.56858 19.6044 5.52455 19.631 5.47439C19.6724 5.36712 19.6724 5.24828 19.631 5.141L18.8809 2.5665C18.7349 2.07042 18.4342 1.63396 18.0228 1.32077C17.6113 1.00758 17.1105 0.834041 16.5935 0.825469C16.3679 0.824339 16.1434 0.855525 15.9267 0.918077L2.56334 4.78909C1.95422 4.97756 1.44329 5.39737 1.14027 5.95838C0.837258 6.51939 0.766322 7.17686 0.9427 7.78959L1.6743 10.2993V20.6528C1.6743 21.2939 1.92896 21.9087 2.38225 22.362C2.60669 22.5864 2.87315 22.7645 3.1664 22.8859C3.45965 23.0074 3.77396 23.0699 4.09137 23.0699H17.9826C18.622 23.0675 19.2344 22.8117 19.6857 22.3587C20.137 21.9057 20.3904 21.2923 20.3904 20.6528V10.2344C20.388 10.1206 20.341 10.0123 20.2597 9.93264C20.1783 9.853 20.069 9.80842 19.9551 9.80845ZM16.5379 10.6697L14.6857 13.8739H12.2964L14.1486 10.6697H16.5379ZM13.1392 10.6697L11.287 13.8739H8.88847L10.7406 10.6697H13.1392ZM9.7312 10.6697L7.87904 13.8739H5.48975L7.34191 10.6697H9.7312ZM6.33249 10.6697L4.48033 13.8739H2.50778V10.6697H6.33249ZM16.1675 1.75155C16.3065 1.71493 16.4497 1.69626 16.5935 1.69598C16.9289 1.69448 17.2557 1.80206 17.5246 2.00251C17.7936 2.20296 17.99 2.48542 18.0844 2.80728L18.7142 4.96505L16.9731 5.47439L16.9083 5.40031L13.8245 2.43685L16.1675 1.75155ZM12.8706 2.67763C12.8835 2.70347 12.9026 2.72574 12.9262 2.74245L16.0193 5.70591L13.6948 6.38195C13.6848 6.35428 13.6651 6.33122 13.6393 6.31712L10.5554 3.38145L12.8706 2.67763ZM9.59229 3.60371L9.65711 3.66853L12.741 6.64125L10.4258 7.30803C10.4128 7.28219 10.3938 7.25992 10.3702 7.24321L7.27709 4.32605L9.59229 3.60371ZM6.32323 4.52979C6.33987 4.55585 6.36199 4.57797 6.38805 4.59462L9.4719 7.56733L7.1567 8.23411L7.10113 8.16928L4.00802 5.27991L6.32323 4.52979ZM1.74839 7.54881C1.68721 7.35492 1.66633 7.15057 1.68703 6.94831C1.70773 6.74605 1.76958 6.55016 1.86878 6.37269C1.96627 6.19293 2.09824 6.03415 2.25715 5.90544C2.41605 5.77673 2.59877 5.6806 2.79486 5.62256L3.0449 5.54848L3.10047 5.62256L6.19357 8.58602L2.3596 9.69732L1.74839 7.54881ZM19.5199 20.6528C19.5199 21.063 19.3569 21.4564 19.0669 21.7464C18.7769 22.0365 18.3835 22.1994 17.9733 22.1994H4.08211C3.67194 22.1994 3.27857 22.0365 2.98853 21.7464C2.6985 21.4564 2.53556 21.063 2.53556 20.6528V14.7352H19.5199V20.6528ZM19.5199 13.8739H15.7044L17.5566 10.6697H19.5291L19.5199 13.8739Z",
  fill: "#444444"
}), /* @__PURE__ */ React32.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M13.7958 18.051L9.98032 15.8469C9.91519 15.8058 9.83973 15.7839 9.76269 15.7839C9.68565 15.7839 9.61019 15.8058 9.54506 15.8469C9.4807 15.8851 9.42729 15.9393 9.38998 16.0042C9.35267 16.0691 9.33272 16.1425 9.33207 16.2174V20.6255C9.33111 20.7019 9.35029 20.7772 9.38768 20.8439C9.42507 20.9105 9.47935 20.9662 9.54506 21.0052C9.61373 21.041 9.68989 21.06 9.76732 21.0608C9.84196 21.0612 9.91542 21.0421 9.98032 21.0052L13.7958 18.8011C13.8635 18.7646 13.9201 18.7105 13.9595 18.6445C13.999 18.5785 14.0198 18.503 14.0198 18.4261C14.0198 18.3491 13.999 18.2737 13.9595 18.2076C13.9201 18.1416 13.8635 18.0875 13.7958 18.051ZM10.2026 19.8754V17.0045L12.7123 18.4492L10.2026 19.8754Z",
  fill: "#444444"
}));

// src/utils/youtube.ts
var getYouTubeID = (url) => url.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)?.[6];

// src/blocks/Video/Video.tsx
var YouTubeFrame = ({
  url,
  className,
  ...props
}) => /* @__PURE__ */ React33.createElement("iframe", {
  ...props,
  className: `${className}`,
  src: `https://www.youtube.com/embed/${url}`,
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  allowFullScreen: true
});
var BlockVideoComponent = ({ data, onUpdate }) => {
  const [url, setUrl] = React33.useState("");
  const [isUrlValid, setIsUrlValid] = React33.useState(false);
  React33.useEffect(() => {
    if (data.url) {
      setUrl(data.url);
    }
  }, [data]);
  React33.useEffect(() => {
    if (getYouTubeID(url)?.trim().length === 11) {
      setIsUrlValid(true);
    } else {
      setIsUrlValid(false);
    }
  }, [url]);
  return /* @__PURE__ */ React33.createElement("div", {
    className: "BlockVideo"
  }, url.length > 0 && isUrlValid ? /* @__PURE__ */ React33.createElement(YouTubeFrame, {
    url: getYouTubeID(url)?.trim(),
    className: "w-full lg:w-1/3",
    style: { aspectRatio: "16/9" }
  }) : null, /* @__PURE__ */ React33.createElement("div", {
    className: "bg-white border-l-8 border-vermillon rounded-md shadow-md p-4 md:px-14 md:py-8 mt-8"
  }, /* @__PURE__ */ React33.createElement("div", {
    className: "font-bold md:text-xl"
  }, "Ajouter une vid\xE9o depuis YouTube"), /* @__PURE__ */ React33.createElement("div", {
    className: "BlockVideo-field flex flex-col xl:w-2/3 mt-4"
  }, /* @__PURE__ */ React33.createElement(Input_default, {
    name: "video-url",
    id: "video-url",
    type: "text",
    placeholder: "URL de la vid\xE9o",
    className: `${url.length > 2 && isUrlValid && "border-greenDark bg-greenLight"}`,
    onChange: (e) => setUrl(e.target.value),
    onBlur: (e) => onUpdate({ ...data, url: e.target.value }),
    value: url,
    icon: /* @__PURE__ */ React33.createElement("i", {
      className: "fa fa-link text-darkCharbon"
    }),
    iconAlignment: "left",
    isValid: isUrlValid,
    label: "URL de la vid\xE9o"
  }))));
};
var initialData9 = {
  url: ""
};
var moduleType11 = {
  id: "blockVideo"
};
var blockVideo = {
  type: moduleType11,
  component: BlockVideoComponent,
  initialData: initialData9,
  title: {
    default: "Video",
    fr_FR: "Vid\xE9o"
  },
  icon: SvgVideo,
  description: {
    default: "Display a YouTube video",
    fr_FR: "Affiche une vid\xE9o YouTube"
  },
  image: {
    default: ""
  }
};
var Video_default = blockVideo;

// src/blocks/index.ts
var Columns = {
  TwoColumns,
  ThreeColumns,
  FourColumns,
  FiveColumns,
  SixColumns
};

// src/hooks/usePlugins.tsx
import { useEffect as useEffect15, useState as useState15 } from "react";
import { nanoid as nanoid2 } from "nanoid";
var TB_DEFAULT_PLUGINS = [
  { id: nanoid2(), ...Text_default },
  { id: nanoid2(), ...Title_default },
  { id: nanoid2(), ...Image_default },
  { id: nanoid2(), ...Button_default },
  { id: nanoid2(), ...List_default },
  { id: nanoid2(), ...Video_default },
  { id: nanoid2(), ...Raw_default },
  { id: nanoid2(), ...Accordion_default },
  { id: nanoid2(), ...Separator_default },
  { id: nanoid2(), ...Product_default },
  ...Object.values(Columns).map((colType) => ({ id: nanoid2(), ...colType }))
];
window.eventTBPlugins = new CustomEvent("update-tb-plugins");
function usePlugins() {
  const [plugins, setPlugins] = useState15([
    ...TB_DEFAULT_PLUGINS,
    ...window.TB__PLUGINS || []
  ]);
  useEffect15(() => {
    const fn = () => {
      setPlugins([...TB_DEFAULT_PLUGINS, ...window.TB__PLUGINS]);
    };
    document.addEventListener("update-tb-plugins", fn);
    () => {
      document.removeEventListener("update-tb-plugins", fn);
    };
  }, []);
  return plugins;
}

// src/components/AddBlocks/AddBlocks.tsx
var AddButton = ({
  plugin,
  setIsOpen
}) => {
  const { addBlock } = useBlocksContext();
  const Icon2 = plugin?.icon;
  return /* @__PURE__ */ React34.createElement(Tippy4, {
    content: /* @__PURE__ */ React34.createElement(BlockTooltip_default, {
      title: plugin.title.fr_FR,
      description: plugin?.description?.fr_FR
    }),
    delay: [500, 0]
  }, /* @__PURE__ */ React34.createElement("button", {
    className: "flex flex-col items-center justify-center w-24 h-24 gap-2 rounded-md BlocksEditor-btn bg-pearlLight hover:bg-pearlMedium md:h-28 md:w-28",
    onClick: () => {
      addBlock({
        id: nanoid3(),
        data: plugin.initialData,
        parent: null,
        type: { id: plugin.type.id }
      });
      setIsOpen(false);
    },
    key: plugin.id
  }, /* @__PURE__ */ React34.createElement(Icon2, null), plugin.title.fr_FR));
};
function AddBlock({
  excludeLayout
}) {
  const [isOpen, setIsOpen] = React34.useState(false);
  return /* @__PURE__ */ React34.createElement("div", {
    className: "flex flex-col items-center justify-center p-4 border border-dotted rounded-md border-greyDark"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "p-2 rounded-full bg-pearlLight"
  }, /* @__PURE__ */ React34.createElement(SvgDrag, null)), /* @__PURE__ */ React34.createElement("span", {
    className: "my-4"
  }, "Glissez-d\xE9posez le type de contenu souhait\xE9"), /* @__PURE__ */ React34.createElement("button", {
    className: "px-2 font-semibold border-2 rounded-md w-max border-vermillon text-vermillon hover:bg-vermillon hover:text-white md:px-4 md:py-1",
    onClick: () => {
      setIsOpen(true);
    }
  }, "Ajouter du contenu"), /* @__PURE__ */ React34.createElement(AddBlockModal, {
    title: "Choisissez le contenu souhait\xE9",
    isOpen,
    setIsOpen
  }, /* @__PURE__ */ React34.createElement(ModalContent, {
    excludeLayout,
    setIsOpen
  })));
}
var AddBlockModal = ({
  children,
  title,
  isOpen,
  setIsOpen
}) => {
  return /* @__PURE__ */ React34.createElement(Modal2, {
    isOpen,
    onRequestClose: () => setIsOpen(false),
    overlayClassName: "Overlay",
    className: "Modal-TheliaBlocks"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "flex flex-col p-4 Modal-content"
  }, /* @__PURE__ */ React34.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "self-end"
  }, /* @__PURE__ */ React34.createElement("i", {
    className: "text-xl fa fa-xmark hover:text-vermillon md:text-3xl"
  })), /* @__PURE__ */ React34.createElement("div", {
    className: "lg:px-12 lg:pb-12"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "mt-3 mb-6 font-extrabold text-center md:text-left md:text-xl"
  }, title), /* @__PURE__ */ React34.createElement("div", {
    className: "flex flex-wrap BlocksEditor-AddBlocks"
  }, children))));
};
var ModalContent = ({
  excludeLayout,
  setIsOpen
}) => {
  const [subModalOpen, setSubModalOpen] = React34.useState(false);
  const plugins = usePlugins();
  let availablePLugins = plugins;
  if (excludeLayout) {
    availablePLugins = plugins.filter((plugin) => !excludeLayout.includes(plugin.layout));
  }
  const [commonBlocks, layoutPlugins] = partition(availablePLugins, (i) => !i.layout);
  const layoutPluginsByType = groupBy(layoutPlugins, "layout");
  return /* @__PURE__ */ React34.createElement("ol", {
    className: "flex flex-wrap justify-center gap-4"
  }, commonBlocks.map((plugin, index) => {
    return /* @__PURE__ */ React34.createElement(AddButton, {
      key: index,
      plugin,
      setIsOpen
    });
  }), Object.entries(layoutPluginsByType).map(([layoutType, layoutPluginsByType2], index) => {
    return /* @__PURE__ */ React34.createElement("li", {
      key: index,
      className: "inline-block BlocksEditor-dropdown group"
    }, layoutPluginsByType2.length === 1 ? /* @__PURE__ */ React34.createElement(AddButton, {
      plugin: layoutPluginsByType2[0],
      setIsOpen
    }) : /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("button", {
      onClick: () => setSubModalOpen(true),
      className: "flex flex-col items-center justify-center w-24 h-24 gap-2 rounded-md BlocksEditor-btn bg-pearlLight hover:bg-pearlMedium md:h-28 md:w-28"
    }, layoutType), /* @__PURE__ */ React34.createElement(AddBlockModal, {
      title: "Choisissez le nombre de colonnes",
      isOpen: subModalOpen,
      setIsOpen: setSubModalOpen
    }, /* @__PURE__ */ React34.createElement("ol", {
      className: "flex flex-wrap gap-2 BlocksEditor-dropdown__content"
    }, layoutPluginsByType2.map((plugin, index2) => /* @__PURE__ */ React34.createElement(AddButton, {
      key: index2,
      plugin,
      setIsOpen
    }))))));
  }));
};

// src/components/BlocksContent/BlocksContent.tsx
function BlocksContent() {
  const { blockList, moveBlockTo } = useBlocksContext();
  const { DndWrapper: DndWrapper2, DndWrapElement: DndWrapElement2 } = useDragAndDrop_default();
  if (!blockList || !blockList.length)
    return null;
  const onDragEnd = (e) => {
    if (e.destination) {
      moveBlockTo(e.source.index, e.destination.index);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "BlocksContent my-12"
  }, blockList.length > 0 && /* @__PURE__ */ React.createElement(DndWrapper2, {
    id: "main",
    onDragEnd
  }, blockList.map((block, index) => /* @__PURE__ */ React.createElement(DndWrapElement2, {
    key: block.id,
    id: block.id,
    index
  }, ({ DndDragHandle: DndDragHandle2 }) => /* @__PURE__ */ React.createElement(Block_default, {
    DndDragHandle: DndDragHandle2,
    key: index,
    block
  })))));
}

// src/components/GroupLocale/GroupLocale.tsx
import { useContext as useContext4 } from "react";
function GroupLocale() {
  const { locales, currentLocale, setCurrentLocale } = useContext4(LocaleContext);
  if (!locales || locales.length <= 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
    },
    className: "flex gap-8"
  }, locales.map((locale) => {
    return /* @__PURE__ */ React.createElement("label", {
      htmlFor: locale.code,
      key: locale.id,
      className: locale.code === currentLocale ? "bg-red" : ""
    }, /* @__PURE__ */ React.createElement("input", {
      id: locale.code,
      type: "radio",
      name: "locale",
      value: locale.code,
      checked: currentLocale === locale.code,
      onChange: () => {
        setCurrentLocale(locale.code);
      },
      className: "sr-only"
    }), locale.title);
  }));
}

// src/components/GroupTitle/GroupTitle.tsx
import {
  useContext as useContext5,
  useEffect as useEffect17,
  useLayoutEffect,
  useRef,
  useState as useState18
} from "react";
function GroupTitle() {
  const titleRef = useRef(null);
  const [title, setTitle] = useState18("");
  const [isEditing, setIsEditing] = useState18(false);
  const { group, editGroup } = useContext5(BlocksGroupContext);
  useEffect17(() => {
    if (group?.title) {
      setTitle(group.title);
    }
  }, [group]);
  useLayoutEffect(() => {
    if (isEditing && titleRef.current) {
      titleRef?.current?.focus();
    }
  }, [isEditing, titleRef]);
  return /* @__PURE__ */ React.createElement("div", null, isEditing ? /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    ref: titleRef,
    value: title,
    onChange: (e) => setTitle(e.target.value),
    className: "w-full",
    onBlur: () => {
      setIsEditing(false);
      editGroup({ ...group, title });
    }
  })) : /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl"
  }, title || "aucun titre"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "bg-gray-500 text-white p-4 hover:bg-gray-700",
    onClick: () => {
      setIsEditing(true);
    }
  }, "edit")));
}

// src/BlocksEditor.tsx
import ReactModal2 from "react-modal";
import { Toaster } from "react-hot-toast";

// src/components/ToolBar/ToolBar.tsx
import { Suspense as Suspense2, useContext as useContext6, useState as useState20 } from "react";

// src/components/ErrorBoundary.tsx
import { Component } from "react";
var ErrorBoundary = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", {
      hasError: false
    });
  }
  static getDerivedStateFromError(_) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ React.createElement("h1", {
        className: "p-8 text-3xl text-red"
      }, "Une erreur est survenue");
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary;

// src/components/Preview/Preview.tsx
import { useEffect as useEffect19, useState as useState19 } from "react";

// src/components/Iframe/Iframe.tsx
import { useEffect as useEffect18, useRef as useRef2 } from "react";
var Iframe = ({ content }) => {
  const ref = useRef2(null);
  useEffect18(() => {
    const node = ref.current;
    if (!node)
      return;
    let doc = node.contentDocument;
    if (!doc)
      return;
    doc.open();
    doc.write(content);
    doc.close();
    node.style.width = "100%";
    if (node.contentWindow) {
      node.style.height = `80vh`;
    }
  }, [ref, content]);
  return /* @__PURE__ */ React.createElement("iframe", {
    src: "about:blank",
    frameBorder: "0",
    ref,
    sandbox: "allow-same-origin"
  });
};
var Iframe_default = Iframe;

// src/components/Preview/Preview.tsx
import ReactModal from "react-modal";
function Preview({
  timestamp,
  data
}) {
  const [isOpen, setIsOpen] = useState19(true);
  const { blockList } = useBlocksContext();
  const preview = usePreviewGroup(timestamp, JSON.stringify(data || blockList));
  useEffect19(() => {
    if (timestamp) {
      setIsOpen(true);
    }
    return () => {
      setIsOpen(false);
    };
  }, [timestamp]);
  if (preview.isLoading) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "text-green text-4xl"
    }, "Chargement");
  }
  if (preview.isError) {
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ReactModal, {
    onRequestClose: () => setIsOpen(false),
    isOpen,
    overlayClassName: "Overlay",
    className: "Modal-TheliaBlocks"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsOpen(false),
    className: "bg-red"
  }, "close"), preview.data ? /* @__PURE__ */ React.createElement(Iframe_default, {
    content: preview.data
  }) : null));
}

// src/components/ToolBar/ToolBar.tsx
import toast2 from "react-hot-toast";
var ToolBar = () => {
  const { group } = useContext6(BlocksGroupContext);
  const { blockList } = useBlocksContext();
  const mutation = useCreateOrUpdateGroup();
  const [showPreview, setShowPreview] = useState20(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, blockList.length !== 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-lightCharbon h-20 sticky bottom-0 px-4 py-5 md:px-12 xl:px-44 2xl:px-60 flex gap-2 items-center justify-end text-white"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "Toolbar-view border border-white rounded-md px-3 py-1 hover:text-black hover:bg-white h-full",
    onClick: () => {
      setShowPreview(Date.now());
    }
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fas fa-eye mr-3"
  }), "Pr\xE9visualiser"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "Toolbar-save text-white bg-vermillon hover:bg-lightVermillon px-2 md:px-4 md:py-1 rounded-md h-full",
    onClick: () => {
      if (!group?.title) {
        console.log("hey");
        toast2.error("Titre manquant");
        return;
      }
      mutation.mutate({ blocks: blockList });
    }
  }, "Enregistrer")), typeof showPreview === "number" ? /* @__PURE__ */ React.createElement(ErrorBoundary_default, null, /* @__PURE__ */ React.createElement(Suspense2, {
    fallback: "loading"
  }, /* @__PURE__ */ React.createElement(Preview, {
    timestamp: showPreview
  }))) : null));
};
var ToolBar_default = ToolBar;

// src/BlocksEditor.tsx
function BlocksEditor({
  apiUrl,
  containerId,
  groupId,
  itemId,
  itemType,
  locales,
  backlink = true
}) {
  if (!apiUrl)
    return null;
  useLayoutEffect3(() => {
    if (containerId) {
      ReactModal2.setAppElement("#" + containerId);
    }
  }, [containerId]);
  return /* @__PURE__ */ React.createElement(LocaleProvider, {
    locales
  }, /* @__PURE__ */ React.createElement(BlocksProvider, {
    api: apiUrl
  }, /* @__PURE__ */ React.createElement(Suspense3, {
    fallback: "loading"
  }, /* @__PURE__ */ React.createElement(BlocksGroupProvider, {
    groupId,
    itemType,
    itemId
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlocksEditor"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Toaster, null)), /* @__PURE__ */ React.createElement("div", {
    className: "BlocksEditor__header"
  }, backlink ? /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/admin/TheliaBlocks"
  }, "Back to BlocksList")) : null, /* @__PURE__ */ React.createElement(GroupTitle, null), /* @__PURE__ */ React.createElement(GroupLocale, null)), /* @__PURE__ */ React.createElement(BlockContextProvider, {
    root: true
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "BlocksEditor__content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-4 py-12 md:px-12 xl:px-44 2xl:px-60"
  }, /* @__PURE__ */ React.createElement(BlocksContent, null), /* @__PURE__ */ React.createElement(AddBlock, null))), /* @__PURE__ */ React.createElement(ToolBar_default, null))))))));
}

// src/BlocksList.tsx
import toast3, { Toaster as Toaster2 } from "react-hot-toast";
import { Suspense as Suspense4 } from "react";
import useCopyToClipboard from "react-use/esm/useCopyToClipboard";
function List() {
  const { data: groups = [] } = useGroups();
  const [copied, copyToClipboard] = useCopyToClipboard();
  const mutationDelete = useDeleteGroup();
  const mutationDuplicate = useDuplicateGroup();
  if (groups.length <= 0) {
    return /* @__PURE__ */ React.createElement("div", null, "No blocks to display");
  }
  return /* @__PURE__ */ React.createElement("table", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "ID"), /* @__PURE__ */ React.createElement("th", null, "Nom"), /* @__PURE__ */ React.createElement("th", null, "Contenus li\xE9s"), /* @__PURE__ */ React.createElement("th", null, "Langues disponibles"), /* @__PURE__ */ React.createElement("th", null, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, groups.map((group) => {
    return /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, group.id), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("a", {
      href: `/admin/TheliaBlocks/${group.id}`
    }, group.title || "No Title")), /* @__PURE__ */ React.createElement("td", null, "TODO"), /* @__PURE__ */ React.createElement("td", null, "TODO"), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        mutationDelete.mutate(group.id);
      }
    }, "delete"), /* @__PURE__ */ React.createElement("button", {
      onClick: () => {
        mutationDuplicate.mutate(group.id);
      }
    }, "duplicate"), /* @__PURE__ */ React.createElement("button", {
      type: "button",
      onClick: () => {
        const shortcode = `[block_group slug=${group.slug}]`;
        copyToClipboard(shortcode);
        toast3(`${shortcode} copi\xE9 avec succ\xE8s`);
      }
    }, "shortcode"))));
  })));
}
function BlocksList({ apiUrl }) {
  if (!apiUrl)
    return null;
  return /* @__PURE__ */ React.createElement(BlocksProvider, {
    api: apiUrl
  }, /* @__PURE__ */ React.createElement("div", {
    className: "BlocksList"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Toaster2, null)), /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/admin/TheliaBlocks/new",
    className: "btn btn-danger "
  }, "Create new group")), /* @__PURE__ */ React.createElement(Suspense4, {
    fallback: "loading"
  }, /* @__PURE__ */ React.createElement(List, null))));
}
export {
  BlocksEditor,
  BlocksList
};
//# sourceMappingURL=index.js.map