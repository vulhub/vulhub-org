"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, RefreshCw } from "lucide-react";
import { useI18n } from "@/locales/client";

interface SearchFormProps {
  initialQuery: string;
  initialTag: string;
  allTags: string[];
}

export function SearchForm({ initialQuery, initialTag, allTags }: SearchFormProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedTag, setSelectedTag] = useState(initialTag);
  const isFirstRender = useRef(true);
  const t = useI18n();

  const updateSearchUrl = (query: string, tag: string) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (tag !== "all") params.set("tag", tag);
    const newUrl = `/environments${params.toString() ? `?${params.toString()}` : ""}`;
    router.push(newUrl);
  }

  // 处理表单提交（搜索框输入后按回车）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearchUrl(searchQuery, selectedTag);    
  };

  // 重置所有筛选条件
  const handleReset = () => {
    setSearchQuery("");
    setSelectedTag("all");
    router.push("/environments");
  };

  // 当标签变化时自动提交表单
  useEffect(() => {
    // 跳过初始渲染
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    updateSearchUrl(searchQuery, selectedTag);
  }, [selectedTag, router]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-grow">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={18}
        />
        <Input 
          placeholder={t('environments.searchForm.searchPlaceholder')} 
          className="pl-10" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <Select 
          value={selectedTag} 
          onValueChange={setSelectedTag}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('environments.searchForm.allTags')}</SelectItem>
            {allTags.map((tag) => (
              <SelectItem
                key={tag}
                value={tag}
              >
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button 
          type="button" 
          variant="outline" 
          size="icon"
          onClick={handleReset}
          title={t('environments.results.clearFilters')}
        >
          <RefreshCw size={18} />
        </Button>
      </div>
    </form>
  );
} 