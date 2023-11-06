import { Page } from '@playwright/test';

export class MainMenuComponent {
  bankingBookmark = this.page
    .locator('#menu-item-29961')
    .getByRole('link', { name: 'Banking', exact: true });

  insuranceBookmark = this.page
    .locator('#menu-item-29972')
    .getByRole('link', { name: 'Insurance', exact: true });

  financeBookmark = this.page
    .locator('#menu-item-29979')
    .getByRole('link', { name: 'Finance & ESG' });

  servicesBookmark = this.page.getByRole('link', {
    name: 'Services',
    exact: true,
  });
  partnersBookmark = this.page.getByRole('link', { name: 'Partners' });

  companyBookmark = this.page
    .locator('#menu-item-26834')
    .getByRole('link', { name: 'Company' });

  resourcesBookmark = this.page.getByRole('link', { name: 'Resources' });

  getInTouchButton = this.page
    .locator('#masthead')
    .getByRole('link', { name: 'Get in touch' });

  financialControlLink = this.page.getByRole('link', {
    name: 'Financial Control',
  });

  constructor(private page: Page) {}
}
