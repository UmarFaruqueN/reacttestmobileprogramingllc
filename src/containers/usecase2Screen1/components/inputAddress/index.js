import React, { useState } from "react";
import { Spinner } from "../../../";

function Index() {
     const [url, setUrl] = useState("");
     const [spinner, setSpinner] = useState(false);

     const HandleChange = () => {
          setSpinner(true);
          //write backend api call here
          setTimeout(() => {
               setSpinner(false);
          }, 3000);
     };

     return (
          <>
               <input
                    className="mb-3 border-2 border-black  h-10 pl-2 w-72"
                    type="text"
                    placeholder="Enter Website here to be monitored"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
               />
               {spinner ? (
                    <div className="mb-4">
                         {" "}
                         <Spinner />
                    </div>
               ) : (
                    <button
                         onClick={HandleChange}
                         className="mb-4 bg-[#eeeeee] hover:bg-[#c2baba] rounded h-8 w-1/6 border-2 border-black "
                    >
                         ADD
                    </button>
               )}
          </>
     );
}

export default Index;
