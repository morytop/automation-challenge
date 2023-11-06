import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verify menu bookmarks', () => {
  test('Check if bookmarks on home page are visible', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    const title = await homePage.title();
    expect(title).toContain(
      'SAP Fioneer | World-class software solutions for financial services',
    );

    const bookmarks = [
      homePage.mainMenu.bankingBookmark,
      homePage.mainMenu.insuranceBookmark,
      homePage.mainMenu.financeBookmark,
      homePage.mainMenu.servicesBookmark,
      homePage.mainMenu.partnersBookmark,
      homePage.mainMenu.companyBookmark,
      homePage.mainMenu.resourcesBookmark,
    ];

    for (const bookmark of bookmarks) {
      await expect(bookmark).toBeVisible();
    }
  });
});
