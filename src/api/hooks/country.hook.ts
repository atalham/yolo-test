import { useQuery } from "react-query";
import { getCountries } from "../services/country.service";
import { COUNTRIES_QUERY_KEYS } from "../utils/enums";

export const useGetCountries = () =>
  useQuery([COUNTRIES_QUERY_KEYS.GET_ALL_COUNTRIES], () => getCountries(), {
    keepPreviousData: true,
  });
