
function BookCard({book}){

    return(
        <div className=" flex p-2 justify-evenly items-center rounded-[15px] w-[98%] lg:w-[300px] h-[300px] hover:scale-95 bg-amber-100  " >

            <div className=" w-[50%] h-full  flex justify-center items-center   " >
                <img src={book.image} alt={`${book.title} cover image`} className=" w-[100px] h-[125px] rounded-[15px] " />
            </div>

            <div className=" w-[50%] flex-col justify-center items-center gap-2 " >
                <h3 className=" font-semibold text-[1.2rem] underline " > {book.title} </h3>
                <h3 className=" italic text-gray-600 ">
                    <span>{ book.author }</span>
                    <span> | {book.year} </span>
                </h3>
                <p className=" font-semibold " >
                    <span> {book.category} </span>
                    <span> ⭐{book.rating} </span>
                </p>
                <p className=" text-[.8rem] mt-2 " > {book.shortDesc} </p>
            </div>
        </div>
    )
}

export default BookCard