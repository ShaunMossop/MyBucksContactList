<template>
  <div class="main">
    <div class="holder">

      <!--<form @submit.prevent="addContact">-->
      <button id="btnAdd" class="btn" @click="showAdd">Add</button>
      <form id="frmAdd" @submit.prevent="addContact" class="hide">
      <button id=btnSave class="btn">Submit</button>
      <input type="text" placeholder="Enter name.." v-model="name" v-validate="'min:3'" name="name">
      <input type="text" placeholder="Enter number.." v-model="number" v-validate="'min:10'" name="number">
      <input id="inputFile" type="file" @change="onFileSelected" name="image">
      

      <transition name="alert-in">
        <p class="alert" v-if="errors.has('name')">{{ errors.first('name') }}</p>
        <p class="alert" v-if="errors.has('number')">{{ errors.first('number') }}</p>
      </transition>
      </form>

      <ul>
        <transition-group name=list enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
          <li v-for="(data,index) in contacts" :key='index'>
            <img v-if="data.image.length < 50" :src=" require(`@/assets/${data.image}`) " />
            <img v-if="data.image.length > 50" v-bind:src= data.image />
            <span class="data">{{ data.name }}</span>
            <span class="data">{{ data.number }}</span>
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
            
          </li>
        </transition-group>
      </ul>
      <p>This is your contact list.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data(){
    return{
      name: '',
      number: '',
      image: '',
      contacts: [
        {"name": "Shaun", "number": "0833092932", "image": "profilepic0.jpg"},
        {"name": "Bob", "number": "0832435567", "image": "profilepic1.jpg"},
        {"name": "Reagan", "number": "0839981289", "image": "profilepic3.jpg"},
      ],
      selectedFile: null
    }
  },
  methods:{
    addContact(event){
      event
      this.$validator.validateAll().then((result) =>{
          if(result)
          {
            //If had Api or backend
            //const fd = new FormData();
            //fd.append('name', this.name);
            //fd.append('number', this.number);
            //fd.append('image', this.selectedFile, this.selectedFile.name);
            //axios.post("https://myapi", fd)
            //  .then(res => {
            //    console.log(res);
            //  });

              if(this.image == '')
              {
                this.image = "profilepicDefualt.png";
              }

              this.contacts.push({name: this.name, number: this.number, image: this.image})
              this.name = '';
              this.number = '';
              this.image = '';
              document.getElementById("inputFile").value = "";

              var frm = document.getElementById("frmAdd");
              frm.classList.add("hide");
              var btn = document.getElementById("btnAdd");
              btn.classList.remove("hide");
          }
          else
          {
              console.log("Not valid");
          }
      })
    },
    remove(id){
      this.contacts.splice(id,1);
    },
    onFileSelected(event)
    {
      this.selectedFile = event.target.files[0];
      let img = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = event => {
        this.image = event.target.result;
      }
    },
    showAdd()
    {
      var frm = document.getElementById("frmAdd");
      frm.classList.remove("hide");
      var btn = document.getElementById("btnAdd");
      btn.classList.add("hide");
      
    }
  }
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder{
  background-color: #fff;
}
ul{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul li{
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}
p{
  text-align: center;
  padding: 30px 0;
  color: grey;
}
.container{
  box-shadow: 0px 0px 40px lightgray;
}
input{
  width: calc(100% - 40px);
  border: 1px solid white;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}
.alert{
  background-color: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding:  5px;
  margin-top: -20px;
}
.alert-in-enter-active{
  animation: bounce-in .5s;
}
.alert-in-leave-active{
  animation: bounce-in .5s;
}

@keyframes bounce-in{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.5);
  }
  100%{
    transform: scale(1);
  }
}

i{
  float: right;
  cursor:pointer;
}
img{
  height: 50px;
}
.data{
  padding-left: 4%;
  padding-top: 2%;
}
.hide{
  display: none;
}
.btn{
  width: 100%;
  border-radius: 5px;
  border: none;
  font-size: 1.3em;
  background-color: #fff;
  color: rgb(0, 110, 255);
  cursor:pointer;
  padding: 10px;
  font-weight: bold;
}

</style>
