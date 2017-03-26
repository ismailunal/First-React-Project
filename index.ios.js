import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Component4 from './app/components/Component4/Component4'

export default class ReactFirstProject extends Component {
  render() {
    return(
      <View>
        <Component4/>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactFirstProject', () => ReactFirstProject)
