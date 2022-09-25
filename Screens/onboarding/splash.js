import React, {useEffect} from 'react';
import {Container, ImageWrap} from '../../helper/index';
// import {AppIcons} from '../../helper/images';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import {H2, Space} from '../../helper/element';
import {StatusBar} from 'react-native';
import {Colors} from '../../helper/constants';
import {RouteContext} from '../../helper/route_context';
import {getData} from '../../helper/storage';
export const Splash = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const init = async () => {
    const userInfo = await getData('user');
    console.warn('check', userInfo);

    if (userInfo) {
      setCurrentState('Home');
    } else {
      setCurrentState('onboarding');
    }
  };
  useEffect(() => {
    setTimeout(() => init(), 5500);
  }, []);
  return (
    <Container
      flex={1}
      horizontalAlignment="center"
      verticalAlignment="center"
      backgroundColor={Colors.appPrimary}>
      <StatusBar
        translucent={true}
        backgroundColor={Colors.appPrimary}
        barStyle={'light-content'}
      />
      <ImageWrap
        height={70}
        marginLeft={110}
        width={150}
        source={AppIcons.splash}
        fit={'contain'}>
        <ImageWrap
          source={AppIcons.logo2}
          height={20}
          width={10}
          marginLeft={14}
          marginTop={20}
          fit={'contain'}
        />

        <Container marginLeft={6} marginTop={-7}>
          <H2 size={25} color={Colors.appWhite}>
            extraado
          </H2>
        </Container>
        <Container
          height={1}
          marginTop={-7}
          marginLeft={24}
          width={2}
          borderRadius={100}
          backgroundColor={'#FF3A2A'}></Container>
      </ImageWrap>
    </Container>
  );
};

export default Splash;
