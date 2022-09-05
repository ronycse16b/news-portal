
const loadNewses = async (catagory) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${catagory}`

  // use error handler
  try {
    const res = await fetch(url);
    const data = await res.json();

    // call displayNewsCatagorya
    displayNewsCatagory(data.data);

  }
  catch (error) {
    console.log(error);

  }
}

// display catagory 
const displayNewsCatagory = newses => {

  // news iteam count 
  const iteamsCount = document.getElementById("iteams-count");

  if (newses.length > 0) {
    const iteamCountInnertext = document.getElementById("massage-innertext");
    iteamCountInnertext.innerText = "Total : " + newses.length + " Items News in this Catagory";


    iteamsCount.classList.remove('d-none');
  }
  else {
    iteamsCount.classList.add('d-none');
  }


  // Massage display function 
  const massage = document.getElementById("massage");
  if (newses.length === 0) {

    massage.classList.remove('d-none');
  }
  else {
    massage.classList.add('d-none');
  }



  const catagoryContainer = document.getElementById("news-container");
  // remove old data 
  catagoryContainer.textContent = '';
  newses.forEach(news => {
    const catagoryDiv = document.createElement('div');



    // set inner html 
    catagoryDiv.innerHTML = `
     
    <div class="card mt-4 w-100 " data-bs-toggle="modal" data-bs-target="#showDetailsNews " onclick="newsDetailsShow('${news._id}');" >
   
        <div class ="row g-0 ">
          <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text text-muted  text-warp" >${news.details.slice(0, 350) + "....."}</p>
            <div class=" d-flex  align-items-center">
            <div class="d-flex align-items-center ">
            <img src="${news.author.img}" class="author_imge-control" alt="">
           
            <div class=" text-muted ms-3">
            <h6>${news.author.name ? news.author.name : 'No data Found'} </h6>
            ${news.author.published_date ? news.author.published_date : "No data found"}
          </div>
            </div>

            <i class="fa-solid fa-eye "></i><span>${news.total_view ? news.total_view : 'No data'}</span>
         
            <i class="ms-5 fs-3  fa-solid fa-arrow-right"></i>
            </div>
          
        </div>
    </div>
       
      
        
        `;
    // appned push 
    catagoryContainer.appendChild(catagoryDiv);
  })

  // loader spiners stop
  togleSpiner(false);
}



// news details fetch
const newsDetailsShow = async (news_id) => {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`
  const res = await fetch(url);
  const data = await res.json();


  showDetailsDisplay(data.data[0]);


}
//  show details funtion 
const showDetailsDisplay = newsid => {

  const modalDetails = document.getElementById("showDetailsNewsLabel");
  modalDetails.innerText = newsid.title;
  const detailsImage = document.getElementById("details_imge");
  detailsImage.src = newsid.thumbnail_url;

  const detailsNews = document.getElementById("detailsnews");
  detailsNews.innerText = newsid.details;

  const newsAuthor = document.getElementById("imgeAutor");
  newsAuthor.innerText = "News Publish by :" + newsid.author.name;



  const newsPublishDate = document.getElementById("publish-date");
  newsPublishDate.innerText = newsid.author.published_date;
  const detailsPublisherImage = document.getElementById("detailsPublisher_imge");
  detailsPublisherImage.src = newsid.author.img


}


// is loading function 
const togleSpiner = isLoading => {
  const loadingSection = document.getElementById("loader");
  if (isLoading) {
    loadingSection.classList.remove('d-none');

  } else {
    loadingSection.classList.add('d-none');
  }
}
