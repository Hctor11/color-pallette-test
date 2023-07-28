const colors: string[] = [];
const generateColorPalette = (baseHue: number, numOfColors: number): string[] => {

    for(let i = 0; i < numOfColors; i++){

        const hue: number = (baseHue + (i * 360 / numOfColors)) % 360;
        const saturation: number = 80 + Math.random() * 20;
        const lightness: number =  50 + Math.random() * 10;
        
        const color: string = `hsl(${hue}, ${saturation}, ${lightness})`
        colors.push(color);
    }
    return colors
}




console.log(generateColorPalette(120, 5)); 
