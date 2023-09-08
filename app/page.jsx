import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>PERSONALIZED CHILDREN'S BOOKS</h2>
      <p>
        Children's books that take the reading experience to a whole new level
      </p>

      <div className="flex justify-center my-8">
        <Link href="/books">
          <button className="btn-primary">View the book collection</button>
        </Link>
      </div>

      <h2>Special offers</h2>

      <div className="card">
        <h3>BIRTHDAY OFFER</h3>
        <p>2-FOR-1 FOR ALL BOOKS!</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at
          quam. Dolores omnis possimus quam soluta rerum illo laborum ullam
          pariatur molestiae, modi beatae corrupti, assumenda distinctio
          adipisci, cupiditate minima eum vitae? Similique dicta est facilis
          debitis, autem temporibus quo repellat illum unde id iste veritatis
          eveniet, aspernatur enim quas.
        </p>
      </div>
    </main>
  );
}
