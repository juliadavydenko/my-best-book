// This is the structure of NextJS and the way to create a dynamic route,
// nesting folder inside the folder,
// in the end we are able to go to books/id, and the way we fetch is similar as was done to fetch all books,
// I've also output the book age group the same way as in the BookList component
async function getBook(id) {
  const res = await fetch("http://localhost:4000/books/" + id, {
    next: {
      revalidate: 15,
    },
  });
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
