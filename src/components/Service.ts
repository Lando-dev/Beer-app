import axios from 'axios';

export default class ApiService
{
    static products: [];

    static async getAll()
    {
        return await axios.get('https://api.punkapi.com/v2/beers/')
            .then(res => res.data)
            .catch(e => e);
    }

    static async getRandom()
    {
        return await axios.get('https://api.punkapi.com/v2/beers/random')
            .then(res => res.data[0])
            .catch(e => e);
    }

    static async getById(id: number)
    {
        return await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res => res.data[0])
            .catch(e => e);
    }
}