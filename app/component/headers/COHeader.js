import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styles from "./style";
import globalStyle from "@Helper/GlobalStyles";

const NavHeader = (props) => {
	return (
		<View style={props.styleView === undefined ? styles.navCover : props.styleView}>
			<StatusBar barStyle="light-content" backgroundColor={props.statusBar === undefined ?'#00319D': props.statusBar} hidden={false} />
			<SafeAreaView >
			<View style={props.mainView === undefined ? styles.mainHeader: props.mainView}>
				<TouchableOpacity onPress={props.onPress}  >
					<Image source={require("@Assets/image/leading-icon.png")} style={globalStyle.backImg} />
				</TouchableOpacity>
				<View style={[styles.titleCover, props.titleCover]}>
					<Text style={props.styles === undefined ? styles.btnText : props.styles} numberOfLines={2}>{props.title}</Text>
				</View>
				<View>
				{props.children}
				</View>
			
				</View>
			</SafeAreaView>
		</View>
	)
};

export default NavHeader