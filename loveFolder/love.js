const buttons = document.querySelectorAll(".btnScroll")
const scrollContaianer = document.getElementById('comment2')
buttons.forEach((btn)=>{
btn.addEventListener('click',()=>{
    const scrollWidth  = scrollContaianer.clientWidth;
    let scrollamout = 0
    scrollamout = (btn.id === 'left') ? -1 : 1
    console.log(scrollamout)
    let scrollDirection = scrollamout * scrollWidth 
    console.log(scrollDirection)
    scrollContaianer.scrollBy({left:scrollDirection , behavior:"smooth"})
})
})

scrollContaianer.addEventListener('scroll',check)

function check(){
    buttons[0].style.display = (scrollContaianer.scrollLeft == 0) ? "none" : "block"
    console.log(scrollContaianer.scrollWidth)
}

check()
