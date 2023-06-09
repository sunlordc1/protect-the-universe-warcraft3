'use client'
import {BiSearch} from 'react-icons/bi'
const Search = () => {
    return (
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <div className="text-sm font-semibold px-3">
                    Anywhere
                </div>
                <div className="hidden sm:block text-sm font-semibold px-3 border-x-[1px] flex-1 text-center">
                    AnyWeek
                </div>
                <div className="text-sm pl-3 pr-2 text-gray-600 flex flex-row item-center gap-3">
                    <div className="hidden sm:block">Add Guest</div>
                </div>
                <div className="p-2 bg-rose-500 rounded-full text-white">
                    <BiSearch size={18}></BiSearch>
                </div>
            </div>
        </div>
    )
}
export default Search