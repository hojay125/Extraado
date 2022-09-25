import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, P} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NumberFormat from 'react-number-format';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const ServiceCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={10}
        width={90}
        marginTop={1}
        paddingLeft={3}
        paddingRight={3}
        borderBottomWidth={1}
        borderRadius={8}
        backgroundColor={
          props.bgColor ? props.backgroundColor : Colors.appWhite
        }
        borderColor={Colors.appGrey}
        horizontalAlignment={'space-between'}
        direction={'row'}
        verticalAlignment={'center'}>
        <Container width={50}>
          <H1 color={'#434343'} size={Fonts.small}>
            {props.text1}
          </H1>
          <Container direction={'row'}>
            <NumberFormat
              value={props.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'\u20A6'}
              fixedDecimalScale={true}
              decimalScale={0}
              renderText={formattedValue => (
                <H1 color={'#434343'} size={Fonts.small}>
                  {formattedValue}
                </H1>
              )} // <--- Don't forget this!
            />
            {/* <H1 color={'#434343'} size={Fonts.small}>
              {props.price}
            </H1> */}
            <Container marginLeft={2}>
              <P color={'#434343'} size={Fonts.small}>
                {props.text3}
              </P>
            </Container>
          </Container>
        </Container>

        <TouchWrap onPress={props.onPress}>
          <Container
            width={29}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            borderColor={Colors.appPrimary}
            height={5}
            borderWidth={1}
            borderRadius={10}>
            <P color={Colors.appPrimary} size={Fonts.small}>
              Book
            </P>
          </Container>
        </TouchWrap>
      </Container>
    </TouchWrap>
  );
};
