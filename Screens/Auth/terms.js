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

export const Terms = props => {
  const [loading, setLoading] = useState(false);

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
        <Space height={15} />
        <Container>
          <H1>Terms of Use</H1>
        </Container>
        <Container marginTop={5} height={55}>
          <P>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          </P>
        </Container>
        <Container
          verticalAlignment={'center'}
          horizontalAlignment={'space-evenly'}
          direction={'row'}
          marginTop={5}>
          <TouchWrap onPress={() => props.navigation.navigate('Login')}>
            <Container
              height={6}
              width={35}
              borderRadius={10}
              borderWidth={1}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <P color={Colors.appBlack}>Cancel</P>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => props.navigation.navigate('LocationPage')}>
            <Container
              height={6}
              width={35}
              borderRadius={10}
              backgroundColor={Colors.appPrimary}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}>
              <P color={Colors.appWhite}>Accept all</P>
            </Container>
          </TouchWrap>
        </Container>
      </Scroll>
    </Container>
  );
};

export default Terms;
