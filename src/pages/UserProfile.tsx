
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Users, Gift, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 pt-4 pb-20 md:pt-6 md:pb-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
            <Avatar className="h-24 w-24 border-4 border-coffee-light">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              <AvatarFallback className="bg-coffee-medium text-white text-xl">CE</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-coffee-darker mb-2">
                Coffee Enthusiast
              </h1>
              <p className="text-muted-foreground mb-4">
                Member since April 2023 • 3 cafés visited
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <Button className="bg-coffee-accent hover:bg-coffee-darker text-white">
                  Edit Profile
                </Button>
                <Button variant="outline" className="border-coffee-medium text-coffee-darker">
                  Sign Out
                </Button>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="account">
                <Settings className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block lg:inline-block">Account</span>
              </TabsTrigger>
              <TabsTrigger value="pass">
                <Coffee className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block lg:inline-block">My Pass</span>
              </TabsTrigger>
              <TabsTrigger value="referrals">
                <Users className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block lg:inline-block">Referrals</span>
              </TabsTrigger>
              <TabsTrigger value="rewards">
                <Gift className="h-4 w-4 mr-2 md:mr-0 lg:mr-2" />
                <span className="hidden md:inline-block lg:inline-block">Rewards</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-coffee-darker mb-4">Account Information</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Coffee Enthusiast" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="coffee@example.com" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birthdate">Birthdate</Label>
                      <Input id="birthdate" type="date" defaultValue="1990-01-01" />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="bg-coffee-accent hover:bg-coffee-darker text-white">
                      Save Changes
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-medium text-coffee-darker mb-4">Change Password</h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" className="border-coffee-medium text-coffee-darker">
                        Update Password
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pass">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-coffee-darker mb-4">My Passes</h2>
                
                <div className="mb-6 rounded-lg border border-border overflow-hidden">
                  <div className="bg-coffee-light p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-coffee-darker">30-Café Standard Pass</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        Active
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Cafés Visited:</span>
                      <span className="text-coffee-darker font-medium">3 / 30</span>
                    </div>
                    
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Valid Until:</span>
                      <span className="text-coffee-darker font-medium">April 1, 2024</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pass ID:</span>
                      <span className="text-coffee-darker font-medium">CP29834652</span>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" className="text-xs border-coffee-medium text-coffee-darker">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="bg-coffee-accent hover:bg-coffee-darker text-white">
                    Purchase New Pass
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="referrals">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-coffee-darker mb-4">Refer Friends</h2>
                
                <div className="bg-coffee-light/50 rounded-lg p-4 mb-6">
                  <p className="text-coffee-darker mb-2">
                    Share your unique referral code with friends and earn rewards!
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    For each friend who signs up using your code, you'll receive a $5 credit towards your next pass purchase.
                  </p>
                  
                  <div className="flex items-center">
                    <div className="relative flex-grow">
                      <Input 
                        value="COFFEEPAL25" 
                        readOnly 
                        className="bg-white pr-24"
                      />
                      <Button 
                        className="absolute right-1 top-1 h-[calc(100%-8px)] bg-coffee-accent hover:bg-coffee-darker text-white text-xs"
                      >
                        Copy Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-coffee-darker mb-3">Share via</h3>
                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1 border-coffee-medium text-coffee-darker">
                      Email
                    </Button>
                    <Button variant="outline" className="flex-1 border-coffee-medium text-coffee-darker">
                      SMS
                    </Button>
                    <Button variant="outline" className="flex-1 border-coffee-medium text-coffee-darker">
                      WhatsApp
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-coffee-darker mb-3">Your Referrals</h3>
                  <div className="rounded-lg border border-border overflow-hidden">
                    <div className="p-4 bg-muted text-sm font-medium text-coffee-darker">
                      <div className="grid grid-cols-3">
                        <div>Name</div>
                        <div>Date Joined</div>
                        <div>Status</div>
                      </div>
                    </div>
                    
                    <div className="p-6 text-center text-muted-foreground">
                      No referrals yet. Share your code to get started!
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rewards">
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-coffee-darker mb-4">Your Rewards</h2>
                
                <div className="space-y-6">
                  <div className="bg-coffee-light/50 rounded-lg p-4">
                    <h3 className="font-medium text-coffee-darker mb-2">Available Rewards</h3>
                    <p className="text-muted-foreground mb-4">
                      You have 0 reward points. Earn points by referring friends and visiting cafés!
                    </p>
                    
                    <Button className="w-full bg-coffee-accent hover:bg-coffee-darker text-white">
                      View Available Rewards
                    </Button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-coffee-darker mb-3">How to Earn Rewards</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-coffee-light rounded-full p-1 mr-2 mt-0.5">
                          <Coffee className="h-4 w-4 text-coffee-accent" />
                        </div>
                        <div>
                          <p className="text-coffee-darker font-medium">Visit Partner Cafés</p>
                          <p className="text-sm text-muted-foreground">Earn 10 points for each café visited</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-coffee-light rounded-full p-1 mr-2 mt-0.5">
                          <Users className="h-4 w-4 text-coffee-accent" />
                        </div>
                        <div>
                          <p className="text-coffee-darker font-medium">Refer Friends</p>
                          <p className="text-sm text-muted-foreground">Earn 50 points for each friend who signs up</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-coffee-light rounded-full p-1 mr-2 mt-0.5">
                          <Gift className="h-4 w-4 text-coffee-accent" />
                        </div>
                        <div>
                          <p className="text-coffee-darker font-medium">Special Promotions</p>
                          <p className="text-sm text-muted-foreground">Earn bonus points during special events</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-coffee-darker mb-3">Reward Tiers</h3>
                    <div className="rounded-lg border border-border overflow-hidden">
                      <div className="grid grid-cols-3 p-3 bg-muted text-sm font-medium text-coffee-darker">
                        <div>Tier</div>
                        <div>Points Required</div>
                        <div>Benefits</div>
                      </div>
                      
                      <div className="divide-y divide-border">
                        <div className="grid grid-cols-3 p-3 text-sm">
                          <div className="text-coffee-darker font-medium">Bronze</div>
                          <div>0 - 99</div>
                          <div>Basic rewards</div>
                        </div>
                        <div className="grid grid-cols-3 p-3 text-sm">
                          <div className="text-coffee-darker font-medium">Silver</div>
                          <div>100 - 299</div>
                          <div>10% off next pass</div>
                        </div>
                        <div className="grid grid-cols-3 p-3 text-sm">
                          <div className="text-coffee-darker font-medium">Gold</div>
                          <div>300+</div>
                          <div>25% off next pass + perks</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
