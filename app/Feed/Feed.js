import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";

class Feed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Feed</Text>
            </View>
        );
    }
}
export default Feed;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});