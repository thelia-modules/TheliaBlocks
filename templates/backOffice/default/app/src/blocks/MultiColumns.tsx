import React from "react";
import { nanoid } from "nanoid";
import Tippy from "@tippyjs/react";

import {
  IBlock,
  BlockPluginDefinition,
  BlockModuleComponentProps,
} from "../types";
import BlockGroup from "./Group";

type MultiColumnsData = Array<ColumnData>;
type ColumnData = {
  id: string;
  group: IBlock;
};
export type MultiColumnsComponentProps = {
  data: MultiColumnsData;
};

const moduleType = {
  id: "multiColumns",
};
const MIN_COLUMNS = 2;
const MAX_COLUMNS = 5;

const emptyColumnData = () => {
  const columnId = nanoid();

  return {
    id: columnId,
    group: {
      id: nanoid(),
      type: BlockGroup.type,
      parent: columnId,
      data: BlockGroup.initialData,
    },
  };
};

function MultiColumnsComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<MultiColumnsData>) {
  const handleDeleteColumn = (columnToDelete: ColumnData) => {
    onUpdate(
      data.filter(
        (column) => column?.id !== columnToDelete.id
      ) as MultiColumnsData
    );
  };

  const addColumn = (index: number) => {
    onUpdate([
      ...data.slice(0, index + 1),
      emptyColumnData(),
      ...data.slice(index + 1),
    ]);
  };

  const handleUpdateGroup = (currentColumn: ColumnData) => (
    newData: IBlock["data"]
  ) => {
    onUpdate(
      data.map((column) =>
        column.id === currentColumn.id
          ? {
              ...column,
              group: {
                ...column.group,
                data: newData,
              },
            }
          : column
      )
    );
  };

  return (
    <div className="flex w-full gap-2 MultiColumns">
      {data.map((column, indexColumn) => (
        <React.Fragment key={`${column.id}-wrapper`}>
          <div className="flex flex-col flex-1">
            <BlockGroup.component
              data={column.group.data}
              onUpdate={handleUpdateGroup(column)}
              id={column.id}
              excludeBlockType={[moduleType.id]}
            />
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
                className="px-3 py-2 mt-2 border border-dashed bg-gray-50 focus:outline-none hover:bg-gray-100"
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

export default multiCols;
