import BookCard from "./BookCard";
import Header from "./Header";

// import book data
import booksData from "../utils/booksData";

function BrowseBooks(){

    const popularBook = booksData.filter((book) => book.rating >= 4.8)

    return(
        <div>
            <Header />
            <div className="flex p-1 justify-evenly rounded-[15px] sm:flex-row flex-col mt-4">

                {/* popular books section */}
                <section className=" bg-[rgba(255,255,255,0.5)] rounded-2xl p-2 w-[20%] h-80% flex flex-col  flex-wrap justify-center items-center gap-4 ">
                    <h3 className=" text-2xl font-semibold underline text-yellow-300 " >Popular Books</h3>
                    {
                        popularBook.map((book)=> <BookCard book={book} /> )
                    }
                    
                </section>

                {/* browse bbooks section */}
                <section className="bg-blue-300 p-4 w-[65%] h-80% flex flex-col items-center  ">
                    <h3 className=" text-2xl font-semibold underline " >Browse Books</h3>
                </section>
            </div>
        </div>
    )
}

export default BrowseBooks;