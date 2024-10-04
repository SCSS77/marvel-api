<img src="https://raw.githubusercontent.com/SCSS77/marvel-api/refs/heads/master/public/banner-next-react.jpeg?token=GHSAT0AAAAAACYO5VL3PWTHT2OSSYVAOVLMZYAC5XA" alt="react boilerplate banner" align="center" style="max-width: 100%;">

## About

This project is a ReactJS-based system showcasing the roster of characters from Marvel Comics, leveraging data sourced from the "Marvel API". Alongside presenting the comprehensive character list, the navigation bar features a search input field and button for users to locate specific characters by name. Furthermore, clicking on the details link directs users to a dedicated page offering extensive character information, including a list of associated comic books.

Key technologies employed in this project encompass the Next.js framework, Context API, TypeScript, and the BEM methodology for CSS organization, supplemented by SASS for styling.

## Marvel API Exercice

<dl>
  <dt>Marvel characters Listpage</dt>
  - Initially the page should show the first 50 characters.<br>
  - The view must contain:<br>
        1. An icon with the logo.<br>
        2. An icon showing the number of favourite characters.<br>
        3. A search bar where you can search for characters by name. (Example: If you search for "Spider", all names containing that word should be displayed).<br>
        4. A counter with the results obtained after each search, which will be updated in real time.<br>
        5. A list of results, each of which will contain the image, character name and an option to add the character to favourites.<br>
  - Clicking on a result should redirect you to the character detail view.<br>
  - When you click on the favourites icon in each result, it should change colour and a unit should be added to the counter in the upper area, as indicated in the should add a unit to the counter in the upper area, as indicated in the designs. It must be possible to remove the favourite characters by changing the counter. The favourites information must persist between the different views.

  <dt>Marvel character detail page</dt>
  - Develop an interface that follows the design proposed in Figma.<br>
  - The view must contain:<br>
    1. An icon with the logo. By clicking on this link you will be redirected to the main view. (Character listing page).<br>
    2. The image, title and description of the character, as well as the option to add the character as a favourite.<br>
    3. A list of the character's comics ordered by release date.<br>
    4. Only the first 20 comics of each character should be shown.
</dl>

## Quick start

1.  Make sure that you have Node.js v16.20.2 and npm v8.19.4 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/SCSS77/marvel-api.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
5.  Run `npm install` in order to install dependencies and clean the git repo.<br />
    At this point you can run `npm run dev` (`yarn run dev`) to see the example app at `http://localhost:3000`.
6. To use the tests you can enter this script in the terminal `npm run test` (`yarn test`).

Now you're ready to rumble!

> To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
