import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Prompt } from "react-router-dom";
import hash from 'object-hash';

import { RootState } from "../redux/store";
import { useCreateOrUpdateGroup, useGroup } from "../hooks/data";
import Menu from "../components/Menu";
import Group from "../components/Group";

export default function EditGroup() {
  const { data } = useGroup();
  const [initialHash, setInitialHash] = useState<string>("");
  const group = useSelector((state: RootState) => state.group);
  const blocks = useSelector((state: RootState) => state.blocks);

  useEffect(() => {
    if(data){
      setInitialHash(hash(data));
    }
  }, [data]);

  const checkUnSavedChanges = () => {
    const currentHash = hash({
      ...group,
      jsonContent: JSON.stringify(blocks),
    });

    return initialHash !== currentHash;
  }

  const onSave = () => {
    const mutation = useCreateOrUpdateGroup();

    mutation.mutate({ group, blocks });
    setInitialHash(hash({
      ...group,
      jsonContent: JSON.stringify(blocks),
    }));
  }

  return (
    <>
      <Prompt
        when={checkUnSavedChanges()}
        message="Are you sure you want to leave?"
      />
      <Group onSave={onSave} />
      <Menu />
    </>
  );
}
