//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
// create a component
class Calcu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Calcu</Text>
            </View>
            // <View style={styles.container}>
            //     <WebView 
            //     javaScriptEnabled={true}
            //     domStorageEnabled={true}
            //     startInLoadingState={true}
            //     source={{html:'Hello World'}} />
            // </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    webview: {
        width: deviceWidth *0.5,
        height : 200,
        backgroundColor:'#f23'
    }
});

//make this component available to the app
export default Calcu;
