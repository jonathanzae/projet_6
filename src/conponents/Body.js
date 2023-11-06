import "./styles/Body.css";
import background from "./assets/Background.png";
import Logements from "../logements.json";

function Body() {
  console.log(Logements);
  // const numbers = [1,2,3,4,5,6];

  const logement = [Logements.pictures];

  console.log(logement);
  return (
    <div className="divBody">
      <div className="section1">
        <img
          src={background}
          alt="Bord de mer rocheu"
          className="backgroundSection1"
        />
        <h2 className="titleBackground" >Chez vous, partout et ailleurs</h2>
      </div>
      {/* <ul>
            {
                numbers.map((number) => {
                   return <li>{number}</li>
                })
            }
        </ul> */}
      <div className="gallery">
        <div className="cards">
          {Logements.map((logement) => {
            return (
              <div className="card" key={logement.id}>
                <img src={logement.cover} alt="img" className="imgGallery" />
                <p className="titleImg">{logement.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

console.log(Logements);

export default Body;

// function Json() {

// }

// export default Json;
