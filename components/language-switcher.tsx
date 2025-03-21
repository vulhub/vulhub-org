"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { useI18n } from "@/locales/client";

interface LanguageSwitcherProps {
  variant?: "dropdown" | "buttons";
}

export function LanguageSwitcher({
  variant = "dropdown",
}: LanguageSwitcherProps) {
  const t = useI18n();
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  if (variant === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t("navigation.languageSwitcher")}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => changeLocale("en")}
            className={currentLocale === "en" ? "bg-slate-100" : ""}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => changeLocale("zh")}
            className={currentLocale === "zh" ? "bg-slate-100" : ""}
          >
            中文
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Buttons variant
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLocale("en")}
        className={currentLocale === "en" ? "bg-slate-100" : ""}
      >
        English
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => changeLocale("zh")}
        className={currentLocale === "zh" ? "bg-slate-100" : ""}
      >
        中文
      </Button>
    </div>
  );
}
