
const generateColorPalette = (baseHue, numOfColors, harmonyTechnique) => {
    const colors = [];

    const harmonies = {
        complementary: 90,
        analogous: 30,
        triadic: 120
    }

    const harmonyAngle = harmonies[harmonyTechnique] || 30

    for(let i = 0; i < numOfColors; i++){

        const hue = (baseHue + i * harmonyAngle * Math.random() % 360);
        const saturation = 80 + Math.random() * 20;
        const lightness=  30 + Math.random() * 70;
        
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
        colorBox.className = "color"
        colorBox.style.backgroundColor = color
        colorBox.style.width = '100px'
        colorBox.style.height = '100px'
        colorBox.style.display = 'inline-block'
        colorPaleteDiv.appendChild(colorBox)
    })
}

const addColor = (colors) => {
    colors.push(`hsl(${Math.random() * 360}, 80%, ${30 + Math.random() * 70}%)`);
    const newColor = colors.lenght - 1;
    const colorBox = document.createElement('div')

    colorBox.className = "color"
    colorBox.id = "last-color"
    colorBox.style.backgroundColor = newColor
    colorBox.style.width = '100px'
    colorBox.style.height = '100px'
    colorBox.style.display = 'inline-block'
    colorBox.style.opacity = 0

    document.getElementById('color-palette').appendChild(colorBox)

    displayColorPalette(colors)
}

export {generateColorPalette, displayColorPalette, addColor}