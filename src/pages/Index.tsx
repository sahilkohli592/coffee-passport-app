
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Coffee, MapPin, Award, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import LoyaltyCard from "@/components/LoyaltyCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 pt-4 pb-20 md:pt-0 md:pb-4">
        <section className="mb-12 mt-4 md:mt-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-coffee-darker mb-4">
              Discover & Enjoy 30 Amazing Cafés
            </h1>
            <p className="text-coffee-dark mb-6">
              Purchase your Café Pass and enjoy one free drink at each of our 30 partner cafés. 
              Perfect for coffee lovers, remote workers, and explorers!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-coffee-accent hover:bg-coffee-darker text-white py-6">
                Purchase Your Pass
              </Button>
              <Button variant="outline" className="border-coffee-medium text-coffee-darker py-6">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mb-8">
            <LoyaltyCard 
              username="Coffee Enthusiast" 
              redeemedCount={3} 
              totalCount={30} 
              memberSince="Apr 2023"
            />
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-coffee-darker mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Coffee className="h-10 w-10 text-coffee-accent" />}
              title="Purchase Your Pass"
              description="Buy your digital Café Pass for access to 30 free drinks at 30 different cafés."
            />
            <FeatureCard 
              icon={<MapPin className="h-10 w-10 text-coffee-accent" />}
              title="Find a Café"
              description="Browse our directory of partner cafés and find your next coffee destination."
            />
            <FeatureCard 
              icon={<Award className="h-10 w-10 text-coffee-accent" />}
              title="Redeem Your Drink"
              description="Show your unique QR code to redeem your free drink at each café."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-coffee-accent" />}
              title="Refer Friends"
              description="Invite friends to join and earn rewards, discounts, or bonus drinks."
            />
          </div>
        </section>
        
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-coffee-darker mb-6">Ready to Explore?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cafes">
              <Button variant="outline" className="border-coffee-medium text-coffee-darker">
                Browse Cafés
              </Button>
            </Link>
            <Button className="bg-coffee-accent hover:bg-coffee-darker text-white">
              Purchase Pass
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <div className="bg-card border border-border rounded-xl p-6 text-center">
    <div className="mb-4 inline-flex items-center justify-center bg-coffee-light p-3 rounded-full">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-coffee-darker mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
