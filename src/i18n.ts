import { getRequestConfig } from "next-intl/server"

import { Language } from "./lib/types"

export const locales: Language[] = ["en", "ja", "zh", "zh-TW", "tr"]
export const languageNames: Record<(typeof locales)[number], string> = {
  en: "English",
  ja: "Japanese",
  zh: "Chinese (Simplified)",
  "zh-TW": "Chinese (Traditional)",
  tr: "Turkish",
}
export const nameMap: Record<string, string> = {
  en: "English",
  zh: "简体中文",
  "zh-TW": "繁體中文",
  ja: "日本語",
  tr: "Turkish",
}
export const defaultLocale = "en"

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
  timeZone: "America/Los_Angeles",
}))
