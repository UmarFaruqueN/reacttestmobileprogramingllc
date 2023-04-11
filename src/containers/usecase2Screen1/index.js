
function Index() {
    return (
      <div className="container w-screen h-screen flex justify-center items-center">
        <div className=" flex flex-col items-center w-2/3">

        <input className="mb-3 border-2 border-black  h-10 pl-2 w-72" type="text" placeholder="Enter Website here to be monitored" />

        <button className="mb-4 bg-[#eeeeee] rounded h-7 w-1/6 border-2 border-black">ADD</button>
        <table className="table-fixed border-solid border-2 border-black">
                         <tr>
                              <th className="border-solid border-2 border-black w-72 bg-[#ffff00]">Website</th>
                              <th className="border-solid border-2 border-black w-72 bg-[#ffff00]">Status</th>

                         </tr>
                         <tr>
                              <td className="border-solid border-2 border-black  font-medium text-center">
                                   <a href="" className="text-[#5cbcc6]"> <u>www.go-yubi.com</u></a>
                                   
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-center pt-4"> 
                              <button className="mb-4 bg-[#b6d7a8] rounded h-7 w-2/6 border-2 border-black">SUCCESS</button>
                              </td>
                              
                              
                         </tr>
                         
                            <tr>
                              <td className="border-solid border-2 border-black font-medium text-center">
                                   <a href="" className="text-[#5cbcc6]"> <u>www.google.com</u></a>
                                   
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-center pt-4"> 
                              <button className="mb-4 bg-[#b6d7a8] rounded h-7 w-2/6 border-2 border-black">SUCCESS</button>
                              </td>
                              
                              
                         </tr>

                         <tr>
                              <td className="border-solid border-2 border-black text-sm font-medium text-center">
                                   <a href="" className="text-[#5cbcc6]"> <u>https://rera.goa.gov.in/reraApp/</u></a>
                                   
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-center pt-4"> 
                              <button className="mb-4 bg-[#f9cb9c] rounded h-7 w-2/6 border-2 border-black">FAILURE</button>
                              </td>
                              
                              
                         </tr>
                         <tr>
                              <td className="border-solid border-2 border-black text-sm font-medium text-center">
                                   <a href="" className="text-[#5cbcc6]"> <u>https://www.linkedin.com/</u></a>
                                   
                              </td>
                              <td className="border-solid border-2 border-black text-xs text-center pt-4"> 
                              <button className="mb-4 bg-[#b6d7a8] rounded h-7 w-2/6 border-2 border-black">SUCCESS</button>
                              </td>
                              
                              
                         </tr>
                    </table>
        </div>
      </div>
    )
  }
  export default Index