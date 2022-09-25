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
import {Platform, PermissionsAndroid} from 'react-native';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import Modal from 'react-native-modal';
import Geolocation from 'react-native-geolocation-service';

export const LocationPage = props => {
  const [loading, setLoading] = useState(false);
  const [notNowModal, setNotNowModal] = useState(false);
  const [enableLocationModal, setEnableLocationModal] = useState(false);
  const [isGranted, setGrantedPermission] = useState(false);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      // Geolocation.requestAuthorization();
      // Geolocation.setRNConfiguration({
      //   skipPermissionRequests: false,
      //   authorizationLevel: 'whenInUse',
      //});
      subscribeLocationLocation();
      // Geolocation.getCurrentPosition(
      //   (position) => {
      //     console.warn('wokeeey');
      //     console.warn('position', position);

      //     const myLoc = {
      //       latitude: position.coords.latitude,
      //       longitude: position.coords.longitude,
      //     };
      //   },
      //   (error) => console.warn('error', error.message),
      //   {enableHighAccuracy: true, timeout: 200000},
      // );
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'Extraado needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          setGrantedPermission(true);
          await subscribeLocationLocation();
        } else {
          alert('Permission Denied');
        }
      } catch (err) {
        alert('err', err);
      }
      await all();
    }
  };

  const subscribeLocationLocation = async () => {
    if (Platform.OS === 'ios') {
      // Geolocation.requestAuthorization();
      // Geolocation.setRNConfiguration({
      //   skipPermissionRequests: false,
      //   authorizationLevel: 'whenInUse',
      //});
      Geolocation.getCurrentPosition(
        async position => {
          console.warn('wokeeey');
          console.warn('position', position);

          const myLoc = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        },
        error => console.warn('error', error.message),
        {enableHighAccuracy: true, timeout: 200000},
      );
    } else {
      Geolocation.getCurrentPosition(
        async position => {
          console.warn('oooooo', position);
          props.navigation.navigate('SelectService');
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        height={20}
        marginTop={5}
        width={90}>
        <ImageWrap
          source={AppIcons.appLogo}
          height={15}
          width={15}
          fit={'contain'}
        />
      </Container>
      <Container
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        width={90}>
        <H1 size={Fonts.semiBig}>Enable Location Services</H1>
      </Container>

      <Container
        height={35}
        width={90}
        horizontalAlignment={'center'}
        marginTop={-3}>
        <ImageWrap
          source={AppIcons.location}
          height={40}
          width={90}
          fit={'contain'}
        />
      </Container>

      <Container marginTop={-2} width={60} marginLeft={15}>
        <P textAlign={'center'}>
          By allowing geolocation you are able to explore Extraado services in
          your location
        </P>
      </Container>
      <Container marginTop={5}>
        <Button
          text={'Enable Location'}
          loading={false}
          onPress={() => requestLocationPermission()}
        />
      </Container>
      <TouchWrap onPress={() => props.navigation.navigate('SelectService')}>
        <Container
          height={8}
          borderColor={Colors.appPrimary}
          width={90}
          borderRadius={10}
          borderWidth={1}
          marginTop={3}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P color={Colors.appPrimary}>Not now</P>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('SelectService')}>
        <Container marginTop={6} paddingLeft={80} marginBottom={5}>
          <P textAlign={'center'} color={Colors.appBrown}>
            skip
          </P>
        </Container>
      </TouchWrap>

      <Modal
        isVisible={notNowModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setNotNowModal(false)}
        onBackButtonPress={() => setNotNowModal(false)}>
        <Container
          width={75}
          height={30}
          paddingTop={5}
          paddingHorizontal={5}
          paddingVertical={2}
          borderRadius={30}
          backgroundColor={Colors.appWhite}>
          <Container>
            <H1 textAlign={'center'} size={Fonts.semiMedium}>
              Are you sure ?
            </H1>
          </Container>
          <Container marginTop={1}>
            <P textAlign={'center'}>
              By <P color={Colors.appBrown}> NOT</P> allowing geolocation you
              will be unable to explore extraado services in your location.
            </P>
          </Container>

          <Container
            width={65}
            marginTop={4}
            height={10}
            direction={'row'}
            horizontalAlignment={'space-between'}>
            <Button
              text={'Not Sure'}
              backgroundColor={Colors.appBlack}
              height={6}
              width={30}
              onPress={() => setNotNowModal(false)}
            />
            <Button
              text={'Yes'}
              backgroundColor={Colors.appRed}
              height={6}
              width={30}
              onPress={() => setNotNowModal(false)}
            />
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};

export default LocationPage;
