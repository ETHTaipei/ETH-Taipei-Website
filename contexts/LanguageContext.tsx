import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  dictionaries,
  type Dictionary,
  type Locale,
} from "@/public/constant/content";

const STORAGE_KEY = "ethtaipei-locale";
const HTML_LANG: Record<Locale, string> = {
  en: "en",
  "zh-Hant": "zh-Hant",
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLocale = (value: string | null): value is Locale =>
  value === "en" || value === "zh-Hant";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Always render "en" on the server / first client paint so SSR markup and
  // hydration agree; the persisted choice is applied right after mount.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    // 1. An explicit, remembered choice always wins.
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) {
      setLocaleState(saved);
      return;
    }

    // 2. First-time visitor: default to Traditional Chinese when the browser's
    //    preferred languages indicate a Chinese reader (zh, zh-TW, zh-Hant, …),
    //    otherwise stay on English. Not persisted — the auto-default re-evaluates
    //    each visit until the user explicitly picks a language.
    const preferred = window.navigator.languages ?? [window.navigator.language];
    const prefersChinese = preferred.some((lang) =>
      lang?.toLowerCase().startsWith("zh")
    );
    if (prefersChinese) setLocaleState("zh-Hant");
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale];
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be unavailable (private mode) — ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === "en" ? "zh-Hant" : "en";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale, toggle, t: dictionaries[locale] }),
    [locale, setLocale, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
};

/** Convenience hook returning just the active dictionary. */
export const useT = (): Dictionary => useLanguage().t;
