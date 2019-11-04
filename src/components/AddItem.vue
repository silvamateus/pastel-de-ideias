<template>
 <div class="wrapper">
  <div class="block">
      <div class="block_header">
        <p>Monte aqui o seu cardápio. O que está esperando?</p>
        <div class="toogle-type">
          <input type="checkbox" id="toogle" class="checkbox" v-model="isChecked"/>
          <label for="toogle" class="switch"/>
        </div>
      </div>
      <form class="block_form" v-on:submit.prevent="onSubmit" >
        <div class="form_header">
          <input v-model="title" type="text" pattern=".{3,60}" placeholder="Título do pedido" required/>
          <input v-model="flavor" type="text" pattern=".{3,60}" placeholder="Sabor" required/>
          <input v-model="value" type="number" placeholder="R$" required/>
        </div>
        <textarea v-model="description" placeholder="Descrição" class="block_form_input--size-big"/>
        <label class="block_form_file block_form_input--size-big" for="img-upload">
          <i class="far fa-image image-upload"></i>
          <p>Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta</p>
        </label>
        <input type="file" id="img-upload" accept="image/jpg, image/png" @change="uploadImage($event)"/>
        <div class="block_form_buttons">
          <button class="clear" @click="onClear()">LIMPAR</button>
          <button class="register" type="submit">CADASTRAR</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import pastelzinhoDefault from '../assets/pastelzinho.png'
  import suquinhoDefault from '../assets/suquinho.png'
  export default {
    name: 'addItem',

    methods: {
      onSubmit() {
        const {title, flavor, value, description, consumable} = this
        const defaultImage = consumable === 'Food'? pastelzinhoDefault : suquinhoDefault
        const image = this.image? this.image : defaultImage
        this.$store.commit(`add${consumable}`, {title, flavor, value, description, image})
      },
      onClear(){
        this.title=''
        this.flavor=''
        this.description = ''
        this.value=''
        this.image=''
      },
      uploadImage(event) {
        const image = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = ev => {
          this.image = ev.target.files[0]
        }
      }
    },
    watch: {
      isChecked(val) {
        this.consumable =  val? 'Drink' : 'Food'
        this.$store.commit('whichConsumable', this.consumable)
      }
    },
    data() {
      return{
        title: '',
        flavor: '',
        description: '',
        value: '',
        image: '',
        isChecked: false,
        consumable: 'Food'
      }
    }
  }
</script>

<style lang="css" scoped>
input, textarea {
  border-radius: .5rem;
}
.block, .block_form_file {
  border-radius: 1rem;
}
input[type='file'] {
  display: none
}
.image-upload {
  font-size: 4.5rem;
  color: #E43636;
}
.wrapper {
  position: relative;
  width: 100%;
  max-width: 1180px;
}
.wrapper::before {
  position: absolute;
  background-image: url('../assets/pasteis-img.png');
  width: 393px;
  height: 316px;
  top: -150px;
  left: 800px;
  content: '';
}
.wrapper::after {
  position: absolute;
  background-image: url('../assets/pastel-paralax.png');
  top: -350px;
  left: -330px;
  width: 555px;
  height: 555px;
  content: '';
}
.block {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 30px #740B0B45;
}


.block_header {
  background-color: #FFCA00;
  width: auto;
  padding: .5rem 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  color: #A03400;
  font-size: 24px;
  font-weight: bolder;
  font-style: italic;
}
.block_header > p {
  padding-left: 3.5rem;
}
.block_header .switch {
  margin-right: 1rem;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 12px;
  background-color: #FFFFFF;
  border-radius: 50px;
  z-index: 5;
  cursor: pointer;
}
.checkbox {
  display: none;
}
.switch::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #E43636;
  top: -3px;
  left: 0;
  transition: all 0.3s;
  cursor: pointer;
}

.checkbox:checked +.switch::after {
  transform: translateX(25px);
}
.toogle-type{
  margin-right: 2.5rem;
}
.toogle-type::before, .toogle-type::after {
  position: relative;
  color: #A03400;
  font-size: 16px;
  font-style: normal;
}
.toogle-type::before{
  content: 'Comida';
  padding-right: 1rem;
}
.toogle-type::after {
  content: 'Bebida';
  
}
.block_form {
  position: relative;
  width: 100%;
  padding: 2rem;
  margin-top: -3.3rem;
  display: flex;
  flex-direction: column;
}

.form_header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
input, textarea, .block_form_file {
  width: 33%;
  border: 1px solid #E43636;
  padding: .5rem;
  margin-bottom: 1rem;
  color: #a03400;
}
.form_header input {
  width: 39%;
}
.form_header input:nth-child(3) {
  width: 20%;
}
.block_form_input--size-big {
  width: 100%;
  height: 5rem;
  resize: none;
}
.block_form_file {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: auto;
  cursor: pointer;
}
.block_form_buttons {
  display: flex;
  justify-content: center;
  margin-bottom: -3.5rem;
}

.block_form_buttons button {
  border: 0;
  padding: 1rem;
  width: 200px;
  border-radius: 1.5rem;
}

.clear, .register {
  color: #FFFFFF;
  font-weight: bolder;
}

.clear {
  background-color: #E43636;
  margin-right: 1rem;
}
.register {
  background-color: #FFCA00;
  color: #A03400;
  margin-left: 1rem;
}
</style>