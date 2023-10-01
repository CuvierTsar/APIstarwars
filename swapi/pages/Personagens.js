import {Text, View, FlatList}  from 'react-native';
import {useState, useEffect} from 'react';

export default function Personagens(){
  const [registros, setRegistros] = useState();

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/vehicles/');
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
    <Text> Gênero: {item.gender}</Text>
    <Text> Cor do cabelo: {item.hair_color}</Text>
    <Text> Ano de Nascimento: {item.birth_year}</Text>
    </View>
    )
    }
    />
</Text>

)
}





