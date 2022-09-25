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
import {Fonts} from '../../helper/fontSize';
import {AppIcons} from '../../helper/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import {axiosCalls} from '../../helper/api';

export const Profile = props => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('James Maddison');
  const [email, setEmail] = useState('jamesmadda@leicestercity.co.uk');
  const [phone, setPhone] = useState('08011223344');
  const [address, setAddress] = useState(
    'No. 9, Ajayi Street, Mende, Maryland',
  );

  const submit = async () => {
    setLoading(true);

    let body = {
      username: email,
      email: 'string',
    };

    let res = await axiosCalls('auth/local', 'POST', body);
    if (res) {
      if (res.er) {
        console.warn('error1', res.er.message[0].messages[0].message);
        // Toast.show({
        //   type: 'error',
        //   position: 'bottom',
        //   text1: 'Error',
        //   text2: `${res.er.message[0].messages[0].message}`,
        //   visibilityTime: 4000,
        //   autoHide: false,
        //   topOffset: 30,
        //   bottomOffset: 60,
        // });

        setLoading(false);
      } else {
        console.warn('success', res);

        setLoading(false);
      }
    }
  };

  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,

      includeBase64: true,
      compressImageQuality: 1,
      showCropGuidelines: true,
      enableRotationGesture: true,
      cropperStatusBarColor: '#FFFFFF',
      cropperToolbarColor: '#FFFFFF',
    })
      .then(image => {
        console.warn('jjjjjj', image.data);

        console.warn('Photo selected');
      })
      .catch(e => {
        console.warn('cancel');
        console.warn(e);
      });
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Scroll>
        <Container
          height={15}
          width={100}
          direction={'row'}
          paddingTop={5}
          verticalAlignment={'center'}>
          <BackButton onPress={() => props.navigation.goBack()} />
          <Container width={70} horizontalAlignment={'center'}>
            <H1 size={Fonts.semiBig}>Profile</H1>
          </Container>
        </Container>
        <TouchWrap onPress={() => PickImage()}>
          <Container
            height={15}
            width={90}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.barber2}
              height={15}
              width={30}
              borderRadius={10}
            />
            <Container
              height={5}
              marginTop={-4}
              borderRadius={7}
              borderWidth={2}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              borderColor={Colors.appWhite}
              marginLeft={26}
              width={10}
              backgroundColor={Colors.appPrimary}>
              <EvilIcons
                name="camera"
                size={Fonts.semiBig}
                color={Colors.appWhite}
              />
            </Container>
          </Container>
        </TouchWrap>
        <Space height={15} />
        <Container marginTop={5}>
          <TextInputBox
            placeholder={'Full name'}
            value={name}
            backgroundColor={Colors.AppBackground}
            borderBottomWidth={0.2}
            borderWidth={0.2}
            borderLeftWidth={0.2}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            placeholder={'Email'}
            value={email}
            backgroundColor={Colors.AppBackground}
            borderBottomWidth={0.2}
            borderWidth={0.2}
            borderLeftWidth={0.2}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            placeholder={'Phone'}
            value={phone}
            backgroundColor={Colors.AppBackground}
            borderBottomWidth={0.2}
            borderWidth={0.2}
            borderLeftWidth={0.2}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            placeholder={'Address'}
            value={address}
            backgroundColor={Colors.AppBackground}
            borderBottomWidth={0.2}
            borderWidth={0.2}
            borderLeftWidth={0.2}
          />
        </Container>
        <Container marginTop={2} paddingLeft={54}>
          <H2 color={Colors.appPrimary} size={Fonts.semiMedium}>
            Change password?
          </H2>
        </Container>
        <H2>Service preference</H2>
        <Container
          marginTop={-2}
          width={90}
          height={15}
          verticalAlignment={'center'}
          horizontalAlignment={'space-between'}
          direction={'row'}>
          <Button
            width={27}
            text={'Unisex'}
            height={7}
            backgroundColor={'#434343'}
          />
          <Button
            width={27}
            borderWidth={1}
            borderColor={'#C6C6C6'}
            text={'Female'}
            height={7}
            backgroundColor={Colors.appWhite}
            color={Colors.appBlack}
          />
          <Button
            width={27}
            text={'Male'}
            borderWidth={1}
            borderColor={'#C6C6C6'}
            height={7}
            backgroundColor={Colors.appWhite}
            color={Colors.appBlack}
          />
        </Container>

        <Container marginTop={5}>
          <Button
            text={'Save'}
            loading={false}
            onPress={() => props.navigation.navigate('Terms')}
          />
        </Container>

        {/* <Container borderBottomWidth={1} marginTop={7}></Container> */}
      </Scroll>
    </Container>
  );
};

export default Profile;
