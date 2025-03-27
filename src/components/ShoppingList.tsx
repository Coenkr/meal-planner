import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Paper,
  Box,
  Divider,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Ingredient } from '../types/Recipe';

interface ShoppingListProps {
  ingredients: Ingredient[];
  onRemoveIngredient: (index: number) => void;
}

// Categorieën voor verschillende winkelafdelingen
const categories = {
  groente: ['groente', 'fruit', 'salade', 'ui', 'knoflook', 'tomaat', 'komkommer', 'wortel', 'aardappel'],
  vlees: ['vlees', 'kip', 'vis', 'rundvlees', 'varkensvlees', 'lamsvlees'],
  zuivel: ['melk', 'kaas', 'yoghurt', 'boter', 'eieren', 'room'],
  brood: ['brood', 'crackers', 'meel', 'pasta', 'rijst'],
  conserven: ['blik', 'pot', 'saus', 'soep', 'conserven'],
  diepvries: ['diepvries', 'ijs'],
  overig: ['overig', 'diversen'],
};

const ShoppingList: React.FC<ShoppingListProps> = ({ ingredients, onRemoveIngredient }) => {
  // Groepeer ingrediënten per categorie
  const groupedIngredients = ingredients.reduce((acc, ingredient, index) => {
    const category = Object.entries(categories).find(([_, keywords]) =>
      keywords.some(keyword => ingredient.name.toLowerCase().includes(keyword))
    )?.[0] || 'overig';

    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ ...ingredient, index });
    return acc;
  }, {} as Record<string, (Ingredient & { index: number })[]>);

  // Bepaal de volgorde van de categorieën
  const categoryOrder = ['groente', 'fruit', 'vlees', 'zuivel', 'brood', 'conserven', 'diepvries', 'overig'];

  return (
    <Paper elevation={3} sx={{ p: 2, maxWidth: 600, mx: 'auto', mt: 2 }}>
      <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
        Boodschappenlijst
      </Typography>
      {categoryOrder.map((category) => {
        const categoryIngredients = groupedIngredients[category];
        if (!categoryIngredients?.length) return null;

        return (
          <Box key={category} sx={{ mb: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: 'secondary.main',
                textTransform: 'capitalize',
                fontWeight: 'medium',
                mt: 2,
                mb: 1,
              }}
            >
              {category}
            </Typography>
            <List>
              {categoryIngredients.map((ingredient) => (
                <React.Fragment key={ingredient.index}>
                  <ListItem
                    sx={{
                      backgroundColor: 'background.paper',
                      borderRadius: 1,
                      mb: 0.5,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <ListItemText
                      primary={ingredient.name}
                      secondary={`${ingredient.amount} ${ingredient.unit}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => onRemoveIngredient(ingredient.index)}
                        sx={{
                          color: 'error.main',
                          '&:hover': {
                            backgroundColor: 'error.light',
                            color: 'error.dark',
                          },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        );
      })}
    </Paper>
  );
};

export default ShoppingList; 