/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {Colors, FONT_FAMILY, RH, RW, RF, RR} from './constants';
import {Fonts} from './fontSize';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Zocial from 'react-native-vector-icons/Zocial';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Feather from 'react-native-vector-icons/Feather';
import {Container} from './index';
import LottieView from 'lottie-react-native';

export const Scroll = props => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: '10%', flexGrow: 1}}
      style={{height: '80%', marginBottom: '5%'}}
      {...props}>
      <Container marginBottom={props.marginBottom}>{props.children}</Container>
    </ScrollView>
  );
};

Scroll.propTypes = {
  marginBottom: PropTypes.number,
};

export const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: RH(props.height) || RH(9),
        width: RW(props.width) || RW(90),
        backgroundColor: props.backgroundColor || Colors.appPrimary,
        borderWidth: props.borderWidth || null,
        borderColor: props.borderColor || null,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: props.borderRadius || RF(7),
      }}>
      {props.loading ? (
        <LottieView
          source={require('./animation3.json')}
          autoPlay
          loop
          style={{width: RW(12.5), height: RH(12.5)}}
        />
      ) : (
        <Container direction={'row'}>
          {props.type == 'edit' ? (
            <Container marginRight={2}>
              <MaterialIcons
                name="edit"
                size={Fonts.semiBig}
                color={Colors.appWhite}
              />
            </Container>
          ) : null}
          <Text
            style={{
              color: props.color || Colors.appWhite,
              fontSize: props.size || Fonts.semiMedium,
              // fontFamily: FONT_FAMILY,
              textAlign: props.textAlign,
            }}>
            {props.text}
          </Text>
        </Container>
      )}
    </TouchableOpacity>
  );
};

export const Page = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      <View
        style={[
          styles.flex,
          {
            backgroundColor: props.backgroundColor || '#fff',
            padding: props.padding,
            paddingTop: props.paddingTop,
            paddingBottom: props.paddingBottom,
            paddingLeft: props.paddingLeft,
            paddingRight: props.paddingRight,
            paddingVertical: props.paddingVertical,
            //paddingHorizontal: Width(props.paddingHorizontal),
          },
        ]}>
        <StatusBar
          translucent={true}
          backgroundColor={props.barColor || Colors.primary}
          barStyle={
            props.barIconColor === 'dark' ? 'dark-content' : 'light-content'
          }
        />
        {props.children}
      </View>
    </KeyboardAvoidingView>
  );
};

Page.propTypes = {
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  paddingTop: PropTypes.number,
  paddingBottom: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  backgroundColor: PropTypes.string,
  barIconColor: PropTypes.string,
};

export const Card = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: props.height || '30%',
          width: props.width || '90%',
          backgroundColor: props.backgroundColor || null,
          borderWidth: props.borderWidth || null,
          borderColor: props.borderColor || null,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: props.borderRadius || 10,
        }}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

