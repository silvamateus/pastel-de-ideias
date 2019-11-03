<template>
  <div class="items">
    <p class="items_lines"><span>Veja como será apresentado ao cliente</span></p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.items {
  position: relative;
  width: 100%;
}
.items_lines {
  position: relative;
  line-height: 0.5;
  text-align: center;
  color: #A03400;
  font-weight: bold;
  font-style: italic;
  font-size: 29px;
}
.items_lines span {
  display: inline-block;
  position: relative;
}
.items_lines span::before, .items_lines span::after {
  content: "";
  position: absolute;
  height: 5px;
  border-bottom: 1px solid #E43636;
  top: 0;
  width:100%;
}
.items_lines span::before {
  right: 100%;
  margin-right: 5rem;
}
.items_lines span::after {
  left: 100%;
  margin-left: 5rem;
}

</style>