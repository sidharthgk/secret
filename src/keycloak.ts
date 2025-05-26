import Keycloak, { KeycloakConfig } from 'keycloak-js';

// Keycloak configuration using your environment variables
const keycloakConfig: KeycloakConfig = {
  url: import.meta.env.VITE_API_LOGIN_KEYCLOCK, // Your Keycloak server URL
  realm: import.meta.env.VITE_API_REALM,        // Your realm name
  clientId: import.meta.env.VITE_API_CLIENT_ID, // Your client ID
};

// Create Keycloak instance
const keycloak = new Keycloak(keycloakConfig);

export default keycloak;