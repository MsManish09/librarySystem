
import BookCard from "./BookCard";
import Header from "./Header";

// import book data
import booksData from "../utils/booksData";

function NewBrowseBooks(){

    const popularBook = booksData.filter((book) => book.rating >= 4.8)

    return(
        <div>
            <Header />
            <div className="  p-2 m-2 flex lg:flex-row flex-col justify-evenly  ">

                {/* popular books section */}
                {/*  */}
                <section className=" bg-[rgba(255,255,255,0.5)]  rounded-2xl p-2 lg:w-[20%] h-80% flex flex-col  flex-wrap justify-center items-center gap-4 sm:w-[95%]  ">
                    <h3 className=" text-2xl font-semibold underline text-yellow-300 " >Popular Books</h3>
                    {
                        popularBook.map((book, index)=> <BookCard book={book} key={index} /> )
                    }
                    
                </section>

                {/* browse bbooks section */}
                <section className="bg-blue-300 p-4 w-[65%] h-50px flex flex-col items-center  ">
                    <h3 className=" text-2xl font-semibold underline " >Browse Books</h3>
                </section>
            </div>
        </div>
    )
}

export default NewBrowseBooks;