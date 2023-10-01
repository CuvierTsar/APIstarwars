import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import InfoStack from './infoStack';

const Tab = createBottomTabNavigator();

export default function RoutesTab(){
return(
  <Tab.Navigator
  initialRouteName='Home'
  tabBarOptions={{activeTintColor:'#000'}}
  >

  <Tab.Screen name='Home'
  component={Home}
  options={{
    tabBarLabel:'Home',
    tabBarIcon:({color, size}) => ( <
    MaterialCommunityIcons name="magazine-pistol"
    color={color} size={size}
    />)
  }}
  />

  <Tab.Screen name='Info-Star-Wars'
  component={InfoStack}
  options={{
    tabBarLabel:'Info',
    tabBarIcon:({color, size}) => ( <
    MaterialCommunityIcons name="sword-cross"
    color={color} size={size}
    />)
  }}
  />

  </Tab.Navigator>
)
}