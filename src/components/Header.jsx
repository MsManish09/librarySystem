
import { MdHome } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";




function Header(){

    return(

        <header  >
            <nav className=" flex flex-col bg-blue-50 p-2 flex-wrap justify-evenly items-center sm:flex-row gap-3 text-blue-900" >

                <div className=" flex gap-2 justify-center items-center   hover:scale-95 hover:text-blue-700  " >
                    <img src="src\utils\library_system_logo.png" alt="site logo" height='50px' width='75px' />
                    <span className=' font-semibold text-[1.7rem]  ' >ILLUMINA</span>
                </div>

                < div className="flex flex-col flex-wrap gap-2 justify-evenly p-1 text-[1.5rem] font-semibold  sm:flex-row  ">

                        <ul className=' list-none flex gap-4 flex-wrap lg:gap-8 ' >

                            <li >
                                <MdHome />
                                <span>Home</span> 
                            </li>

                            <li>
                                <SiWikibooks />
                                <span>Books</span>
                            </li>

                            <li >
                                <BiSolidBookAdd />
                                <span>Add Book</span>
                            </li>
                        </ul>

                </div>
            </nav>
        </header>
    )
}


export default Header