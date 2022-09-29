import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { AppButton, AppStatusBar, CustomStatusBar } from "../../components";
import { COLORS, images, SIZES } from "../../utility";

const selfExamine = [
  {
    phase: "1",
    title: "Begin with a visual examination of your breasts",
    description:
      "Sit or stand shirtless and braless in front of a mirror with your arms at your sides. To inspect your breasts visually, do the following:",
    img: images.people,
    steps: [
      {
        i: "Face forward and look for puckering(wrinkles), dimpling(indentation in breast area), or changes in size, shape or symmetry(regularity).",
      },
      {
        i: "Check to see if your nipples are turned in (inverted).",
      },
      {
        i: "Inspect your breasts with your hands pressed down on your hips.",
      },
      {
        i: "Inspect your breasts with your arms raised overhead and the palms of your hands pressed together.",
      },
      {
        i: "Lift your breasts to see if ridges along the bottom are symmetrical.",
      },
    ],
    precations:
      "This is due to the fact that their breast cells are constantly exposed to the growth-promoting effects of the female hormones estrogen and progesterone.",
  },
  {
    phase: "2",
    title: "Use your hands to examine your breasts",
    description:
      "Common ways to perform the manual part of the breast exam include:",
    img: images.people,
    steps: [
      {
        i: "Lying down: Choose a bed or other flat surface to lie down on your back. When lying down, breast tissue spreads out, making it thinner and easier to feel.",
      },
      {
        i: "In the shower:  Lather your fingers and breasts with soap to help your fingers glide more smoothly over your skin.",
      },
    ],
    precations:
      "This is due to the fact that their breast cells are constantly exposed to the growth-promoting effects of the female hormones estrogen and progesterone.",
  },
];

const tips = [
  "Use the pads of your fingers.",
  "Follow a pattern",
  "Take your time.",
];

const SelfExamination = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text={"Self Examination"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingTop: SIZES.screenHeight * 0.02,
            paddingBottom: SIZES.screenHeight * 0.03,
          }}
        >
          <View style={styles.container}>
            <View style={styles.videoContainer}>
              <Video
                posterSource={images.people}
                posterStyle={{
                  width: "100%",
                  height: 200,
                  resizeMode: "cover",
                  opacity: 0.6,
                }}
                usePoster={true}
                ref={video}
                style={styles.video}
                source={{
                  uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </View>

            {!status.isPlaying && (
              <TouchableOpacity
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 12,
                  borderRadius: 50,
                  alignItems: "center",
                  alignSelf: "center",
                  position: "absolute",
                  top: SIZES.screenWidth * 0.18,
                  backgroundColor: "#FFBE9D",
                }}
              >
                <Icon name="play" size={42} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              marginTop: SIZES.screenHeight * 0.03,
              paddingHorizontal: 10,
            }}
          >
            <Text style={{ fontFamily: "Poppins_Regular" }}>
              Above is a video, explaining the self check process. We have a
              detailed explaination below. This is to help you undertand the
              self check properly
            </Text>
          </View>
          <View style={{ marginHorizontal: 8 }}>
            {selfExamine.map((item, index) => {
              return (
                <View key={index}>
                  <Text
                    style={{
                      fontFamily: "Poppins_Medium",
                      fontSize: 16,
                      marginTop: SIZES.screenHeight * 0.03,
                    }}
                  >
                    {` Phase ${item.phase}: `}
                    <Text style={{}}>{item.title}</Text>
                  </Text>
                  <ImageBackground
                    imageStyle={{ borderRadius: 12 }}
                    source={item.img}
                    style={{
                      width: "100%",
                      height: SIZES.screenHeight * 0.22,
                      marginTop: SIZES.screenHeight * 0.02,
                    }}
                  ></ImageBackground>
                  <View style={{ marginTop: SIZES.screenHeight * 0.02 }}>
                    <Text style={{ fontFamily: "Poppins_Regular" }}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontFamily: "Poppins_Medium" }}>
                      Steps to Follow
                    </Text>
                    {item.steps.map((step, index) => (
                      <Text
                        key={index}
                        style={{
                          paddingLeft: 10,
                          fontFamily: "Poppins_Regular",
                          fontSize: 14,
                          marginTop: 10,
                          lineHeight: 22,
                        }}
                      >
                        {`\u2023 ${step.i}`}
                      </Text>
                    ))}
                  </View>
                </View>
              );
            })}
            <View
              style={{
                marginTop: SIZES.screenHeight * 0.035,
              }}
            >
              <Text style={{ fontFamily: "Poppins_Medium", marginBottom: 10 }}>
                General Tips
              </Text>
              {tips.map((tip, index) => (
                <Text
                  key={index}
                  style={{ fontFamily: "Poppins_Regular", lineHeight: 24 }}
                >{`\u29BF ${tip}`}</Text>
              ))}
            </View>
            <View
              style={{
                marginTop: SIZES.screenHeight * 0.05,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ alignSelf: "flex-start" }}>
                <AppButton
                  text="Talk to a Doctor"
                  color={COLORS.primary}
                  onPress={() => navigation.navigate("Specialists")}
                />
              </View>
              <View style={{ marginLeft: 5 }}>
                <AppButton
                  text="Book Mamogram "
                  color={COLORS.primary}
                  onPress={() => navigation.navigate("Hospitals")}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SelfExamination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  playContainer: {},
});
