import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback,Image, Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/Feather';
import LoanCard from "@Component/LoanCard";
import LoanApp from "@Screen/LoanOverlay";
import styles from "./style";
import globalStyles from "@Helper/globalStyles";
import { Btn, FormikValidator, InputField, SuccessMsgViewTwo  } from "@Component/index";
import { changePinSchema } from "@Helper/schema";
import { updateUserPassword } from "@Request/auth";
import { cleanup, logout } from "@Store/auth";


const Loan = () => {
   
    const dispatch = useDispatch();
    const { errors, update, user } = useSelector((state) => state.auth);
    const [errMsg, setErrMsg] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [pinVisibility, setPinVisibility] = useState(true);

    const applyForLoan=() => setShowModal(!showModal)
    const { wallet } = useSelector((state) => state.wallet);

    useEffect(() => {
        dispatch(cleanup())
    }, []);

    const dismissKeyboard = () => Keyboard.dismiss();
 
    const showPin = () => setPinVisibility(!pinVisibility)

    const changePinState = {
        current_password: '',
        new_password: "",
        retype_password: ""
    };

    useEffect(() => {
        if (update === "failed") {
            setErrMsg(errors?.msg)
        } else if (update === "success") {
            setSuccessMsg("Password Updated");
            dispatch(logout());
        }
    }, [update]);

    const submit = async (values) => {
        const {new_password, retype_password, current_password} = values;
        const newValues = {new_password, current_password, retype_password, id: user.id}
        await dispatch(updateUserPassword(newValues));
    };

    return (
        <View style={styles.inputMainHolder}>
            <View style={styles.comingSoonCover}>
           <Text style={styles.comingSoonText}>Loan Coming Soon...</Text>
           <Image source={require("@Assets/image/rafiki.png")} style={styles.comingSoonImg} />
           </View>
        </View>

    )
};

export default Loan;