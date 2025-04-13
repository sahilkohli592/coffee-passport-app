
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CafeCard from "@/components/CafeCard";
import CafeSearch from "@/components/CafeSearch";

// Mock cafe data
const mockCafes = [
  {
    id: "cafe1",
    name: "Artisan Coffee House",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "123 Maple St, Downtown",
    isVisited: true,
    specialty: "Pour Over"
  },
  {
    id: "cafe2",
    name: "Coastal Brew",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "456 Ocean Blvd, Seaside",
    isVisited: false,
    specialty: "Cold Brew"
  },
  {
    id: "cafe3",
    name: "Mountain Peak Coffee",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "789 Highland Ave, Uptown",
    isVisited: false
  },
  {
    id: "cafe4",
    name: "Golden Roast",
    image: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "321 Main St, Midtown",
    isVisited: true,
    specialty: "Espresso"
  },
  {
    id: "cafe5",
    name: "Urban Grind",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "555 City Center, Downtown",
    isVisited: false,
    specialty: "Latte Art"
  },
  {
    id: "cafe6",
    name: "The Coffee Lab",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    location: "987 Research Blvd, University District",
    isVisited: false,
    specialty: "Single Origin"
  }
];

const CafesList = () => {
  const [cafes, setCafes] = useState(mockCafes);
  const [filteredCafes, setFilteredCafes] = useState(mockCafes);
  const [activeFilter, setActiveFilter] = useState("");
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredCafes(cafes);
      return;
    }
    
    const searchTerm = query.toLowerCase();
    const results = cafes.filter(cafe => 
      cafe.name.toLowerCase().includes(searchTerm) || 
      cafe.location.toLowerCase().includes(searchTerm) || 
      (cafe.specialty && cafe.specialty.toLowerCase().includes(searchTerm))
    );
    
    setFilteredCafes(results);
  };
  
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    
    switch (filter) {
      case "visited":
        setFilteredCafes(cafes.filter(cafe => cafe.isVisited));
        break;
      case "unvisited":
        setFilteredCafes(cafes.filter(cafe => !cafe.isVisited));
        break;
      case "nearest":
        // In a real app, this would use geolocation to sort by distance
        // For now, we'll just shuffle the list to simulate sorting
        setFilteredCafes([...cafes].sort(() => Math.random() - 0.5));
        break;
      case "specialty":
        setFilteredCafes(cafes.filter(cafe => cafe.specialty));
        break;
      default:
        setFilteredCafes(cafes);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 pt-4 pb-20 md:pt-0 md:pb-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-coffee-darker mt-4 mb-6 text-center">
            Café Directory
          </h1>
          
          <CafeSearch onSearch={handleSearch} onFilter={handleFilter} />
          
          {filteredCafes.length === 0 ? (
            <div className="text-center p-8">
              <p className="text-lg text-muted-foreground">No cafés found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCafes.map((cafe) => (
                <CafeCard 
                  key={cafe.id}
                  id={cafe.id}
                  name={cafe.name}
                  image={cafe.image}
                  location={cafe.location}
                  isVisited={cafe.isVisited}
                  specialty={cafe.specialty}
                />
              ))}
            </div>
          )}
          
          {activeFilter && (
            <div className="mt-6 text-center">
              <button 
                onClick={() => {
                  setActiveFilter("");
                  setFilteredCafes(cafes);
                }}
                className="text-coffee-accent hover:text-coffee-darker underline text-sm"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CafesList;
