import { memo, useRef } from "react";

export const CustomerBase = ({ customer }) => {
  const renders = useRef(0);
  renders.current++;

  return (
    <fieldset>
      <legend>
        <h3>
          {customer.name} ({renders.current})
        </h3>
      </legend>
      <dl>
        <dt>url</dt>
        <dd>{customer.url}</dd>
        <dt>reconnectCount</dt>
        <dd>{customer.reconnectCount}</dd>
        <dt>renewUrlCount</dt>
        <dd>{customer.renewUrlCount}</dd>
        <dt>connected</dt>
        <dd className={customer.connected ? "connected" : "disconnected"}>
          {customer.connected ? "true" : "false"}
        </dd>
      </dl>
    </fieldset>
  );
};

export const Customer = CustomerBase;
// export const Customer = memo(CustomerBase);
