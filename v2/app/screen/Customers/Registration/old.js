     <View style={styles.optionView}>

                        <View style={styles.optionTitleView}>
                            {select !== "1" ? 
                            <Icon name="check-circle" size={20} color="rgba(51, 83, 203, 1)" style={styles.arrowBack} />
                            :
                            <View style={styles.numberCover}>
                               <Text style={styles.numberText}>1</Text>
                            </View>
                            }

                            <View
                                style={[select == "1" ? styles.optionTitleInnnerView : styles.optionTitleInnnerInactiveView]}
                                >
                                <Text style={[select == "1" ? styles.optionActiveTitle : styles.optionTitle]}>User Profile</Text>
                            </View>

                            <View style={styles.optionTitleIconView} >
                                <Icon name="arrow-forward-ios" color={select !== "1" ? "rgba(51, 83, 203, 1)" : "rgba(118, 118, 128, 1)"} />
                            </View>

                        </View>

                        <View style={styles.optionTitleView}>

                            {select == "3" && <Icon name="check-circle" size={20} color="rgba(51, 83, 203, 1)" />}

                            <View style={[select == "2" ? styles.optionTitleInnnerView : styles.optionTitleInnnerInactiveView]}>
                                
                                   <View style={styles.numberCoverInActive}>
                                   <Text style={styles.numberText}>2</Text>
                                   </View>
                                <Text style={[select == "2" ? styles.optionActiveTitle : styles.optionTitle]}>Store</Text>
                            </View>

                            <View style={styles.optionTitleIconView}>
                                <Icon name="arrow-forward-ios" style={styles.optionIcon} color={select == "3" ? "rgba(51, 83, 203, 1)" : "rgba(118, 118, 128, 1)"} />
                            </View>
                        </View >

                        <View style={select == "3" ? styles.optionTitleInnnerView : styles.optionTitleInnnerView}>
                        <View style={styles.numberCoverInActive}>
                                   <Text style={styles.numberText}>3</Text>
                                   </View>
                            <Text style={[select == "3" ? styles.optionActiveTitle : styles.optionTitle]}>Profile</Text>
                        </View>
                    </View>



                                   
{/* 
{errMsg && <View style={styles.errView} >
    <Icon name="error-outline" size={22} color="#fff" />
    <Text style={styles.errText}>{errMsg}</Text>
</View>}

{select == "1" ?

    <Delivery
        showBottomSheet={showDropDownBottomSheet}
        showDateBottomSheet={showDateDropDownBottomSheet}
        storeAddress={storeAddress}
        delivery={delivery}
        deliveryDays={setDeliveryDays}
        deliveryDate={selectedDeliveryDate?.id}
        select={setSelect}
        deliveryFee={setDeliveryFee}
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
        setDeliveryDate={setSelectedDeliveryDate}
    />
    :
    select == "2"
        ?
        <Payment
            payment={payment}
            status={paymentStatus}
            setId={setPaymentId}
            item={paymentId}
            select={setSelect}
            wallet={wallet}
        />
        :
        <Confirmation
            storeAddress={storeAddress}
            payment={paymentId.display_name}
            item={items}
            deliveryFee={deliveryFee}
            placeOrder={sendOrder}
            select={setSelect}
        />





        // this is for the store step 2
             {/* <FormikValidator
                    initialValues={registerState2}
                    validationSchema={addStoreSchema2}
                    onSubmit={(values, actions) => {
                        submit(values)
                    }}
                  >
                                    {props => (
                                    <View>
                                         <ScrollView
                                         indicatorStyle="white"
                                         contentContainerStyle={[
                                             styles.scrollContentContainer,
                                         ]}>
                                      
                                     <View style={styles.smCover}>
                                         
                                        <View style={styles.fiedpadd}>
                                                <View style={[styles.registerInputHolder, props.touched.store_name && props.errors.store_name ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>STORE NAME</Text>
                                                    </View>

                                                    <InputField
                                                        style={styles.label4}
                                                        value={props.values.store_name }
                                                        onBlur={props.handleBlur('store_name')}
                                                        placeholder="e.g. Kingsley pharmacy"
                                                        placeholderTextColor="#757575"
                                                        keyboardType="default"
                                                        onChangeText={(val) => {
                                                            props.setFieldValue('store_name', val)
                                                            props.setFieldTouched('store_name', true, false);
                                                        
                                                        }}
                                                    />
                                                </View>
                                                {props.touched.store_name && props.errors.store_name ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.store_name}</Text>
                                                    </View>) : null}
                                            </View>

                                            <View style={styles.fiedpad}>
                                                <View style={[styles.inputHolderTetArea, props.touched.address && props.errors.address ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>STREET ADDRESS</Text>
                                                    </View>

                                                    <InputField
                                                        style={styles.label4}
                                                        value={props.values.address}
                                                        onBlur={props.handleBlur('address')}
                                                        placeholder="15 Eric more street ..."
                                                        placeholderTextColor="#757575"
                                                        keyboardType="default"
                                                        onChangeText={(val) => {
                                                            props.setFieldValue('address', val)
                                                            props.setFieldTouched('address', true, false);
                                                        }}
                                                        numberOfLines={3}
                                                        multiline
                                                    />
                                                </View>
                                                {props.touched.address && props.errors.address ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.address}</Text>
                                                    </View>) : null}
                                            </View>

                                            <View style={styles.fiedpad}>
                                                <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.state_id && props.errors.state_id ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>State</Text>
                                                    </View>
                                                    {states.length ?

                                                        <SelectState onSelect={setState_id} props={props} />
                                                        : <Text style={styles.loadingLabel}>Loading....</Text>}

                                                </View>
                                                {props.touched.state_id && props.errors.state_id ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.state_id}</Text>
                                                    </View>) : null}

                                            </View>

                                            <View style={styles.fiedpad}>
                                                <View style={[styles.inputHolder2, styles.registerInputPinHolder, props.touched.lga_id && props.errors.lga_id ? styles.inputErrHolder : null]}>
                                                    <View style={styles.labelView}>
                                                        <Text style={styles.label}>LGA</Text>
                                                    </View>

                                                    {state_id?.lgas ?
                                                        <SelectLga data={state_id?.lgas} props={props} />
                                                        : <Text style={styles.loadingLabel}>Loading....</Text>}

                                                </View>
                                                {props.touched.lga_id && props.errors.lga_id ? (
                                                    <View style={styles.errView}>
                                                        <Text style={styles.errText}>{props.errors.lga_id}</Text>
                                                    </View>) : null}

                                            </View>
                                           
                                           
                                       
                                      </View>
                                     
                                      </ScrollView>
                                    
                                        <View style={styles.btnStep2Cover}>
                                        <BtnPre title="Previous" onPress={redirect} style={styles.submitStep3} stylea={styles.angleImg} styles={styles.preText} />
                                        <BtnLg title="Next" onPress={props.handleSubmit} style={styles.submitStep2} stylea={styles.angleImg} styles={styles.preText1} />
                                    </View>
                                  </View>

                                    )}


                                </FormikValidator> 

// this is for the add images

                                                        {/* <InputField
                                                            style={styles.label4}
                                                            value={storePhotoOne}
                                                            placeholder="img.jpg"
                                                            placeholderTextColor="#757575"
                                                            onPressIn={() => {
                                                                licenseImg(1, props)
                                                                props.setFieldTouched('images', true, false);

                                                            }}
                                                        /> 
                                                        {/* <TouchableOpacity onPress={() => licenseImg(1, props)}>
                                                            <View style={styles.selectCover}>
                                                                <Text style={styles.selectText}>Select Image</Text>
                                                            </View>
                                                        </TouchableOpacity> 
                                                        </View>
                                                        {/* {props.touched.images && props.errors.images ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.images}</Text>
                                                            </View>) : null}
                                                    </View> 
    
                                                    {/* <View style={styles.fiedpad}>
                                                        <View style={[styles.registerInputHolder, props.touched.images2 && props.errors.images2 ? styles.inputErrHolder : null]}>
                                                            <View style={styles.labelView}>
                                                                <Text style={styles.label}>STORE PHOTO</Text>
                                                            </View>
    
                                                            <InputField
                                                                style={styles.label4}
                                                                value={storePhotoTwo}
                                                                placeholder="img.jpg"
                                                                placeholderTextColor="#757575"
                                                                onPressIn={() => {
                                                                    licenseImg(2, props)
                                                                    props.setFieldTouched('images2', true, false);
    
                                                                }}
                                                            />
                                                            <TouchableOpacity  onPress={() => licenseImg(2, props)}>
                                                                <View style={styles.selectCover}>
                                                                    <Text style={styles.selectText}>Select Image</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                        {props.touched.images2 && props.errors.images2 ? (
                                                            <View style={styles.errView}>
                                                                <Text style={styles.errText}>{props.errors.images2}</Text>
                                                            </View>) : null}
    
                                                    </View> */}