import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const yourName = 'Meghan';

	return (
		<View>
			<Text style={styles.textStyle}>Getting Started with React Native!</Text>
			<Text style={styles.subHeaderStyle}>My name is {yourName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	subHeaderStyle: {
		fontSize: 20
	}
});

export default ComponentsScreen;
