import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS, images, SIZES } from '../../utility';
import { AppStatusBar, CustomStatusBar } from '../../components';
import useFetch from '../../hooks/useFetch';
import { useHospitals } from '../../api/hospitals';

const dummyData = [
  {
    id: 1,
    name: 'Laquintinie Hospital',

    phone: '+237671189571',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: require('../../../assets/images/hospital1.jpg'),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Universtity OF Buea',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    services: [
      { value: 'chemotherapy', name: 'Chemotherapy' },
      { value: 'immunotherapy', name: 'Immunotherapy' },
      { value: 'radiotherapy', name: 'Radiotherapy' },
    ],
    availability: [
      {
        id: 1,
        day: 'Monday',
        time: '10:00AM - 2:00PM',
      },
      {
        id: 2,
        day: 'Wednesday',
        time: '12:00PM - 2:00PM',
      },
      {
        id: 3,
        day: 'Friday',
        time: '12:00PM - 2:00PM',
      },
    ],
    rating: '5.0',
    fee: [
      {
        id: 1,
        name: 'Consultation',
        price: 'XAF 1000',
      },
      {
        id: 2,
        name: 'Mammography',
        price: 'XAF 2000',
      },
    ],
  },
  {
    id: 2,
    name: 'Laquintinie Hospital',

    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: require('../../../assets/images/hospital2.png'),

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Universtity OF Buea',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    services: [
      { value: 'chemotherapy', name: 'Chemotherapy' },
      { value: 'immunotherapy', name: 'Immunotherapy' },
      { value: 'radiotherapy', name: 'Radiotherapy' },
    ],

    availability: [
      {
        id: 1,
        day: 'Monday',
        time: '10:00AM - 2:00PM',
      },
      {
        id: 2,
        day: 'Wednesday',
        time: '12:00PM - 2:00PM',
      },
      {
        id: 3,
        day: 'Friday',
        time: '12:00PM - 2:00PM',
      },
    ],
    rating: '5.0',
    fee: [
      {
        id: 1,
        name: 'Consultation',
        price: 'XAF 1000',
      },
      {
        id: 2,
        name: 'Mammography',
        price: 'XAF 2000',
      },
    ],
  },
  {
    id: 3,
    name: 'Laquintinie Hospital',

    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: require('../../../assets/images/hospital1.jpg'),

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Universtity OF Buea',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    services: [
      { value: 'chemotherapy', name: 'Chemotherapy' },
      { value: 'immunotherapy', name: 'Immunotherapy' },
      { value: 'radiotherapy', name: 'Radiotherapy' },
    ],

    availability: [
      {
        id: 1,
        day: 'Monday',
        time: '10:00AM - 2:00PM',
      },
      {
        id: 2,
        day: 'Wednesday',
        time: '12:00PM - 2:00PM',
      },
      {
        id: 3,
        day: 'Friday',
        time: '12:00PM - 2:00PM',
      },
    ],
    rating: '5.0',
    fee: [
      {
        id: 1,
        name: 'Consultation',
        price: 'XAF 1000',
      },
      {
        id: 2,
        name: 'Mammography',
        price: 'XAF 2000',
      },
    ],
  },
  {
    id: 4,
    name: 'Laquintinie Hospital',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: require('../../../assets/images/hospital1.jpg'),

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    services: [
      { value: 'chemotherapy', name: 'Chemotherapy' },
      { value: 'immunotherapy', name: 'Immunotherapy' },
      { value: 'radiotherapy', name: 'Radiotherapy' },
    ],
    availability: [
      {
        id: 1,
        day: 'Monday',
        time: '10:00AM - 2:00PM',
      },
      {
        id: 2,
        day: 'Wednesday',
        time: '12:00PM - 2:00PM',
      },
      {
        id: 3,
        day: 'Friday',
        time: '12:00PM - 2:00PM',
      },
    ],
    rating: '5.0',
    fee: [
      {
        id: 1,
        name: 'Consultation',
        price: 'XAF 1000',
      },
      {
        id: 2,
        name: 'Mammography',
        price: 'XAF 2000',
      },
    ],
  },
  {
    id: 5,
    name: 'Laquintinie Hospital',

    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: require('../../../assets/images/hospital1.jpg'),

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    work: 'Hopital General',
    education: 'Phd in Public Health',
    experience: '2',
    patients: '10',
    services: [
      { value: 'chemotherapy', name: 'Chemotherapy' },
      { value: 'immunotherapy', name: 'Immunotherapy' },
      { value: 'radiotherapy', name: 'Radiotherapy' },
    ],

    availability: [
      {
        id: 1,
        day: 'Monday',
        time: '10:00AM - 2:00PM',
      },
      {
        id: 2,
        day: 'Wednesday',
        time: '12:00PM - 2:00PM',
      },
      {
        id: 3,
        day: 'Friday',
        time: '12:00PM - 2:00PM',
      },
    ],
    rating: '5.0',
    fee: [
      {
        id: 1,
        name: 'Consultation',
        price: 'XAF 1000',
      },
      {
        id: 2,
        name: 'Mammography',
        price: 'XAF 2000',
      },
    ],
  },
  {
    id: 6,
    name: 'Laquintinie Hospital',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: require('../../../assets/images/hospital1.jpg'),

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Phd in Public Health',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    services: [
      { value: 'chemotherapy', name: 'Chemotherapy' },
      { value: 'immunotherapy', name: 'Immunotherapy' },
      { value: 'radiotherapy', name: 'Radiotherapy' },
    ],

    availability: [
      {
        id: 1,
        day: 'Monday',
        time: '10:00AM - 2:00PM',
      },
      {
        id: 2,
        day: 'Wednesday',
        time: '12:00PM - 2:00PM',
      },
      {
        id: 3,
        day: 'Friday',
        time: '12:00PM - 2:00PM',
      },
    ],
    rating: '5.0',
    fee: [
      {
        id: 1,
        name: 'Consultation',
        price: 'XAF 1000',
      },
      {
        id: 2,
        name: 'Mammography',
        price: 'XAF 2000',
      },
    ],
  },
];

