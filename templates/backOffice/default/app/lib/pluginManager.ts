import ImageBlock from "./blocks/Image";
import MultiColumnss from "./blocks/MultiColumns";
import Product from "./blocks/Product";
import Text from "./blocks/Text";
import { nanoid } from "nanoid";
// const modules = import.meta.globEager("./blocks/*.tsx");

export const __PLUGINS = [
  { id: nanoid(), ...Text },
  { id: nanoid(), ...ImageBlock },
  { id: nanoid(), ...MultiColumnss },
  { id: nanoid(), ...Product },
];

export function registerPlugin(plugin: any) {
  __PLUGINS.push({ ...plugin, id: nanoid() } as any);
}

export function usePlugins() {
  return __PLUGINS;
}
