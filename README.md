![Screen Shot 2023-09-10 at 11 25 11](https://github.com/juliadavydenko/my-best-book/assets/98152890/55938939-30d6-499a-9f50-08ad99c050dc)

## General Information

This is a [Next.js](https://nextjs.org/) project (a React framework for building full-stack web applications) also made with NodeJS and uses TailwindCSS for styling. I used React Components to build user interfaces, and Next.js for additional features and optimizations. Next.js has two different routers: the App Router and the Pages Router. In this project I used The App Router as it is a newer router that allows you to use React's latest features, such as Server Components and Streaming. I used PlayfairDisplay Goggle font. Imported from Next/font/google it makes it easier, because no requests are sent to Google by the browser.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Main Information

## Main page

(1)The project has a Main Page (Dashboard) which is implemented in NextJS file-system based router, where folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.js file.
There is also Navigation Bar which is displayed on all pages of the app. It has to lonks - to the Books page and to the Dashboard(Main Page).
On the Main page there is a form for customer to submit for ordering a book which I will elaborate on more further.
On the Main page there is also a button "View book collection" that redirect a user to the Books page, where available books are displayed.
And, finally, there is a Special Offers segment, where users can read about available offers, e.x. Birthday offer etc.

## Available Books page

(2)The second page is http://localhost:3000/books route, where users can see what books are currently available. Each book is displayed with the Name, Author, Description and Age(for what age it suits the best). There are three options - Young, Medium and Mature. They are colored in Green, Blue and Red respectively and displayed in the each book's right corner for better UI and I achieved that with the help of TailwindCSS(styling). As for implementation, I used local json-server(npm i json-server) and filled my JSON file with some data. Fetching logic is represented in the BooksList.jsx component inside the Books folder. There I made some of comments to explain my code(using revalidation, mapping through books) and logic. If there are no books user sees the corresponding message.

## Book details page

(3)When user clicks on the book title in the list, they are redirected to http://localhost:3000/books/1 - all information about particular book, which I implemented by using dynamic routes Nextjs convention.

## Not Found Pages

(4)In my application, there are two Not Found pages. Two, because one is generic 404 where it is a "random" non-existant page and the second one is custom for a book, when there is no such BookId and thus, a book. First message is "The page you were looking for is not found. Go back to the Main Page, where "Main Page" is a link to the Main Page. For this message to be displayed, the example of the wrong route would be something like (http://localhost:3000/gjjg) - where the ID of "gjjg" doesn't exist.
Second message is "Oops. Sorry, it seems like we could't find the book you were looking for. You can go back to all books", where "all books" is a link to the book list. For this message to be displayed, the example of the wrong route would be something like (http://localhost:3000/books/gjjg) - where the ID of "gjjg" doesn't exist.

## Loading Pages

## Main page

(1)The project has a Main Page (Dashboard) which is implemented in NextJS file-system based router, where folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.js file.
There is also Navigation Bar which is displayed on all pages of the app. It has to lonks - to the Books page and to the Dashboard(Main Page).
On the Main page there is a form for customer to submit for ordering a book which I will elaborate on more further.
On the Main page there is also a button "View book collection" that redirect a user to the Books page, where available books are displayed.
And, finally, there is a Special Offers segment, where users can read about available offers, e.x. Birthday offer etc.

## Available Books page

(2)The second page is http://localhost:3000/books route, where users can see what books are currently available. Each book is displayed with the Name, Author, Description and Age(for what age it suits the best). There are three options - Young, Medium and Mature. They are colored in Green, Blue and Red respectively and displayed in the each book's right corner for better UI and I achieved that with the help of TailwindCSS(styling). As for implementation, I used local json-server(npm i json-server) and filled my JSON file with some data. Fetching logic is represented in the BooksList.jsx component inside the Books folder. There I made some of comments to explain my code(using revalidation, mapping through books) and logic. If there are no books user sees the corresponding message.

## Book details page

(3)When user clicks on the book title in the list, they are redirected to http://localhost:3000/books/1 - all information about particular book, which I implemented by using dynamic routes Nextjs convention.

## Not Found Pages

(4)In my application, there are two Not Found pages. Two, because one is generic 404 where it is a "random" non-existant page and the second one is custom for a book, when there is no such BookId and thus, a book. First message is "The page you were looking for is not found. Go back to the Main Page, where "Main Page" is a link to the Main Page. For this message to be displayed, the example of the wrong route would be something like (http://localhost:3000/gjjg) - where the ID of "gjjg" doesn't exist.
Second message is "Oops. Sorry, it seems like we could't find the book you were looking for. You can go back to all books", where "all books" is a link to the book list. For this message to be displayed, the example of the wrong route would be something like (http://localhost:3000/books/gjjg) - where the ID of "gjjg" doesn't exist.

## Loading Pages

(5)There is also a Loading component. It is to display a caring message to the user while the content of a route segment loads, for the better UI. I use it in the Books page in case fetching may take some time and I achieved this by wrapping page component(BookList) in Suspense Component to create a suspense boundary. The message displayed us "Loading... It seems like it may take a while. We hope it's not."

## Form

Form on the main page is implemented by Form.jsx component. And unlike other components (which are Server Components) this one is a Client Component. useRoter is used to redirect the User to the next page - Submitted (http://localhost:3000/submitted), when user successfully submitted the form. All fields are reauired to submit - and it will not proceed to the Submitted page until user finishes all three questions:they should input child's name, choose gender and choose age. There is a button "See the magic" and once clicked it changes the text to "Submitted" and redirects the user to Submitted page. It uses [isLoading] - false, idea is when user submits form, change this to true to show loading state and disabled={isLoading} to prevent spamming or clicking after form is submitted.

## Submitted

The route (http://localhost:3000/submitted) is the page Submitted, where a user is redirected after successfully submittin the Form. The message is showed is "Form Submitted
Continue Shopping at Main Page" - where Main Page is the link to the Main Page.

## Fetching Data

To test out my code, I used local json-server(npm i json-server) and filled my JSON files with some data, as I mentioned above. The two JSON fles are located in the \_data folder. First file(db.json) is for Available Books and (orders.json) is updated when user submits the form.

## Form

Form on the main page is implemented by Form.jsx component. And unlike other components (which are Server Components) this one is a Client Component. useRoter is used to redirect the User to the next page - Submitted (http://localhost:3000/submitted), when user successfully submitted the form. All fields are reauired to submit - and it will not proceed to the Submitted page until user finishes all three questions:they should input child's name, choose gender and choose age. There is a button "See the magic" and once clicked it changes the text to "Submitted" and redirects the user to Submitted page. It uses [isLoading] - false, idea is when user submits form, change this to true to show loading state and disabled={isLoading} to prevent spamming or clicking after form is submitted.

## Submitted

The route (http://localhost:3000/submitted) is the page Submitted, where a user is redirected after successfully submittin the Form. The message is showed is "Form Submitted
Continue Shopping at Main Page" - where Main Page is the link to the Main Page.

## Fetching Data

To test out my code, I used local json-server(npm i json-server) and filled my JSON files with some data, as I mentioned above. The two JSON fles are located in the \_data folder. First file(db.json) is for Available Books and (orders.json) is updated when user submits the form.

## Server.js, node, form validation, DB
