import Axios from "axios";
import Config from "react-native-config";
import * as Keychain from 'react-native-keychain';

const axiosbase = async () => {

  try {
    const credentials = await Keychain.getGenericPassword();

    return Axios.create({
      baseURL: Config.API_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${credentials?.password}`,
      },
      timeout: 200000
    });
  } catch (error) {
    console.log(error);
  }

}

export default axiosbase;