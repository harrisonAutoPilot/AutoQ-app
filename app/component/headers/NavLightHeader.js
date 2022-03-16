import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styles from "./style";
import globalStyle from "@Helper/GlobalStyles";

const NavHeaderWhite = (props) => {
	return (
		<View style={styles.navCoverWhite}>
			<StatusBar barStyle="dark-content" backgroundColor={"#fff"} hidden={false} />
			<SafeAreaView >
			<View style={ styles.mainHeader}>
				<TouchableOpacity onPress={props.onPress} >
					<Image source={require("@Assets/image/leading-iconn.png")} style={globalStyle.backImg} />
				</TouchableOpacity>
				<View style={styles.titleCover}>
					<Text style={styles.btnTextWhite}>{props.title}</Text>
				</View>
				</View>
			</SafeAreaView>
		</View>
	)
};

export default NavHeaderWhite