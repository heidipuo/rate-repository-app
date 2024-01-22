import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN_USER } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(SIGN_IN_USER)
    const navigate = useNavigate()
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
      
      const result = await mutate({ variables: {
                credentials: {
                    password: password,
                    username: username}
          }})
      navigate("/")

      return result
        
      };
      const authToken = result.data
        ? result.data.authenticate.accessToken
        : undefined 
      
      authStorage.setAccessToken(authToken);
      apolloClient.resetStore();
    
      return [signIn, result];
    };

export default useSignIn;