/* eslint-disable react-native/no-inline-styles */
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
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-material-dropdown';
import Toast from 'react-native-toast-message';
import {SmallCard} from '../../component/smallCard';
import {BigCard} from '../../component/bigCard';
import {Settings} from '../../component/settings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Slider from '@react-native-community/slider';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';
import LottieView from 'lottie-react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {CancelButton} from '../../component/cancelButton';
import {getData} from '../../helper/storage';
import {axiosCalls, axiosCallsNoAuth} from '../../helper/api';
import {requests} from '../../helper/queries';
import {handleQuery, handleQuery2} from '../../helper/graphql';
import {endPoint2} from '../../helper/baseUrl';
import {RouteContext} from '../../helper/route_context';

export const Explore = props => {
  const {setCurrentState} = React.useContext(RouteContext);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const [rating, setRating] = useState(1);
  const [settingsModal, setSettingsModal] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [type, setType] = useState('Unisex');
  const [active, setActive] = useState('All');
  const [searchValue, setSearchValue] = useState('');
  const [companies, setCompanies] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [notNowModal, setNotNowModal] = useState(false);
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

  const move = () => {
    setSettingsModal(false);
    // navigation.navigate('MakeReview');
  };
  useEffect(() => {
    // get();
    submit();
    getFavorite();
  }, []);

  const getFavorite = async () => {
    try {
      const userInfo = await getData('user');
      if (userInfo) {
        const userDetails = JSON.parse(userInfo);

        setLoading(true);
        console.warn('rs>>>>');

        if (userDetails.id) {
          try {
            let query2 =
              requests.queries(`favorites(where:{user_id:"${userDetails.id}"}){
          id
            company_id{
              name
              address
              phone1
                phone2
                description
              id
              long
              closing_time
              from_price
              images{
                id
                url
              }
            }
          }`);
            console.warn('<<>> THIS', query2);
            let data2 = await handleQuery(query2);

            console.warn('data>>>>>>222', data2);
            setFavourite(data2.data.favorites);
            setLoading(false);
          } catch (e) {
            setLoading(false);
            console.warn('ppp', e);
            Toast.show({
              type: 'error',
              position: 'bottom',
              text1: 'Error',
              text2: `${e.msg}`,
              visibilityTime: 4000,
              autoHide: false,
              topOffset: 30,
              bottomOffset: 60,
            });
          }
        } else {
          console.warn('guest');
        }
      } else {
        console.warn('you are not log in');
        setLoading(false);
      }
    } catch (e) {
      console.warn('eee', e);
    }
  };

  const get = async () => {
    const userInfo = await getData('user');
    console.warn('check', userInfo);
  };

  const removeFavorite = async item => {
    const userInfo = await getData('user');
    console.warn('check', userInfo);
    const userDetails = JSON.parse(userInfo);
    console.warn('userDetails', userDetails.id);
    setLoading(true);
    console.warn('rs>>>>');

    if (userDetails.id) {
      try {
        let query2 =
          requests.mutation(`deleteFavorite(input:{where:{id:${item}}}){
          favorite{
            id
          }
          }`);
        console.warn('<<>>', query2);
        let data2 = await handleQuery(query2);
        Toast.show({
          type: 'success',
          position: 'bottom',
          text1: 'Successfully',
          text2: 'Remove from favorite',
          visibilityTime: 4000,
          autoHide: false,
          topOffset: 30,
          bottomOffset: 60,
        });
        console.warn('removed', data2);
        getFavorite();
        submit();
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.warn('ppp', e);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error',
          text2: `${e.msg}`,
          visibilityTime: 4000,
          autoHide: false,
          topOffset: 30,
          bottomOffset: 60,
        });
      }
    } else {
      console.warn('nothing to remove');
    }
  };
  const checklist = data => {
    if (data) {
      if (data.favorites) {
        if (data.favorites[0]) {
          let ans = favourite.find(a => a.id == data.favorites[0].id);

          if (ans) {
            return true;
          }
        }
      }
    }
  };
  const search = async value => {
    const userInfo = await getData('user');
    // console.warn('check', userInfo);
    const userDetails = JSON.parse(userInfo);
    // console.warn('userDetails', userDetails.id);
    if (value == 'All') {
      submit();
    } else {
      if (userDetails.id) {
        try {
          setLoading(true);
          let query =
            requests.queries(`categories(where: {name_contains: "${value}"}){
            id
            name
            service_id{
              company_id{
                phone1
                phone2
                description
                id
            ratings{
              id
            }
                address
                id
                from_price
                name
                favorites(where:{user_id:"${userDetails.id}"}){
                  id
                  user_id{
                    id
                  }
                }
                images{
                  id
                  url
                }
            }
          }
        }`);
          console.log('<<>>', query);
          let data = await handleQuery2(query);
          let all = [];
          console.warn(
            'data>>>>>> service_id',
            data.data.categories[0].service_id,
          );
          setLoading(false);
          if (data.data) {
            if (data.data.categories[0]) {
              if (data.data.categories[0].service_id) {
                data.data.categories[0].service_id.map(item => {
                  console.warn('item to push', item.company_id);

                  if (item.company_id != null) {
                    console.warn('push');
                    all.push(item.company_id);
                  } else {
                    console.warn('null');
                    setCompanies([]);
                  }
                });
                setCompanies(all);
              }
              setCompanies([]);
            }
            setCompanies([]);
          }
          setCompanies(all);
        } catch (e) {
          setLoading(false);
          console.warn('e', e);
          console.warn('e', e.response);
        }
      } else {
        try {
          setLoading(true);
          let query =
            requests.queries(`categories(where: {name_contains: "${value}"}){
            id
            name
            service_id{
              company_id{
                phone1
                phone2
                description
                id
            ratings{
              id
            }
                address
                id
                from_price
                name
                favorites{
                  id
                  user_id{
                    id
                  }
                }
                images{
                  id
                  url
                }
            }
          }
        }`);
          console.log('<<>>', query);
          let data = await handleQuery2(query);
          let all = [];
          console.warn(
            'data>>>>>> service_id',
            data.data.categories[0].service_id,
          );
          setLoading(false);
          if (data.data) {
            if (data.data.categories[0]) {
              if (data.data.categories[0].service_id) {
                data.data.categories[0].service_id.map(item => {
                  console.warn('item to push', item.company_id);

                  if (item.company_id != null) {
                    console.warn('push');
                    all.push(item.company_id);
                  } else {
                    console.warn('null');
                    setCompanies([]);
                  }
                });
                setCompanies(all);
              }
              setCompanies([]);
            }
            setCompanies([]);
          }
          setCompanies(all);
        } catch (e) {
          setLoading(false);
          console.warn('e', e);
          console.warn('e', e.response);
        }
      }
    }
  };

  const search2 = async value => {
    const userInfo = await getData('user');
    console.warn('check', userInfo);
    const userDetails = JSON.parse(userInfo);
    console.warn('userDetails', userDetails.id);
    setSearchValue(value);
    if (value == 'All') {
      submit();
    } else {
      if (userDetails.id) {
        try {
          let query =
            requests.queries(`categories(where: {name_contains: "${value}"}){
           
            name
            service_id{
              company_id{
                id
                phone1
                phone2
                description
            ratings{
              id
            }
                address
                id
                from_price
                name
                favorites(where:{user_id:"${userDetails.id}"}){
                  id
                  user_id{
                    id
                  }
                }
                images{
                  id
                  url
                }
            }
          }
        }`);
          console.log('<<>>', query);
          let data1 = await handleQuery2(query);
          let all = [];
          console.warn('data>>>>>>', data1);
          if (data1.data.categories.length != 0) {
            if (data1.data.categories[0]) {
              if (data1.data.categories[0].service_id) {
                data1.data.categories[0].service_id.map(item => {
                  console.warn('item to push', item.company_id);

                  if (item.company_id != null) {
                    console.warn('push');
                    all.push(item.company_id);
                  } else {
                    console.warn('null1');
                  }
                });

                console.warn('null2');
              }

              console.warn('null3');
            }

            console.warn('null4');
          } else {
            console.warn('null5');
          }

          let query2 =
            requests.queries(`services(where: {name_contains: "${value}"}){
             
              price
              name
              duration
              company_id{
                phone1
                phone2
                id
                name
                favorites(where:{user_id:"${userDetails.id}"}){
                  id
                  user_id{
                    id
                  }
                }
                from_price
                description
                address
                lat
                long
                images{
                          id
                          url
                        }
                      }
          }`);
          console.warn('<<>>', query2);
          let data2 = await handleQuery2(query2);

          console.warn('data>>>>>>222', data2);

          data2.data.services.map((item, index) => {
            console.warn('itemreal', item);
            all.push(item);
          });
          setCompanies(all);
        } catch (e) {
          setLoading(false);
          console.warn('e>>>>>', e);
          console.warn('e', e.response);
        }
      } else {
        try {
          let query =
            requests.queries(`categories(where: {name_contains: "${value}"}){
           
            name
            service_id{
              company_id{
                id
                phone1
                phone2
                description
            ratings{
              id
            }
                address
                id
                from_price
                name
                favorites{
                  id
                  user_id{
                    id
                  }
                }
                images{
                  id
                  url
                }
            }
          }
        }`);
          console.log('<<>>', query);
          let data1 = await handleQuery2(query);
          let all = [];
          console.warn('data>>>>>>', data1);
          if (data1.data.categories.length != 0) {
            if (data1.data.categories[0]) {
              if (data1.data.categories[0].service_id) {
                data1.data.categories[0].service_id.map(item => {
                  console.warn('item to push', item.company_id);

                  if (item.company_id != null) {
                    console.warn('push');
                    all.push(item.company_id);
                  } else {
                    console.warn('null1');
                  }
                });

                console.warn('null2');
              }

              console.warn('null3');
            }

            console.warn('null4');
          } else {
            console.warn('null5');
          }

          let query2 =
            requests.queries(`services(where: {name_contains: "${value}"}){
             
              price
              name
              duration
              company_id{
                phone1
                phone2
                id
                name
                favorites{
                  id
                  user_id{
                    id
                  }
                }
                from_price
                description
                address
                lat
                long
                images{
                          id
                          url
                        }
                      }
          }`);
          console.warn('<<>>', query2);
          let data2 = await handleQuery2(query2);

          console.warn('data>>>>>>222', data2);

          data2.data.services.map((item, index) => {
            console.warn('itemreal', item);
            all.push(item);
          });
          setCompanies(all);
        } catch (e) {
          setLoading(false);
          console.warn('e>>>>>', e);
          console.warn('e', e.response);
        }
      }
    }
  };

  const bookMark = async item => {
    console.warn('rs88', item);
    const userToken = await getData('user');
    if (userToken) {
      const userData = JSON.parse(userToken);

      console.warn('userToken?>>>>', userData);
      if (userData) {
        PostFavorite(item.company_id ? item.company_id : item, userData);
      } else {
      }
    } else {
      setNotNowModal(true);
      // alert('You cant add to favorite as a guest, need to loging');
      // navigation.navigate('Login');
    }
  };

  const goToLogin = () => {
    setNotNowModal(false);
    setCurrentState('login');
  };

  const PostFavorite = async (item, data) => {
    setLoading(true);
    console.warn('rs>>>>');
    try {
      console.warn('rs88');
      const userToken = await getData('user');
      console.warn('userToken?>>>>', userToken);

      let payLoad = {
        user_id: data.id,
        company_id: item.id,
      };
      console.warn('payLoad', payLoad);

      let res = await axiosCalls('favorites', 'POST', payLoad);
      if (res) {
        setLoading(false);
        console.warn('ressss', res);
        if (res.er) {
          // console.warn('error1', res.er);
          // Toast.show({
          //   type: 'error',
          //   position: 'bottom',
          //   text1: 'Error',
          //   text2: 'no oo',
          //   visibilityTime: 4000,
          //   autoHide: false,
          //   topOffset: 30,
          //   bottomOffset: 60,
          // });

          setLoading(false);
        } else {
          getFavorite();
          submit();
          console.warn('success', res.data);
          Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Successfully',
            text2: 'Added to favorite',
            visibilityTime: 4000,
            autoHide: false,
            topOffset: 30,
            bottomOffset: 60,
          });

          setLoading(false);
        }
      }
    } catch (e) {
      console.warn('ppp', e.msg);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error',
        text2: `${e.msg}`,
        visibilityTime: 4000,
        autoHide: false,
        topOffset: 30,
        bottomOffset: 60,
      });
    }
  };

  const submit = async () => {
    setLoading(true);
    console.warn('rs>>>>');
    const userInfo = await getData('user');
    // console.warn('check', userInfo);

    if (userInfo) {
      const userDetails = JSON.parse(userInfo);
      console.warn('userDetails', userDetails.id);

      if (userDetails.id) {
        try {
          let query2 = requests.queries(`companies{
          id
          phone1
          phone2
          description
          images{
            id
            url
          }
          name
          address
          from_price
          ratings{
            id
          }
          favorites(where:{user_id:"${userDetails.id}"}){
            id
            user_id{
              id
            }
          }
          service_id{
            name
            description
            duration
            id
          }
        }`);
          console.warn('<<>>', query2);
          let data2 = await handleQuery(query2);

          console.warn('data>>>>>>222', data2);
          setCompanies(data2.data.companies);
          setLoading(false);
        } catch (e) {
          setLoading(false);
          console.warn('pppyyyyy>>>>', e);
          // Toast.show({
          //   type: 'error',
          //   position: 'bottom',
          //   text1: 'Error',
          //   text2: `${e.msg}`,
          //   visibilityTime: 4000,
          //   autoHide: false,
          //   topOffset: 30,
          //   bottomOffset: 60,
          // });
        }
      } else {
        console.warn('testing');
      }
    } else {
      console.warn('hmmmm');
      try {
        let query2 = requests.queries(`companies{
        id
        phone1
        phone2
        description
        images{
          id
          url
        }
        name
        address
        from_price
        ratings{
          id
        }
        favorites{
          id
          user_id{
            id
          }
        }
        service_id{
          name
          description
          duration
          id
        }
      }`);
        console.warn('<<>>', query2);
        let data2 = await handleQuery2(query2);

        console.warn('data>>>>>>222', data2);
        setCompanies(data2.data.companies);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.warn('ppp>>>>', e);
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error',
          text2: `${e.msg}`,
          visibilityTime: 4000,
          autoHide: false,
          topOffset: 30,
          bottomOffset: 60,
        });
      }
    }
  };

  const CategorySearch = value => {
    console.warn('yes', value);
    setActive(value);
    search(value);
  };

  return (
    <Container flex={1} backgroundColor={Colors.appWhite}>
      <Container height={10} marginTop={2} direction={'row'}>
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
      <Container width={90} direction={'row'} marginBottom={2} paddingLeft={3}>
        <Container width={70} marginTop={0} direction={'row'}>
          <TextInputBox
            width={67}
            height={7}
            borderWidth={0}
            borderBottomWidth={0}
            backgroundColor={'#F9F9F9'}
            // leftIcon={'search'}
            color={Colors.appBlack}
            rightIcon={'search'}
            paddingLeft={25}
            placeholder={'Search for services…'}
            onChange={value => search2(value)}
          />
          <TouchableOpacity
            onPress={() => search(searchValue)}
            style={{
              marginLeft: '-12%',
              paddingHorizontal: '2%',
            }}>
            <Container paddingTop={2.5} marginLeft={1}>
              <FontAwesome
                name="search"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
          <Container></Container>
        </Container>
        <Container>
          <Settings onPress={() => setSettingsModal(true)} />
        </Container>
      </Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Container
            height={10}
            marginBottom={5}
            marginTop={5}
            direction={'row'}
            verticalAlignment={'center'}>
            <SmallCard
              image={active == 'All' ? AppIcons.all : AppIcons.all2}
              text={'All'}
              active={active}
              bgColor={active == 'All' ? Colors.appPrimary : null}
              onPress={() => CategorySearch('All')}
            />
            <Container marginLeft={3}>
              <SmallCard
                image={AppIcons.salon}
                text={'Hair Salon'}
                bgColor={'none'}
                active={active}
                bgColor={active == 'Hair' ? Colors.appPrimary : null}
                onPress={() => CategorySearch('Hair')}
              />
            </Container>
            <Container marginLeft={3}>
              <SmallCard
                image={AppIcons.barber}
                text={'Barber'}
                bgColor={'none'}
                bgColor={active == 'Barber' ? Colors.appPrimary : null}
                active={active}
                onPress={() => CategorySearch('Barber')}
              />
            </Container>
            <Container marginLeft={3}>
              <SmallCard
                image={AppIcons.nail}
                text={'Nail'}
                bgColor={'none'}
                active={active}
                bgColor={active == 'Nail' ? Colors.appPrimary : null}
                onPress={() => CategorySearch('Nail')}
              />
            </Container>
            <Container width={20}></Container>
          </Container>
        </ScrollView>

        {companies.length != 0 ? (
          companies.map((item, index) => (
            <Container>
              {console.warn('item', item)}
              <BigCard
                contain={checklist(item)}
                onPress={() =>
                  item.company_id
                    ? console.warn('yes')
                    : navigation.navigate('AboutStore', {
                        value: item,
                        favorite: checklist(item),
                      })
                }
                name={
                  item.company_id
                    ? item.company_id.name
                    : item.name
                    ? item.name
                    : null
                }
                address={
                  item.address
                    ? item.address
                    : item.company_id
                    ? item.company_id.address
                    : null
                }
                amount={
                  item.company_id
                    ? item.price
                    : item.from_price
                    ? item.from_price
                    : null
                }
                image={
                  item.images
                    ? `${endPoint2}${item.images[0].url}`
                    : item.company_id
                    ? `${endPoint2}${item.company_id.images[0].url}`
                    : null
                }
                rate={4.5}
                active={item.company_id ? true : false}
                serviceName={item.company_id ? item.name : null}
                ServiceTime={'30mins'}
                ServiceTime={item.company_id ? item.price : null}
                onTap={() => bookMark(item)}
                onRemove={() => removeFavorite(item.favorites[0].id)}
              />
            </Container>
          ))
        ) : (
          <Container flex={1} horizontalAlignment={'center'} marginTop={-6}>
            <LottieView
              source={require('../../helper/empty.json')}
              autoPlay
              loop
              style={{width: RW(50), height: RH(60)}}
            />
          </Container>
        )}
      </ScrollView>

      <Modal
        isVisible={settingsModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setSettingsModal(false)}
        onBackButtonPress={() => setSettingsModal(false)}>
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
            <H1 size={Fonts.semiBig}>Filter your search</H1>

            <Container>
              <CancelButton onPress={() => setSettingsModal(false)} />
            </Container>
          </Container>
          <Container height={10} width={80} marginLeft={5}>
            <Container marginBottom={2}>
              <H1 size={Fonts.semiMedium}>Services</H1>
            </Container>

            {/* <TouchWrap
              onPress={() => props.navigation.navigate('DropdownScreen')}>
              <TextInputBox
                placeholder={'Nails'}
                borderBottomWidth={0.2}
                borderWidth={0.2}
                borderLeftWidth={0.2}
                width={80}
                height={6.5}
              />
            </TouchWrap> */}

            <Container
              width={80}
              height={6.5}
              borderWidth={0.3}
              borderRadius={5}
              direction={'row'}
              verticalAlignment={'center'}
              paddingHorizontal={2}
              horizontalAlignment={'space-between'}
              borderColor={Colors.appGrey}>
              <P>Nails</P>

              <Container marginBottom={1} marginLeft={1}>
                <Ionicons
                  name="chevron-forward-sharp"
                  size={Fonts.semiBig}
                  color={'#434343'}
                />
              </Container>
            </Container>

            {/* <Button
              width={80}
              height={6.5}
              onPress={() => navigation.navigate('DropdownScreen')}
            /> */}
          </Container>

          <Container height={10} width={80} marginLeft={5} marginTop={4}>
            <Container direction={'row'} horizontalAlignment={'space-between'}>
              <H1 size={Fonts.semiMedium}>Cost</H1>
              <H1 size={Fonts.semiMedium} color={Colors.appPrimary}>
                N 0 - N 10,000
              </H1>
            </Container>
            <Slider
              style={{width: '108%', height: 30, marginLeft: '-4%'}}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={'black'}
              minimumTrackTintColor={Colors.appBlack}
              maximumTrackTintColor={Colors.appGrey}
            />
          </Container>

          <Container marginBottom={2} width={80} marginLeft={5}>
            <Container direction={'row'} horizontalAlignment={'space-between'}>
              <H1 size={Fonts.semiMedium}>Distance</H1>
              <H1 size={Fonts.semiMedium} color={Colors.appPrimary}>
                500m
              </H1>
            </Container>
            <Slider
              style={{width: '108%', height: 30, marginLeft: '-4%'}}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={'black'}
              minimumTrackTintColor={Colors.appBlack}
              maximumTrackTintColor={Colors.appGrey}
            />
          </Container>

          <Container width={80} marginLeft={5}>
            <Container>
              <H1 size={Fonts.semiMedium}>Ratings</H1>
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

          <Container width={80} marginLeft={5}>
            <Container marginTop={2}>
              <H1 size={Fonts.semiMedium}>Gender</H1>
            </Container>
            <Container
              marginTop={2}
              direction={'row'}
              horizontalAlignment={'space-evenly'}>
              <TouchWrap onPress={() => setType('Unisex')}>
                <Container
                  height={7}
                  width={25}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={type == 'Unisex' ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={8}
                  borderWidth={0.5}>
                  <H1
                    color={type == 'Unisex' ? '#FFFFFF' : '#8B8B8B'}
                    size={Fonts.small}>
                    Unisex
                  </H1>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setType('Female')}>
                <Container
                  height={7}
                  width={25}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={type == 'Female' ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={8}
                  borderWidth={0.5}>
                  <H1
                    color={type == 'Female' ? '#FFFFFF' : Colors.appPrimary}
                    size={Fonts.small}>
                    Female
                  </H1>
                </Container>
              </TouchWrap>

              <TouchWrap onPress={() => setType('Male')}>
                <Container
                  height={7}
                  width={25}
                  direction={'row'}
                  verticalAlignment={'center'}
                  horizontalAlignment={'center'}
                  backgroundColor={type == 'Male' ? Colors.appPrimary : null}
                  borderColor={Colors.appPrimary}
                  borderRadius={8}
                  borderWidth={0.5}>
                  <H1
                    color={type == 'Male' ? '#FFFFFF' : Colors.appPrimary}
                    size={Fonts.small}>
                    Male
                  </H1>
                </Container>
              </TouchWrap>
            </Container>
            <Container width={80} marginTop={2} horizontalAlignment={'center'}>
              <TouchWrap>
                <Container
                  height={7}
                  marginTop={5}
                  width={40}
                  direction={'row'}
                  borderWidth={0.5}
                  borderColor={'#969696'}
                  horizontalAlignment={'center'}
                  verticalAlignment={'center'}
                  borderRadius={10}>
                  <Container marginRight={2} marginTop={-0.5}>
                    <AntDesign
                      name="closecircle"
                      size={Fonts.semiBig}
                      color={'#434343'}
                    />
                  </Container>

                  <H2 size={Fonts.semiMedium}>Clear Fliters</H2>
                </Container>
              </TouchWrap>
            </Container>

            <Container marginTop={2} marginLeft={2}>
              <Button width={80} text={'Show results'} onPress={() => move()} />
            </Container>
          </Container>
        </Container>
      </Modal>

      <Modal
        isVisible={notNowModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
        onBackdropPress={() => setNotNowModal(false)}
        onBackButtonPress={() => setNotNowModal(false)}>
        <Container
          width={75}
          height={30}
          paddingTop={5}
          paddingHorizontal={5}
          paddingVertical={2}
          borderRadius={30}
          backgroundColor={Colors.appWhite}>
          <Container>
            <H1 textAlign={'center'} size={Fonts.semiMedium}>
              Add to Favorite?
            </H1>
          </Container>
          <Container marginTop={1}>
            <P textAlign={'center'}>
              You cant add to favorite as a guest, need to login
            </P>
          </Container>

          <Container
            width={65}
            marginTop={4}
            height={10}
            direction={'row'}
            horizontalAlignment={'space-between'}>
            <Button
              text={'Continue'}
              backgroundColor={Colors.appBlack}
              height={6}
              width={30}
              onPress={() => setNotNowModal(false)}
            />
            <Button
              text={'Login'}
              backgroundColor={Colors.appRed}
              height={6}
              width={30}
              onPress={() => goToLogin()}
            />
          </Container>
        </Container>
      </Modal>
      <Spinner visible={loading} color={Colors.appPrimary} />

      <Toast ref={ref => Toast.setRef(ref)} />
    </Container>
  );
};

export default Explore;
