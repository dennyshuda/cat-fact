import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function Fact() {
  async function getFacts() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/fact`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["catFact"],
    queryFn: getFacts,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }
  return (
    <div>
      <h1>Random Cat Fact</h1>
      <button onClick={() => refetch()}>Generate</button>
      <h1>{data?.fact}</h1>
      <p>{data?.length}</p>
    </div>
  );
}
