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

export const Success = props => {
  const [loading, setLoading] = useState(false);

  return (
    <Container
      flex={1}
      backgroundColor={Colors.appWhite}
      paddingHorizontal={5}
      verticalAlignment={'center'}>
      <ImageWrap
        source={AppIcons.completed}
        height={30}
        width={90}
        marginTop={10}
        fit={'contain'}
      />
      <Container marginTop={10} horizontalAlignment={'center'}>
        <H1>Review Completed</H1>

        <P>Thank you for helping to improve the service</P>
      </Container>
      <Container marginTop={20}>
        <Button
          text={'Ok'}
          backgroundColor={'#393737'}
          onPress={() => props.navigation.navigate('Page')}
        />
      </Container>
    </Container>
  );
};

export default Success;
