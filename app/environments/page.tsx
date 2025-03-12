import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export default function EnvironmentsPage() {
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
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="rce">Remote Code Execution</SelectItem>
                <SelectItem value="web">Web Application</SelectItem>
                <SelectItem value="cms">Content Management</SelectItem>
                <SelectItem value="sql">SQL Injection</SelectItem>
                <SelectItem value="xss">Cross-Site Scripting</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter size={18} />
            </Button>
          </div>
        </div>

        {/* Environment List */}
        <div className="space-y-6">
          {environments.map((category) => (
            <div key={category.id} className="space-y-4">
              <h2 className="text-2xl font-semibold">{category.name}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((env) => (
                  <Link
                    key={env.id}
                    href={`/environments/${env.id}`}
                    className="block border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{env.name}</h3>
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded">CVE-{env.cve}</span>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{env.description}</p>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{env.type}</span>
                      <span className="mx-2">•</span>
                      <span>Updated {env.updated}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const environments = [
  {
    id: "web-applications",
    name: "Web Applications",
    items: [
      {
        id: "flask-ssti",
        name: "Flask Server-Side Template Injection",
        description: "Explore the SSTI vulnerability in Flask applications and learn how to exploit it.",
        type: "Web Application",
        cve: "2019-8341",
        updated: "3 days ago",
      },
      {
        id: "spring-rce",
        name: "Spring Framework RCE",
        description: "Learn about remote code execution vulnerabilities in the Spring Framework.",
        type: "RCE",
        cve: "2022-22965",
        updated: "1 month ago",
      },
      {
        id: "apache-struts2",
        name: "Apache Struts2 Remote Code Execution",
        description: "Practice with the infamous Struts2 vulnerability that led to major data breaches.",
        type: "Web Application",
        cve: "2017-5638",
        updated: "6 months ago",
      },
      {
        id: "django-ssti",
        name: "Django Template Injection",
        description: "Explore template injection vulnerabilities in Django applications.",
        type: "Web Application",
        cve: "2020-9402",
        updated: "2 months ago",
      },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    items: [
      {
        id: "mysql-udf",
        name: "MySQL UDF Privilege Escalation",
        description: "Learn how to exploit MySQL User Defined Functions for privilege escalation.",
        type: "Database",
        cve: "2016-5444",
        updated: "5 months ago",
      },
      {
        id: "mongodb-nosql",
        name: "MongoDB NoSQL Injection",
        description: "Practice NoSQL injection techniques against a vulnerable MongoDB instance.",
        type: "Database",
        cve: "2019-2386",
        updated: "3 months ago",
      },
      {
        id: "redis-unauthorized",
        name: "Redis Unauthorized Access",
        description: "Explore unauthorized access vulnerabilities in Redis configurations.",
        type: "Database",
        cve: "2018-0618",
        updated: "7 months ago",
      },
      {
        id: "postgresql-injection",
        name: "PostgreSQL SQL Injection",
        description: "Practice SQL injection techniques specific to PostgreSQL databases.",
        type: "Database",
        cve: "2019-10164",
        updated: "4 months ago",
      },
    ],
  },
  {
    id: "cms",
    name: "Content Management Systems",
    items: [
      {
        id: "wordpress-rce",
        name: "WordPress Plugin Vulnerabilities",
        description: "Explore common security issues in WordPress plugins and how they can be exploited.",
        type: "CMS",
        cve: "2021-24867",
        updated: "4 months ago",
      },
      {
        id: "drupal-rce",
        name: "Drupal Remote Code Execution",
        description: "Practice exploiting the infamous Drupalgeddon vulnerabilities.",
        type: "CMS",
        cve: "2018-7600",
        updated: "8 months ago",
      },
      {
        id: "joomla-sqli",
        name: "Joomla SQL Injection",
        description: "Learn about SQL injection vulnerabilities in Joomla CMS.",
        type: "CMS",
        cve: "2017-8917",
        updated: "9 months ago",
      },
      {
        id: "magento-rce",
        name: "Magento Remote Code Execution",
        description: "Explore RCE vulnerabilities in the Magento e-commerce platform.",
        type: "CMS",
        cve: "2019-8144",
        updated: "5 months ago",
      },
    ],
  },
]

