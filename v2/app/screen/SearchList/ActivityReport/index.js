import React, { useState, useEffect, useCallback, useRef } from "react";
import { View, Text,StatusBar,Dimensions,TouchableOpacity, TextInput, FlatList } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {LineChart} from "react-native-chart-kit";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
  import { chartConfig } from "./chartConfig";
 
import DurationBottomSheet from "../DurationBottomSheet"

// import EmptyOrder from "./emptyOrder";
import { OrderHeader, OrderBottomSheet } from "@Component2";

const ActivityReport = (props) => {
  const [objectValues, setObjectValues] = useState()
  const [duration, setDuration] = useState("6 Months")
  const bottomSheet = useRef();

    const returnBack = () => {
        props.navigation.goBack();
      };

      const deDuraionList = () => {
        bottomSheet.current.show();
    
      };

      const changeDuration = (item) => {
        setDuration(item)
        bottomSheet.current.close()
      }
    


      const CardList = ({ icon, title, count }) => (
        <View style={styles.smCard}>
                <View style={styles.smImgCover}>
                  <Icon name={icon} color="rgba(118, 118, 128, 1)" size={24} />
                </View>
                <View style={styles.smTextCover}>
                  <Text style={styles.smCardTitle}>{title}</Text>
                  <Text style={styles.smCardCount}>{count}</Text>
                </View>
          </View>
     
    )

    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: [duration], // optional
    };

    return (
        <View style={styles.body}>
            <StatusBar hidden />
                <OrderHeader
                    title="Activity Report"
                    onPress={returnBack}
                />
              <View style={styles.container}>
                <View style={styles.topTitle}>
                    <Text style={styles.topTitleText}>This is your weekly activity/performance Report</Text>
                </View>
               <View>
               <TouchableOpacity style={styles.dropDownCover} onPress={deDuraionList}>
                  <View style={styles.dropLeft}>
                  
                  <Icon name="calendar-blank-outline" color="rgba(118, 118, 128, 1)" size={24} />
                    <Text style={styles.dropText}>{duration}</Text>
                  </View>
               
                  <Icon name="chevron-down" color="rgba(118, 118, 128, 1)" size={24} />
                  </TouchableOpacity>
               </View>
                <View style={styles.cardsContainer}>
                     <CardList 
                         icon="archive"
                        title ="TOTAL ORDERS"
                        count ={20}
                     />
                      <CardList 
                         icon="account-supervisor-circle-outline"
                        title ="REGISTRATION"
                        count ={20}
                     />
                      <CardList 
                         icon="tag"
                        title ="TOTAL SALES"
                        count ={20}
                     />
                      <CardList 
                         icon="clock"
                        title ="TIME SPENT"
                        count ='40m/day'
                     />
                </View>


                <View style={styles.statisticCover}>
                  <Text style={styles.statisticCaption}>Performance Statistics <Text style={styles.statisticSmCaption}>(Last 6 months)</Text></Text>
                </View>
                <View style={styles.chartContainer}>
                  <LineChart
                    data={data}
                    width={wp('91%')}
                    height={230}
                    chartConfig={chartConfig}
                  />
                </View>
              </View>

              <DurationBottomSheet
                bottomSheet={bottomSheet} 
                props={props}
                objList = {(item) =>  setObjectValues(item)}
                sort={changeDuration}
                />
        </View>
    )
};

export default ActivityReport;
