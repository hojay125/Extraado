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
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import {RouteContext} from '../../helper/route_context';
import {axiosCallsNoAuth} from '../../helper/api';

export const EnableNotification = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const [loading, setLoading] = useState(false);
  const [enableNotificationModal, setEnableNotificationModal] = useState(false);
  const [notNowModal, setNotNowModal] = useState(false);

  const submit = async () => {
    setEnableNotificationModal(false);
    setLoading(true);
    let body = {
      notification_id: 'string',
      receive_notification: true,
    };

    let res = await axiosCallsNoAuth('notifications', 'POST', body);
    if (res) {
      if (res.er) {
        console.warn('error1', res.er.message[0].messages[0].message);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error',
          text2: `${res.er.message[0].messages[0].message}`,
          visibilityTime: 4000,
          autoHide: false,
          topOffset: 30,
          bottomOffset: 60,
        });

        setLoading(false);
      } else {
        console.warn('success', res);

        props.navigation.navigate('DrawerTabScreen');
        setLoading(false);
      }
    }
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        height={20}
        width={90}>
        <ImageWrap
          source={AppIcons.appLogo}
          height={15}
          width={15}
          fit={'contain'}
        />
      </Container>
      <Container
        marginTop={-3}
        verticalAlignment={'center'}
        horizontalAlignment={'center'}
        width={90}>
        <H1 size={Fonts.semiBig}>Enable notifications</H1>
      </Container>

      <Container
        height={35}
        width={90}
        horizontalAlignment={'center'}
        marginTop={9}>
        <ImageWrap
          source={AppIcons.notification}
          height={25}
          width={70}
          fit={'contain'}
        />
      </Container>

      <Container marginTop={-2}>
        <Button
          text={'Enable Notifications'}
          loading={false}
          onPress={() => setEnableNotificationModal(true)}
        />
      </Container>
      <TouchWrap onPress={() => props.navigation.navigate('DrawerTabScreen')}>
        <Container
          height={8}
          borderColor={Colors.appPrimary}
          width={90}
          borderRadius={10}
          borderWidth={1}
          marginTop={3}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P color={Colors.appPrimary}>Not now</P>
        </Container>
      </TouchWrap>
      <TouchWrap onPress={() => setCurrentState('DrawerTabScreen')}>
        <Container marginTop={6} paddingLeft={80} marginBottom={5}>
          <P textAlign={'center'} color={Colors.appBrown}>
            skip
          </P>
        </Container>
      </TouchWrap>

      <Modal
        isVisible={enableNotificationModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setEnableNotificationModal(false)}
        onBackButtonPress={() => setEnableNotificationModal(false)}>
        <Container
          width={75}
          height={35}
          paddingTop={7}
          paddingHorizontal={5}
          paddingVertical={2}
          borderRadius={30}
          backgroundColor={Colors.appWhite}>
          <Container>
            <H1 textAlign={'center'} size={Fonts.semiMedium}>
              “Extraado” would Like to Send You Notifications{' '}
            </H1>
          </Container>
          <Container marginTop={1}>
            <P textAlign={'center'}>
              Notification may include alerts, sounds, and icon badges. These
              can be configured in Settings.
            </P>
          </Container>

          <Container width={70} marginTop={7.7} height={10} direction={'row'}>
            <TouchWrap onPress={() => setEnableNotificationModal(false)}>
              <Container
                height={7}
                marginLeft={-5}
                width={35}
                borderRightWidth={0.3}
                borderTopWidth={0.3}
                borderColor={Colors.appGrey}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <P>Don’t Allow</P>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => submit()}>
              <Container
                height={7}
                width={35}
                borderTopWidth={0.3}
                borderColor={Colors.appGrey}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <P>Allow</P>
              </Container>
            </TouchWrap>
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};

export default EnableNotification;
