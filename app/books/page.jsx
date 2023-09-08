import BookList from "./BookList";

export default function Books() {
  return (
    <main>
      <nav>
        <div>
          <h2>Books</h2>
          <p>
            <small>Available books</small>
          </p>
        </div>
      </nav>
      <BookList />
    </main>
  );
}
