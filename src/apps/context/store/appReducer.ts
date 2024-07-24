import { ActionType, IAppState } from "./AppContextProvider";

export const appReducer = (state: IAppState, action: ActionType) => {
  switch (action.type) {
    case "LOAD_CUSTOMERS": {
      return {
        ...state,
        customers: action.payload.customers
      };
    }

    case "LOAD_CUSTOMER": {
      const customers = state.customers.map((customer) => {
        if (customer.id === action.payload.customer.id) {
          return {
            ...customer,
            url: action.payload.customer.url,
            renewUrlCount: (customer.renewUrlCount || 0) + 1
          };
        }
        return customer;
      });

      return {
        ...state,
        customers
      };
    }

    case "RECONNECT": {
      const customers = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return {
            ...customer,
            reconnectCount: (customer.reconnectCount || 0) + 1,
            connected: action.payload.connected
          };
        }
        return customer;
      });

      return {
        ...state,
        customers
      };
    }

    default: {
      throw new Error(`Unknow action type "${action['type']}"`);
    }
  }
};
