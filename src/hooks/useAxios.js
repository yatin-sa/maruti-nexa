import { useState, useEffect } from "react";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosReq = async (configObj) => {
    const { axiosInstance, method, endpoint, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance({
        url: endpoint,
        method: method.toLowerCase(),
        ...requestConfig,
        signal: ctrl.signal,
      });
      setResponse(res.data);
      setError("");
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // useEffect cleanup function

    return () => controller && controller.abort();
  }, [controller]);

  return { response, error, loading, axiosReq };
};

export default useAxios;
