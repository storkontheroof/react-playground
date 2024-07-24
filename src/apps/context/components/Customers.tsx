import { useCallback, useEffect, useRef } from "react";

import { CustomerApi } from "../api/customer";
import { useAppContext } from "../store/AppContext";
import { Customer } from "./Customer";

export const Customers = () => {
  const { state, dispatch } = useAppContext();
  const renders = useRef(0);
  renders.current++;

  const fetchCustomers = useCallback(async () => {
    const customers = await CustomerApi.fetchAll();
    dispatch({
      type: "LOAD_CUSTOMERS",
      payload: { customers },
    });
  }, [dispatch]);

  useEffect(() => {
    fetchCustomers();
  }, [fetchCustomers]);

  return (
    <div>
      <h1>Customers ({renders.current})</h1>
      {state.customers.map((customer) => {
        return <Customer customer={customer} key={customer.id} />;
      })}
    </div>
  );
};
