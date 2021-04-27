import "./styles/index.css";

import React, { useEffect } from "react";
import { useDispatch  } from "react-redux";

import { setGroup, initialState as initialGroupState } from "./redux/group";
import { setBlocks, initialState as initialBlocksState } from "./redux/blocks";
import Menu from "./components/Menu";
import Group from "./components/Group";

export default function CreateGroup() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGroup(initialGroupState));
    dispatch(setBlocks(initialBlocksState));
  }, [])

  return (
    <div className="App">
      <Group />
      <Menu />
    </div>
  );
}
