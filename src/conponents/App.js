// import logo from './logo.svg';
import './App.css';
import Header from '../conponents/Header.js';
import Body from '../conponents/Body.js';
import Footer from '../conponents/Footer.js';

function Kasa() {
  return (<div className="kasa">
    <Header />
    <Body />
    <Footer />
    </div>
  );
}

export default Kasa;

// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App2() {
//     console.log(Logements);
    
//     return (
//         <div>
//             {/* < Banner title={"Mon Titre"}/> */}
//           {
//             Logements.map((logement) => {
//                 return <p>{logement.title}</p>
//             })
//           }
//         </div>
//     );
    
// }



// export default App2;

