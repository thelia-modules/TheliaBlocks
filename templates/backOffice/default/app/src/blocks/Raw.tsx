import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
} from "TheliaBlocksTypes";

import React, { ChangeEvent, FocusEvent } from "react";

export type BlockRawData = {
  value: string;
};

function BlockRawComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockRawData>) {
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    if (data.value) {
      setValue(data.value);
    }
  }, [data]);

  const onChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onBlurValue = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (e.target.value) {
      onUpdate({ value: e.target.value });
    }
  };

  return (
    <div className="w-full">
      <textarea
        className="w-full"
        placeholder="Value"
        rows={10}
        onChange={onChangeValue}
        onBlur={onBlurValue}
        value={value}
      />
    </div>
  );
}

const initialData = {
  value: "",
};

const moduleType = {
  id: "blockRaw",
};

const blockRaw: BlockPluginDefinition<BlockRawData> = {
  type: moduleType,
  component: BlockRawComponent,
  initialData,
  title: {
    default: "HTML",
    fr_FR: "HTML",
  },
  description: {
    default: "Raw HTML content",
    fr_FR: "Contenu libre HTML",
  },
};

export default blockRaw;
