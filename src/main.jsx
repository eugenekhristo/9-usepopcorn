/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import './styles.css';
import App from './App.jsx';
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setMovieRating] = useState(4);

//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         size={32}
//         color={'#6495ED'}
//         defaultValue={movieRating}
//         onSetRating={setMovieRating}
//       />
//       <p>
//         The movie was rated <b>{movieRating}</b> stars!
//       </p>
//     </div>
//   );
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Average', 'Okay', 'Wonderful']}
    />

    <Test /> */}
  </StrictMode>
);
