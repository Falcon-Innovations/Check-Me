import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../../utility';

export default function SimpleLoader() {
  return (
    <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}