const Header = props => {
  return (
    <View
      style={{
        height: '10%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '70%',
          paddingTop: '5%',

          flexDirection: 'row',
        }}>
        {Images.logo && (
          <Image
            source={Images.logo}
            style={{height: '60%', width: '60%', marginLeft: '-18%'}}
            resizeMode="contain"
          />
        )}
        <View style={{marginLeft: '-20%', marginTop: '2%'}}>
          <H1 color={Colors.header}>{props.title}</H1>
        </View>
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          height: '100%',
          width: '30%',
          paddingTop: '5%',

          flexDirection: 'row',
        }}>
        <Image
          source={Images.settings}
          style={{height: '60%', width: '60%', marginLeft: '43%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export const HeaderBack = props => {
  return (
    <View
      style={{
        height: '10%',
        width: '100%',
        paddingTop: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}>
      <View
        style={{
          height: '100%',
          width: '70%',
          paddingTop: '5%',

          flexDirection: 'row',
        }}>
        <Image
          source={Images.logo}
          style={{height: '60%', width: '60%', marginLeft: '-18%'}}
          resizeMode="contain"
        />
        <View style={{marginLeft: '-20%', marginTop: '2%'}}>
          <H1 color={Colors.appGreyDeep}>props.title</H1>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: '100%',
          width: '30%',
          paddingTop: '5%',
          flexDirection: 'row',
        }}>
        <Image
          source={Images.settings}
          style={{height: '60%', width: '60%', marginLeft: '43%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export const TextInputBox = props => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {props.leftIcon && (
          <TouchableOpacity
            verticalAlignment="center"
            style={{
              marginRight: -25.5,
              paddingHorizontal: 6,
              paddingLeft: props.borderWidth ? 15 : 0,
              borderTopLeftRadius: props.borderRadius,
              borderBottomLeftRadius: props.borderRadius,
              marginTop: 18,
              zIndex: 10,
            }}>
            {/* <Space height="30%"/> */}
            <FontAwesome
              Icon
              name={props.leftIcon}
              size={15}
              color={Colors.appGrey}
            />
          </TouchableOpacity>
        )}
        <TextInput
          style={{
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : null,

            height: RH(props.height) || RH(9),
            width: props.width ? RW(props.width) : RW(90),

            borderRadius: props.borderRadius || RF(5),

            borderWidth: props.borderWidth,
            borderLeftWidth: props.borderLeftWidth,
            borderColor: props.borderColor || '#969696',
            padding: props.padding || RR(5),
            paddingLeft: props.paddingLeft || 15,

            borderBottomWidth: props.borderBottomWidth,
            color: props.color || Colors.appBlack,
            fontSize: RF(props.size) || RF(Fonts.small),
            textAlign: props.textAlign,
          }}
          placeholder={props.placeholder}
          placeholderTextColor={'black'}
          onChangeText={props.onChange}
          value={props.value}
          secureTextEntry={props.secure}
          keyboardType={props.keyboardType}
          editable={props.editable}
          ref={props.ref}
          onFocus={props.onFocus}
          maxLength={props.maxLength || null}
          returnKeyType={props.returnKeyType}
          blurOnSubmit={props.blurOnSubmit}
          onSubmitEditing={props.onSubmitEditing}
          theme={{colors: {text: '#000000'}}}
          multiline={props.multiline || false}
        />
        {props.rightIcon === 'user' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={2} marginLeft={-9}>
              <FontAwesome
                Icon
                name="user"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon === 'lock' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={4} marginLeft={-6}>
              <Fontisto
                name="locked"
                size={Fonts.semiMedium}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon === 'unLock' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={3} marginLeft={-9}>
              <EvilIcons
                name="unlock"
                size={Fonts.big}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon === 'type' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={2} marginLeft={-9}>
              <FontAwesome
                name="bank"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon === 'bankName' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={2} marginLeft={-9}>
              <MaterialCommunityIcons
                name="office-building"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon === 'phone' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={2} marginLeft={-9}>
              <FontAwesome
                name="phone"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon == 'email' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={2} marginLeft={-9}>
              <Zocial
                name="email"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : props.rightIcon == 'address' ? (
          <TouchableOpacity onPress={props.press}>
            <Container paddingTop={2} marginLeft={-9}>
              <Feather
                name="map-pin"
                size={Fonts.semiBig}
                color={Colors.appDeepBlue}
              />
            </Container>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
TextInputBox.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  placeholder: PropTypes.string,
  borderWidth: PropTypes.number,
  padding: PropTypes.any,
  keyboardType: PropTypes.any,
  secure: PropTypes.bool,
  paddingLeft: PropTypes.any,
  value: PropTypes.any,
  editable: PropTypes.bool,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.bool,
  multiline: PropTypes.bool,
  returnKeyType: PropTypes.any,
  ref: PropTypes.any,
  blurOnSubmit: PropTypes.bool,
  onSubmitEditing: PropTypes.any,
  onChange: PropTypes.any,
  maxLength: PropTypes.number,
  borderLeftWidth: PropTypes.number,
  borderBottomLeftRadius: PropTypes.number,
  borderBottomWidth: PropTypes.number,
  theme: PropTypes.any,
  onFocus: PropTypes.any,
};

export const H1 = props => {
  return (
    <Text
      style={{
        color: props.color ? props.color : Colors.primary,
        fontSize: props.size ? RF(props.size) : RF(Fonts.big),
        fontFamily: 'Poppins-SemiBold',
        textAlign: props.textAlign,
        fontWeight: 'bold',
      }}
      {...props}>
      {props.children || props.text}
    </Text>
  );
};
H1.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

export const H2 = props => {
  return (
    <Text
      style={{
        color: props.color ? props.color : Colors.primary,
        fontSize: props.size ? RF(props.size) : RF(Fonts.semiBig),
        fontFamily: 'Poppins-SemiBold',
        textAlign: props.textAlign,
        fontWeight: props.fontWeight,
      }}>
      {props.children || props.text}
    </Text>
  );
};
H2.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
};

export const P = props => {
  return (
    <Text
      style={{
        color: props.color ? props.color : Colors.primary,
        fontSize: props.size ? RF(props.size) : RF(Fonts.small),
        fontFamily: 'Poppins-Regular',
        textAlign: props.textAlign,
        fontWeight: props.fontWeight,
      }}
      {...props}>
      {props.children || props.text}
    </Text>
  );
};
P.propTypes = {
  color: PropTypes.any,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.string,
  numberOfLines: PropTypes.number,
};

export const Space = props => {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        marginTop: props.marginTop,
        height: props.height ? props.height : '4%',
        width: props.width ? props.width : '4%',
        borderRadius: props.borderRadius || 0,
      }}
    />
  );
};
Space.propTypes = {
  backgroundColor: PropTypes.string,
  height: PropTypes.any,
  width: PropTypes.any,
  borderRadius: PropTypes.number,
  marginTop: PropTypes.any,
};

const styles = StyleSheet.create({
  overflow: {overflow: 'hidden'},
  flex: {flex: 1},
  input: {
    paddingLeft: 0,
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  },
  width: {width: '100%'},
  rounded: {justifyContent: 'center', alignItems: 'center'},
});
