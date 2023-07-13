import React, { useState, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSelector, useDispatch } from "react-redux";


import { CrossHeader } from "@Component2";
import styles from './style';
import { Rating, AirbnbRating } from 'react-native-ratings';


const ViewReview = (props) => {

  const items = props.route.params.rating

  const [rate, setRate] = useState();

  const ratingCompleted = (rating) => {

    setRate(rating);

  }

  const returnBack = () => {

    props.navigation.goBack();

  };


  const dismissKeyboard = () => Keyboard.dismiss();


  return (
    <View style={styles.container}>

      <CrossHeader title="View Rating" onPress={returnBack} />

      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.starCover}>
          <Rating
            count={5}
            showRating={false}
            readonly={true}
            style={styles.starStyle}
            defaultRating={items?.feedback?.rating}
            imageSize={32}
            ratingContainerStyle={styles.starStyle}
            onFinishRating={ratingCompleted}
            starContainerStyle={styles.starStyle}

          />
          <Text style={styles.dateText}>{new Date(items?.feedback?.updated_at).toDateString()}</Text>
        </View>

      </TouchableWithoutFeedback>
      <View style={styles.topCover}>
        <Text style={styles.bgText}>I was satisfied</Text>
        <Text style={styles.smText}>{items?.feedback?.message} </Text>
      </View>

    </View>
  );
};

export default ViewReview;
