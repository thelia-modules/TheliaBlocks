import { Dashboard, EditPage } from "./entryPoints";

import blocks from "./blocks";
import { nanoid } from "nanoid";
import { registerPlugin } from "./pluginManager";

export {
  registerPlugin as default,
  registerPlugin,
  nanoid as generateId,
  blocks,
  EditPage,
  Dashboard,
};
