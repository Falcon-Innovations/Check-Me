import React from 'react'
import {View, Text} from 'react-native'
import {COLORS} from '../../utility'
import AppButton from '../utils/AppButton'

export const ErrorFallback = () => {
    return (
        <View>
            <Text>Oops! somethign went wrong</Text>
            <AppButton
                color={COLORS.primary}
                onPress={
                    () => console.warn("Err, handler called")
                }
                text="Try again"
            />
        </View>
    )
}
