import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "~/store/store";
import { AuthProvider } from "~/context/Auth";

import "../styles/tailwind.css";
import "../styles/index.scss";

const store = setupStore();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
