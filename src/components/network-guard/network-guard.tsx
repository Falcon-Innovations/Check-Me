import React, {useState, useEffect} from 'react'
import * as Network from 'expo-network';
import {View, Text} from 'react-native'
import Icons from "react-native-vector-icons/Feather";
import {COLORS} from '../../utility';
import AppButton from '../utils/AppButton';


export const NetworkGuard = ({children}) => {
    const [networkData, setNetworkData] = useState(null)

    useEffect(() => {
        Network.getNetworkStateAsync()
            .then((response) => setNetworkData(response))
            .catch((e) => console.error(e))
    }, [networkData])

    if (!networkData?.isConnected && !networkData?.isInternetReachable) {
        return (
            <View style={{justifyContent: 'center', alignSelf: 'center', flex: 1}}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Icons name="cloud-off" size={64} color={COLORS.primary} />
                    <Text
                        style={{
                            marginVertical: 10
                        }}>
                        Oops! It seems like you are not connected
                    </Text>
                    <AppButton
                        text="Try again"
                        color={COLORS.primary}
                        onPress={
                            () => setNetworkData(null)
                        }
                    />
                </View>
            </View>
        )
    }


    return (
        <>{children}</>
    )
}
