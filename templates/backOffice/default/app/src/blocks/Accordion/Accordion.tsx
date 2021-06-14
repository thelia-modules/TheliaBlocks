import React, { ChangeEvent } from "react";
import { nanoid } from "nanoid";
import Tippy from "@tippyjs/react";

import "./Accordion.css";

import {
  IBlock,
  BlockPluginDefinition,
  BlockModuleComponentProps,
} from "../../types";
import BlockGroup from "../Group";

type AccordionData = Array<ItemData>;
type ItemData = {
  id: string;
  title: string;
  group: IBlock;
};
export type AccordionComponentProps = {
  data: AccordionData;
};
const MIN_ITEMS = 1;
const moduleType = {
  id: "blockAccordion",
};
const emptyItemData = () => {
  const itemId = nanoid();

  return {
    id: itemId,
    title: "",
    group: {
      id: nanoid(),
      type: BlockGroup.type,
      parent: itemId,
      data: BlockGroup.initialData,
    },
  };
};

function AccordionComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<AccordionData>) {
  const handleDeleteItem = (itemToDelete: ItemData) => {
    onUpdate(
      data.filter((item) => item?.id !== itemToDelete.id) as AccordionData
    );
  };

  const addItem = (index: number) => {
    onUpdate([
      ...data.slice(0, index + 1),
      emptyItemData(),
      ...data.slice(index + 1),
    ]);
  };

  const handleUpdateGroup =
    (currentItem: ItemData) => (newData: IBlock["data"]) => {
      onUpdate(
        data.map((item) =>
          item.id === currentItem.id
            ? {
                ...item,
                group: {
                  ...item.group,
                  data: newData,
                },
              }
            : item
        )
      );
    };

  const onChangeTitle = (
    e: ChangeEvent<HTMLInputElement>,
    currentItem: ItemData
  ) => {
    onUpdate(
      data.map((item) =>
        item.id === currentItem.id
          ? {
              ...item,
              title: e.target.value,
            }
          : item
      )
    );
  };

  return (
    <div className="flex flex-col w-full gap-4 Accordion">
      {data.map((item, indexItem) => (
        <React.Fragment key={`${item.id}-wrapper`}>
          <div className="Accordion-item">
            <div className="Accordion-itemHead">
              <div className="Accordion-itemTitle">
                <label htmlFor={`title-text-${item.id}`}>Titre</label>
                <input
                  type="text"
                  name={`title-text-${item.id}`}
                  id={`title-text-${item.id}`}
                  value={item.title}
                  onChange={(e) => onChangeTitle(e, item)}
                />
              </div>
              {data.length > MIN_ITEMS && (
                <Tippy content={"Supprimer l'élément"}>
                  <button
                    className="text-sm text-red-500 hover:bg-red-50"
                    onClick={() => handleDeleteItem(item)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </Tippy>
              )}
            </div>
            <BlockGroup.component
              data={item.group.data}
              onUpdate={handleUpdateGroup(item)}
              excludeBlockType={[moduleType.id, "blockFullWidthImage"]}
              id={item.id}
            />
          </div>
          {indexItem < data.length - 1 && (
            <Tippy content={"Ajouter un élément"}>
              <button
                key={`${item.id}-add-block`}
                className="px-3 py-2 border border-dashed bg-gray-50 focus:outline-none hover:bg-gray-100"
                onClick={() => addItem(indexItem)}
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

const initialData: AccordionData = [emptyItemData(), emptyItemData()];

const accordionBlock: BlockPluginDefinition<AccordionData> = {
  type: moduleType,
  component: AccordionComponent,
  initialData,
  title: {
    default: "Accordion",
    fr_FR: "Accordéon",
  },
  description: {
    default: "Display a list of collapsable groups",
    fr_FR: "Affiche une liste de groupes d'éléments refermables",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&accordion",
  },
};

export default accordionBlock;
