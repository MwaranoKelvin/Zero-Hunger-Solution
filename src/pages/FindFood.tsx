import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Clock, Package, Users, Filter, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";

const FindFood = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [foodType, setFoodType] = useState("");
  const [radius, setRadius] = useState("5");

  // Mock food listing data
  const foodListings = [
    {
      id: 1,
      title: "Fresh Vegetables & Fruits",
      description: "Surplus produce from local restaurant. Perfect for families or food banks.",
      donor: "Green Garden Restaurant",
      location: "Downtown, 2.3 km away",
      quantity: "20-25 servings",
      postedTime: "2 hours ago",
      expiresIn: "Today",
      dietaryTags: ["Vegetarian", "Vegan", "Fresh", "Organic"],
      foodType: "Fresh Produce",
      available: true
    },
    {
      id: 2,
      title: "Cooked Meals Ready to Serve",
      description: "Prepared lunch portions including rice, curry, and bread. Still warm!",
      donor: "Spice Corner Cafe",
      location: "City Center, 1.8 km away",
      quantity: "15 servings",
      postedTime: "30 minutes ago",
      expiresIn: "2 hours",
      dietaryTags: ["Vegetarian", "Cooked", "Halal"],
      foodType: "Prepared Meals",
      available: true
    },
    {
      id: 3,
      title: "Packaged Groceries",
      description: "Canned goods, pasta, and dry ingredients nearing expiry but still good.",
      donor: "Community Food Bank",
      location: "Westside, 4.1 km away",
      quantity: "50+ items",
      postedTime: "1 hour ago", 
      expiresIn: "3 days",
      dietaryTags: ["Packaged", "Long-lasting"],
      foodType: "Packaged Goods",
      available: true
    },
    {
      id: 4,
      title: "Bakery Items - End of Day",
      description: "Fresh bread, pastries, and baked goods from today's batch.",
      donor: "Sunrise Bakery",
      location: "Market Street, 3.2 km away",
      quantity: "30+ items",
      postedTime: "4 hours ago",
      expiresIn: "Tomorrow morning",
      dietaryTags: ["Fresh", "Vegetarian"],
      foodType: "Bakery Items",
      available: true
    }
  ];

  const handleRequest = (listingId: number) => {
    console.log("Requesting food listing:", listingId);
    // Here you would integrate with Supabase to send a request
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Find Available Food
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover fresh food donations in your area
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <Card className="shadow-primary mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary" />
                Search & Filter
              </CardTitle>
              <CardDescription>
                Find food donations near you
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter your location"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Food Type</label>
                  <Select onValueChange={setFoodType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Any food type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="fresh-produce">Fresh Produce</SelectItem>
                      <SelectItem value="prepared-meals">Prepared Meals</SelectItem>
                      <SelectItem value="packaged-goods">Packaged Goods</SelectItem>
                      <SelectItem value="bakery-items">Bakery Items</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Radius</label>
                  <Select onValueChange={setRadius} defaultValue="5">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 km</SelectItem>
                      <SelectItem value="5">5 km</SelectItem>
                      <SelectItem value="10">10 km</SelectItem>
                      <SelectItem value="25">25 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full mt-4">
                <MapPin className="w-4 h-4 mr-2" />
                Search Food Near Me
              </Button>
            </CardContent>
          </Card>

          {/* Food Listings */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Available Food ({foodListings.length})</h2>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Available
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {foodListings.map((listing) => (
                <Card key={listing.id} className="hover:shadow-primary transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg mb-1">{listing.title}</CardTitle>
                        <CardDescription className="text-sm">{listing.description}</CardDescription>
                      </div>
                      {listing.available && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Available
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">{listing.donor}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {listing.location}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Package className="w-4 h-4" />
                        {listing.quantity}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Posted {listing.postedTime}
                        </div>
                        <div className="text-destructive font-medium">
                          Expires {listing.expiresIn}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {listing.dietaryTags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button 
                        className="flex-1"
                        onClick={() => handleRequest(listing.id)}
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Request Food
                      </Button>
                      <Button variant="outline">
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <Card className="mt-8 bg-gradient-card border-0 shadow-primary">
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Need Help Finding Food?</h3>
              <p className="text-muted-foreground mb-4">
                Our team can help connect you with local food banks and assistance programs.
              </p>
              <Button variant="outline">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FindFood;