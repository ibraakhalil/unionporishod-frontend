import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface useFetchDataProps {
  url: string;
  queryKey: any[];
  config?: any;
  options?: any;
}
export function useFetchData({
  url,
  queryKey,
  config = {},
  options = {},
}: useFetchDataProps) {
  const fetchData = async () => {
    const { data } = await axios.get(url, {
      ...config,
    });
    return data;
  };

  return useQuery({ queryKey: queryKey, queryFn: fetchData, ...options });
}
