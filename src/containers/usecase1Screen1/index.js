import { ScreenHeading } from "../";
import { Screen1Form } from "./components";
function Index() {
     return (
          <div className="container w-screen h-screen  flex justify-center items-center">
               <div className=" flex flex-col items-center w-1/3">
                    <ScreenHeading heading={"Screen 1"} />
                   <Screen1Form/>
               </div>
          </div>
     );
}
export default Index;
