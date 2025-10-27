

function BookDetails(){

    return(
        <div className=" flex flex-col w-[95vw] lg:h-[85vh] md:h-[85vh] m-auto mt-[2rem] rounded-2xl bg-[rgba(255,255,255,0.7)] justify-start items-start p-4 gap-6 " >
            
            <h1 className= " text-center w-[100%] underline text-2xl font-semibold text-blue-700 " >Book Title</h1>

            <div className=" flex flex-col lg:flex-row md-flex-row w-[100%] gap-4 justify-center " >

                <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80" alt="" className="  w-[100%] lg:w-[45%] md:w-[45%]  " />

                <div id="b_details" className=" w-[90%] lg:w-[45%] flex flex-col gap-6  p-4 " >
                    <h2 className=" text-[1.2rem] font-semibold " > Author: AuthorName </h2>
                    <h2 className=" text-[1.2rem] " > 
                        <span className=" font-semibold  "  >Year: 2025</span>
                        <span className=" font-semibold  "  > Rating: 4.5 </span> 
                    </h2>

                    <h2 className=" text-[1.2rem] font-semibold "> Category: BookCategory </h2>

                    <p className=" text-[1rem] " > 
                        <span className=" font-semibold text-[1.2rem] " >Summary:</span> 
                        
                        BookSummary
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BookDetails