import { ScreenHeading } from "../../components";
function Index() {
     return (
          <div className="container w-screen h-screen flex justify-center items-center">
               <div className=" flex flex-col items-center w-5/6">
                    <ScreenHeading heading={"Screen 2"} />

                    <table className="table-fixed border-solid border-2 border-black">
                         <tr>
                              <th className="border-solid border-2 border-black w-48 bg-[#ffff00]">Table Name</th>
                              <th className="border-solid border-2 border-black w-48 bg-[#ffff00]">Column Name</th>
                              <th className="border-solid border-2 border-black w-48 bg-[#00ff00]">Distinct Value</th>
                              <th className="border-solid border-2 border-black w-48 bg-[#ff9900]">User Input</th>
                         </tr>
                         <tr>
                              <td className="border-solid border-2 border-black text-xs text-center">
                                   {" "}
                                   interview.geography_columns{" "}
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> city_name </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> che </td>
                              <td className="border-solid border-2 border-black pl-4">
                                   <input className=" border-slate-400 border-2 w-36" />
                              </td>
                         </tr>

                         <tr>
                              <td className="border-solid border-2 border-black text-xs text-center">
                                   {" "}
                                   interview.geography_columns{" "}
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> city_name </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> mum </td>
                              <td className="border-solid border-2 border-black pl-4">
                                   <input className=" border-slate-400 border-2 w-36" />
                              </td>
                         </tr>

                         <tr>
                              <td className="border-solid border-2 border-black text-xs text-center">
                                   {" "}
                                   interview.geography_columns{" "}
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> city_name </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> banglore </td>
                              <td className="border-solid border-2 border-black pl-4">
                                   <input className=" border-slate-400 border-2 w-36" />
                              </td>
                         </tr>

                         <tr>
                              <td className="border-solid border-2 border-black text-xs text-center">
                                   {" "}
                                   interview.geography_columns{" "}
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> city_name </td>
                              <td className="border-solid border-2 border-black text-xs text-left pl-2"> cochin </td>
                              <td className="border-solid border-2 border-black pl-4">
                                   <input className=" border-slate-400 border-2 w-36" />
                              </td>
                         </tr>
                    </table>

                    <button className="mt-4 bg-slate-300 rounded h-10 w-2/6 border-2 border-black"> Update</button>
               </div>
          </div>
     );
}
export default Index;
