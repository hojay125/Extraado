import React, {useState, useEffect} from 'react';

import {Container, TouchWrap} from '../helper';
import {Colors} from '../helper/constants';
import Entypo from 'react-native-vector-icons/Entypo';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../helper/fontSize';
import {H2} from '../helper/element';
import Explore from '../Screens/Home/explore';
import Favourite from '../Screens/Home/favourite';
import Bookings from '../Screens/Home/booking';

export const Page = props => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('Explore');

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Container heightPercent={'89%'} width={100} paddingHorizontal={5}>
        {active == 'Explore' ? <Explore /> : null}
        {active == 'Favourites' ? <Favourite /> : null}
        {active == 'Bookings' ? <Bookings /> : null}
      </Container>

      <Container
        heightPercent={'11%'}
        verticalAlignment={'flex-end'}
        width={100}
        elevation={30}
        paddingHorizontal={5}
        backgroundColor={'#FFFFFF'}>
        <Container
          flex={1}
          marginBottom={1}
          verticalAlignment={'center'}
          width={90}
          direction={'row'}
          horizontalAlignment={'space-evenly'}>
          <TouchWrap onPress={() => setActive('Explore')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <AntDesign
                  name="search1"
                  size={Fonts.big}
                  color={
                    active == 'Explore' ? Colors.appPrimary : Colors.appGreyText
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Explore'
                      ? Colors.appPrimary
                      : Colors.appGreyText2
                  }>
                  Explore
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Favourites')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <FontAwesome
                  name="bookmark"
                  size={Fonts.semiBig}
                  color={
                    active == 'Favourites'
                      ? Colors.appPrimary
                      : Colors.appGreyText
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Favourites'
                      ? Colors.appPrimary
                      : Colors.appGreyText2
                  }>
                  Favourites
                </H2>
              </Container>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Bookings')}>
            <Container
              height={7}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              width={20}>
              <Container>
                <MaterialCommunityIcons
                  name="calendar-check-outline"
                  size={Fonts.big}
                  color={
                    active == 'Bookings'
                      ? Colors.appPrimary
                      : Colors.appGreyText
                  }
                />
              </Container>
              <Container>
                <H2
                  size={Fonts.semiMedium}
                  color={
                    active == 'Bookings'
                      ? Colors.appPrimary
                      : Colors.appGreyText2
                  }>
                  Bookings
                </H2>
              </Container>
            </Container>
          </TouchWrap>
        </Container>
      </Container>
    </Container>
  );
};

export default Page;
