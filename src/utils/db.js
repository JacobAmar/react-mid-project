import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com'

export const getFromDB = async(key) => {
    const {data} = await axios.get(`${url}/${key}`)
    return data
}