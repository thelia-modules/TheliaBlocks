import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NumberParam } from "serialize-query-params";
import { useQueryParam } from "use-query-params";

import { RootState } from "../redux/store";
import { setGroup, setGroupTitle, setGroupSlug, initialState as initialGroupState } from "../redux/group";
import { setBlocks, initialState as initialBlocksState } from "../redux/blocks";
import { useCreateOrUpdateGroup, useGroups } from "../hooks/data";
import { GroupTypeStore } from "../types";

function GroupsDropdown({
  search,
  onGroupClick,
}: {
  search: string;
  onGroupClick: (group: GroupTypeStore) => any;
}) {
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
    ({ title } : { title: GroupTypeStore["title"] }) =>
      title?.search(new RegExp(search, "i")) !== -1
  );
  if (!autoCompleteResults.length) {
    return null;
  }

  return (
    <ul className="border border-gray-400 divide-y divide-gray-300 top-full">
      {autoCompleteResults.map((group: GroupTypeStore) => (
        <li
          key={group.id}
          onClick={() => onGroupClick(group)}
          className="px-4 py-1 cursor-pointer"
        >
          {group.title}
        </li>
      ))}
    </ul>
  );
}

function GroupTitle() {
  const dispatch = useDispatch();
  const groupState = useSelector((state: RootState) => state.group);
  const [, setGroupId] = useQueryParam("id", NumberParam);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setGroupTitle(e.target.value));
    dispatch(setGroupSlug(e.target.value));
  };

  const onGroupClick = (group: GroupTypeStore) => {
    if (group?.id) {
      setGroupId(parseInt(group.id, 10));
    }
  };

  return (
    <div className="mb-6 GroupTitle">
      <input
        type="text"
        value={groupState.title}
        placeholder="Titre de la group"
        className="w-full"
        onChange={onInputChange}
      />
      {groupState.title && !groupState.id && (
        <GroupsDropdown search={groupState.title} onGroupClick={onGroupClick} />
      )}
    </div>
  );
}

function GroupActions({ onSave }: { onSave: Function }) {
  const groupId = useSelector((state: RootState) => state.group.id);

  const newGroup = () => {
    if(confirm("Are you sure ? New data might be lost.")){
      setGroup(initialGroupState);
      setBlocks(initialBlocksState); 
    }
  }

  return (
    <div>
      <button className="px-8 font-bold uppercase Button">Validate</button>
      <button
        className="px-8 font-bold uppercase Button Button--primary"
        onClick={() => onSave()}
      >
        {groupId ? 'Save' : 'Create'}
      </button>
      {groupId &&
        <button
          className="px-8 ml-6 font-bold uppercase Button Button--info"
          onClick={() => newGroup()}
        >
          New group
        </button>
      }
    </div>
  );
}

function GroupOptions() {
  const mutation = useCreateOrUpdateGroup();

  const group = useSelector((state: RootState) => state.group);
  const blocks = useSelector((state: RootState) => state.blocks);
  
  return (
    <div className="flex">
      <div className="flex-1">
        <GroupTitle />
      </div>
      <div className="ml-6">
        <GroupActions onSave={() => mutation.mutate({ group, blocks })} />
      </div>
    </div>
  );
}

export default GroupOptions;
