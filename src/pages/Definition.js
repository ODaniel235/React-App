import { useState, useEffect } from "react";
export default function Definition() {
  const [words, setWords] = useState();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
      .then((response) => response.json())
      .then((data) => {
        setWords(data[0].meanings);
        console.log(data[0].meanings);
      });
  }, []);
  
  return(
    <>
      <h1>Here is a definition: </h1>
    </>
  )

}

//https://api.dictionaryapi.dev/app/v2/entries/en/
