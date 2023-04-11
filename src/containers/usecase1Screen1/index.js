import { ScreenHeading } from "../../components";
function Index() {
     return (
          <div className="container w-screen h-screen  flex justify-center items-center">
               <div className=" flex flex-col items-center w-1/3">
                    <ScreenHeading heading={"Screen 1"} />
                    <input
                         className="mb-3 border-2 border-slate-400 w-full h-10 bg-slate-100 pl-2"
                         type="text"
                         placeholder="Table Name"
                    />
                    <input
                         className="mb-3 border-2 border-slate-400 w-full h-10 bg-slate-100 pl-2"
                         type="text"
                         placeholder="Unique Column"
                    />
                    <input
                         className="mb-3 border-2 border-slate-400 w-full h-10 bg-slate-100 pl-2"
                         type="text"
                         placeholder="Column Name"
                    />

                    <button className="mt-4 bg-slate-300 rounded h-10 w-2/6 border-2 border-black">Manual Update</button>
               </div>
          </div>
     );
}
export default Index;
