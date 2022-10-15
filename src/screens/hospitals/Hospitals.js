import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, images, SIZES } from '../../utility';
import { AppStatusBar, CustomStatusBar } from '../../components';
import { useHospitals } from '../../api/hospitals';
import SimpleLoader from '../../components/utils/SimpleLoader';
import { CustomImageBackground } from '../../components/custom-image-background/custom-image-background';
import { HospitalCard } from '../../components/hospital-card/hospital-card';

const Hospitals = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const { loading, data, error } = useHospitals();

  console.log('====================================');
  console.log('From all Hospitals', data?.data?.docs);
  console.log('====================================');

  if (loading) {
    return <SimpleLoader />;
  }

  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar text="Hospitals" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginHorizontal: 20 }}
        >
          <View style={{ marginVertical: 20 }}>
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
                fontFamily: 'Poppins_Regular',
              }}
              iconColor="#D2D1D1"
            />
          </View>
          <View>
            <Text style={{ fontFamily: 'Poppins_Medium', color: '#333333' }}>
              Find the nearest hospital for your screening and consultation
            </Text>
            {data?.data?.docs?.map((item) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('detailHospitals', item)}
                key={item?._id}
                style={{
                  marginTop: SIZES.screenHeight * 0.025,
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  paddingBottom: 14,
                  width: '100%',
                  alignSelf: 'center',
                  borderRadius: 8,
                  borderColor: '#d3d3d3',
                  backgroundColor: '#FAFAFA',
                  marginBottom: 14,
                  shadowColor: '#d3d3d3',
                  shadowOffset: { width: 3, height: 3 },
                  shadowOpacity: 1.0,
                }}
              >
                <CustomImageBackground imgSrc={item?.logo} />
                <View style={{ paddingHorizontal: 4, marginTop: 14 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Poppins_SemiBold',
                        fontSize: 16,
                        color: COLORS.primary,
                      }}
                      numberOfLines={1}
                    >
                      {item?.name}
                    </Text>
                    <Icon name="heart-outline" size={22} />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    {item?.services
                      .map((service, index) => (
                        <>
                          <Text
                            key={index}
                            style={{
                              fontFamily: 'Poppins_Regular',
                              fontSize: 14,
                              color: '#AEADAD',
                              marginBottom: 4,
                              marginRight: 4,
                            }}
                            numberOfLines={1}
                          >
                            {service}
                          </Text>
                        </>
                      ))
                      .slice(0, 2)}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 4,
                    }}
                  >
                    <Icon
                      name="ios-location-outline"
                      size={18}
                      color="#222222"
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins_Regular',
                        fontSize: 13,
                        color: '#222222',
                        marginLeft: 6,
                      }}
                      numberOfLines={1}
                    >
                      {item?.town}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: SIZES.screenHeight * 0.03,
    justifyContent: 'center',
  },
  cardContent: {
    marginHorizontal: 7,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: '#FAFAFA',
    width: SIZES.screenWidth * 0.43,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
    elevation: 2,
    alignItems: 'center',
  },
  imge: {
    width: SIZES.screenWidth * 0.38,
    height: SIZES.screenWidth * 0.38,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
