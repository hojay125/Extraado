import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P, H2} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const ReviewCard2 = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        width={90}
        marginTop={1}
        marginBottom={2}
        paddingLeft={2}
        paddingRight={3}
        borderRadius={8}
        borderColor={Colors.appGrey}>
        <Container direction={'row'}>
          <Container marginLeft={2} marginTop={2}>
            <ImageWrap
              source={AppIcons.barber2}
              height={5}
              width={10}
              marginTop={1}
              borderRadius={100}
            />
          </Container>
          <Container
            width={73}
            verticalAlignment={'center'}
            direction={'row'}
            height={10}>
            <Container marginLeft={3} width={30}>
              <H2 size={Fonts.small}>The Beauty Shop</H2>
              <P>28 Feb 2020, 15:40</P>
            </Container>

            <Container marginLeft={15} width={25} direction={'row'}>
              <StarRating
                disabled={false}
                emptyStar={'star-o'}
                fullStar={'star'}
                halfStar={'star-half'}
                iconSet={'FontAwesome'}
                maxStars={5}
                rating={4}
                starSize={13}
                fullStarColor={'black'}
              />
            </Container>
            <Container marginLeft={0} width={10}>
              <H2 size={Fonts.semiMedium}>4.0</H2>
            </Container>
          </Container>
        </Container>
        <Container
          width={90}
          marginBottom={5}
          paddingHorizontal={5}
          marginLeft={5}>
          <P>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </P>
        </Container>
      </Container>
    </TouchWrap>
  );
};
