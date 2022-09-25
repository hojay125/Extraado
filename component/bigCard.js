import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../helper';

import {Colors} from '../helper/constants';
import {H1, H2, P} from '../helper/element';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../helper/fontSize';
import {AppIcons} from '../helper/images';
import NumberFormat from 'react-number-format';
export const BigCard = props => {
  return (
    <TouchWrap onPress={props.onPress}>
      <Container
        height={props.active ? 45 : 35}
        width={90}
        marginBottom={2}
        borderWidth={0.2}
        padding={5}
        borderRadius={7}
        backgroundColor={'#F9F9F9'}
        borderColor={Colors.appGrey}>
        <ImageWrap url={props.image} height={20} width={80} borderRadius={10}>
          <Container flex={1} backgroundColor={'rgba(0,0,0,0.3)'}></Container>
        </ImageWrap>
        <Container
          height={5}
          borderRadius={10}
          width={80}
          verticalAlignment={'center'}
          direction={'row'}
          marginTop={-19}>
          <Container
            height={4}
            paddingHorizontal={5}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            borderRadius={15}
            marginLeft={5}
            backgroundColor={'rgba(255,255,255,0.5)'}>
            <P> Open (Closes at 10pm)</P>
          </Container>
          {!props.contain ? (
            <TouchWrap onPress={props.onTap}>
              <Container marginLeft={20} width={20} height={5}>
                <Container marginLeft={5}>
                  <FontAwesome
                    name="bookmark"
                    size={20}
                    color={Colors.appWhite}
                  />
                </Container>
              </Container>
            </TouchWrap>
          ) : (
            <TouchWrap onPress={props.onRemove}>
              <Container marginLeft={20} width={20} height={5}>
                <Container marginLeft={5}>
                  <FontAwesome name="heart" size={20} color={Colors.appRed} />
                </Container>
              </Container>
            </TouchWrap>
          )}
        </Container>

        <Container
          marginTop={14}
          borderRadius={15}
          direction={'row'}
          width={80}>
          <Container
            width={40}
            direction={'row'}
            height={5}
            verticalAlignment={'center'}>
            <H1 size={Fonts.semiMedium}>{props.name}</H1>
          </Container>
          <Container
            width={40}
            height={5}
            verticalAlignment={'center'}
            direction={'row'}
            horizontalAlignment={'space-evenly'}>
            <Container marginLeft={15}>
              <H1 size={Fonts.semiMedium} color={Colors.appGrey}>
                (24)
              </H1>
            </Container>
            <Container marginLeft={1}>
              <H1 size={Fonts.semiMedium} color={Colors.appBlack}>
                {props.rate}
              </H1>
            </Container>
            <Container>
              <FontAwesome
                name="star-o"
                size={Fonts.semiBig}
                color={Colors.appBlack}
              />
            </Container>
          </Container>
        </Container>

        <Container
          marginTop={-1}
          borderRadius={15}
          direction={'row'}
          width={80}
          height={5}>
          <Container marginTop={1.2} marginLeft={0}>
            <FontAwesome
              name="map-marker"
              size={Fonts.semiBig}
              color={Colors.appBlack}
            />
          </Container>
          <Container
            width={35}
            direction={'row'}
            height={5}
            marginLeft={2}
            verticalAlignment={'center'}>
            <P size={Fonts.small}>{props.address}</P>
          </Container>
          <Container
            width={40}
            height={5}
            marginLeft={15}
            verticalAlignment={'center'}
            direction={'row'}>
            <P>from</P>
            <Container marginLeft={2} marginTop={-0.3}>
              <NumberFormat
                value={props.amount}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'\u20A6'}
                fixedDecimalScale={true}
                decimalScale={0}
                renderText={formattedValue => (
                  <H1 size={Fonts.semiMedium}>{formattedValue}</H1>
                )} // <--- Don't forget this!
              />
            </Container>
          </Container>
        </Container>
        {props.active ? (
          <Container
            height={10}
            width={80}
            verticalAlignment={'center'}
            direction={'row'}>
            <Container height={8} width={40} verticalAlignment={'center'}>
              <H2>{props.serviceName}</H2>
              <Container direction={'row'}>
                {console.warn('H>>>>', props.ServiceAmount)}
                <NumberFormat
                  value={props.ServiceAmount}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'\u20A6'}
                  fixedDecimalScale={true}
                  decimalScale={0}
                  renderText={formattedValue2 => (
                    <H2 size={Fonts.semiMedium}>{formattedValue2}</H2>
                  )} // <--- Don't forget this!
                />
                <Container marginLeft={0.5} marginTop={0.3}>
                  <P size={Fonts.semiMedium} color={Colors.appGrey}>
                    {props.ServiceTime}
                  </P>
                </Container>
              </Container>
            </Container>

            <TouchWrap onPress={props.onBook}>
              <Container
                height={8}
                width={40}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <Container
                  width={30}
                  height={5}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  borderWidth={1}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}>
                  <P color={Colors.appPrimary}>Book</P>
                </Container>
              </Container>
            </TouchWrap>
          </Container>
        ) : null}
      </Container>
    </TouchWrap>
  );
};
