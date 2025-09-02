import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, ChefHat, BarChart3, ArrowRight, Package, TreePine, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Donate Food",
      description: "Share your surplus food with those who need it most",
      link: "/donate",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Find Food",
      description: "Discover fresh food donations available in your area",
      link: "/find-food", 
      color: "text-secondary"
    },
    {
      icon: ChefHat,
      title: "Recipe Finder",
      description: "Turn available ingredients into delicious, nutritious meals",
      link: "/recipes",
      color: "text-accent"
    },
    {
      icon: BarChart3,
      title: "Track Impact",
      description: "See the real difference we're making together",
      link: "/impact",
      color: "text-primary"
    }
  ];

  const stats = [
    { label: "Meals Provided", value: "15,420+", icon: Package },
    { label: "People Helped", value: "3,840+", icon: Users },
    { label: "Food Saved", value: "12.3 tons", icon: Heart },
    { label: "CO₂ Reduced", value: "18.7 tons", icon: TreePine }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            End Hunger,
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Reduce Waste
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Connect food surplus with food need. Join our community-driven platform 
            fighting hunger while reducing food waste through smart technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow">
              <Link to="/donate">
                <Heart className="w-5 h-5 mr-2" />
                Donate Food
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/find-food">
                <Users className="w-5 h-5 mr-2" />
                Find Food
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together, we're making a measurable difference in the fight against hunger
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-primary hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How ZeroHunger Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform makes it easy to donate, find, and make the most of available food resources
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-primary transition-all duration-300 cursor-pointer">
                <Link to={feature.link}>
                  <CardHeader className="text-center pb-2">
                    <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform`} />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4">{feature.description}</CardDescription>
                    <div className="flex items-center justify-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more 
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple. Effective. Impactful.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three easy steps to start making a difference today
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Sign Up</h3>
              <p className="text-muted-foreground">Create your account and join our community of food heroes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-muted-foreground">Donate surplus food or find available donations near you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground">Make a real difference in your community and environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of people already fighting hunger and reducing food waste in their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Link to="/register">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/impact">
                View Our Impact
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              ZeroHunger
            </span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Fighting hunger, reducing waste, building community.
          </p>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/impact" className="hover:text-primary transition-colors">Impact</Link>
            <Link to="#" className="hover:text-primary transition-colors">About</Link>
            <Link to="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              © 2024 ZeroHunger. Contributing to UN SDG 2: Zero Hunger.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
