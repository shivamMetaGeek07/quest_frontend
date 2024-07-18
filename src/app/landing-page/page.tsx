import React from "react";

function page() {
  return (
    <div>
      <div className="main mt-16 lg:mx-10">
        <div className="h main ml-20">
          <div className="relative  flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div>
                <h1 className="text-[#FA00FF] mt-2">VIEW DOCUMENTATION</h1>
              </div>
              <div className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                >
                  <path
                    d="M0.487305 7.48755L3.97475 4.0001L0.487305 0.512655"
                    stroke="#FA00FF"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-zinc-400 mt-2">SOCIAL MEDIA:</h1>
              </div>
             
            </div>
          </div>
        </div>
        <div className="mt-64  ">
            <div>
            <div><p className="text-sm text-neutral-500 text-center">FAM PROTOCOL PRESENTS...</p></div>
            <div><h1 className="text-center text-5xl">embrace the almighty rewards of blockchain network!</h1></div>

             <div><p>L incididullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
            </div>

            <div className="flex gap-8 justify-center">
            <div>
                <button>
                Get Onboarded
                </button>
            </div>
            <div>
                <button>Explore</button>
            </div>
            </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default page;
