This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Switch to the proper version of Node:

```bash
nvm use
```

Install Dependencies:

```bash
npm install
# or
yarn
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Exercises

1. Display 12 cards with "Headline 1" "Description 1", "Headline 2" "Description 2" and so on. You can leave the other data as is.
2. Change the primary color (currently a shade of red) to `#403a58`
3. The images change from grayscale to color on hover. Switch to low-contrast to high-contrast
4. Make the cards display in a grid: 4 columns wide on desktop, 3 on tablet, and 1 on mobile. The grid should have "medium" (specified in the Tailwind config) spacing between each item, and "large" on desktop. Use your judgement on what constitutes each screen size.
5. Create a new component that is a page header. It should display the text in an appropriately large font. It should have a "decorated" option, in which case the text should be displayed with a "~" at the beginning and end.
6. There is a problem inside the card component. Please diagnose and fix.
7. Create a `srcset` for the card images so that the browser downloads the appropriate image size
