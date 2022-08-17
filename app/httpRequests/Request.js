import * as Keychain from 'react-native-keychain';
import Config from "react-native-config";


const apiRequest = async (asyncFn, thunkAPI, route) => {

   try {
      const { data } = await asyncFn;
      if (route === "auth" ) {
         const token = data.token;
         const key = Config.KEY;
         await Keychain.setGenericPassword(key, token);
      }
      return data
   } catch (error) {
      console.log("err", error)
      return thunkAPI.rejectWithValue({ msg: error?.response?.data?.error ? error?.response?.data?.error : error?.response?.data?.phone_number_verification ? error.response.status == 500 : "Internal Error" , status: error?.response?.status || 400 });
   }
};

export { apiRequest};