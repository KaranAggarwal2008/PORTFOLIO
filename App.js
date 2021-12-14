import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

import { ScreenOrientation } from 'expo';
import {
  AdMobBanner,
  PublisherBanner,
} from "expo";

const BANNER_ID = `ca-app-pub-1425926517331745/4139536433`;
export default class MyWeb extends Component {
  bannerError(){
    <Text>Something Went Wrong Please try again later</Text>
  }
  adMobEvent(){
    <Text>Something Went Wrong Please try again later</Text>
  }
  runPlusShowBanner(){
    <View>
    <AdMobBanner
    bannerSize="fullBanner"
    adUnitID={BANNER_ID}
    didFailToReceiveAdWithError={this.bannerError}
  />
            <PublisherBanner
          bannerSize="banner"
          adUnitID={BANNER_ID}
          didFailToReceiveAdWithError={this.bannerError}
          admobDispatchAppEvent={this.adMobEvent}
        />
                  </View>
  }
  render() {
    return (
<ScrollView>
  <View>
<this.runPlusShowBanner />
      <WebView
      
        source={{ uri: 'https://karanaggarwal2008.github.io/Portofolio-for-amazon-app-store/' }}
        style={{ marginTop: 20 }}
      />
      </View>
</ScrollView>
    );
  }
}
