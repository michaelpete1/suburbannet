import { reactive } from 'vue'

const storageKey = 'suburban-request-step1'

const loadInitialData = () => {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.sessionStorage.getItem(storageKey)
    return raw ? JSON.parse(raw) : null
  } catch (error) {
    console.warn('Unable to load request form data from storage:', error)
    return null
  }
}

const state = reactive({
  step1Data: loadInitialData(),
})

const persist = (data) => {
  if (typeof window === 'undefined') return
  try {
    if (data) {
      window.sessionStorage.setItem(storageKey, JSON.stringify(data))
    } else {
      window.sessionStorage.removeItem(storageKey)
    }
  } catch (error) {
    console.warn('Unable to persist request form data:', error)
  }
}

export const useRequestFormStore = () => {
  const setStep1Data = (payload) => {
    state.step1Data = payload
    persist(payload)
  }

  const clearStep1Data = () => {
    state.step1Data = null
    persist(null)
  }

  return {
    state,
    setStep1Data,
    clearStep1Data,
  }
}
