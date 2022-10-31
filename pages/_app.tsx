import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "react-datepicker/dist/react-datepicker.css";
import SocketsProvider from "../context/socket.context";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <SocketsProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SocketsProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
