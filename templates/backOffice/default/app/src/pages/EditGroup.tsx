import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prompt } from "react-router-dom";
import hash from 'object-hash';

import { RootState } from "../redux/store";
import { setUnsaved, setHashSaved } from "../redux/ui";
import { useCreateOrUpdateGroup, useGroup } from "../hooks/data";
import Menu from "../components/Menu";
import Group from "../components/Group";
import Loader from "../components/Loader";

export default function EditGroup() {
  const { isLoading, isFetchedAfterMount } = useGroup();
  const dispatch = useDispatch();
  const group = useSelector((state: RootState) => state.group);
  const blocks = useSelector((state: RootState) => state.blocks);
  const isUnsaved = useSelector((state: RootState) => state.ui.isUnsaved);
  const hashSaved = useSelector((state: RootState) => state.ui.hashSaved);
  const mutation = useCreateOrUpdateGroup();

  useEffect(() => {
    if(!isUnsaved){
      const currentHash = hash({
        ...group,
        jsonContent: JSON.stringify(blocks),
      });

      dispatch(setUnsaved(hashSaved !== currentHash));
    }
  }, [group, blocks]);

  const onSave = () => {
    mutation.mutate({ group, blocks });
  }

  if(!isFetchedAfterMount || isLoading) {
    return <Loader width="80px" />;
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
