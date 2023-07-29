const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const {id}= req.params;
  //const id = parseInt(req.params.id);

  axios(`${URL_BASE}${id}`)
  .then(({data}) => {
    const {id, status, name, species, origin, image, gender } = data;

    const character = { id, status, name, species, origin, image, gender };
    console.log("IDDDD", character);

    return character.name?res.status(200).json(character):res.status(404).send("Not Found");})
  .catch((error)=>{
    res.status(500).json ({error:error.message})
  })
};

module.exports = getCharById;
