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
import {Platform} from 'react-native';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {axiosCalls, axiosCallsNoAuth} from '../../helper/api';
import Toast from 'react-native-toast-message';
import firebase from 'react-native-firebase';
// import {axiosCallsNoAuth} from '../../helper/api';
import {storeData} from '../../helper/storage';
import {ToastLong} from '../../helper/toast';

import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {RouteContext} from '../../helper/route_context';

export const Login = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);

  const changeEmail = value => {
    setErrorEmail(false);
    setErrorPassword(false);
    setEmail(value);
  };

  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '950311176871-plr215dj3t5bqfdhja29ua96di5f1882.apps.googleusercontent.com', // client ID of type WEB for your
    });
  }, []);

  const changePassword = value => {
    setErrorEmail(false);
    setErrorPassword(false);
    setPassword(value);
  };
  const initUser = token => {
    console.warn('nooo');
    fetch(
      'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        // Some user object has been set up somewhere, build that user here
        console.warn('ttt', json);

        submit2(json.email, json.id);
        // setEmail(json.email);
        // setPassword(json.id);
      })
      .catch(e => {
        console.warn('error', e);
      });
  };

  // const loginWithFacebook = async () => {
  //   // // Attempt a login using the Facebook login dialog asking for default permissions.
  //   // LoginManager.logInWithPermissions(['public_profile']).then(
  //   //   login => {
  //   //     if (login.isCancelled) {
  //   //       console.warn('Login cancelled');
  //   //     } else {
  //   //       AccessToken.getCurrentAccessToken().then(data => {
  //   //         const accessToken = data.accessToken.toString();
  //   //         getInfoFromToken(accessToken);
  //   //         initUser(accessToken);
  //   //       });
  //   //     }
  //   //   },
  //   //   error => {
  //   //     console.warn('Login fail with error: ' + error);
  //   //   },
  //   // );
  //   try {
  //     const result = await LoginManager.logInWithPermissions(
  //       ['public_profile', 'email'],
  //       'limited',
  //       'my_nonce',
  //     );
  //     console.warn('yess>>>', result);

  //     if (Platform.OS === 'ios') {
  //       const result = await AuthenticationToken.getAuthenticationTokenIOS();
  //       console.log(result?.authenticationToken);
  //     } else {
  //       const result = await AccessToken.getCurrentAccessToken();
  //       console.warn('hmmm', result?.accessToken);
  //     }
  //   } catch (error) {
  //     console.warn('error', error);
  //   }
  // };

  const googleSignIn = async () => {
    console.warn('tryd>>>>');
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn('>>>>>', userInfo);
    } catch (error) {
      console.warn('error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  const submit2 = async (em, id) => {
    setActive(false);
    console.warn('yes');
    setLoading(true);

    let body = {
      identifier: em,
      password: id,
    };

    let res = await axiosCallsNoAuth('auth/local', 'POST', body);
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
        setErrorPassword(true);
        setLoading(false);
      } else {
        console.warn('Token', res.data.jwt);
        console.warn('userInfo', res.data.user);
        const safeToken = await storeData('token', res.data.jwt);
        const safeUser = await storeData('user', res.data.user);

        console.warn('safeToken', safeToken);
        console.warn('safeUser', safeUser);
        console.warn('success', res);
        setCurrentState('Home');
        setLoading(false);
      }
    }
  };
  const submit = async () => {
    setActive(false);
    if (email == '' || password == '') {
      ToastLong('All fields  required');
    } else {
      setLoading(true);

      let body = {
        identifier: email,
        password: password,
      };

      let res = await axiosCallsNoAuth('auth/local', 'POST', body);
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
          setErrorPassword(true);
          setLoading(false);
        } else {
          console.warn('Token', res.data.jwt);
          console.warn('userInfo', res.data.user);
          const safeToken = await storeData('token', res.data.jwt);
          const safeUser = await storeData('user', res.data.user);

          console.warn('safeToken', safeToken);
          console.warn('safeUser', safeUser);
          console.warn('success', res);
          props.navigation.navigate('Page');
          setLoading(false);
        }
      }
    }
  };

  const tryD = () => {
    LoginManager.logInWithPermissions(['email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            console.warn('result-->', result);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Scroll>
        <Container
          height={15}
          width={100}
          paddingTop={5}
          verticalAlignment={'center'}>
          <BackButton onPress={() => props.navigation.goBack()} />
        </Container>

        <Container
          height={10}
          width={100}
          paddingTop={5}
          verticalAlignment={'center'}>
          <ImageWrap
            height={10}
            width={18}
            source={AppIcons.appLogo}
            fit={'contain'}
          />
        </Container>

        <Container marginTop={5}>
          <H1>Log in to</H1>
        </Container>
        <Container>
          <H2 color={Colors.appPrimary}>extraado</H2>
        </Container>
        <Space height={15} />
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
            onChange={value => changeEmail(value)}
            active={'Email'}
          />
        </Container>
        <Container marginTop={5}>
          <TextInputBox
            placeholder={'Password'}
            rightIcon={'lock'}
            value={password}
            onFocus={() => setActive('Password')}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            borderLeftWidth={0.5}
            secure={true}
            borderColor={
              active == 'Password' ? 'green' : errorPassword ? 'red' : '#969696'
            }
            color={Colors.appBlack}
            onChange={value => changePassword(value)}
          />
        </Container>
        <TouchWrap onPress={() => props.navigation.navigate('ResetPassword')}>
          <Container marginTop={2} paddingLeft={60}>
            <P color={Colors.appPrimary}>Forgot password?</P>
          </Container>
        </TouchWrap>
        <Container marginTop={5}>
          <Button text={'Login'} loading={loading} onPress={() => submit()} />
        </Container>
        <TouchWrap onPress={() => props.navigation.navigate('SignUp')}>
          <Container
            marginTop={2}
            verticalAlignment={'center'}
            direction={'row'}
            horizontalAlignment={'center'}>
            <P color={Colors.appBlack}>Don’t have an account? </P>
            <P color={Colors.appRed}>Sign up</P>
          </Container>
        </TouchWrap>

        <TouchWrap>
          <Container
            verticalAlignment={'center'}
            horizontalAlignment={'center'}
            marginTop={5}>
            <P>Or sign in with</P>
          </Container>
        </TouchWrap>
        <Container
          verticalAlignment={'center'}
          marginTop={3}
          width={90}
          horizontalAlignment={'center'}>
          {/* <TouchWrap onPress={() => tryD()}>
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
                console.warn('login has error: ', result.error);
              } else if (result.isCancelled) {
                console.warn('login is cancelled.');
              } else {
                console.warn('getting.');
                AccessToken.getCurrentAccessToken().then(data => {
                  const {accessToken} = data;
                  initUser(accessToken);
                });
              }
            }}
            // onLogoutFinished={logout}
          />
          <Container marginTop={3}>
            <TouchWrap onPress={() => googleSignIn()}>
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

export default Login;
