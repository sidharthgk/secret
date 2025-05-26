import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Keycloak, { KeycloakProfile } from 'keycloak-js';
import keycloak from './keycloak';

interface KeycloakContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: KeycloakProfile | null;
  token: string | null;
  login: () => void;
  logout: () => void;
  keycloak: Keycloak;
}

interface KeycloakProviderProps {
  children: ReactNode;
}

const KeycloakContext = createContext<KeycloakContextType | undefined>(undefined);

export const useKeycloak = (): KeycloakContextType => {
  const context = useContext(KeycloakContext);
  if (!context) {
    throw new Error('useKeycloak must be used within a KeycloakProvider');
  }
  return context;
};

export const KeycloakProvider: React.FC<KeycloakProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<KeycloakProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const initKeycloak = async (): Promise<void> => {
      try {
        const authenticated = await keycloak.init({
          onLoad: 'check-sso', // Options: 'login-required', 'check-sso'
          silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
          checkLoginIframe: false, // Disable iframe check for better performance
        });

        setIsAuthenticated(authenticated);
        
        if (authenticated) {
          setToken(keycloak.token || null);
          // Load user profile
          const userProfile = await keycloak.loadUserProfile();
          setUser(userProfile);
        }

        // Set up token refresh
        keycloak.onTokenExpired = () => {
          keycloak.updateToken(30).then((refreshed: boolean) => {
            if (refreshed) {
              setToken(keycloak.token || null);
              console.log('Token refreshed');
            } else {
              console.log('Token not refreshed, valid for ' + 
                Math.round((keycloak.tokenParsed?.exp || 0) + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
          }).catch(() => {
            console.log('Failed to refresh token');
          });
        };

        setIsLoading(false);
      } catch (error) {
        console.error('Keycloak initialization failed:', error);
        setIsLoading(false);
      }
    };

    initKeycloak();
  }, []);

  const login = (): void => {
    keycloak.login();
  };

  const logout = (): void => {
    keycloak.logout();
  };

  const value: KeycloakContextType = {
    isAuthenticated,
    isLoading,
    user,
    token,
    login,
    logout,
    keycloak,
  };

  return (
    <KeycloakContext.Provider value={value}>
      {children}
    </KeycloakContext.Provider>
  );
};