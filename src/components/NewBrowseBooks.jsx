import BookCard from "./BookCard";
import Header from "./Header";
import useBookData from "../utils/useBookData";
import { useEffect, useState } from "react";

// import category data
import { categories } from "../utils/categoryData"; 

function NewBrowseBooks() {
  const { bookData } = useBookData();
  const popularBook = bookData.filter((book) => book.rating >= 4.8);

  // create a state to update ui
  const [books, setBooks] = useState(bookData)

  // update ui everytime original books list changes.
  useEffect(() => {
    setBooks(bookData);
  }, [bookData]);

  // search functionality
  function handleSearch(e){
    setBooks(()=>{
      return bookData.filter((book)=> book.title.toLowerCase().includes(e.target.value.toLowerCase()) )
    })
  }

  // filter functinality based on ca tegory.
  function handlefilter(e){

    console.log(e.target.name)

    if(e.target.name === 'all'){
      return setBooks(bookData)
    }

    setBooks(()=>{
      return bookData.filter((book)=> book.category === e.target.name )
    })
  }

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

          <div id="searchAndFilterContainer">
            <input type="text" onChange={handleSearch} />

            {/* dynamically create category buttons */}
            <div id="categoryFilter" className=" flex gap-2 flex-wrap justify-center items-center p-4 " >

              <button name='all' onClick={handlefilter} className=" p-2 bg-gray-700 text-white rounded-[15px] hover:scale-95 border-1 border-solid border-gray-300 " >All</button>

              { categories.map((c)=>{
                return(
                  <button name={c.name} onClick={handlefilter} className=" p-2 bg-gray-700 text-white rounded-[15px] hover:scale-95 border-1 border-solid border-gray-300 " > {c.name} </button>
                )
              }) }
            </div>
          </div>

          {/* rendering books */}
          <div className="flex flex-wrap justify-center gap-4 w-full">

            {books.map((book, index) => (

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
