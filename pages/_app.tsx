import "../styles/globals.css";
import "../scss/style.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import SocketsProvider from "../context/socket.context";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
// import { AuthContextProvider } from "../context/AuthContext";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <SocketsProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SocketsProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
