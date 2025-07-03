// pages/ForumPage.js
// @ts-check

import { expect } from '@playwright/test'
export class ForumPage {

  constructor(page) {
    this.page = page;
    
    this.registerMenuBtn = page.getByRole('menuitem', { name: 'Register' });
    this.agreeButton = page.getByRole('button', { name: 'I agree to these terms' });

    // Form fields
    this.usernameInput = page.getByRole('textbox', { name: 'Username:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:', exact: true });
    this.confirmPasswordInput = page.getByRole('textbox', { name: 'Confirm password:' });
    this.emailInput = page.getByRole('textbox', { name: 'Email address:' });
    this.timezoneSelect = page.getByLabel('My timezone:');

    this.submitButton = page.getByRole('button', { name: 'Submit' });

    this.errorMessage = page.locator('.error').first();
  }

  async navigateToRegistration() {
    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'load' }),
      this.registerMenuBtn.click()
    ]);

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      this.agreeButton.click()
    ]);

    // Noticed that in headless mode many times test failed bcs agree btn doesn't work at first
    if (await this.agreeButton.isVisible()) {
      await this.agreeButton.click();
    }
  }

  async fillRegistrationForm(credentials) {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.fill(credentials.name);
    await this.passwordInput.fill(credentials.password);
    await this.confirmPasswordInput.fill(credentials.password);
    await this.emailInput.fill(credentials.email);
    await this.timezoneSelect.selectOption('Europe/Bratislava');
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async expectRegistrationErrorMessage() {
    await expect(this.errorMessage).toBeVisible({ timeout: 5000 });
    await expect(this.errorMessage).toContainText('Public email are not allowed.');
  }
}
