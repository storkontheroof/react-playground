import customersRaw from "./customers.json";

export const CustomerApi = {
  fetchAll: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const customers = customersRaw.map((customer) => {
          return {
            ...customer,
            reconnectCount: 0,
            renewUrlCount: 0,
            connected: false
          };
        });

        resolve(customers);
      }, 1000);
    });
  },

  renewUrl: (customerId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const customer = customersRaw.find(
          (customer) => customer.id === customerId
        );
        const url = customer.url.replace(
          "socket-1",
          "socket-" + new Date().getTime()
        );

        resolve({
          ...customer,
          url
        });
      }, 500);
    });
  }
};
