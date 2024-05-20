import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colors, shadow } from '../constants/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FavoriteButton = ({ style }) => {
  const [active, setActive] = useState(false);
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}>
      <TouchableOpacity onPress={() => setActive((state) => !state)}>
        <MaterialIcons name={active ? 'favorite' : 'favorite-outline'} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteButton;
