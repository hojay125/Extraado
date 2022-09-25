import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const TransactionCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={10}
        paddingHorizontal={1}
        width={90}
        marginTop={2}
        borderColor={Colors.appGrey}
        horizontalAlignment={'space-between'}
        direction={'row'}
        verticalAlignment={'center'}>
        <Container
          width={10}
          height={10}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}>
          <ImageWrap
            source={AppIcons.appLogo}
            height={5}
            width={10}
            fit={'contain'}
          />
        </Container>
        <Container width={40} marginLeft={2}>
          <P>Hair Cut</P>

          <Container>
            <P color={Colors.appGrey}>Today, Mar 8</P>
          </Container>
        </Container>

        <Container width={30} marginLeft={2} horizontalAlignment={'flex-end'}>
          <P color={Colors.appPrimary}>N 2500.00</P>

          <Container>
            <P color={Colors.appGrey}>Fantasia Place</P>
          </Container>
        </Container>
      </Container>
    </TouchWrap>
  );
};
