import React from 'react'
import {View, Text} from 'react-native'
import Icons from "react-native-vector-icons/Entypo";
import {COLORS} from '../../utility';
import AppButton from '../utils/AppButton';


export const ErrorFallback = () => {
    return (
        <View style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Icons name="emoji-sad" size={64} color={COLORS.primary} />
                <Text
                    style={{
                        marginVertical: 10
                    }}>
                    Oops! Something went wrong
                </Text>
                <AppButton
                    text="Try again"
                    color={COLORS.primary}
                    onPress={
                        () => console.warn('Err handler called')
                    }
                />
            </View>
        </View>
    )
}
