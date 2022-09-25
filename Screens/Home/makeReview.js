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

export const MakeReview = props => {
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
        <Scroll>
          <Container width={80} verticalAlignment={'center'} direction={'row'}>
            <Container>
              <CancelButton onPress={() => props.navigation.navigate('Page')} />
            </Container>
          </Container>
          <Container width={80} marginTop={5}>
            <H1 size={Fonts.semiBig}>Leave Review</H1>
          </Container>

          <Container
            width={80}
            marginLeft={5}
            marginTop={4}
            marginBottom={5}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.barber2}
              height={20}
              width={90}
              borderRadius={10}
            />
          </Container>

          <Container width={80} marginLeft={5}>
            <Container>
              <H1 size={Fonts.semiMedium}>Prices</H1>
            </Container>
            <Container
              marginTop={2}
              direction={'row'}
              horizontalAlignment={'space-evenly'}>
              <TouchWrap onPress={() => setRating(1)}>
                <Container
                  height={6.5}
                  width={16}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={rating == 1 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={rating == 1 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    1
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={rating == 1 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
              <TouchWrap onPress={() => setRating(2)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={rating == 2 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={rating == 2 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    2
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={rating == 2 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setRating(3)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={rating == 3 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={rating == 3 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    3
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={rating == 3 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setRating(4)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={rating == 4 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={rating == 4 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    4
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={rating == 4 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setRating(5)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={rating == 5 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={rating == 5 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    5
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={rating == 5 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>
          </Container>

          {/* <Container></Container> */}

          <Container width={80} marginLeft={5}>
            <Container marginTop={4}>
              <H1 size={Fonts.semiMedium}>Service</H1>
            </Container>
            <Container
              marginTop={2}
              direction={'row'}
              horizontalAlignment={'space-evenly'}>
              <TouchWrap onPress={() => setService(1)}>
                <Container
                  height={6.5}
                  width={16}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={service == 1 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={service == 1 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    1
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={service == 1 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
              <TouchWrap onPress={() => setService(2)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={service == 2 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={service == 2 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    2
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={service == 2 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setService(3)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={service == 3 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={service == 3 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    3
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={service == 3 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setService(4)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={service == 4 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={service == 4 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    4
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={service == 4 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setService(5)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={service == 5 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={service == 5 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    5
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={service == 5 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>
          </Container>

          {/* <Container></Container> */}

          <Container width={80} marginLeft={5}>
            <Container marginTop={4}>
              <H1 size={Fonts.semiMedium}>Staff</H1>
            </Container>
            <Container
              marginTop={2}
              direction={'row'}
              horizontalAlignment={'space-evenly'}>
              <TouchWrap onPress={() => setStaff(1)}>
                <Container
                  height={6.5}
                  width={16}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={staff == 1 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={staff == 1 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    1
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={staff == 1 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
              <TouchWrap onPress={() => setStaff(2)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={staff == 2 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={staff == 2 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    2
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={staff == 2 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setStaff(3)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={staff == 3 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={staff == 3 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    3
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={staff == 3 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setStaff(4)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={staff == 4 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={staff == 4 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    4
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={staff == 4 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setStaff(5)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={staff == 5 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={staff == 5 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    5
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={staff == 5 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>
          </Container>

          {/* <Container></Container> */}
          <Container width={80} marginLeft={5} marginBottom={1}>
            <Container marginTop={4}>
              <H1 size={Fonts.semiMedium}>Interior</H1>
            </Container>
            <Container
              marginTop={2}
              direction={'row'}
              horizontalAlignment={'space-evenly'}>
              <TouchWrap onPress={() => setInterior(1)}>
                <Container
                  height={6.5}
                  width={16}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={interior == 1 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={interior == 1 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    1
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={interior == 1 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
              <TouchWrap onPress={() => setInterior(2)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={interior == 2 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={interior == 2 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    2
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={interior == 2 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setInterior(3)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={interior == 3 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={interior == 3 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    3
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={interior == 3 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setInterior(4)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={interior == 4 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={interior == 4 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    4
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={interior == 4 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setInterior(5)}>
                <Container
                  height={6.5}
                  width={15}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={interior == 5 ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={10}
                  borderWidth={0.5}>
                  <H1
                    color={interior == 5 ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.semiMedium}>
                    5
                  </H1>
                  <Container>
                    <Entypo
                      name="star"
                      size={Fonts.semiMedium}
                      color={interior == 5 ? '#FFFFFF' : '#8B8B8B'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
          <Container with={100} marginTop={2} marginLeft={5} marginBottom={5}>
            <Container marginTop={1}>
              <H1 size={Fonts.semiMedium}>Comment</H1>
            </Container>
            <Container marginTop={2}>
              <TextInputBox
                height={20}
                width={80}
                borderBottomWidth={0.2}
                borderWidth={0.2}
                borderLeftWidth={0.2}
                multiline={true}
              />
            </Container>
          </Container>

          <Container with={100} marginTop={2} marginBottom={10} marginLeft={5}>
            <Button
              width={80}
              text={'Send Review'}
              onPress={() => props.navigation.navigate('Success')}
            />
          </Container>
        </Scroll>
      </Container>
    </Container>
  );
};

export default MakeReview;
