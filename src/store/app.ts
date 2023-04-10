// Utilities
import { defineStore } from 'pinia'

export enum ACTION_STATE {
  LOADING = -1,
  ANYONE,
  PRIVATE,
  CLOSED
}

export const useAppStore = defineStore('app', {
  state: () => ({
    state: {
      state: ACTION_STATE.LOADING
    },
    user: {
      authorized: false,
      privileged: false
    }
  }),
  getters: {
    isAuthenticated: (state) => state.user.authorized,
  },
  actions: {
    setState (data: { state: { state: number }, user: { authorized: boolean, privileged: boolean } }) {
      this.state.state = data.state.state
      this.user.authorized = data.user.authorized
      this.user.privileged = data.user.privileged
    },
    logout () {
      this.state.state = ACTION_STATE.LOADING
      this.user.authorized = false
      this.user.privileged = false
    }
  },
})
