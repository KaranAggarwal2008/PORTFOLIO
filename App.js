import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import { ScreenOrientation } from 'expo';
import {
  AdMobBanner,
  PublisherBanner,
} from "expo";
import { NativeModules } from 'react-native';
const { Yodo1MASAds } = NativeModules;
const BANNER_ID = `ca-app-pub-1425926517331745/4139536433`;
export default class MyWeb extends Component {

  render() {
    return (
<ScrollView>
Yodo1MASAds.initMasSdk()
Yodo1MASAds.showBannerAds();
Yodo1MASAds.showInterstitialAds();
  <View>
      <WebView
      
        source={{ uri: 'https://karanaggarwal2008.github.io/Portofolio-for-amazon-app-store/' }}
        style={{ marginTop: 20 }}
      />
      </View>
</ScrollView>
    );
  }
}
