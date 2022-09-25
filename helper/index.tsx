// @flow

import React, { ReactNode } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import {
  View,
  Text,
  PixelRatio,
  ImageBackground,
  Dimensions,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
} from 'react-native';
import { RW,RH } from './constants';
const { width, height } = Dimensions.get('window');
const { Value } = Animated;

export const scaleFont = (val: any) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

const Elevation = (elevation: any) => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
      elevation,
      shadowColor: '#0001',
      shadowOffset: { width: 0, height: elevation * 0.6 },
      shadowOpacity: 0.8,
      shadowRadius: elevation * 0.5,
    });
  return response;
};

export const Height = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = (val: any) => {

  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

/**ANCHOR INTERFACES */
interface GeneralProps {
  style: any;
  backgroundColor: any;
  color: any;
}

interface MarginProps {
  margin: number;
  marginRight: number;
  marginLeft: number;
  marginTop: number;
  marginBottom: number;
  marginVertical: number;
  marginHorizontal: number;
}

interface PaddingProps {
  padding: number;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  paddingVertical: number;
  paddingHorizontal: number;
}

interface BorderRadiusProps {
  borderRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
}

interface BorderWidth {
  borderBottomWidth: number;
  borderTopWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderWidth: number;
  borderColor: any;
}

interface HeightWidthProps {
  maxWidth: any;
  maxHeight: any;
  minWidth: any;
  minHeight: any;
  height: number;
  width: number;
  widthPercent: any;
  heightPercent: any;
}

/**ANCHOR TEXT WRAP */
interface TextWrapProps {
  numberOfLines: number;
  color: string;
  fontFamily: string;
  fontWeight: 'bold' | 'medium' | 'regular';
  fontSize: number;
  lineHeight: number;
  text: string;
  textAlign: 'center' | 'left' | 'right';
  ellipses: 'head' | 'tail' | 'middle' | 'clip';
  children: React.ReactNode;
  backgroundColor: any;
  style: any;
}

export const TextWrap = ({ ...props }: TextWrapProps) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipses}
      style={[
        {
          fontWeight: props.fontWeight,
          color: props.color,
          fontSize: scaleFont(props.fontSize) || null,
          lineHeight: scaleFont(props.lineHeight) || null,
          fontFamily: props.fontFamily,
          textAlign: props.textAlign,
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

TextWrap.defaultProps = {
  ellipses: 'tail',
};

/**ANCHOR PAGE */
interface PageProps {
  fullscreen: boolean;
  backgroundColor: any;
  barColor: any;
  barIconColor: 'dark' | 'light';
  children: React.ReactNode;
}

export const Page = ({ ...props }: PageProps & PaddingProps) => {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.flex}>
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
            paddingHorizontal: Width(props.paddingHorizontal),
          },
        ]}>
        <StatusBar
          translucent={true}
          backgroundColor={props.barColor || '#0000'}
          barStyle={
            props.barIconColor === 'dark' ? 'dark-content' : 'light-content'
          }
        />
        {props.children}
      </View>
    // </KeyboardAvoidingView>
  );
};

/**ANCHOR CONTAINER */
interface ContainerProps {
  flexGrow: number;
  overflow: boolean;
  opacity: number;
  position: any;
  elevation: number;
  direction: 'row' | 'column' | 'row-reverse';
  wrap: 'wrap';
  flex: number;
  verticalAlignment: 'flex-start' | 'center' | 'flex-end';
  horizontalAlignment:
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-evenly';
  alignSelf: 'flex-start' | 'center' | 'flex-end';
  backgroundColor: any;
  style: object;
  children: React.ReactNode;
  zIndex:number;
  shadowColor:any;
  shadowRadius:number;
  shadowOpacity:number;
}

