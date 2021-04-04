<template>
  <label class="input__file-button">
    <span class="input__file-button-text" v-if="seen">Перетащите сюда файл<br>или нажмите чтобы выбрать</span>
    <span class="input__file-button-text" v-else-if="isErrorFileSize & isErrorExtension">Файл "{{fileName}}" - импортирован</span>
    <span class="input__file-button-text" v-else-if="isErrorExtension === false & seen === false">Недопустимый тип файла "{{fileExtension}}", выберите другой<br>файл</span>
    <span class="input__file-button-text" v-else-if="isErrorFileSize === false & seen === false">Допустимый размер файла 10Мб, выберите другой<br>файл</span>
  </label>
</template>

<script>
export default {
  props: ["isErrorFileSize", "isErrorExtension", "fileName", "fileExtension", "seen"],
  name: "ButtonComponent"
}
</script>

<style scoped>

</style>