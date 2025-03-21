"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useI18n } from "@/locales/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

interface LanguageSwitcherProps {
  variant?: "dropdown" | "buttons";
}

export function LanguageSwitcher({ variant = "dropdown" }: LanguageSwitcherProps) {
  const t = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState<string>('en');

  // Extract the path without the locale
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/');
    if (segments.length > 1 && (segments[1] === 'en' || segments[1] === 'zh')) {
      return '/' + segments.slice(2).join('/');
    }
    return pathname;
  };

  // Determine current locale from URL
  useEffect(() => {
    const locale = pathname.startsWith('/zh') ? 'zh' : 'en';
    setCurrentLocale(locale);
  }, [pathname]);

  const changeLocale = (locale: string) => {
    const newPath = `/${locale}${getPathWithoutLocale()}`;
    router.push(newPath);
  };

  if (variant === "dropdown") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t('navigation.languageSwitcher')}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => changeLocale('en')} 
            className={currentLocale === 'en' ? 'bg-slate-100' : ''}
          >
            English
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => changeLocale('zh')} 
            className={currentLocale === 'zh' ? 'bg-slate-100' : ''}
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
        onClick={() => changeLocale('en')}
        className={currentLocale === 'en' ? 'bg-slate-100' : ''}
      >
        English
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => changeLocale('zh')}
        className={currentLocale === 'zh' ? 'bg-slate-100' : ''}
      >
        中文
      </Button>
    </div>
  );
} 