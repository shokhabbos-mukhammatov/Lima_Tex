fetch('json/images.json').then(function(response) {
    response.json().then(function(json) {
  
      var header = document.getElementById('header');
      var gallery = document.getElementById('gallery');
  
      var hCaption = document.createElement('h1'); 
      //<h1>This is the Gallery Page</h1>
      hCaption.innerText = "This is the Gallery Page";
      header.appendChild(hCaption);
  
      for(var i=0; i < json.Images.length; i++){
          var img = document.createElement('img');
          img.src = json.Images[i].URL;
          img.alt = json.Images[i].Caption;
          img.class = "card-img-top";
          img.style = "width: 100%";
  
          var aImg = document.createElement('a');
          aImg.href = json.Images[i].URL;
          aImg.setAttribute("data-bs-toggle","modal");
          aImg.setAttribute("data-bs-toggle","modal");
          aImg.setAttribute("data-bs-target","#myModal");
          
  
          var divCardBody = document.createElement('div');
          divCardBody.class = "card-body";
  
          var imgCaption = document.createElement('h4');
          imgCaption.innerText = json.Images[i].Caption;
          imgCaption.class = "card-title";
          imgCaption.style = "text-align:center";
  
          var divCard = document.createElement('div');
          divCard.class = "card";
          divCard.style = "width:100%"
  
          var divCol = document.createElement('div');
          divCol.class = "col";
  
          aImg.appendChild(img);
          divCardBody.appendChild(imgCaption);
          divCard.appendChild(aImg);
          divCard.appendChild(divCardBody);
          divCol.appendChild(divCard);
          gallery.appendChild(divCol);
  
          //Carousel Button
          var divButton = document.getElementById('divButton');
          var cButton = document.createElement('button');
          cButton.type ='button';
          cButton.setAttribute("data-bs-target","#demo");
          cButton.setAttribute("data-bs-slide-to",i);
          if(i==0){
              cButton.setAttribute("class","active");;
          }
          divButton.appendChild(cButton);
  
          //Carousel Slide
          var divSlide = document.getElementById('divSlide');
          var divImage = document.createElement('div');
          
          if(i==0){
              divImage.setAttribute("class","carousel-item active");
          }
          else{
              divImage.setAttribute("class","carousel-item");
          }
  
          var imgSlide = document.createElement('img');
          imgSlide.style="width:100%";
          imgSlide.src=json.Images[i].URL;
          imgSlide.alt=json.Images[i].Caption;
          imgSlide.class="d-block w-100";
  
          var divCaption = document.createElement('div');
          divCaption.setAttribute("class","carousel-caption");
          var imgSlideCaption = document.createElement('h4');
          imgSlideCaption.innerText= json.Images[i].Caption;
          divCaption.appendChild(imgSlideCaption);
          divImage.appendChild(imgSlide);
          divImage.appendChild(divCaption);
          divSlide.appendChild(divImage);
      }
     
  
    });
  });
