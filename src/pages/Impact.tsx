import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Heart, Package, TreePine, Clock, Award, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";

const Impact = () => {
  // Mock impact data - in real app this would come from your analytics
  const impactStats = {
    totalMeals: 15420,
    peopleHelped: 3840,
    foodSaved: "12.3 tons",
    co2Reduced: "18.7 tons",
    activeDonors: 245,
    activeRecipients: 892,
    partnerOrganizations: 34
  };

  const recentActivity = [
    {
      id: 1,
      type: "donation",
      title: "Fresh vegetables donated",
      donor: "Green Garden Restaurant",
      recipient: "Downtown Food Bank", 
      amount: "25 servings",
      time: "2 hours ago",
      location: "Downtown"
    },
    {
      id: 2,
      type: "match",
      title: "Cooked meals matched",
      donor: "Spice Corner Cafe",
      recipient: "Family Support Center",
      amount: "15 servings",
      time: "4 hours ago",
      location: "City Center"
    },
    {
      id: 3,
      type: "pickup",
      title: "Bakery items collected",
      donor: "Sunrise Bakery", 
      recipient: "Community Kitchen",
      amount: "30+ items",
      time: "6 hours ago",
      location: "Market Street"
    }
  ];

  const milestones = [
    { target: 20000, current: 15420, label: "Meals Provided", icon: Package },
    { target: 5000, current: 3840, label: "People Helped", icon: Users },
    { target: 15, current: 12.3, label: "Tons Food Saved", icon: Heart },
    { target: 25, current: 18.7, label: "Tons CO₂ Reduced", icon: TreePine }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Impact Together
          </h1>
          <p className="text-xl text-muted-foreground">
            See how we're making a difference in the fight against hunger
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Key Statistics */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <Package className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {impactStats.totalMeals.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Meals Provided</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-3xl font-bold text-secondary mb-1">
                  {impactStats.peopleHelped.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">People Helped</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-accent mb-1">
                  {impactStats.foodSaved}
                </div>
                <div className="text-sm text-muted-foreground">Food Saved</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <TreePine className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {impactStats.co2Reduced}
                </div>
                <div className="text-sm text-muted-foreground">CO₂ Reduced</div>
              </CardContent>
            </Card>
          </div>

          {/* Progress Towards Goals */}
          <Card className="shadow-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Progress Towards 2024 Goals
              </CardTitle>
              <CardDescription>
                See how close we are to achieving our annual impact targets
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <milestone.icon className="w-4 h-4 text-primary" />
                      <span className="font-medium">{milestone.label}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {typeof milestone.current === 'number' && milestone.current % 1 === 0 
                        ? milestone.current.toLocaleString() 
                        : milestone.current} / {milestone.target.toLocaleString()}
                    </div>
                  </div>
                  <Progress 
                    value={typeof milestone.current === 'number' 
                      ? (milestone.current / milestone.target) * 100 
                      : (parseFloat(String(milestone.current)) / milestone.target) * 100
                    } 
                    className="h-2" 
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Stats */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{impactStats.activeDonors}</div>
                <div className="text-sm text-muted-foreground">Active Donors</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{impactStats.activeRecipients}</div>
                <div className="text-sm text-muted-foreground">Active Recipients</div>
              </CardContent>
            </Card>
            
            <Card className="shadow-primary">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{impactStats.partnerOrganizations}</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="shadow-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest food donations and matches in real-time
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{activity.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">{activity.donor}</span> → <span className="font-medium">{activity.recipient}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{activity.amount}</span>
                      <span>•</span>
                      <span>{activity.location}</span>
                      <span>•</span>
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-hero border-0 shadow-glow text-primary-foreground">
            <CardContent className="p-8 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-lg mb-6 opacity-90">
                Together we can reach our goal of providing 20,000 meals and helping 5,000 people this year.
                Every contribution makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-foreground text-primary px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/90 transition-colors">
                  Donate Food
                </button>
                <button className="border border-primary-foreground text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary-foreground/10 transition-colors">
                  Become a Partner
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Impact;