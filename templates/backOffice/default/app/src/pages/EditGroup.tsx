import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prompt } from "react-router-dom";
import hash from 'object-hash';

import { RootState } from "../redux/store";
import { setUnsaved } from "../redux/ui";
import { useCreateOrUpdateGroup, useGroup } from "../hooks/data";
import Menu from "../components/Menu";
import Group from "../components/Group";

export default function EditGroup() {
  const dispatch = useDispatch();
  const { data } = useGroup();
  const [initialHash, setInitialHash] = useState<string>("");
  const group = useSelector((state: RootState) => state.group);
  const blocks = useSelector((state: RootState) => state.blocks);
  const isUnsaved = useSelector((state: RootState) => state.ui.isUnsaved);
  const mutation = useCreateOrUpdateGroup();

  useEffect(() => {
    dispatch(setUnsaved(false));

    if(data){
      setInitialHash(hash(data));
    }
  }, [data]);

  useEffect(() => {
    const currentHash = hash({
      ...group,
      jsonContent: JSON.stringify(blocks),
    });

    dispatch(setUnsaved(initialHash !== currentHash));
  }, [group, blocks]);

  const onSave = () => {
    mutation.mutate({ group, blocks });

    setInitialHash(hash({
      ...group,
      jsonContent: JSON.stringify(blocks),
    }));
  }

  return (
    <>
      <Prompt
        when={isUnsaved}
        message="Are you sure you want to leave?"
      />
      <Group onSave={onSave} />
      <Menu />
    </>
  );
}
