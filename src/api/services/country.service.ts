import { request, gql } from "graphql-request";
import { Countries } from "../interfaces/country.interface";
import { API_URL } from "../utils/constants";

const COUNTRY_QUERY = gql`
  {
    countries {
      code
      name
    }
  }
`;

export const getCountries = () => {
  return request(API_URL, COUNTRY_QUERY) as Promise<Countries>;
};
