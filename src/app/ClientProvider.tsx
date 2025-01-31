"use client";
import { Provider } from "react-redux";
import { store } from "../Redux/store";


export default function ClientProvider({ children } : { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
}
