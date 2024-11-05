import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomTabButton from '../Components/CustomTabButton';

const MyTabBar: FC<BottomTabBarProps> = props => {
  const {state, descriptors, navigation} = props;
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon: ImageSourcePropType | undefined = undefined;

        switch (label) {
          case 'Catalog':
            icon = require('../../assets/icons/Catalog.png');
            break;
          case 'Cart':
            icon = require('../../assets/icons/Cart.png');
            break;
          case 'Favorit':
            icon = require('../../assets/icons/Favorit.png');
            break;
          case 'Profile':
            icon = require('../../assets/icons/Profile.png');
            break;
        }

        const getbadge = () => {
          const badge = Number(options.tabBarBadge);
          if (isNaN(Number(badge)) || badge <= 0) {
            return undefined;
          }

          return badge;
        };
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <CustomTabButton
              bagde={getbadge()}
              img={icon}
              isSelected={isFocused}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MyTabBar;
