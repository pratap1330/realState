

// import { useEffect, useState } from "react";
// import Slider from "./Slider";
// import Footer from "../components/Footer";
// import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
// import { db } from "../firebase";
// import { Link } from "react-router-dom";
// import ListingItem from "./ListingItem";

// export default function Home() {
//   const [offerlisting, setofferlistings] = useState([]);
//   const [rentlisting, setrentlistings] = useState([]);
//   const [salelisting, setsalelistings] = useState([]);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     async function fetchListings() {
//       try {
//         const docRef = collection(db, "listings");
//         const q = query(docRef, where("offer", "==", true), orderBy("time", "desc"), limit(4));
//         const querySnap = await getDocs(q);
//         const listings = [];
//         querySnap.forEach((doc) => {
//           listings.push({
//             id: doc.id,
//             data: doc.data()
//           });
//         });
//         setofferlistings(listings);
//       } catch (error) {
//         console.error("Error fetching offer listings:", error);
//       }
//     }
//     fetchListings();
//   }, []);

//   useEffect(() => {
//     async function fetchListings() {
//       try {
//         const docRef = collection(db, "listings");
//         const q = query(docRef, where("type", "==", "rent"), orderBy("time", "desc"), limit(4));
//         const querySnap = await getDocs(q);
//         const listings = [];
//         querySnap.forEach((doc) => {
//           listings.push({
//             id: doc.id,
//             data: doc.data()
//           });
//         });
//         setrentlistings(listings);
//       } catch (error) {
//         console.error("Error fetching rent listings:", error);
//       }
//     }
//     fetchListings();
//   }, []);

//   useEffect(() => {
//     async function fetchListings() {
//       try {
//         const docRef = collection(db, "listings");
//         const q = query(docRef, where("type", "==", "sale"), orderBy("time", "desc"), limit(4));
//         const querySnap = await getDocs(q);
//         const listings = [];
//         querySnap.forEach((doc) => {
//           listings.push({
//             id: doc.id,
//             data: doc.data()
//           });
//         });
//         setsalelistings(listings);
//       } catch (error) {
//         console.error("Error fetching sale listings:", error);
//       }
//     }
//     fetchListings();
//   }, []);

//   return (
//     <div>
//       <Slider />

