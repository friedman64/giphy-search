import * as types from '../mutation-types'
import axios from 'axios'

const state = {
    gifs: [],
    gif:[],
    gif404: [],
    api_key: 'fDCFNb09isTtbm2Ipjk34D7tfI0w2EAC'
}

const getters = {
    getGifs: state => {
        return state.gifs
    },
    getGifInfo: state => {
        return state.gif
    },
    getRand404: state => {
        return state.gif404
    }
}

const mutations = {
    [types.FETCH_GIFS](state, { gifsList }) {
        state.gifs = gifsList;
    },
    [types.FETCH_GIF](state, { gifInfo }) {
        state.gif = gifInfo;
    },
    [types.FETCH_404](state, { gif404 }) {
        state.gif404 = gif404;
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
    },
    fetchGifInfo({commit}, {id}) {
        axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=${state.api_key}`)
            .then(data => {
                const gifInfo = data.data.data;
                commit('FETCH_GIF', {gifInfo})
            })
            .catch(err => console.log(err));
    },
    fetchRandomGifs({commit}) {
        let randOffset;
        function randOff(){randOffset = Math.floor(Math.random() * (3000 - 1 + 1)) + 1};
        randOff();
        axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${state.api_key}&offset=${randOffset}&limit=12`)
            .then(data => {
                const gifsList = data.data.data;
                commit('FETCH_GIFS', {gifsList})
            })
            .catch(err => console.log(err));
    },
    fetchRandom404({commit}) {

        axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${state.api_key}&tag=404`)
            .then(data => {
                const gif404 = data.data.data;
                commit('FETCH_404', {gif404})
            })
            .catch(err => console.log(err));
    }
}

export default  {
    state,
    getters,
    mutations,
    actions
}