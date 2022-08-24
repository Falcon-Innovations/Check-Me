import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { COLORS, images, SIZES } from '../../utility';
import { AppButton, AppStatusBar, DashboardCard } from '../../components';
import { Context as AuthContext } from '../../contexts/userContext';

const tips = [
  {
    id: 1,
    img: images.tip1,
    title: 'Balanced Diet',
  },
  {
    id: 2,
    img: images.tip2,
    title: 'Constant Exercise',
  },
  {
    id: 3,
    img: images.tip3,
    title: 'Regular Checkup',
  },
];

const Dashboard = () => {
  const { state, logout } = React.useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Are you sure you want to logout?',
      'This action will sign you out of this device',
      [
        {
          text: 'Confirm',
          onPress: () => logout(),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]
    );
  };

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.greeting}>Welcome!!</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileOverview')}
                style={styles.nameContainer}
              >
                <Text style={styles.name}>
                  {state?.user?.name.split(' ').shift().charAt(0) +
                    state?.user?.name.split(' ').pop().charAt(0)}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={{
                    height: SIZES.screenHeight * 0.2,
                    width: SIZES.screenWidth * 0.423,
                  }}
                  source={images.nurse}
                  resizeMode="contain"
                />
              </View>
              <View>
                <View style={{ marginBottom: 10 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#fff',
                      fontFamily: 'Poppins_Medium',
                      marginBottom: 5,
                    }}
                  >
                    Do your own test
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#fff',
                      fontFamily: 'Poppins_Regular',
                    }}
                  >
                    How do you feel today?
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#fff',
                      fontFamily: 'Poppins_Regular',
                    }}
                  >
                    Take today's test
                  </Text>
                </View>
                <View style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                  <Button
                    mode="contained"
                    labelStyle={styles.testBtn}
                    // onPress={() => navigation.navigate("Login")}
                    // onPress={handleLogout}
                    uppercase={false}
                    theme={{ colors: { primary: '#fff' } }}
                  >
                    Test now
                  </Button>
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, paddingTop: 15 }}>
            <View>
              <Text style={{ fontFamily: 'Poppins_SemiBold', fontSize: 14 }}>
                Healthy Life Style
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
              >
                {tips.map((tip) => (
                  <View
                    key={tip.id}
                    style={{ alignItems: 'center', marginVertical: 10 }}
                  >
                    <View style={styles.tips}>
                      <Image
                        source={tip.img}
                        style={{
                          width: SIZES.screenWidth * 0.22,
                          height: SIZES.screenWidth * 0.22,
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 9.5,
                        fontFamily: 'Poppins_Medium',
                        marginTop: 5,
                      }}
                    >
                      {tip.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <DashboardCard />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    height: SIZES.screenHeight * 0.34,
    paddingHorizontal: 15,

    width: '100%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 18,
  },
  // imageContainer: {
  //   height: SIZES.screenHeight * 0.22,
  //   width: SIZES.screenWidth * 0.3,
  // },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.screenHeight * 0.01,
    marginHorizontal: 10,
  },
  nameContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  name: {
    color: COLORS.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Poppins_Bold',
    fontSize: 16,
  },
  greeting: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins_SemiBold',
  },
  testBtn: {
    color: COLORS.primary,
    fontFamily: 'Poppins_Medium',
    justifyContent: 'center',
  },
  tips: {
    padding: 10,
    backgroundColor: '#FFE1E1',
    alignItems: 'center',
    borderRadius: SIZES.screenWidth,
  },
});
