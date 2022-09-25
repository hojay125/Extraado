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

export const Booked = props => {
  const [loading, setLoading] = useState(false);

  return (
    <Container
      flex={1}
      backgroundColor={Colors.appWhite}
      paddingHorizontal={5}
      verticalAlignment={'center'}>
      <Container
        height={40}
        width={90}
        marginTop={10}
        borderRadius={20}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        backgroundColor={Colors.appPrimary}>
        <ImageWrap
          source={AppIcons.correct}
          height={10}
          width={30}
          fit={'contain'}
        />
        <Container marginTop={5}>
          <P color={Colors.appWhite}>Your Booking has been sent!</P>
        </Container>
      </Container>

      <Container
        marginTop={3}
        horizontalAlignment={'center'}
        width={70}
        marginLeft={10}>
        <P textAlign={'center'}>
          Please check your email and/or SMS for the booking confirmation sent
          to you.
        </P>
      </Container>

      <Container marginTop={29} horizontalAlignment={'center'}>
        <P color={'#FF3A2A'}>Set Reminder</P>
      </Container>
      <Container marginTop={3}>
        <Button
          text={'Ok, Got it'}
          onPress={() => props.navigation.navigate('Page')}
        />
      </Container>
    </Container>
  );
};

export default Booked;
