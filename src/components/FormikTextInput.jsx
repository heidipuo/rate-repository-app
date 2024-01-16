import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';



const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10, 
    borderColor: theme.colors.textSecondary,
    borderRadius: theme.borderRadius,
    backgroundColor: 'white',
    color: theme.colors.textSecondary
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;