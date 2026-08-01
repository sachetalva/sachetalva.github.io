import { test, expect } from '@playwright/test';

test.describe('Sachet Alva Swiss Typography Studio Resume E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load Swiss Typography Studio workspace and display identity and stats in light theme', async ({ page }) => {
    // Verify Page Title
    await expect(page).toHaveTitle(/Sachet Alva/i);

    // Verify Light Theme
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');

    // Verify Hero Name
    const heroTitle = page.locator('h1.hero-name');
    await expect(heroTitle).toContainText('Sachet Alva');

    // Verify Swiss Typography layout sections exist
    await expect(page.locator('[data-testid="scene-hero"]')).toBeVisible();
    await expect(page.locator('[data-testid="scene-monitors"]')).toBeVisible();
    await expect(page.locator('[data-testid="scene-whiteboard"]')).toBeVisible();
    await expect(page.locator('[data-testid="scene-projects"]')).toBeVisible();
    await expect(page.locator('[data-testid="scene-contact"]')).toBeVisible();

    // Verify stat cards
    await expect(page.locator('[data-testid="stat-years"]')).toBeVisible();
    await expect(page.locator('[data-testid="stat-team"]')).toBeVisible();
  });

  test('should switch between Interactive View and Classic Resume mode', async ({ page }) => {
    const interactiveView = page.locator('[data-testid="interactive-view-container"]');
    const paperView = page.locator('[data-testid="paper-view-container"]');

    // Default view is Interactive View
    await expect(interactiveView).toBeVisible();

    // Switch to Classic Resume view
    const paperModeBtn = page.locator('[data-testid="mode-btn-paper"]');
    await paperModeBtn.click();

    await expect(paperView).toBeVisible();
    await expect(interactiveView).not.toBeVisible();

    // Switch back to Interactive View
    const interactiveModeBtn = page.locator('[data-testid="mode-btn-interactive"]');
    await interactiveModeBtn.click();

    await expect(interactiveView).toBeVisible();
  });

  test('should scrub through whiteboard timeline nodes', async ({ page }) => {
    const activeRole = page.locator('[data-testid="timeline-active-role"]');
    await expect(activeRole).toContainText('Software Development Manager');

    // Click Nokia Networks timeline node
    const nokiaNode = page.locator('[data-testid="timeline-node-nokia networks-2"]');
    await nokiaNode.click();

    await expect(activeRole).toContainText('R&D Engineer');
  });

  test('should filter engineering projects by category', async ({ page }) => {
    const managementCard = page.locator('[data-testid="project-card-aws-pipeline-modernization-&-automation"]');
    const techCard = page.locator('[data-testid="project-card-nokia-gtest-framework-integration"]');

    // Default view: both visible
    await expect(managementCard).toBeVisible();
    await expect(techCard).toBeVisible();

    // Click "Software Engineering" filter
    const softwareFilterBtn = page.locator('button[aria-label="Show software projects"]');
    await softwareFilterBtn.click();

    await expect(techCard).toBeVisible();
    await expect(managementCard).not.toBeVisible();
  });
});
