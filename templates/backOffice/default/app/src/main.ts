import { Dashboard, EditPage } from "./entryPoints";

import MediaLibrary from "./components/MediaLibrary";
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
  MediaLibrary,
};
