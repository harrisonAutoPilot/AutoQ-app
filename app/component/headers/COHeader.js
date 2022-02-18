import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styles from "./style";
import globalStyle from "@Helper/GlobalStyles";

const NavHeader = (props) => {
	return (
		<View style={props.styleView === undefined ? styles.navCover : props.styleView}>
			<StatusBar barStyle="dark-content" backgroundColor={props.statusBar === undefined ?'#00319D': props.statusBar} hidden={false} />
			<SafeAreaView >
			<View style={props.mainView === undefined ? styles.mainHeader: props.mainView}>
				<TouchableOpacity onPress={props.onPress} >
					<Image source={require("@Assets/image/left-arrow.png")} style={globalStyle.backImg} />
				</TouchableOpacity>
				<View style={styles.titleCover}>
					<Text style={props.styles === undefined ? styles.btnText : props.styles}>{props.title}</Text>
				</View>
				</View>
			</SafeAreaView>
		</View>
	)
};

export default NavHeader