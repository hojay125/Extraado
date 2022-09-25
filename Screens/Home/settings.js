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
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const Settings = props => {
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [privacy1, setPrivacy1] = useState(false);
  const [about, setAbout] = useState(false);
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState(false);

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
          <H1 size={Fonts.semiBig}>Settings</H1>
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
      <Container
        borderWidth={1}
        marginTop={5}
        borderColor={Colors.AppBackground}>
        <Container
          height={7}
          direction={'row'}
          borderColor={Colors.AppBackground}
          borderBottomWidth={1}>
          <Container
            height={7}
            width={70}
            verticalAlignment={'center'}
            paddingLeft={5}>
            <P>Push Notifications</P>
          </Container>
          <Container height={7} width={20} verticalAlignment={'center'}>
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
        <Container height={7} direction={'row'}>
          <Container
            height={7}
            width={70}
            paddingLeft={5}
            verticalAlignment={'center'}>
            <P>App notifications</P>
          </Container>
          <Container height={7} width={20} verticalAlignment={'center'}>
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

        <Container height={7} direction={'row'}>
          <Container
            height={7}
            width={70}
            paddingLeft={5}
            verticalAlignment={'center'}>
            <P>Email</P>
          </Container>
          <Container height={7} width={20} verticalAlignment={'center'}>
            <Switch
              trackColor={{
                false: Colors.appGrey,
                true: Colors.appPrimary,
              }}
              thumbColor={Colors.appWhite}
              onValueChange={val => {
                setEmail(val);
              }}
              value={email}
            />
          </Container>
        </Container>

        <Container height={7} direction={'row'}>
          <Container
            height={7}
            width={70}
            paddingLeft={5}
            verticalAlignment={'center'}>
            <P>Connected</P>
          </Container>
          <Container height={7} width={20} verticalAlignment={'center'}>
            <Switch
              trackColor={{
                false: Colors.appGrey,
                true: Colors.appPrimary,
              }}
              thumbColor={Colors.appWhite}
              onValueChange={val => {
                setConnected(val);
              }}
              value={connected}
            />
          </Container>
        </Container>

        <TouchWrap>
          <Container height={7} direction={'row'}>
            <Container
              height={7}
              width={70}
              paddingLeft={5}
              verticalAlignment={'center'}>
              <P>About Extraado</P>
            </Container>
            <Container
              height={7}
              width={20}
              verticalAlignment={'center'}
              marginLeft={13}>
              <Ionicons
                name="chevron-forward-sharp"
                size={Fonts.semiBig}
                color={'#434343'}
              />
            </Container>
          </Container>
        </TouchWrap>
      </Container>
      <TouchWrap>
        <Container
          height={10}
          marginLeft={23}
          width={40}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}
          marginTop={35}>
          <P color={Colors.appRed}>Deactivate Account</P>
        </Container>
      </TouchWrap>
    </Container>
  );
};

export default Settings;
