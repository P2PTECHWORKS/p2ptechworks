import React from 'react'
import Course from './index'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import C from './c/C';
import Dbms from './dbms/Dbms';
import Ds from './ds/Ds';
import Java from './java/Java';
import Python from './python/Python';

const Courses = () => {
  return (
     <Router>
      <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link to="/Cou">C</Link>
        </li>
        <li>
          <Link to="/Dbms">DBMS</Link>
        </li>
        <li>
          <Link to="/Python">PYTHON</Link>
        </li>
        <li>
          <Link to="/Java">JAVA</Link>
        </li>
        <li>
          <Link to="/Ds">DS</Link>
        </li>
      </ul>
      <hr />
      <Route path="/C" component={C} />
      <Route path="/Dbms" component={Dbms} />
      <Route path="/Python" component={Python} />
      <Route path="/Java" component={Java} />
      <Route path="/Ds" component={Ds} />
    </div>
  </Router>
  )
}

export default Courses;
// import React from 'react';
// import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
// import C from './c/C';
// import Dbms from './dbms/Dbms';
// import Ds from './ds/Ds';
// import Java from './java/Java';
// import Python from './python/Python';

// function Courses() {
//   return (
//     <Router>
//       <div>
//         <h1>Main Page</h1>
//         <ul>
//           <li>
//             <Link to="/C">C</Link>
//           </li>
//           <li>
//             <Link to="/Dbms">DBMS</Link>
//           </li>
//           <li>
//             <Link to="/Python">PYTHON</Link>
//           </li>
//           <li>
//             <Link to="/Java">JAVA</Link>
//           </li>
//           <li>
//             <Link to="/Ds">DS</Link>
//           </li>
//         </ul>
//         <hr />
//         <Route path="/C" component={C} />
//         <Route path="/Dbms" component={Dbms} />
//         <Route path="/Python" component={Python} />
//         <Route path="/Java" component={Java} />
//         <Route path="/Ds" component={Ds} />
//       </div>
//     </Router>
  
//   );
// }

// export default Courses;
