
// importing icons
import { MdHome } from "react-icons/md";
import { SiWikibooks } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";




function Header(){

    return(
        
        <header className="sticky top-0 z-50 border-b border-blue-200"  >
            <nav className=" flex flex-col bg-[rgba(255,255,255,0.5)]  p-2 flex-wrap justify-evenly items-center sm:flex-row gap-3 text-yellow-400 " >

                <Link to={'/'} >
                    <div className=" flex justify-center items-center  pl-1 pr-2  hover:scale-95 hover:text-blue-700  " >
                        <img src="src\utils\library_system_logo.png" alt="site logo" height='50px' width='75px' />
                        <span className=' font-semibold text-[1.7rem]  ' >ILLUMINA</span>
                    </div>
                </Link>
                <div>

                        <ul className=' p-1 list-none flex justify-evenly  gap-4 flex-wrap lg:gap-8 text-[1.3rem] font-semibold  ' >

                            <Link to={'/'} >
                                <li >
                                    <MdHome />
                                    <span>Home</span> 
                                </li>
                            </Link>

                            <Link to={'/browsebooks'} >
                                <li>
                                    <SiWikibooks />
                                    <span>Books</span>
                                </li>
                            </Link>

                            <Link to={'/add_book'}>
                                <li >
                                    <BiSolidBookAdd />
                                    <span>Add Book</span>
                                </li>
                            </Link>
                        </ul>

                </div>
            </nav>
        </header>
    )
}


export default Header