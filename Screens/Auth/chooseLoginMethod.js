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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Fonts} from '../../helper/fontSize';
import {useNavigation} from '@react-navigation/native';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const ChooseLoginMethod = props => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <Container
      flex={1}
      backgroundColor={Colors.appWhite}
      paddingHorizontal={5}
      paddingTop={5}>
      <Scroll>
        <Container
          marginTop={2}
          direction={'row'}
          horizontalAlignment={'space-between'}>
          <Container height={15} width={45}>
            <BackButton onPress={() => props.navigation.goBack()} />
          </Container>

          <Container
            height={15}
            width={45}
            paddingRight={2}
            horizontalAlignment={'flex-end'}>
            <Container
              height={7}
              width={13}
              borderWidth={0.5}
              borderRadius={13}
              backgroundColor={props.backgroundColor}
              borderColor={Colors.appGrey}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <FontAwesome5
                name="user"
                size={Fonts.semiBig}
                color={Colors.appGrey}
              />
            </Container>
          </Container>
        </Container>
        <Container marginTop={5}>
          <Button
            text={'Login'}
            loading={false}
            onPress={() => navigation.navigate('Login')}
          />
        </Container>

        <Container marginTop={2}>
          <Button
            text={'Register'}
            loading={false}
            backgroundColor={'#434343'}
            onPress={() => navigation.navigate('SignUp')}
          />
        </Container>
        <Container
          width={90}
          marginTop={10}
          direction={'row'}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}>
          <Container
            height={1}
            borderBottomWidth={0.3}
            width={30}
            borderColor={'#707070'}></Container>
          <Container width={25}>
            <P textAlign={'center'} color={'#707070'}>
              Or sign in with
            </P>
          </Container>
          <Container
            height={1}
            borderBottomWidth={0.3}
            width={30}
            borderColor={'#707070'}></Container>
        </Container>

        <Container
          verticalAlignment={'center'}
          horizontalAlignment={'space-evenly'}
          direction={'row'}
          marginTop={3}>
          <TouchWrap>
            <Container
              height={8}
              width={90}
              direction={'row'}
              borderRadius={10}
              paddingLeft={5}
              backgroundColor={Colors.appFaceBookBlue}
              verticalAlignment={'center'}>
              <Container marginRight={3}>
                <ImageWrap
                  source={AppIcons.facebook}
                  height={2}
                  width={2}
                  fit={'contain'}
                />
              </Container>
              <Container marginLeft={5}>
                <P color={Colors.appWhite}>Facebook</P>
              </Container>
            </Container>
          </TouchWrap>
        </Container>

        <Container marginTop={5}>
          <TouchWrap>
            <Container
              height={8}
              width={90}
              paddingLeft={5}
              borderRadius={10}
              borderWidth={1}
              direction={'row'}
              verticalAlignment={'center'}>
              <Container marginRight={3}>
                <ImageWrap
                  source={AppIcons.google}
                  height={5}
                  width={5}
                  fit={'contain'}
                />
              </Container>
              <Container marginLeft={5}>
                <P color={Colors.appBlack}>Google</P>
              </Container>
            </Container>
          </TouchWrap>
        </Container>
        {/* <Container borderBottomWidth={1} marginTop={7}></Container> */}
      </Scroll>
    </Container>
  );
};

export default ChooseLoginMethod;
