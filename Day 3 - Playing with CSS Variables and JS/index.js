let colorPicker = document.getElementById('baseColor')
let spacingSlider = document.getElementById('spacing')
let blurSlider = document.getElementById('blur')

let root = document.documentElement;

colorPicker.addEventListener("input", e => {
    root.style.setProperty('--baseColor', e.target.value)
})

spacingSlider.addEventListener("input", e => {
    console.log(e)
    root.style.setProperty('--spacing', e.target.value + 'px')
})

blurSlider.addEventListener("input", e => {
    console.log(e)
    root.style.setProperty('--blur', e.target.value + 'px')
})