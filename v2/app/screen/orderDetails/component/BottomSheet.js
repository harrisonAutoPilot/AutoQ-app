import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
    useBottomSheetTimingConfigs,
    BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Easing } from 'react-native-reanimated';


import styles from '../style';
import { OnboardinBtn } from "@Component2";



const OrderDetailsBottomSheet = (props) => {
    const items = props.items

    const animationConfigs = useBottomSheetTimingConfigs({
        duration: 350,
        easing: Easing.exp,
    });


    return (

        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={props.bottomSheetRef}
                index={1}
                initialSnapIndex={1}
                snapPoints={['21%', "60%", "80%",]}
                animationConfigs={animationConfigs}
                animateOnMount={true}
                enablePanDownToClose={false}
                style={styles.bottomSheet}
            >
                <BottomSheetScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.bottomSheetView}>
                        <View style={styles.footer}>
                            <View style={styles.totalContainer}>
                                <View style={styles.totalTop}>
                                    <Text style={styles.subText}>SUBTOTAL</Text>
                                    <Text style={styles.subAmountText}>
                                        ₦
                                        {items?.total_amount
                                            ? commafy(
                                                items?.total_amount -
                                                items?.delivery_type?.pivot?.delivery_price,
                                            )
                                            : 0}
                                    </Text>
                                </View>

                                <View style={styles.totalTop}>
                                    <Text style={styles.subText}>DELIVERY FEE</Text>
                                    <Text style={styles.subAmountText}>
                                        ₦
                                        {items?.delivery_type?.pivot?.delivery_price
                                            ? commafy(items?.delivery_type?.pivot?.delivery_price)
                                            : 0}
                                    </Text>
                                </View>

                                <View style={styles.totalTop}>
                                    <Text style={styles.subText}>TOTAL</Text>
                                    <Text style={styles.subAmountText}>
                                        ₦{items?.total_amount ? commafy(items?.total_amount) : 0}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.deliveryContainerTop}>
                                <View style={styles.deliveryCover}>
                                    <View style={styles.locCover}>
                                        <Icon name="map-marker" color="#767680" size={16} />
                                    </View>
                                    <View style={styles.deliveryInner}>
                                        <Text style={styles.deliveryCaption}>
                                            Delivery Store & Address
                                        </Text>
                                        <Text style={styles.deliveryName}>{items?.stor?.name}</Text>
                                        <Text style={styles.deliveryAddress}>
                                            {items?.store.address}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.deliveryContainer}>
                                <View style={styles.deliveryCover}>
                                    <View style={styles.locCover}>
                                        <Icon name="wallet" color="#767680" size={16} />
                                    </View>
                                    <View style={styles.deliveryInner}>
                                        <Text style={styles.deliveryCaption}>Payment Method</Text>
                                        <Text style={styles.deliveryName}>
                                            {items?.payment_method.display_name}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.bottomSheetFooterBtn}>

                            <View style={styles.btnCover}>

                                <OnboardinBtn
                                    title="Reorder Item"
                                    onPress={props.reOrders}
                                    backgroundColor="#3353CB"
                                    color="#fff"
                                />
                                {items.status_text.toLowerCase() !== 'incomplete' &&
                                <TouchableOpacity
                                    style={styles.historyBtn}
                                    onPress={props.checkStatus}>
                                    <Text style={styles.historyText}>Status History</Text>
                                </TouchableOpacity>
}

                                {items.status_text === 'pending' ?

                                    <TouchableOpacity
                                        style={styles.cancelBtn}
                                        onPress={props.cancelOrder}>
                                        <Text style={styles.cancelText}>Cancel Order</Text>
                                    </TouchableOpacity> : null
                                }

                                {items.status_text.toLowerCase() == 'delivered' && !props.rating.feedback && props.ratingStatus == "success" ?

                                    <TouchableOpacity
                                        style={styles.reviewBtn}
                                        onPress={props.review}
                                    >
                                        <Icon
                                            name="square-edit-outline"
                                            color="#3353CB"
                                            size={20}
                                        />
                                        <Text style={styles.reviewText}>Review Order</Text>
                                    </TouchableOpacity> : null}

                                {props.rating.feedback ?

                                    <TouchableOpacity
                                        style={styles.reviewBtn}
                                    onPress={props.seeReview}
                                    >
                                        <Icon
                                            name="message-plus-outline"
                                            color="#3353CB"
                                            size={20}
                                        />
                                        <Text style={styles.reviewText}>View Rating</Text>
                                    </TouchableOpacity> : null}


                            </View>

                        </View>
                    </View>

                </BottomSheetScrollView>

            </BottomSheetModal>

        </BottomSheetModalProvider>

    )
};

export default OrderDetailsBottomSheet;