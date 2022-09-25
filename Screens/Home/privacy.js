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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const Privacy = props => {
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [privacy1, setPrivacy1] = useState(false);

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container
        height={15}
        width={100}
        direction={'row'}
        paddingTop={5}
        verticalAlignment={'center'}>
        <BackButton onPress={() => props.navigation.goBack()} />
        <Container width={63} horizontalAlignment={'center'}>
          <H1 size={Fonts.semiBig}>Privacy</H1>
        </Container>

        <Container>
          <ImageWrap
            source={AppIcons.barber2}
            height={7}
            width={15}
            borderRadius={10}
          />
        </Container>
      </Container>
      <Container
        height={2}
        borderBottomWidth={1}
        borderColor={Colors.AppBackground}></Container>

      <Container height={10} marginTop={8} direction={'row'}>
        <Container
          height={10}
          width={70}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P>I accept the Terms of use and the Privacy Policy</P>
        </Container>
        <Container height={10} width={20} verticalAlignment={'center'}>
          <Switch
            trackColor={{
              false: Colors.appGrey,
              true: Colors.appPrimary,
            }}
            thumbColor={Colors.appWhite}
            onValueChange={val => {
              setPrivacy(val);
            }}
            value={privacy}
          />
        </Container>
      </Container>
      <Container height={10} marginTop={1} direction={'row'}>
        <Container
          height={10}
          width={70}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P>
            I consent to personal data precessing for presentation of Merchants
            offers
          </P>
        </Container>
        <Container height={10} width={20} verticalAlignment={'center'}>
          <Switch
            trackColor={{
              false: Colors.appGrey,
              true: Colors.appPrimary,
            }}
            thumbColor={Colors.appWhite}
            onValueChange={val => {
              setPrivacy1(val);
            }}
            value={privacy1}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Privacy;
