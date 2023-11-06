import { FinancialControlPage } from '../src/pages/financial-control.page';
import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verify financial control page', () => {
  test('Check if a user has been redirected to correct page', async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const financialControlPage = new FinancialControlPage(page);

    await homePage.goto();
    await homePage.mainMenu.financeBookmark.click();
    await homePage.mainMenu.financialControlLink.click();

    await expect(page).toHaveURL(financialControlPage.url);
    await expect(financialControlPage.financialControlHeader).toBeInViewport();
  });
});
