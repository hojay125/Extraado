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
import {CancelButton} from '../../component/cancelButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const PickLocation = props => {
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [privacy1, setPrivacy1] = useState(false);

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Scroll>
        <Container
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

        <Container
          width={90}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}>
          <TouchWrap
            onPress={() => props.navigation.navigate('YourLocationMap')}>
            <Container
              horizontalAlignment={'center'}
              verticalAlignment={'center'}
              borderWidth={0.7}
              borderRadius={5}
              paddingVertical={2}
              paddingHorizontal={10}
              borderColor={Colors.appPrimary}
              direction={'row'}>
              <Container>
                <P color={Colors.appPrimary}>Get Location</P>
              </Container>

              <Container marginLeft={3}>
                <AntDesign
                  name="arrowright"
                  size={Fonts.semiBig}
                  color={Colors.appPrimary}
                />
              </Container>
            </Container>
          </TouchWrap>
        </Container>

        <Container
          width={90}
          marginTop={3}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}>
          <Container width={75}>
            <P textAlign={'center'} color={'#707070'}>
              {' '}
              Stand at the entrance of your shop to get accurate location
            </P>
          </Container>
        </Container>

        <Container
          width={90}
          marginTop={3}
          direction={'row'}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}>
          <Container
            height={1}
            borderBottomWidth={0.3}
            width={35}
            borderColor={'#707070'}></Container>
          <Container width={15}>
            <P textAlign={'center'} color={'#707070'}>
              {' '}
              Or
            </P>
          </Container>
          <Container
            height={1}
            borderBottomWidth={0.3}
            width={35}
            borderColor={'#707070'}></Container>
        </Container>

        <Container
          width={90}
          marginTop={3}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}>
          <Container width={75}>
            <P textAlign={'center'} color={'#707070'}>
              Add Address Manually
            </P>
          </Container>
        </Container>

        <Container borderColor={Colors.AppBackground} marginTop={4}>
          <H1 size={Fonts.small} color={Colors.appGrey}>
            First Line
          </H1>
        </Container>
        <Container marginTop={1}>
          <TextInputBox
            placeholder={''}
            backgroundColor={Colors.appWhite}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            height={7}
            borderColor={'#B3C1D0'}
            borderLeftWidth={0.5}
            borderRadius={2}
          />
        </Container>

        <Container borderColor={Colors.AppBackground} marginTop={4}>
          <H1 size={Fonts.small} color={Colors.appGrey}>
            Second Line
          </H1>
        </Container>
        <Container marginTop={1}>
          <TextInputBox
            placeholder={''}
            backgroundColor={Colors.appWhite}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            height={7}
            borderColor={'#B3C1D0'}
            borderLeftWidth={0.5}
            borderRadius={2}
          />
        </Container>

        <Container borderColor={Colors.AppBackground} marginTop={4}>
          <H1 size={Fonts.small} color={Colors.appGrey}>
            City
          </H1>
        </Container>
        <Container marginTop={1}>
          <TextInputBox
            placeholder={''}
            backgroundColor={Colors.appWhite}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            height={7}
            borderColor={'#B3C1D0'}
            borderLeftWidth={0.5}
            borderRadius={2}
          />
        </Container>

        <Container borderColor={Colors.AppBackground} marginTop={4}>
          <H1 size={Fonts.small} color={Colors.appGrey}>
            County
          </H1>
        </Container>
        <Container marginTop={1}>
          <TextInputBox
            placeholder={''}
            backgroundColor={Colors.appWhite}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            height={7}
            borderColor={'#B3C1D0'}
            borderLeftWidth={0.5}
            borderRadius={2}
          />
        </Container>

        <Container
          marginTop={13}
          width={90}
          horizontalAlignment={'space-between'}
          direction={'row'}>
          <Button width={90} height={8} text={'Save'} borderRadius={10} />
        </Container>
      </Scroll>
    </Container>
  );
};

export default PickLocation;
