import {Text, View, StyleSheet} from 'react-native';

export default function Imperio(){
  return(
    <View styles={styles.container}>
    <Text>
    ImperioStack
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }

})