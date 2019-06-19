import React, { Component } from "react";
import { View,Text,StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

export default class WebViewPage extends React.PureComponent {
    render() {
        return (
            <WebView style={{flex:1}} source={{ uri: 'https://facebook.github.io/react-native/' }} />
        );
    }
}
