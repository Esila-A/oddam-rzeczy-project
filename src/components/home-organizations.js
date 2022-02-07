import { useState, useEffect } from "react";
import decoration from "../assets/Decoration.svg";
import { db } from "../firebase"
import { collection, getDocs } from "firebase/firestore";


const HomeOrganizations = () => {

  const data = {
    foundations: {
      descriptionName: "Fundacji",
      dbName: "foundations"
    },
    ngos: {
      descriptionName: "Organizacji Pozarządowych",
      dbName: "NGOs"
    },
    locals: {
      descriptionName: "Lokalnych Zbiórek",
      dbName: "local"
    },
  };

  async function getFoundations(name) {
    const colRef = collection(db, data[name].dbName);

    const snapshot = await getDocs(colRef)
  
    let elements = []
    snapshot.docs.forEach((element) => {
      elements.push({...element.data(), id: element.id})
    })

    return elements
  }

    const [elements, setElements] = useState(undefined);
    let [organizations, setOrganizations] = useState("foundations");
    const [page, setPage] = useState(0)
  
    useEffect(async () => {
      let a = await getFoundations(organizations)
      setElements(a)
    }, [organizations])

    if (!elements ) return <h1>Ładowanie</h1>

  return (
    <div className="organizations" id="#home-organizations">
      <h1 className="organizations_heading">Komu pomagamy?</h1>
      <img src={decoration} alt="decoration" className="organizations_decoration"/>
      <div className="organizations_buttons">
        <button className="organizations_buttons--button-one" onClick={() => setOrganizations("foundations")}>Fundacjom</button>
        <button className="organizations_buttons--button"  onClick={() => setOrganizations("ngos")}>Organizacjom<br/>pozarządowym</button>
        <button className="organizations_buttons--button" onClick={() => setOrganizations("locals")}>Lokalnym<br/>zbiórkom</button>
      </div>
      <div>
      <p className="organizations_paragraph">W naszej bazie znajdziesz listę zweryfikowanych {data[organizations].descriptionName}, z<br/>
        którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/>
        komu pomagają i czego potrzebują.</p>
      <ul className="organizations_list">
        {elements.slice(page * 3, page * 3 + 3).map(e => 
          <li key={e.id} className="organizations_list--elements">
            <div className="left-side">
              <div className="title">{e.title}</div>
              <div className="description">{e.description}</div>
            </div>
            <div className="collected">{e.collected}</div>
          </li>)}
      </ul>
      {elements.length > 3 && Array(elements.length / 3)
        .fill()
        .map((e, i) => <span key={i} onClick={() => setPage(i)} className="pag-numbers">{i + 1}</span>)}
    </div>
    </div>
  )
}

export default HomeOrganizations;
