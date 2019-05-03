import React from 'react';



const Tab = props => {
      
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab': 'tab active-tab'}
      onClick={() => { props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};


export default Tab;
