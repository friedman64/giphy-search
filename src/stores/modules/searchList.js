import * as types from '../mutation-types'
import axios from 'axios'

const state = {
    gifs: [],
    api_key: 'nvBcrs9kRgPru5MQqBvs9WNfnIL2L4tp'
}

const getters = {
    getGifs: state => {
        return state.gifs
    }
}

const mutations = {
    [types.FETCH_GIFS](state, { gifsList }) {
        state.gifs = gifsList;
        console.log(state.gifs.data);
    }
}

const actions = {
    fetchGifs({commit}, { search }) {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${state.api_key}`)
            .then(data => {
                const gifsList = data.data.data;
                commit('FETCH_GIFS', {gifsList})
            })
            .catch(err => console.log(err))
    }
}

export default  {
    state,
    getters,
    mutations,
    actions
}