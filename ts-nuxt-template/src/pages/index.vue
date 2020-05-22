<template>
    <div>index</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'nuxt-property-decorator'

@Component({
    head () {
        return {
            title: 'index'
        }
    }
})
export default class PageIndex extends Vue {
    //
}
</script>
