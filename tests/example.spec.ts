import { test, expect } from "@playwright/test";

test("expect to hang", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.waitForFunction(() => Promise.resolve(false));
  console.log("THIS SHOULD NOT BE REACHED");
});
