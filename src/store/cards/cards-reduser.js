import { ADD_CARDS } from "./cards-actions";

export const cardsReduser = (state = [], actions)=>{
   switch (actions.type) {
      case ADD_CARDS: {
         return actions.cards;
      }
   
      default:{
         return state;
      }
   }
}