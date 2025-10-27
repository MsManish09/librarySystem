import { Link } from "react-router-dom"

function NotFound(){

    return(
        <div className=" flex flex-col w-screen h-[85vh] justify-center items-center  text-center text-red-500 p-2 " >
            <div className=" p-4 rounded-[15px] bg-[rgba(255,255,255,0.7)] " >
                <h1 className=" text-3xl font-semibold mb-4 " >Looks like this chapter’s missing.</h1>
                <p className=" italic text-[1.2rem] " >No worries — there’s plenty more to      <span className=" text-blue-700 underline hover:scale-110 hover:text-blue-500 cursor-pointer " > 
                            <Link to={'/browsebooks'} > explore! </Link> 
                        </span>
                </p>
            </div>
        </div>
    )
}

export default NotFound