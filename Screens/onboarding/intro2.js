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

export const Intro2 = props => {
  const [loading, setLoading] = useState(false);

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
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
            source={AppIcons.searchService}
            height={40}
            width={70}
            fit={'contain'}
          />
        </Container>
        <Container marginTop={10}>
          <H2 color={Colors.appWhite}>Search for services near you</H2>
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
          width={6}
          marginLeft={1}
          borderRadius={10}
          height={1}
          backgroundColor={Colors.appPrimary}></Container>
        <Container
          marginLeft={1}
          width={2}
          borderRadius={10}
          height={1}
          backgroundColor={Colors.appPrimary}></Container>
      </Container>

      <Container height={20} width={100} direction={'row'} marginTop={5}>
        <Container
          height={10}
          verticalAlignment={'center'}
          paddingLeft={5}
          width={50}
          marginTop={5}>
          <TouchWrap>
            <P>Skip</P>
          </TouchWrap>
        </Container>

        <Container
          height={10}
          width={50}
          paddingRight={5}
          paddingLeft={30}
          direction={'row'}
          verticalAlignment={'center'}
          marginTop={5}>
          <TouchWrap onPress={() => props.navigation.navigate('Intro3')}>
            <Container direction={'row'}>
              <Container>
                <P color={Colors.appRed}>Next</P>
              </Container>

              <Container marginLeft={2}>
                <Entypo
                  name="arrow-long-right"
                  size={Fonts.semiBig}
                  color={Colors.appRed}
                />
              </Container>
            </Container>
          </TouchWrap>
        </Container>
      </Container>
    </Container>
  );
};

export default Intro2;
