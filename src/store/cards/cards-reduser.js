import { ADD_POSITIONS } from "./cards-actions";

export const positionsReduser = (state = [], actions)=>{
   switch (actions.type) {
      case ADD_POSITIONS: {
         return actions.positions;
      }
   
      default:{
         return state;
      }
   }
}