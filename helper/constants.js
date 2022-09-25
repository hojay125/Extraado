/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, PixelRatio} from 'react-native';
// export const FONT_FAMILY = 'Inter-Bold.ttf';

export const Colors = {
  appWhite: '#FFFFFF',
  appPrimary: '#017691',
  appRed: '#FF3A2A',
  appBlack: '#000000',
  appFaceBookBlue: '#32538A',
  appConfirmGreen: '#26BF44',
  appPendingColor: '#D5DBE1',
  appBrown: '#434343',
  appGrey: '#C6C6C6',
  appShadow: '#00000010',
  AppBackground: '#F9F9F9',
  appGreyText: '#8B8B8B',
  appGreyText2: '#434343',
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

const {width, height} = Dimensions.get('window');

export const RH = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * height;
    return result;
  }
};

export const RW = val => {
  if (val == null || val == undefined) {
    return null;
  } else {
    let result = (val / 100) * width;
    return result;
  }
};

export const RF = val => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 4;
};

export const RR = val => {
  let result = val / 100;
  result = result * (height + width);
  return result * 0.13;
};
