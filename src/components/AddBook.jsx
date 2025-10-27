import { useState } from "react";

// import book data state
import useBookData from "../utils/useBookData";

function AddBook() {

    const  {bookData, setBookData} = useBookData()

    // state to hold new book data
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        author: '',
        year: 0,
        category: '',
        rating: 0,
        shortDesc: '',
        longDesc: '',
        image: '',
    });

    // taking book data from user
    function handleChange(e){
        const name = e.target.name
        const value = e.target.value
        console.log( name )
        console.log( value )

        setFormData((prevData) => ({
            ...prevData,
            [name]: value, // update the user input data, based on the input filed name
        }))
    }

    // adding new book to the book state
    function onSubmit(e){

        e.preventDefault() // to stop page reload
        const newBook = {...formData, id:bookData.length + 1}

        // check if any input field is empty. if empty, dont add the new book and throw a alert
        for (let key in newBook){

            if( String(newBook[key]).trim() === '' ){
                alert('Please fill all the details to add the book...')
                return // stop execution
            }
        }

        // check number of books beforring adding the new book.
        console.log( "before :  ", bookData.length )

        // // add new book to the bookdata array
        // setBookData((prevData) => [...prevData, newBook]);

        setBookData(prevData =>{
            const updated = [...prevData, newBook]
            console.log('after: ', updated.length) // check no of books after adding new book to the state
            alert('New Book successfully added...')
            return updated
        } )

        // reset the formData state to empty
        setFormData({
            id: '',
            title: '',
            author: '',
            year: 0,
            category: '',
            rating: 0,
            shortDesc: '',
            longDesc: '',
            image: '',
        });
    }

    return (
        <div className=" w-screen h-screen   flex flex-col lg:flex-row justify-center items-center text-white  gap-6 " >

            <div className=" lg:max-w-[40%] flex flex-col justify-center items-center p-3 " >
                <h1 className=" text-[1.5rem] font-semibold " >Add a Book, Grow the Story</h1>
                <p className=" italic text-[1rem] ml-2 " >Every book you add makes our library a little more legendary.</p>
            </div>

            <form action="" className=" text-white  flex flex-col gap-2 text-[1rem] justify-start lg:p-6 lg:w-[25%] w-[90%] p-4 rounded-[15px] " >

                <div className=" inputContainer " >
                    <label htmlFor="booktitle" className=" font-semibold " >Book Title :</label>
                    <input type="text" id='booktitle' placeholder="Enter book title..." required className=" addBookInputField " name='title' onChange={handleChange}  />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="bookAuthor">Book Author :</label>
                    <input type="text" id='bookAuthor' placeholder="Enter book author..." required className=" addBookInputField " name='author' onChange={handleChange} />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="year">Year :</label>
                    <input type="text" id='year' placeholder="year released..." required className=" addBookInputField " name='year' onChange={handleChange}  />
                </div>


                <div className=" inputContainer " >
                    <label htmlFor="category">Select Category :</label>
                    <select required id='category' className=" addBookInputField " name='category'  onChange={handleChange}  >
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
                    <input type="number" id='rating' min='0' max='5' step='0.1' placeholder="4.5" className=" addBookInputField " name='rating' onChange={handleChange} />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="year">Book Front Cover link :</label>
                    <input type="text" id='year' placeholder="http//:..." required className=" addBookInputField " name='image'  onChange={handleChange} />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="longDesc">Long Description :</label>
                    <textarea id='longDesc' placeholder="Detailed Description about the book.." className=" addBookInputField " name='longDesc' onChange={handleChange} />
                </div>

                <div className=" inputContainer " >
                    <label htmlFor="shortDesc">Short Description :</label>
                    <input type="text" id='shortDesc' placeholder="short Description about the book.." className=" addBookInputField " name='shortDesc' onChange={handleChange} />
                </div>

                <button className=" bg-[#1F2937] text-white p-2 rounded-[5px] hover:scale-95 " onClick={onSubmit} >Submit</button>
            </form>
        </div>
    );
}

export default AddBook;
