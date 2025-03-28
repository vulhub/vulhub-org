"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Github } from "@/components/icons";
import { useI18n } from "@/locales/client";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useI18n();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 mr-2 relative">
                <Image
                  src="/logo/128x128.png"
                  alt="Vulhub Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-900">Vulhub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              {t('navigation.home')}
            </Link>
            <Link
              href="/getting-started"
              className="text-slate-600 hover:text-slate-900"
            >
              {t('navigation.gettingStarted')}
            </Link>
            <Link
              href="/environments"
              className="text-slate-600 hover:text-slate-900"
            >
              {t('navigation.environments')}
            </Link>
            <Link
              href="/documentation/getting-started"
              className="text-slate-600 hover:text-slate-900"
            >
              {t('navigation.documentation')}
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900">
              {t('navigation.about')}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher variant="dropdown" />
            
            <Button asChild variant="outline" size="sm">
              <a
                href="https://github.com/vulhub/vulhub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t('navigation.github')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-slate-600 hover:text-slate-900 py-2"
            >
              {t('navigation.home')}
            </Link>
            <Link
              href="/getting-started"
              className="block text-slate-600 hover:text-slate-900 py-2"
            >
              {t('navigation.gettingStarted')}
            </Link>
            <Link
              href="/environments"
              className="block text-slate-600 hover:text-slate-900 py-2"
            >
              {t('navigation.environments')}
            </Link>
            <Link
              href="/documentation/getting-started"
              className="block text-slate-600 hover:text-slate-900 py-2"
            >
              {t('navigation.documentation')}
            </Link>
            <Link
              href="/about"
              className="block text-slate-600 hover:text-slate-900 py-2"
            >
              {t('navigation.about')}
            </Link>
            
            <LanguageSwitcher variant="buttons" />
            
            <Button asChild variant="outline" size="sm" className="w-full">
              <a
                href="https://github.com/vulhub/vulhub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                {t('navigation.github')}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
