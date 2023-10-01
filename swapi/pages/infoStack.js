import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Info from './Rebeldes';
import Personagens from './Personagens';
import Naves from './Naves';
import Planetas from './Planetas';

export default function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="Personagens" component={Personagens} />
      <Stack.Screen name="Naves" component={Naves} />
      <Stack.Screen name="Planetas" component={Planetas} />
    </Stack.Navigator>
  );
}