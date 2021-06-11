import React, { useState } from "react";
import { nanoid } from "nanoid";
import Tippy from "@tippyjs/react";

import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
  IBlock,
} from "TheliaBlocksTypes";
import Block from "../components/Block";
import { usePlugins, __PLUGINS } from "../pluginManager";
import BlockWrapper from "../components/BlockWrapper";
import { getI18nText } from "../utils/i18n";
import { reorder } from "../utils/array";
import useDragAndDrop from "../hooks/dragAndDrop";

export type BlockGroupData = IBlock[];

const emptyBlockData = () => ({
  id: nanoid(),
  type: { id: "", title: { default: "" } },
  parent: null,
  data: null,
});

function EmptyBlock({
  id,
  onUpdate,
  onDelete,
  excludeBlockType,
  DndDragHandle,
}: {
  id: IBlock["id"];
  onUpdate: BlockModuleComponentProps<BlockGroupData>["onUpdate"];
  onDelete: Function | null;
  excludeBlockType?: string[];
  DndDragHandle: () => JSX.Element;
}) {
  const blocksLibrary = usePlugins();
  const [isSettingBlock, setIsSettingBlock] = useState<boolean>(false);
  return (
    <div className="flex flex-col flex-grow p-2 mt-2 border border-dashed">
      {isSettingBlock ? (
        blocksLibrary
          .filter((block: any) => !excludeBlockType?.includes(block.type.id))
          .map((block: any) => (
            <div
              key={block.id}
              className="px-4 py-2 border-b border-white cursor-pointer hover:bg-yellow-100 bg-yellow-50"
              onClick={() => {
                onUpdate({
                  id,
                  data: block.initialData,
                  type: block.type,
                });
              }}
            >
              {getI18nText(block.title)}
            </div>
          ))
      ) : (
        <div className="flex">
          {DndDragHandle && <DndDragHandle />}
          <button
            className="flex-1 p-4 text-xl bg-yellow-50 hover:bg-yellow-100"
            onClick={() => setIsSettingBlock(true)}
          >
            Selectionnez un block
          </button>
          {onDelete && (
            <Tippy content={"Supprimer le bloc"}>
              <button
                className="px-4 py-2 ml-2 text-sm text-red-500 bg-red-50 hover:bg-red-100"
                onClick={() => onDelete()}
              >
                <i className="fa fa-trash"></i>
              </button>
            </Tippy>
          )}
        </div>
      )}
    </div>
  );
}

export function BlockGroupComponent({
  id,
  data,
  onUpdate,
  excludeBlockType,
}: BlockModuleComponentProps<BlockGroupData>) {
  const { DndWrapper, DndWrapElement } = useDragAndDrop();

  const onUpdateEmpty = (newBlock: IBlock) => {
    onUpdate(
      data.map((block) =>
        block.id === newBlock.id ? { ...newBlock, parent: id } : block
      ) as BlockGroupData
    );
  };

  const handleDeleteEmpty = (blockToDelete: IBlock) => {
    onUpdate(data.filter((block) => block?.id !== blockToDelete.id));
  };

  const handleDeleteBlock = (blockToDelete: IBlock) => {
    onUpdate(
      data.map((block) =>
        block.id === blockToDelete.id ? emptyBlockData() : block
      )
    );
  };

  const addBlock = (index: number) => {
    onUpdate([
      ...data.slice(0, index + 1),
      emptyBlockData(),
      ...data.slice(index + 1),
    ]);
  };

  const handleUpdateBlock =
    (currentBlock: IBlock) => (newData: IBlock["data"]) => {
      onUpdate(
        data.map((block) => {
          if (block.id === currentBlock.id) {
            return {
              ...block,
              data: newData,
            };
          }
          return block;
        })
      );
    };

  const onDragEnd = (e: any) => {
    if (
      e.destination &&
      typeof e.source.index === "number" &&
      typeof e.destination.index === "number"
    ) {
      onUpdate(reorder(data, e.source.index, e.destination.index));
    }
  };

  return (
    <div className="BlockGroup">
      <DndWrapper id={id} onDragEnd={onDragEnd} wrapperClass="flex flex-col">
        {data.map((block, indexBlock) => (
          <DndWrapElement
            key={block.id}
            id={block.id}
            index={indexBlock}
            wrapperClass="flex flex-col"
          >
            {({ DndDragHandle }: { DndDragHandle: () => JSX.Element }) => (
              <>
                {block.type.id === "" ? (
                  <EmptyBlock
                    key={block.id}
                    id={block.id}
                    onUpdate={onUpdateEmpty}
                    onDelete={
                      data.length > 1 ? () => handleDeleteEmpty(block) : null
                    }
                    excludeBlockType={excludeBlockType}
                    DndDragHandle={DndDragHandle}
                  />
                ) : (
                  <div key={block.id} className="flex-1 mt-2">
                    <BlockWrapper
                      block={block}
                      canMove={false}
                      handleDelete={handleDeleteBlock}
                      DndDragHandle={DndDragHandle}
                    >
                      <Block
                        block={block}
                        handleUpdate={handleUpdateBlock(block)}
                      />
                    </BlockWrapper>
                  </div>
                )}
                <Tippy content={"Ajouter un bloc"}>
                  <button
                    key={`${block.id}-add-col`}
                    className="p-2 mt-2 border border-dashed bg-gray-50 focus:outline-none hover:bg-gray-100"
                    onClick={() => addBlock(indexBlock)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </Tippy>
              </>
            )}
          </DndWrapElement>
        ))}
      </DndWrapper>
    </div>
  );
}

const initialData = [emptyBlockData()];

const moduleType = {
  id: "blockGroup",
};

const BlockGroup: BlockPluginDefinition<BlockGroupData> = {
  type: moduleType,
  component: BlockGroupComponent,
  initialData,
  title: {
    default: "Group",
    fr_FR: "Groupe",
  },
  description: {
    default: "Allow to group multile blocks",
    fr_FR: "Permet de grouper plusieurs blocs",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockGroup",
  },
};

export default BlockGroup;
