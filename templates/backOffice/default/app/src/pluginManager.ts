import Button from "./blocks/Button";
import ImageBlock from "./blocks/Image";
import Group from "./blocks/Group";
import MultiColumns from "./blocks/MultiColumns";
// import Product from "./blocks/Product";
import Separator from "./blocks/Separator";
import Text from "./blocks/Text";
import Title from "./blocks/Title";
import Video from "./blocks/Video";
import Highlight from "./blocks/Highlight";
import List from "./blocks/List";
import Accordion from "./blocks/Accordion";
import Raw from "./blocks/Raw";
import FullWidthImage from "./blocks/FullWidthImage";
import { nanoid } from "nanoid";
// const modules = import.meta.globEager("./blocks/*.tsx");

export const __PLUGINS = [
  { id: nanoid(), ...Text },
  { id: nanoid(), ...Title },
  { id: nanoid(), ...ImageBlock },
  { id: nanoid(), ...FullWidthImage },
  { id: nanoid(), ...MultiColumns },
  { id: nanoid(), ...Separator },
  { id: nanoid(), ...Button },
  { id: nanoid(), ...List },
  { id: nanoid(), ...Accordion },
  { id: nanoid(), ...Highlight },
  { id: nanoid(), ...Video },
  // { id: nanoid(), ...Product },
  { id: nanoid(), ...Group },
  { id: nanoid(), ...Raw },
];

export function registerPlugin(plugin: any) {
  __PLUGINS.push({ ...plugin, id: nanoid() } as any);
}

export function usePlugins() {
  return __PLUGINS;
}
