import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Prompt } from "react-router-dom";
import { toast } from 'react-toastify';

import { RootState } from "../redux/store";
import { setUnsaved } from "../redux/ui";
import { useCreateOrUpdateGroup, useGroup } from "../hooks/data";
import Menu from "../components/Menu";
import Group from "../components/Group";
import Loader from "../components/Loader";

export default function EditGroup({ id, itemId, itemType }: { id?: number, itemId?: number, itemType?: string }) {
  const { isLoading, isFetchedAfterMount, isIdle } = useGroup({ id });
  const dispatch = useDispatch();
  const group = useSelector((state: RootState) => state.group);
  const blocks = useSelector((state: RootState) => state.blocks);
  const isUnsaved = useSelector((state: RootState) => state.ui.isUnsaved);
  const mutation = useCreateOrUpdateGroup({ id, itemId, itemType });

  useEffect(() => {
    dispatch(setUnsaved(true));
  }, [group, blocks]);

  const onSave = () => {
    mutation.mutate({ group, blocks });
    toast.success("Le groupe a bien été sauvegardé");
  }

  if(!isIdle && (!isFetchedAfterMount || isLoading)) {
    return <Loader width="80px" />;
  }

  return (
    <>
      {/* <Prompt
        when={isUnsaved}
        message="Are you sure you want to leave?"
      /> */}
      <Group onSave={onSave} />
      <Menu />
    </>
  );
}
