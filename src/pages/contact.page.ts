import { errors } from '../helpers/errors';
import { BasePage } from './base.page';
import { Page, expect } from '@playwright/test';

const formIframe = 'iframe[title="Form 0"]';

export class ContactPage extends BasePage {
  url = '/contact/';
  contactHeader = this.page.getByRole('heading', { name: 'Contact us' });
  getInTouchButton = this.page
    .locator('#masthead')
    .getByRole('link', { name: 'Get in touch' });
  submitButton = this.page
    .frameLocator(formIframe)
    .getByRole('button', { name: 'Submit' });

  firstNameError = this.page
    .frameLocator(formIframe)
    .locator('.hs_firstname .hs-error-msg');
  lastNameError = this.page
    .frameLocator(formIframe)
    .locator('.hs_lastname .hs-error-msg');
  workEmailError = this.page
    .frameLocator(formIframe)
    .locator('.hs_email .hs-error-msg');
  countryError = this.page
    .frameLocator(formIframe)
    .locator('.hs_country__new_ .hs-error-msg');
  helpError = this.page
    .frameLocator(formIframe)
    .locator('.hs_how_can_we_help_you_ .hs-error-msg');
  updateCheckboxError = this.page
    .frameLocator(formIframe)
    .locator('.hs-dependent-field  .hs-error-msg');
  summaryError = this.page
    .frameLocator(formIframe)
    .locator('.hs_error_rollup ');

  constructor(page: Page) {
    super(page);
  }

  async checkValidationMessages(): Promise<void> {
    await expect(this.firstNameError).toContainText(errors.CompleteField);
    await expect(this.lastNameError).toContainText(errors.CompleteField);
    await expect(this.workEmailError).toContainText(errors.CompleteField);
    await expect(this.countryError).toContainText(errors.SelectOption);
    await expect(this.helpError).toContainText(errors.CompleteField);
    await expect(this.updateCheckboxError).toContainText(errors.CompleteField);
    await expect(this.summaryError).toContainText(errors.CompleteFields);
  }
}
