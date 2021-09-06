// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getCountriesByQuery } from "../../actions";

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setQuery((query) => (query = e.target.value));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTimeout(push("/home"), 1000);
//     setTimeout(dispatch(getCountriesByQuery(query)), 1000);
//     setQuery((query) => (query = ""));
//   };

//   return (
//     <div>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <input
//         //   className={style.navbar}
//           type="text"
//           placeholder="Search Country"
//           value={query}
//           onChange={handleChange}
//         />
//         <button type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }
