import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";

const STORAGE_KEY = "site-locale";
const DEFAULT_LOCALE = "en";
const VALID = new Set(["en", "zh"]);

const LocaleContext = createContext(null);

/**
 * Locale provider.
 *
 * t(val) accepts:
 *   - a string / number / null      → returned as-is
 *   - { en, zh }                    → returns the current language's variant
 *   - anything else (incl. arrays)  → returned as-is
 *
 * This lets components write `t(profile.tagline)` or
 * `t({en: "About", zh: "关于"})` interchangeably.
 */
export function LocaleProvider({children}) {
    const [locale, setLocaleState] = useState(() => {
        if (typeof window === "undefined") return DEFAULT_LOCALE;
        try {
            const saved = window.localStorage.getItem(STORAGE_KEY);
            return saved && VALID.has(saved) ? saved : DEFAULT_LOCALE;
        } catch {
            return DEFAULT_LOCALE;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, locale);
        } catch {
            /* ignore quota / privacy mode */
        }
        if (typeof document !== "undefined") {
            document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
        }
    }, [locale]);

    const setLocale = useCallback((next) => {
        setLocaleState(VALID.has(next) ? next : DEFAULT_LOCALE);
    }, []);

    const toggle = useCallback(() => {
        setLocaleState((cur) => (cur === "en" ? "zh" : "en"));
    }, []);

    const value = useMemo(() => {
        const t = (val) => {
            if (val === null || val === undefined) return "";
            if (
                typeof val === "object" &&
                !Array.isArray(val) &&
                ("en" in val || "zh" in val)
            ) {
                return val[locale] ?? val.en ?? val.zh ?? "";
            }
            return val;
        };
        return {locale, setLocale, toggle, t};
    }, [locale, setLocale, toggle]);

    return (
        <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
    return ctx;
}
