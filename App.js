import Router from "./src/navigations/Router";
import { Provider } from "react-redux";
import { Store } from "./src/redux/Store";
import { UserProvider } from "./src/context/UserContext";

export default App = () => {
  return (
    <Provider store={Store}>
      <UserProvider>
        <Router />
      </UserProvider>
    </Provider>
  );
};
