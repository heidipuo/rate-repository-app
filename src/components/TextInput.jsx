import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10, 
        borderColor: theme.colors.textSecondary,
        borderRadius: theme.borderRadius,
        backgroundColor: 'white',
        color: theme.colors.textSecondary
      },
      errorBorderColor: {
        borderColor: theme.colors.error
      }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
    styles.input,
    error && styles.errorBorderColor,
    style
];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;