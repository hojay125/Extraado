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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import Entypo from 'react-native-vector-icons/Entypo';
import {SmallCard} from '../../component/smallCard';
import {Dropdown} from 'react-native-material-dropdown';
import {BigCard} from '../../component/bigCard';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {BookingCard} from '../../component/bookingCard';
import {useNavigation} from '@react-navigation/native';
import {CancelButton} from '../../component/cancelButton';

export const SelectLocation = props => {
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
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container marginTop={5} direction={'row'}>
        <Container height={10} verticalAlignment={'center'} marginTop={1}>
          <CancelButton onPress={() => props.navigation.goBack()} />
        </Container>

        <GooglePlacesAutocomplete
          placeholder={'Your address ...'}
          currentLocation={false}
          // value={initialLocation}
          enablePoweredByContainer={true}
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'}
          listViewDisplayed="auto"
          predefinedPlacesAlwaysVisible={true}
          fetchDetails={true}
          renderDescription={row =>
            row.description || row.formatted_address || row.name
          }
          //   renderDescription={row => row.description || row.vicinity}//custom description render
          onPress={(data, details = true) => {
            console.warn('>>>', details);
            console.warn({data});
            props.navigation.navigate('ServiceSearch');
          }}
          textInputProps={{
            placeholderTextColor: Colors.appGrey,

            onChangeText: text => {
              // console.warn('tag', text);
            },
            autoCorrect: false,
          }}
          // getDefaultValue={() => ''}
          query={{
            key: 'AIzaSyBGv53NEoMm3uPyA9U45ibSl3pOlqkHWN8',
            language: 'en', // language of the results
            types: 'address', // default: 'geocode'
            // location: '7.417165, 3.902983',
            location: '30.55435, -91.03677',
            radius: '100000', //80 km
            // components: 'country:ng',
            // strictbounds: true,
          }}
          styles={{
            textInputContainer: {
              backgroundColor: '#F4F4F4',
              paddingLeft: 1,
              paddingRight: 1,
              height: RH(7.5),
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.8,
              borderTopWidth: 0.8,
              borderColor: Colors.appGrey,
              borderRadius: 10,
              marginTop: RH(2),
              marginLeft: RW(3),
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: RH(5),
              backgroundColor: '#F4F4F4',
              color: Colors.primary,
              fontSize: 16,
              // backgroundColor: '#F1F2F1',
            },

            description: {
              fontWeight: 'bold',
            },
            predefinedPlacesDescription: {
              color: Colors.primary,
            },
          }}
          // nearbyPlacesAPI='GoogleReverseGeocoding'
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use:
          GooglePlacesSearchQuery={{
            rankby: 'distance',
            types: 'food',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]}
          debounce={2}
        />
      </Container>

      <TouchWrap onPress={() => props.navigation.navigate('ServiceSearch')}>
        <Container>
          <Container
            width={90}
            marginTop={2}
            direction={'row'}
            borderColor={Colors.appGrey}
            borderTopWidth={0.3}
            borderBottomWidth={0.3}
            paddingVertical={2}>
            <Container marginTop={2} marginRight={3}>
              <Fontisto
                name="navigate"
                size={Fonts.semiBig}
                color={Colors.appGrey}
              />
            </Container>
            <Container>
              <P color={'#8B8B8B'}>Your current location</P>
              <H2 color={'#8B8B8B'}>96 Asokoro BLVD,Ojota,Lagos</H2>
            </Container>
          </Container>
        </Container>
      </TouchWrap>

      <TouchWrap onPress={() => props.navigation.navigate('ServiceSearch')}>
        <Container>
          <Container
            width={90}
            marginTop={2}
            direction={'row'}
            borderColor={Colors.appGrey}
            borderBottomWidth={0.3}
            paddingVertical={2}>
            <Container marginTop={2} marginRight={2} marginLeft={1}>
              <Entypo
                name="location-pin"
                size={Fonts.semiBig}
                color={Colors.appGrey}
              />
            </Container>
            <Container>
              <P color={'#000000'}>Recent locations</P>
              <H2 color={'#8B8B8B'}>Missipi street, Surulere ,Lagos</H2>
            </Container>
          </Container>
        </Container>
      </TouchWrap>
    </Container>
  );
};

export default SelectLocation;
