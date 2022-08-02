import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';

const tryParseInt = (value) => {
  const result = parseInt(value);
  return isNaN(result) ? value : result;
};

const parseObjectValues = (obj = {}) => {
  Object.keys(obj).forEach((k) => {
    obj[k] = tryParseInt(obj[k]);
  });

  return obj;
};

const useQuery = () => {
  const location = useLocation();
  const history = useNavigate();
  const value = qs.parse(location.search, { ignoreQueryPrefix: true }) || {};

  return {
    value,
    set: (params) =>
      history.push({
        pathname: location.pathname,
        search: qs.stringify({ ...value, ...parseObjectValues(params) }),
      }),
  };
};

export default useQuery;
