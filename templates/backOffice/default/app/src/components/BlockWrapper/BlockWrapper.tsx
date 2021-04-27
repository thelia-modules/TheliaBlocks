import "./BlockWrapper.css";
import React, { useState } from "react";
import { IBlock } from "../../types";
import { useDispatch } from "react-redux";
import { moveBlockUp, moveBlockDown } from "../../redux/blocks";

function BlockWrapper({
  children,
  block,
  canMove = true,
  canDelete = true,
  handleDelete,
}: {
  children: React.ReactNode;
  block: IBlock;
  canMove?: boolean;
  canDelete?: boolean;
  handleDelete: (block: IBlock) => any;
}) {
  const dispatch = useDispatch();
  const [hilight, setHilight] = useState<boolean>(false);
  return (
    <div className={`BlockWrapper`}>
      <div className="flex items-center mb-2">
        <h3 className="BlockWrapper-title">{block.type}</h3>
        <div className="flex gap-6">
          {canMove ? (
            <div className="flex gap-3">
              <div
                className="cursor-pointer hover:text-blue-500"
                onClick={() => {
                  dispatch(moveBlockUp(block.id));
                }}
              >
                ▲ up
              </div>
              <div
                className="cursor-pointer hover:text-blue-500"
                onClick={() => {
                  dispatch(moveBlockDown(block.id));
                }}
              >
                ▼ down
              </div>
            </div>
          ) : null}
        </div>
        {canDelete ? (
          <button
            className="ml-auto text-red-500"
            onClick={() => {
              if (window.confirm("la suppresion est définitive")) {
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
