const left = document.querySelector('.container-left')
const right = document.querySelector('.container-right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', function(){
  container.classList.add('hover-left')
})
left.addEventListener('mouseleave', function(){
  container.classList.remove('hover-left')
})
right.addEventListener('mouseenter', function(){
  container.classList.add('hover-right')
})
right.addEventListener('mouseleave', function(){
  container.classList.remove('hover-right')
})

