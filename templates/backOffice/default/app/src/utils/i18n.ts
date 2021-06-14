import { CURRENT_LOCAL } from "../constants";
import { i18nString } from "../types";

export function getI18nText(text: i18nString) {
  return text[CURRENT_LOCAL] || text["default"];
}
