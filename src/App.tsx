import RootNavigator from "./Navigation/RootNavigator"


//----------- For better performance of navigation --------------
import { enableScreens } from 'react-native-screens';
enableScreens();
//---------------------------------------------------------------

export default function App() {
  return <RootNavigator/>;
  
}