import Header from "./components/Header.jsx";
import BookGrid from "./components/BookGrid.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Header title="Book Catalog Lab02 / Rendering Lists" />
      <BookGrid />
      <Footer />
    </>
  );
}
