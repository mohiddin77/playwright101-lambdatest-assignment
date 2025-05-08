import { expect, Locator, Page } from "@playwright/test";
import test from "../lambdatest-setup";

async function dragSliderToValue(
  page: Page,
  sliderLocator: Locator,
  value: number
) {
  const sliderBox = await sliderLocator.boundingBox();

  if (!sliderBox) {
    return;
  }

  const sliderWidth = sliderBox.width;
  const sliderX = sliderBox.x;
  const sliderY = sliderBox.y;

  const targetPositionX = sliderX + (sliderWidth * value) / 100;

  await page.mouse.move(
    sliderX + sliderWidth / 2,
    sliderY + sliderBox.height / 2
  );
  await page.mouse.down();
  await page.mouse.move(targetPositionX, sliderY + sliderBox.height / 2);
  await page.mouse.up();
}

async function decreaseSliderValue(
  page: Page,
  sliderLocator: Locator,
  targetValue: number
) {
  let value = await sliderLocator.inputValue();

  while (parseInt(value) > targetValue) {
    await page.mouse.move(5, 5);
    await sliderLocator.press("ArrowLeft");
    value = await sliderLocator.inputValue();
  }
}

test("Drag & Drop Slider - moves slider to 95", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground");

  await page.getByText("Drag & Drop Sliders").click();

  const slider = page.locator('input[type="range"][value="15"]');

  await dragSliderToValue(page, slider, 100);

  await decreaseSliderValue(page, slider, 95);

  const value = await slider.inputValue();
  expect(value).toBe("95");
});
