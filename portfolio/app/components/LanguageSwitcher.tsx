"use client";

import { usePathname, useRouter } from "next/navigation";

import { isLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n-config";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
  englishLabel: string;
  frenchLabel: string;
};

export default function LanguageSwitcher({
  currentLocale,
  label,
  englishLabel,
  frenchLabel,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === currentLocale) {
      return;
    }

    const segments = pathname.split("/");

    if (segments[1] && isLocale(segments[1])) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    const nextPath = segments.join("/") || `/${nextLocale}`;

    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.push(nextPath);
    router.refresh();
  };

  return (
    <div className="language-switcher" aria-label={label}>
      <button
        type="button"
        className={`language-button ${currentLocale === "en" ? "is-active" : ""}`}
        onClick={() => switchLocale("en")}
        aria-current={currentLocale === "en" ? "page" : undefined}
      >
        {englishLabel}
      </button>
      <button
        type="button"
        className={`language-button ${currentLocale === "fr" ? "is-active" : ""}`}
        onClick={() => switchLocale("fr")}
        aria-current={currentLocale === "fr" ? "page" : undefined}
      >
        {frenchLabel}
      </button>
    </div>
  );
}
