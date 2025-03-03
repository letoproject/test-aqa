// @ts-check
import { test, expect } from "@playwright/test";

test("username field", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  // await page.getByPlaceholder("Username").fill("standard_user");
  await page.fill("#user-name", "standard_user");

  // await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.fill("#password", "secret_sauce");

  // await page.getByRole("button", { name: "Login" }).click();
  await page.click("#login-button");

  // await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
  const productLink = page.locator("text=Sauce Labs Backpack");
  await expect(productLink).toBeVisible();
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: "Get started" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" })
//   ).toBeVisible();
// });
