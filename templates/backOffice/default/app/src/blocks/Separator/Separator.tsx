import "./Separator.css";

import React, { ChangeEvent, FocusEvent } from "react";

import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

export type BlockSeparatorData = {
  type: string;
  size: Number;
};

const types = [
  {
    label: "Espace",
    value: "space",
  },
  {
    label: "Bordure",
    value: "hr",
  },
];

function BlockSeparatorComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockSeparatorData>) {
  const [type, setType] = React.useState<string>(initialData.type);
  const [size, setSize] = React.useState<Number>(initialData.size);

  React.useEffect(() => {
    if (data.type) {
      setType(data.type);
    }
    if (data.size) {
      setSize(data.size);
    }
  }, [data]);

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
    onUpdate({ ...data, type: e.target.value });
  };

  const onChangeSize = (e: ChangeEvent<HTMLInputElement>) => {
    setSize(parseFloat(e.target.value));
  };

  const onBlurSize = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onUpdate({ ...data, size: parseFloat(e.target.value) });
    }
  };

  return (
    <div className="BlockSeparator" data-type={type}>
      <div className="BlockSeparator-field">
        <label htmlFor="separator-type">Type</label>
        <select
          name="separator-type"
          id="separator-type"
          onChange={onChangeType}
          value={type.toString()}
        >
          {types.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="BlockSeparator-field">
        <label htmlFor="separator-size">Size</label>
        <input
          type="number"
          name="separator-size"
          id="separator-size"
          step="0.01"
          value={size.toString()}
          onChange={onChangeSize}
          onBlur={onBlurSize}
        />
      </div>
    </div>
  );
}

const initialData = {
  type: "space",
  size: 1,
};

const moduleType = {
  id: "blockSeparator",
};

const BlockSeparator: BlockPluginDefinition<BlockSeparatorData> = {
  type: moduleType,
  component: BlockSeparatorComponent,
  initialData,
  title: {
    default: "Separator",
    fr_FR: "Séparateur",
  },
  description: {
    default: "Display a separator",
    fr_FR: "Affiche un séparateur",
  },
  image: {
    default:
      "https://source.unsplash.com/featured/300x250?nature&blockSeparator",
  },
};

export default BlockSeparator;
