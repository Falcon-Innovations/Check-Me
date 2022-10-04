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
import { useTranslation } from "react-i18next";

const RiskFactors = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      titile: t("age"),
      explaination: t("ageText"),
      color: "#FAEFD7",
      image: images.time,
    },
    {
      id: 2,
      titile: t("smoking"),
      explaination: t("smokeText"),
      color: "#ECE7FE",
      image: images.smoking,
    },
    {
      id: 3,
      titile: t("alcohol"),
      explaination: t("alcoholText"),
      color: "#F8D8D9",
      image: images.alcohol,
    },
    {
      id: 4,
      titile: t("radiation"),
      explaination: t("radiationText"),
      color: "#D2E6FE",
      image: images.radiation,
    },
    {
      id: 5,
      titile: "Gender",
      explaination:
        "Just being a woman is the biggest risk factor for developing breast cancer. According to a report by VOA Cam, there has been a delay in breast cancer screening since the outbreak of corona. As a result the number of women diagnosed with breast cancer has increased to 2625 cases per 100,000 women per year.While men do develop breast cancer, less than 1% of all new breast cancer cases happen in men. The biggest reasons for the difference in breast cancer rates between men and women are: - Women's breast development takes 3 to 4 years and is usually complete by age 14. It's uncommon for men's breasts to fully form — most of the male breasts you see are fat, not formed glands. Once fully formed, breast cells are very immature and highly active until a woman's first full-term pregnancy. While they are immature, a women's breast cells are very responsive to estrogen and other hormones, including hormone disrupters in the environment. Men's breast cells are inactive and most men have extremely low levels of estrogen. So hormonal stimulation of highly responsive and vulnerable breast cells in women, particularly during the extra-sensitive period of breast development, is why breast cancer is much more common in women than in men.",
      color: "#F7EAEA",
      image: images.gender,
    },
    {
      id: 6,
      titile: t("genTitle"),
      explaination: t("genetics"),
      color: "#E9EEF7",
      image: images.dna,
    },
  ];
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
            {t("headingRisk")}
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