const Hospitals = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const { loading, data, error } = useHospitals();

  console.log('====================================');
  console.log('From all Hospitals', data);
  console.log('====================================');

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
            {dummyData.map((data) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('detailHospitals', data)}
                key={data.id}
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
                <ImageBackground
                  imageStyle={{ borderRadius: 8 }}
                  style={{
                    width: '100%',
                    height: SIZES.screenHeight * 0.2,
                    alignSelf: 'center',
                  }}
                  source={data.image}
                  resizeMode="cover"
                ></ImageBackground>

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
                      {data.name}
                    </Text>
                    <Icon name="heart-outline" size={22} />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    {data.services
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
                            {service.name}
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
                      Location of hospital
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            {/* <FlatList
                columnWrapperStyle={{ marginHorizontal: 5 }}
                contentContainerStyle={{
                  alignItems: "center",
                  paddingBottom: SIZES.screenHeight * 0.076,
                }}
                data={dummyData}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                  <View
                    style={{
                      marginHorizontal: 10,
                      backgroundColor: "#FAFAFA",
                      padding: 10,
                      borderRadius: 8,
                      shadowColor: "#000",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.2,
                      marginBottom: 10,
                      elevation: 2,
                    }}
                  >
                    <View style={{ paddingHorizontal: 4 }}>
                      <View>
                        <Image
                          source={item.image}
                          style={{
                            width: SIZES.screenWidth * 0.35,
                            height: SIZES.screenWidth * 0.34,
                            borderRadius: 8,
                          }}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{ marginHorizontal: 5 }}>
                        <Text>{item.name}</Text>
                        <Text
                          style={{ width: SIZES.screenWidth * 0.3 }}
                          numberOfLines={1}
                        >
                          {item.services.join(",")}
                        </Text>
                        <Text
                          style={{ width: SIZES.screenWidth * 0.3 }}
                          numberOfLines={1}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
              /> */}
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
