import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiUpload2Line, RiHome8Fill } from "react-icons/ri";
import { TiEyeOutline } from "react-icons/ti";
import { FiDownload, FiTag } from "react-icons/fi";


const BasicInfo = () => {
    const [propertytype, setPropertyType] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [propertyage, setPropertyAge] = React.useState('');
    const [propertydesc, setPropertyDesc] = React.useState('');
    const [negotable, setNegotable] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [propertyapproved, setPropertyApproved] = React.useState('');
    const [banklone, setBanklone] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate()


    const handleContinue = async (e) => {

        console.log(!propertytype);
        console.log(!propertytype, !price, !propertyage, !propertydesc, !negotable, !status, !propertyapproved, !banklone)
        if (!propertytype || !price || !propertyage || !propertydesc || !negotable || !status || !propertyapproved || !banklone) {
            setError(true)
            console.log(negotable)
            return false;
        }
        
        console.log(propertytype, price, propertyage, propertydesc, negotable, status, propertyapproved, banklone)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)


    
        // set data into localstorage
        localStorage.setItem("propertytype", propertytype);
        localStorage.setItem("price", price);
        localStorage.setItem("propertyage", propertyage);
        localStorage.setItem("propertytype", propertytype);
        localStorage.setItem("propertydesc", propertydesc);
        localStorage.setItem("negotable", negotable);
        localStorage.setItem("status", status);
        localStorage.setItem("propertyapproved", propertyapproved);
        localStorage.setItem("banklone", banklone);


        navigate("/propertydetalis")


    }
    const handleCancle = () => {
        navigate("/")
    }
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }


    return (
        <div>
            <div className='navlist'>

                {auth ? <ul className='nav-ul'>
                    <li><Link to="/"></Link></li>
                    <li><button className='bbtn'><Link to="/basicinfo" >Basic Info</Link></button></li>
                    <li><button className='bbtn'><Link to="/propertydetalis" >Property Detalis</Link></button></li>
                    <li><button className='bbtn'><Link to="/generaldetalis" >General Detalis</Link></button></li>
                    <li><button className='bbtn'><Link to="/location"  >Location</Link></button></li>
                    <li><button className='bbtn'><Link onClick={logout} to="/signup">Logout</Link></button></li>
                </ul>
                    : <ul>
                    </ul>
                }
            </div>
            <div className='basicinfo'>
                <div className="asidebar">

                    <ul className="asidelist">
                        <p><RiHome8Fill /> Property</p>
                        <p><IoIosNotificationsOutline /> Assistance</p>
                        <p><FiDownload />  Recived Interest</p>
                        <p><RiUpload2Line />  Sent Interest</p>
                        <p><TiEyeOutline />  Property Views</p>
                        <p><FiTag /> Tariff Plan</p>
                    </ul>
                </div>
                


                <div className='leftsidebox'>

                    <div>
                        <span><h5>Property Type</h5></span>
                        <select className='input1' type="text" placeholder="property type" value={propertytype} onChange={(e) => setPropertyType(e.target.value)} >
                            <option>Select</option>
                            <option>House</option>
                            <option>Hotel</option>
                            <option>Plot</option>
                        </select>
                    </div>
                    <div>
                        <span><h5>Price</h5></span>
                        <input className='input' type="text" placeholder="Example:1000" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <span><h5>Property Age</h5></span>
                        <select className='input1' type="text" placeholder="Property Age" value={propertyage} onChange={(e) => setPropertyAge(e.target.value)} >
                            <option>select</option>
                            <option>selectage</option>
                        </select>
                    </div>
                    <div>
                        <span>  <h5>Property description</h5></span>
                        <input className='input' type="text" placeholder="property description" value={propertydesc} onChange={(e) => setPropertyDesc(e.target.value)} />
                    </div>
                </div>
                <div className='rightsidebox'>
                    <div>
                        <span>  <h5>Negotable</h5></span>
                        <select className='input1' type="text" placeholder="Select Negotable" value={negotable} onChange={(e) => setNegotable(e.target.value)} >
                            <option>Negotable</option>
                            <option>N.Negotable</option>
                        </select>
                    </div>
                    <div>
                        <span>  <h5>OwnerShip</h5></span>
                        <select className='input1' type="text" placeholder="Select OwnerShip" value={status} onChange={(e) => setStatus(e.target.value)} >
                            <option>sold</option>
                            <option>unsold</option>
                        </select>
                    </div>
                    <div>
                        <span>  <h5>Property Approved</h5></span>
                        <select className='input1' type="text" placeholder="property Approved" value={propertyapproved} onChange={(e) => setPropertyApproved(e.target.value)} >
                            <option> Approved</option>
                            <option>Non Approved</option>
                        </select>
                    </div>
                    <div>
                        <span>  <h5>Bank Loan</h5></span>
                        <select className='input1' type="text" placeholder="Bank Lone" value={banklone} onChange={(e) => setBanklone(e.target.value)} >
                            <option>Bank Loan</option>
                            <option>No banklone</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='button'>
                <button className='btnn1' type='button' onClick={handleCancle}>Cancle</button>
                <button className='btnn2' type='button' onClick={handleContinue}>Save & Continue</button>
            </div>
        </div>
    )
}
export default BasicInfo;


// import React from "react";
// import "./BasicInfo.css"

// const BasicInfo =()=>{

//     return(
//         <>
//         <div className="container">
//     hello
//         </div>
//         </>
//     )
// }

// export default BasicInfo;