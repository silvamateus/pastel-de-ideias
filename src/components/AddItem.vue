<template>
 <div class="wrapper">
  <div class="block">
      <div class="block_header">
        <p>Monte aqui o seu cardápio. O que está esperando?</p>
      </div>
      <form class="block_form" v-on:submit.prevent >
        <div class="form_header">
          <input v-model="title" type="text" placeholder="Título do pedido"/>
          <input v-model="taste" type="text" placeholder="Sabor"/>
          <input v-model="value" type="text" placeholder="R$"/>
        </div>
        <textarea placeholder="Descrição" class="block_form_input--size-big"/>
        <label class="block_form_file block_form_input--size-big" for="img-upload">
          <i class="far fa-image image-upload"></i>
          <p>Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta</p>
        </label>
        <input type="file" id="img-upload" accept="image/*" @change="uploadImage($event)"/>
        <div class="block_form_buttons">
          <button class="clear">LIMPAR</button>
          <button class="register" @click="onCLick(title, taste, value)" >CADASTRAR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addItem',

    methods: {
      onCLick(title, taste, value) {
        this.$store.commit('addFood', {title, taste, value})
      },
      uploadImage(event) {
        const image = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = ev => {
          alert(ev.target.result)
          // this.image = e.target.files[0]
  }
      }
    },
    data() {
      return{
        title: '',
        taste: '',
        value: '',
        image: {}
      }
    }
  }
</script>
