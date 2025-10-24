
import BookCard from "./BookCard";
import Header from "./Header";

// import book data
import booksData from "../utils/booksData";

function NewBrowseBooks(){

    const popularBook = booksData.filter((book) => book.rating >= 4.8)

    return(
        <div>
            <Header />
            <div className="  p-2 m-2 flex lg:flex-row flex-col justify-evenly gap-4  ">

                {/* popular books section */}
                {/*  */}
                <section className=" bg-[rgba(255,255,255,0.5)]  rounded-2xl p-2 lg:w-[22%] h-fit flex flex-col  flex-wrap justify-start items-center gap-4 sm:w-[95%]  ">
                    <h3 className=" text-2xl font-semibold underline text-yellow-300 " >Popular Books</h3>
                    {
                        popularBook.map((book, index)=> <BookCard book={book} key={index} /> )
                    }
                    
                </section>

                {/* browse bbooks section */}
                <section className="bg-[rgba(255,255,255,0.5)] rounded-[15px] p-4 h-50px flex flex-col gap-3 items-center lg:w-[70%] mt-4  ">
                    <h3 className=" text-2xl font-semibold text-blue-700  underline " >Browse Books</h3>
                    
                    <div className="flex flex-wrap gap-4 justify-evenly" >
                        {
                            booksData.map((book)=>{
                                return(
                                    <BookCard book={book} />
                                )
                            })
                        }
                    </div>

                </section>
            </div>
        </div>
    )
}

export default NewBrowseBooks;