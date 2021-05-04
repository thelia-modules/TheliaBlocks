import "./List.css";

import React, { ChangeEvent, FocusEvent } from "react";
import Tippy from "@tippyjs/react";

import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

enum typeList {
  Unordered = "ul",
  Ordered = "ol",
}

export type BlockListData = {
  type: typeList;
  values: string[];
};

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
  const [type, setType] = React.useState<string>(initialData.type);
  const [values, setValues] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (data.type) {
      setType(data.type);
    }
    if (data.values) {
      setValues(data.values);
    }
  }, [data]);

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    onUpdate({ ...data, type: e.target.value });
  };

  const onChangeValue = ({
    value,
    index,
  }: {
    value: string;
    index: number;
  }) => {
    setValues(
      values.map((currentValue, currentIndex) =>
        currentIndex === index ? value : currentValue
      )
    );
  };

  const onBlurValue = () => {
    onUpdate({ ...data, values });
  };

  const addLine = () => {
    const newValues = [...values, ""];
    setValues(newValues);
    onUpdate({ ...data, values: newValues });
  };

  const deleteLine = (index: number) => {
    const newValues = values.filter(
      (val, currentIndex: number) => currentIndex !== index
    );
    setValues(newValues);
    onUpdate({ ...data, values: newValues });
  };

  return (
    <div className="BlockList">
      <div className="BlockList-config">
        <label htmlFor="title-level">Type</label>
        <select
          name="title-level"
          id="title-level"
          onChange={onChangeType}
          value={type}
        >
          {types.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="BlockList-list">
        {values.map((value, index) => (
          <div className="BlockList-line" key={index}>
            <input
              type="text"
              name="title-text"
              id="title-text"
              placeholder="Texte"
              value={value}
              onChange={(e) => onChangeValue({ value: e.target.value, index })}
              onBlur={onBlurValue}
            />
            <Tippy content={"Supprimer l'élément"}>
              <button
                onClick={() => deleteLine(index)}
                disabled={values.length < 2}
              >
                <i className="fa fa-trash"></i>
              </button>
            </Tippy>
          </div>
        ))}
        <div className="text-center">
          <button className="BlockList-add" onClick={addLine}>Ajouter un élément</button>
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
