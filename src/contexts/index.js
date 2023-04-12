import React, { useReducer } from "react";

const initialState = {
          usecase1Data:[{id:101,table_name:"interview.geography_columns",column_name:"city_name",value:"che"},{id:102,table_name:"interview.geography_columns",column_name:"city_name",value:"mum"},{id:103,table_name:"interview.geography_columns",column_name:"city_name",value:"banglore"},{id:104,table_name:"interview.geography_columns",column_name:"city_name",value:"cochin"}],
          usecase2Data:[{id:101,address:"https://www.go-yubi.com/",status:"SUCCESS"},{id:102,address:"https://www.google.com/",status:"SUCCESS"},{id:103,address:"https://rera.goa.gov.in/reraApp/",status:"FAILURE"},{id:104,address:"https://www.linkedin.com/",status:"SUCCESS"}]
};

function reducer(state, action) {
     switch (action.type) {
          // case "BEDROOMS":
          //      return {
          //           ...state,
          //           bedRoomNo: action.bedRoomNo,
          //      };
          // case "BATHROOMS":
          //           return {
          //                ...state,
          //                bathRoomNo: action.bathRoomNo,
          //           };
          // case "TIMEFRAME":
          //                return {
          //                     ...state,
          //                     timeFrame: action.timeFrame,
          //                };          
          // case "CONTACT":
          //      return {
          //           ...state,
          //           isContact: !state.isContact,
          //      };
          // case "CONTACTFROMMAIL":
          //           return {
          //                ...state,
          //                isContact: true,
          //           };
          // case "LAYOUTON":
          //      return {
          //           ...state,
          //           isLayout: true,
          //      };
          // case "LAYOUTOFF":
          //      return {
          //           ...state,
          //           isLayout: false,
          //      };
          // case "MAP":
          //      return {
          //           ...state,
          //           geocode: action.geocode,
          //      };
          // case "PK":
          //      return {
          //           ...state,
          //           PK: action.PK,
          //      };
          // case "SK":
          //      return {
          //           ...state,
          //           SK: action.SK,
          //           };
          // case "ADDRESS":
          //      return {
          //           ...state,
          //           address: action.address,
          //      };
          // case "REPORT":
          //      return {
          //           ...state,
          //           report: action.data,
          //      };
          //  case "LICENSE":
          //      return {
          //           ...state,
          //           licenseNumber: action.licenseNumber,
          //      };
          // case "STEP0":
          //      return {
          //           ...state,
          //           step0:true,
          //           step1:false,
          //           step2:false, 
          //           step3:false,
          //           step4:false, 
          //           reportpage:false       
          //      };
          // case "STEP1":
          //      return {
          //           ...state,
          //           step0:false,
          //           step1:true,
          //           step2:false, 
          //           step3:false,
          //           step4:false,     
          //      };
          // case "STEP2":
          //      return {
          //           ...state,
          //           step0:false,
          //           step1:false,
          //           step2:true, 
          //           step3:false,
          //           step4:false,        
          //      };
          //      case "STEP3":
          //      return {
          //           ...state,
          //           step0:false,
          //           step1:false,
          //           step2:false, 
          //           step3:true,
          //           step4:false,        
          //      };
          // case "STEP4":
          //      return {
          //           ...state,
          //           step0:false,
          //           step1:false,
          //           step2:false, 
          //           step3:false,
          //           step4:true,       
          //      };
          // case "NAME":
          //      return {
          //           ...state,
          //           firstName:action.firstName,
          //           lastName:action.lastName
          //      };

          default:
               return state;
     }
}
export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
     const [state, dispatch] = useReducer(reducer, initialState);
     return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
