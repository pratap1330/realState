
import { getAuth, updateProfile } from "firebase/auth"
import { useEffect, useState, } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import {FcHome} from "react-icons/fc"
import ListingItem from "./ListingItem";
import Footer from '../components/Footer'
import Spinner from "../components/Spinner"

export default function Profile() {
  const Navigate = useNavigate();
  const [listings, setlistings] = useState(null)
  const [loading, setloading] = useState(true)
  const auth = getAuth()
  const [formData, setFormaData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const {name, email} = formData
  function logOut() {
    auth.signOut()
    Navigate("/")
  }
  const [changeDetail, setChangeDetails] = useState(false)
  function onChange(e){
    setFormaData((prevState) => ({
      ...prevState,
    [e.target.id]: e.target.value,
    }))
  }
  async function onSubmit()
  {
   try {
    if(auth.currentUser.displayName !== name)
    {
      await updateProfile(auth.currentUser, {
        displayName : name,
      });
      //updating name in firestore  
      const docRef = db("users", auth.currentUser.uid)
      await updateDoc(docRef, {
        name,
      })
    }
    toast.success('Profile details updated')
   } catch (error) {
    toast.error("Could not update profile details")
   }
  }

  useEffect(() => {
async function getListingUser() {
  setloading(true);
const listingRef = collection(db, "listings");
const q = query(
listingRef,
where("userRef", "==", auth.currentUser.uid),
orderBy("time", "desc"))
const querySnap = await getDocs(q);
let listings = [ ];
querySnap.forEach((doc) => {
  return listings.push({
    id: doc.id,
    data: doc.data(),
  })
})
setlistings(listings);
setloading(false)
}
getListingUser()
  }, [auth.currentUser.uid])
  if(loading) {
    return <Spinner/>
  }
  return (
  <>
  <section className="max-w-6xl mx-auto flex flex-col items-center py-8">
  <h1 className="text-3xl font-bol mb-6">My Profile</h1>
  <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
    <form>
      <div className="mb-5">
        <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          disabled={!changeDetail}
          onChange={onChange}
          className={`w-full px-4 py-2 text-lg border rounded-lg transition-all duration-300 ease-in-out focus:outline-none ${changeDetail ? 'bg-yellow-100 border-yellow-400 text-gray-800' : 'bg-gray-100 border-gray-300 text-gray-600'}`} 
          placeholder="Enter your name" 
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          disabled 
          className="w-full px-4 py-2 text-lg bg-gray-100 border border-gray-300 rounded-lg text-gray-600 cursor-not-allowed" 
        />
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 text-sm flex items-center">
          Do you want to change your name? 
          <span 
            onClick={() => {
              if (changeDetail) onSubmit();
              setChangeDetails(prevState => !prevState);
            }} 
            className="ml-2 text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200"
          >
            {changeDetail ? "Apply change" : "Edit"}
          </span>
        </p>
        <p 
          onClick={logOut} 
          className="text-red-600 hover:text-red-800 cursor-pointer transition duration-200"
        >
          Sign Out
        </p>
      </div>
      <button 
        type="button" 
        className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-200 py-3 rounded-lg shadow-md flex items-center justify-center"
      >
        <Link to="/create-listing" className="flex items-center">
          <FcHome className="text-3xl rounded-full bg-white p-2 mr-3 shadow-md" />
          Rent or Sell a House
        </Link>
      </button>
    </form>
  </div>
</section>

  <div className="max-w-6xl px-3 mt-6 mx-auto">
    {!loading && listings.length > 0 && (
      <>
      <h2 className="text-center font-semibold text-2xl mb-6">My Listing</h2> 
      <ul
      className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mt-6 mb-6"
      >
      {listings.map((listing) => (
      <ListingItem
      key={listing.id}
      id={listing.id}
      lisitngs={listing.data}
      />

      ))}
      </ul>
      </>
    )}
  </div>
  <Footer/>
  </>
  )
}
