import "./App.css";
import Count from "./components/Count";
import store from "./redux/store/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
