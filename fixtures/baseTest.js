import { test as base } from '@playwright/test';
import { InquirePage } from '../pages/InquirePage';

export const test = base.extend({
  inquirePage: async ({ page }, use) => {
    const inquirePage = new InquirePage(page);
    await use(inquirePage);
  },
});

export { expect } from '@playwright/test';