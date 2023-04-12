import { Usecase1Table } from "./components";
import { ScreenHeading } from "../";

function Index() {
     return (
          <div className="container w-screen h-screen flex justify-center items-center">
               <div className=" flex flex-col items-center w-5/6">
                    <ScreenHeading heading={"Screen 2"} />
                    <Usecase1Table />
               </div>
          </div>
     );
}
export default Index;
