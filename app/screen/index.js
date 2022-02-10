// Delete work, please leave

// const ModalView = () => (
    //     <Modal
    //         isVisible={showModal}
    //         animationIn="slideInUp"
    //         animationInTiming={800}
    //         animationOut="slideOutDown"
    //         animationOutTiming={800}
    //         useNativeDriver={false}
    //         coverScreen={true}
    //         swipeDirection="down"
    //         onSwipeComplete={() => setShowModal(false)}
    //     >
    //         <View style={styles.modalView}>

    //             <View style={styles.modalPadding}>
    //                 <TouchableOpacity onPress={() => setShowModal(!showModal)}>
    //                     <Icon name="arrow-left" color="#000" size={24} />
    //                 </TouchableOpacity>
    //             </View>
    //             <View>
    //                 <View>
    //                 </View>
    //                 {result?.id ?
    //                     <View>
    //                         <Image source={{ uri: `${URL}${result.product_images[0].url}` }} style={styles.modalImg} />
    //                         <View style={styles.modalTitleView}>
    //                             <Text style={styles.modalTitle}>{result.name}</Text>
    //                             <View>
    //                                 <Text></Text>
    //                             </View>
    //                         </View>
    //                         <View style={styles.modalMiniBody}>
    //                             <View style={styles.modalminiSecondView}>
    //                                 <Text style={styles.modalminiTitle}>Category: <Text style={styles.modalminiSecondTitle}>{result.description}</Text></Text>
    //                             </View>
    //                             <View style={styles.modalminiSecondView}>
    //                                 <Text style={styles.modalminiTitle}>Available: {result.quantity_available > 0 ? <Text style={{ color: "#469D00" }}>In Stock</Text> : <Text style={{ color: "red" }}>Out of Stock</Text>}</Text>
    //                             </View>
    //                             <View style={styles.modalminiSecondView}>
    //                                 <Text style={styles.modalminiTitle}>Price/Roll: <Text style={{ color: "#469D00" }}>&#8358;{commafy(result.price_per_pack)}</Text></Text>
    //                             </View>

    //                             <View style={styles.modalDiscount}>
    //                                 <View>
    //                                     <Icon name="info" size={18} color="#00319D" />
    //                                 </View>
    //                                 <View style={styles.modalDiscountTextView}>
    //                                     <Text style={styles.modalDiscountText}>Discount on Carton: {result.discount_on_carton}</Text>
    //                                 </View>
    //                             </View>

    //                             <View style={styles.increaseCartMainAmountView}>
    //                                 <View style={styles.cartAmountView}>
    //                                     <TouchableOpacity style={styles.increase} onPress={decreaseCart}>
    //                                         <Icon name="minus" />
    //                                     </TouchableOpacity>
    //                                     <View style={styles.increaseText}>
    //                                         <Text style={styles.productTitle}>{cartAmount}</Text>
    //                                     </View>
    //                                     <TouchableOpacity style={styles.decrease} onPress={increaseCart}>
    //                                         <Icon name="plus" />
    //                                     </TouchableOpacity>
    //                                 </View>
    //                                 <View>
    //                                     <Text style={styles.amountText}>&#8358;{commafy(result.price_per_pack)}</Text>
    //                                 </View>
    //                             </View>

    //                             <View style={styles.modalHeartIconView}>
    //                                 <View style={styles.modalHeartInnerIconView}>
    //                                     <TouchableOpacity style={styles.modalHeartIcon} onPress={() => itemsAddedToWishlist(result.id)}>
    //                                         <Icon name="heart" size={16} color="#BDBDBD" />
    //                                     </TouchableOpacity>
    //                                     <View >
    //                                         <Text style={styles.productTitle}>Add to My Items</Text>
    //                                     </View>
    //                                 </View>

    //                                 <View style={styles.modalBtnView}>
    //                                     <Icon name="shopping-cart" size={16} color="#212121" />
    //                                     <Btn title="Add to Cart" style={styles.modalBtn} styles={styles.modalBtnText} />
    //                                 </View>
    //                             </View>
    //                         </View>

    //                     </View>
    //                     : null}
    //             </View>
    //         </View>

    //     </Modal>
    // );
