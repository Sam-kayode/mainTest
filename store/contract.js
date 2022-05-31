export const state = () => ({
  contractDetails: {
    contract_name: '',
    contract_amount: (value) => {
      return value * 1
    },
    currency: '',
    deadline: 0,
    description: '',
    collaborator: [
      {
        default_role: '',
        email: '',
      },
    ],
  },
  contracts: [],
})

export const mutations = {
  setContract(state, payload) {
    state.contractDetails = { ...state.contractDetails, ...payload }
  },
  setContracts(state, payload) {
    state.contracts = [...payload]
    console.log(state.contracts)
  },
}

export const actions = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createContract({ dispatch }, data) {
    await this.$axios.$post('/contract/create', data)
  },
  async getContracts({ commit }) {
    const res = await this.$axios.$get('/contract')
    const contracts = res.data
    commit('setContracts', contracts)
  },
}

export const getters = {}
