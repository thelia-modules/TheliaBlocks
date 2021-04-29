import React, { useState } from "react";
import { nanoid } from "nanoid";
import Tippy from "@tippyjs/react";

import {
  IBlock,
  BlockPluginDefinition,
  BlockModuleComponentProps,
} from "../types";
import Block from "../components/Block";
import { usePlugins, __PLUGINS } from "../pluginManager";
import BlockWrapper from "../components/BlockWrapper";
import { getI18nText } from "../utils/i18n";

type MultiColumnsData = Array<ColumnData>;
type ColumnData = {
  id: string;
  blocks: IBlock[];
};
export type MultiColumnsComponentProps = {
  data: MultiColumnsData;
};

const moduleType = {
  id: "multiColumns",
  title: {
    default: "Columns",
    fr_FR: "Colonnes",
  },
  description: {
    default: "Display blocks in multiple columns",
    fr_FR: "Affiche des blocks dans différentes colonnes",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&multiColumns",
  },
};
const MIN_COLUMNS = 2;
const MAX_COLUMNS = 5;
const emptyColumnData = () => ({
  id: nanoid(),
  blocks: [emptyBlockData()],
});
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
}: {
  id: IBlock["id"];
  onUpdate: BlockModuleComponentProps<MultiColumnsData>["onUpdate"];
  onDelete: Function | null;
}) {
  const blocksLibrary = usePlugins();
  const [isSettingBlock, setIsSettingBlock] = useState<boolean>(false);
  return (
    <div className="flex flex-col flex-grow p-2 mt-2 border border-dashed">
      {isSettingBlock ? (
        blocksLibrary
          .filter((block) => block.type.id !== "multiColumns")
          .map((block) => (
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
              {getI18nText(block.type.title)}
            </div>
          ))
      ) : (
        <div className="flex">
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

function MultiColumnsComponent({
  data,
  id,
  onUpdate,
}: BlockModuleComponentProps<MultiColumnsData>) {
  const onUpdateEmpty = (newBlock: IBlock) => {
    onUpdate(
      data.map((column) => ({
        ...column,
        blocks: column.blocks.map((block) => {
          if (block.id === newBlock.id) {
            return {
              ...newBlock,
              parent: id,
            };
          }
          return block;
        }),
      })) as MultiColumnsData
    );
  };

  const handleDeleteColumn = (columnToDelete: ColumnData) => {
    onUpdate(
      data.filter(
        (column) => column?.id !== columnToDelete.id
      ) as MultiColumnsData
    );
  };

  const handleDeleteEmpty = (blockToDelete: IBlock) => {
    onUpdate(
      data.map((column) => ({
        ...column,
        blocks: column.blocks.filter((block) => block?.id !== blockToDelete.id),
      })) as MultiColumnsData
    );
  };

  const handleDeleteBlock = (blockToDelete: IBlock) => {
    onUpdate(
      data.map((column) => ({
        ...column,
        blocks: column.blocks.map((block) => {
          if (block.id === blockToDelete.id) {
            return emptyBlockData();
          }
          return block;
        }),
      })) as MultiColumnsData
    );
  };

  const addColumn = (index: number) => {
    onUpdate([
      ...data.slice(0, index + 1),
      emptyColumnData(),
      ...data.slice(index + 1),
    ]);
  };

  const addBlock = (column: ColumnData, index: number) => {
    onUpdate(
      data.map((currentCol) => {
        if (currentCol.id === column.id) {
          return {
            ...currentCol,
            blocks: [
              ...currentCol.blocks.slice(0, index + 1),
              emptyBlockData(),
              ...currentCol.blocks.slice(index + 1),
            ],
          };
        }
        return currentCol;
      }) as MultiColumnsData
    );
  };

  const handleUpdateBlock = (currentBlock: IBlock) => (newData: IBlock["data"]) => {
    onUpdate( 
      data.map((column) => ({
        ...column,
        blocks: column.blocks.map((block) => {
          if (block.id === currentBlock.id) {
            return {
              ...block,
              data: newData,
            };
          }
          return block;
        }),
      })) as MultiColumnsData
    );
  };

  return (
    <div className="flex w-full gap-2 MultiColumns">
      {data.map((column, indexColumn) => (
        <React.Fragment key={`${column.id}-wrapper`}>
          <div className="flex flex-col flex-1">
            {column.blocks.map((block, indexBlock) => (
              <div className="flex flex-col" key={`${block.id}-wrapper`}>
                {block.type.id === "" ? (
                  <EmptyBlock
                    key={block.id}
                    id={block.id}
                    onUpdate={onUpdateEmpty}
                    onDelete={
                      column.blocks.length > 1
                        ? () => handleDeleteEmpty(block)
                        : null
                    }
                  />
                ) : (
                  <div key={block.id} className="flex-1 mt-2">
                    <BlockWrapper
                      block={block}
                      canMove={false}
                      handleDelete={handleDeleteBlock}
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
                    onClick={() => addBlock(column, indexBlock)}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </Tippy>
              </div>
            ))}
            {data.length > MIN_COLUMNS && (
              <Tippy content={"Supprimer la colonne"}>
                <button
                  className="px-4 py-2 mt-auto text-sm text-red-500 border border-red-100 border-dashed hover:bg-red-50"
                  onClick={() => handleDeleteColumn(column)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </Tippy>
            )}
          </div>
          {indexColumn < data.length - 1 && data.length < MAX_COLUMNS && (
            <Tippy content={"Ajouter une colonne"}>
              <button
                key={`${column.id}-add-block`}
                className="px-3 py-2 border border-dashed bg-gray-50 focus:outline-none hover:bg-gray-100"
                onClick={() => addColumn(indexColumn)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </Tippy>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const initialData: MultiColumnsData = [emptyColumnData(), emptyColumnData()];

const multiCols: BlockPluginDefinition<MultiColumnsData> = {
  type: moduleType,
  component: MultiColumnsComponent,
  initialData,
};

export default multiCols;
