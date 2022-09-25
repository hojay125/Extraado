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
import {NotificationCard} from '../../component/notificationCard';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const Notification = props => {
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
          <H1 size={Fonts.semiBig}>Notifications</H1>
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

      <Container>
        <NotificationCard
          type={'Confirmed'}
          text={'Booking Confirmed'}
          smallText={'Fantasia place has confirmed…'}
          time={'12:00'}
        />

        <NotificationCard
          type={'cancelled'}
          text={'Booking Cancelled'}
          smallText={'You cancelled you booking with…'}
          time={'09:12'}
        />

        <NotificationCard
          type={'Confirmed'}
          text={'Booking Confirmed'}
          smallText={'Fantasia place has confirmed…'}
          time={'12:00'}
        />

        <NotificationCard
          type={'cancelled'}
          text={'Booking Cancelled'}
          smallText={'You cancelled you booking with…'}
          time={'09:12'}
        />
      </Container>
    </Container>
  );
};

export default Notification;
