import { FaSearch } from "react-icons/fa"

const SearchComponent = () => {
  return (
    <div className="w-full py-3 mt-3">
    <div className="absolute w-full right-5 top-24 z-20">
      <input
        type="text"
        placeholder="Search for a product"
        className="p-3 rounded-lg pr-10 float-right border-2 bg-transparent border-white laptop:w-[25%] desktop:w-[25%] tablet:w-[40%]"
      />
      <div className="absolute inset-y-6 justify-center text-center m-auto h-full text-white right-0 flex items-center pr-3 pointer-events-none">
        <FaSearch />
      </div>
    </div>
  </div>
  )
}

export default SearchComponent