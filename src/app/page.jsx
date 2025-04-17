'use client';
import { Button, Typography, Container, Box } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';
import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Home() {
  const [user, setUser] = React.useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '5rem' }}>
      <Box
        sx={{
          p: 4,
          border: '1px solid #ccc',
          borderRadius: '16px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Google Sign-In
        </Typography>
        {user ? (
          <Typography variant="h6">Welcome, {user.displayName}</Typography>
        ) : (
          <Button
            variant="contained"
            onClick={handleGoogleSignIn}
            sx={{ borderRadius: '16px' }}
          >
            <CircleUserRound size={24} />
            Sign in with Google
          </Button>
        )}
      </Box>
    </Container>
  );
}
