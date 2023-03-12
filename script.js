var bodyEle=document.querySelector('body')
var headerEle =document.createElement('div')
headerEle.classList.add('header')
bodyEle.append(headerEle)
headerEle.innerHTML=`
<h1>ImageFinder</h1>
`

var searchContainer = document.createElement('div');
searchContainer.classList.add('container','searchContainer','sticky-top')
bodyEle.append(searchContainer)
var searchRow = document.createElement('div');
searchRow.classList.add('row','justify-content-center')
searchContainer.append(searchRow)
var searchCol = document.createElement('div');
searchCol.classList.add('col-xs-10','col-sm-10','col-md-8')
searchRow.append(searchCol)
searchCol.innerHTML=`
<div class="input-group">
  <input type="text" class="form-control" placeholder="Enter Name Of The Image" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" onClick="search(this)" id="basic-addon2">Search</span>
</div>
`


var spinnerContainer=document.createElement('div');
spinnerContainer.classList.add('container')
bodyEle.append(spinnerContainer)

var spinnerRow=document.createElement('div');
spinnerRow.classList.add('row','justify-content-center')
spinnerContainer.append(spinnerRow)



var imageContainer = document.createElement('div')
    imageContainer.classList.add('container')
    bodyEle.append(imageContainer)
//-----------------------------------------------------------------------------


var searchInputEle = document.querySelector('[placeholder="Enter Name Of The Image"]')
async function search(event){
  try{
    imageContainer.innerHTML=''
  spinnerRow.innerHTML=`
  <div class="spinner-border text-success " role="status">
  <span class="visually-hidden">Loading...</span>
  </div>
  `
  
    var responce = await fetch(`https://api.unsplash.com/search/photos/?client_id=lnEPXk7192ATHGghi6_RfqMjcKSI4_bDPRyux_kgJIM&query=${searchInputEle.value}&per_page=50`)
    var data = await responce.json()

    searchInputEle.value=''
    spinnerRow.innerHTML=''
    
    var imageRow =document.createElement('div')
    imageRow.classList.add('row')
    imageContainer.append(imageRow)
    var imageCol1 =document.createElement('div')
    imageCol1.classList.add('col-xs-12','col-sm-6','col-md-3','imgCol')

    var imageCol2 =document.createElement('div')
    imageCol2.classList.add('col-xs-12','col-sm-6','col-md-3','imgCol')

    var imageCol3 =document.createElement('div')
    imageCol3.classList.add('col-xs-12','col-sm-6','col-md-3','imgCol')

    var imageCol4 =document.createElement('div')
    imageCol4.classList.add('col-xs-12','col-sm-6','col-md-3','imgCol')

    imageRow.append(imageCol1)
    imageRow.append(imageCol2)
    imageRow.append(imageCol3)
    imageRow.append(imageCol4)

    for(var i=0;i<7;i++){
        var imgEle = document.createElement('img')
        imgEle.setAttribute('src',data.results[i].urls.thumb)
        imageCol1.append(imgEle)
    }
    for(var i=7;i<15;i++){
        var imgEle2 = document.createElement('img')
        imgEle2.setAttribute('src',data.results[i].urls.thumb)
        imageCol2.append(imgEle2)
    }

    for(var i=15;i<22;i++){
        var imgEle3 = document.createElement('img')
        imgEle3.setAttribute('src',data.results[i].urls.thumb)
        imageCol3.append(imgEle3)
    }

    for(var i=22;i<29;i++){
        var imgEle4 = document.createElement('img')
        imgEle4.setAttribute('src',data.results[i].urls.thumb)
        imageCol4.append(imgEle4)
    }
  }
  catch(error){
    console.log(error);
  }
}
