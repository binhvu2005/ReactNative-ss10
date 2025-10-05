import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { FeedStackParamList } from "../navigation/FeedStackNavigator";

type FeedDetailRouteProp = RouteProp<FeedStackParamList, "FeedDetail">;

type Props = {
  route: FeedDetailRouteProp;
};

export default function FeedDetailScreen({ route }: Props) {
  const { id } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chi tiết bài viết {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
