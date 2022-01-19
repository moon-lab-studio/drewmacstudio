import potfolopData from '../portfolio.json'
const firstImage = JSON.parse(potfolopData)
document.getElementById("test").innerHTML = firstImage[0]