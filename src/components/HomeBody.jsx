import CategoryDisplay from "./CategoryDisplay"

function HomeBody(){

    return(
        <div className=" flex flex-col flex-wrap  justify-center items-center text-[#FAFAD2] bg-[rgba(0,0,0,0.5)] m-5 p-8 text-center gap-4 " >
            <h1 className=" text-[2rem] font-bold " >
                🌟 Welcome to <span className=" text-yellow-400 underline " >Illumina</span>, your personal world of stories. 
            </h1>
            <p className=" text-[1.2rem] " >Illuminate Your Mind. One Page at a Time.</p>

            <p className=' mt-5 text-[1.3rem] mb-5 ' >
                Hey there, reader — ready to spark something new? Every book here is a doorway — to adventure, to wisdom, to the version of you that’s waiting to grow. <span> So go ahead — explore your favorite categories below, discover your next page-turner, and let your imagination light the way.</span> 
            </p>

            <p className=" italic text-[1.2rem] font-semibold text-white " >”Today a reader, tomorrow a leader.” <span className=" text-yellow-400 " > – Margaret Fuller</span></p>
            <button className=" p-2 bg-[#3a4ff4] font-semibold hover:scale-95 hover:text-yellow-400 cursor-pointer rounded-[15px] " >📚 Start Exploring →</button>

            <CategoryDisplay />
        </div>
    )
}

export default HomeBody