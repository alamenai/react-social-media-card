import React from "react"

const Menu = () => (
    <div className="flex flex-col bg-white align-baseline justify-center items-center w-1/2 rounded-lg">
        <p className="py-2 cursor-pointer">Save</p>
        <p className="py-2 cursor-pointer">Hide</p>
        <p className="py-2 cursor-pointer text-red-600">Report</p>
        <hr className="w-4 w-full bg-black" />
        <p className="my-2 text-sm cursor-pointer text-gray-600">Cancel</p>
    </div>

)

export default Menu