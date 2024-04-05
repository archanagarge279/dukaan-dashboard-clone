import React from "react"

export const RevenueCard1 = ({
    title,
    amount,
    orderCount,
    bgcolor
}) => {
    return <div className=" rounded-md shadow-md m-3 bg-blue-700 hover:bg-blue-950">
        <div className=" p-4"> 
            <div className="text-gray-200 flex">
                <div>{title}</div>
                <div className="ml-1 flex flex-col justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"    class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between mt-2 text-white">
                <div className="font-semibold text-3xl">
                    ₹ {amount}
                </div>
                {
                    orderCount ? <div className="cursor-pointer underline font-medium flex flex-col justify-center">
                        <div className="flex">
                            {orderCount} order(s) 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                        
                    </div> : null
                }
            </div>
        </div>
        {bgcolor ? <div className="flex justify-between bg-blue-950 text-white rounded  pl-3 pr-3 pt-2 pb-2">
            <div>
                Next Payment Date:
            </div>
            <div>
                Today, 4:00PM
            </div>
        </div> : null}
    </div>
}
