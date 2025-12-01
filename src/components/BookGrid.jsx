import BookCard from "./BookCard.jsx";
import AddCard from "./AddCard.jsx";
import books from "../../data/books.json";

export default function BookGrid() {
  return (
    <main className="content">
      <div className="grid">
        {/* Add button = its own column in the grid */}
        <AddCard />

        {/* Render list from books.json */}
        {books.map((book, i) => (
          <BookCard key={book.isbn13 ?? i} book={book} />
        ))}
      </div>
    </main>
  );
}
