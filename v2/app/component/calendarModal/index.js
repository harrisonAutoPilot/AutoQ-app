import 'react-native-gesture-handler';
import React, { useState,useEffect,useCallback, useMemo } from "react";
import { View, Text,TouchableOpacity,TextInput, ScrollView} from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetView, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import {useSelector, useDispatch} from 'react-redux';
import Icon from "react-native-vector-icons/Feather";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
    Easing, Extrapolate,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import Zcon from "react-native-vector-icons/MaterialIcons";
import { getAgentCheckinDates, agentAddNote } from "@Request2/Auth";
import {cleanUpAgentNote} from "@Store2/Auth"

import styles from './style';
import { Calendar } from 'react-native-calendars';
import { OnboardinBtn } from "@Component2";

import BottomSheet from "react-native-gesture-bottom-sheet";


const CalendarSheet = (props) => {
const dispatch = useDispatch();
const { dateStatus, dateData,noteStatus, errors,noteErrors } = useSelector((state) => state.auth);
const [showCalendar, setShowCalendar] = useState(false)
const [note, setNote] = useState("")
const [noteDate, setNoteDate] = useState("")
const [errMsg, setErrMsg] = useState(null);
const [successMsg, setSuccessMsg] = useState(null);
const [listData, setListData] = useState([])
const [dates, setDates] = useState({})
const [postDate, setPostDate] = useState(false)
const [fromDate, setFromDate] = useState("")
const [toDate, setToDate] = useState("")
const [displayFrom, setDisplayFrom] = useState(true)
const [displayTo, setDisplayTo] = useState(false)
const [selected, setSelected] = useState('');
const id = props.id

const changeDate = () =>{
setShowCalendar(!showCalendar)
}


//   useEffect(() => {

//     if (dateStatus === "success") {
//       setListData(dateData)
//      setStartDate(dateData[0])
//      setEndDate(dateData.slice(-1)[0])

//     }

//   }, [dateStatus, ]);


// useEffect(() => {
//     dispatch(getAgentCheckinDates(id))
 

//   }, []);



//   const submit = () => {
//     dispatch(cleanUpAgentNote())
//     if (note === "" || noteDate == ""){
//       setErrMsg("Please add a note and pick a date"); 
//       setTimeout(() => {
//         setErrMsg(null)
//       }, 3000);
//     }else{

//       const data = {note:note, check_in_date:noteDate, store_id:id};
  

//       dispatch(agentAddNote(data))

  
  
//     }
    
   
//   };

const confirmCalendar = () =>{
    if(fromDate == "" || toDate === ""){
      setErrMsg("Please select a Start and End Date"); 
      closeToast()
    }else if(Date.parse(fromDate) > Date.parse(toDate)) {
      setErrMsg("Please the END DATE show be recent than the start date ")
      closeToast()
    }else{
      console.log("You selected :", fromDate, "", toDate)
      props.startDate(fromDate && fromDate)
      props.endDate(toDate && fromDate)
      props.closeCalendar()
    }


}

const showFrom = () =>{
  setDisplayFrom(true)
  setDisplayTo(false)
}

const showTo = () =>{
  setDisplayTo(true)
  setDisplayFrom(false)
}
  

const resetCalendar = () =>{
  setFromDate("")
  setToDate("")
  props.closeCalendar()
}
 
const closeToast = () =>{
  setTimeout(() => {
    setErrMsg(null)
  }, 4000);
}




    return (
  
                 <BottomSheet hasDraggableIcon sheetBackgroundColor="#fff" ref={props.bottomSheetCalendar} height={600} >

                   <View style={styles.sheetContainer}>
                  
                       <View style={styles.middleContainer}>
                       <View style={styles.topCover}>
                            
                            <TouchableOpacity style={displayFrom  ? styles.inputContainer : styles.inputContainerInactive} onPress={showFrom}>
                                  <View style={styles.labelStyle}><Text style={styles.labelText}>From</Text></View>
                              <View style={styles.formCover}>
                                <Text style={styles.fadeText}>{fromDate === "" ? "Pick Start Date" : fromDate}</Text>
                                {
                                  displayFrom ?
                                  <Icon name='calendar' size={20} color="rgba(51, 83, 203, 1)" />
                                  :
                                  <Icon name='calendar' size={20} color="#bfbfbf" />

                                   }
                              
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={displayTo  ? styles.inputContainer : styles.inputContainerInactive}onPress={showTo}>
                                  <View style={styles.labelStyle}><Text style={styles.labelText}>To</Text></View>
                              <View style={styles.formCover}>
                                <Text style={styles.fadeText}>{toDate === "" ? "Pick End Date" : toDate}</Text>
                                {
                                 displayTo ?
                                  <Icon name='calendar' size={20} color="rgba(51, 83, 203, 1)" />
                                  :
                                  <Icon name='calendar' size={20} color="#bfbfbf" />

                                   }
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.calendarCover}>
                          {displayFrom ?
                            <Calendar
                              onDayPress={day => {
                              setFromDate(day.dateString);
                              props.startDate(day.dateString)
                              setFromDate(day.dateString)
                              }}
                              markedDates={{
                                [fromDate]: {selected: true, disableTouchEvent: true, selectedColor: 'rgba(51, 83, 203, 1)'}
                              }}
                            />
                              :
                              <Calendar
                              onDayPress={day => {
                                setToDate(day.dateString);
                                props.endDate(day.dateString)
                                setToDate(day.dateString)
                              }}
                              markedDates={{
                                [toDate]: {selected: true, disableTouchEvent: true, selectedColor: 'rgba(51, 83, 203, 1)'}
                              }}
                            />
                            }
                        </View>
                        {errMsg &&
                              <View style={styles.errView} >
                                  <Zcon name="error-outline" size={22} color="#fff" />
                                  <Text style={styles.errText}>{errMsg}</Text>
                              </View>

                            }
                       </View>

                       <View style={styles.bottomCover}>
                       <TouchableOpacity style={styles.resetBtn} onPress={resetCalendar}>
                       <Text style={styles.resetText}>Reset</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.confirmBtn} onPress={confirmCalendar}>
                            <Text style={styles.confirmText}>Confirm date</Text>
                          </TouchableOpacity>
                        </View>
                   </View>


                </BottomSheet>

    
    
      
    )
};

export default CalendarSheet;