import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import Foto from '../assets/starwars.jpg';

export default function Home(){
  return(
    <ScrollView style={styles.container}>
    <Text style={styles.titulo}>Star Wars</Text>
    
    <Text style={styles.texto}>
    Star Wars é uma saga épica de ficção científica que se desenrola em uma galáxia muito, muito distante. Criada por George Lucas, a história começou com o lançamento do filme "Star Wars: Episode IV - A New Hope" em 1977 e desde então se expandiu para se tornar uma das franquias mais icônicas e influentes da cultura pop.
</Text>
<Image source={require('../assets/starwars.jpg')} style={styles.image}/>
<Text style={styles.texto}>
A trama central de Star wars gira em torno da luta entre as forças do bem, representadas pelos Jedi, e as forças do mal, lideradas pelos Sith. A Força, uma energia mística que concede habilidades especiais, é central para a narrativa. A história explora temas como redenção, heroísmo, política, e o eterno conflito entre o lado claro e o lado sombrio da Força.
</Text>
<Text style={styles.texto}>
A trilogia original, composta por "A New Hope", "The Empire Strikes Back" e "Return of the Jedi", segue a jornada de Luke Skywalker, uma fazendeiro de Tatooine que descobre seu potencial como Jedi e se junta à Rebelião para combater o Império Galáctico, liderado pelo sinistro Imperador Palpatine e seu aprendiz Darth Vader.
</Text>
<Text style={styles.texto}>
Posteriormente, a trilogia prequela, composta por "The Phantom Menace", "Attack of the Clones" e "Revenge of the Sith", explora a ascensão de Anakin Skywalker, que eventualmente se torna Darth Vader, e os eventos que levaram à queda da República e ao surgimento do Império.
</Text>
<Text style={styles.texto}>
Além disso, a saga se estende para uma nova trilogia sequela, começando com "The Force Awakens", que apresenta novos personagens como Rey, Finn e Kylo Ren, enquanto a galáxia lida com uma nova ameaça, a Primeira Ordem.
</Text>
<Text style={styles.texto}>
Além dos filmes, Star Wars se expandiu para incluir séries de televisão, livros, quadrinhos e uma infinidade de produtos relacionados. A franquia criou um vasto universo mitológico, com planetas distintos, raças alienígenas, e uma rica história que continua a crescer e evoluir.
</Text>
<Image source={require('../assets/starStar.jpg')} style={styles.image}/>
<Text style={styles.texto}>
O legado de Star Wars vai além do cinema, influenciando a cultura popular, a narrativa cinematográfica e até mesmo a tecnologia. Com uma base de fãs dedicada em todo o mundo, Star Wars se tornou uma força cultural duradoura, moldando gerações e inspirando inúmeras obras de ficção científica e fantasia.
    </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  titulo:{
    fontSize:30,
    fontWeight: 650,
  },
  image:{
    height:300,
    width:400,
    marginTop:20,
    marginBottom:20
  },
  texto:{
    marginTop: 20,
    fontSize:20,
  }

})