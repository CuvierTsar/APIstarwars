import { Text, SafeAreaView, StyleSheet } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import RoutesTab from './pages/RoutesTab';

export default function App() {
  return (
<NavigationContainer>
<RoutesTab/>
</NavigationContainer>
  );
}