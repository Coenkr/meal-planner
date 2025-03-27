import { Meal } from '../types/Meal';

export const predefinedMeals: Meal[] = [
  {
    id: '1',
    name: 'Geroosterde kipfilet met zoete aardappel en broccoli',
    description: 'Een eiwitrijke maaltijd perfect voor spieropbouw',
    ingredients: [
      { name: 'Kipfilet', amount: 200, unit: 'g' },
      { name: 'Zoete aardappel', amount: 200, unit: 'g' },
      { name: 'Broccoli', amount: 150, unit: 'g' },
      { name: 'Olijfolie', amount: 7, unit: 'ml' },
      { name: 'Knoflookpoeder', amount: 0.3, unit: 'tl' },
      { name: 'Peper', amount: 0.2, unit: 'tl' },
      { name: 'Zout', amount: 0.2, unit: 'tl' }
    ],
    instructions: [
      'Voorverwarm de oven op 200°C',
      'Snijd de kip in porties en marineer met olijfolie, knoflookpoeder, peper en zout',
      'Plaats de zoete aardappelblokjes op een bakplaat, besprenkel met olijfolie, peper en zout',
      'Rooster de zoete aardappel 25-30 minuten tot ze goudbruin en gaar zijn',
      'Kook de broccoli in kokend water of stoom 5-7 minuten, tot ze zacht maar stevig zijn',
      'Bak de kipfilet in een pan op middelhoog vuur 6-8 minuten per kant, tot de kip volledig gaar is'
    ],
    prepTime: 15,
    cookTime: 35,
    servings: 1,
    rating: 4
  },
  {
    id: '2',
    name: 'Zalm met quinoa en geroosterde groenten',
    description: 'Omega-3 rijke maaltijd met gezonde vetten',
    ingredients: [
      { name: 'Zalmfilet', amount: 150, unit: 'g' },
      { name: 'Quinoa', amount: 75, unit: 'g' },
      { name: 'Courgette', amount: 75, unit: 'g' },
      { name: 'Paprika', amount: 75, unit: 'g' },
      { name: 'Olijfolie', amount: 7, unit: 'ml' },
      { name: 'Peper', amount: 0.2, unit: 'tl' },
      { name: 'Zout', amount: 0.2, unit: 'tl' },
      { name: 'Citroensap', amount: 7, unit: 'ml' }
    ],
    instructions: [
      'Voorverwarm de oven op 180°C',
      'Snijd de courgette en paprika in stukken, besprenkel met olijfolie, peper en zout',
      'Plaats de groenten op een bakplaat en rooster ze 20-25 minuten',
      'Kook de quinoa 12-15 minuten in kokend water',
      'Leg de zalmfilet op bakpapier, breng op smaak met citroensap, peper en zout',
      'Bak de zalm 15 minuten op 180°C'
    ],
    prepTime: 15,
    cookTime: 25,
    servings: 1,
    rating: 5
  },
  {
    id: '3',
    name: 'Gehaktballetjes van kip met courgetti en tomatensaus',
    description: 'Koolhydraatarme maaltijd met courgetti',
    ingredients: [
      { name: 'Kipgehakt', amount: 150, unit: 'g' },
      { name: 'Courgette', amount: 1, unit: 'stuk' },
      { name: 'Tomatensaus', amount: 100, unit: 'ml' },
      { name: 'Olijfolie', amount: 5, unit: 'ml' },
      { name: 'Basilicum', amount: 0.3, unit: 'tl' },
      { name: 'Oregano', amount: 0.3, unit: 'tl' },
      { name: 'Peper', amount: 0.2, unit: 'tl' },
      { name: 'Zout', amount: 0.2, unit: 'tl' }
    ],
    instructions: [
      'Maak kleine gehaktballetjes van het kipgehakt, kruiden met peper en zout',
      'Bak de gehaktballetjes in een pan op middelhoog vuur 8-10 minuten',
      'Verwarm de tomatensaus in een pan en breng op smaak met basilicum en oregano',
      'Laat de saus 5 minuten sudderen',
      'Voeg de courgetti toe aan de saus en laat 2-3 minuten opwarmen'
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 1,
    rating: 4
  },
  {
    id: '4',
    name: 'Griekse kip met couscous en gegrilde groenten',
    description: 'Mediterrane maaltijd met volkoren couscous',
    ingredients: [
      { name: 'Kipfilet', amount: 150, unit: 'g' },
      { name: 'Volkoren couscous', amount: 75, unit: 'g' },
      { name: 'Paprika', amount: 50, unit: 'g' },
      { name: 'Courgette', amount: 50, unit: 'g' },
      { name: 'Rode ui', amount: 50, unit: 'g' },
      { name: 'Feta', amount: 50, unit: 'g' },
      { name: 'Olijfolie', amount: 10, unit: 'ml' },
      { name: 'Oregano', amount: 0.3, unit: 'tl' },
      { name: 'Peper', amount: 0.2, unit: 'tl' },
      { name: 'Zout', amount: 0.2, unit: 'tl' },
      { name: 'Citroensap', amount: 7, unit: 'ml' }
    ],
    instructions: [
      'Voorverwarm de oven op 200°C',
      'Snijd de kipfilet in stukjes en marineer met olijfolie, citroensap, oregano, peper en zout',
      'Laat het 15 minuten intrekken',
      'Plaats de groenten op een bakplaat en rooster ze 20-25 minuten',
      'Bereid de couscous 5-10 minuten in heet water',
      'Grill of bak de kipfilet in de pan 6-8 minuten per kant'
    ],
    prepTime: 20,
    cookTime: 25,
    servings: 1,
    rating: 5
  },
  {
    id: '5',
    name: 'Tofu roerbak met groenten en zilvervliesrijst',
    description: 'Vegetarische maaltijd met tofu',
    ingredients: [
      { name: 'Tofu', amount: 150, unit: 'g' },
      { name: 'Paprika', amount: 50, unit: 'g' },
      { name: 'Champignons', amount: 50, unit: 'g' },
      { name: 'Courgette', amount: 50, unit: 'g' },
      { name: 'Zilvervliesrijst', amount: 75, unit: 'g' },
      { name: 'Sojasaus', amount: 10, unit: 'ml' },
      { name: 'Sesamolie', amount: 5, unit: 'ml' },
      { name: 'Peper', amount: 0.2, unit: 'tl' },
      { name: 'Zout', amount: 0.2, unit: 'tl' }
    ],
    instructions: [
      'Kook de zilvervliesrijst 25-30 minuten in kokend water',
      'Snijd de tofu in blokjes en bak ze in een pan met sesamolie en sojasaus 5-7 minuten',
      'Voeg de groenten toe aan de pan en roerbak nog 5-7 minuten'
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 1,
    rating: 4
  }
]; 