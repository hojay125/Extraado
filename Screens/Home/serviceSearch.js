/* eslint-disable react-native/no-inline-styles */
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
import {ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import {SmallCard} from '../../component/smallCard';
import {Dropdown} from 'react-native-material-dropdown';
import {BigCard} from '../../component/bigCard';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
import {CancelButton} from '../../component/cancelButton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export const ServiceSearch = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [timeModal, setTimeModal] = useState(false);

  const [calenderModal, setCalenderModal] = useState(false);
  const [active, setActive] = useState('All');
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

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container height={30} marginTop={5} paddingTop={2}>
        <Container direction={'row'}>
          <CancelButton onPress={() => props.navigation.goBack()} />

          <Container width={70} marginTop={0} direction={'row'} marginLeft={5}>
            <TextInputBox
              width={70}
              height={7}
              borderWidth={0}
              borderBottomWidth={0}
              backgroundColor={'#F9F9F9'}
              // leftIcon={'search'}
              rightIcon={'search'}
              paddingLeft={25}
              placeholder={'Search for services…'}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ServiceSearch')}
              style={{
                marginLeft: '-9%',
                paddingHorizontal: '2%',
                marginTop: '-2%',
              }}>
              <Container paddingTop={3}>
                <FontAwesome
                  name="search"
                  size={Fonts.semiBig}
                  color={Colors.appDeepBlue}
                />
              </Container>
            </TouchableOpacity>
          </Container>
        </Container>
        <Container
          height={10}
          width={90}
          paddingTop={2}
          paddingLeft={18}
          paddingRight={2}
          horizontalAlignment={'space-between'}
          direction={'row'}>
          <TouchWrap
            onPress={() => props.navigation.navigate('SelectLocation')}>
            <Container
              height={5}
              width={35}
              borderRadius={5}
              borderColor={'#969696'}
              borderWidth={0.4}
              verticalAlignment={'center'}
              paddingLeft={3}>
              <P color={Colors.appGrey}>Ojota, Lagos</P>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setTimeModal(true)}>
            <Container
              height={5}
              width={30}
              verticalAlignment={'center'}
              paddingLeft={3}
              borderRadius={5}
              borderColor={'#969696'}
              borderWidth={0.4}>
              <P color={Colors.appGrey}>When?</P>
            </Container>
          </TouchWrap>
        </Container>

        <Container height={5} width={90} direction={'row'}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchWrap onPress={() => setActive('All')}>
              <Container
                height={5}
                paddingHorizontal={3}
                verticalAlignment={'center'}>
                <P color={active == 'All' ? Colors.appPrimary : '#8B8B8B'}>
                  All
                </P>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => setActive('Hair')}>
              <Container
                height={5}
                paddingHorizontal={3}
                verticalAlignment={'center'}>
                <P color={active == 'Hair' ? Colors.appPrimary : '#8B8B8B'}>
                  Hair Salon
                </P>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => setActive('Barber')}>
              <Container
                height={5}
                paddingHorizontal={3}
                verticalAlignment={'center'}>
                <P color={active == 'Barber' ? Colors.appPrimary : '#8B8B8B'}>
                  Barber
                </P>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => setActive('Nail')}>
              <Container
                height={5}
                paddingHorizontal={3}
                verticalAlignment={'center'}>
                <P color={active == 'Nail' ? Colors.appPrimary : '#8B8B8B'}>
                  Nail Salon
                </P>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => setActive('Massage')}>
              <Container
                height={5}
                paddingHorizontal={3}
                verticalAlignment={'center'}>
                <P color={active == 'Massage' ? Colors.appPrimary : '#8B8B8B'}>
                  Massage
                </P>
              </Container>
            </TouchWrap>
            <TouchWrap onPress={() => setActive('Dentist')}>
              <Container
                height={5}
                paddingHorizontal={3}
                verticalAlignment={'center'}>
                <P color={active == 'Dentist' ? Colors.appPrimary : '#8B8B8B'}>
                  Dentist
                </P>
              </Container>
            </TouchWrap>
          </ScrollView>
        </Container>
        <Container
          height={5}
          width={90}
          paddingRight={2}
          verticalAlignment={'center'}
          direction={'row'}>
          <Container paddingHorizontal={3}>
            <H1 color={Colors.appBlack}>Results (95)</H1>
          </Container>

          <Container paddingHorizontal={3} direction={'row'}>
            <Container marginTop={0.5}>
              <Entypo
                name="location-pin"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
            <Container marginLeft={1}>
              <H1 color={Colors.appBlack} size={Fonts.semiBig}>
                Map
              </H1>
            </Container>
          </Container>

          <Container
            paddingHorizontal={6}
            paddingVertical={1}
            marginLeft={10}
            borderColor={'#969696'}
            direction={'row'}
            borderWidth={0.4}
            borderRadius={5}>
            <Container marginTop={0.5}>
              <Ionicons
                name="ios-filter"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
            <Container marginLeft={1}>
              <H1 color={Colors.appBlack} size={Fonts.semiBig}>
                Fliters
              </H1>
            </Container>
          </Container>
        </Container>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <BigCard />
        <BigCard />
        <BigCard />
      </ScrollView>

      <Modal
        isVisible={timeModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setTimeModal(false)}
        onBackButtonPress={() => setTimeModal(false)}>
        <Container
          width={100}
          height={60}
          marginTop={40}
          paddingHorizontal={5}
          paddingVertical={5}
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          backgroundColor={Colors.appWhite}>
          <Container
            width={80}
            marginLeft={5}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}
            direction={'row'}>
            <H1 size={Fonts.semiBig}>Time</H1>

            <Container>
              <CancelButton onPress={() => setTimeModal(false)} />
            </Container>
          </Container>

          <Container>
            <DatePicker
              date={new Date()}
              mode={'time'}
              onDateChange={val => console.warn(val)}
            />
          </Container>
        </Container>
      </Modal>
      <Modal
        isVisible={calenderModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setCalenderModal(false)}
        onBackButtonPress={() => setCalenderModal(false)}>
        <Container
          width={100}
          height={100}
          paddingHorizontal={5}
          paddingVertical={5}
          backgroundColor={Colors.appWhite}>
          <Container
            width={80}
            marginLeft={5}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}
            direction={'row'}>
            <H1 size={Fonts.semiBig}>Time</H1>

            <Container>
              <CancelButton onPress={() => setCalenderModal(false)} />
            </Container>
          </Container>

          <Container>
            <CalendarList
              // Callback which gets executed when visible months change in scroll view. Default = undefined
              onVisibleMonthsChange={months => {
                console.log('now these months are visible', months);
              }}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={50}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={50}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              minDate={new Date()}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2030-05-30'}
            />
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};

export default ServiceSearch;
