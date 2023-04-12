import { useNavigate } from "react-router-dom";

function Index() {
     const navigate = useNavigate();
     return (
          <ul className="flex border-b">
               <li className="mr-1">
                    <h2
                         className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 hover:cursor-pointer font-semibold"
                         onClick={() => navigate("/")}
                    >
                         HomePage
                    </h2>
               </li>
               <li className="mr-1">
                    <h2
                         className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 hover:cursor-pointer font-semibold"
                         onClick={() => navigate("/usecase1Screen1")}
                    >
                         Usecase1_Screen1
                    </h2>
               </li>
               <li className="mr-1">
                    <h2
                         className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 hover:cursor-pointer font-semibold"
                         onClick={() => navigate("/usecase1Screen2")}
                    >
                         Usecase1_Screen2
                    </h2>
               </li>
               <li className="mr-1">
                    <h2
                         className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 hover:cursor-pointer font-semibold"
                         onClick={() => navigate("/usecase2Screen1")}
                    >
                         Usecase2_Screen1
                    </h2>
               </li>
          </ul>
     );
}

export default Index;
