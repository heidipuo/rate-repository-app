import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textWhite: 'white',
      primary: '#0366d6',
      secondary: '#3A3B3C',
      mainBackground: '#e1e4e8',
      error: '#d73a4a'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 18
    },
    fonts: {
      main: 
       Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    borderRadius: 5
  };
  
  export default theme;