import { HttpServices } from '../Helper/HttpMethod.Helper';

export const AllStates = async () => {
  const result = await HttpServices.get(
    `https://api.covidtracking.com/v1/states/daily.json`
  )
    .then((data) => data)
    .catch((error) => error.response);

  return result;
};
