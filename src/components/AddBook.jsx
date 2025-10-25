function AddBook() {




    return (
        <div className=" w-screen h-screen   flex flex-col lg:flex-row justify-center items-center text-white  gap-6 " >

            <div className=" lg:max-w-[40%] flex flex-col justify-center items-center p-3 " >
                <h1 className=" text-[1.5rem] font-semibold " >Add a Book, Grow the Story</h1>
                <p className=" italic text-[1rem] ml-2 " >Every book you add makes our library a little more legendary.</p>
            </div>

            <form action="" className=" text-white  flex flex-col gap-2 text-[1rem] justify-start lg:p-6 lg:w-[25%] w-[90%] p-4 rounded-[15px] " >

                <div className=" inputContainer " >
                    <label htmlFor="booktitle" className=" font-semibold " >Book Title :</label>
                    <input type="text" id='booktitle' placeholder="Enter book title..." required className=" addBookInputField "  />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="bookAuthor">Book Author :</label>
                    <input type="text" id='bookAuthor' placeholder="Enter book author..." required className=" addBookInputField " />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="year">Year :</label>
                    <input type="text" id='year' placeholder="year released..." required className=" addBookInputField " />
                </div>


                <div className=" inputContainer " >
                    <label htmlFor="category">Select Category :</label>
                    <select required id='category' className=" addBookInputField " >
                        <option value="" disabled>Select a category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Education">Education</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Romance">Romance</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Self-Help">Self-Help</option>
                    </select>
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="rating">Book Rating :</label>
                    <input type="number" id='rating' min='0' max='5' step='0.1' placeholder="4.5" className=" addBookInputField " />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="year">Book Front Cover link :</label>
                    <input type="text" id='year' placeholder="year released..." required className=" addBookInputField " />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="shortDesc">Long Description :</label>
                    <textarea id='shortDesc' placeholder="Short Description about the book.." className=" addBookInputField " />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="longDesc">Short Description :</label>
                    <input type="text" id='longDesc' placeholder="Detailed Description about the book.." className=" addBookInputField " />
                </div>

                <button className=" bg-[#1F2937] text-white p-2 rounded-[5px] hover:scale-95 " >Submit</button>
            </form>
        </div>
    );
}

export default AddBook;