//       <div className="max-w-6xl mx-auto pt-4 space-y-6">
//         {offerlisting && offerlisting.length > 0 && (
//           <div className="m-2 mb-6">
//             <h2 className="px-3 text-2xl mt-6">Recent Offers</h2>
//             <Link to="/offers">
//               <p className="text-blue-600 hover:text-blue-800 px-3 text-sm">Show more offers</p>
//             </Link>
//             <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {offerlisting.slice(1).map((listings, index) => {
//                 if (index === 0) {
//                   return (
//                     <>
//                       <ListingItem key={`${listings.id}-1`} id={listings.id} lisitngs={listings.data} />
//                       <ListingItem key={`${listings.id}-2`} id={listings.id} lisitngs={listings.data} />
//                     </>
//                   );
//                 } else {
//                   return <ListingItem key={listings.id} id={listings.id} lisitngs={listings.data} />;
//                 }
//               })}
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="max-w-6xl mx-auto pt-4 space-y-6">
//         {rentlisting && rentlisting.length > 0 && (
//           <div className="m-2 mb-6">
//             <h2 className="px-3 text-2xl mt-6">Places for Rent</h2>
//             <Link to="/category/rent">
//               <p className="text-blue-600 hover:text-blue-800 px-3 text-sm">Show more places for rent</p>
//             </Link>
//             <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {rentlisting.slice(1).map((listings, index) => {
//                 if (index === 0) {
//                   return (
//                     <>
//                       <ListingItem key={`${listings.id}-1`} id={listings.id} lisitngs={listings.data} />
//                       <ListingItem key={`${listings.id}-2`} id={listings.id} lisitngs={listings.data} />
//                     </>
//                   );
//                 } else {
//                   return <ListingItem key={listings.id} id={listings.id} lisitngs={listings.data} />;
//                 }
//               })}
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="max-w-6xl mx-auto pt-4 space-y-6">
//         {salelisting && salelisting.length > 0 && (
//           <div className="m-2 mb-6">
//             <h2 className="px-3 text-2xl mt-6">Places for Sale</h2>
//             <Link to="/category/sale">
//               <p className="text-blue-600 hover:text-blue-800 px-3 text-sm">Show more places for sale</p>
//             </Link>
//             <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//               {salelisting.slice(1).map((listings, index) => {
//                 if (index === 0) {
//                   return (
//                     <>
//                       <ListingItem key={`${listings.id}-1`} id={listings.id} lisitngs={listings.data} />
//                       <ListingItem key={`${listings.id}-2`} id={listings.id} lisitngs={listings.data} />
//                     </>
//                   );
//                 } else {
//                   return <ListingItem key={listings.id} id={listings.id} lisitngs={listings.data} />;
//                 }
//               })}
//             </ul>
//           </div>
//         )}
//       </div>
//       <div className="max-w-6xl mx-auto pt-4 space-y-6">
//         <div className="bg-gradient-to-r from-white via-gray-200 to-gray-300 text-black shadow-2xl rounded-lg p-8 mx-4 relative overflow-hidden">
//           <h2 className="text-3xl font-extrabold mb-6 relative z-10">What Our Clients Say</h2>
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-full h-full border-2 border-gray-300 border-opacity-50 rounded-full"></div>
//           </div>
//           <div className="relative space-y-6 max-h-96 overflow-auto">
//             {/* Testimonial Card 1 */}
//             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
//               <p className="text-lg font-semibold">“The service was excellent! Highly recommended.”</p>
//               <p className="text-gray-700 mt-2">- John Doe</p>
//             </div>
//             {/* Testimonial Card 2 */}
//             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
//               <p className="text-lg font-semibold">“A fantastic experience from start to finish.”</p>
//               <p className="text-gray-700 mt-2">- Jane Smith</p>
//             </div>
//             {/* Testimonial Card 3 */}
//             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
//               <p className="text-lg font-semibold">“Professional and attentive service.”</p>
//               <p className="text-gray-700 mt-2">- Emily Johnson</p>
//             </div>
//             {/* Testimonial Card 4 */}
//             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
//               <p className="text-lg font-semibold">“I’m impressed with the results and support.”</p>
//               <p className="text-gray-700 mt-2">- Michael Brown</p>
//             </div>
//             {/* Testimonial Card 5 */}
//             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
//               <p className="text-lg font-semibold">“Great experience and value for money.”</p>
//               <p className="text-gray-700 mt-2">- Sarah Davis</p>
//             </div>
//           </div>
//           <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-gray-300 to-transparent rounded-b-lg"></div>
//         </div>
//       </div>

//       <br />
//       <br />


      
      
//       <Footer />
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Footer from "../components/Footer";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import ListingItem from "./ListingItem";
import QueryFormPopup from "../components/QueryFormPopup"; // Import the new component

