import { Suspense } from "react";
import Loading from "../loading";
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
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </main>
  );
}
