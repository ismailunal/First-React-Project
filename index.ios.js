import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component2 from './app/components/Component2/Component2'

export default class ReactFirstProject extends Component {
  render() {
    return(
      <View>
        <Component2/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactFirstProject', () => ReactFirstProject)
