import React, { ChangeEvent, useRef, useState } from "react";
import useClickAway from "react-use/lib/useClickAway";

import "./GroupsDropdown.css";

import { GroupTypeStore } from "../../types";
import slugify from "../../utils/slugify";
import { useGroups, useLinkContentToGroup } from "../../hooks/data";
import Loader from "../Loader";

function GroupsDropdown() {
  const [search, setSearch] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<GroupTypeStore>();
  const [open, setOpen] = useState<boolean>(false);
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
  const mutation = useLinkContentToGroup();
  const selectRef = useRef(null);

  useClickAway(selectRef, () => {
    setOpen(false);
  });

  if (isLoading) {
    return (
      <div>
        <Loader width="40px" />
      </div>
    );
  }

  if (isError) {
    return <span>Erreur: {error.message}</span>;
  }

  const results = data.filter(
    ({ slug }: { slug: GroupTypeStore["slug"] }) =>
      slug?.search(new RegExp(slugify(search), "i")) !== -1
  );

  const linkGroupToContent = (group: GroupTypeStore) => {
    mutation.mutate({
      id: group.id,
    });
  };

  const onClickGroup = (group: GroupTypeStore) => {
    setSearch(group.title);
    setSelectedGroup(group);
    setOpen(false);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setSelectedGroup(undefined);
  };

  if (!results.length) {
    return null;
  }

  return (
    <div className="GroupsDropdown">
      <div className="GroupsDropdown-select" ref={selectRef}>
        <input
          type="text"
          value={search}
          onFocus={() => setOpen(true)}
          onChange={onChangeInput}
          className="w-full"
        />
        {open && (
          <ul className="GroupsDropdown-dropdown">
            {results.map((group: GroupTypeStore) => (
              <li key={group.id} className="GroupsDropdown-dropdownItem">
                <button
                  onClick={() => {
                    onClickGroup(group);
                  }}
                >
                  #{group.id} - {group.title}
                  {!!group.itemBlockGroups?.length && (
                    <span className="ml-3 text-sm font-normal text-gray-400">
                      <i className="fa fa-link"></i>
                      {group.itemBlockGroups.map(({ itemId, itemType }) => (
                        <span key={`${itemType}-${itemId}`} className="ml-1">
                          {itemType}-{itemId}
                        </span>
                      ))}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="ml-6">
        <button
          className="px-8 font-bold uppercase Button Button--primary"
          onClick={() => selectedGroup && linkGroupToContent(selectedGroup)}
          disabled={!selectedGroup}
        >
          Lier
        </button>
      </div>
    </div>
  );
}

export default GroupsDropdown;
