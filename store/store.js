import { reactive } from 'vue'

export const store = reactive({
    backUrl: '~/public/img/background.png',
    changeUrl(url) {
        this.backUrl = url
    }
})