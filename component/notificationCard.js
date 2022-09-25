import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1,P} from '../helper/element';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
export const NotificationCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={10}
        width={90}
        marginTop={2}
        paddingLeft={3}
        paddingRight={3}
        borderWidth={1}
        borderRadius={8}
        backgroundColor={
          props.bgColor ? props.backgroundColor : Colors.appWhite
        }
        borderColor={Colors.appGrey}
        horizontalAlignment={'space-between'}
        direction={'row'}
        verticalAlignment={'center'}>
         <Container
          height={7}
          width={14}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}
          borderRadius={50}
          backgroundColor={ props.type=='cancelled'? '#fa9b93':'#D5DBE1'}>
            <FontAwesome
            name="calendar-check-o"
            size={Fonts.big}
            color={props.type=='cancelled'? '#FF3A2A':'#017691'}
          /> 
            </Container>
       
        <Container  width={50}>
          <H1 color={'#434343'} size={Fonts.semiMedium} textAlign={'center'}>
           {props.text}
          </H1>
          <Container >
            <P color={'#434343'} size={Fonts.small} textAlign={'center'}>
              {props.smallText}
            </P>
          </Container>
        </Container>

        <Container width={15} >
          <P color={'#434343'} size={Fonts.small} textAlign={'center'}>
       {props.time}
            </P>
        </Container>
      </Container>
    </TouchWrap>
  );
};
