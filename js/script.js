          var btn_buy = document.querySelectorAll('.btn-buy'), index, button;
      var cart =  document.querySelector(".cart");
      var cart_close =  document.querySelector(".cart-close");

      for (index = 0; index < btn_buy.length; index++) {
          button = btn_buy[index];
          button.addEventListener('click', clickHandler); 
      }

      function clickHandler(event) {
          console.log('click', this.innerText);
          event.preventDefault();
          cart.classList.add("cart-show");
      }
      cart_close.addEventListener("click", function(event){
              event.preventDefault();
              cart.classList.remove("cart-show");
            }); 

    var maplink =  document.querySelector(".map-link");
    var  map =  document.querySelector(".map");
    var map_close =  document.querySelector(".map-close");

      maplink.addEventListener("click", function(event){
        event.preventDefault();

         
        map.classList.add("map-show");
      });
      map_close.addEventListener("click", function(event){
        event.preventDefault();

         
        map.classList.remove("map-show");
      }); 
    var write_us_link =  document.querySelector(".write-us-link");
    var write_us =  document.querySelector(".write-us");
    var write_us_close =  write_us.querySelector(".write-us-close");
    var name_write_us =  write_us.querySelector("[name=name]");
    var email_write_us =  write_us.querySelector("[name=email]");
    var text_write_us =  write_us.querySelector("[name=text]");
    var form_write_us =  write_us.querySelector("form");
    var storage_name_write_us = localStorage.getItem("name_write_us");
    var storage_email_write_us = localStorage.getItem("email_write_us");
      
      write_us_link.addEventListener("click", function(event){
        event.preventDefault();

        write_us.classList.add("write-us-show");
       
        if (storage_name_write_us) {
          name_write_us.value=storage_name_write_us;
        } else {
           name_write_us.focus();
        };

      });
      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (write_us.classList.constains("write-us-show")) {
            write_us.classList.remove("write-us-show");
          }
        }
      });
      write_us_close.addEventListener("click", function(event) {
        event.preventDefault();

        write_us.classList.remove("write-us-show");
      }); 
        form_write_us.addEventListener("submit", function(event){
        if (!name_write_us.value || !name_write_us.value || !text_write_us.value ) {
          event.preventDefault();
          console.log("ВВеди в поля")
        } else {
          localStorage.setItem("name_write_us", name_write_us.value);
          localStorage.setItem("email_write_us", email_write_us.value);
        }

        write_us.classList.remove("write-us-show");
      }); 

