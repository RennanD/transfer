import React from 'react';

import { AuthProvider,useAuth } from './auth';

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export { AppProvider, useAuth };
