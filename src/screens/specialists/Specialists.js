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

import { COLORS, images, SIZES } from '../../utility';
import { AppStatusBar, CustomStatusBar } from '../../components';
import useFetch from '../../hooks/useFetch';
import { useSpecialists } from '../../api/specialist';

const dummyData = [
  {
    id: 1,
    name: 'Kabi Faith Neol',
    phone: '+237671189571',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: images.doc1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Universtity OF Buea',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    speciality: 'Breast Cancer',
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
  },
  {
    id: 2,
    name: 'James Bond',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: images.doc2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Universtity OF Buea',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    speciality: 'Breast Cancer',
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
  },
  {
    id: 3,
    name: 'James Bond',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: images.doc3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Universtity OF Buea',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    speciality: 'Breast Cancer',
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
  },
  {
    id: 4,
    name: 'James Bond',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: images.doc4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    speciality: 'Breast Cancer',
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
  },
  {
    id: 5,
    name: 'James Bond',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: images.doc5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    work: 'Hopital General',
    education: 'Phd in Public Health',
    experience: '2',
    patients: '10',
    speciality: 'Breast Cancer',
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
  },
  {
    id: 6,
    name: 'James Bond',
    phone: '+237673993113',
    email: 'yuyunfrancis95@gmail.com',
    location: 'Douala, Cameroon',
    image: images.doc6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ',
    education: 'Phd in Public Health',
    work: 'Hopital General',
    experience: '2',
    patients: '10',
    speciality: 'Breast Cancer',
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
  },
];

const Specialists = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const { loading, data, error } = useSpecialists();

  console.log(data, 'From specialists query');
  return (
    <>
      <AppStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <CustomStatusBar />
      <SafeAreaView style={styles.container}>
        <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                  fontFamily: 'Poppins_Regular',
                }}
                iconColor="#D2D1D1"
              />
            </View>
            <View>
              <Text style={{ fontFamily: 'Poppins_Medium', color: '#333333' }}>
                Get connected with the best specialists
              </Text>
              <View style={styles.card}>
                {dummyData.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.cardContent}
                    onPress={() =>
                      navigation.navigate('SpecialistDetails', item)
                    }
                  >
                    <View style={{ paddingHorizontal: 4 }}>
                      <View>
                        <Image
                          source={item.image}
                          style={styles.imge}
                          resizeMode="cover"
                        />
                      </View>
                      <View style={{ marginTop: 8 }}>
                        <Text
                          style={{
                            fontFamily: 'Poppins_SemiBold',
                            fontSize: 14,
                            color: COLORS.primary,
                            marginBottom: 2,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            width: SIZES.screenWidth * 0.3,
                            fontFamily: 'Poppins_Regular',
                            fontSize: 12,
                            color: '#AEADAD',
                          }}
                          numberOfLines={1}
                        >
                          {item.speciality}
                        </Text>
                        <Text
                          style={{
                            width: SIZES.screenWidth * 0.3,
                            fontFamily: 'Poppins_Regular',
                            fontSize: 13,
                          }}
                          numberOfLines={1}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>

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
                          {item.speciality.join(",")}
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
        </View>
      </SafeAreaView>
    </>
  );
};

export default Specialists;

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
