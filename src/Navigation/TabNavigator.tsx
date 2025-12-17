import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import TasksScreen from "../Screens/TasksScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { StyleSheet } from "react-native";
export type TabParamList = {
    Home: undefined;
    Tasks: undefined;
    Profile: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#f4511e',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.label,
            }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={22} />
                    ),
                }}
            
            />
            <Tab.Screen 
                name="Tasks"
                component={TasksScreen}
                options={{
                    tabBarIcon: ({ color}) => (
                        <FontAwesome name="list" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={22} />
                    ),
                }}
                
            />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 0,
    height: 75,
    borderRadius: 20,
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
  },
});
