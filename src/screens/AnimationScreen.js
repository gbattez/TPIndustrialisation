import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing } from 'react-native';

export const ANIMATION_SCENE_NAME = 'ANIMATION_SCENE';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Animations',
  };

    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount () {
        this.spin()
    }


    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 50,
                duration: 8000,
                easing: Easing.linear,
                useNativeDriver: false
            },
        ).start(() => this.spin())
    }


  render() {
      const spin = this.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
      })
    return (

        <View style={styles.container}>
            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform: [{rotate: spin}] }}
                source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
            />
        </View>

    );
  }
}
