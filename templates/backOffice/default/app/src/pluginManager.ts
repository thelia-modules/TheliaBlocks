import Button from "./blocks/Button";
import ImageBlock from "./blocks/Image";
import Group from "./blocks/Group";
import MultiColumns from "./blocks/MultiColumns";
import Product from "./blocks/Product";
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
import { useState } from "react";
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
  { id: nanoid(), ...Product },
  { id: nanoid(), ...Group },
  { id: nanoid(), ...Raw },
];

declare const window: { eventTBPlugins: any, __PLUGINS: any[] };
window.eventTBPlugins = new CustomEvent("update-tb-plugins");

export function registerPlugin(plugin: any) {
  if (!window.__PLUGINS) window.__PLUGINS = [];

  window.__PLUGINS.push({ ...plugin, id: nanoid() } as any);

  document.dispatchEvent(window.eventTBPlugins);
}

export function usePlugins() {
  const [plugins, setPlugins] = useState([
    ...__PLUGINS,
    ...window.__PLUGINS || [],
  ]);

  document.addEventListener("update-tb-plugins", () => {
    setPlugins([
      ...__PLUGINS,
      ...window.__PLUGINS,
    ]);
  });

  return plugins;
}
