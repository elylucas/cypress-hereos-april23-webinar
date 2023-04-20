import { defineConfig } from 'cypress';
import { createHero, deleteHero } from './cypress/support/data';

export default defineConfig({
  projectId: 'tzc8kr',
  e2e: {
    testIsolation: false, //disable to see api results screen
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      on('task', {
        createHero,
        deleteHero,
      });
    },
  },
});
