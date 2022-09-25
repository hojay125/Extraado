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
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import Entypo from 'react-native-vector-icons/Entypo';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const Intro3 = props => {
  const [loading, setLoading] = useState(false);

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Scroll>
        <Container
          height={70}
          width={100}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}
          borderBottomLeftRadius={40}
          borderBottomRightRadius={40}
          backgroundColor={Colors.appPrimary}>
          <Container marginTop={10}>
            <ImageWrap
              source={AppIcons.bookService}
              height={40}
              width={70}
              fit={'contain'}
            />
          </Container>
          <Container marginTop={10}>
            <H2 color={Colors.appWhite}>Book for services</H2>
          </Container>
        </Container>

        <Container
          height={10}
          width={100}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}
          direction={'row'}>
          <Container
            width={2}
            borderRadius={10}
            height={1}
            backgroundColor={Colors.appPrimary}></Container>

          <Container
            marginLeft={1}
            width={2}
            borderRadius={10}
            height={1}
            backgroundColor={Colors.appPrimary}></Container>
          <Container
            width={6}
            marginLeft={1}
            borderRadius={10}
            height={1}
            backgroundColor={Colors.appPrimary}></Container>
        </Container>
        <Container marginTop={10} paddingLeft={5}>
          <Button
            text={'Get Started'}
            loading={false}
            onPress={() => props.navigation.navigate('LocationPage')}
          />
        </Container>
      </Scroll>
    </Container>
  );
};

export default Intro3;
