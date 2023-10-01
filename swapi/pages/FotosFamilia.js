import * as React from 'react';
import {Button, Text, View, Stylesheet} from 'react-native';

export default function FotosFamilia(props){
return(
<View style={styles.container}>
<Text style={styles.titulo}> Fotos Familia </Text>

<Button
title="fotos"
onPress={() => props.navigation.navigate( "Fotos" )}
/>
</View>
)}

const styles = Stylesheet.create({
contatner:{
flex: 1,
justifyContent: "center",
alignitems: "center"
},

titulo:{
fontSize: 25,
color: '#ff0Bab'
}
})