import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth';


export default class Loading extends React.Component {

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if(user){
        this.props.navigation.navigate('Main',{screen:'Home'})
      }else{
        this.props.navigation.navigate('Login')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})