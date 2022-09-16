import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";
import RiskCard from "../../components/RiskCard";

const data = [
  {
    id: 1,
    titile: "Age",
    explaination:
      "Women between the ages of 45 and 68 are more prone to getting breast cancerWomen between the ages of 45 and 68 are more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis suscipit arcu eu scelerisque. Morbi commodo ut urna quis suscipit. Suspendisse ac orci facilisis, lacinia lectus at, condimentum elit. Suspendisse vel odio leo. Donec imperdiet tortor magna, vel euismod orci tristique eget. Vestibulum leo augue, fermentum eget mauris id, laoreet luctus metus. vulputate ultricies risus. Phasellus vehicula ligula leo,",
    color: "#FAEFD7",
    image: images.time,
  },
  {
    id: 2,
    titile: "Smoking",
    explaination:
      "Women between the ages of 45 and 68 are more prone to getting breast cancerWomen between the ages of 45 and 68 are more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis suscipit arcu eu scelerisque. Morbi commodo ut urna quis suscipit. Suspendisse ac orci facilisis, lacinia lectus at, condimentum elit. Suspendisse vel odio leo. Donec imperdiet tortor magna, vel euismod orci tristique eget. Vestibulum leo augue, fermentum eget mauris id, laoreet luctus metus. vulputate ultricies risus. Phasellus vehicula ligula leo,",
    color: "#ECE7FE",
    image: images.smoking,
  },
  {
    id: 3,
    titile: "Alcohol",
    explaination:
      "Women between the ages of 45 and 68 are more prone to getting breast cancerWomen between the ages of 45 and 68 are more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis suscipit arcu eu scelerisque. Morbi commodo ut urna quis suscipit. Suspendisse ac orci facilisis, lacinia lectus at, condimentum elit. Suspendisse vel odio leo. Donec imperdiet tortor magna, vel euismod orci tristique eget. Vestibulum leo augue, fermentum eget mauris id, laoreet luctus metus. vulputate ultricies risus. Phasellus vehicula ligula leo,",
    color: "#F8D8D9",
    image: images.alcohol,
  },
  {
    id: 4,
    titile: "Radiation",
    explaination:
      "Women between the ages of 45 and 68 are more prone to getting breast cancerWomen between the ages of 45 and 68 are more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis suscipit arcu eu scelerisque. Morbi commodo ut urna quis suscipit. Suspendisse ac orci facilisis, lacinia lectus at, condimentum elit. Suspendisse vel odio leo. Donec imperdiet tortor magna, vel euismod orci tristique eget. Vestibulum leo augue, fermentum eget mauris id, laoreet luctus metus. vulputate ultricies risus. Phasellus vehicula ligula leo,",
    color: "#D2E6FE",
    image: images.radiation,
  },
  {
    id: 5,
    titile: "Gender",
    explaination:
      "Women between the ages of 45 and 68 are more prone to getting breast cancerWomen between the ages of 45 and 68 are more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis suscipit arcu eu scelerisque. Morbi commodo ut urna quis suscipit. Suspendisse ac orci facilisis, lacinia lectus at, condimentum elit. Suspendisse vel odio leo. Donec imperdiet tortor magna, vel euismod orci tristique eget. Vestibulum leo augue, fermentum eget mauris id, laoreet luctus metus. vulputate ultricies risus. Phasellus vehicula ligula leo,",
    color: "#F7EAEA",
    image: images.gender,
  },
  {
    id: 6,
    titile: "Genetics",
    explaination:
      "Women between the ages of 45 and 68 are more prone to getting breast cancerWomen between the ages of 45 and 68 are more. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis suscipit arcu eu scelerisque. Morbi commodo ut urna quis suscipit. Suspendisse ac orci facilisis, lacinia lectus at, condimentum elit. Suspendisse vel odio leo. Donec imperdiet tortor magna, vel euismod orci tristique eget. Vestibulum leo augue, fermentum eget mauris id, laoreet luctus metus. vulputate ultricies risus. Phasellus vehicula ligula leo,",
    color: "#E9EEF7",
    image: images.dna,
  },
];

const RiskFactors = () => {
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text="Risk Factors" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: SIZES.screenWidth * 0.06,
            paddingTop: SIZES.screenHeight * 0.02,
          }}
        >
          <Text style={{ fontFamily: "Poppins_Regular", lineHeight: 22 }}>
            Studies have shown that your risk for breast cancer is due to a
            combination of factors.
          </Text>
          <View style={{ marginVertical: 20 }}>
            {data.map((item) => (
              <RiskCard
                key={item.id}
                title={item.titile}
                description={item.explaination}
                color={item.color}
                image={item.image}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default RiskFactors;

const styles = StyleSheet.create({});
