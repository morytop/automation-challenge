import { ContactPage } from '../src/pages/contact.page';
import { HomePage } from '../src/pages/home.page';
import { expect, test } from '@playwright/test';

test.describe('Verify contact page', () => {
  test('Check validation messages', async ({ page }) => {
    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page);

    await homePage.goto();
    await homePage.mainMenu.getInTouchButton.click();

    await expect(page).toHaveURL(contactPage.url);
    await expect(contactPage.contactHeader).toBeInViewport();

    await contactPage.submitButton.click();
    await contactPage.checkValidationMessages();
  });
});
