import "../styles/globals.css";
import "../scss/style.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import SocketsProvider from "../context/socket.context";
// import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketsProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SocketsProvider>
  );
}

export default MyApp;
