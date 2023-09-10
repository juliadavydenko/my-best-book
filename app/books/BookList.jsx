import Link from "next/link";

//I am fetching data outside the component to make it cleaner
async function getBooks() {
  // imitating waiting time to see Loading screen
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/books", {
    next: {
      revalidate: 15,
    },
  });
  return res.json();
}
// In the function above I've also added the second argument(object)
// for NextJS to revalidate the data, re-fetch it, because by default
// even if data is change Next will show cached version, it fetches 1 time only,
// so here I put 15 seconds and after that time when I refresh the page 2nd time it should show the updated data

// For data to not be cached at all
// f.ex. if we'd have customer's requests here and constantly changing data I would put here 0 as a value

export default async function BookList() {
  const books = await getBooks();

  return (
    <>
      {books.map((book) => (
        <div key={book.id} className="card my-5">
          <Link href={`/books/${book.id}`}>
            <h3>{book.title}</h3>
            {/* I use slice because I want to output only part of the body */}
            <p>{book.body.slice(0, 200)}...</p>
            {/* Besides the pill class,
          I want to add a class that corresponds to kid's age that corresponds 
          to the styling I'm applying to make them in different colors. */}

            <div className={`pill ${book.age}`}>{book.age} age</div>
          </Link>
        </div>
      ))}
      {/* If there no books, I wanna output the corresponding message */}
      {books.length === 0 && (
        <p className="text-center">
          There are no more books. Please check later!
        </p>
      )}
    </>
  );
}
// Wrapped everything in the Link component so that when we click on particular book,
// we are redirected to the details page
