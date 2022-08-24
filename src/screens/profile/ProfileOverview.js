import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { Context as AuthContext } from '../../contexts/userContext';
import { AppStatusBar, CustomStatusBar } from '../../components';
import { COLORS, images } from '../../utility';
import { Alert } from 'react-native';

const profile = [
  {
    title: 'Plan your health',
    screen: 'PersonalDashboard',
  },
  {
    title: 'Personal Dashboard',
    screen: 'PersonalDashboard',
  },
  {
    title: 'Edit profile',
    screen: 'EditProfile',
  },
  {
    title: 'Subscriptions',
    screen: 'PersonalDashboard',
  },

  {
    title: 'Settings',
    screen: 'Settings',
  },
];

const ProfileOverview = () => {
  const { state, logout } = React.useContext(AuthContext);

  console.log('====================================');
  console.log('user', state?.user);
  console.log('====================================');

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
      <CustomStatusBar text={'Profile'} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 20 }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}
          >
            <View style={{ marginRight: 15 }}>
              <View
                style={{
                  height: 70,
                  width: 70,
                  backgroundColor: '#ECECEC',
                  borderRadius: 70,
                }}
              >
                <View style={[styles.image, styles.shadowProp]}>
                  <Image
                    source={images.doc2}
                    style={{ height: 65, width: 65, borderRadius: 25 }}
                  />
                </View>
              </View>
            </View>
            <View>
              <Text style={{ fontFamily: 'Poppins_Medium', fontSize: 16 }}>
                {state?.user?.name}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins_Regular',
                  fontSize: 12,
                  color: '#AEADAD',
                  marginTop: 2,
                }}
              >
                {state?.user?.email}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 15, marginBottom: 25 }}>
            <Divider orientation="horizontal" color="#C6C4C4" />
          </View>
          <View>
            {profile.map((item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screen, state?.user)}
                key={item.title}
                style={{
                  paddingHorizontal: 12,
                  paddingVertical: 15,
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: '#F1B9D6',
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 14 }}>
                    {item.title}
                  </Text>
                  <Icon
                    name="md-chevron-forward-sharp"
                    size={28}
                    color={'#8A8A8A'}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <TouchableOpacity
              onPress={handleLogout}
              style={{
                paddingHorizontal: 12,
                paddingVertical: 15,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#F1B9D6',
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 14 }}>
                  Logout
                </Text>
                <Icon
                  name="md-chevron-forward-sharp"
                  size={28}
                  color={'#8A8A8A'}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileOverview;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    backgroundColor: 'transparent',
    height: 65,
    width: 65,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 8,
  },
});
