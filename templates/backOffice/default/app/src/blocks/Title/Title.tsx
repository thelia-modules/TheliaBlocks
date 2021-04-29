import "./Title.css";

import React, { ChangeEvent, FocusEvent } from "react";

import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

export type BlockTitleData = {
  level: Number;
  text: string;
};

const levels = [
  {
    label: "Neutre",
    value: 0,
  },
  {
    label: "Niveau 1",
    value: 1,
  },
  {
    label: "Niveau 2",
    value: 2,
  },
  {
    label: "Niveau 3",
    value: 3,
  },
  {
    label: "Niveau 4",
    value: 4,
  },
  {
    label: "Niveau 5",
    value: 5,
  },
  {
    label: "Niveau 6",
    value: 6,
  },
];

function BlockTitleComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockTitleData>) {
  const [level, setLevel] = React.useState<Number>(initialData.level);
  const [text, setText] = React.useState<string>(initialData.text);

  React.useEffect(() => {
    if (data.level) {
      setLevel(data.level);
    }
    if (data.text) {
      setText(data.text);
    }
  }, [data]);

  const onChangeLevel = (e: ChangeEvent<HTMLSelectElement>) => {
    setLevel(parseInt(e.target.value, 10));
    onUpdate({ ...data, level: parseInt(e.target.value, 10) });
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onBlurText = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      onUpdate({ ...data, text: e.target.value });
    }
  };

  return (
    <div className="BlockTitle">
      <div className="BlockTitle-field">
        <label htmlFor="title-level">Niveau</label>
        <select
          name="title-level"
          id="title-level"
          onChange={onChangeLevel}
          value={level.toString()}
        >
          {levels.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      <div className="flex-grow BlockTitle-field">
        <label htmlFor="title-text">Texte</label>
        <input
          type="text"
          name="title-text"
          id="title-text"
          value={text}
          onChange={onChangeText}
          onBlur={onBlurText}
        />
      </div>
    </div>
  );
}

const initialData = {
  level: 0,
  text: "",
};

const moduleType = {
  id: "blockTitle",
  title: {
    default: "Title",
    fr_FR: "Titre",
  },
  description: {
    default: "Display a title",
    fr_FR: "Affiche un titre",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockTitle",
  },
};

const BlockTitle: BlockPluginDefinition<BlockTitleData> = {
  type: moduleType,
  component: BlockTitleComponent,
  initialData,
};

export default BlockTitle;
