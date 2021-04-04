<template>
  <app-import v-bind:maxSize="maxSize"></app-import>
</template>

<script>
import Import from "@/components/Import";

const MAX_FILE_SIZE = 10000000;

export default {
  name: "Main",
  components: {
    appImport: Import
  },
  data () {
    return {
      maxSize: MAX_FILE_SIZE,
    }
  }
}
</script>

<style>
.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input__file {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0;
}

.input__file-button-text {
  line-height: 1;
  top: 20px;
  font-weight: 300;
  font-family: Arial;
  font-size: 15px;
  color: gray;
  display: inline-block;
  width: 100%;
}

.input__file-button {
  width: 100%;
  height: 60px;
  background: #c9f3f5;
  font-weight: 300;
  font-family: Arial;
  font-size: 15px;
  color: gray;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 auto;
}
table {
  margin: auto;
  width: 50%;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 14px;
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
}
 td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
td {
  padding: 10px 20px;
  background: #F8E391;
}
tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}
tr td:last-child {
  border-right: none;
}
</style>