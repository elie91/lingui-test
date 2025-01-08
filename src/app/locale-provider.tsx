"use client";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { PropsWithChildren } from "react";

import { messages as en } from "@/locales/en/messages";
import { messages as fr } from "@/locales/fr/messages";
import { messages as es } from "@/locales/es/messages";
import { messages as de } from "@/locales/de/messages";

i18n.load({
  en,
  fr,
  es,
  de,
});
i18n.activate("fr");

export const LocaleProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
};
