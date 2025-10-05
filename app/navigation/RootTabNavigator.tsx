import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedStackNavigator from "./FeedStackNavigator";
import MessagesScreen from "../screens/MessagesScreen";

export type RootTabParamList = {
  Feed: undefined;
  Messages: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function RootTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedStackNavigator} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
