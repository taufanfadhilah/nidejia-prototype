"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";
// let persistor = persistStore(store);

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
}

export default ReduxProvider;
