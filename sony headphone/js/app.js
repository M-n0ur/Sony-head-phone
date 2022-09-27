const bullets= document.querySelector('.bullets') 
const content = document.querySelector('.content')
const before = document.querySelector('#before')
const after = document.querySelector('#after')

createBullet(12)
createImages(12)
let valueOfMarginLeft = content.style.marginLeft 
 valueOfMarginLeft = '0%' 
 makeLineLonger('0%') 

   let curentImgIndex = 0  

before.addEventListener('click', function(){
    if(curentImgIndex >  0){
        showImgNumber( --curentImgIndex)

    }
    
})
after.addEventListener('click', function(){
    if(curentImgIndex +1 < content.childElementCount  ){
        showImgNumber( ++curentImgIndex)
    
    }
    
    
})

let indexOfTargetBullet ;
let target ;
bullets.addEventListener('click', function( evt){
    target = evt.target
    let thecondision=  Array.from(target.classList).includes('bullet')   
    if(thecondision){
        let spans = Array.from(bullets.children)

        for (let index = 0; index < spans.length; index++) {
            spans[index].classList.remove('bullet-active')    
        }
        indexOfTargetBullet  = Array.prototype.indexOf.call(bullets.children, target);
        curentImgIndex= indexOfTargetBullet
        showImgNumber(indexOfTargetBullet)

    }
    
})

function showImgNumber(theIndex = 0){
    if(theIndex >= 0  ){
        if  (content.childElementCount  > theIndex  )
        {
        makeLineLonger(`${( (theIndex +1) / content.childElementCount)*100 }%`)


        valueOfMarginLeft = `${theIndex}%`
        
        content.style.margin = `0 0 0 ${-1 * theIndex *100  }%`

        let spans = Array.from(bullets.children)
        
        for (let index = 0; index < spans.length; index++) {
            spans[index].classList.remove('bullet-active')    
        }
        Array.from(bullets.children)[curentImgIndex].classList.add("bullet-active")

           
       
        
        
        
        
    }
    
}
}


function makeLineLonger( lingth = "0%" ){

    let hr = document.querySelector(' div.hr-container span.hr  '  )
    hr.style.width = lingth
}



function createImages(num){
    for (let i = 1; i <= num; i++) {
        content.innerHTML += `
        <div class=" img-container">
        <img src="images/RECON-70PR_${i}_1000x.webp" alt="">
            <div>
            <p>Cinnabar Red</p>
            <p>$349</p>
            </div>
            
            </div>
            
            
            `
        }
        
    }
    
    
    function createBullet(num){
  
        for (let i = 1; i <= num; i++) {

            bullets.innerHTML += `
            <span class="bullet "></span>
            
            `
        
        
        
    }
}
    
