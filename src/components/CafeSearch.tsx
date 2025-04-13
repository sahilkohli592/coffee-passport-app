
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Filter } from "lucide-react";

interface CafeSearchProps {
  onSearch: (query: string) => void;
  onFilter: (filter: string) => void;
}

const CafeSearch = ({ onSearch, onFilter }: CafeSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="relative flex">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search cafés by name, specialty or location..."
            className="pl-10 pr-4 py-2 w-full rounded-l-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button 
          onClick={handleSearch}
          className="rounded-r-lg rounded-l-none px-4 bg-coffee-accent hover:bg-coffee-darker"
        >
          Search
        </Button>
        <Button
          variant="outline"
          className="ml-2 border-coffee-medium text-coffee-darker"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {isFilterOpen && (
        <div className="mt-2 p-4 bg-card rounded-lg border border-border shadow-sm">
          <div className="text-sm font-medium mb-2">Filter by:</div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-xs"
              onClick={() => onFilter("nearest")}
            >
              <MapPin className="h-3 w-3" /> Nearest First
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => onFilter("unvisited")}
            >
              Unvisited Only
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => onFilter("visited")}
            >
              Visited Only
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => onFilter("specialty")}
            >
              Specialty Coffees
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeSearch;
