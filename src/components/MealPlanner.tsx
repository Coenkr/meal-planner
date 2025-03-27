import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  List,
  ListItem,
  ListItemText,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Meal, MealPlan, ShoppingList } from '../types/Meal';
import ShoppingListComponent from './ShoppingList';
import MuscleRating from './MuscleRating';
import { predefinedMeals } from '../data/meals';

interface MealPlannerProps {
  mealPlan: MealPlan;
  onAddMeal: (meal: Meal, servings: number) => void;
  onUpdateServings: (mealId: string, servings: number) => void;
  onUpdateRating: (mealId: string, rating: number) => void;
  selectedMeal: Meal | null;
  onSelectMeal: (meal: Meal | null) => void;
}

const MealPlanner: React.FC<MealPlannerProps> = ({
  mealPlan,
  onAddMeal,
  onUpdateServings,
  onUpdateRating,
  selectedMeal,
  onSelectMeal,
}) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newServings, setNewServings] = useState(1);
  const [showShoppingList, setShowShoppingList] = useState(false);
  const [selectedMealId, setSelectedMealId] = useState('');

  const handleAddMeal = () => {
    const mealToAdd = predefinedMeals.find(meal => meal.id === selectedMealId);
    if (mealToAdd) {
      onAddMeal(mealToAdd, newServings);
      setIsAddDialogOpen(false);
      setSelectedMealId('');
      setNewServings(1);
    }
  };

  const generateShoppingList = (): ShoppingList => {
    const ingredientMap = new Map<string, { amount: number; unit: string }>();

    mealPlan.meals.forEach(({ meal, servings }) => {
      const multiplier = servings / meal.servings;
      meal.ingredients.forEach(ingredient => {
        const current = ingredientMap.get(ingredient.name);
        if (current) {
          ingredientMap.set(ingredient.name, {
            amount: current.amount + (ingredient.amount * multiplier),
            unit: current.unit,
          });
        } else {
          ingredientMap.set(ingredient.name, {
            amount: ingredient.amount * multiplier,
            unit: ingredient.unit,
          });
        }
      });
    });

    return {
      items: Array.from(ingredientMap.entries()).map(([name, { amount, unit }]) => ({
        name,
        totalAmount: Math.round(amount * 100) / 100,
        unit,
      })),
    };
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          {mealPlan.name}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            onClick={() => setShowShoppingList(!showShoppingList)}
          >
            Boodschappenlijst
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setIsAddDialogOpen(true)}
          >
            Maaltijd Toevoegen
          </Button>
        </Stack>
      </Box>

      <Grid container spacing={3}>
        {mealPlan.meals.map(({ meal, servings }) => (
          <Grid item xs={12} sm={6} md={4} key={meal.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{meal.name}</Typography>
                <Typography color="textSecondary" gutterBottom>
                  {meal.description}
                </Typography>
                <Typography variant="body2">
                  Bereidingstijd: {meal.prepTime + meal.cookTime} minuten
                </Typography>
                <Typography variant="body2">
                  Porties: {servings}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <MuscleRating
                    value={meal.rating || 0}
                    onChange={(_, newValue) => onUpdateRating(meal.id, newValue || 0)}
                    max={5}
                    size="small"
                  />
                </Box>
              </CardContent>
              <CardActions>
                <IconButton onClick={() => onSelectMeal(meal)}>
                  <EditIcon />
                </IconButton>
                <TextField
                  type="number"
                  value={servings}
                  onChange={(e) => onUpdateServings(meal.id, parseInt(e.target.value))}
                  size="small"
                  sx={{ width: 80 }}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {showShoppingList && <ShoppingListComponent shoppingList={generateShoppingList()} />}

      <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)}>
        <DialogTitle>Maaltijd Toevoegen</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel>Kies een maaltijd</InputLabel>
            <Select
              value={selectedMealId}
              onChange={(e) => setSelectedMealId(e.target.value)}
              label="Kies een maaltijd"
            >
              {predefinedMeals.map((meal) => (
                <MenuItem key={meal.id} value={meal.id}>
                  {meal.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            label="Aantal porties"
            type="number"
            fullWidth
            value={newServings}
            onChange={(e) => setNewServings(parseInt(e.target.value))}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDialogOpen(false)}>Annuleren</Button>
          <Button onClick={handleAddMeal} variant="contained" disabled={!selectedMealId}>
            Toevoegen
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={!!selectedMeal}
        onClose={() => onSelectMeal(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedMeal && (
          <>
            <DialogTitle>{selectedMeal.name}</DialogTitle>
            <DialogContent>
              <Typography variant="subtitle1" gutterBottom>
                Ingrediënten:
              </Typography>
              <List>
                {selectedMeal.ingredients.map((ingredient, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${ingredient.name}: ${ingredient.amount} ${ingredient.unit}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Typography variant="subtitle1" gutterBottom>
                Bereidingswijze:
              </Typography>
              <List>
                {selectedMeal.instructions.map((instruction, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${index + 1}. ${instruction}`} />
                  </ListItem>
                ))}
              </List>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => onSelectMeal(null)}>Sluiten</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default MealPlanner; 