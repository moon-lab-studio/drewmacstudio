class Project {
    constructor(title, type, images) {
        this._title = title;
        this._type = type;
        this._images = images;
    }
    get title() {
        return this._title;
    }
    get type() {
        return this._type;
    }
    get images() {
        return this._images;
    }
    set imagePath(path) {
        for(let i = 0; i < this._images.length; i++){
            const imgName = this._images[i];
            this._images[i] = path + imgName;
        }
    }
    set imageExt(ext) {
        for(let i=0; i < this._images.length; i++){
            const imgName = this._images[i];
            this._images[i] = imgName + ext;
        }
    }
}
let snow = new Project('Snow', '3D', ['Snow-1', 'Snow-2', 'Snow-3']);
snow.imagePath = '../images/';
snow.imageExt = '.png';
console.log(snow.images)
