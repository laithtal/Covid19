import { HttpServices } from '../Helper/HttpMethod.Helper';

export const Current = async () => {
  const result = await HttpServices.get(
    `https://api.covidtracking.com/v1/us/current.json`
  )
    .then((data) => data)
    .catch((error) => error.response);

  return result;
};
