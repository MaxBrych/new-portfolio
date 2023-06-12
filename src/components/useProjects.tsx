import { client } from "../../lib/sanity.client";
import useSWR from "swr";

const fetcher = (query: string) => client.fetch(query);

export const useProject = () => {
  const query = `*[_type == "project"] {
   ...
  }
  `;

  const { data, error } = useSWR(query, fetcher, { refreshInterval: 1000 });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
