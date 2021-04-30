import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "../redux/store";
import { setGroupTitle, setGroupSlug } from "../redux/group";
import { useGroups } from "../hooks/data";
import { GroupTypeStore } from "../types";

function GroupsDropdown({ search }: { search: string }) {
  const {
    isLoading,
    isError,
    error,
    data,
  }: {
    isLoading: boolean;
    isError: boolean;
    error: any;
    data: any;
  } = useGroups();

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const autoCompleteResults = data.filter(
    ({ title }: { title: GroupTypeStore["title"] }) =>
      title?.search(new RegExp(search, "i")) !== -1
  );
  if (!autoCompleteResults.length) {
    return null;
  }

  return (
    <ul className="border border-gray-400 divide-y divide-gray-300 top-full">
      {autoCompleteResults.map((group: GroupTypeStore) => (
        <li key={group.id} className="px-4 py-1 cursor-pointer">
          <Link to={`/edit/${group.id}`}>{group.title}</Link>
        </li>
      ))}
    </ul>
  );
}

function GroupTitle() {
  const dispatch = useDispatch();
  const groupState = useSelector((state: RootState) => state.group);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGroupTitle(e.target.value));
    dispatch(setGroupSlug(e.target.value));
  };

  return (
    <div className="mb-6 GroupTitle">
      <input
        type="text"
        value={groupState.title || ""}
        placeholder="Titre de la group"
        className="w-full"
        onChange={onInputChange}
      />
      {groupState.title && !groupState.id && (
        <GroupsDropdown search={groupState.title} />
      )}
    </div>
  );
}

function GroupActions({ onSave }: { onSave: Function }) {
  const groupId = useSelector((state: RootState) => state.group.id);
  const isUnsaved = useSelector((state: RootState) => state.ui.isUnsaved);

  return (
    <div>
      {groupId && (
        <button className="px-8 font-bold uppercase Button">Validate</button>
      )}
      <button
        className="px-8 font-bold uppercase Button Button--primary"
        onClick={() => onSave()}
        disabled={!isUnsaved}
      >
        {groupId ? "Save" : "Create"}
      </button>
    </div>
  );
}

function GroupOptions({ onSave }: { onSave: Function }) {
  return (
    <div className="flex">
      <div className="flex-1">
        <GroupTitle />
      </div>
      <div className="ml-6">
        <GroupActions onSave={onSave} />
      </div>
    </div>
  );
}

export default GroupOptions;
