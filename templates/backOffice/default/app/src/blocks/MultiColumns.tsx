import React, { useState } from "react";
import { nanoid } from "nanoid";

import {
  IBlock,
  BlockPluginDefinition,
  BlockModuleComponentProps,
} from "../types";
import Block from "../components/Block";
import { usePlugins, __PLUGINS } from "../pluginManager";
import BlockWrapper from "../components/BlockWrapper";

type MultiColumnsData = Array<IBlock>;
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
const initialColum = () => ({
  id: nanoid(),
  type: { id: "" },
  parent: null,
  data: null,
});

function EmptyColumn({
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
    <div className="flex flex-col flex-grow p-2 border border-dashed">
      {isSettingBlock ? (
        blocksLibrary
          .filter((block) => block.type.id !== "multiColumns")
          .map((block) => {
            return (
              <div
                key={block.id}
                className="hover:text-green-500"
                onClick={() => {
                  onUpdate({
                    id,
                    data: block.initialData,
                    type: block.type,
                  });
                }}
              >
                {block.type}
              </div>
            );
          })
      ) : (
        <div className="flex">
          <button
            className="flex-1 p-2 text-xl bg-gray-200 hover:bg-gray-300"
            onClick={() => setIsSettingBlock(true)}
          >
            Add a bloc
          </button>
          {onDelete && (
            <button
              className="px-4 py-2 ml-2 text-sm text-red-500 bg-gray-200 hover:bg-gray-300"
              onClick={() => onDelete()}
              title="Supprimer"
            >
              <i className="fa fa-trash"></i>
            </button>
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
      data.map((col) => {
        if (col.id === newBlock.id) {
          return {
            ...newBlock,
            parent: id,
          };
        }
        return col;
      }) as MultiColumnsData
    );
  };

  const handleDeleteEmtpy = (blockToDelete: IBlock) => {
    onUpdate(
      data.filter((block) => block?.id !== blockToDelete.id) as MultiColumnsData
    );
  };

  const handleDeleteBlock = (blockToDelete: IBlock) => {
    onUpdate(
      data.map((col) => {
        if (col.id === blockToDelete.id) {
          return initialColum();
        }
        return col;
      }) as MultiColumnsData
    );
  };

  const onClickAdd = (index: number) => {
    onUpdate([...data.slice(0, index), initialColum(), ...data.slice(index)]);
  };

  return (
    <div className="flex w-full gap-2 MultiColumns">
      {data.map((block, index) => (
        <React.Fragment key={`${block.id}-wrapper`}>
          {index > 0 && data.length < MAX_COLUMNS && (
            <button
              key={`${block.id}-add-col`}
              className="focus:outline-none"
              onClick={() => onClickAdd(index)}
              title="Ajouter une colonne"
            >
              <i className="fa fa-plus"></i>
            </button>
          )}
          {block.type.id === "" ? (
            <EmptyColumn
              key={block.id}
              id={block.id}
              onUpdate={onUpdateEmpty}
              onDelete={
                data.length > MIN_COLUMNS
                  ? () => handleDeleteEmtpy(block)
                  : null
              }
            />
          ) : (
            <div key={block.id} className="flex-1">
              <BlockWrapper
                block={block}
                canMove={false}
                handleDelete={handleDeleteBlock}
              >
                <Block block={block} />
              </BlockWrapper>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

const initialData: MultiColumnsData = [initialColum(), initialColum()];

const multiCols: BlockPluginDefinition<MultiColumnsData> = {
  type: moduleType,
  component: MultiColumnsComponent,
  initialData,
};

export default multiCols;
