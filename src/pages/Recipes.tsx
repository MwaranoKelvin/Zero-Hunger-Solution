import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Search, Clock, Users, Star, Plus, X } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Recipes = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock recipe data - in real app this would come from AI API
  const mockRecipes = [
    {
      id: 1,
      title: "Vegetable Stir Fry",
      cookTime: "15 mins",
      servings: 4,
      difficulty: "Easy",
      rating: 4.5,
      ingredients: ["vegetables", "rice", "soy sauce"],
      description: "A quick and healthy stir fry using fresh vegetables and simple seasonings.",
      instructions: [
        "Heat oil in a large pan or wok",
        "Add vegetables and stir fry for 5-7 minutes",
        "Add soy sauce and seasonings",
        "Serve over rice"
      ]
    },
    {
      id: 2,
      title: "Chicken and Rice Bowl",
      cookTime: "25 mins", 
      servings: 3,
      difficulty: "Medium",
      rating: 4.8,
      ingredients: ["chicken", "rice", "vegetables"],
      description: "Nutritious bowl with seasoned chicken, fluffy rice, and colorful vegetables.",
      instructions: [
        "Season and cook chicken until golden",
        "Prepare rice according to package instructions",
        "Steam or sauté vegetables",
        "Assemble bowl and serve"
      ]
    },
    {
      id: 3,
      title: "Simple Pasta Primavera",
      cookTime: "20 mins",
      servings: 4,
      difficulty: "Easy", 
      rating: 4.3,
      ingredients: ["pasta", "vegetables", "cheese"],
      description: "Light pasta dish with fresh seasonal vegetables and parmesan cheese.",
      instructions: [
        "Cook pasta according to package directions",
        "Sauté vegetables until tender-crisp",
        "Toss pasta with vegetables and olive oil",
        "Top with grated cheese and serve"
      ]
    }
  ];

  const addIngredient = () => {
    if (currentIngredient && !ingredients.includes(currentIngredient.toLowerCase())) {
      setIngredients(prev => [...prev, currentIngredient.toLowerCase()]);
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(prev => prev.filter(i => i !== ingredient));
  };

  const findRecipes = async () => {
    if (ingredients.length === 0) {
      toast.error("Please add at least one ingredient");
      return;
    }

    setIsLoading(true);
    
    // Simulate AI API call
    setTimeout(() => {
      const filteredRecipes = mockRecipes.filter(recipe => 
        recipe.ingredients.some(ingredient => 
          ingredients.some(userIngredient => 
            ingredient.toLowerCase().includes(userIngredient) || 
            userIngredient.includes(ingredient.toLowerCase())
          )
        )
      );
      
      setRecipes(filteredRecipes);
      setIsLoading(false);
      
      if (filteredRecipes.length > 0) {
        toast.success(`Found ${filteredRecipes.length} recipe${filteredRecipes.length > 1 ? 's' : ''} for your ingredients!`);
      } else {
        toast.info("No recipes found. Try different ingredients!");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Recipe Finder
          </h1>
          <p className="text-xl text-muted-foreground">
            Turn your available ingredients into delicious meals
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-primary mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChefHat className="w-5 h-5 text-primary" />
                What ingredients do you have?
              </CardTitle>
              <CardDescription>
                Add your available ingredients and we'll suggest recipes you can make
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter an ingredient (e.g., chicken, tomatoes, rice)"
                  value={currentIngredient}
                  onChange={(e) => setCurrentIngredient(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addIngredient()}
                  className="flex-1"
                />
                <Button onClick={addIngredient} disabled={!currentIngredient}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              {ingredients.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-medium">Your ingredients:</h3>
                  <div className="flex flex-wrap gap-2">
                    {ingredients.map(ingredient => (
                      <Badge key={ingredient} variant="secondary" className="gap-1 capitalize">
                        {ingredient}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="w-4 h-4 p-0 hover:bg-transparent"
                          onClick={() => removeIngredient(ingredient)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                onClick={findRecipes} 
                disabled={isLoading || ingredients.length === 0}
                className="w-full" 
                size="lg"
              >
                {isLoading ? (
                  <>Finding Recipes...</>
                ) : (
                  <>
                    <Search className="w-4 h-4 mr-2" />
                    Find Recipes
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {recipes.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Recipe Suggestions</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recipes.map(recipe => (
                  <Card key={recipe.id} className="hover:shadow-primary transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{recipe.title}</CardTitle>
                      <CardDescription>{recipe.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.cookTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {recipe.servings} servings
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-secondary text-secondary" />
                          {recipe.rating}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="font-medium text-sm">Instructions:</p>
                        <ol className="text-sm space-y-1">
                          {recipe.instructions.map((step, index) => (
                            <li key={index} className="flex gap-2">
                              <span className="font-medium text-primary">{index + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <Badge variant="outline" className="w-fit">
                        {recipe.difficulty}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Recipes;