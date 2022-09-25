/* eslint-disable no-lone-blocks */
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
import {Fonts} from '../../helper/fontSize';
import {AppIcons} from '../../helper/images';
import Feather from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';
import DatePicker from 'react-native-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {BookMark} from '../../component/bookmark';
import {ServiceCard} from '../../component/serviceCard';
import {NavigationCard} from '../../component/navigationCard';
import {ReviewCard2} from '../../component/reviewCard2';
import Modal from 'react-native-modal';
import {CancelButton} from '../../component/cancelButton';
import {ScrollView} from 'react-native';
import {Platform, Linking} from 'react-native';
import {endPoint2} from '../../helper/baseUrl';
import {getData} from '../../helper/storage';
import {Love} from '../../component/love';

export const AboutStore = props => {
  const [loading, setLoading] = useState(false);

  const [bookModal, setBookModal] = useState(false);
  const [paymentBookModal, setPaymentBookModal] = useState(false);
  const [name, setName] = useState('');
  const [timeModal, setTimeModal] = useState(false);
  const [active, setActive] = useState('Detials');
  const [bookDetails, setBookDetails] = useState('');
  const [calenderModal, setCalenderModal] = useState(false);

  const [method, setMethod] = useState('card');
  const [details, setDetails] = useState(props.route.params.value);
  const [service, setService] = useState([]);

  const check = () => {
    setBookModal(false);
    setPaymentBookModal(true);
  };

  const BookNow = item => {
    setBookModal(true);
    setBookDetails(item);
    console.warn('item', item);
  };
  const get = async () => {
    const userInfo = await getData('user');
    console.warn(userInfo);
  };
  useEffect(() => {
    console.warn('yeye', `${props.route.params.value}`);
    get();
    {
      props.route.params
        ? props.route.params.value
          ? props.route.params.value.service_id
            ? setService(props.route.params.value.service_id)
            : null
          : null
        : null;
    }
  }, []);

  const dialCall = number => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }

    Linking.openURL(phoneNumber);
  };
  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Scroll>
        <Container marginTop={5}>
          <ImageWrap
            url={
              props.route.params
                ? props.route.params.value
                  ? props.route.params.value.images
                    ? props.route.params.value.images[0].url
                      ? `${endPoint2}${props.route.params.value.images[0].url}`
                      : null
                    : null
                  : null
                : null
            }
            height={20}
            width={100}
            backgroundColor={'rgba(0,0,0,0.9)'}>
            <Container flex={1} backgroundColor={'rgba(0,0,0,0.5)'}></Container>
          </ImageWrap>
        </Container>
        <Container
          width={100}
          paddingHorizontal={3}
          marginTop={-15}
          direction={'row'}
          horizontalAlignment={'space-between'}>
          <BackButton onPress={() => props.navigation.goBack()} />
          {props.route.params.favorite ? <Love /> : <BookMark />}
        </Container>

        <Container marginTop={3} horizontalAlignment={'center'}>
          <H2 color={Colors.appWhite}>Open (Closes at 10pm)</H2>
        </Container>

        <Container
          paddingHorizontal={10}
          marginTop={4}
          direction={'row'}
          horizontalAlignment={'space-between'}>
          <Container width={55}>
            <H2 color={Colors.appBlack}>
              {props
                ? props.route
                  ? props.route.params
                    ? props.route.params.value
                      ? props.route.params.value.name
                        ? props.route.params.value.name
                        : null
                      : null
                    : null
                  : null
                : null}
            </H2>
            <P>
              {props.route.params
                ? props.route.params.value
                  ? props.route.params.value.address
                  : null
                : null}
            </P>
          </Container>

          <Container width={25} horizontalAlignment={'center'}>
            <H2 color={Colors.appBlack}>4.5</H2>
            <P>24 Reviews</P>
          </Container>
        </Container>

        <Container
          width={100}
          paddingHorizontal={10}
          height={7}
          backgroundColor={'#F9F9F9'}
          direction={'row'}
          horizontalAlignment={'space-evenly'}
          marginTop={2}>
          <TouchWrap onPress={() => setActive('Detials')}>
            <Container
              height={7}
              width={20}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <H1
                size={Fonts.semiMedium}
                color={
                  active == 'Detials' ? Colors.appPrimary : Colors.appGreyText
                }>
                Detials
              </H1>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Services')}>
            <Container
              height={7}
              width={20}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <H1
                size={Fonts.semiMedium}
                color={
                  active == 'Services' ? Colors.appPrimary : Colors.appGreyText
                }>
                Services
              </H1>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Reviews')}>
            <Container
              height={7}
              width={20}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <H1
                size={Fonts.semiMedium}
                color={
                  active == 'Reviews' ? Colors.appPrimary : Colors.appGreyText
                }>
                Reviews
              </H1>
            </Container>
          </TouchWrap>

          <TouchWrap onPress={() => setActive('Map')}>
            <Container
              height={7}
              width={20}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <H1
                size={Fonts.semiMedium}
                color={
                  active == 'Map' ? Colors.appPrimary : Colors.appGreyText
                }>
                Map
              </H1>
            </Container>
          </TouchWrap>
        </Container>

        {active == 'Detials' ? (
          <Container>
            <Container width={100} paddingHorizontal={10}>
              <P>
                {props.route.params
                  ? props.route.params.value
                    ? props.route.params.value.description
                    : null
                  : null}
              </P>
            </Container>

            <Container
              height={5}
              width={80}
              marginTop={5}
              marginLeft={10}
              borderColor={Colors.appGrey}
              direction={'row'}
              horizontalAlignment={'space-between'}
              borderBottomWidth={1}
              borderTopWidth={1}>
              <Container height={5} width={17} verticalAlignment={'center'}>
                <H1 size={Fonts.small}>Contact</H1>
              </Container>

              <Container
                height={5}
                width={30}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}
                direction={'row'}>
                <FontAwesome
                  name="phone"
                  size={Fonts.semiBig}
                  color={
                    active == 'Favourites' ? Colors.appPrimary : Colors.appBlack
                  }
                />
                <TouchWrap
                  onPress={() => {
                    props.route.params.value.phone1
                      ? dialCall(props.route.params.value.phone1)
                      : null;
                  }}>
                  <Container marginLeft={2}>
                    <H1 size={Fonts.small}>
                      {props.route.params
                        ? props.route.params.value
                          ? props.route.params.value.phone1
                          : null
                        : null}
                    </H1>
                  </Container>
                </TouchWrap>
              </Container>
              <Container
                height={5}
                width={30}
                verticalAlignment={'center'}
                horizontalAlignment={'center'}
                direction={'row'}>
                <FontAwesome
                  name="phone"
                  size={Fonts.semiBig}
                  color={
                    active == 'Favourites' ? Colors.appPrimary : Colors.appBlack
                  }
                />
                <TouchWrap
                  onPress={() => {
                    props.route.params.value.phone2
                      ? dialCall(props.route.params.value.phone2)
                      : null;
                  }}>
                  <Container marginLeft={2}>
                    <H1 size={Fonts.small}>
                      {props.route.params
                        ? props.route.params.value
                          ? props.route.params.value.phone2
                          : null
                        : null}
                    </H1>
                  </Container>
                </TouchWrap>
              </Container>
            </Container>
            <Container
              height={30}
              marginTop={2}
              width={80}
              marginLeft={5}
              paddingHorizontal={5}>
              <Container direction={'row'} paddingHorizontal={2}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Monday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>

              <Container direction={'row'} paddingHorizontal={2} marginTop={1}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Tuesday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>

              <Container direction={'row'} paddingHorizontal={2} marginTop={1}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Wednesday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>

              <Container direction={'row'} paddingHorizontal={2} marginTop={1}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Thursday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>

              <Container direction={'row'} paddingHorizontal={2} marginTop={1}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Friday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>

              <Container direction={'row'} paddingHorizontal={2} marginTop={1}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Saturday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>

              <Container direction={'row'} paddingHorizontal={2} marginTop={1}>
                <Container width={30} direction={'row'}>
                  <P color={Colors.appGreyText}>Sunday</P>
                </Container>
                <Container
                  width={45}
                  direction={'row'}
                  horizontalAlignment={'flex-end'}>
                  <P color={Colors.appGreyText}>10:00-19:00</P>
                </Container>
              </Container>
              <Container marginTop={3} paddingHorizontal={2}>
                <P color={Colors.appGreyText}>Home services? call us now</P>
              </Container>
            </Container>
          </Container>
        ) : active == 'Services' ? (
          <Container paddingLeft={5}>
            {service.map((item, index) => (
              <ServiceCard
                text1={item.name}
                price={item.price}
                text3={item.duration}
                onPress={() => BookNow(item)}
              />
            ))}
          </Container>
        ) : active == 'Map' ? (
          <Container>
            <MapView
              style={{
                height: '100%',
                width: '99%',
                borderRadius: 20,
                marginTop: 5,
                marginLeft: '0.5%',
              }}>
              <Marker
                pinColor={'#000000'}
                coordinate={{
                  latitude: 6.465422,
                  longitude: 3.406448,
                }}>
                <Entypo
                  name="location-pin"
                  size={44}
                  color={Colors.appPrimary}
                />
              </Marker>
            </MapView>

            <Container
              height={7}
              width={13}
              marginTop={-35}
              marginLeft={85}
              borderWidth={1}
              borderRadius={13}
              backgroundColor={Colors.appWhite}
              borderColor={Colors.appGrey}
              horizontalAlignment={'center'}
              verticalAlignment={'center'}>
              <TouchWrap onPress={props.onPress}>
                <Feather
                  name="navigation"
                  size={Fonts.semiBig}
                  color={Colors.appPrimary}
                />
              </TouchWrap>
            </Container>
          </Container>
        ) : (
          <Container>
            <Container
              width={90}
              verticalAlignment={'center'}
              horizontalAlignment={'center'}
              height={30}
              borderRadius={10}
              marginLeft={5}>
              <Container
                height={25}
                width={90}
                paddingHorizontal={1.5}
                borderColor={Colors.appGrey}
                direction={'row'}
                borderWidth={1}
                borderRadius={10}>
                <Container
                  width={25}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  borderColor={Colors.appGrey}
                  height={25}
                  borderRightWidth={1}>
                  <H1>4.5</H1>
                  <P color={Colors.appGreyText}>24 REVIEWS</P>
                  <Container marginTop={1}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={4.5}
                      starSize={13}
                      fullStarColor={'black'}
                    />
                  </Container>
                </Container>
                <Container
                  width={30}
                  borderColor={Colors.appGrey}
                  height={25}
                  paddingLeft={3}
                  borderRightWidth={1}>
                  <Container marginTop={2}>
                    <P color={Colors.appGreyText}>PRICE</P>
                  </Container>
                  <Container marginTop={2}>
                    <P color={Colors.appGreyText}>SERVICE</P>
                  </Container>
                  <Container marginTop={2}>
                    <P color={Colors.appGreyText}>STAFF</P>
                  </Container>
                  <Container marginTop={2}>
                    <P color={Colors.appGreyText}>LOCATION</P>
                  </Container>
                  <Container marginTop={2}>
                    <P color={Colors.appGreyText}>INTERIOR</P>
                  </Container>
                </Container>

                <Container
                  width={25}
                  borderColor={Colors.appGrey}
                  height={25}
                  paddingLeft={3}>
                  <Container marginTop={2} direction={'row'}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={4}
                      starSize={13}
                      fullStarColor={'black'}
                    />
                    <Container marginLeft={4}>
                      <P>4</P>
                    </Container>
                  </Container>
                  <Container marginTop={2} direction={'row'}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={4}
                      starSize={13}
                      fullStarColor={'black'}
                    />
                    <Container marginLeft={4}>
                      <P>4</P>
                    </Container>
                  </Container>
                  <Container marginTop={2} direction={'row'}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={3}
                      starSize={13}
                      fullStarColor={'black'}
                    />
                    <Container marginLeft={4}>
                      <P>3</P>
                    </Container>
                  </Container>
                  <Container marginTop={2} direction={'row'}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={4.5}
                      starSize={13}
                      fullStarColor={'black'}
                    />
                    <Container marginLeft={4}>
                      <P>4.5</P>
                    </Container>
                  </Container>
                  <Container marginTop={2} direction={'row'}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={5}
                      starSize={13}
                      fullStarColor={'black'}
                    />
                    <Container marginLeft={4}>
                      <P>5</P>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

            <Container
              height={8}
              width={90}
              marginLeft={5}
              marginTop={3}
              horizontalAlignment={'flex-end'}>
              <Button
                width={40}
                height={6}
                text={'Leave Review'}
                onPress={() => props.navigation.navigate('MakeReview')}
              />
            </Container>

            <ReviewCard2 />
            <ReviewCard2 />
            <ReviewCard2 />
          </Container>
        )}
      </Scroll>

      <Modal
        isVisible={bookModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setBookModal(false)}
        onBackButtonPress={() => setBookModal(false)}>
        <Container
          width={100}
          height={100}
          marginTop={10}
          paddingHorizontal={5}
          paddingVertical={2}
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          backgroundColor={Colors.appWhite}>
          <Container
            width={80}
            marginLeft={5}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}
            direction={'row'}>
            <H1 size={Fonts.semiBig}>Book a Service</H1>

            <Container>
              <CancelButton onPress={() => setBookModal(false)} />
            </Container>
          </Container>
          <Container width={80} marginLeft={5}>
            <Container marginBottom={2}>
              <P size={Fonts.semiMedium}>
                {' '}
                {props
                  ? props.route
                    ? props.route.params
                      ? props.route.params.value
                        ? props.route.params.value.name
                          ? props.route.params.value.name
                          : null
                        : null
                      : null
                    : null
                  : null}
              </P>
            </Container>
          </Container>

          <Container width={80} marginLeft={5} direction={'row'}>
            <Container marginBottom={2}>
              <P size={Fonts.semiMedium}>4.5</P>
            </Container>
            <Container marginBottom={1} marginLeft={1} marginTop={0.5}>
              <EvilIcons name="star" size={Fonts.semiBig} color={'#434343'} />
            </Container>
          </Container>

          <Container width={80} marginLeft={5} marginTop={-1}>
            <Container marginTop={2}>
              <H1 size={Fonts.semiMedium}>
                When do you want to book for this service?
              </H1>
            </Container>

            <Container
              width={80}
              direction={'row'}
              marginTop={3}
              horizontalAlignment={'space-between'}>
              <Container marginBottom={2}>
                <P size={Fonts.semiMedium}>Date</P>
              </Container>
              <TouchWrap onPress={() => setCalenderModal(true)}>
                <Container
                  direction={'row'}
                  horizontalAlignment={'space-between'}>
                  <Container marginBottom={1} marginLeft={10}>
                    <P size={Fonts.semiMedium} color={Colors.appPrimary}>
                      (Today) 26 Feb, 2021
                    </P>
                  </Container>
                  <Container marginBottom={1} marginLeft={1}>
                    <Ionicons
                      name="chevron-forward-sharp"
                      size={Fonts.semiBig}
                      color={'#434343'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>

            <Container
              width={80}
              direction={'row'}
              marginTop={3}
              horizontalAlignment={'space-between'}>
              <Container marginBottom={2}>
                <P size={Fonts.semiMedium}>Time</P>
              </Container>
              <TouchWrap onPress={() => setTimeModal(true)}>
                <Container direction={'row'}>
                  <Container marginBottom={1} marginLeft={10}>
                    <P size={Fonts.semiMedium} color={Colors.appPrimary}>
                      (1hr 10min) 11:20 AM - 12:30 PM
                    </P>
                  </Container>
                  <Container marginBottom={1} marginLeft={1}>
                    <Ionicons
                      name="chevron-forward-sharp"
                      size={Fonts.semiBig}
                      color={'#434343'}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>

            <Container
              height={20}
              width={80}
              borderTopWidth={0.3}
              borderBottomWidth={0.3}
              borderColor={Colors.appGrey}>
              <Container marginTop={3}>
                <H1 size={Fonts.semiBig}>Select Staff</H1>
              </Container>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Container
                  direction={'row'}
                  marginTop={3}
                  horizontalAlignment={'space-between'}>
                  <TouchWrap>
                    <Container horizontalAlignment={'center'}>
                      <ImageWrap
                        source={AppIcons.pickedUser}
                        height={5}
                        width={10}
                        fit={'contain'}
                      />
                      <P>Anyone</P>
                    </Container>
                  </TouchWrap>
                  <TouchWrap>
                    <Container marginLeft={5} horizontalAlignment={'center'}>
                      <ImageWrap
                        source={AppIcons.user}
                        height={5}
                        width={10}
                        fit={'contain'}
                      />
                      <P>Mary</P>
                    </Container>
                  </TouchWrap>
                  <TouchWrap>
                    <Container marginLeft={5} horizontalAlignment={'center'}>
                      <ImageWrap
                        source={AppIcons.user}
                        height={5}
                        width={10}
                        fit={'contain'}
                      />
                      <P>Jess</P>
                    </Container>
                  </TouchWrap>
                  <TouchWrap>
                    <Container marginLeft={5} horizontalAlignment={'center'}>
                      <ImageWrap
                        source={AppIcons.user}
                        height={5}
                        width={10}
                        fit={'contain'}
                      />
                      <P>Timo</P>
                    </Container>
                  </TouchWrap>
                  <TouchWrap>
                    <Container marginLeft={5} horizontalAlignment={'center'}>
                      <ImageWrap
                        source={AppIcons.user}
                        height={5}
                        width={10}
                        fit={'contain'}
                      />
                      <P>Lucy</P>
                    </Container>
                  </TouchWrap>

                  <TouchWrap>
                    <Container marginLeft={5} horizontalAlignment={'center'}>
                      <ImageWrap
                        source={AppIcons.user}
                        height={5}
                        width={10}
                        fit={'contain'}
                      />
                      <P>Anyone</P>
                    </Container>
                  </TouchWrap>
                </Container>
              </ScrollView>
            </Container>
            <Container
              width={80}
              borderBottomWidth={0.3}
              paddingVertical={1}
              borderColor={Colors.appGrey}
              direction={'row'}
              marginTop={3}
              horizontalAlignment={'space-between'}>
              <Container marginBottom={2}>
                <H1 size={Fonts.semiMedium}>Deluxe Manicure</H1>
              </Container>

              <Container marginBottom={1} marginLeft={10}>
                <H1 size={Fonts.semiMedium} color={Colors.appPrimary}>
                  N 10,000
                </H1>
              </Container>
            </Container>

            <Container marginBottom={1} marginTop={3}>
              <H1 size={Fonts.semiMedium} color={'#ABADB3'}>
                Leave a note (optional)
              </H1>
            </Container>
            <TouchWrap>
              <Container
                marginBottom={1}
                marginTop={3}
                horizontalAlignment={'center'}>
                <H1 size={Fonts.semiMedium} color={Colors.appPrimary}>
                  Add another service
                </H1>
              </Container>
            </TouchWrap>
            <Container marginTop={2} marginLeft={2}>
              <Button width={80} text={'Book'} onPress={() => check()} />
            </Container>
          </Container>
        </Container>
      </Modal>

      <Modal
        isVisible={paymentBookModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setPaymentBookModal(false)}
        onBackButtonPress={() => setPaymentBookModal(false)}>
        <Container
          width={100}
          height={100}
          marginTop={10}
          paddingHorizontal={5}
          paddingVertical={5}
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          backgroundColor={Colors.appWhite}>
          <Container
            width={90}
            marginLeft={5}
            verticalAlignment={'center'}
            horizontalAlignment={'space-between'}
            direction={'row'}>
            <H1 size={Fonts.semiBig}>
              You are about to book for this service.
            </H1>
          </Container>
          <Container width={80} marginLeft={5}>
            <Container marginBottom={2} marginTop={2}>
              <P size={Fonts.small} color={Colors.appGreyText}>
                By booking on extraado, you agree to the processing of Your
                personal data. Read More
              </P>
            </Container>
          </Container>

          <Container width={80} marginLeft={5} marginTop={-1}>
            <Container marginTop={2}>
              <H1 size={Fonts.semiMedium}>PAYMENT METHODS</H1>
            </Container>

            <Container
              height={10}
              marginTop={2}
              width={80}
              verticalAlignment={'center'}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Container
                  direction={'row'}
                  horizontalAlignment={'space-between'}>
                  <TouchWrap onPress={() => setMethod('card')}>
                    <Container
                      borderRadius={10}
                      height={7}
                      direction={'row'}
                      horizontalAlignment={'center'}
                      verticalAlignment={'center'}
                      borderWidth={1}
                      borderColor={
                        method == 'card' ? Colors.appPrimary : Colors.appGrey
                      }
                      width={40}>
                      <Container>
                        <ImageWrap
                          source={AppIcons.bankCard}
                          height={5}
                          width={10}
                          fit={'contain'}
                        />
                      </Container>

                      <P
                        color={
                          method == 'card' ? Colors.appPrimary : Colors.appGrey
                        }>
                        Bank card
                      </P>
                    </Container>
                  </TouchWrap>

                  <TouchWrap onPress={() => setMethod('later')}>
                    <Container
                      marginLeft={5}
                      borderRadius={10}
                      height={7}
                      direction={'row'}
                      horizontalAlignment={'center'}
                      verticalAlignment={'center'}
                      borderWidth={1}
                      borderColor={
                        method == 'later' ? Colors.appPrimary : Colors.appGrey
                      }
                      width={40}>
                      <Container>
                        <ImageWrap
                          source={AppIcons.bankCard}
                          height={5}
                          width={10}
                          fit={'contain'}
                        />
                      </Container>
                      <P
                        color={
                          method == 'later' ? Colors.appPrimary : Colors.appGrey
                        }>
                        Pay Later
                      </P>
                    </Container>
                  </TouchWrap>

                  <TouchWrap onPress={() => setMethod('spot')}>
                    <Container
                      marginLeft={5}
                      borderRadius={10}
                      height={7}
                      direction={'row'}
                      horizontalAlignment={'center'}
                      verticalAlignment={'center'}
                      borderWidth={1}
                      borderColor={
                        method == 'spot' ? Colors.appPrimary : Colors.appGrey
                      }
                      width={40}>
                      <Container>
                        <ImageWrap
                          source={AppIcons.bankCard}
                          height={5}
                          width={10}
                          fit={'contain'}
                        />
                      </Container>
                      <P
                        color={
                          method == 'spot' ? Colors.appPrimary : Colors.appGrey
                        }>
                        Pay at Spot
                      </P>
                      {/* <Container marginLeft={7} marginTop={-7}>
                        <AntDesign
                          name="checkcircle"
                          size={Fonts.semiBig}
                          color={Colors.appPrimary}
                        />
                      </Container> */}
                    </Container>
                  </TouchWrap>
                </Container>
              </ScrollView>
            </Container>
            <Container borderColor={Colors.AppBackground} marginTop={4}>
              <H1 size={Fonts.semiMedium}>Payment Details</H1>
            </Container>
            <Container marginTop={3}>
              <TextInputBox
                placeholder={'Cardholder name'}
                backgroundColor={Colors.AppBackground}
                borderBottomWidth={0.2}
                width={80}
                borderWidth={0.2}
                borderLeftWidth={0.2}
              />
            </Container>

            <Container marginTop={3}>
              <TextInputBox
                placeholder={'Card number'}
                backgroundColor={Colors.AppBackground}
                borderBottomWidth={0.2}
                width={80}
                rightIcon={'lock'}
                borderWidth={0.2}
                borderLeftWidth={0.2}
              />
            </Container>

            <Container
              marginTop={3}
              width={80}
              horizontalAlignment={'space-between'}
              direction={'row'}>
              <TextInputBox
                placeholder={'Date'}
                backgroundColor={Colors.AppBackground}
                borderBottomWidth={0.2}
                borderWidth={0.2}
                borderLeftWidth={0.2}
                width={40}
              />
              <TextInputBox
                placeholder={'CVV'}
                backgroundColor={Colors.AppBackground}
                width={35}
                borderBottomWidth={0.2}
                borderWidth={0.2}
                borderLeftWidth={0.2}
              />
            </Container>
            <TouchWrap>
              <Container
                marginBottom={1}
                marginTop={3}
                horizontalAlignment={'center'}>
                <H1 size={Fonts.semiMedium} color={Colors.appPrimary}>
                  Deluxe Manicure {''} {''} {''} N 10,000
                </H1>
              </Container>
            </TouchWrap>
            <Container
              marginTop={4}
              marginLeft={2}
              direction={'row'}
              horizontalAlignment={'space-between'}>
              <Button
                width={35}
                text={'Cancel'}
                height={7}
                backgroundColor={Colors.appWhite}
                color={Colors.appPrimary}
                borderWidth={1}
                borderColor={Colors.appPrimary}
                borderRadius={13}
              />
              <Button
                width={35}
                text={'Book'}
                height={7}
                borderRadius={13}
                onPress={() => props.navigation.navigate('Booked')}
              />
            </Container>
          </Container>
        </Container>
      </Modal>

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
        onBackdropPress={() => setTimeModal(false)}
        onBackButtonPress={() => setTimeModal(false)}>
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
                console.warn('now these months are visible', months);
              }}
              // Max amount of months allowed to scroll to the past. Default = 50
              pastScrollRange={0}
              // Max amount of months allowed to scroll to the future. Default = 50
              futureScrollRange={5}
              // Enable or disable scrolling of calendar list
              scrollEnabled={true}
              // Enable or disable vertical scroll indicator. Default = false
              showScrollIndicator={true}
              minDate={new Date()}
              // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
              maxDate={'2030-05-30'}
              onDayPress={day => {
                console.warn('selected day', day);
              }}
              markedDates={{
                '2021-09-16': {
                  selected: true,
                  marked: true,
                  selectedColor: 'blue',
                },
                '2021-09-17': {marked: true},
                '2021-09-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                '2021-09-19': {disabled: true, disableTouchEvent: true},
              }}
            />
          </Container>
        </Container>
      </Modal>
    </Container>
  );
};

export default AboutStore;
