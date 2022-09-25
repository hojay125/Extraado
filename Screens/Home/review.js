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
import {ScrollView, Switch} from 'react-native';
import {BackButton} from '../../component/backButton';
import {Fonts} from '../../helper/fontSize';
import {AppIcons} from '../../helper/images';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {NotificationCard} from '../../component/notificationCard';
import {ReviewCard} from '../../component/reviewCard';
import {NotReviewedCard} from '../../component/noReviewedCard';
// import {axiosCallsNoAuth} from '../../helper/api';
// import {storeData} from '../../helper/storage';
// import {ToastLong} from '../../helper/toast';
// import {RouteContext} from '../../helper/route_context';

export const Review = props => {
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [active, setActive] = useState('reviewed');

  return (
    <Container flex={1} backgroundColor={Colors.appWhite} paddingHorizontal={5}>
      <Container
        height={15}
        width={100}
        direction={'row'}
        paddingTop={5}
        verticalAlignment={'center'}>
        <BackButton onPress={() => props.navigation.goBack()} />
        <Container width={63} horizontalAlignment={'center'}>
          <H1 size={Fonts.semiBig}>Reviews</H1>
        </Container>

        <Container>
          <ImageWrap
            source={AppIcons.barber2}
            height={7}
            width={15}
            borderRadius={10}
          />
        </Container>
      </Container>
      <Container
        height={10}
        width={90}
        direction={'row'}
        verticalAlignment={'center'}
        horizontalAlignment={'space-between'}>
        <TouchWrap onPress={() => setActive('reviewed')}>
          <Container
            height={10}
            horizontalAlignment={'center'}
            width={40}
            verticalAlignment={'center'}>
            <H1
              color={
                active == 'reviewed' ? Colors.appPrimary : Colors.appGreyText
              }
              size={Fonts.semiMedium}>
              Reviewed
            </H1>

            {active == 'reviewed' ? (
              <Container
                height={1}
                width={30}
                borderBottomWidth={4}
                borderColor={Colors.appPrimary}></Container>
            ) : null}
          </Container>
        </TouchWrap>
        <TouchWrap onPress={() => setActive('notReviewed')}>
          <Container
            height={10}
            horizontalAlignment={'center'}
            width={40}
            verticalAlignment={'center'}>
            <H1
              color={
                active != 'reviewed' ? Colors.appPrimary : Colors.appGreyText
              }
              size={Fonts.semiMedium}>
              Not reviewed
            </H1>
            {active != 'reviewed' ? (
              <Container
                height={1}
                width={30}
                borderBottomWidth={4}
                borderColor={Colors.appPrimary}></Container>
            ) : null}
          </Container>
        </TouchWrap>
      </Container>
      <ScrollView>
        {active == 'reviewed' ? (
          <Container>
            <ReviewCard />

            <ReviewCard />

            <ReviewCard />

            <ReviewCard />
          </Container>
        ) : (
          <Container>
            <NotReviewedCard />
            <NotReviewedCard />
            <NotReviewedCard />
            <NotReviewedCard />
            <NotReviewedCard />

            <Container marginBottom={5}>
              <Button text={'Review'} />
            </Container>
          </Container>
        )}
      </ScrollView>
    </Container>
  );
};

export default Review;
