import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const currentToken = await AsyncStorage.getItem(`${this.namespace}:token`)
    return currentToken
}

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(
        `${this.namespace}:token`, 
        accessToken
    )
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`)
  }
}

export default AuthStorage;