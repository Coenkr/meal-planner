import React, { useState } from 'react';
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
  Paper,
} from '@mui/material';
import MealPlanner from './components/MealPlanner';
import ShoppingList from './components/ShoppingList';
import { Ingredient } from './types/Recipe';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);

  const handleRemoveIngredient = (index: number) => {
    setShoppingList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', py: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              color: 'primary.main',
              mb: 4,
              fontWeight: 'bold',
            }}
          >
            Maaltijdplanner
          </Typography>
          
          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { md: '1fr 1fr' } }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <MealPlanner onShoppingListUpdate={setShoppingList} />
            </Paper>
            
            <Box>
              <ShoppingList
                ingredients={shoppingList}
                onRemoveIngredient={handleRemoveIngredient}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App; 