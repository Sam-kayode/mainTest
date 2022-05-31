<template>
  <div class="text-center upload-container">
    <h1 v-if="show" class="upload">Upload Contract</h1>
    <p class="kindly">
      Kindly upload your contract or use <a> contract sample</a>
    </p>

    <div class="drag-container" @dragover.prevent @drop.prevent>
      <input
        ref="fileInput"
        class="fileInput"
        type="file"
        multiple
        @change="uploadFile"
      />
      <div
        class="d-flex flex-column justify-content-center mx-auto dash-border"
        :class="isDash ? 'dashed' : 'undashed'"
        @drop="dragFile"
      >
        <p class="drag text-center m-0 ">
          <span class="d-none d-lg-inline-block"
            >Drag and drop file here or</span
          >
          <span class="browse" @click="$refs.fileInput.click()"> Browse</span>
        </p>
        <p class="supported text-center mb-3">
          Supported format : pdf, doc or docx
        </p>
        <div v-if="File.length">
          <div class="files">
            <div v-for="file in File" :key="file" class="file">
              {{ file.name }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="show" class="d-flex justify-content-center mt-5">
      <BlueButton
        class="previous pr-1"
        :outlined="true"
        :button-content="'Previous'"
        @click.native=";[nextForm('BasicInfo'), $emit('nextView', 1)]"
      />
      <BlueButton
        class="next pl-1"
        :button-content="'Continue'"
        @click.native=";[nextForm('PaymentMethod'), $emit('nextView', 3)]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'UploadContract',
  props: {
    show: {
      default: true,
      type: Boolean,
    },
  },
  data() {
    return {
      File: [],
      isDash: false as boolean,
    }
  },
  methods: {
    nextForm(value: string) {
      this.$emit('nextForm', value)
    },
    uploadFile(e: any) {
      this.isDash = true
      this.File = e.target.files
    },
    dragFile(e: any) {
      this.isDash = true
      this.File = e.dataTransfer.files
    },
  },
})
</script>

<style lang="scss" scoped>
.upload-container {
  .upload {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
  }

  .kindly {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(4, 4, 3, 0.7);

    a {
      color: $primary-color;
      text-decoration: underline;
    }
  }

  .drag {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: $dark-text;
  }

  .supported {
    font-family: Sofia Pro, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
    color: rgba(4, 4, 3, 0.7);
  }
  .previous,
  .next {
    width: 180px;
  }

  .drag-container {
    margin: 47px 0 77px 0;
    position: relative;
    padding: 4px 5px;
  }

  .dash-border {
    position: relative;
  }

  .fileInput {
    display: none;
  }

  .undashed {
    border: 0.5px dashed #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    max-width: 646px;
    height: 190px;
  }
  .dashed {
    background: #f9f8ff;
    border: 0.5px dashed $primary-color;
    box-sizing: border-box;
    border-radius: 7px;
    max-width: 646px;
    height: 190px;
  }
}
.files {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  position: absolute;
}

.file {
  padding: 10px 10px;
  overflow: hidden !important;
  background: $primary-color;
  border-radius: 23px;
  color: $light;
  margin: 0 5px 5px 10px;
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  line-height: 14px;
  height: 40px;

  p {
    width: 90% !important;
    height: 90%;
    overflow: hidden !important;
  }
}
.browse {
  font-weight: 500;
  color: $primary-color;
  text-decoration: underline;
  cursor: pointer;
  font-family: Sofia Pro, sans-serif;
}

@include lg-tablet {
  .drag-container {
    margin: 0 !important;
  }
}
</style>
