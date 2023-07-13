import React, { useState, useEffect } from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {CrossHeader} from '@Component2';
import Toast from 'react-native-toast-message';
import styles from './style';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {InputField, FormikValidator, OnboardinBtn} from '@Component2';
import { postRating } from "@Request2/Rating";
import { cleanup } from "@Store2/Rating";
import {reviewSchema} from '@Helper2/Schema';

const Review = (props) => {
  const items = props.route.params.items
  const dispatch = useDispatch();
  const [rate, setRate] = useState(3.5);
  const { errors, create } = useSelector((state) => state.rating);
  const [showReview, setShowReview] = useState(false);

  const [err, setErr] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const ratingCompleted = (rating) => {
    setRate(rating)
    }

  const returnBack = () => {
    props.navigation.goBack();
  };

  const reviewState = {
    myReview: '',
  };
  
  const dismissKeyboard = () => Keyboard.dismiss();

  // useEffect(() => {
  //   setVisible(props.visibleReview);
  //   setErr("");
  //   // dispatch(cleanup());
  //   setLoading(false)

  // }, [props.visibleReview])


  const submit = (data) => {
    if(!rate) return setErr("Please give a rating")
 
    const newData = { comment: data.myReview, id:items, rating:rate };
    setLoading(true)
    dispatch(postRating(newData))
    setLoading(false)

  };

  useEffect(() => {
    if (create === "success") {
      setErr("");
      setLoading(false)
      setRate()
      returnBack()
    } else if (create === "failed") {
      setErr(errors?.msg);
      setLoading(false)
    }
  }, [create]);


  return (
    <View style={styles.container}>
      <CrossHeader title="Review" onPress={returnBack} />
      <View style={styles.topCover}>
        <Text style={styles.bgText}>Give us your Feedback</Text>
        <Text style={styles.smText}>
          We want to know your experience with this order{' '}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
        <View style={styles.starCover}>
          <Rating
            count={5}
            showRating={false}
            style={styles.starStyle}
            defaultRating={3.5}
            imageSize={40}
            ratingContainerStyle={styles.starStyle}
            onFinishRating={ratingCompleted}
            starContainerStyle={styles.starStyle}
          />
        </View>

      <View style={styles.formCover}>
        <FormikValidator
          style={styles.formFlex}
          initialValues={reviewState}
          validationSchema={reviewSchema}
          onSubmit={values => {
            submit(values);
          }}>
          {props => (
            <View style={styles.formFlex}>
              <View style={styles.formInputFieldFlex}>
                <InputField
                  title="Write your review"
                  placeholder="the products are ...."
                  placeholderTextColor="#757575"
                  name="myReview"
                  {...props}
                  width="100%"
                />
              </View>

              <View style={styles.submitBtnContainer}>
                <OnboardinBtn
                  title="CONTINUE"
                  onPress={props.handleSubmit}
                  backgroundColor="#3353CB"
                  color="#fff"
                  disabled={
                    !Object.keys(props.touched).length
                      ? !Object.keys(props.errors).length
                      : Object.keys(props.touched).length &&
                        Object.keys(props.errors).length
                  }
                  disabledBackgroundColor="rgba(31, 31, 31, 0.12)"
                />
              </View>
            </View>
          )}
        </FormikValidator>
      </View>
      </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Review;



