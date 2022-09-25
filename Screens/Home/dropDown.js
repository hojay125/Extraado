import React, {useState, useEffect, useCallback} from 'react';
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
import {ScrollView, View} from 'react-native';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import {Dropdown} from 'react-native-material-dropdown';
import {SmallCard} from '../../component/smallCard';
import {BigCard} from '../../component/bigCard';
import {Settings} from '../../component/settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Slider from '@react-native-community/slider';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CancelButton} from '../../component/cancelButton';

export const DropdownScreen = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [rating, setRating] = useState(1);

  const [service, setService] = useState(1);
  const [staff, setStaff] = useState(1);
  const [interior, setInterior] = useState(1);

  const [comment, setComment] = useState('');
  const [settingsModal, setSettingsModal] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const [data, setData] = useState([
    {
      value: 'All',
    },
    {
      value: 'Men',
    },
    {
      value: 'Women',
    },
  ]);
  const enableScroll = () => {
    setScrollEnabled(true);
  };

  const disableScroll = () => {
    setScrollEnabled(false);
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Container
        width={100}
        height={100}
        paddingTop={10}
        paddingHorizontal={5}
        backgroundColor={Colors.appWhite}>
        <Container width={90}>
          <Container>
            <BackButton onPress={() => props.navigation.goBack()} />
          </Container>
          <Container width={90} marginTop={2}>
            <TextInputBox
              width={85}
              height={7}
              backgroundColor={'#F9F9F9'}
              leftIcon={'search'}
              paddingLeft={25}
              borderBottomWidth={0.2}
              borderWidth={0.2}
              borderLeftWidth={0.2}
              placeholder={'Search'}
            />
          </Container>
          <Scroll>
            <Container>
              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Ladies Wash, Cut & Blow Dry</P>
              </Container>
              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Ladies Wash, Cut & Blow Dry</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Ladies Wash, Cut & Blow Dry</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Ladies Wash, Cut & Blow Dry</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Ladies Wash, Cut & Blow Dry</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Express Blow Dry (Without service)</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Blow Dry Medium</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Hair Straightening</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Express Blow Dry (Without service)</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Blow Dry Medium</P>
              </Container>

              <Container
                width={90}
                marginTop={2}
                borderColor={Colors.appGrey}
                borderBottomWidth={0.3}
                paddingVertical={2}>
                <P>Hair Straightening</P>
              </Container>
            </Container>
          </Scroll>
        </Container>
      </Container>
    </Container>
  );
};

export default DropdownScreen;
