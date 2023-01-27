document.querySelector(".button_click1").addEventListener("click", function(){
    document.querySelector(".button_click1 i").classList.add("active_btn");
    document.querySelector(".button_click2 i").classList.remove("active_btn");
    document.querySelector(".button_click3 i").classList.remove("active_btn");
    document.querySelector(".button_click4 i").classList.remove("active_btn");
  })
  
  document.querySelector(".button_click2").addEventListener("click", function(){
    document.querySelector(".button_click1 i").classList.remove("active_btn");
    document.querySelector(".button_click2 i").classList.add("active_btn");
    document.querySelector(".button_click3 i").classList.remove("active_btn");
    document.querySelector(".button_click4 i").classList.remove("active_btn");
  })
  
  document.querySelector(".button_click3").addEventListener("click", function(){
    document.querySelector(".button_click1 i").classList.remove("active_btn");
    document.querySelector(".button_click2 i").classList.remove("active_btn");
    document.querySelector(".button_click3 i").classList.add("active_btn");
    document.querySelector(".button_click4 i").classList.remove("active_btn");
  })
  
  document.querySelector(".button_click4").addEventListener("click", function(){
    document.querySelector(".button_click1 i").classList.remove("active_btn");
    document.querySelector(".button_click2 i").classList.remove("active_btn");
    document.querySelector(".button_click3 i").classList.remove("active_btn");
    document.querySelector(".button_click4 i").classList.add("active_btn");
  })