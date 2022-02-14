import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styles from "./styleDropdown";

interface Props {
  label: string;
  storeAddress: string;
  data: Array<{ label: string; value: string; storeAddress: string; value: string }>;
  onSelect: (item: { label: string; value: string; storeAddress: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect, storeAddress }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
      <Text>{item.storeAddress}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
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
        <Text style={styles.buttonText1}>
          {(selected && selected.label) || label}
        </Text>
       
      </View>
      <Text style={styles.buttonText}>{(selected && selected.storeAddress) || storeAddress}</Text>
      <Icon style={styles.icon} type="font-awesome" name="chevron-down" />
    </TouchableOpacity>
  );
};



export default Dropdown;