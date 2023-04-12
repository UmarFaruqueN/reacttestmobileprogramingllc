import { InputAddress, ResultTable } from "./components";

function Index() {
     return (
          <div className="container w-screen h-screen flex justify-center items-center">
               <div className=" flex flex-col items-center w-2/3">
                    <InputAddress />
                    <ResultTable />
               </div>
          </div>
     );
}
export default Index;
