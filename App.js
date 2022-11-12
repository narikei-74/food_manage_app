import Router from "./src/navigations/Router";
import { Provider } from "react-redux";
import { Store } from "./src/redux/Store";

export default App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};
