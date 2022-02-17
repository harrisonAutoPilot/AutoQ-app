import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from "@Component/drawer";
import Home from "@Screen/Home";
// import MyOrder from "@Screen/MyOrder";
// import MyStore from "@Screen/MyStore";
// import Notification from "@Screen/Notification";
// import MyRemedialAgent from "@Screen/MyRemedialAgent";
// import FAQ from "@Screen/FAQ";
// import AccountSettings from "@Screen/AccountSettings";
// import TabHomeNavigator from "./Tab";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props) => <DrawerContent {...props} />} >
            <Drawer.Screen name="Home" component={Home} />
            {/* <Drawer.Screen name="MyOrder" component={MyOrder} />
            <Drawer.Screen name="MyStore" component={MyStore} />
            <Drawer.Screen name="MyRemedialAgent" component={MyRemedialAgent} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="FAQ" component={FAQ} />
            <Drawer.Screen name="AccountSettings" component={AccountSettings} /> */}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

