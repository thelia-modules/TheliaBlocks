import "./BlockWrapper.css";

import React, { useState } from "react";
import { moveBlockDown, moveBlockUp } from "../../redux/blocks";

import { IBlock } from "../../types";
import { __PLUGINS } from "../../pluginManager";
import { getI18nText } from "../../utils/i18n";
import { useDispatch } from "react-redux";

function BlockWrapper({
  children,
  block,
  canMove = true,
  canDelete = true,
  handleDelete,
  DndDragHandle,
}: {
  children: React.ReactNode;
  block: IBlock;
  canMove?: boolean;
  canDelete?: boolean;
  handleDelete: (block: IBlock) => any;
  DndDragHandle: () => JSX.Element;
}) {
  const dispatch = useDispatch();
  const [hilight, setHilight] = useState<boolean>(false);
  const blockPluginTitle = __PLUGINS.find(
    (plugin) => plugin.type.id === block.type.id
  )?.title;
  const blockTitle = blockPluginTitle
    ? getI18nText(blockPluginTitle)
    : block.type.id;

  return (
    <div className={`BlockWrapper`}>
      <div className="flex items-center mb-1">
        {DndDragHandle && <DndDragHandle />}
        <h3 className="BlockWrapper-title">{blockTitle}</h3>
        <div className="flex gap-6">
          {canMove ? (
            <div className="flex gap-3">
              <div
                className="cursor-pointer hover:text-blue-500"
                onClick={() => {
                  dispatch(moveBlockUp(block.id));
                }}
              >
                <i className="text-sm fa fa-arrow-up"></i> up
              </div>
              <div
                className="cursor-pointer hover:text-blue-500"
                onClick={() => {
                  dispatch(moveBlockDown(block.id));
                }}
              >
                <i className="text-sm fa fa-arrow-down"></i> down
              </div>
            </div>
          ) : null}
        </div>
        {canDelete ? (
          <button
            className="ml-auto text-sm text-red-500"
            onClick={() => {
              if (window.confirm("La suppression est définitive")) {
                handleDelete(block);
              }
            }}
            onMouseEnter={() => {
              setHilight(true);
            }}
            onMouseLeave={() => {
              setHilight(false);
            }}
          >
            <i className="fa fa-trash"></i> Supprimer
          </button>
        ) : null}
      </div>
      <div
        className={`p-2 border border-gray-400 border-dashed ${
          hilight ? "border-red-500" : ""
        }`}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
}

export default BlockWrapper;
