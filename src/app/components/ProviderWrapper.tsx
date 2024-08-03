"use client";
import React from "react";
import { persistor, store } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="mt-[60px]">{children}</div>
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
