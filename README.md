# LambdaTest Certifications – Playwright 101

This repository contains the solution for the **Playwright 101** certification assignment from LambdaTest Certifications.

## 📋 Project Requirements

- Uses **Playwright v1.52.0**
- Includes 3 different test locators (e.g. CSS, text, ID)
- Tests run in **parallel** on multiple browser/OS combinations via **LambdaTest**
- Video, network logs, console logs, and screenshots are enabled
- LambdaTest test run IDs will be included in the submission

## 🧪 Automated Test Scenarios

1. **Simple Form Demo** – Fill out a text input and verify the displayed message.
2. **Drag & Drop Sliders** – Adjust the slider to a specific value and validate it.
3. **Input Form Submit** – Submit a form both empty and filled, verifying validation and success messages.

## 📦 Useful Scripts

```bash
npm install          # Install dependencies
npm run test         # Run all tests on LambdaTest
npm run test:local   # Run all tests locally
```

## 🚀 Setup

1. Install dependencies:

```bash
npm install
```

2. Configure LambdaTest credentials:

- Use the `.env.dist` template file by renaming it to `.env` and adding your credentials:

```
LT_USERNAME=your_lambdatest_username
LT_ACCESS_KEY=your_lambdatest_access_key
```

> [!IMPORTANT]  
> Replace with your actual LambdaTest username and access key

## ▶️ How to Run Tests

Run tests on LambdaTest:

```bash
npm run test
```

Run tests locally:

```bash
npm run test:local
```

## Run Playwright Tests In Gitpod

Select the button below to try this demo in Gitpod:

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/hernandosebastian/playwright101-lambdatest-assignment)

After the Gitpod session launches, set your LambdaTest credentials as environment variables:

```bash
eval $(gp env -e LT_USERNAME=******)
eval $(gp env -e LT_ACCESS_KEY=******)
```

If you're unsure how to access your LambdaTest credentials, check [this guide](https://www.lambdatest.com/support/docs/using-environment-variables-for-authentication-credentials/).

If you start a new terminal in Gitpod, run this command to reset the environment variables:

```bash
eval $(gp env -e)
```

For more information, refer to [Gitpod documentation](https://www.gitpod.io/docs/environment-variables).

## 👤 Author

[https://github.com/hernandosebastian] – Certification Project for LambdaTest

