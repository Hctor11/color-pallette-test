const generateColorPalette = (baseHue: number, numOfColors: number): string[] => {
    const colors: string[] = [];

    for(let i = 0; i < numOfColors; i++){

        const hue: number = (baseHue + (i * 360 / numOfColors)) % 360;
        const saturation: number = 80 + Math.random() * 20;
        const lightness: number =  50 + Math.random() * 10;
        
        const color: string = `hsl(${hue}, ${saturation}, ${lightness})`
        colors.push(color);
    }
    return colors
}

const displayColorPalette = (colors: string[]): void =>{
    const colorPaleteDiv: HTMLElement = document.getElementById('color-palette')!;
    colorPaleteDiv.innerHTML = ''

    colors.forEach(color => {
        const colorBox: HTMLElement = document.createElement('div')
        colorBox.style.backgroundColor = color
        colorBox.style.width = '100px'
        colorBox.style.height = '100px'
        colorBox.style.display = 'inline-block'
        colorPaleteDiv.appendChild(colorBox)
    })
}


const generatedColors: string[] = generateColorPalette(120, 5)
displayColorPalette(generatedColors)

export {generateColorPalette, displayColorPalette}