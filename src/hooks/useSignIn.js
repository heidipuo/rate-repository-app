import { useMutation, useApolloClient } from "@apollo/client";
import { SIGN_IN_USER } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";


const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(SIGN_IN_USER)
  
    const apolloClient = useApolloClient();

    const signIn = async ({ username, password }) => {
      
      const payload = await mutate({ variables: {
                credentials: {
                    password: password,
                    username: username}
          }})
  
      console.log('pay', payload)
     /* const authToken = payload.data
        ? payload.data.authenticate.accessToken
        : undefined */

      if (payload.data?.authenticate) {      
        await authStorage.setAccessToken(payload.data.authenticate.accessToken);
        apolloClient.resetStore();
      }
      
      return payload
        
      };
     
      
     
    
      return [signIn, result];
    };

export default useSignIn;