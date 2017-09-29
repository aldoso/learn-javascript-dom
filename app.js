// delete an entire element
var btns = document.querySelectorAll("#book-list .delete")

btns.forEach(function(btn){
  btn.addEventListener('click', function(e){
    const li = e.target.parentNode
    li.parentNode.removeChild(li)
  })
})



//preventDefault
const link = document.querySelector('#page-banner a')

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('navigaton to', e.target.textContent, 'was prevented')
})
