import useSWR from "swr";
import { useEffect, useState } from "react";
import { setAccessToken } from "../token";
import makeSecuredRequest, { getNewToken } from "../utils/makeSecuredRequest";

const useUser = () => {
  const { data: user, error } = useSWR("/api/user", makeSecuredRequest);

  const [authenticating, setAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setAuthenticating(true);

        await getNewToken();
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error.response);
      } finally {
        setAuthenticating(false);
      }
    })();
  }, []);

  return {
    user,
    error,
    fetchingUser: !error && !user,
    authenticating,
    isAuthenticated,
  };
};

export default useUser;
