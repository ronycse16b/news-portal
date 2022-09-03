
const loadNewses = async() =>{
    const url =`https://openapi.programming-hero.com/api/news/category/01`
    const res =await fetch(url);
    const data = await res.json();

    displayNewsCatagory(data.data);
console.log(data.data);

 }

const displayNewsCatagory = newses =>{

    const catagoryContainer = document.getElementById("news-container");
    
    newses.forEach(news =>{
        const catagoryDiv = document.createElement('div');
        // catagoryDiv.classList.add('row' ,'g-0');
      

        catagoryDiv.innerHTML = `
     
    <div class="card mt-4 w-100">
        <div class ="row g-0 ">
          <div class="col-md-4">
            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
          <div class="card-body">
          <h5 class="card-title">${news.title}</h5>
          <p class="card-text text-muted text-truncate  w-75"  >${news.details}</p>
            <div class=" d-flex  align-items-center">
            <div class="d-flex align-items-center">
            <img src="${news.author.img}" class="author_imge-control" alt="">
           
            <div class=" text-muted ms-3">
            <h6>${news.author.name} </h6>
            ${news.author.published_date}
          </div>
            </div>

            <i class="fa-solid fa-eye "></i><span>${news.total_view}</span>
          
            <i class="ms-5  fa-solid fa-arrow-right"></i>
            </div>
          
        </div>
    </div>
       
      
        
        `;
        catagoryContainer.appendChild(catagoryDiv);
    })
}

// document.getElementById("btn-search").addEventListener("click",function(){
// const searchFild =document.getElementById("search-input-fild");
// const searchText = searchFild.value;
// console.log(searchText);

// loadNewses(searchText);


// })
 loadNewses();