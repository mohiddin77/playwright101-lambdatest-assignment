import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
  },
  retries: 1,
  workers: 3,
  projects: [
    {
      name: "Chromium",
      use: {
        browserName: "chromium",
        viewport: { width: 1280, height: 800 },
      },
    },
    {
      name: "Firefox",
      use: {
        browserName: "firefox",
        viewport: { width: 1280, height: 800 },
      },
    },
    {
      name: "Webkit",
      use: {
        browserName: "webkit",
        viewport: { width: 1280, height: 800 },
      },
    },
  ],
});
