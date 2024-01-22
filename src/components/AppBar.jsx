import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from "react-router-native";
import Text from './Text';

import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries'
import { useContext } from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    backgroundColor: theme.colors.secondary
  },
  text: {
    color: 'white',
    padding: 20,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  },
});

const AppBar = () => {
  const me = useQuery(ME)
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signedIn = me.data
    ? me.data.me ? true : false
    : false
 
  const hideWhenSignedIn = { display: signedIn ? '' : 'none' }
  const showWhenSignedIn = { display: signedIn ? 'none' : ''}
  
  const signOut = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
    navigate("/")
  }
  
  return <View style={styles.container}>
          <ScrollView horizontal>
            <Pressable>
            <Link to="/">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </Pressable>
          <Pressable>
            <Link to="/signIn">
              <Text style={[styles.text, showWhenSignedIn]}>Sign in</Text>
            </Link>  
          </Pressable>
          <Pressable
            onPress={signOut}>
            <Text style={[styles.text, hideWhenSignedIn]}>Sign out</Text>
          </Pressable>
          </ScrollView>
        </View>;
};

export default AppBar;