import { categories } from '../utils/categoryData'

function CategoryDisplay() {
    console.log(categories)

    return (
        <div className='bg-[rgba(255,255,255,0.3)] flex flex-col justify-center items-center p-2 max-w-full'>
            <h2 className='underline text-yellow-400 text-2xl mb-4 font-semibold '>Categories:</h2>
            
            <div className='overflow-x-auto w-full max-w-full scrollbarHidden cursor-move '>
                <div  className='flex flex-nowrap   '>
                    {
                        categories.map((category, index) => {
                            return (
                                <div key={index} className='w-[175px] h-[175px] flex-shrink-0 flex relative justify-center items-center '>
                                    <img src={category.imageUrl} alt="category image" className='w-[150px] h-[150px] object-cover mx-auto ' />
                                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center  text-yellow-300 bg-[rgba(0,0,0,0.7)] p-2'>{category.name}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryDisplay;
