export class FormPost {
  constructor(idForm, idTextarea, ListPost) {
    this.form = document.getElementById(idForm);
    this.textarea = document.getElementById(idTextarea);
    this.listPost = document.getElementById(ListPost);
    this.addSubmit();
  }

  formValidate(value) {
    if (
      value === "" ||
      value === null ||
      value === undefined ||
      value.length < 3
    ) {
      return false;
    }
    return true;
  }

  onSubmit(func) {
    this.form.addEventListener("submit", func);
  }

  addSubmit() {
    const handleSubmit = (event) => {
      event.preventDefault();
      if (this.formValidate(this.textarea.value)) {
        const newPost = document.createElement("li");
        newPost.classList.add("post");
        const time = this.getTime();
        newPost.innerHTML = `
        <div class="infoUserPost">
          <div class="imgUserPost"></div>

          <div class="nameAndHour">
            <strong>DIEGO SARRIA</strong>
            <p>${time}</p>
          </div>
        </div>

        <p>
         ${this.textarea.value}
        </p>

        <div class="actionBtnPost">
          <button type="button" class="filesPost like">
            <img src="./assets/heart.svg" alt="Curtir">
            Curtir
          </button>
          <button type="button" class="filesPost comment">
            <img src="./assets/comment.svg" alt="Comentar">
            Comentar
          </button>
          <button type="button" class="filesPost share">
            <img src="./assets/share.svg" alt="Compartilhar">
            Compartilhar
          </button>
        </div>
        `;
        this.listPost.appendChild(newPost);
        this.textarea.value = "";
      } else {
        alert("ALGUM ERRO");
      }
    };

    this.onSubmit(handleSubmit);
  }

  getTime() {
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    return `${hour}h ${minutes}min`;
  }
}

const postForm = new FormPost("formPost", "textarea", "posts");



var firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyC4cGXqwHlZC1iv9ZjeXaNqyzI-kMh7y6Y",
    authDomain: "kupidochat-bd3c5.firebaseapp.com",
    databaseURL: "https://kupidochat-bd3c5.firebaseio.com",
    storageBucket: "kupidochat-bd3c5.appspot.com",
    messagingSenderId: "972492700679"
});

var db = firebaseApp.database();

var chatApp = db.ref('chatApp'); //chatApp

var dirRef = chatApp.child('directory');
var chatRef = chatApp.child('chats');
var userRef = chatApp.child('users');


var app = new Vue({
  el: '#chatApp',
  firebase: {
    directory: dirRef
  },
  data: {
    headUser: 'Marinho Gomes',
    showChatList: false,
    chatBoxArea: true,
    currentChats: []
  },
  methods: {
    showUsuario: function(id){
      console.log(id);
    },
    expandTextArea: function(){
      $('#chatBox-textbox').height(80);
      $('#chatTextarea').height(60);
    },
    dexpandTetArea: function(){
      $('#chatBox-textbox').height(60);
      $('#chatTextarea').height(40);
    },
    toggleChat: function(){
      if(this.chatBoxArea){
        $('#chatbox-area').hide();
      }else{
        $('#chatbox-area').show();
      }
      this.chatBoxArea = !this.chatBoxArea;
    },
    openChatBox: function(info){
      
    },
    startChat: function(user){
      
    },
    expandChatList: function(){    $("#userListBox").slideToggle();
      this.showChatList = !this.showChatList;
      
    }
  }
})