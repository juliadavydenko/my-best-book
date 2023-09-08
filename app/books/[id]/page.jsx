import { notFound } from "next/navigation";

// This is the structure of NextJS and the way to create a dynamic route,
// nesting folder inside the folder,
// in the end we are able to go to books/id, and the way we fetch is similar as was done to fetch all books,
// I've also output the book age group the same way as in the BookList component

export const dynamicParams = true;
// above is default value and it fetches data for that book and creates new page if that id exists
// and generates a Static Page for future requests to that book, further response check is below

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/books");

  const books = await res.json();

  return books.map((book) => ({
    id: book.id,
  }));
}
// the above function is for better performance,
// for all pages to be pre-rendered in advance

async function getBook(id) {
  // imitating waiting time to see Loading screen
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch("http://localhost:4000/books/" + id, {
    next: {
      revalidate: 15,
    },
  });

  // response check - if it's not ok, 404 should be shown

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function BookDetails({ params }) {
  const book = await getBook(params.id);

  return (
    <main>
      <nav>
        <h2>Book Details</h2>
      </nav>
      <div className="card">
        <h3>{book.title}</h3>
        <small>Written by {book.author}</small>
        <p>{book.body}</p>
        <div className={`pill ${book.age}`}>{book.age} age</div>
      </div>
    </main>
  );
}
