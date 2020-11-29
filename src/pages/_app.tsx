import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "~/store/store";
import { PostProvider } from "~/context/Post";

import "../styles/tailwind.css";
import "../styles/index.scss";

const store = setupStore();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
    </Provider>
  );
};

export default App;
