import React, { ChangeEvent } from "react";
import { setGroupSlug, setGroupTitle } from "../redux/group";
import { useDispatch, useSelector } from "react-redux";

import GroupsDropdown from "./GroupsDropdown";
import { RootState } from "../redux/store";
import Tippy from "@tippyjs/react";
import { useUnlinkContentFromGroup } from "../hooks/data";

function GroupTitle() {
  const dispatch = useDispatch();
  const groupState = useSelector((state: RootState) => state.group);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGroupTitle(e.target.value));
    dispatch(setGroupSlug(e.target.value));
  };

  return (
    <div className="flex flex-1 GroupTitle">
      <input
        type="text"
        value={groupState.title || ""}
        placeholder="Titre du groupe"
        className="w-full"
        onChange={onInputChange}
      />
    </div>
  );
}

function GroupActions({ onSave }: { onSave: Function }) {
  const groupId = useSelector((state: RootState) => state.group.id);
  const isUnsaved = useSelector((state: RootState) => state.ui.isUnsaved);

  return (
    <div className="flex items-center">
      {/*
        <button className="px-8 font-bold uppercase Button">Validate</button>
      */}
      <button
        className="px-8 font-bold uppercase Button Button--primary"
        onClick={() => onSave()}
        disabled={!isUnsaved}
      >
        {groupId ? "Enregistrer" : "Créer"}
      </button>
      <GroupUnlink />
    </div>
  );
}

function GroupUnlink() {
  const group = useSelector((state: RootState) => state.group);
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );
  const mutation = useUnlinkContentFromGroup();

  const onUnlinkGroup = () => {
    const itemBlockGroup = group?.itemBlockGroups?.find(
      (itemBlockGroup) =>
        itemBlockGroup.itemId === windowConstants.itemId &&
        itemBlockGroup.itemType === windowConstants.itemType
    );

    if (itemBlockGroup?.id) {
      mutation.mutate({ id: itemBlockGroup.id });
    }
  };

  if (!windowConstants.itemId || !group.id) {
    return null;
  }

  return (
    <Tippy content={"Délier le groupe de ce contenu"}>
      <button
        className="ml-6 font-bold text-red-600 uppercase"
        onClick={() => onUnlinkGroup()}
      >
        <i className="fa fa-unlink"></i>
      </button>
    </Tippy>
  );
}

function GroupOptions({ onSave }: { onSave: Function }) {
  const group = useSelector((state: RootState) => state.group);
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );

  const showLinkExistingGroup =
    !group.id && !!windowConstants.itemId && !!windowConstants.itemType;

  return (
    <div className="flex">
      <div className="flex-1">
        <h3 className="mb-4 text-2xl font-bold">
          {group.id ? "Edition du groupe" : "Créer un nouveau groupe"}
        </h3>
        <div className="flex">
          <div className="flex-grow">
            <GroupTitle />
          </div>
          <div className="ml-6">
            <GroupActions onSave={onSave} />
          </div>
        </div>
      </div>
      {showLinkExistingGroup && (
        <div className="flex-1 pl-10 ml-10 border-l">
          <h3 className="mb-4 text-2xl font-bold">Lier un groupe existant</h3>
          <GroupsDropdown />
        </div>
      )}
    </div>
  );
}

export default GroupOptions;
