import "server-only";

import enDictionary from "@/messages/en.json";
import { type Locale } from "@/lib/i18n-config";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  fr: () => import("@/messages/fr.json").then((module) => module.default),
};

export type Dictionary = typeof enDictionary;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
