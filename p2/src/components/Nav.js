import React from "react";

import { IoIosNotificationsOutline, IoIosWoman, IoIosKeypad,IoIosPhotos} from "react-icons/io";
import { HiHand } from "react-icons/hi";
import { DiAptana } from "react-icons/di";
import { VscAccount } from "react-icons/vsc";

import "./Nav.css";
import "./Location"

const Nav = () => {

    const[name, setName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[phone, setPhone] = React.useState('');
    const[system, setSystem] =React.useState('');
    const[registration,setRegistration] = React.useState('');
    const[gst,setGst]  = React.useState('');
    const[sel, setSel] = React.useState('');
    const[location, setLocation] = React.useState('');
    const[faddress, setFulladdress] = React.useState('');
    const[rtype, setRtype] = React.useState('');
  
    
    const[setError] = React.useState('');
    
   

    const handleAddmerchent = async()=>{
        console.log(!name);
        if(!name || !email || !phone || !system || !registration || !gst  || !sel || !location || !faddress ||!rtype){
            setError(true)
            return false;
        }
        console.log(name,email,phone,system,registration,gst,sel,location,faddress,rtype)

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("phone",phone);
        localStorage.setItem("system",system);
        localStorage.setItem("registration",gst);
        localStorage.setItem("gst",email);
        localStorage.setItem("sel",sel);
        localStorage.setItem("faddress",faddress);
        localStorage.setItem("rtype",rtype);
        localStorage.setItem("location",location);
        localStorage.setItem("location",location);
       

    }



    return (
        <>
            <div className="nav">
                <div className="heading1">
                    <div className="head">
                        <img className="logo" src="https://miro.medium.com/max/1400/1*vQ5EsgnJkANWb5fktHPwnw.jpeg" alt="logo" />
                        <h2>BSK MY GOLD Pvt Ltd</h2> </div>
                </div>
                <div className="heading2"><h3><HiHand/>  WELCOME,Amol Bansal</h3> </div>
                <div className="heading3"> <IoIosNotificationsOutline /> <VscAccount /> </div>

            </div>


        <div className="content">
        <aside>
                <p> <IoIosKeypad />  Dashboard</p>
                <p> <IoIosKeypad />  User Management</p>
                <p> <IoIosKeypad />  Tax Setting</p>
                <p> <IoIosKeypad />  E-Commerce</p>
                <p> <IoIosKeypad />  Promotional Setting</p>
                <p> <IoIosKeypad />  Reports</p>

                <div className="asidesetting"> <p><DiAptana/>  Settings </p></div>

            </aside>


            <section>
            <h1>Add New Merchant</h1>
              
              <h3>1.General Details</h3>
              
          <div className="cont">
     
          <div className="mainbox">
            <div className="leftone">
              
            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={name} onChange={(e)=>setName(e.target.value)} ></input>
                  <span> Name of Merchant</span>
                </div>
              </div>

            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={email} onChange={(e)=>setEmail(e.target.value)}  ></input>
                  <span> Email address</span>
                </div>
              </div>
            </div>
            <div className="rightone">
            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={phone} onChange={(e)=>setPhone(e.target.value)}  ></input>
                  <span> phone No</span>
                </div>
              </div>

              <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={system} onChange={(e)=>setSystem(e.target.value)}  ></input>
                  <span>System</span>
                </div>
              </div>
            </div>
          </div>


          </div>
                

                
               
          <h3>2. KYC Details</h3>
              
  
          <div className="mainbox">
            <div className="leftone">
              
            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={registration} onChange={(e)=>setRegistration(e.target.value)} ></input>
                  <span> Registration number</span>
                </div>
              </div>

            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={gst} onChange={(e)=>setGst(e.target.value)}  ></input>
                  <span> GST number</span>
                </div>
              </div>
            </div>
            <div className="rightone">
            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={sel} onChange={(e)=>setSel(e.target.value)}  ></input>
                  <span> sel number</span>
                </div>
              </div>
            </div>
          </div>


              <h3>3.Address Details</h3>
              <h5>Please Place Pin at Your Location</h5>
              <input type="text" className="location" name="" required="required" value={location} onChange={(e)=>setLocation(e.target.value)}  ></input>

                    
              <div className="box1">
                <h3>Full Address</h3>
                     <input type="text" name="" required="required" placeholder="fulladdress" value={faddress} onChange={(e)=>setFulladdress(e.target.value)}  ></input>
                      
                    </div>   



                    
              
              <div className="Rdetails">
              <h3>4.Retainer Details</h3>

           
              <div className="mainbox">
            <div className="leftone">
              
            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={rtype} onChange={(e)=>setRtype(e.target.value)} ></input>
                  <span> Resester type</span>
                </div>
              </div>

            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required"  ></input>
                  <span> sell commision</span>
                </div>
              </div>
            </div>
            <div className="rightone">
            <div className="left">
              <div className="box">
                 <input type="text" name="" required="required"   ></input>
                  <span> buy commision</span>
                </div>
              </div>

              <div className="left">
              <div className="box">
                 <input type="text" name="" required="required" value={gst} onChange={(e)=>setGst(e.target.value)}  ></input>
                  <span>GST</span>
                </div>
              </div>
            </div>
          </div>

              </div> 
     

<div>
    <h5>Module Application</h5>
   <div className="modulebox">
   <div className="mbox"> <IoIosPhotos/><p>Custodian </p></div>
    <div className="mbox"> <IoIosPhotos/><p>Dellivey</p> </div>
    <div className="mbox"> <IoIosPhotos/><p>Pickup</p></div>
    <div className="mbox"> <IoIosPhotos/><p>Verifier</p></div>
    <div className="mbox"> <IoIosPhotos/> <p>Refiner</p></div>
   </div>
</div>

<div className="lastpart">
    <div className="last"><input type="text" placeholder="DAYS"  /> </div>
    <div className="last"><input type="text" placeholder="GRAMS"    /></div>
    <div><select className="last5" type="text" placeholder="select an option"  >
      <option>select an option</option>
      <option>Selecting</option>
      </select>
       </div>
</div>
           <button className="button" type="button" onClick={handleAddmerchent}>Add Marchent</button>
</section>
        </div>

        </>
    )
}

export default Nav;