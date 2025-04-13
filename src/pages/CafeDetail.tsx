
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Coffee, 
  ArrowLeft, 
  Phone, 
  Globe, 
  Instagram, 
  CheckCircle2, 
  QrCode 
} from "lucide-react";
import Navbar from "@/components/Navbar";

// Mock cafe data - in a real app this would come from an API or database
const mockCafesDetails = {
  "cafe1": {
    id: "cafe1",
    name: "Artisan Coffee House",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1601057956918-d3b0a2be74b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "A cozy artisanal coffee shop specializing in hand-crafted pour-overs and unique single-origin beans. The warm, rustic atmosphere makes it perfect for working or catching up with friends.",
    location: "123 Maple St, Downtown",
    hours: "7:00 AM - 7:00 PM Daily",
    phone: "+1 555-123-4567",
    website: "https://artisancoffee.example.com",
    instagram: "@artisancoffee",
    isVisited: true,
    specialty: "Pour Over",
    latitude: 34.0522,
    longitude: -118.2437,
    redeemedDate: "March 15, 2023"
  },
  "cafe2": {
    id: "cafe2",
    name: "Coastal Brew",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "Overlooking the beautiful coastline, this cafe offers refreshing cold brews and ocean-inspired drinks. The large windows and outdoor seating provide stunning views while you enjoy your coffee.",
    location: "456 Ocean Blvd, Seaside",
    hours: "6:30 AM - 6:00 PM Weekdays, 7:30 AM - 5:00 PM Weekends",
    phone: "+1 555-987-6543",
    website: "https://coastalbrew.example.com",
    instagram: "@coastalbrewcafe",
    isVisited: false,
    specialty: "Cold Brew",
    latitude: 34.0195,
    longitude: -118.4912
  },
  "cafe3": {
    id: "cafe3",
    name: "Mountain Peak Coffee",
    images: [
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "Nestled in the hills, this coffee shop offers a peaceful retreat with spectacular views. Their signature drinks are inspired by mountain herbs and flavors.",
    location: "789 Highland Ave, Uptown",
    hours: "8:00 AM - 5:00 PM Daily",
    phone: "+1 555-456-7890",
    website: "https://mountainpeak.example.com",
    instagram: "@mountainpeakcoffee",
    isVisited: false,
    latitude: 34.1184,
    longitude: -118.3004
  },
  "cafe4": {
    id: "cafe4",
    name: "Golden Roast",
    images: [
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "A classic coffee shop with a modern twist, known for their perfectly pulled espresso shots and friendly baristas who remember your usual order.",
    location: "321 Main St, Midtown",
    hours: "6:00 AM - 8:00 PM Weekdays, 7:00 AM - 7:00 PM Weekends",
    phone: "+1 555-789-0123",
    website: "https://goldenroast.example.com",
    instagram: "@thegoldenroast",
    isVisited: true,
    specialty: "Espresso",
    latitude: 34.0736,
    longitude: -118.4004,
    redeemedDate: "April 2, 2023"
  },
  "cafe5": {
    id: "cafe5",
    name: "Urban Grind",
    images: [
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "In the heart of the city, this trendy coffee spot is known for stunning latte art and vibrant atmosphere. A favorite among young professionals and artists.",
    location: "555 City Center, Downtown",
    hours: "7:00 AM - 9:00 PM Daily",
    phone: "+1 555-321-6547",
    website: "https://urbangrind.example.com",
    instagram: "@urbangrindcoffee",
    isVisited: false,
    specialty: "Latte Art",
    latitude: 34.0430,
    longitude: -118.2673
  },
  "cafe6": {
    id: "cafe6",
    name: "The Coffee Lab",
    images: [
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "An experimental cafe run by coffee scientists who push the boundaries of brewing methods. Their menu changes monthly and features unique beans from around the world.",
    location: "987 Research Blvd, University District",
    hours: "8:00 AM - 6:00 PM Weekdays, 9:00 AM - 5:00 PM Weekends",
    phone: "+1 555-246-8135",
    website: "https://coffeelab.example.com",
    instagram: "@coffeelabexperiments",
    isVisited: false,
    specialty: "Single Origin",
    latitude: 34.0689,
    longitude: -118.4452
  }
};

const CafeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [cafe, setCafe] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      if (id && mockCafesDetails[id as keyof typeof mockCafesDetails]) {
        setCafe(mockCafesDetails[id as keyof typeof mockCafesDetails]);
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse-slow">Loading café details...</div>
        </div>
      </div>
    );
  }
  
  if (!cafe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-coffee-darker mb-4">Café Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Sorry, we couldn't find the café you're looking for.
          </p>
          <Link to="/cafes">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Café Directory
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 pt-4 pb-20 md:pt-0 md:pb-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <Link to="/cafes" className="text-coffee-accent hover:text-coffee-darker flex items-center">
              <ArrowLeft className="mr-1 h-4 w-4" /> Back to Café Directory
            </Link>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-48 md:h-64 lg:h-80 mb-6">
            <img 
              src={cafe.images[currentImageIndex]} 
              alt={cafe.name} 
              className="w-full h-full object-cover"
            />
            
            {cafe.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {cafe.images.map((_: string, index: number) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
            
            {cafe.isVisited && (
              <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Visited</span>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <div className="flex flex-wrap items-start justify-between mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-coffee-darker mb-2">{cafe.name}</h1>
              {cafe.specialty && (
                <Badge className="bg-coffee-light text-coffee-darker">
                  {cafe.specialty}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center mb-4">
              <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-muted-foreground">{cafe.location}</span>
            </div>
            
            <p className="text-coffee-dark mb-4">{cafe.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-coffee-accent mr-2" />
                <div>
                  <div className="font-medium text-coffee-darker">Hours</div>
                  <div className="text-sm text-muted-foreground">{cafe.hours}</div>
                </div>
              </div>
              
              {cafe.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-coffee-accent mr-2" />
                  <div>
                    <div className="font-medium text-coffee-darker">Phone</div>
                    <a 
                      href={`tel:${cafe.phone}`} 
                      className="text-sm text-coffee-accent hover:underline"
                    >
                      {cafe.phone}
                    </a>
                  </div>
                </div>
              )}
              
              {cafe.website && (
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-coffee-accent mr-2" />
                  <div>
                    <div className="font-medium text-coffee-darker">Website</div>
                    <a 
                      href={cafe.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-coffee-accent hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              )}
              
              {cafe.instagram && (
                <div className="flex items-center">
                  <Instagram className="h-5 w-5 text-coffee-accent mr-2" />
                  <div>
                    <div className="font-medium text-coffee-darker">Instagram</div>
                    <div className="text-sm text-muted-foreground">{cafe.instagram}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-coffee-darker mb-4">Redeem Your Drink</h2>
            
            {cafe.isVisited ? (
              <div className="text-center">
                <div className="bg-green-100 text-green-800 rounded-lg p-4 mb-4">
                  <CheckCircle2 className="h-6 w-6 mx-auto mb-2" />
                  <p className="font-medium">You've already redeemed your drink here!</p>
                  <p className="text-sm mt-1">Redeemed on {cafe.redeemedDate}</p>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  Don't worry, your CaféPass is still valid at other partner locations.
                </p>
              </div>
            ) : (
              <div className="text-center">
                <Button className="bg-coffee-accent hover:bg-coffee-darker text-white flex items-center justify-center mb-3">
                  <QrCode className="mr-2 h-5 w-5" />
                  Show QR Code to Redeem
                </Button>
                <p className="text-muted-foreground text-sm mt-2">
                  Present the QR code to a barista to redeem your free drink.
                </p>
              </div>
            )}
          </div>
          
          <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
            <div className="h-64">
              {/* In a real app, this would be an actual map component */}
              <div className="bg-coffee-light h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-coffee-accent mx-auto mb-2" />
                  <p className="text-coffee-darker font-medium">Map View</p>
                  <p className="text-sm text-muted-foreground">Interactive map would appear here</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-10">
            <Link to="/cafes">
              <Button variant="outline" className="border-coffee-medium text-coffee-darker">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Directory
              </Button>
            </Link>
            
            <Link to="/loyalty-pass">
              <Button className="bg-coffee-accent hover:bg-coffee-darker text-white">
                <Coffee className="mr-2 h-4 w-4" /> View My Pass
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CafeDetail;
