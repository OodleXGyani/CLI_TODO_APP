import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { TaskProvider } from "../Context/TaskContext";


import React from 'react'

export default function RootNavigator() {
  return (

    <TaskProvider>
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    </TaskProvider>
  )
}