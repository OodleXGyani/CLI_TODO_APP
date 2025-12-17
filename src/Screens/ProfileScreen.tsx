import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const ProfileScreen = ({navigation} : any) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button 
        title='Home'
        onPress={()=>{navigation.navigate('Home')}}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})