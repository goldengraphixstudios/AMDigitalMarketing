import { test, expect } from "@playwright/test";

const pages = ["/", "/services", "/about", "/portfolio", "/contact", "/free-audit"];

test.describe("AM Digital Marketing smoke", () => {
  for (const path of pages) {
    test(`loads ${path}`, async ({ page }) => {
      await page.goto(path, { waitUntil: "networkidle" });
      await expect(page).toHaveTitle(/AM Digital Marketing/);
      await page.setViewportSize({ width: 1400, height: 900 });
      await page.waitForTimeout(800);
      await page.screenshot({ path: test.info().outputPath(`${path.slice(1) || "home"}.png`), fullPage: true });
    });
  }

  test("CTA and nav interactions", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.getByRole("link", { name: /Request a Quote/i }).first().click();
    await page.waitForTimeout(500);
    await page.getByRole("link", { name: /Services/i }).first().click();
    await expect(page).toHaveURL(/\/services/);
  });
});
