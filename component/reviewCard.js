import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P, H2} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const ReviewCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        width={90}
        marginTop={1}
        marginBottom={2}
        paddingLeft={2}
        paddingRight={3}
        borderRadius={8}
        borderColor={Colors.appGrey}
        horizontalAlignment={'space-between'}>
        <Container direction={'row'}>
          <Container marginLeft={2}>
            <ImageWrap
              source={AppIcons.barber2}
              height={7}
              width={13}
              marginTop={1}
              borderRadius={10}
            />
          </Container>
          <Container
            width={73}
            verticalAlignment={'center'}
            direction={'row'}
            height={10}>
            <Container marginLeft={3} width={30}>
              <H2 size={Fonts.semiMedium}>The Beauty Shop</H2>
              <P>28 Feb 2020, 15:40</P>
            </Container>

            <Container marginLeft={3} width={25} direction={'row'}>
              <Entypo
                name="star"
                size={Fonts.semiBig}
                color={Colors.appBlack}
              />
              <Entypo
                name="star"
                size={Fonts.semiBig}
                color={Colors.appBlack}
              />
              <Entypo
                name="star"
                size={Fonts.semiBig}
                color={Colors.appBlack}
              />
              <Entypo
                name="star"
                size={Fonts.semiBig}
                color={Colors.appBlack}
              />
            </Container>
            <Container marginLeft={3} width={10}>
              <H2 size={Fonts.semiMedium}>4.0</H2>
            </Container>
          </Container>
        </Container>
        <Container width={80} marginBottom={5}>
          <P>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          </P>
        </Container>
      </Container>
    </TouchWrap>
  );
};
