/* react */
import { useEffect, useState } from "react";

/* components */
import { CharacterCardComponent } from "../";

/* services */
import { getCharacters } from "../../services/getCharacters";


export const CharactersListComponent = () => {

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
      .then((data) => {
        console.log(data);
        setCharacter(data?.results)
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false))
  }, [])

  if ( loading ) return <div>Cargando...</div>


  return (
    <ul>
      {
        character.map((item) => (
          <CharacterCardComponent
            key={ item.id }
            { ...item }
          />
        ))
      }
    </ul>
  )
}
