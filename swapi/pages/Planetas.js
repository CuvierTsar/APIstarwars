import {Text, View, FlatList}  from 'react-native';
import {useState, useEffect} from 'react';

export default function Planetas(){
    
  const [registros, setRegistros] = useState();

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/planets/');
  const parsed = await response.json();
  callback(parsed.results);
}

  useEffect(() =>{
    request(setRegistros);
  }, [])

return(
<Text>
    <FlatList
    data={registros}
    keyExtractor = {(item) => item.name.toString()}
    renderItem={({item}) =>(
    <View style={{marginTop:20}}>
    <Text> Nome: {item.name}</Text>
    <Text> Diametro: {item.diameter}</Text>
    <Text> Clima: {item.climate}</Text>
    <Text> Gravidade: {item.gravity}</Text>
    <Text> Terreno: {item.terrain}</Text>
    <Text> População: {item.population}</Text>
    </View>
    )
    }
    />
</Text>

)
} 






