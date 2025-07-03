// pages/VeeamPage.js
// @ts-check

export class VeeamPage {

  constructor(page) {
    this.page = page;
    
    this.closeCookiesButton = page.getByRole('button', { name: 'Close' });
    this.supportButton = page.getByRole('button', { name: 'Support' });
    this.rndForumsLink = page.getByRole('link', { name: 'R&D Forums' });
}

  async openHomePage() {
    await this.page.goto('https://www.veeam.com/');
  }

  async closeCookiesIfVisible() {
    if (await this.closeCookiesButton.isVisible()) {
      await this.closeCookiesButton.click();
    }
  }

  async navigateToForum() {
    await this.supportButton.click();

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'load' }),
      this.rndForumsLink.click()
    ]);
  }

  
}