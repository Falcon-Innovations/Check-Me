import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

import { COLORS } from "../../utility";
import { CustomStatusBar } from "../../components";

const Specialists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <StatusBar hidden={false} backgroundColor={COLORS.primary} />
      <SafeAreaView style={styles.container}>
        <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
          <CustomStatusBar />
          <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
            <Searchbar
              placeholder="Search Specialists"
              placeholderTextColor="#D2D1D1"
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                elevation: 0,
                borderWidth: 0.5,
                borderColor: COLORS.borderCardColor,
              }}
              inputStyle={{
                fontSize: 14,
                fontFamily: "Poppins_Regular",
              }}
              iconColor="#D2D1D1"
            />
          </View>
          <View>
            <Text style={{ fontFamily: "Poppins_Medium", color: "#333333" }}>
              Get connected with the best specialists
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Specialists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
