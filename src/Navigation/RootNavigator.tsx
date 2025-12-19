import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { TaskProvider } from "../Context/TaskContext";
import { AuthProvider } from "../Context/AuthContext";


import React from 'react'

export default function RootNavigator() {
  return (
    <AuthProvider>
    <TaskProvider>
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    </TaskProvider>
    </AuthProvider>
  )
}