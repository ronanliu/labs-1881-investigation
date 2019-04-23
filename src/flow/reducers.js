import { fields } from "../data";

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

    default:
      return state;
  }
};

export default app;
