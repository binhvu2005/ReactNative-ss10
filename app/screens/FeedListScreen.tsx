import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FeedStackParamList } from "../navigation/FeedStackNavigator";

type FeedListNavProp = StackNavigationProp<FeedStackParamList, "FeedList">;

type Props = {
  navigation: FeedListNavProp;
};

export default function FeedListScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Danh sách bài viết</Text>
      <Button
        title="Xem chi tiết bài viết #1"
        onPress={() => navigation.navigate("FeedDetail", { id: 1 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
