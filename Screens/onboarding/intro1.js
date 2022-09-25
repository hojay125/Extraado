/* eslint-disable no-undef */
import React from 'react';
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
import Svg, {Use, Image} from 'react-native-svg';
import {BackButton} from '../../component/backButton';
import {AppIcons} from '../../helper/images';
import {Fonts} from '../../helper/fontSize';
import Entypo from 'react-native-vector-icons/Entypo';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import SvgUri from 'react-native-svg-uri';

export default class Intro1 extends React.Component {
  state = {
    items: [
      {
        title: 'Set Location',

        img: AppIcons.setLocation,
      },
      {
        title: 'Search for services near you',

        img: AppIcons.searchService,
      },
      {
        title: 'Book for services',

        img: AppIcons.bookService,
      },
    ],

    activeSlider: 0,
  };

  nextSlide = () => {
    console.warn('yes');
    if (this.state.activeSlider < 3) {
      this.setState({activeSlider: this.state.activeSlider + 1});
      console.warn('first', this.state.activeSlider + 1);
    }
  };

  _renderItem = ({item, index}) => {
    return (
      <Container>
        <Container
          height={70}
          width={100}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}
          borderBottomLeftRadius={40}
          borderBottomRightRadius={40}
          backgroundColor={Colors.appPrimary}>
          <Container marginTop={10}>
            <ImageWrap
              source={item.img}
              height={40}
              width={80}
              fit={'contain'}
            />
          </Container>
          <Container marginTop={10}>
            <H2 color={Colors.appWhite}>{item.title}</H2>
          </Container>
        </Container>
      </Container>
    );
  };

  pag = () => {
    return (
      <Pagination
        dotsLength={this.state.items.length}
        activeDotIndex={this.state.activeSlider}
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
  render() {
    return (
      <Container flex={1} backgroundColor={Colors.appWhite}>
        {/* <Container
          height={70}
          width={100}
          horizontalAlignment={'center'}
          verticalAlignment={'center'}
          borderBottomLeftRadius={40}
          borderBottomRightRadius={40}
          backgroundColor={Colors.appPrimary}>
          <Container marginTop={10}>
            <ImageWrap
              source={AppIcons.setLocation}
              height={40}
              width={100}
              fit={'contain'}
            />
          </Container>
          <Container marginTop={10}>
            <H2 color={Colors.appWhite}>Set Location</H2>
          </Container>
        </Container> */}
        <Container>
          <Carousel
            data={this.state.items}
            renderItem={this._renderItem}
            sliderWidth={RW(100)}
            currentIndex={1}
            itemWidth={RW(100)}
            itemHeight={RH(100)}
            firstItem={this.state.activeSlider}
            sliderHeight={RH(100)}
            onSnapToItem={index => this.setState({activeSlider: index})}
            layoutCardOffset={-100}
            autoplay
          />
          {this.pag()}
        </Container>
        {this.state.activeSlider != 2 ? (
          <Container height={20} width={100} direction={'row'} marginTop={5}>
            <Container
              height={10}
              verticalAlignment={'center'}
              paddingLeft={5}
              width={50}
              marginTop={5}>
              <TouchWrap
                onPress={() => this.props.navigation.navigate('LocationPage')}>
                <P>Skip</P>
              </TouchWrap>
            </Container>

            <Container
              height={10}
              width={50}
              paddingRight={5}
              paddingLeft={30}
              direction={'row'}
              verticalAlignment={'center'}
              marginTop={5}>
              <TouchWrap onPress={() => this.nextSlide()}>
                <Container direction={'row'}>
                  <Container>
                    <P color={Colors.appRed}>Next</P>
                  </Container>

                  <Container marginLeft={2}>
                    <Entypo
                      name="arrow-long-right"
                      size={Fonts.semiBig}
                      color={Colors.appRed}
                    />
                  </Container>
                </Container>
              </TouchWrap>
            </Container>
          </Container>
        ) : (
          <Container horizontalAlignment={'center'} marginTop={9}>
            <Button
              text={'Get Started'}
              onPress={() => this.props.navigation.navigate('LocationPage')}
            />
          </Container>
        )}
      </Container>
    );
  }
}
