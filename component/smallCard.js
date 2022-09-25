import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const SmallCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={17}
        width={25}
        borderWidth={props.text != props.active ? 0.4 : 0}
        borderRadius={10}
        backgroundColor={props.bgColor}
        borderColor={props.text != props.active ? Colors.appGrey : null}
        horizontalAlignment={'center'}
        verticalAlignment={'center'}>
        <ImageWrap source={props.image} height={5} width={10} fit={'contain'} />
        <Container marginTop={2}>
          <H1
            color={
              props.bgColor != Colors.appPrimary
                ? Colors.appBrown
                : Colors.appWhite
            }
            size={Fonts.semiMedium}>
            {props.text}
          </H1>
        </Container>
      </Container>
    </TouchWrap>
  );
};
