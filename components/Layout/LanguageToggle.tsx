import styles from "@/components/HomePage/Home2026.module.css";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/public/constant/content";

const OPTIONS: { locale: Locale; label: string; aria: string }[] = [
  { locale: "en", label: "EN", aria: "Switch to English" },
  { locale: "zh-Hant", label: "中", aria: "切換至繁體中文" },
];

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={`${styles.langToggle} ${className}`}
      role="group"
      aria-label="Language / 語言"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.locale}
          type="button"
          className={locale === option.locale ? styles.langActive : undefined}
          aria-pressed={locale === option.locale}
          aria-label={option.aria}
          onClick={() => setLocale(option.locale)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
