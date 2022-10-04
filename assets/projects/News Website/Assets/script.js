let newsSection = document.getElementById("newsSection");
let source = 'google'
let apiKey = 'f6ba5b630e1f4c939ae834d1f00144ab'

// creating get req 
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
    xhr.getResponseHeader('Content-type', 'application/json');


    xhr.onload = function () {
        if(this.status === 200){

           let json =  JSON.parse(this.responseText);
           let articles = json.articles;
           console.log(articles);
           let newsHTML= "";
           articles.forEach(function(element){
                    let news = 
                    `<div class="col-md-6 placeholder-glow">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                      <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success text-wrap placeholder-glow">${element["author"]}</strong>
                        <h3 class="mb-0">${element["title"]}</h3>
                        <div class="mb-1 text-muted" placeholder-glow>${element["publishedAt"]}</div>
                        <p class="mb-auto overflow-auto placeholder-glow" >
                        ${element["description"]}
                        </p>
                        <a href="${element['url']}" placeholder-glow target="_blank" class="stretched-link">Read more..</a>
                      </div>
                      <div class=" mt-4 me-4 col-auto d-none d-lg-block">
                        <img class="cover rounded" width="200" height="250" src="${element["urlToImage"]}" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" placeholder="News Image.">
                        </img>
                      </div>
                    </div>
                    </div>`;
                    newsHTML += news;
                });
                            
                newsSection.innerHTML = newsHTML;
                }
        else{
            console.log("Some error occured")
        }
    }
    xhr.send()


// Date 
// <div class="mb-1 text-muted" placeholder-glow>${element["publishedAt"]}</div>
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
