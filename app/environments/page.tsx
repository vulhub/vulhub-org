import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { getEnvironmentsByTag, getAllTags } from "@/lib/environments"

export default function EnvironmentsPage() {
  const environmentsByTag = getEnvironmentsByTag();
  const allTags = getAllTags();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Vulnerable Environments</h1>
        <p className="text-slate-600 mb-8">
          Browse our collection of pre-built vulnerable environments for security research and education. Each
          environment is containerized with Docker and comes with detailed documentation.
        </p>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <Input placeholder="Search environments..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tags</SelectItem>
                {allTags.map((tag) => (
                  <SelectItem key={tag} value={tag.toLowerCase().replace(/\s+/g, '-')}>
                    {tag}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        {/* Environment List */}
        <div className="space-y-6">
          {environmentsByTag.map((category) => (
            <div key={category.tag} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category.tag}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {category.environments.slice(0, 4).map((env) => (
                  <Link
                    key={env.id}
                    href={`/environments/${env.id}`}
                    className="block border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{env.name}</h3>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded whitespace-nowrap">{env.cve[0] || "N/A"}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{env.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                      <div className="flex flex-wrap items-center gap-1">
                        {env.tags.filter(t => t !== category.tag).slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                        {env.tags.length > 3 && (
                          <span className="text-slate-500 text-xs">+{env.tags.length - 3} more</span>
                        )}
                      </div>
                      <span className="text-slate-500">{env.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
              {category.environments.length > 4 && (
                <div className="text-center mt-4">
                  <Button variant="outline" size="sm">
                    View all {category.environments.length} {category.tag} environments
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

