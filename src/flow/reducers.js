import { fields } from "../data";
import update from "immutability-helper";

const initialState = {
  fields,
  selectedFields: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
    // case "TEST":
    //   return {
    //     ...state,
    //     isTesting: true
    //   };

    case "ADD_TO_ZONE":
      return {
        ...state,
        selectedFields: [...state.selectedFields, action.payload.id]
      };

    case "REMOVE_FROM_ZONE":
      return {
        ...state,
        selectedFields: state.selectedFields.filter(
          sf => sf !== action.payload.id
        )
      };

    case "SWAP_FIELDS":
      return {
        ...state,
        selectedFields: update(state.selectedFields, {
          $splice: [
            [action.payload.sourceIndex, 1],
            [
              action.payload.targetIndex,
              0,
              state.selectedFields[action.payload.sourceIndex]
            ]
          ]
        })
      };

    default:
      return state;
  }
};

export default app;
