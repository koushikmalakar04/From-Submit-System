import { useState } from "react";
import "./App.css";

function App() {
  const[formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email : "",
    country :"India",
    streetAddress : "",
    city :"",
    state :"",
    zipCode :"",
    comments: false,
    candidate: false,
    offers: false,
    pushNotifications:""
  })

  function changeHandler(event){

    const{name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked : value}) )

  }

  function submitHandler(event){
      event.preventDefault();
      console.log("Finally printing the form data: ")
      console.log(formData)
  }

  return (
  <div className="flex flex-col items-center p-8">

    <form className="w-full max-w-md bg-white rounded shadow-lg p-6" onSubmit={submitHandler}>

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="firstName" id="firstName" placeholder="Enter your first name" value={formData.firstName} onChange={changeHandler}/>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="lastName" id="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={changeHandler}/>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Enter your Email" value={formData.email} onChange={changeHandler}/>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country</label>
      <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="country" id="country" value={formData.country} onChange={changeHandler}>
      <option>India</option>
      <option>Bangladesh</option>
      <option>Thailand</option>
      <option>Japan</option>
      </select>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="streetAddress">Street Address</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="streetAddress" id="streetAddrress" placeholder="Street Address" value={formData.streetAddress} onChange={changeHandler}/>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">City</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="city" id="city" placeholder="City" value={formData.city} onChange={changeHandler}/>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">State</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="state" id="state" placeholder="State" value={formData.state} onChange={changeHandler}/>
      <br />
      <br />

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">Zip Code / Pin Code</label>
      <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="zipCode" id="zipCode" placeholder="Zip Code / Pin Code" value={formData.zipCode} onChange={changeHandler}/>
      <br />
      <br />

      <fieldset>
        <legend className="block text-gray-700 text-sm font-bold mb-2">By Email</legend>

        <div className="flex flex-row items-center">

        <input type="checkbox" id="comments" name="comments" checked={formData.comments}  onChange={changeHandler}/>
        
        <div className="ml-2">

        <label className="block text-gray-700 text-sm font-bold" htmlFor="comments">Comments</label>
        <p className="text-gray-600">Get notified when someone posts a comment on a posting.</p>

        </div>

        </div>

        <div className="flex flex-row items-center">

        <input type="checkbox" id="candidate" name="candidate" checked={formData.candidate}  onChange={changeHandler}/>
        <div className="ml-2">

        <label className="block text-gray-700 text-sm font-bold" htmlFor="candidate">Candidates</label>
        <p className="text-gray-600">Get notified when a cadidate apply for a job.</p>

        </div>

        </div>

        <div className="flex flex-row items-center">

        <input type="checkbox" id="offers" name="offers" checked={formData.offers}  onChange={changeHandler}/>

        <div className="ml-2">

        <label className="block text-gray-700 text-sm font-bold" htmlFor="offers">Offers</label>
        <p className="text-gray-600">Get notified when a cadidate accept or reject an offer.</p>

        </div>

    </div>

      </fieldset>
      <br />
      <br />

      <fieldset className="">

      <legend className="block text-gray-700 text-sm font-bold mb-2">Push Notifications</legend>
      <p className="text-gray-600">These are delivered via SMS to your mobile phone.</p>

      <input className="" type="radio" id="pushEverything" name="pushNotifications" value="Everything" onChange={changeHandler}/>
      <label className="block text-gray-700 text-sm font-bold" htmlFor="pushEverything">Everything</label>
      <br />

      <input className="" type="radio" id="pushEmail" name="pushNotifications" value="Same as Email" onChange={changeHandler}/>
      <label className="block text-gray-700 text-sm font-bold" htmlFor="pushEmail">Same as Email</label>
      <br />

      <input className="" type="radio" id="pushNothing" name="pushNotifications" value="No push Notifications" onChange={changeHandler}/>
      <label className="block text-gray-700 text-sm font-bold" htmlFor="pushNothing">No push Notification</label>

      </fieldset>
      <div className="mt-4">

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Save</button>
      </div>

    </form>
  </div>

  );
}

export default App;
