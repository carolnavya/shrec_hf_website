import React, { Component } from 'react';

import Select, { components } from 'react-select';

export default ({ placeholder, options, id, handleSelectedData, selectedOption, isLoadingData=false, labelKey, valueKey }) => {
  const { ValueContainer, Placeholder } = components;
  // const { ValueContainer } = components;

  const CustomValueContainer = ({ children, ...props }) => {
    return (
      <ValueContainer {...props}>
        {/* <Placeholder {...props} isFocused={props.isFocused}>
          {props.selectProps.placeholder}
        </Placeholder> */}
        {React.Children.map(children, (child) =>
          child && child.type !== Placeholder ? child : null
        )}
      </ValueContainer>
    );
  };

  const styles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      minWidth: 200,
      maxWidth: 300,
      backgroundColor: 'white',
    }),
    menu: ({ ...css }) => ({
      ...css,
      minWidth: 200,
      maxWidth: 300,
      // backgroundColor: "#102123",
    }),
    // Add padding to account for width of Indicators Container plus padding
    option: (defaultStyles) => ({
      ...defaultStyles,
      width: 'inherit',
      textAlign: 'left',
      // color: state.isSelected ? "#212529" : "#fff",
      // backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: 'black',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
    }),
    valueContainer: (base) => ({
      ...base,
      fontSize: '15px',
      top: '3.5px',
      marginLeft: '4px',
      overflow: 'visible',
    }),
    valueContainer: (base) => ({
      ...base,
      fontSize: '15px',
      top: '3.5px',
      marginLeft: '4px',
      overflow: 'visible',
    }),
    // placeholder: (base, defaultStyles) => ({
    //   ...base,
    //   ...defaultStyles,
    //   minWidth: 200,
    //   maxWidth: 300,
    //   textAlign: 'left',
    //   fontStyle: 'italic',
    //   marginBottom: '65px',
    //   position: 'absolute',
    //   // color: 'black',
    // }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "150px",
      overflowY: "auto",
    }),
  };

  return (
    <>
      <div>{selectedOption.value=='' && (<div><p style={{color: 'grey', opacity: 1, display: 'contents'}}>{placeholder}</p><Select
        className='basic-single'
        classNamePrefix='select'
        isLoading={isLoadingData}
        // isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        placeholder={placeholder}
        styles={styles}
        // labelKey={labelKey}
        // valueKey={valueKey}
        // value={selectedOption}
        onChange={(event) => handleSelectedData(id,event)}
        id={id}
        components={{ValueContainer: CustomValueContainer}}
      /></div>)}{
        selectedOption.value != '' &&
        (
          <div><p style={{color: 'grey', opacity: 1, display: 'contents'}}>{placeholder}</p><Select
        className='basic-single'
        classNamePrefix='select'
        isLoading={isLoadingData}
        // isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        placeholder={placeholder}
        styles={styles}
        // labelKey={labelKey}
        // valueKey={valueKey}
        value={selectedOption}
        onChange={(event) => handleSelectedData(id,event)}
        id={id}
        components={{ValueContainer: CustomValueContainer}}
      /></div>
      )
      }
      </div>
    </>
  );
};
