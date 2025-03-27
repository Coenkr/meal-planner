import React from 'react';
import { Rating, RatingProps } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

interface MuscleRatingProps extends Omit<RatingProps, 'icon' | 'emptyIcon'> {
  size?: 'small' | 'medium' | 'large';
}

const MuscleRating: React.FC<MuscleRatingProps> = (props) => {
  return (
    <Rating
      {...props}
      icon={<FitnessCenterIcon sx={{ color: '#2e7d32' }} />}
      emptyIcon={<FitnessCenterIcon sx={{ color: '#e0e0e0' }} />}
      sx={{
        '& .MuiRating-icon': {
          fontSize: props.size === 'small' ? '1.2rem' : props.size === 'medium' ? '1.5rem' : '2rem',
        },
      }}
    />
  );
};

export default MuscleRating; 