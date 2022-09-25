import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P, H2} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const NotReviewedCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        width={90}
        marginTop={1}
        marginBottom={6}
        paddingLeft={2}
        paddingRight={3}
        borderRadius={8}
        borderColor={Colors.appGrey}
        horizontalAlignment={'space-between'}>
        <Container width={80} direction={'row'}>
          <Container width={50}>
            <H1 size={Fonts.semiMedium}>Elegance Barbers</H1>
            <P>18, Columbia street, Wale Olefina</P>
            <P>Visited on 20 Feb 2020</P>
          </Container>
          <Container
            width={30}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <P>No ratings</P>
          </Container>
        </Container>
        <Container width={80} marginTop={1}>
          <H1 size={Fonts.semiMedium}>Gents Wash, Pedicure & Manicure</H1>
        </Container>

        <Container
          width={80}
          backgroundColor={Colors.appPrimary}
          marginTop={1}
          height={3}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P size={Fonts.semiMedium} color={Colors.appWhite}>
            LEAVE REVIEW?
          </P>
        </Container>
      </Container>
    </TouchWrap>
  );
};
