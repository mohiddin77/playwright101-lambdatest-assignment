# LambdaTest Certifications – Playwright 101

This repository contains the solution for the **Playwright 101** certification assignment from LambdaTest Certifications.

## 🧪 Automated Test Scenarios

1. **Simple Form Demo** – Fill out a text input and verify the displayed message.
2. **Drag & Drop Sliders** – Adjust the slider to a specific value and validate it.
3. **Input Form Submit** – Submit a form both empty and filled, verifying validation and success messages.

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

## 📋 Project Requirements

- Uses **Playwright v1.52.0**
- Includes 3 different test locators (e.g. CSS, text, ID)
- Tests run in **parallel** on multiple browser/OS combinations via **LambdaTest**
- Video, network logs, console logs, and screenshots are enabled
- LambdaTest test run IDs will be included in the submission

## 📦 Useful Scripts

```bash
npm install        # Install dependencies
npm run test       # Run all tests on LambdaTest
```

## 👤 Author

[https://github.com/hernandosebastian] – Certification Project for LambdaTest

