const formItem = document.querySelectorAll('.form .form__item');

const numberInput = formItem[0].querySelector('.number')
const widthInput = formItem[1].querySelector('.width')
const heightInput = formItem[2].querySelector('.heigth')

const wrapper = document.querySelector('.wrapper')

numberInput.addEventListener('change', handleChange)
widthInput.addEventListener('change', handleChange)
heightInput.addEventListener('change', handleChange)

function handleChange () {
    const numberValue = numberInput.value;
    const widthValue = widthInput.value;
    const heightValue = heightInput.value;

    if(numberValue) {
        let html = ""
        for(let i = 0; i< numberValue; i++) {
            html += '<li class="inner__item"></li>'
        }
        wrapper.innerHTML = html
    }
    const innerItem = wrapper.querySelectorAll('.inner__item')
    const innerItemLength = innerItem.length
    if(widthValue) {
        for(let j = 0; j < innerItemLength; j++ ) {
            innerItem[j].style.width = widthValue + "px"
        }
    }
    if(heightValue) {
        for(let j = 0; j < innerItemLength; j++) {
            innerItem[j].style.height = heightValue + "px"
        }
    }
}