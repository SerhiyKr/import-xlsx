<template>
  <div>
    <div class="input__wrapper">
      <input type="file" id="files" ref="files" class="input input__file" v-on:change="handleFilesUpload"/>
      <app-button
          v-bind:isErrorFileSize="isErrorFileSize"
          v-bind:isErrorExtension="isErrorExtension"
          v-bind:fileName="fileName"
          v-bind:fileExtension="fileExtension"
          v-bind:seen="seen"
      ></app-button>
    </div>
    <div class="table"></div>
  </div>
</template>

<script>
import {utils, read, write} from 'xlsx';
import {importXLSData} from '../api/import-data.api';
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "Import",
  props: ["maxSize"],
  components: {
    appButton: ButtonComponent
  },
  data() {
    return {
      validFileExtensions: [".xls", ".xlsx"],
      htmlString: String,
      fileName: String,
      fileExtension: String,
      seen: true,
      isErrorFileSize: false,
      isErrorExtension: false,
    }
  },
  methods: {
    handleFilesUpload(event) {
      const uploadedFile = event.currentTarget.files[0];
      this.fileName = uploadedFile.name;
      const indexOfNameExtensionSeparator = this.fileName.lastIndexOf('.')
      this.fileExtension = this.fileName.substring(indexOfNameExtensionSeparator);
      const fileSize = uploadedFile.size;

      for (const ext of this.validFileExtensions) {

        if (this.fileExtension === ext) {
          this.isErrorExtension = true;
          this.seen = false;

          if (fileSize <= this.maxSize) {
            this.isErrorFileSize = true;
            let reader = new FileReader();

            reader.onload = function (e) {
              let arrayBuffer = e.target.result;
              let data = new Uint8Array(arrayBuffer);
              let workbook = read(data, {
                type: "array"
              });

              let first_sheet_name = workbook.SheetNames[0];
              let worksheet = workbook.Sheets[first_sheet_name];
              let json = utils.sheet_to_json(worksheet);

              console.log(json);
              console.log(this.isErrorExtension, this.isErrorFileSize);

              importXLSData(json)
                  .then(res => console.log("Res: ", res))
                  .catch(err => console.log("Err: ", err));

              this.htmlString = write(workbook, {sheet: "Sheet1", type: "binary", bookType: "html"});
              document.querySelector(".table").innerHTML += this.htmlString;
            }
            reader.readAsArrayBuffer(uploadedFile);
            break;
          }
          else {
            this.isErrorFileSize = false;
            this.seen = false;
            break;
          }
        }
        else {
          this.isErrorExtension = false;
          this.seen = false;
        }
      }
    },
  }
}
</script>

<style scoped>

</style>