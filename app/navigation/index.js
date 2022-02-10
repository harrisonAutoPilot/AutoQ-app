import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./Stack";

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    )
}

export default RootNavigator;

