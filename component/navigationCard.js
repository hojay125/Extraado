import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';

import Feather from 'react-native-vector-icons/Feather';
import {Fonts} from '../helper/fontSize';
export const NavigationCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={7}
        width={13}
        borderWidth={1}
        borderRadius={13}
        backgroundColor={props.backgroundColor}
        borderColor={Colors.appGrey}
        horizontalAlignment={'center'}
        verticalAlignment={'center'}>
        <Feather
          name="navigation"
          size={Fonts.semiBig}
          color={Colors.appPrimary}
        />
      </Container>
    </TouchWrap>
  );
};
