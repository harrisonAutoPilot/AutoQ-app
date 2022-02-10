import * as Keychain from 'react-native-keychain';
import Config from "react-native-config";


const apiRequest = async (asyncFn, thunkAPI, route) => {
   try {
      const { data } = await asyncFn;
      if (route === "auth") {
         const token = data.token;
         const key = Config.KEY;
         await Keychain.setGenericPassword(key, token);
      }
      return data
   } catch (error) {
      console.log(error.response.data)
      return thunkAPI.rejectWithValue({ msg: error?.response?.data?.error ? error?.response?.data?.error || "An Error Occured" : error?.response?.data?.phone_number_verification , status: error?.response?.status || 400 });
   }
};

export { apiRequest};