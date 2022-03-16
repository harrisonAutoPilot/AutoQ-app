import React, { useRef, useState, useEffect } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-native-modal";
import FIcon from "react-native-vector-icons/MaterialIcons";
import {getStore} from "@Request/Store";
import styles from "./styleDropdown";

const Dropdown = ({ label, onSelect, storeAddress }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selectId, setSelectId] = useState();

  const dispatch = useDispatch();

  const { stores } = useSelector((state) => state.store);

  useEffect(() => {
    dispatch(getStore())
  }, [])

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();

  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
    setSelectId(item.id)
  };

  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>

        <View style={styles.itemCover} >
          {selectId === item.id ?
            <View style={styles.iconCircleActive}>
              <FIcon name="lens" size={12} color="rgba(70, 157, 0, 1)" style={styles.icon} />
            </View>
            :
            <View style={styles.iconCircleDrop}>
              <FIcon name="lens" size={12} color="#fff" style={styles.icon} />
            </View>}
          <View style={styles.item}>
            <Text style={styles.buttonText}>{item.name}</Text>
            <Text style={styles.buttonText2}>{item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  };

  const renderDropdown = () => {
    return (
      <Modal
        isVisible={visible}
        animationIn="slideInLeft"
        animationInTiming={300}
        animationOut="slideInLeft"
        animationOutTiming={300}
        useNativeDriver={true}
        hasBackdrop={true}
        backdropColor="#000"
        backdropOpacity={0.8}
        coverScreen={true}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
         

          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <View style={styles.dropLabelCover}><Text style={styles.dropLabel}>Select Store to deliver products</Text></View>
           
            <FlatList
              data={stores.stores}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <View style={styles.dropContent}>

        {selected && selected.name ?
          <Text style={styles.buttonText}>
            {(selected && selected.name) || label}
          </Text> : null}

        <Text style={styles.buttonText2}>{(selected && selected.address) || storeAddress}</Text>
      </View>
      <Icon style={styles.icon} type="font-awesome" name="chevron-down" />
    </TouchableOpacity>
  );
};



export default Dropdown;