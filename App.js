import "react-native-get-random-values";
import WebViewCrypto from "react-native-webview-crypto";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<WebViewCrypto />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		paddingHorizontal: 20,
	},
});
