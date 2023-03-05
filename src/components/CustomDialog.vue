<template>
    <dialog ref="customDialog">
        <slot></slot>
        <button @click="closeDialog">Close</button>
    </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const customDialog = ref<HTMLDialogElement | null>(null)

function showDialog() {
    customDialog.value!.showModal()
}

function closeDialog() {
    customDialog.value!.close()
}

defineExpose({
    showDialog
})
</script>