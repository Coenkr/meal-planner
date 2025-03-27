export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Meal {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  imageUrl?: string;
  rating?: number; // 1-5 spierballen
}

export interface MealPlan {
  id: string;
  name: string;
  meals: {
    meal: Meal;
    servings: number;
  }[];
  totalServings: number;
}

export interface ShoppingList {
  items: {
    name: string;
    totalAmount: number;
    unit: string;
  }[];
} 