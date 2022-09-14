// initialize varriables
const btn = document.getElementById('btn')
const bgColor = document.getElementById('bg-color')
const background = document.getElementById('background')


const colors = [ 
    '#FFFFFF', '#C0C0C0', '#808080', '#800000', '#FF0000', '#DEB887',
    '#800080', '#FF00FF', '#008000', '#00FF00', '#808000', '#FFFF00', 
    '#000080', '#0000FF', '#008080', '#00FFFF', '#DCDCDC', '#D3D3D3',
    '#A9A9A9', '#696969', '#778899', '#708090', '#2F4F4F', '#F5DEB3',
    '#D2B48C', '#BC8F8F', '#F4A460', '#DAA520', '#CD853F', '#D2691E',
    '#8B4513', '#A0522D', '#A52A2A', '#B0E0E6', '#ADD8E6', '#87CEFA',
    '#B0C4DE', '#00BFFF', '#1E90FF', '#1E90FF', '#6495ED', '#4682B4',
    '#4169E1', '#0000CD', '#00008B', '#191970', '#7B68EE', '#6A5ACD',
    '#483D8B', '#FF7F50', '#FF6347', '#FF4500', '#FFD700', '#FFA500',
    '#FF8C00', '#FFA07A', '#FA8072', '#E9967A', '#F08080', '#CD5C5C',
    '#DC143C', '#B22222', '#8B0000', '#7CFC00', '#7FFF00', '#32CD32',
    '#228B22', '#006400', '#ADFF2F', '#9ACD32', '#00FF7F', '#00FA9A',
    '#90EE90', '#98FB98', '#8FBC8F', '#3CB371', '#556B2F', '#6B8E23'


]


// event onclick
btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 10)
    const randomColor = colors[random]

    bgColor.innerHTML = randomColor;
    bgColor.style.color = randomColor;
    background.style.backgroundColor = randomColor;
    // btn.style.backgroundColor = randomColor; 
    // console.log(randomColor)

})

























