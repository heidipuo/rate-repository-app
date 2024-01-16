import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
import Text from './Text';

import theme from '../theme';

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
  }
});

const AppBar = () => {
  return <View style={styles.container}>
          <ScrollView horizontal>
            <Pressable>
            <Link to="/">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </Pressable>
          <Pressable>
            <Link to="/signIn">
              <Text style={styles.text}>Sign in</Text>
            </Link>  
          </Pressable>
          </ScrollView>
        </View>;
};

export default AppBar;