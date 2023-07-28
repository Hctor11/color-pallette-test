const generateColorPalette = (baseHue, numOfColors) => {
    const colors = [];

    for(let i = 0; i < numOfColors; i++){

        const hue = (baseHue + (i * 360 / numOfColors)) % 360;
        const saturation = 80 + Math.random() * 20;
        const lightness=  50 + Math.random() * 10;
        
        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`
        colors.push(color);
    }
    return colors
}

const displayColorPalette = (colors) => {
    const colorPaleteDiv = document.getElementById('color-palette');
    colorPaleteDiv.innerHTML = ''

    colors.forEach(color => {
        const colorBox = document.createElement('div')
        colorBox.style.backgroundColor = color
        colorBox.style.width = '100px'
        colorBox.style.height = '100px'
        colorBox.style.display = 'inline-block'
        colorPaleteDiv.appendChild(colorBox)
    })
}

export {generateColorPalette, displayColorPalette}