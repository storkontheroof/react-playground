import { AppContextProvider } from "./store/AppContextProvider";

import { ActionBar } from "./components/ActionBar";
import { Customers } from "./components/Customers";

import "./styles.css";

const Dummy = () => {
  console.log("render");
  return <h1>Dummy Component</h1>;
};

export default function ContextPage() {
  return (
    <AppContextProvider>
      <ActionBar />
      <Dummy />
      <Customers />
    </AppContextProvider>
  );
}
