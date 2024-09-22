import { useState } from "react";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

export const useAxios = ({
  reqType,
  endpoint,
  payload,
  config,
  initialValue,
}) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const doRequest = () => {
    setLoading(true);
    return AxiosWithAuth()
      [reqType](endpoint, payload, config)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setErr(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [data, doRequest, loading, err];
};