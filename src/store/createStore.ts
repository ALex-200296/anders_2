import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default function configStore(): Store {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
}
