import { useState } from "react";

// import original books data
import booksData from "./booksData";

function useBookData(){

    const [bookData, setBookData] = useState(booksData)
    return {bookData, setBookData}

}

export default useBookData;