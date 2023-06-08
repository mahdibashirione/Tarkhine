import { useEffect, useState } from "react";
import http from "../services/httpSevices";
import { memo } from "react";

const useSearchData = (url, query) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Request_Get_Data(url, query);
  }, [query]);

  async function Request_Get_Data(url, query) {
    setLoading(true);
    setError(null);
    try {
      const { data } = await http.Post(url, { body: JSON.stringify(query) });
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setData(null);
    }
  }

  return { data, error, loading };
};

export default useSearchData;
