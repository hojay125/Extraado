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
import {storeData} from '../../helper/storage';

export const SelectService = props => {
  const [loading, setLoading] = useState(false);

  const storeInfo = async value => {
    console.warn('the value', value);
    const safeGender = await storeData('gender', value);
    console.warn('safeGender', safeGender);
    props.navigation.navigate('EnableNotification');
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
        <H1 size={Fonts.semiBig}>Select services for:</H1>
      </Container>

      <Container
        height={35}
        width={90}
        horizontalAlignment={'center'}
        marginTop={3}>
        <ImageWrap
          source={AppIcons.service}
          height={30}
          width={70}
          fit={'contain'}
        />
      </Container>

      <Container marginTop={5}>
        <Button
          text={'Women'}
          loading={false}
          onPress={() => storeInfo('Women')}
          // onPress={() => props.navigation.navigate('EnableNotification')}
        />
      </Container>
      <Container marginTop={2}>
        <Button
          text={'Men'}
          loading={false}
          backgroundColor={'#000000'}
          onPress={() => storeInfo('Men')}
        />
      </Container>
      <Container marginTop={2}>
        <Button
          text={'Unisex'}
          loading={false}
          backgroundColor={'#ABADB3'}
          onPress={() => storeInfo('Unisex')}
        />
      </Container>
    </Container>
  );
};

export default SelectService;
