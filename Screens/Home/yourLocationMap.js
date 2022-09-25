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
import {Switch} from 'react-native';
import {BackButton} from '../../component/backButton';
import {Fonts} from '../../helper/fontSize';
import {AppIcons} from '../../helper/images';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {CancelButton} from '../../component/cancelButton';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const YourLocationMap = props => {
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [privacy1, setPrivacy1] = useState(false);

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Scroll>
        <Container
          paddingHorizontal={5}
          height={15}
          width={100}
          direction={'row'}
          paddingTop={5}
          verticalAlignment={'center'}>
          <CancelButton onPress={() => props.navigation.goBack()} />

          <Container width={63} horizontalAlignment={'center'}>
            <H1 size={Fonts.semiBig}>Your Location</H1>
          </Container>
        </Container>

        <Container>
          <MapView
            style={{
              height: RH(90),
              width: RW(100),
              borderRadius: 20,
              marginTop: 5,
              marginLeft: '0.5%',
            }}>
            <Marker
              pinColor={'#000000'}
              coordinate={{
                latitude: 6.465422,
                longitude: 3.406448,
              }}>
              <Entypo name="location-pin" size={44} color={Colors.appPrimary} />
            </Marker>
          </MapView>

          <Container
            height={7}
            width={14}
            marginTop={-15}
            marginLeft={80}
            borderWidth={1}
            borderRadius={13}
            backgroundColor={Colors.appWhite}
            borderColor={Colors.appGrey}
            horizontalAlignment={'center'}
            verticalAlignment={'center'}>
            <TouchWrap onPress={props.onPress}>
              <Fontisto
                name="navigate"
                size={Fonts.semiBig}
                color={Colors.appPrimary}
              />
            </TouchWrap>
          </Container>
        </Container>
      </Scroll>
    </Container>
  );
};

export default YourLocationMap;
