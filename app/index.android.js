/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Accelerometer, Gyroscope } from 'react-native-sensors';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class app extends Component {

  render() {

      // this is shit code but it works for demonstrative purposes
      const accelerationObservable = new Accelerometer({
        updateInterval: 100, // defaults to 100ms
      });

      // Normal RxJS functions
      accelerationObservable
        .map(({ x, y, z }) => x + y + z)
        .filter(speed => speed > 20)
        .subscribe(speed => console.log(`You moved your phone with ${speed}`));

      setTimeout(() => {
        accelerationObservable.stop();
    }, 1000000);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app', () => app);
