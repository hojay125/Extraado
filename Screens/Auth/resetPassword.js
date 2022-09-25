import React, {useState, useEffect} from 'react';
import {Container, TouchWrap} from '../../helper/index';
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
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const ResetPassword = props => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('remifrank49@gmail.com');

  const [active, setActive] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  return (
    <Container
      flex={1}
      backgroundColor={Colors.appWhite}
      paddingHorizontal={5}
      verticalAlignment={'center'}>
      <Scroll>
        <Container
          height={15}
          width={100}
          paddingTop={5}
          verticalAlignment={'center'}>
          <BackButton onPress={() => props.navigation.goBack()} />
        </Container>

        <Space height={25} />
        <Container marginTop={10}>
          <H1>Reset password</H1>
        </Container>
        <Container>
          <P>Please enter your email address to request a Password rest.</P>
        </Container>
        <Space height={35} />
        <Container>
          <TextInputBox
            placeholder={'Email'}
            value={email}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            onFocus={() => setActive('Email')}
            borderColor={
              active == 'Email' ? 'green' : errorEmail ? 'red' : '#969696'
            }
            color={Colors.appBlack}
            borderLeftWidth={0.5}
            onChange={value => setEmail(value)}
            active={'Email'}
          />
        </Container>

        <Container marginTop={25}>
          <Button
            text={'Rest password'}
            loading={false}
            onPress={() => props.navigation.navigate('Verify')}
          />
        </Container>
        <Container
          height={8}
          borderColor={Colors.appPrimary}
          width={90}
          borderRadius={10}
          borderWidth={1}
          marginTop={3}
          verticalAlignment={'center'}
          horizontalAlignment={'center'}>
          <P color={Colors.appPrimary}>Cancel</P>
        </Container>
        {/* <Container borderBottomWidth={1} marginTop={7}></Container> */}
      </Scroll>
    </Container>
  );
};

export default ResetPassword;
