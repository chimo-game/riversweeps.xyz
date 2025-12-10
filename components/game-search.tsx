"use client"

import { useState } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"

const categories = ["All", "Slots", "Fishing", "Table Games", "Live", "Arcade", "Racing", "Puzzle"]

interface GameSearchProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  selectedCategory: string
}

export function GameSearch({ onSearch, onCategoryChange, selectedCategory }: GameSearchProps) {
  const [query, setQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <div className="mb-6">
      {/* Search Bar */}
      <div className="flex gap-3 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search games..."
            className="w-full pl-12 pr-10 py-3 bg-card border border-border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {query && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`px-4 py-3 rounded-xl border transition-all ${
            showFilters
              ? "bg-primary border-primary text-white"
              : "bg-card border-border text-muted-foreground hover:text-white hover:border-primary"
          }`}
        >
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Category Filters */}
      <div className={`flex flex-wrap gap-2 ${showFilters ? "mb-4" : ""}`}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-card text-muted-foreground hover:text-white hover:bg-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
