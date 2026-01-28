import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly navMenu: Locator;
    readonly aboutSection: Locator;
    readonly contactSection: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;

    readonly menuToggle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navMenu = page.locator('nav');
        this.menuToggle = page.locator('#menuToggle');
        this.aboutSection = page.locator('#sobre');
        this.contactSection = page.locator('#contato');
        this.nameInput = page.locator('#contato input[name="nome"]');
        this.emailInput = page.locator('#contato input[name="email"]');
    }

    async goto() {
        await this.page.goto('/');
    }

    async verifyTitle() {
        await expect(this.page).toHaveTitle(/R & CB Advogados/);
    }

    async isNavVisible() {
        // Robust check for both desktop and mobile navs
        const count = await this.navMenu.count();
        let visible = false;
        for (let i = 0; i < count; i++) {
            if (await this.navMenu.nth(i).isVisible()) visible = true;
        }
        return visible;
    }

    async navigateToAbout() {
        const link = this.page.locator('a[href="#sobre"]').first();

        // Mobile handling: if link is hidden, try opening menu
        if (!await link.isVisible() && await this.menuToggle.isVisible()) {
            await this.menuToggle.click();
            await link.waitFor({ state: 'visible' });
        }

        await link.click();
        await expect(this.page).toHaveURL(/#sobre/);
    }
}
