import React, { useState, useEffect } from 'react';

export default function DateSelector({ availableDates, selectedDate, onDateSelect }) {
  const [expandedMonth, setExpandedMonth] = useState(null);

  const toggleMonth = (month) => {
    setExpandedMonth(expandedMonth === month ? null : month);
  };

  if (!availableDates || availableDates.length === 0) {
    return (
      <div className="mb-4 text-black">
        <label className="block text-sm font-medium   mb-2">
          Select Date*
        </label>
        <div className="border border-gray-300 rounded-lg p-3 bg-gray-50">
          <p className="text-sm ">
            No available dates at the moment
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 text-black ">
       <div className="flex gap-4 text-center items-center "> 
        <label className="block text-sm font-medium">
        Select Date*
      </label> 
        <div className="absolute right-0 max-h-64 min-w-52 overflow-y-scroll scrollbar-hide border border-gray-300 rounded-lg">
          {availableDates.map((monthData, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0 ">
              <div
                className="bg-white p-2 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleMonth(monthData.month)}
                
              >
                <span className="font-medium">{monthData.month}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${expandedMonth === monthData.month ? "rotate-180" : ""}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              {expandedMonth === monthData.month && (
                <div className="bg-gray-50 p-3 space-y-2">
                  {monthData.dates?.map((date, dateIndex) => (
                    <div
                      key={dateIndex}
                      className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${selectedDate === `${monthData.month} - ${date}`
                          ? "bg-black text-white"
                          : "hover:bg-gray-100"
                        }`}
                      onClick={() => {
                        onDateSelect(`${monthData.month} - ${date}`);
                        setExpandedMonth(null);
                      }}
                        
                    >
                      <span className="text-sm">{date}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded ${selectedDate === `${monthData.month} - ${date}`
                            ? "bg-white text-black"
                            : "bg-green-100 text-green-800"
                          }`}
                      >
                        {selectedDate === `${monthData.month} - ${date}`
                          ? "Selected"
                          : "Available"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
       </div>
        {!selectedDate && (
          <p className="text-xs text-gray-500 mt-2  ">
            Please select a date from the available options
          </p>
        )}
   
    </div>
  );
}
