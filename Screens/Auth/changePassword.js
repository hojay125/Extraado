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

export const ChangePassword = props => {
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          <P>Password reset pin verified! Create new password.</P>
        </Container>
        <Space height={35} />
        <Container>
          <TextInputBox
            placeholder={'New Password'}
            // value={email}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            // onFocus={() => setActive('Email')}
            borderColor={'#969696'}
            color={Colors.appBlack}
            borderLeftWidth={0.5}
            onChange={value => setNewPassword(value)}
          />
        </Container>
        <Space height={15} />
        <Container>
          <TextInputBox
            placeholder={'Confirm Password'}
            // value={email}
            borderBottomWidth={0.5}
            borderWidth={0.5}
            // onFocus={() => setActive('Email')}
            borderColor={'#969696'}
            color={Colors.appBlack}
            borderLeftWidth={0.5}
            onChange={value => setConfirmPassword(value)}
          />
        </Container>
        <Container marginTop={15}>
          <Button text={'Rest password'} loading={false} />
        </Container>
      </Scroll>
    </Container>
  );
};

export default ChangePassword;
