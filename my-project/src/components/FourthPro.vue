<template>
    <div>
      <header class="header">
        <div class="imgDiv">
          <img src="./../assets/vue.svg">
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li><button @click="handleClickAddUser">Add User</button></li>
          </ul>
        </div>
      </header>
      <main>
        <table>
          <tr>
            <th>S/N</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr v-for="(myinfo, key) in myInfo" :key="key">
            <td>{{ myinfo.ID }}</td>
            <td>{{ myinfo.Name }}</td>
            <td>{{ myinfo.Email }}</td>
            <td>{{ myinfo.Mobile }}</td>
            <td>
              <button @click="handleEdit(key)"><span>Edit</span></button>
            </td>
            <td>
              <button @click="handleDelete(key)"><span>Delete</span></button> 
            </td>
          </tr>
        </table>

        <!-- For Add A new one -->
        <form v-if="isVisibleForAdd" class="myForm" @submit.prevent="handleAdd">
          <h2 class="font-bold text-4xl text-yellow-300 text-center">Form Add A New User</h2>
          <div>
            <label for="id">ID</label>
            <input type="number" name="id" v-model="inputValue.ID">
          </div>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="inputValue.Name">
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="inputValue.Email">
          </div>
          <div>
            <label for="mobile">Mobile</label>
            <input type="text" name="mobile" v-model="inputValue.Mobile">
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" @click="handleClickAddUser">Close</button>
          </div>
        </form>

        <!-- For Edit user -->
        <form v-if="isVisible" class="myForm" @submit.prevent="handleChange">
            <h2 class="font-bold text-4xl text-yellow-300 text-center">Form Edit</h2>
          <div>
            <label for="id">ID</label>
            <input type="number" name="id" v-model="inputValue.ID">
          </div>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" v-model="inputValue.Name">
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="inputValue.Email">
          </div>
          <div>
            <label for="mobile">Mobile</label>
            <input type="text" name="mobile" v-model="inputValue.Mobile">
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" @click="Close">Close</button>
          </div>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisibleForAdd : false,
        isVisible : false,
        myIndexKey: 0,
        inputValue: {
          ID: 0,
          Name: "",
          Email: "",
          Mobile: "",
        },
        myInfo: [
          {
            ID: 1,
            Name: "Kaka",
            Email: "KampongCham Province",
            Mobile: "012885555",
          },
          {
            ID: 2,
            Name: "Vathana",
            Email: "Phnom Penh",
            Mobile: "012444455",
          },
          {
            ID: 3,
            Name: "KikI",
            Email: "Kampong Thom",
            Mobile: "0477474775",
          },
        ],
      };
    },
    methods: {
      handleEdit(index) {
        this.myIndexKey = index;
        this.isVisible =! this.isVisible;
        this.inputValue.ID = this.myInfo[index].ID;
        this.inputValue.Name = this.myInfo[index].Name;
        this.inputValue.Email = this.myInfo[index].Email;
        this.inputValue.Mobile = this.myInfo[index].Mobile;
      },
      handleChange() {
        this.isVisible = !this.isVisible;
        this.myInfo[this.myIndexKey].ID = this.inputValue.ID;
        this.myInfo[this.myIndexKey].Name = this.inputValue.Name;
        this.myInfo[this.myIndexKey].Email = this.inputValue.Email;
        this.myInfo[this.myIndexKey].Mobile = this.inputValue.Mobile;
      },
      handleDelete(index) {
        this.myInfo.splice(index, 1); // Use splice instead of slice to remove the item from the array
      },
      handleClickAddUser(){
        this.isVisibleForAdd =! this.isVisibleForAdd;
      },
      handleAdd(){
        this.isVisibleForAdd = !this.isVisibleForAdd;
        this.myInfo.push({...this.inputValue});
      },
      Close(){
        this.isVisible =! this.isVisible;
      }
    },
  };
  </script>

<style>
main{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
.header {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10px;
    background-color: chocolate;
}
.imgDiv{
    width: 40px;
}
ul{
    display: flex;
    gap: 10px;
    font-weight: bolder;
}
th {
    color: white;
}
td, th{
    padding: 20px 40px;
}
tr:nth-child(even){
    background-color: rgba(128, 128, 128, 0.685);
}
tr:nth-child(odd) td:nth-child(even){
    background-color: rgba(141, 143, 142, 0.317);
}
tr:nth-child(1){
    background-color: rgb(71, 69, 69);
}
td:nth-child(5) span{
    background-color: yellow;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}
td:nth-child(6) span{
    padding : 10px 20px;
    background-color: red;
    color : white;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}
li:hover{
    cursor: pointer;
    color: blue;
}
form {
    width: 70rem;
    margin-top: 10px;
    padding-top : 30px;
    height: 70vh;
    background-color: rgba(128, 128, 128, 0.909);
    display:flex;
    flex-flow: column;
    justify-content: center;
    gap: 30px;
    border-radius: 10px;
    position: absolute;
}
form div{
    display: flex;
    justify-content: center;
    align-items: center;
}
form div:nth-child(6){
    gap:30px;
}
label {
    text-align: end;
    width: 10%;
    font-size: 1.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    color: white;
    margin-right: 10px;
}
input{
    font-weight: bold;
    width: 70%;
    height: 40px;
    text-indent: 10px;
    border-radius: 8px;
}
form div:nth-child(6) button:nth-child(1), form div:nth-child(6) button:nth-child(2){
    align-self: center;
    width: 100px;
    height: 40px;
    color : black;
    font-weight: bold;
    border-radius: 3px;
    background-color: yellow;
    transition: 0.3s;
}
form div:nth-child(6) button:nth-child(1):hover{
    background-color: rgb(109, 109, 0);
    color : white;
}
form div:nth-child(6) button:nth-child(2){
    color : white;
    background-color: red;
} form div:nth-child(6) button:nth-child(2):hover{
    background-color: rgb(124, 1, 1);
}
</style>