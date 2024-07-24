import React, { useReducer } from "react";

import { appReducer } from "./appReducer.js";


export interface ICustomer {
  id:number;
  name:string;
  url:string;
  renewUrlCount?:number
  reconnectCount?:number
}


export interface IAppState {
  customers: ICustomer[];
}

export type ActionType =
    | { type: 'LOAD_CUSTOMERS'; payload: { customers: ICustomer[];} }
    | { type: 'LOAD_CUSTOMER'; payload: {customer: ICustomer} }
    | { type: 'RECONNECT'; payload: {id:number, connected:boolean} }

export type Dispatch = (action: ActionType) => void


export interface IAppContext {
  state: IAppState
  dispatch: Dispatch
}

const initialState: IAppState = {
  customers: []
};


interface AppContextProviderProps {
  children: React.ReactNode;
}

export type AppContextProps = { state: IAppState; dispatch: Dispatch } | undefined


const AppContext = React.createContext<AppContextProps>(undefined);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const store = { state, dispatch };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
