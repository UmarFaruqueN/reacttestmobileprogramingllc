import { useEffect, useState } from "react";
import { useForm } from "../";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../";

function Index() {
     const navigate = useNavigate();
     const [spinner, setSpinner] = useState(false);
     const [value, handleChange] = useForm({
          table_name: "",
          unique_column: "",
          column_name: "",
     });

     const handleClick = () => {
        if(value.table_name&&value.unique_column&&value.column_name){
            setSpinner(true);
            ///here write the code to upload data to the server
            console.log(value);
            setTimeout(() => {
                 navigate("/usecase1Screen2");
                 setSpinner(false);
            }, 3000);
        }else{
            alert("add Values")
        }
         
     };

     useEffect(() => {}, []);

     return (
          <>
               <input
                    className="mb-3 border-2 border-slate-400 w-full h-10 bg-slate-100 pl-2"
                    type="text"
                    name="table_name"
                    placeholder="Table Name"
                    value={value.table_name}
                    onChange={handleChange}
               />
               <input
                    className="mb-3 border-2 border-slate-400 w-full h-10 bg-slate-100 pl-2"
                    type="text"
                    name="unique_column"
                    placeholder="Unique Column"
                    value={value.unique_column}
                    onChange={handleChange}
               />
               <input
                    className="mb-3 border-2 border-slate-400 w-full h-10 bg-slate-100 pl-2"
                    type="text"
                    name="column_name"
                    placeholder="Column Name"
                    value={value.column_name}
                    onChange={handleChange}
               />
               {spinner ? (
                    <Spinner />
               ) : (
                    <button className="mt-4 bg-slate-300 hover:bg-slate-400 rounded h-10 w-2/6 border-2 border-black" onClick={handleClick}>
                         Manual Update
                    </button>
               )}
          </>
     );
}
export default Index;
