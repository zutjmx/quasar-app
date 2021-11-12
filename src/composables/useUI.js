import { computed } from 'vue'
import { useStore } from 'vuex'

const useUI = () => {
    const store = useStore()

    return {
        //sideMenuOpen: computed(() => store.getters['ui/getSideMenuOpen']),
        sideMenuOpen: computed({
          get() {
            return store.getters['ui/getSideMenuOpen']
          },
          set(val) {
            store.commit('ui/toggleSideMenu')
          }
        }),
        toggleSideMenu() {
          store.commit('ui/toggleSideMenu')
        },
    }
}

export default useUI
