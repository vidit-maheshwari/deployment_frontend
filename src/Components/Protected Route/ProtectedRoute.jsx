// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';


const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn >
        {children}
 
        
        </SignedIn>
      <SignedOut>
        <Navigate to="/" />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;
