# Web Development Project

This project is a web development project built with **React**, **Tailwind CSS**, **Material UI (MUI)**, and **Material Icons**. Below you'll find the steps to clone, install dependencies, and run the project locally.

## Prerequisites

- **Node.js** (>= 14.0.0)
- **npm** (>= 6.0.0) or **yarn** (>= 1.0.0)

## Installation Steps

Follow the steps below to set up and run the project locally.

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/amitkumar2308/Spicetrade.git
cd client

Install the dependencies using npm:
npm install

Setup Tailwind CSS

1. Create a tailwind.config.js file by running the following command:
npx tailwindcss init

2. In your tailwind.config.js, ensure you add the following to the content array:
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. In your src/index.css (or create the file if it doesn't exist), add the following lines:
@tailwind base;
@tailwind components;
@tailwind utilities;

