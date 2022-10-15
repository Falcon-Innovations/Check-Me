import React from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import {COLORS, SIZES} from '../../utility'
import {CustomImageBackground} from '../custom-image-background/custom-image-background'
import Icon from 'react-native-vector-icons/Ionicons';


export const HospitalCard = ({onPress, imgSrc, name, services, town}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
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
                shadowOffset: {width: 3, height: 3},
                shadowOpacity: 1.0,
            }}
        >
            <CustomImageBackground imgSrc={imgSrc} />
            <View style={{paddingHorizontal: 4, marginTop: 14}}>
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
                        {name}
                    </Text>
                    <Icon name="heart-outline" size={22} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    {services
                        .map((service, index) => (
                            <>
                                <Text
                                    key={`${service}-${index}`}
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
                        {town}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
