import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';

test.describe('Unhappy Paths & Edge Cases', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
    });

    test('Form validation: Empty submission', async ({ page }) => {
        // Attempt to submit form without filling anything
        // Assuming there is a submit button in the contact section
        const submitBtn = homePage.contactSection.locator('button[type="submit"]');

        // We expect the browser's HTML5 validation to kick in.
        // In Playwright, we can check if the input matches :invalid pseudo-class
        // OR we can try to click and see if request is NOT sent (mocking network).

        if (await submitBtn.isVisible()) {
            await submitBtn.click();

            // Assert that name input is invalid (HTML5 required attribute)
            const nameInputValidity = await homePage.nameInput.evaluate((el: HTMLInputElement) => el.checkValidity());
            expect(nameInputValidity).toBe(false);
        }
    });

    test('Form validation: Invalid email format', async ({ page }) => {
        await homePage.nameInput.fill('Tester Chaos');
        await homePage.emailInput.fill('not-an-email');

        const submitBtn = homePage.contactSection.locator('button[type="submit"]');
        if (await submitBtn.isVisible()) {
            await submitBtn.click();

            // Assert email is invalid
            const emailValidity = await homePage.emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
            expect(emailValidity).toBe(false);
        }
    });
});
