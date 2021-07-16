const form = document.querySelector('form');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result')

bookName.addEventListener('focus',function(){
    bookName.setAttribute('value','')
})

form.addEventListener('submit',function(event){
    event.preventDefault();

    const valBookName = document.querySelector('.bookName').value;
    const valWordPerPage = document.querySelector('.wordPerPage').value;
    const valNumberOfPages = document.querySelector('.numberOfPages').value;
    const valWordRead = document.querySelector('.wordRead').value;
    

    if(valBookName==='Enter text'){
        alert('Please enter a book name');
        return
    } 
    if(valWordPerPage==='' || valNumberOfPages==='' || valWordRead===''){
        alert('Fields cannot be empty, please enter the numbers to calculate!');
        return
    }

    let totalWord = valWordPerPage*valNumberOfPages
    let totalMin = totalWord/valWordRead
    let hour = Math.floor(totalMin/60)
    let min= Math.ceil(calculateMin());

    function calculateMin(){
        if(hour===0){
            return totalMin
        }else {
            return totalMin%hour
        }    
    }

    let Result = ('You will finish '+ valBookName + ' book in about ' + hour + ' hour/s and ' + min + ' minute/s.')

    result.textContent=Result
});



    

    
