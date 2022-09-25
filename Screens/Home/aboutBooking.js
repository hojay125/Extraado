/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Container, ImageWrap, TouchWrap} from '../../helper/index';
import {Colors, RF, RH, RW} from '../../helper/constants';
import {
  H2,
  P,
  Space,
  H1,
  TextInputBox,
  Button,
  Scroll,
} from '../../helper/element';
import {ScrollView, Linking} from 'react-native';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import {SmallCard} from '../../component/smallCard';
import {Dropdown} from 'react-native-material-dropdown';
import {BigCard} from '../../component/bigCard';
import {BookingCard} from '../../component/bookingCard';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const AboutBookings = props => {
  const [loading, setLoading] = useState(false);
  const [cancelModal, setCancelModal] = useState(true);
  const [data, setData] = useState([
    {
      value: 'All',
    },
    {
      value: 'Men',
    },
    {
      value: 'Women',
    },
  ]);
  const Direction = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${6.465422},${3.406448}&dir_action=navigate`,
    );
  };
  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container
        width={90}
        height={8}
        direction={'row'}
        verticalAlignment={'center'}
        horizontalAlignment={'space-between'}
        marginTop={5}>
        <BackButton onPress={() => props.navigation.goBack()} />

        <Container>
          <FontAwesome
            name="calendar-plus-o"
            size={Fonts.big}
            color={Colors.appPrimary}
          />
        </Container>
      </Container>
      <ScrollView
        howsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <Container
          width={90}
          height={5}
          direction={'row'}
          horizontalAlignment={'center'}
          marginTop={3}>
          <Container
            width={23}
            height={3}
            backgroundColor={'#D5DBE1'}
            borderRadius={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <P color={Colors.appBlack}>PENDING</P>
          </Container>
        </Container>

        <Container
          width={90}
          height={5}
          horizontalAlignment={'center'}
          marginTop={2}>
          <H1 size={Fonts.semiBig}>09:00 . Sat, Mar6</H1>

          <H1 size={Fonts.small}>Barbers 9710</H1>
        </Container>

        <Container
          width={90}
          height={35}
          marginTop={5}
          borderWidth={0.2}
          borderRadius={5}
          borderColor={Colors.appGrey}>
          <MapView
            style={{
              height: '60%',
              width: '99%',
              borderRadius: 20,
              marginTop: 1,
              marginLeft: '0.5%',
            }}>
            <Marker
              pinColor={'#000000'}
              coordinate={{
                latitude: 6.465422,
                longitude: 3.406448,
              }}>
              <Entypo name="location-pin" size={44} color={Colors.appPrimary} />
              <Callout>
                <P style={{color: 'black'}}>MyLocation</P>
              </Callout>
            </Marker>
          </MapView>
          <Container width={90} height={11} direction={'row'} marginTop={1}>
            <Container
              width={15}
              height={12}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <Entypo
                name="location-pin"
                size={Fonts.big}
                color={Colors.appBlack}
              />
            </Container>
            <Container width={30} height={12} marginTop={2}>
              <H1 size={Fonts.semiMedium}>Barbers 9710</H1>
              <P>96 Asokoro BLVD, Ojota,Lagos </P>
              <P>3.2km </P>
            </Container>
            <Container
              width={45}
              height={12}
              horizontalAlignment={'center'}
              marginTop={2}>
              <TouchWrap onPress={() => Direction()}>
                <Container
                  width={40}
                  height={7}
                  borderRadius={10}
                  borderWidth={1}
                  marginLeft={2}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'space-evenly'}
                  borderColor={Colors.appPrimary}>
                  <P color={Colors.appPrimary}>Directions</P>

                  <MaterialIcons
                    name="send"
                    size={Fonts.big}
                    color={Colors.appPrimary}
                  />
                </Container>
              </TouchWrap>
            </Container>
          </Container>
        </Container>

        <Container height={15} width={90} marginTop={5}>
          <Container
            height={7.5}
            width={90}
            paddingHorizontal={5}
            horizontalAlignment={'space-between'}
            direction={'row'}>
            <Container>
              <H1 size={Fonts.semiMedium}>Barbers 9710</H1>
            </Container>
            <Container>
              <H1 size={Fonts.semiMedium} color={Colors.appPrimary}>
                N 1,200
              </H1>
            </Container>
          </Container>
          <Container
            height={7.5}
            width={90}
            marginTop={-3}
            paddingHorizontal={5}
            horizontalAlignment={'space-between'}
            direction={'row'}>
            <Container>
              <P size={Fonts.semiMedium} color={Colors.appGrey}>
                Funmi
              </P>
            </Container>
            <Container>
              <P size={Fonts.semiMedium} color={Colors.appGrey}>
                09:00 - 09:45
              </P>
            </Container>
          </Container>
        </Container>
        <Container
          height={5.5}
          marginTop={-4}
          width={90}
          paddingHorizontal={5}
          horizontalAlignment={'space-between'}
          direction={'row'}>
          <Container>
            <H1 size={Fonts.semiMedium}>Call Venue</H1>
          </Container>
          <Container direction={'row'}>
            <Container marginRight={2} marginTop={0.5}>
              <Ionicons
                name="call"
                size={Fonts.semiMedium}
                color={Colors.appBlack}
              />
            </Container>
            <H1 size={Fonts.semiMedium} color={Colors.appBlack}>
              0802 023 0834
            </H1>
          </Container>
        </Container>

        <Container
          height={10.5}
          marginTop={10}
          marginBottom={10}
          width={90}
          verticalAlignment={'center'}
          paddingHorizontal={5}
          horizontalAlignment={'space-between'}
          direction={'row'}>
          <TouchWrap onPress={() => setCancelModal(true)}>
            <Container
              height={8}
              width={37}
              borderRadius={15}
              borderWidth={1}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <P color={Colors.appBlack}>Cancel</P>
            </Container>
          </TouchWrap>
          <Button
            width={37}
            height={8}
            borderRadius={15}
            text={'Change'}
            backgroundColor={Colors.appBlack}
          />
        </Container>
      </ScrollView>
      <Modal
        isVisible={cancelModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setCancelModal(false)}
        onBackButtonPress={() => setCancelModal(false)}>
        <Container
          width={80}
          height={25}
          paddingVertical={2}
          verticalAlignment={'center'}
          paddingTop={5}
          borderRadius={30}
          backgroundColor={Colors.appWhite}>
          <Container width={65} marginLeft={5} horizontalAlignment={'center'}>
            <H1 size={Fonts.semiMedium}>Are you sure you want </H1>
            <H1 size={Fonts.semiMedium}>to cancel this booking?</H1>
          </Container>
          <Container
            height={10.5}
            marginTop={2}
            width={80}
            verticalAlignment={'center'}
            paddingHorizontal={5}
            horizontalAlignment={'space-evenly'}
            direction={'row'}>
            <TouchWrap onPress={() => setCancelModal(false)}>
              <Container
                height={7}
                width={30}
                borderRadius={15}
                borderWidth={1}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <P color={Colors.appBlack}>Yes</P>
              </Container>
            </TouchWrap>
            <Button
              width={30}
              height={7}
              borderRadius={15}
              text={'No'}
              backgroundColor={Colors.appBlack}
              size={Fonts.small}
              onPress={() => setCancelModal(false)}
            />
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};

export default AboutBookings;
