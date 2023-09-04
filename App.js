import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { AuthStack } from './src/navigation/authStack';
import RestaurantHomeScreen from './src/screens/RestaurantHomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigation/rootNavigation';
import  {SignInContextProvider}  from './src/contexts/authContext'
import MyOrdersScreen from './src/screens/MyOrdersScreen';
import { AppStack } from './src/navigation/appStack';


export default function App() {
  return (
    // <SignInContextProvider >
        <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          // backgroundColor={colors.statusbar}
        />
        {/* <RootNavigator /> */}
        {/* <Text>hello</Text> */}
        <RootNavigator />
      </View>
    // </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
