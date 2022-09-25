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
import {ScrollView} from 'react-native';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import {SmallCard} from '../../component/smallCard';
import {Dropdown} from 'react-native-material-dropdown';
import {BigCard} from '../../component/bigCard';
import {BookingCard} from '../../component/bookingCard';
import {useNavigation} from '@react-navigation/native';

export const Bookings = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
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
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Container height={10} marginTop={5} direction={'row'}>
        <TouchWrap onPress={() => navigation.openDrawer()}>
          <Container height={10} width={30} verticalAlignment={'center'}>
            <ImageWrap
              source={AppIcons.menu}
              height={5}
              width={10}
              fit={'contain'}
            />
          </Container>
        </TouchWrap>

        <Container
          height={10}
          width={50}
          paddingLeft={10}
          verticalAlignment={'center'}>
          <ImageWrap
            source={AppIcons.appLogo}
            height={5}
            width={10}
            fit={'contain'}
          />
        </Container>
      </Container>
      <Container width={90} direction={'row'} marginBottom={2}>
        <Container width={59} marginTop={-1}>
          <TextInputBox
            width={55}
            height={7}
            leftIcon={'search'}
            paddingLeft={25}
            placeholder={'search'}
            borderWidth={0.2}
            borderLeftWidth={0.2}
            borderRadius={5}
            borderBottomWidth={0.2}
          />
        </Container>
        <Container>
          <Dropdown
            data={data}
            inputContainerStyle={{
              borderBottomColor: 'transparent',
              marginBottom: RH(-1.5),

              fontSize: 20,
            }}
            pickerStyle={{
              height: '30%',
              labelFontSize: 4,
              fontSize: 10,
              width: '30%',
              marginLeft: RW(62),
              marginTop: RH(11),
            }}
            placeholder="All"
            placeholderSize={4}
            fontSize={13}
            selectedItemColor={'grey'}
            dropdownOffset={{top: 0}}
            containerStyle={{
              fontSize: 10,
              labelFontSize: 4,
              backgroundColor: '#FAFAFA',
              borderWidth: 0.2,
              borderRadius: 5,

              borderColor: Colors.appGrey,
              width: RW(30),

              marginLeft: '1%',
              height: RH(5),

              justifyContent: 'center',
              padding: 10,
            }}
          />
        </Container>
      </Container>
      <Container width={90} direction={'row'} marginBottom={2}>
        <Container width={59}>
          <H1 size={Fonts.semiBig}>Upcoming Bookings (2)</H1>
        </Container>
      </Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BookingCard
          status={'PENDING'}
          price={'N 1,200'}
          name={'Haircut'}
          onPress={() => navigation.navigate('AboutBookings')}
        />
        <BookingCard
          status={'CONFIRMED'}
          price={'N 10,000'}
          name={'Deluxe Manicure'}
        />
        <BookingCard status={'COMPLETED'} price={'N 1,200'} name={'Haircut'} />
        <BookingCard
          status={'CANCELLED'}
          name={'Gents Wash, Pedicure & Manicure'}
        />
      </ScrollView>
    </Container>
  );
};

export default Bookings;
