import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Functional Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('Homepage loads with correct title', async () => {
        await homePage.verifyTitle();
    });

    test('Navigation menu links work', async () => {
        const isVisible = await homePage.isNavVisible();
        expect(isVisible, 'At least one nav element should be visible').toBeTruthy();
        await homePage.navigateToAbout();
    });

    test('Contact form inputs are visible', async () => {
        await expect(homePage.contactSection).toBeVisible();
        await expect(homePage.nameInput).toBeVisible();
        await expect(homePage.emailInput).toBeVisible();
    });

    test('No horizontal scrollbar on main page', async ({ page }) => {
        const scrollWidth = await page.evaluate(() => document.body.scrollWidth);
        const clientWidth = await page.evaluate(() => document.body.clientWidth);
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });
});
