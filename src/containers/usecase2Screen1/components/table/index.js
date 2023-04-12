import React, { useContext } from "react";
import { Context } from "../../../../contexts";

function Index() {
     const { state } = useContext(Context);
     return (
          <table className="table-fixed border-solid border-2 border-black">
               <thead>
                    <tr>
                         <th className="border-solid border-2 border-black w-72 bg-[#ffff00]">Website</th>
                         <th className="border-solid border-2 border-black w-72 bg-[#ffff00]">Status</th>
                    </tr>
               </thead>
               <tbody>
                    {state?.usecase2Data.map((obj) => (
                         <tr>
                              <td className="border-solid border-2 border-black  font-medium text-center">
                                   <a href={`${obj.address}`} className="text-[#5cbcc6]">
                                        {" "}
                                        <u>{obj.address}</u>
                                   </a>
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-center pt-4">
                                   {obj.status === "SUCCESS" ? (
                                        <button className="mb-4 bg-[#b6d7a8] rounded h-7 w-2/6 border-2 border-black">
                                             {obj.status}
                                        </button>
                                   ) : (
                                        <button className="mb-4 bg-[#f9cb9c] rounded h-7 w-2/6 border-2 border-black">
                                             {obj.status}
                                        </button>
                                   )}
                              </td>
                         </tr>
                    ))}
               </tbody>
          </table>
     );
}

export default Index;
