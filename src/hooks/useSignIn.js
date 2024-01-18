import { useMutation } from "@apollo/client";
import { SIGN_IN_USER } from "../graphql/mutations";


const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN_USER)
    
    const signIn = async ({ username, password }) => {
        return mutate({ variables: {
                credentials: {
                    password: password,
                    username: username}
          }})
      };
    
      return [signIn, result];
    };

export default useSignIn;