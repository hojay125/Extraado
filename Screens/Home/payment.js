/* eslint-disable no-undef */
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
import {Switch, ScrollView} from 'react-native';
import {BackButton} from '../../component/backButton';
import {Fonts} from '../../helper/fontSize';
import {AppIcons} from '../../helper/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {TransactionCard} from '../../component/transaction';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const Payment = props => {
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [privacy1, setPrivacy1] = useState(false);

  const [carouselItems, setCarouselItems] = useState([
    {
      accountNumber: '**** **** **** 5555',
    },
    {
      accountNumber: '**** **** **** 6666',
    },
    {
      accountNumber: '**** **** **** 7766',
    },
    {
      accountNumber: '**** **** **** 8886',
    },
  ]);
  const [activeSlide, setActiveSlide] = useState(0);

  const _renderItem = ({item, index}) => {
    return (
      <Container>
        <Container
          height={20}
          width={40}
          marginLeft={-5}
          zIndex={10}
          backgroundColor={'rgba(255,255,255,0.2)'}
          borderRadius={100}
        />

        <Container
          height={30}
          width={90}
          marginTop={-15}
          backgroundColor={'#1A2D6D'}
          borderRadius={20}
        />
        <Container marginTop={-5} marginLeft={10}>
          <H2 color={Colors.appWhite}>{item.accountNumber}</H2>
        </Container>
        <Container
          height={20}
          width={40}
          marginTop={-13}
          marginLeft={55}
          zIndex={10}
          backgroundColor={'rgba(255,255,255,0.2)'}
          borderRadius={100}
        />
      </Container>
    );
  };
  const pag = () => {
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: RW(3),
          height: RH(1),
          borderRadius: 5,
          marginHorizontal: -6,
          backgroundColor: Colors.appPrimary,
        }}
        inactiveDotStyle={{
          backgroundColor: Colors.appGrey,
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Scroll>
        <Container
          height={15}
          width={100}
          direction={'row'}
          paddingTop={5}
          verticalAlignment={'center'}>
          <BackButton onPress={() => props.navigation.goBack()} />
          <Container width={63} horizontalAlignment={'center'}>
            <H1 size={Fonts.semiBig}>Payments</H1>
          </Container>

          <Container>
            <ImageWrap
              source={AppIcons.barber2}
              height={7}
              width={14}
              borderRadius={10}
            />
          </Container>
        </Container>

        <Container marginTop={3} direction={'row'}>
          <Container width={45} verticalAlignment={'center'}>
            <H2>Your Cards</H2>
          </Container>
          <TouchWrap onPress={() => props.navigation.navigate('AddPayment')}>
            <Container width={45}>
              <Container
                height={5}
                width={15}
                borderRadius={10}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}
                marginLeft={30}
                backgroundColor={Colors.appPrimary}>
                <Ionicons
                  name="add"
                  size={Fonts.semiMedium}
                  color={Colors.appWhite}
                />
              </Container>
            </Container>
          </TouchWrap>
        </Container>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Container>
            <Container
              height={20}
              width={40}
              marginLeft={-5}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />

            <Container
              height={30}
              width={83}
              marginTop={-15}
              backgroundColor={'#1A2D6D'}
              borderRadius={20}
            />
            <Container marginTop={-5} marginLeft={10}>
              <H2 color={Colors.appWhite}>**** **** **** 5555</H2>
            </Container>
            <Container
              height={20}
              width={40}
              marginTop={-13}
              marginLeft={55}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />
          </Container>

          <Container marginLeft={-8}>
            <Container
              height={20}
              width={40}
              marginLeft={-5}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />

            <Container
              height={30}
              width={83}
              marginTop={-15}
              backgroundColor={'#1A2D6D'}
              borderRadius={20}
            />
            <Container marginTop={-5} marginLeft={10}>
              <H2 color={Colors.appWhite}>**** **** **** 7655</H2>
            </Container>
            <Container
              height={20}
              width={40}
              marginTop={-13}
              marginLeft={55}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />
          </Container>

          <Container marginLeft={-8}>
            <Container
              height={20}
              width={40}
              marginLeft={-5}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />

            <Container
              height={30}
              width={83}
              marginTop={-15}
              backgroundColor={'#1A2D6D'}
              borderRadius={20}
            />
            <Container marginTop={-5} marginLeft={10}>
              <H2 color={Colors.appWhite}>**** **** **** 7644</H2>
            </Container>
            <Container
              height={20}
              width={40}
              marginTop={-13}
              marginLeft={55}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />
          </Container>

          <Container marginLeft={-8}>
            <Container
              height={20}
              width={40}
              marginLeft={-5}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />

            <Container
              height={30}
              width={83}
              marginTop={-15}
              backgroundColor={'#1A2D6D'}
              borderRadius={20}
            />
            <Container marginTop={-5} marginLeft={10}>
              <H2 color={Colors.appWhite}>**** **** **** 7644</H2>
            </Container>
            <Container
              height={20}
              width={40}
              marginTop={-13}
              marginLeft={55}
              zIndex={10}
              backgroundColor={'rgba(255,255,255,0.2)'}
              borderRadius={100}
            />
          </Container>
        </ScrollView>
        <Container
          width={40}
          direction={'row'}
          paddingHorizontal={1.5}
          horizontalAlignment={'space-between'}
          marginLeft={25}>
          <Container marginTop={-0.5}>
            <SimpleLineIcons
              name="credit-card"
              size={Fonts.big}
              color={'#434343'}
            />
          </Container>
          <Container>
            <P size={Fonts.semiMedium} color={Colors.appGrey}>
              Default Card
            </P>
          </Container>
        </Container>

        <Container
          borderBottomWidth={0.3}
          height={1}
          marginTop={10}
          borderColor={Colors.appGrey}
          width={70}
          marginLeft={10}
        />

        <Container
          marginTop={3}
          width={90}
          direction={'row'}
          horizontalAlignment={'space-between'}>
          <Container width={45} verticalAlignment={'center'}>
            <H2>Your Cards</H2>
          </Container>

          <Container
            width={30}
            horizontalAlignment={'flex-end'}
            verticalAlignment={'center'}>
            <H2>N 45400</H2>
          </Container>
        </Container>

        <Container>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </Container>
      </Scroll>
    </Container>
  );
};

export default Payment;
