import BookCard from "@/component/BookCard";
import Hero from "@/component/Hero";

const Home = async() => {
  const res = await fetch ("https://raw.githubusercontent.com/alamin990-E/bangla-horror-api/main/db.json")
  if (!res.ok){
    throw new Error ("Failed To Fetch Books")
  }
  const data = await res.json()
  const books = data.stories;
  console.log(books.title)
  return (
    <div className="container mx-auto">
      <Hero />
      <BookCard books={books}></BookCard>
    </div>
  );
};

export default Home;
