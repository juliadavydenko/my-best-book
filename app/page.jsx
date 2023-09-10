import Link from "next/link";
import Form from "./components/Form";

export default function Home() {
  return (
    <main>
      <h2>PERSONALIZED CHILDREN'S BOOKS</h2>
      <p>
        Children's books that take the reading experience to a whole new level
      </p>
      <h2 className="text-primary text-center">Enter the Child's Name</h2>
      <Form />
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
          In all our personalized children's books, the children are the stars
          of their own stories. Exciting adventures unfold as the pages turn.
          Personalize the child's hair color, skin tone and a wide range of
          personal variables, so that the child feels as though the book is
          really about them. A personalized book is the perfect gift idea for
          kids!
        </p>
      </div>
    </main>
  );
}
