import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class FinancialControlPage extends BasePage {
  url = '/finance-esg/financial-control/';
  financialControlHeader = this.page.getByRole('heading', {
    name: 'Financial Control',
    exact: true,
  });

  constructor(page: Page) {
    super(page);
  }
}
