import BookCard from "./BookCard";
import Header from "./Header";
import useBookData from "../utils/useBookData";

function NewBrowseBooks() {
  const { bookData } = useBookData();
  const popularBook = bookData.filter((book) => book.rating >= 4.8);

  return (
    <div>
      <Header />
      <div className="p-4 flex flex-col lg:flex-row justify-evenly items-start gap-6">

        {/* Popular Books Section */}
        <section className=" bg-[rgba(255,255,255,0.5)] rounded-2xl p-4 w-full lg:w-[25%] flex flex-col items-center gap-4 border-2 border-solid border-gray-100 ">
          <h3 className="text-2xl font-semibold underline text-yellow-500">
            Popular Books
          </h3>

          <div className="flex flex-wrap justify-center gap-4 w-full">

            {popularBook.map((book, index) => (

              <div key={index} className="w-full sm:w-[48%] md:w-[32%] lg:w-full flex justify-center" >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </section>

        {/* Browse Books Section */}
        <section className=" bg-[rgba(255,255,255,0.5)] rounded-2xl p-4 w-full lg:w-[70%] flex flex-col items-center gap-4 border-2 border-solid border-gray-100 ">
          <h3 className="text-2xl font-semibold text-blue-700 underline">
            Browse Books
          </h3>

          <div className="flex flex-wrap justify-center gap-4 w-full">

            {bookData.map((book, index) => (

              <div key={index} className="w-full sm:w-[48%] md:w-[32%] lg:w-[32%] flex justify-center" >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default NewBrowseBooks;
