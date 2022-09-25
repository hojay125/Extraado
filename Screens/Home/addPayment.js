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

export const AddPayment = props => {
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
          <H1 size={Fonts.semiBig}>Add Payment</H1>
        </Container>

        <Container>
          <ImageWrap
            source={AppIcons.barber2}
            height={7}
            width={14}
            borderRadius={10}
          />
        </Container>
      </Container>
      <Container borderColor={Colors.AppBackground} marginTop={4}>
        <H1 size={Fonts.semiMedium}>Payment Details</H1>
      </Container>
      <Container marginTop={3}>
        <TextInputBox
          placeholder={'Cardholder name'}
          backgroundColor={Colors.AppBackground}
          borderBottomWidth={0.2}
          borderWidth={0.2}
          borderLeftWidth={0.2}
        />
      </Container>

      <Container marginTop={3}>
        <TextInputBox
          placeholder={'Card number'}
          backgroundColor={Colors.AppBackground}
          borderBottomWidth={0.2}
          borderWidth={0.2}
          borderLeftWidth={0.2}
        />
      </Container>

      <Container
        marginTop={3}
        width={90}
        horizontalAlignment={'space-between'}
        direction={'row'}>
        <TextInputBox
          placeholder={'Date'}
          backgroundColor={Colors.AppBackground}
          borderBottomWidth={0.2}
          borderWidth={0.2}
          borderLeftWidth={0.2}
        />
      </Container>

      <Container
        marginTop={3}
        width={90}
        horizontalAlignment={'space-between'}
        direction={'row'}>
        <Container>
          <H2 size={Fonts.semiMedium}>Make Default</H2>
        </Container>
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

      <Container
        marginTop={23}
        width={90}
        horizontalAlignment={'space-between'}
        direction={'row'}>
        <Button
          width={40}
          height={8}
          borderColor={Colors.appPrimary}
          borderWidth={1}
          backgroundColor={Colors.appWhite}
          color={Colors.appPrimary}
          text={'Cancel'}
          borderRadius={19}
        />

        <Button width={40} height={8} text={'Save'} borderRadius={19} />
      </Container>
    </Container>
  );
};

export default AddPayment;
