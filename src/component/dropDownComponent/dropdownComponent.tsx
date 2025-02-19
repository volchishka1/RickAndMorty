import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { BackIconSvg } from '@assets/back.tsx';
import { setValueItem } from '@root/store/slices';
import { useDispatch } from 'react-redux';
import { dropdownStyles } from '@root/component/dropDownComponent/styles';

const data = [
  { label: 'Cancel', value: '' },
  { label: 'Alive', value: 'Alive' },
  { label: 'Dead', value: 'Dead' },
  { label: 'unknown', value: 'unknown' },
  { label: 'Alien', value: 'Alien' },
  { label: 'Human', value: 'Human' },
];

export const DropdownComponent = () => {
  const dispatch = useDispatch();

  return (
    <Dropdown
      style={dropdownStyles.dropdown}
      placeholderStyle={dropdownStyles.placeholderStyle}
      selectedTextStyle={dropdownStyles.selectedTextStyle}
      inputSearchStyle={dropdownStyles.inputSearchStyle}
      iconStyle={dropdownStyles.iconStyle}
      data={data}
      search
      maxHeight={250}
      labelField='label'
      valueField='value'
      placeholder='Select item'
      onChange={(item) => {
        dispatch(setValueItem(item.value));
      }}
      renderLeftIcon={() => <BackIconSvg />}
    />
  );
};
