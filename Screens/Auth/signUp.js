/* eslint-disable no-undef */
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

import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk';
import {axiosCalls, axiosCallsNoAuth} from '../../helper/api';
import Toast from 'react-native-toast-message';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
import {ToastLong} from '../../helper/toast';
import {storeData} from '../../helper/storage';
// import {RouteContext} from '../../helper/route_context';

export const SignUp = props => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [active, setActive] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    console.warn('yes');
  }, [active]);

  const changePassword = value => {
    setErrorPassword(false);
    setPassword(value);
  };

  const changeEmail = value => {
    setErrorEmail(false);
    setEmail(value);
  };

  const changeName = value => {
    setErrorName(false);
    setFullName(value);
  };

  const changePhone = value => {
    setErrorPhone(false);
    setPhone(value);
  };

  const submit = async () => {
    setActive(false);
    if (fullName == '' || email == '' || password == '' || phone == '') {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: 'All fields  required',
        visibilityTime: 4000,
        autoHide: false,
        topOffset: 30,
        bottomOffset: 60,
      });
      if (fullName == '') {
        console.warn('done44');
        setErrorName(true);
        console.warn('done');
      }

      if (email == '') {
        setErrorEmail(true);
      }

      if (phone == '') {
        setErrorPhone(true);
      }
      if (password == '') {
        setErrorPassword(true);
      }
    } else {
      setLoading(true);

      let body = {
        email: email,
        password: password,
        username: email,
        full_name: fullName,
      };

      let res = await axiosCallsNoAuth('auth/local/register', 'POST', body);
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
          setErrorEmail(true);
          setLoading(false);
        } else {
          console.warn('success', res);

          ToastLong(
            `${fullName}, your Registration is Successful. You can now login into your account`,
          );
          props.navigation.navigate('Login');
          setLoading(false);
        }
      }
    }
  };
  const initUser = token => {
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        // Some user object has been set up somewhere, build that user here
        console.warn('ttt', json);
        // setEmail(json.email);
        // setPassword(json.id);
        // setFullName(json.name);

        facebookLogin(json.name, json.id, json.email);
      })
      .catch(e => {
        console.warn('error', e);
      });
  };

  const facebookLogin = async (name, id, email) => {
    setLoading(true);
    try {
      let body = {
        email: email,
        password: id,
        username: email,
        full_name: name,
      };

      let res = await axiosCallsNoAuth('auth/local/register', 'POST', body);
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
          setErrorEmail(true);
          setLoading(false);
        } else {
          console.warn('success', res);

          ToastLong(
            `${fullName}, your Registration is Successful. You can now login into your account`,
          );
          props.navigation.navigate('Login');
          setLoading(false);
        }
      }
    } catch (e) {
      console.warn('error', e);
    }
  };
  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      {console.warn('NewActive', active)}
      <Scroll>
        <Container
          height={15}
          width={100}
          paddingTop={5}
          verticalAlignment={'center'}>
          <BackButton onPress={() => props.navigation.goBack()} />
        </Container>

        <Space height={15} />
        <Container>
          <H1>Create a new account</H1>
        </Container>

        <Space height={15} />
        <Container>
          <TextInputBox
            value={fullName}
            placeholder={'Full name'}
            onFocus={() => setActive('Name')}
            borderColor={
              active == 'Name' ? 'green' : errorName ? 'red' : '#969696'
            }
            borderBottomWidth={0.7}
            color={Colors.appBlack}
            borderWidth={0.7}
            borderLeftWidth={0.7}
            onChange={value => changeName(value)}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            value={email}
            placeholder={'Email'}
            onFocus={() => setActive('Email')}
            borderColor={
              active == 'Email' ? 'green' : errorEmail ? 'red' : '#969696'
            }
            borderBottomWidth={0.7}
            color={Colors.appBlack}
            borderWidth={0.7}
            borderLeftWidth={0.7}
            onChange={value => changeEmail(value)}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            value={phone}
            placeholder={'Phone'}
            onFocus={() => setActive('Phone')}
            borderColor={
              active == 'Phone' ? 'green' : errorPhone ? 'red' : '#969696'
            }
            keyboardType={'numeric'}
            borderBottomWidth={0.7}
            color={Colors.appBlack}
            borderWidth={0.7}
            borderLeftWidth={0.7}
            onChange={value => changePhone(value)}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            value={password}
            placeholder={'Password'}
            rightIcon={'lock'}
            onFocus={() => setActive('Password')}
            borderColor={
              active == 'Password' ? 'green' : errorPassword ? 'red' : '#969696'
            }
            borderBottomWidth={0.7}
            secure={true}
            borderWidth={0.7}
            color={Colors.appBlack}
            borderLeftWidth={0.7}
            onChange={value => changePassword(value)}
          />
        </Container>
        <Container marginTop={2} paddingLeft={60}>
          <P color={Colors.appPrimary}>Forgot password?</P>
        </Container>
        <Container marginTop={5}>
          <Button text={'Sign up'} loading={loading} onPress={() => submit()} />
        </Container>
        <TouchWrap onPress={() => props.navigation.navigate('Login')}>
          <Container
            marginTop={2}
            verticalAlignment={'center'}
            direction={'row'}
            horizontalAlignment={'center'}>
            <P color={Colors.appBlack}>Have an account? </P>
            <P color={Colors.appPrimary}>Sign in</P>
          </Container>
        </TouchWrap>
        <Container
          verticalAlignment={'center'}
          horizontalAlignment={'center'}
          marginTop={5}>
          <P>Or sign in with</P>
        </Container>
        <Container
          verticalAlignment={'center'}
          marginTop={3}
          width={90}
          horizontalAlignment={'center'}>
          {/* <TouchWrap>
            <Container
              height={7}
              width={35}
              direction={'row'}
              borderRadius={10}
              backgroundColor={Colors.appFaceBookBlue}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <Container marginRight={3}>
                <ImageWrap
                  source={AppIcons.facebook}
                  height={2}
                  width={2}
                  fit={'contain'}
                />
              </Container>
              <P color={Colors.appWhite}>Facebook</P>
            </Container>
          </TouchWrap> */}

          <LoginButton
            // style={{height: RH(30)}}
            publishPermissions={['publish_actions']}
            readPermissions={['public_profile']}
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ', result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  const {accessToken} = data;
                  initUser(accessToken);
                });
              }
            }}
            // onLogoutFinished={logout}
          />
          <Container marginTop={3}>
            <TouchWrap>
              <Container
                height={4}
                width={55}
                borderRadius={4}
                borderWidth={1}
                direction={'row'}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}>
                <Container marginRight={3}>
                  <ImageWrap
                    source={AppIcons.google}
                    height={5}
                    width={5}
                    fit={'contain'}
                  />
                </Container>

                <P color={Colors.appBlack}>Google</P>
              </Container>
            </TouchWrap>
          </Container>
        </Container>
        {/* <Container borderBottomWidth={1} marginTop={7}></Container> */}
      </Scroll>

      <Toast ref={ref => Toast.setRef(ref)} />
    </Container>
  );
};

export default SignUp;
