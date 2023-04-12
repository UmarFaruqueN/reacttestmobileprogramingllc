import { useState } from "react";

export const useForm = (intialValue) => {
     const [value, setValue] = useState(intialValue);

     return [
          value,
          (event) => {
               setValue({
                    ...value,
                    [event.target.name]: event.target.value,
               });
          },
     ];
};
