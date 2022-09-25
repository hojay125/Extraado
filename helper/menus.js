import React, {useState, useEffect} from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar, Container, ImageWrap, TouchWrap} from '.';
import {Colors} from './constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {H1, P, Space, H2} from './element';

import {AppIcons} from '../helper/images';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from './fontSize';
import {getData} from './storage';
import {RouteContext} from './route_context';
import {BackButton} from '../component/backButton';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

export const DrawerMenu = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [joinDate, setJoinDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    get();
  }, [name]);

  const signOut = async () => {
    setCurrentState('login');
    await AsyncStorage.clear();
  };

  const get = async () => {
    const userInfo = await getData('user');
    const newUser = await JSON.parse(userInfo);
    console.warn('userInfo.username', newUser.created_at);
    setName(newUser.username);
    setUser(newUser);
    var date = moment(newUser.created_at).format('ddd MMM YYYY');
    console.warn('......>>>>>', date);
    setJoinDate(date);
  };

  return (
    <Container>
      <Container
        height={10}
        width={69}
        marginTop={2}
        direction={'row'}
        verticalAlignment={'center'}
        paddingHorizontal={5}
        horizontalAlignment={'space-between'}>
        <BackButton onPress={() => props.navigation.closeDrawer()} />

        <Container height={7} width={13} marginLeft={-23}>
          <ImageWrap source={AppIcons.barber2} flex={1} borderRadius={12} />
        </Container>
      </Container>
      <Container paddingLeft={5} marginTop={3}>
        <H1 size={Fonts.big}>{name ? name : 'Guest'}</H1>
        <H2 size={Fonts.small}>Joined {joinDate ? joinDate : ''}</H2>
      </Container>
      <Container height={2} direction={'row'}>
        <Container
          height={1.5}
          backgroundColor={Colors.appGreen}
          widthPercent={'50%'}></Container>
        <Container
          height={1.5}
          backgroundColor={Colors.appBlue}
          widthPercent={'50%'}></Container>
      </Container>

      <TouchWrap onPress={() => props.navigation.navigate('Profile')}>
        <Container height={5} direction={'row'} marginTop={3} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <Entypo
              name="user"
              size={Fonts.extraBig}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appDeepBlue} size={Fonts.semiMedium}>
              Profile
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Review')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <MaterialCommunityIcons
              name="star-circle"
              size={Fonts.extraBig}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appDeepBlue} size={Fonts.semiMedium}>
              Reviews
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Payment')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <MaterialIcons
              name="payment"
              size={Fonts.extraBig}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appDeepBlue} size={Fonts.semiMedium}>
              Payments
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Notification')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <Ionicons
              name="notifications"
              size={Fonts.extraBig}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appDeepBlue} size={Fonts.semiMedium}>
              Notifications
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Settings')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <Ionicons
              name="settings"
              size={Fonts.extraBig}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appDeepBlue} size={Fonts.semiMedium}>
              Settings
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('Privacy')}>
        <Container height={5} direction={'row'} marginTop={5} marginLeft={5}>
          <Container
            height={8}
            width={15}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            backgroundColor={'#F9F9F9'}
            borderRadius={15}>
            <MaterialIcons
              name="privacy-tip"
              size={Fonts.extraBig}
              color={Colors.appPrimary}
            />
          </Container>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            width={29}
            marginTop={2}
            marginLeft={5}>
            <H2 color={Colors.appDeepBlue} size={Fonts.semiMedium}>
              Privacy
            </H2>
          </Container>
        </Container>
      </TouchWrap>

      <Container height={8} width={72}></Container>
      <TouchWrap onPress={() => signOut()}>
        <Container
          height={6.5}
          direction={'row'}
          widthPercent={'100%'}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}
          backgroundColor={'#F9F9F9'}
          borderColor={Colors.appGrey}>
          <P>Sign out</P>
        </Container>
      </TouchWrap>
      {/* 
      <TouchWrap onPress={() => LogOut()}>
        <Container height={5} direction={'row'} marginTop={2}>
          <Container
            direction={'row'}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            paddingLeft={10}
            width={30}>
            <Feather
              name="log-out"
              size={Fonts.big}
              color={Colors.appDeepBlue}
            />
          </Container>
          <Container direction={'row'} verticalAlignment={'center'} width={29}>
            <H2 color={Colors.appDeepBlue}>Logout</H2>
          </Container>
        </Container>
      </TouchWrap> */}
    </Container>
  );
};
