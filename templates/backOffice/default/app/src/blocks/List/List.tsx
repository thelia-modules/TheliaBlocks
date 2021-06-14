import "./List.css";

import React, { ChangeEvent, useCallback } from "react";
import Tippy from "@tippyjs/react";

import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";
import BlockText, { BlockTextData } from "../Text";
import { nanoid } from "nanoid";

enum typeList {
  Unordered = "ul",
  Ordered = "ol",
}

export type BlockListData = {
  type: typeList;
  values: string[];
};

type listItemType = { id: string; value: string };

const types = [
  {
    label: "Ordered",
    value: typeList.Ordered,
  },
  {
    label: "Unordered",
    value: typeList.Unordered,
  },
];

function BlockListComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockListData>) {
  const [listItems, setListItems] = React.useState<listItemType[]>([]);

  React.useEffect(() => {
    if (data.values) {
      setListItems(data.values.map((value) => ({ id: nanoid(), value })));
    }
  }, []);

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    onUpdate({ ...data, type: e.target.value });
  };

  const addLine = () => {
    const newListItems = [...listItems, { id: nanoid(), value: "" }];
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };

  const deleteLine = (id: string) => {
    const newListItems = listItems.filter(
      ({ id: currentId }) => currentId !== id
    );
    setListItems(newListItems);
    onUpdate({ ...data, values: newListItems.map(({ value }) => value) });
  };

  const handleUpdateText = (
    listItem: listItemType,
    textData: BlockTextData
  ) => {
    const newListItems = listItems.map(({ id, value }) => ({
      id,
      value: id === listItem.id ? textData.value : value,
    }));
    setListItems(newListItems);
    onUpdate({
      ...data,
      values: newListItems.map(({ value }) => value),
    });
  };

  return (
    <div className="BlockList">
      <div className="BlockList-config">
        <label htmlFor="title-level">Type</label>
        <select
          name="title-level"
          id="title-level"
          onChange={onChangeType}
          value={data.type}
        >
          {types.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="BlockList-list">
        {listItems.map((listItem) => (
          <div className="BlockList-line" key={listItem.id}>
            <BlockText.component
              id={`text-${listItem.id}`}
              data={{ value: listItem.value }}
              onUpdate={(textData: BlockTextData) => {
                handleUpdateText(listItem, textData);
              }}
            />
            <Tippy content={"Supprimer l'élément"}>
              <button
                onClick={() => deleteLine(listItem.id)}
                disabled={listItems.length < 2}
              >
                <i className="fa fa-trash"></i>
              </button>
            </Tippy>
          </div>
        ))}
        <div className="text-center">
          <button className="BlockList-add" onClick={addLine}>
            Ajouter un élément
          </button>
        </div>
      </div>
    </div>
  );
}

const initialData = {
  type: typeList.Unordered,
  values: [""],
};

const moduleType = {
  id: "blockList",
};

const BlockList: BlockPluginDefinition<BlockListData> = {
  type: moduleType,
  component: BlockListComponent,
  initialData,
  title: {
    default: "List",
    fr_FR: "Liste",
  },
  description: {
    default: "Display a list",
    fr_FR: "Affiche une liste",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockList",
  },
};

export default BlockList;
