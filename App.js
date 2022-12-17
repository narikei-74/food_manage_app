import Router from "./src/navigations/Router";
import { Provider } from "react-redux";
import { Store } from "./src/redux/Store";
import { UserProvider } from "./src/context/UserContext";
import { DateProvider } from "./src/context/DateContext";

export default App = () => {
  return (
    <Provider store={Store}>
      <UserProvider>
        <DateProvider>
          <Router />
        </DateProvider>
      </UserProvider>
    </Provider>
  );
};
