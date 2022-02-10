import React from "react";
import { Text, View, Image, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styles from "./styles";

const StoreHeaderTwo = (props) => {
	return (
		<View style={styles.storeOuterCoverTwo}>
			<StatusBar barStyle="light-content" backgroundColor='#ffffff' hidden={false} />
			<SafeAreaView style={styles.storeCoverTwo}>
				<TouchableOpacity onPress={props.onPress}>
					<Image source={require("@Assets/image/left.png")} style={styles.backImg2} />
				</TouchableOpacity>

				<View style={styles.titleCover2}>
					<Text style={props.styles === undefined ? styles.btnText2 : props.styles}>{props.title}</Text>
				</View>
			</SafeAreaView>

		</View>
	)
};

export default StoreHeaderTwo