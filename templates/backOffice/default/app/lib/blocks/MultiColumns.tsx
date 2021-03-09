import {
  IBlock,
  BlockPluginDefinition,
  BlockModuleComponentProps,
} from "../types";

import React, { useState } from "react";

import Block from "../components/Block";

import { nanoid } from "nanoid";
import { usePlugins, __PLUGINS } from "../pluginManager";
import BlockWrapper from "../components/BlockWrapper/BlockWrapper";

export type MultiColumnssData = Array<IBlock | null>;

export type MultiColumnssComponentProps = {
  data: MultiColumnssData;
};

const moduleType = "multiColumns";

function EmptyColumn({ onUpdate }: { onUpdate: Function }) {
  const blocksLibrary = usePlugins();
  const [isSettingBlock, setIsSettingBlock] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-4/12 p-2 border border-dashed">
      {isSettingBlock ? (
        blocksLibrary
          .filter((block) => block.type !== "multiColumns")
          .map((block) => {
            return (
              <div
                key={block.id}
                className="hover:text-green-500"
                onClick={() => {
                  onUpdate({
                    id: nanoid(),
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
        <button
          className="flex-1 text-xl bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsSettingBlock(true)}
        >
          Add a bloc
        </button>
      )}
    </div>
  );
}

function MultiColumnssComponent({
  data,
  id,
  onUpdate,
}: BlockModuleComponentProps<MultiColumnssData>) {
  return (
    <div className="flex w-full gap-2 MultiColumnss">
      {data.map((block, index) => {
        if (!block) {
          return (
            <EmptyColumn
              key={index}
              onUpdate={(newBlock: IBlock) => {
                onUpdate(
                  data.map((col, idx) => {
                    if (index === idx) {
                      return {
                        ...newBlock,
                        parent: id,
                      };
                    }
                    return col;
                  }) as MultiColumnssData
                );
              }}
            />
          );
        }
        return (
          <div key={index} className="flex-1">
            <BlockWrapper
              key={block.id}
              block={block}
              canMove={false}
              handleDelete={(blockToDelete) => {
                onUpdate(
                  data.map((col) => {
                    if (col?.id === blockToDelete.id) {
                      return null;
                    }
                    return col;
                  }) as MultiColumnssData
                );
              }}
            >
              <Block block={block} />
            </BlockWrapper>
          </div>
        );
      })}
    </div>
  );
}

const initialData: MultiColumnssData = [null, null, null];

const multiCols: BlockPluginDefinition<MultiColumnssData> = {
  type: moduleType,
  component: MultiColumnssComponent,
  initialData,
};

export default multiCols;
