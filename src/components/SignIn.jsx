import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create ({
    flexContainer: {
        backgroundColor: 'white',
      
    },
    button: {
        flexDirection: 'row',
        backgroundColor: theme.colors.primary,
        height: 50,
        margin: 12,
        padding: 10, 
        borderRadius: theme.borderRadius,
        fontWeight: theme.fontWeights.bold,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: theme.fontWeights.bold,
        color: 'white',
        fontSize: theme.fontSizes.subheading,
     
    }
    
})

const initialValues = {
    username: '',
    password: '',
  };
  
const SignInForm = ({ onSubmit }) => {
   
      return (
        <View style={styles.flexContainer}>
          <FormikTextInput name="username" placeholder="username"/>
          <FormikTextInput name="password" placeholder="password" secureTextEntry="true"/>
          <Pressable style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Pressable>
          
        </View>
      );
    };
  
  const SignIn = () => {
    const onSubmit = values => {
        console.log(values)
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    );
  };

export default SignIn;