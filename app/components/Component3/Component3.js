import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, Switch} from 'react-native';

export default class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      textValue: 'Hello',
      switchValue: false
    }
  }

  onChangeText(value){
    this.setState({
      textValue:value
    });
  }

  onSubmit(){
    console.log('submitted');
  }

  onSwitchChange(value){
    this.setState({
      switchValue: value
    });
  }

  render() {
    return(
      <View style={{padding: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Enter your Text"
          value-={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>
          {this.state.textValue}
        </Text>
        <Switch value={this.state.switchValue}
          onValueChange={(value) => this.onSwitchChange(value)}>
        </Switch>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3)
