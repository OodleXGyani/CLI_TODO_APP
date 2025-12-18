import RootNavigator from "./Navigation/RootNavigator"
import { GestureHandlerRootView } from 'react-native-gesture-handler';


//----------- For better performance of navigation --------------
import { enableScreens } from 'react-native-screens';
enableScreens();
//---------------------------------------------------------------

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigator/>
    </GestureHandlerRootView>
  );

}
