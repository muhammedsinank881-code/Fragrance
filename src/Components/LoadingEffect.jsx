import React from 'react'

const LoadingEffect = () => {
  return (
    <div className="relative w-full px-8 py-6 bg-white overflow-hidden">
        <div className="animate-pulse blur-[2px] pointer-events-none select-none">
          <div className="h-10 w-48 bg-gray-200 rounded-md mb-4" />
          <div className="flex justify-between items-center w-full mb-8">
            <div className="h-5 w-64 bg-gray-200 rounded-md" />
            <div className="h-11 w-52 bg-gray-200 rounded-lg" />
          </div>
          <div className="flex gap-6 justify-center">
            <div className="w-[260px] min-w-[260px] flex flex-col gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 h-48" />
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <div className="grid grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="border border-gray-100 rounded-[24px] p-3 bg-white shadow-sm">
                    <div className="bg-gray-200 rounded-[18px] h-[274px]" />
                    <div className="h-4 w-24 bg-gray-200 rounded mt-4" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded mt-3" />
                    <div className="h-4 w-full bg-gray-200 rounded mt-2" />
                    <div className="h-6 w-20 bg-gray-200 rounded mt-4" />
                    <div className="h-[52px] w-full bg-gray-200 rounded-full mt-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/30 backdrop-blur-sm">
          <div className="flex flex-col items-center p-10 bg-white/90 border border-gray-100 shadow-2xl rounded-3xl max-w-xs w-full text-center">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-gray-100" />
              <div className="absolute inset-0 rounded-full border-2 border-t-[#E6B325] border-r-transparent animate-spin" />
            </div>
            <h1 className="text-2xl font-light tracking-widest text-gray-800 uppercase font-serif animate-pulse">
              Loading
              <span className="inline-flex gap-1 ml-1">
                <span className="animate-[bounce_1s_infinite_100ms]">.</span>
                <span className="animate-[bounce_1s_infinite_200ms]">.</span>
                <span className="animate-[bounce_1s_infinite_300ms]">.</span>
              </span>
            </h1>
            <p className="text-xs text-gray-400 mt-2 font-light tracking-wide">
              Assembling your collection
            </p>
          </div>
        </div>
      </div>
  )
}

export default LoadingEffect