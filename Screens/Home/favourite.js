/* eslint-disable react-hooks/exhaustive-deps */
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
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
import {axiosCalls, axiosCallsNoAuth} from '../../helper/api';
import {getData} from '../../helper/storage';
import {requests} from '../../helper/queries';
import {handleQuery} from '../../helper/graphql';
import {endPoint2} from '../../helper/baseUrl';

export const Favourite = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [companies, setCompanies] = useState([]);

  const [favourite, setFavourite] = useState([]);
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

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    const userInfo = await getData('user');

    console.warn('gg', userInfo);

    if (userInfo) {
      getFavorite();
    } else {
      alert('You are logged in as a guest, sign up and loging');
      navigation.navigate('Login');
    }
  };

  const getFavorite = async () => {
    const userInfo = await getData('user');
    console.warn('check', userInfo);
    const userDetails = JSON.parse(userInfo);
    console.warn('userDetails', userDetails.id);
    setLoading(true);
    console.warn('rs>>>>');
    try {
      let query2 =
        requests.queries(`favorites(where:{user_id:${userDetails.id}}){
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
            service_id{
              name
              description
              duration
              id
            }
            images{
              id
              url
            }
            
          }
        }`);
      console.warn('<<>>', query2);
      let data2 = await handleQuery(query2);

      console.warn('data>>>>>>222', data2);
      setCompanies(data2.data.favorites);
      setFavourite(data2.data.favorites);
      setLoading(false);
    } catch (e) {
      console.warn('ppp', e);
      setLoading(false);
    }
  };
  const checklist = data => {
    if (data) {
      let ans = favourite.find(a => a.id == data.id);

      if (ans) {
        return true;
      }
    }
  };

  const removeFavorite = async item => {
    setLoading(true);
    console.warn('rs>>>>', item);
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
  };

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
        <Container width={59}>
          <H1>Favorite Venues ({companies.length})</H1>
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
              height: '17%',
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
              borderWidth: 1,
              borderRadius: 10,

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {companies ? (
          companies.map((item, index) => (
            <BigCard
              onPress={
                () =>
                  navigation.navigate('AboutStore', {
                    value: item.company_id,
                    favorite: true,
                  })
                // console.warn('yesss', item)
              }
              contain={checklist(item)}
              name={item.company_id.name}
              address={item.company_id.address}
              amount={item.company_id.from_price}
              image={`${endPoint2}${item.company_id.images[0].url}`}
              onRemove={() => removeFavorite(item.id)}
            />
          ))
        ) : (
          <Container
            flex={1}
            verticalAlignment={'center'}
            horizontalAlignment={'center'}>
            <LottieView
              source={require('../../helper/empty.json')}
              autoPlay
              loop
              style={{width: RW(50), height: RH(60)}}
            />
          </Container>
        )}
        {/* <BigCard />
        <BigCard /> */}
      </ScrollView>
      <Toast ref={ref => Toast.setRef(ref)} />
    </Container>
  );
};

export default Favourite;
