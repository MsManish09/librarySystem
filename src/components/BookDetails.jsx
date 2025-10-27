
// extract id from url
import { Link, useParams } from "react-router-dom";

// import booksdata
import { useSelector } from 'react-redux';
import NotFound from "./NotFound";


function BookDetails(){

    // get id form url
    const {id} = useParams()
    console.log(id)
    const bookData = useSelector((state) => state.books.bookData)

    // get book based on id and covert the id into integer
    const book = bookData.find((book) => book.id === parseInt(id))
    console.log(book)

    // if book id doesnot exist
    if(!book){
        return(
            <NotFound />
        )
    }
  
    return(
        <div className=" flex flex-col w-[95vw]  m-auto mt-[2rem] rounded-2xl bg-[rgba(255,255,255,0.7)] justify-start items-start p-4 gap-6 pb-[3rem] " >
            
            <h1 className= " text-center w-[100%] underline text-2xl font-semibold text-blue-700 " > {book.title} </h1>

            <div className=" flex flex-col lg:flex-row md:flex-row w-[100%] gap-4 justify-center " >

                <img src={book.image} alt={`${book.title} cover`} className="  w-[100%] lg:w-[45%] md:w-[45%]  " />

                <div id="b_details" className=" w-[90%] lg:w-[45%] flex flex-col gap-6  p-4 text-[1.2rem] " >
                    <h2 className="  font-semibold " > Author: {book.author} </h2>
                    <h2 className="  font-semibold " > Year: {book.year}</h2>
                    <h2 className=" font-semibold  "  > Rating: {book.rating} ⭐ </h2>
                    <h2 className="  font-semibold "> Category: {book.category} </h2>
                    <p> 
                        <span className=" font-semibold text-[1.2rem] " >Summary: </span>
                        {book.longDesc}
                    </p>

                    <Link to={'/browsebooks'} > <button className=" p-2 bg-blue-700 text-yellow-400 font-semibold border-2 border-solid border-yellow-400 rounded-[15px] hover:scale-95 " >Browse More</button> </Link>
                </div>
            </div>
        </div>
    )   
}

export default BookDetails