import * as types from "../AppReducer/actionTypes";
const initialState={
    shoes:[],
    isLaoding:false,
    isError:false,
}
const reducer =(state=initialState,action)=>{
  const {type,payload}=action;
  switch(type){
    case types.GET_SHOES_DATA_REQUEST:
       return{
        ...state,
          isLaoding:true,
          isError:false
       }
       case types.GET_SHOES_DATA_SUCCESS:
        return{
         ...state,
         shoes:payload,
           isLaoding:false,
           isError:false
        }
        case types.GET_SHOES_DATA_FAILURE:
            return{
             ...state,
               isLaoding:false,
               isError:true
            }
       default:
         return state;
  }
}
export {reducer}