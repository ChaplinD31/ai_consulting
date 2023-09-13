<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ useScope: 'global' });
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})
let emit = defineEmits(['closeDialog']);


const closeDialog = () => {
    emit('closeDialog');
}
</script>

<template>
    <div class="dialog" v-if="props.show">
        <div class="dialog_content">
            <slot>
                <div class="container">
                    <h4>{{ $t('reloadPage.message') }}</h4>
                    <button class="btn btn-primary" @click="closeDialog">{{ $t('reloadPage.button') }}</button>
                </div>
            </slot>
        </div>
    </div>
</template>

<style scoped>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
}

.dialog_content {
    margin: auto;
    background: rgba(255, 255, 255, 1);
    border: 2px solid #5c636a;
    border-radius: 5px;
    padding: 20px;
    min-height: 150px;
    min-width: 200px;
    margin: auto;
}
h4{
    text-align: center;
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 150px;
    min-width: 200px;
}
</style>