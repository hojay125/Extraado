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
import CodeInput from 'react-native-confirmation-code-input';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const Verify = props => {
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState('');

  const onFulfill = async code => {
    console.warn(code);
  };
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
          <P>A password reset pin has been sent to youremail@website.com.</P>
        </Container>
        <Space height={35} />
        <Container>
          <CodeInput
            //ref="codeInputRef2"
            secureTextEntry
            value={pin}
            keyboardType="numeric"
            //compareWithCode='AsDW2'
            activeColor={Colors.appPrimary}
            inactiveColor={Colors.appGrey}
            autoFocus={false}
            codeLength={4}
            inputPosition="center"
            size={50}
            onFulfill={code => onFulfill(code)}
            codeInputStyle={{borderBottomWidth: 2.5}}
            cellBorderWidth={0}
          />
        </Container>

        <Container marginTop={25}>
          <Button
            text={'Proceed'}
            loading={false}
            onPress={() => props.navigation.navigate('ChangePassword')}
          />
        </Container>

        {/* <Container borderBottomWidth={1} marginTop={7}></Container> */}
      </Scroll>
    </Container>
  );
};

export default Verify;
