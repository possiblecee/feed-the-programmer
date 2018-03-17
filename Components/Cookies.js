import React from 'react';
import { Image, View, Text } from 'react-native';
import s from './Cookies.style';
import { FOOD_NAMES, FOOD_IMAGES, COOKIE_TYPES } from '../redux/user';

const renderCookies = (items) => {
  const cookies = items.filter(({ type }) => type !== COOKIE_TYPES.DEFAULT).reduce((acc, b) => ({
    ...acc,
    [b.type]: [...(acc[b.type] || []), b],
  }), {});

  return Object.keys(cookies).map((type) => (
    <View style={s.item} key={type}>
      <View style={s.imageWrapper}>
        <Image style={s.image} source={FOOD_IMAGES[type]} />
        <View style={s.badgeWrapper}>
          <Text style={s.badge} children={cookies[type].length} />
        </View>
      </View>
      <Text style={s.text} children={FOOD_NAMES[type]} />
    </View>
  ));
}

const Cookies = ({ cookies, style }) => (
  <View style={[s.root, style]} children={renderCookies(cookies)} />
);

export default Cookies;