export const Container = ({
  ...props
}: ContainerProps &
  GeneralProps &
  HeightWidthProps &
  PaddingProps &
  MarginProps &
  BorderRadiusProps &
  BorderWidth) => {
  return (
    <View
      style={[
        {
          overflow: props.overflow,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.direction,
          alignSelf: props.alignSelf,
          flexWrap: props.wrap,
          flex: props.flex,
          height:props.heightPercent|| RH(props.height),
          width:RW(props.width) || props.widthPercent,
          justifyContent:
            props.direction === 'row'
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.direction === 'row'
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: RW(props.margin),
          marginVertical: RH(props.marginVertical),
          marginHorizontal:RW(props.marginHorizontal),
          marginRight: RW(props.marginRight),
          marginLeft:RW(props.marginLeft),
          marginTop:RH(props.marginTop),
          marginBottom: RH(props.marginBottom),
          paddingRight: RW(props.paddingRight),
          paddingLeft: RW(props.paddingLeft),
          paddingTop: RH(props.paddingTop),
          paddingBottom: RH(props.paddingBottom),
          padding: RW(props.padding),
          paddingVertical: RH(props.paddingVertical),
          paddingHorizontal:RW(props.paddingHorizontal),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          zIndex: props.zIndex,
          shadowColor:props.shadowColor,
          shadowRadius:props.shadowRadius,
          shadowOpacity:props.shadowOpacity,
          elevation:props.elevation
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

Container.defaultProps = {};

/* ANCHOR AVATAR */

interface AvatarProp {
  borderWidth: number;
  borderColor: any;
  url: string;
  source: any;
  elevation: number;
  size?: number;
  backgroundColor: any;
  position: 'absolute' | 'relative';
  top: number;
  bottom: number;
  left: number;
  right: number;
  style: any;
  flex: number;
  resize: 'contain';
}

export const Avatar = ({ ...props }: AvatarProp & GeneralProps & MarginProps) => {
  return (
    <View
      style={[
        {
          ...Elevation(props.elevation),
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          height: Width(props.size),
          width: Width(props.size),
          backgroundColor: props.backgroundColor,
          borderRadius: Width(props.size) / 2 || 1,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
        },
        props.style,
      ]}>
      <Image
        source={props.source || { uri: props.url }}
        resizeMode={props.resize || "cover"}
        style={[
          styles.flex,
          {
            height: Width(props.size) || undefined,
            width: Width(props.size) || undefined,
            borderRadius: Width(props.size),
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
          styles.overflow,
        ]}
      />
    </View>
  );
};

Avatar.defaultProps = {
  size: 20,
};

/* ANCHOR SIZED BOX */

interface SizedBoxProps {
  width: number;
  height: number;
  backgroundColor: any;
}

export const SizedBox = ({ ...props }: SizedBoxProps) => (
  <View
    style={{
      width: Width(props.width),
      height: Height(props.height),
      backgroundColor: props.backgroundColor,
    }}
  />
);

/* ANCHOR SCROLL AREA */

interface ScrollAreaProps {
  horizontal: boolean;
  flexGrow: number;
  children: React.ReactNode;
}

export const ScrollArea = ({ ...props }: ScrollAreaProps) => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{ flexGrow: props.flexGrow }}
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
    <View style={{ flexGrow: props.flexGrow }}>{props.children}</View>
  </ScrollView>
);

/* ANCHOR SCROLL AREA REFRESH */
interface ScrollAreaRefreshProps {
  horizontal: boolean;
  refreshing: boolean;
  onRefresh: () => void;
  children: React.ReactNode;
}

export const ScrollAreaRefresh = ({ ...props }: ScrollAreaRefreshProps) => (
  <ScrollView
    refreshControl={
      <RefreshControl
        onRefresh={props.onRefresh}
        refreshing={props.refreshing || false}
      />
    }
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
    {props.children}
  </ScrollView>
);

/* ANCHOR IMAGE WRAP */

interface ImageWrapProps {
  flex: number;
  elevation: number;
  source: any;
  opacity:number;
  url: any;
  height: any;
  width: any;
  widthPercent: any;
  onPress: () => void;
  backgroundColor: any;
  overlayColor: any;
  horizontalAlignment:
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  verticalAlignment:
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  position: 'absolute' | 'relative';
  fit: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  tintColor:any;
  children: React.ReactNode;

}

export const ImageWrap = ({
  ...props
}: ImageWrapProps & BorderRadiusProps & MarginProps & PaddingProps) => {
  return (
    <ImageBackground
      source={props.source || { uri: props.url }}
      resizeMode={props.fit}
      style={[
        styles.overflow,
        {
          flex: props.flex,
          ...Elevation(props.elevation),
          position: props.position,
          width: Width(props.width) || props.widthPercent || '100%',
          height: Height(props.height) || undefined,
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          margin: Width(props.margin),
          marginVertical: Height(props.marginVertical),
          marginHorizontal: Width(props.marginHorizontal),
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
          padding: props.padding,
          opacity:props.opacity,
          
        },
      ]}
     
      
      >
      <Container flex={1} backgroundColor={props.overlayColor}>
        {props.children}
      </Container>
    </ImageBackground>
  );
};

/* ANCHOR TOUCH WRAP */
interface TouchWrapProps {
  opacity: number;
  elevation: number;
  height: any;
  width: any;
  widthPercent: any;
  onPress: () => void;
  onLongPress: () => void;
  backgroundColor: any;
  borderBottomColor: any;
  borderBottomWidth: number;
  flex: number;
  verticalAlignment:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  horizontalAlignment:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline';
  borderRadius: number;
  justifyContent: string;
  alignItems: string;
  style: any;
  children: any;
}

export const TouchWrap = ({ ...props }: TouchWrapProps & PaddingProps) => {
  return (
    <TouchableOpacity

      onLongPress={props.onLongPress}
      onPress={props.onPress}
      activeOpacity={0.5}
      style={[
        {
          ...Elevation(props.elevation),
          opacity: props.opacity,
          padding: Width(props.padding),
          paddingTop: Width(props.paddingTop),
          paddingBottom: Width(props.paddingBottom),
          paddingLeft: Width(props.paddingLeft),
          paddingRight: Width(props.paddingRight),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          flex: props.flex,
          backgroundColor: props.backgroundColor,
          borderBottomColor: props.borderBottomColor,
          borderBottomWidth: Width(props.borderBottomWidth),
          width: Width(props.width) || props.widthPercent,
          height: Height(props.height),
          borderRadius: props.borderRadius,
          justifyContent: props.verticalAlignment,
          alignItems: props.horizontalAlignment,
        },
        props.style,
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};

/**ANCHOR ROUNDED */
interface RoundedProps {
  backgroundColor: any;
  size: number;
  radius: number;
  height: number;
  position: 'absolute' | 'relative';
  top: number;
  bottom: number;
  left: number;
  right: number;
  elevation: number;
  children: React.ReactNode;
}

export const Rounded = ({ ...props }: RoundedProps & MarginProps) => {
  return (
    <View
      style={[
        styles.rounded,
        {
          backgroundColor: props.backgroundColor,
          height: Width(props.size),
          width: Width(props.size),
          ...Elevation(props.elevation),
          borderRadius: props.radius || Height(props.size) / 2,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
        },
      ]}>
      {props.children}
    </View>
  );
};

/* ANCHOR  INPUT WRAP */
interface InputWrapProps {
  multiline: boolean;
  maxHeight: number;
  maxLength: number;
  width: number;
  height: number;
  borderColor: any;
  borderWidth: number;
  color: any;
  showSecure: boolean;
  onToggleSecure: () => void;
  secureIcon: any;
  icon: any;
  inputStyle: object;
  fontSize: number;
  returnKeyType: 'next' | 'done' | 'go' | 'search';
  fontWeight: string;
  fontFamily: string;
  secure: boolean;
  autoCompleteType:
  | 'off'
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-number'
  | 'email'
  | 'name'
  | 'password'
  | 'postal-code'
  | 'street-address'
  | 'tel'
  | 'username';
  autoCorrect: boolean;
  numberOfLines: number;
  placeholder: string;
  onChangeText: () => void;
  onFocus: () => void;
  onBlur: () => void;
  elevation: number;
  backgroundColor: any;
  borderRadius: number;
  onSubmit: () => void;
  onPress: () => void;
  keyboardType:
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad';
  textAlignVertical: 'auto' | 'top' | 'bottom' | 'center';
  value: any;
  autoCapitalize: 'none' | 'sentences' | 'words' | 'characters';
  placeholderTextColor: any;
  refValue: any;
  inputHeight: number;
  verticalAlignment: 'center';
  horizontalAlignment: 'center';
  textAlign: 'center' | 'left' | 'right';
  children: Element;
  flex: number;
  textPaddingVertical: number;
  textPaddingHorizontal: number;
  editable: boolean
}

export const InputWrap = ({ ...props }: InputWrapProps & PaddingProps) => {
  return (
    <Container
      flexGrow={0}
      direction="row"
      width={props.width}
      height={props.height}
      elevation={props.elevation}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      style={styles.overflow}>
      {props.icon ? (
        <Container
          paddingHorizontal={4}
          verticalAlignment="center"
          horizontalAlignment="center">
          {props.icon}
        </Container>
      ) : null}
      <TextInput
        blurOnSubmit={false}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
        textAlign={props.textAlign}

        multiline={props.multiline}
        onSubmitEditing={props.onSubmit}
        keyboardType={props.keyboardType}
        ref={props.refValue}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        numberOfLines={props.numberOfLines}
        autoCapitalize={props.autoCapitalize || 'none'}
        autoCompleteType={props.autoCompleteType || 'off'}
        autoCorrect={props.autoCorrect}
        editable={props.editable}
        secureTextEntry={props.secure}
        returnKeyType={props.returnKeyType}
        maxHeight={Height(props.maxHeight)}
        style={[
          styles.flex,
          styles.input,
          {
            color: props.color || '#333',
            height: Height(props.inputHeight),
            fontFamily: props.fontFamily,
            fontWeight: props.fontWeight,
            fontSize: scaleFont(props.fontSize) || scaleFont(11),
            paddingTop: Height(props.paddingTop),
            paddingBottom: Height(props.paddingBottom),
            paddingVertical: Height(props.textPaddingVertical),
            paddingHorizontal: Height(props.textPaddingHorizontal),
            paddingLeft: Width(props.paddingLeft),
            paddingRight: Width(props.paddingRight),
          },
          props.inputStyle,
        ]}
      />
      {props.secureIcon ? (
        <TouchWrap onPress={props.onToggleSecure}>
          <Container
            flex={1}
            paddingHorizontal={4}
            verticalAlignment="center"
            horizontalAlignment="center">
            {props.secureIcon}
          </Container>
        </TouchWrap>
      ) : null}
    </Container>
  );
};

InputWrap.defaultProps = {
  flex: 1,
  verticalAlignment: 'center',
  horizontalAlignment: 'center',
};

/* ANCHOR  SLIDE TRANSITION */
interface SlideProps {
  direction: 'horizontal' | 'vertical';
  duration: number;
  from: number;
  style: any;
  elastic: number;
  children: React.ReactNode;
}

export const SlideTransition = ({ ...props }: SlideProps) => {
  const [animate] = React.useState(new Value(0));
  const slide = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: props.duration || 750,
      easing: Easing.elastic(props.elastic || 0),
    }).start();
  };

  React.useEffect(() => {
    slide();
  }, [props.index]);

  const slideX = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [Width(props.from), 0],
  });

  const slideY = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [Height(props.from), 0],
  });

  return (
    <Animated.View
      style={[
        styles.width,
        props.style,
        {
          transform:
            props.direction === 'horizontal'
              ? [
                {
                  translateX: slideX,
                },
              ]
              : [
                {
                  translateY: slideY,
                },
              ],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

/* ANCHOR  SLIDE TRANSITION CALLBACK*/
interface SlideCallbackProps {
  direction: 'horizontal' | 'vertical';
  duration: number;
  from?: number;
  style: any;
  elastic: number;
  children: React.ReactNode;
  handleComplete: () => void;
  index: boolean;
}

export const SlideTransitionCallback = ({ ...props }: SlideCallbackProps) => {
  const [animate] = React.useState(new Value(0));
  const [show, setShow] = React.useState(props.index);

  const slideShow = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: props.duration || 1200,
      easing: Easing.elastic(1.1),
    }).start(() => setShow(props.index));
  };

  const slideHide = () => {
    Animated.timing(animate, {
      toValue: 0,
      duration: props.duration || 750,
      easing: Easing.back(1.1),
    }).start(() => setShow(props.index));
  };

  React.useEffect(() => {
    if (props.index === true) {
      slideShow();
    }

    if (props.index === false) {
      slideHide();
    }
  }, [props.index]);

  const slideX = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [Width(props.from), 0],
  });

  const slideY = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [Height(props.from), 0],
  });

  return (
    <Animated.View
      style={[
        props.style,
        {
          opacity: animate,
          transform:
            props.direction === 'horizontal'
              ? [
                {
                  translateX: slideX,
                },
              ]
              : [
                {
                  translateY: slideY,
                },
              ],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

/* ANCHOR  STYLES*/
const styles = StyleSheet.create({
  overflow: { overflow: 'hidden' },
  flex: { flex: 1 },
  input: {
    paddingLeft: 0,
    fontWeight: Platform.OS === 'ios' ? 'bold' : null,
  },
  width: { width: '100%' },
  rounded: { justifyContent: 'center', alignItems: 'center' },
});
