const generateColorPalette = (baseHue, numOfColors, harmonyTechnique) => {
    const colors = [];

    const harmonies = {
        complementary: 180,
        analogous: 30,
        triadic: 120
    }

    const harmonyAngle = harmonies[harmonyTechnique] || 30



    for(let i = 0; i < numOfColors; i++){

        const hue = (baseHue + (i * harmonyAngle) % 360);
        const saturation = 80 + Math.random() * 20;
        const lightness=  40 + Math.random() * 40;
        
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