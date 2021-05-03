import Button from "./blocks/Button";
import ImageBlock from "./blocks/Image";
import Group from "./blocks/Group";
import MultiColumnss from "./blocks/MultiColumns";
import Product from "./blocks/Product";
import Separator from "./blocks/Separator";
import Text from "./blocks/Text";
import Title from "./blocks/Title";
import Video from "./blocks/Video";
import Highlight from "./blocks/Highlight";
import List from "./blocks/List";
import { nanoid } from "nanoid";
// const modules = import.meta.globEager("./blocks/*.tsx");

export const __PLUGINS = [
  { id: nanoid(), ...Text },
  { id: nanoid(), ...ImageBlock },
  { id: nanoid(), ...Group },
  { id: nanoid(), ...MultiColumnss },
  { id: nanoid(), ...Product },
  { id: nanoid(), ...Title },
  { id: nanoid(), ...Video },
  { id: nanoid(), ...Separator },
  { id: nanoid(), ...Button },
  { id: nanoid(), ...Highlight },
  { id: nanoid(), ...List },
];

export function registerPlugin(plugin: any) {
  __PLUGINS.push({ ...plugin, id: nanoid() } as any);
}

export function usePlugins() {
  return __PLUGINS;
}
