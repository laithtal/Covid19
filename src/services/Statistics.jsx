import { HttpServices } from '../Helper/HttpMethod.Helper';

export const Statistics = async () => {
  const result = await HttpServices.get(
    `https://api.covidtracking.com/v1/us/daily.json`
  )
    .then((data) => data)
    .catch((error) => error.response);

  return result;
};
