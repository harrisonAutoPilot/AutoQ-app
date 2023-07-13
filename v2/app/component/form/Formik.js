import React from "react";
import { View } from "react-native";
import { Formik } from "formik";

const FormikValidator = ({ children, initialValues, validationSchema, onSubmit, style }) => {

    return (

        <View style={style}>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {children}
            </Formik>
            
        </View>
    )
};

export default FormikValidator;