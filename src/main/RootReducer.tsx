import { combineReducers } from "redux";
// Import your reducers and reducer types here

const RootReducer = combineReducers({
  // Add your reducers here ex. 
  // reducerState: ReducerType
});

export type AppState = ReturnType<typeof RootReducer>;
export default RootReducer;
