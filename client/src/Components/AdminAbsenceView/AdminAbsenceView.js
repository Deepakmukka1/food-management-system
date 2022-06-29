import './AdminAbsenceView.css'
import Navbar from "../UserRequest/Navbar";

const AdminAbsenceView = () =>{
  return (
    <div>
        <Navbar/>
        <div id='content' className='card'>
            <span id='no_of_users'>Total no.of Users:-</span>
            <br></br>
            <span id='data_first'>{500}</span>
            <br></br>
            <span id='no_of_lunch_responces'>Lunch Responces:-</span>
            <br></br>
            <span id='data_second'>{200}</span>
            <br></br>
            <span id='no_of_dinner_responces'>Dinner Responces:-</span>
            <br></br>
            <span id='data_third'>{300}</span>
            <br></br>
        </div>
        <div id='message-box' className='card'>
            <p>Type any message here</p>
            <textarea className="text_space" onFocus="this.value=''; setbg('#e5fff3');" placeholder="Remember, be nice!" cols="30" rows="5"/>
            <button>Submit</button>
        </div>
    </div>
  );
}


export default AdminAbsenceView;