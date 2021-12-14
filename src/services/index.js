import axios from  'axios';

const getQuestions = async (quantity) => {
  const questions = await axios.get(`https://opentdb.com/api.php?amount=${quantity}`)
    .then((data) => data.data.results)

    .catch(()=> {

    })
    return questions;
}

export default getQuestions;
