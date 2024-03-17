"use client";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// let persistor = persistStore(store);

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
      </Provider>
    </SessionProvider>
  );
}

export default ReduxProvider;
