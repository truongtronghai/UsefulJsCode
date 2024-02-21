// a convention vuex in nuxt 2+ js
/*
* Example: Vuex store in Nuxt is like this: /store/tolona.js
*
* Dispatch action:
*  if ($store.state.tolona.products.length === 0)
*    $store.dispatch('tolona/fetchProducts')
*
* Call getters:
*  const checkValueExited = (val) => {
*   return $store.getters['tolona/existedInProducts'](val)
*  }
*/
import { listSearchResult } from '@/services/provider'
export const state = () => ({
    products: []
})

export const mutations = {
    updateProducts(state, payload) {
        state.products = payload
    }
}

export const getters = {
    existedInProducts: (state) => (itemId) =>
        state.products.some((element) => element.id === itemId)
}

export const actions = {
    fetchProducts({ commit }) {
        listSearchResult({ dashboard_id: 511 })
            .then((resp) => {
                commit('updateProducts', resp.rows)
            })
            .catch((err) => {
                throw err
            })
    }
}
