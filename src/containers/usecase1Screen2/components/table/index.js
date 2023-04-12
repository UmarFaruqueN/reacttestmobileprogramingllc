import { useContext } from "react";
import { Context } from "../../../../contexts";

function Index() {
     const { state } = useContext(Context);
     const handlebar = () => {
          //call api here for upload the data
     };

     return (
          <>
               <table className="table-fixed border-solid border-2 border-black">
                    <thead>
                         <tr>
                              <th className="border-solid border-2 border-black w-48 bg-[#ffff00]">Table Name</th>
                              <th className="border-solid border-2 border-black w-48 bg-[#ffff00]">Column Name</th>
                              <th className="border-solid border-2 border-black w-48 bg-[#00ff00]">Distinct Value</th>
                              <th className="border-solid border-2 border-black w-48 bg-[#ff9900]">User Input</th>
                         </tr>
                    </thead>
                    <tbody>
                         {state?.usecase1Data.map((obj) => (
                              <tr key={obj.id}>
                                   <td className="border-solid border-2 border-black text-xs text-center">
                                        {obj.table_name}
                                   </td>
                                   <td className="border-solid border-2 border-black text-xs text-left pl-2">
                                        {" "}
                                        {obj.column_name}{" "}
                                   </td>
                                   <td className="border-solid border-2 border-black text-xs text-left pl-2">
                                        {" "}
                                        {obj.value}
                                   </td>
                                   <td className="border-solid border-2 border-black pl-4">
                                        <input className=" border-slate-400 border-2 w-36"  />
                                   </td>
                              </tr>
                         ))}
                    </tbody>
               </table>
               <button className="mt-4 bg-slate-300  hover:bg-slate-400 rounded h-10 w-2/6 border-2 border-black" onClick={handlebar}>
                    {" "}
                    Update
               </button>
          </>
     );
}
export default Index;
