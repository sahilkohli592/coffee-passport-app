
import Navbar from "@/components/Navbar";
import LoyaltyCard from "@/components/LoyaltyCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, RefreshCw, Share2, Calendar, MapPin } from "lucide-react";

// Mock redemption history data
const mockRedemptionHistory = [
  {
    id: "1",
    cafeName: "Artisan Coffee House",
    date: "March 15, 2023",
    time: "10:23 AM",
    drink: "Pour Over - Ethiopia",
    location: "Downtown"
  },
  {
    id: "2",
    cafeName: "Golden Roast",
    date: "April 2, 2023",
    time: "2:15 PM",
    drink: "Espresso Shot",
    location: "Midtown"
  },
  {
    id: "3",
    cafeName: "Bean & Brew",
    date: "April 10, 2023",
    time: "9:45 AM",
    drink: "Cappuccino",
    location: "Westside"
  }
];

const LoyaltyPass = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 pt-4 pb-20 md:pt-6 md:pb-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-coffee-darker mb-6 text-center">
            Your Café Pass
          </h1>
          
          <div className="mb-8">
            <LoyaltyCard 
              username="Coffee Enthusiast" 
              redeemedCount={3} 
              totalCount={30} 
              memberSince="Apr 2023"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button className="bg-coffee-accent hover:bg-coffee-darker text-white flex items-center">
              <QrCode className="mr-2 h-4 w-4" /> 
              Show QR Code
            </Button>
            <Button variant="outline" className="border-coffee-medium text-coffee-darker flex items-center">
              <RefreshCw className="mr-2 h-4 w-4" /> 
              Refresh Status
            </Button>
            <Button variant="outline" className="border-coffee-medium text-coffee-darker flex items-center">
              <Share2 className="mr-2 h-4 w-4" /> 
              Refer a Friend
            </Button>
          </div>
          
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="history">Redemption History</TabsTrigger>
              <TabsTrigger value="info">Pass Information</TabsTrigger>
            </TabsList>
            
            <TabsContent value="history" className="mb-8">
              {mockRedemptionHistory.length > 0 ? (
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="p-4 bg-muted">
                    <h3 className="font-medium text-coffee-darker">Your Redemption History</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {mockRedemptionHistory.map((redemption) => (
                      <div key={redemption.id} className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-coffee-darker">{redemption.cafeName}</h4>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-1" />
                            {redemption.date}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {redemption.location}
                        </div>
                        <div className="text-sm text-coffee-dark">
                          {redemption.drink} • {redemption.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 bg-card border border-border rounded-xl">
                  <p className="text-muted-foreground">No redemptions yet. Visit a partner café to get started!</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="info">
              <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-medium text-coffee-darker mb-2">How Your Pass Works</h3>
                  <p className="text-sm text-muted-foreground">
                    Your Café Pass entitles you to one free drink at each of our 30 partner cafés. 
                    Each café can only be visited once with this pass.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-coffee-darker mb-2">Redemption Process</h3>
                  <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                    <li>Visit any partner café in our directory</li>
                    <li>Order your drink and show your QR code to the barista</li>
                    <li>The barista will scan your code to verify your pass</li>
                    <li>Enjoy your free drink!</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-medium text-coffee-darker mb-2">Pass Details</h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pass Type:</span>
                      <span className="text-coffee-darker">30-Café Standard Pass</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Purchase Date:</span>
                      <span className="text-coffee-darker">April 1, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valid Until:</span>
                      <span className="text-coffee-darker">April 1, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pass ID:</span>
                      <span className="text-coffee-darker">CP29834652</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full border-coffee-medium text-coffee-darker">
                    Purchase Another Pass
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default LoyaltyPass;
