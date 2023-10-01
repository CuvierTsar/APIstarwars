import{Text,
 View,
 StyleSheet,
 SafeAreaView,
 FlatList,
 Image,
 ScrollView,
 TouchableOpacity
 } from 'react-native';


export default function Info(props){
  return(
    <ScrollView>
<Text style={styles.titulo}>Informações</Text>

<Text>As vezes demora um pouco para as Informações carregarem.</Text>
<TouchableOpacity style={styles.agrupamento}
onPress={() => props.navigation.navigate('Planetas')}
>
<Image source={require('../assets/planeta.jpg')} style={styles.image}/>
<Text style={styles.subtitulo}>Planetas </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.agrupamento}
onPress={() => props.navigation.navigate('Naves')}
>
<Image source={require('../assets/nave.jpg')} style={styles.image}/>
<Text style={styles.subtitulo}>Naves </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.agrupamento}
onPress={() => props.navigation.navigate('Personagens')}
>
<Image source={require('../assets/personagem.jpg')} style={styles.image}/>
<Text style={styles.subtitulo}>Personagens </Text>
</TouchableOpacity>


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  image:{
    height:150,
    width:400
  },
  agrupamento:{
    fontSize: 20,
    color: '#000',
    marginTop:40
  },
    titulo:{
    fontSize:30,
    fontWeight: 650,
  },
    subtitulo:{
    fontSize:20,
    fontWeight: 400,
  },
})