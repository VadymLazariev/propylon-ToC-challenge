import { useQuery } from "react-query";

import { getDocumentsStructure } from "../api/requests";
import { transformToHierarchy } from "../helpers/tranformToHierarchy";

export const useGetDocumentStructure = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "getDocumentStructure",
    getDocumentsStructure,
    {
      select: (data) => transformToHierarchy(data),
    }
  );

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};
