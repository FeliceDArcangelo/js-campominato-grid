const btnGrid = document.querySelector('.btn-first')
const box = document.querySelector('.grid')


btnGrid.addEventListener('click', function(){
    for (let i = 0; i < 100; i++){
        box.innerHTML = box.innerHTML + `<div class="box"></div>`
        const color = document.querySelectorAll('.box')
        for (let i = 0; i < color.length; i++){
            let cell = color[i]
            cell.addEventListener('click', function color(){
                if (i % 3 == 0){
                cell.classList.toggle('blue')
                } else{
                    cell.classList.toggle('red')   
                }
            })
        }
    }
})



