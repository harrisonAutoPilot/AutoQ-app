import * as Keychain from 'react-native-keychain';
import Config from "react-native-config";


const apiRequest = async (asyncFn, thunkAPI, route) => {

   try {
      const { data } = await asyncFn;
      // console.log("the url", data )
      if (route === "auth" ) {
         const token = data.token;
         const key = Config.KEY;
         await Keychain.setGenericPassword(key, token);
        
      }
      return data
   } catch (error) {
   
      if (error?.response?.status == 500){
         
      return thunkAPI.rejectWithValue({ msg: "Internal Error", status: 500 })
      }
      else{
         
       return thunkAPI.rejectWithValue({ msg: error?.response?.data?.error, status: error?.response?.status });
      //return thunkAPI.rejectWithValue({ msg: error, status: error?.response?.status });
      }
   }
};

export { apiRequest};