// tests/registrationErrorMessage.spec.js
import { test } from '@playwright/test';
import { ForumPage } from './pages/ForumPage.js';
import { VeeamPage } from './pages/VeeamPage.js';

const credentials = require('./credentials.json');

// @ts-check
test('Registration with public email should fail', async ({ page }) => {
  const veeamPage = new VeeamPage(page)
  
  await veeamPage.openHomePage();
  await veeamPage.closeCookiesIfVisible();
  await veeamPage.navigateToForum();
  
  
  const forumPage = new ForumPage(page);

  await forumPage.navigateToRegistration();
  await forumPage.fillRegistrationForm(credentials.testUser1);
  await forumPage.submitForm();
  
  // Verify error message is shown
  await forumPage.expectRegistrationErrorMessage();
});
