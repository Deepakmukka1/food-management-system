import './UserRequest.css'
import React, { useState } from 'react'
import { useEffect }  from 'react';



function getCurrentDate(){
var separator = '/';
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}



const Food = (props) =>{
  const [LunchStatus, LunchUpdate] = useState('Lunch YES');
  const [DinnerStatus, DinnerUpdate] = useState('Dinner YES');
  
  useEffect(() => {
    console.log(LunchStatus);
  }, [LunchStatus])

  useEffect(() => {
    console.log(DinnerStatus);
  }, [DinnerStatus])

  function StatusShow(){
  if(props.type === 'Lunch'){
      return LunchStatus;
    }
    else{
      return DinnerStatus;
    }
}
  function handlingSubmit(e){
    const PropType = e.target.name;
    if(PropType === 'Lunch'){
      LunchUpdate('Lunch NO');
    }
    else{
      DinnerUpdate('Dinner NO');
    }
  }
  return (
    <div className='food-box'>
      <div id ='food_card_headding'>
        <span><b>{props.type}</b></span>
      </div>
      <div id='date_time'>
        <span>{getCurrentDate()}</span>
        <span>{props.time}</span>
        <div id='status'>
          <span>Status : </span>
          <span>{StatusShow()}</span>
        </div>
      </div>
      <div id='Description'>
        {/* <span id='description_note'>Note</span> */}
        <p>Click submit if are not visiting the mess and once you click submit button note that you are not allowed to eat here so submit the request if and only if you are sure that you are not visiting.</p>
      </div>
      <button  class="button_raise" name={props.type} onClick={e=>handlingSubmit(e)}>Submit</button>
    </div>
  );
}

export default Food;