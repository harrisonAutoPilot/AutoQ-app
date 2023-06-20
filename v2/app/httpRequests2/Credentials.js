import * as Keychain from 'react-native-keychain';


export default async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      console.log("meoow")
      return true;
    }

  } catch (e) {
    await Keychain.resetGenericPassword();
    return false;
  }
};