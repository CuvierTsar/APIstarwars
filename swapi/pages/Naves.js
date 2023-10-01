import {Text, View, FlatList}  from 'react-native';
import {useState, useEffect} from 'react';

export default function Naves(){
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
    <Text> Modelo: {item.model}</Text>
    <Text> Terreno: {item.vehicle_class}</Text>
    <Text> Custo em crédito: {item.cost_in_credits}</Text>
    </View>
    )
    }
    />
</Text>

)
} 