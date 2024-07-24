import { useCallback } from "react";

import { CustomerApi } from "../api/customer";
import { useAppContext } from "../store/AppContext";

export const ActionBar = () => {
  const { state, dispatch } = useAppContext();

  const renewUrl = useCallback(
    async (id) => {
      const customer = await CustomerApi.renewUrl(id);
      dispatch({
        type: "LOAD_CUSTOMER",
        payload: { customer },
      });
    },
    [dispatch]
  );

  const reconnect = useCallback(
    async (id) => {
      const connected = !!Math.round(Math.random());
      dispatch({
        type: "RECONNECT",
        payload: { id, connected },
      });
    },
    [dispatch]
  );

  return (
    <fieldset>
      <legend>ActionBar</legend>
      {state.customers.map((customer) => {
        return (
          <p key={customer.id}>
            {customer.name}:{" "}
            <button onClick={() => renewUrl(customer.id)}>Renew URL</button>{" "}
            <button onClick={() => reconnect(customer.id)}>Reconnect</button>
          </p>
        );
      })}
    </fieldset>
  );
};
