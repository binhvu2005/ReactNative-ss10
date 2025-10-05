import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedListScreen from "../screens/FeedListScreen";
import FeedDetailScreen from "../screens/FeedDetailScreen";

export type FeedStackParamList = {
  FeedList: undefined;
  FeedDetail: { id: number } | undefined;
};

const Stack = createStackNavigator<FeedStackParamList>();

export default function FeedStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedList"
        component={FeedListScreen}
        options={{ title: "Danh sách bài viết" }}
      />
      <Stack.Screen
        name="FeedDetail"
        component={FeedDetailScreen}
        options={{ title: "Chi tiết bài viết" }}
      />
    </Stack.Navigator>
  );
}