export default function Home() {
  const [offerlisting, setofferlistings] = useState([]);
  const [rentlisting, setrentlistings] = useState([]);
  const [salelisting, setsalelistings] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    async function fetchListings() {
      try {
        const docRef = collection(db, "listings");
        const q = query(docRef, where("offer", "==", true), orderBy("time", "desc"), limit(4));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          listings.push({
            id: doc.id,
            data: doc.data()
          });
        });
        setofferlistings(listings);
      } catch (error) {
        console.error("Error fetching offer listings:", error);
      }
    }
    fetchListings();
  }, []);

  useEffect(() => {
    async function fetchListings() {
      try {
        const docRef = collection(db, "listings");
        const q = query(docRef, where("type", "==", "rent"), orderBy("time", "desc"), limit(4));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          listings.push({
            id: doc.id,
            data: doc.data()
          });
        });
        setrentlistings(listings);
      } catch (error) {
        console.error("Error fetching rent listings:", error);
      }
    }
    fetchListings();
  }, []);

  useEffect(() => {
    async function fetchListings() {
      try {
        const docRef = collection(db, "listings");
        const q = query(docRef, where("type", "==", "sale"), orderBy("time", "desc"), limit(4));
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          listings.push({
            id: doc.id,
            data: doc.data()
          });
        });
        setsalelistings(listings);
      } catch (error) {
        console.error("Error fetching sale listings:", error);
      }
    }
    fetchListings();
  }, []);

  return (
    <div>
      <Slider />

      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {rentlisting && rentlisting.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6">Places for Rent</h2>
            <Link to="/category/rent">
              <p className="text-blue-600 hover:text-blue-800 px-3 text-sm">Show more places for rent</p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rentlisting.slice(1).map((listings, index) => {
                if (index === 2) {
                  return (
                    <>
                      <ListingItem key={`${listings.id}-1`} id={listings.id} lisitngs={listings.data} />
                      <ListingItem key={`${listings.id}-2`} id={listings.id} lisitngs={listings.data} />
                    </>
                  );
                } else {
                  return <ListingItem key={listings.id} id={listings.id} lisitngs={listings.data} />;
                }
              })}
            </ul>
          </div>
        )}
      </div>



      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {offerlisting && offerlisting.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6">Recent Offers</h2>
            <Link to="/offers">
              <p className="text-blue-600 hover:text-blue-800 px-3 text-sm">Show more offers</p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {offerlisting.slice(1).map((listings, index) => {
                if (index === 1) {
                  return (
                    <>
                      <ListingItem key={`${listings.id}-1`} id={listings.id} lisitngs={listings.data} />
                      <ListingItem key={`${listings.id}-2`} id={listings.id} lisitngs={listings.data} />
                    </>
                  );
                } else {
                  return <ListingItem key={listings.id} id={listings.id} lisitngs={listings.data} />;
                }
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        {salelisting && salelisting.length > 0 && (
          <div className="m-2 mb-6">
            <h2 className="px-3 text-2xl mt-6">Places for Sale</h2>
            <Link to="/category/sale">
              <p className="text-blue-600 hover:text-blue-800 px-3 text-sm">Show more places for sale</p>
            </Link>
            <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {salelisting.slice(1).map((listings, index) => {
                if (index === 0) {
                  return (
                    <>
                      <ListingItem key={`${listings.id}-1`} id={listings.id} lisitngs={listings.data} />
                      <ListingItem key={`${listings.id}-2`} id={listings.id} lisitngs={listings.data} />
                    </>
                  );
                } else {
                  return <ListingItem key={listings.id} id={listings.id} lisitngs={listings.data} />;
                }
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto pt-4 space-y-6">
        <div className="bg-gradient-to-r from-white via-gray-200 to-gray-300 text-black shadow-2xl rounded-lg p-8 mx-4 relative overflow-hidden">
          <h2 className="text-3xl font-extrabold mb-6 relative z-10">What Our Clients Say</h2>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full border-2 border-gray-300 border-opacity-50 rounded-full"></div>
          </div>
          <div className="relative space-y-6 max-h-96 overflow-auto">
            {/* Testimonial Cards */}
            <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
               <p className="text-lg font-semibold">“The service was excellent! Highly recommended.”</p>
               <p className="text-gray-700 mt-2">- John Doe</p>
             </div>
{/* Testimonial Card 2 */}
             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
               <p className="text-lg font-semibold">“A fantastic experience from start to finish.”</p>
               <p className="text-gray-700 mt-2">- Jane Smith</p>
             </div>
             {/* Testimonial Card 3 */}
             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
               <p className="text-lg font-semibold">“Professional and attentive service.”</p>
               <p className="text-gray-700 mt-2">- Emily Johnson</p>
             </div>
             {/* Testimonial Card 4 */}
             <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
<p className="text-lg font-semibold">“I’m impressed with the results and support.”</p>
             <p className="text-gray-700 mt-2">- Michael Brown</p>
           </div>
           {/* Testimonial Card 5 */}
            <div className="bg-white text-gray-900 rounded-3xl p-6 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl relative z-10">
              <p className="text-lg font-semibold">“Great experience and value for money.”</p>
              <p className="text-gray-700 mt-2">- Sarah Davis</p>
             </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-gray-300 to-transparent rounded-b-lg"></div>
        </div>
      </div>
<br></br>
<div className="max-w-6xl mx-auto pt-4">
  <button
    onClick={() => setIsPopupOpen(true)}
    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center ml-4"
  >
    <svg
      className="w-5 h-5 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
    Open Query Form
  </button>
</div>

      <QueryFormPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <br></br>
      <Footer />
    </div>
  );
}
