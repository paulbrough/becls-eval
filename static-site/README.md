## Getting Started

Switch to the proper version of Node:

```bash
nvm use
```

Install Dependencies:

```bash
npm install --global gulp-cli
# or
yarn global add gulp-cli
```

```bash
npm install
# or
yarn
```

Run the development server:

```bash
gulp
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exercises

1. Make the card layout responsive
2. Change the hover color of nav links to the brand-specific blue
3. Add a new JS file in app/js called `nav.js` and use it to make the dropdown menu show on click instead of hover
4. Use `gulp-imagemin` to optimize jpg images (quality: 60, progressive)
5. Clean up the layout to match the look and feel of https://www.beckman.com/
