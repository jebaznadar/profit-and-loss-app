var initialPrice = document.querySelector('#initial-price') ;
var stockQuantity = document.querySelector('#stock-quantity') ;
var currentPrice = document.querySelector('#current-price') ;
var button = document.querySelector('#button') ;
var outputBox = document.querySelector('#outputbox') ;

function submitHandler(){
    var ip = Number(initialPrice.value) ;
    var qty = Number(stockQuantity.value) ;
    var cp = Number(currentPrice.value);

    calculateProfitAndLoss(ip , qty,  cp) ;
}

button.addEventListener('click' , submitHandler)

function calculateProfitAndLoss( initial, quantity ,current)
{
    if(initial === 0 || quantity===0 || current===0){
        alert('Please fill out all Fields')
    }
    if(current > initial){
      var  profit = (current - initial)*quantity ;
        var profitPercentage = (profit /(initial*quantity)*100)
       outputBox.innerText=`hey your profit is ${Number.parseFloat(profit).toFixed(2)} 😄 and profit percentage is ${Number.parseFloat(profitPercentage).toFixed(2)} %`
       outputBox.style.color = 'green'
       document.body.style.backgroundImage = "none"

    }else if(initial > current){
       var loss= (initial - current)*quantity
        var lossPercentage = (loss / (initial*quantity)*100)
        outputBox.innerText=`hey your loss is ${Number.parseFloat(loss).toFixed(2)} 😔 and Loss percentage is ${Number.parseFloat(lossPercentage).toFixed(2)} %`
        outputBox.style.color = 'red';
        document.body.style.backgroundImage = "none"
        if(lossPercentage > 50 ){
            document.body.style.backgroundImage = "url(./image/sad.jpg)" ;
            document.body.style.backgroundSize = "cover"
            document.body.style.backgroundBlendMode = "multiply"

        }
        
    }else{
        outputBox.innerText=`No profit No loss` ;
        document.body.style.backgroundImage = "none"
        outputBox.style.color = 'white';
    }
    

    

}
