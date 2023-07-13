import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList,StatusBar, SafeAreaView, Linking, ActivityIndicator, PermissionsAndroid } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FileViewer from "react-native-file-viewer";
import RNFS from "react-native-fs";

import links from "./data";
import midLinks from "./midData"
import helpLinks from "./helpData"
import legalLinks from "./legalData"
import {getNotification} from '@Request2/notification';
import styles from "./style";
import { logout , getUserDetails} from "@Store2/Auth";
import { getUser } from "@Request2/Auth";
import { priceList } from "@Request2/PriceList";
import { cleanup } from "@Store2/PriceList";
import LogoutModal from "./logoutModal";


const Drawer = (props) => {
    const dispatch = useDispatch();

    const [showLoader, setShowLoader] = useState(false);
    const [link, setLinks] = useState(links);
    const [TP] = useState("https://remedialhealth.com/terms-of-service")
    const [FAQ] = useState("https://docs.google.com/document/d/1DsXEgk8hqFltod96--XhCD5oTs5Zl7DrZ4toJHKem9I/edit")

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const { user } = useSelector((state) => state.auth);
    const {notification, status} = useSelector(state => state.notification);
    const messageCount = notification?.notifications?.length
    
    
    const getRandomColor = str => {
        const colors = [
          '#018091','#03A896','#00C29B','#00AA55','#009FD4', '#B381B3','#939393','#E3BC00','#D47500', '#DC2A2A', '#07668C',
        ];
        let numberFromText = function (text) {
          const charCodes = text?.split('')
            .map(char => char.charCodeAt(0))
            .join('');
          return parseInt(charCodes, 10);
        };
      
        return colors[numberFromText(str) % colors.length];
      };


    useEffect(() => {
        // dispatch(getUser())
       dispatch(getUserDetails())

    }, [])


    const redirectToURL = (URL) => {
        Linking.openURL(URL)
            .then(() => {
                console.log('Link Opened');
            })
            .catch(() => {
                Alert.alert('An error occurred');
            });
    };

    useEffect(() => {
        if (user.role === 6 || user.role === 1) {
            const data = links.filter(item => item.name !== "Team");
            setLinks(data)
        }

    }, [user.role])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const logUserOut = () => {
        setShowLogoutModal(false)
        wait(1000).then(() => { dispatch(logout())})
        
        dispatch(cleanup())
    }

    const redirectToScreen = (route) => {
        if(route === "SignOut"){
            setShowLogoutModal(true)
        }else if (route === "FAQ"){
            redirectToURL(FAQ)
        }else if (route === "TP"){
            redirectToURL(TP) 
        }
        else{
            props.navigation.navigate(route);
        }
            
        
    };

  

   
    const ListComponent = props => {
        const item = props.item;
     
        return (
          <View > 
             <View style={styles.route}>
            <FlatList
                      data={link}
                    renderItem={List}
                    listKey={(item, index) => 'D' + index.toString()}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    horizontal={false} />
        
            </View>
            <View style={styles.route} >
            <View style={styles.headerCover}>
                <Text style={styles.headerTitle}>Business</Text>
            </View>
            <FlatList
                    data={midLinks}
                    renderItem={List}
                    listKey={(item, index) => 'D' + index.toString()}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    horizontal={false} />
            </View>
            <View style={styles.route}>
                <View style={styles.headerCover}>
                    <Text style={styles.headerTitle}>Help</Text>
                </View>
                <FlatList
                    data={helpLinks}
                    renderItem={List}
                    listKey={(item, index) => 'D' + index.toString()}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    horizontal={false} />
            </View>
            <View style={styles.route}>
                <View style={styles.headerCover}>
                    <Text style={styles.headerTitle}>Legal</Text>
                </View>
                <FlatList
                    data={legalLinks}
                    renderItem={List} 
                    listKey={(item, index) => 'D' + index.toString()}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    horizontal={false} />
            </View>
          </View>
        )
    }

    

  
    const List = ({ item }) => (
        <TouchableOpacity onPress={() => redirectToScreen(item.route)} style={styles.routeInnerView2}>
            <View style={styles.routeTextView}>
                <View style={styles.routeTextIconView}>
                    <FIcon name={item.icon} size={20} color="#767680" />
                </View>
                <Text style={styles.routeText}>{item.name}</Text>
            </View>
            {item.side ?
            <View style={styles.countCover}>
                <Text style={styles.countText}>{messageCount}</Text>
            </View>
            :
            null
            }

           
        </TouchableOpacity>
    );

   

  


    return (
        <View style={{ height:"80%",flex:1, overflow:"visible" }}>

            <View style={styles.header}>
                <SafeAreaView style={styles.headerInnerView}>
                <StatusBar barStyle="dark-content" backgroundColor='#DDE1FF'  hidden={false} />
                <View style={[styles.linearView,{backgroundColor: getRandomColor(user?.name)}]}>
                       <Text style={styles.shortCut}>{user?.name?.substring(0, 1)}</Text>
                    </View>

                    <View style={styles.leftCover}>
                       
                        <TouchableOpacity style={styles.headerTitleInnerView} onPress={() => props.navigation.navigate("Settings")}>
                                <View>
                                    <Text style={styles.titleText}>{user.name}</Text>
                                        <Text style={styles.headerTitleInnerTitle}>VIEW ACCOUNT</Text>
                                </View>
                            <View style={styles.chevronIcon}>
                                <Icon name="chevron-right" size={24} color="#767680" />
                            </View>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>

            </View>
            <View style={styles.listCover}>
                <FlatList
                    vertical
                    listKey={(item, index) => 'D' + index.toString()}
                    keyExtractor={(item, index) => `_key${index.toString()}`}
                    ListFooterComponent={<ListComponent />}
                     />
        
            </View>
          


          <LogoutModal
          logoutModal ={showLogoutModal}
          returnBack={() => setShowLogoutModal(false)}
          proceed = {logUserOut}
          />
        </View>
    )
};

export default Drawer;