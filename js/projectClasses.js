// Primary project class. Use the defualt class for illustrations, design and other still images.
class Project {
    constructor(title, media, info) {
        this._title = title;
        this._media = media;
        this._info = info;
    }
    get title() {
        return this._title;
    }
    get type() {
        return this._type;
    }
    get media() {
        return this._media;
    }
    get info() {
        return this._info;
    }
    set imagePath(path) {
        for(let i = 0; i < this._media.length; i++){
            const imgName = this._media[i];
            this._media[i] = path + imgName;
        }
    }
    set imageExt(ext) {
        for(let i=0; i < this._media.length; i++){
            const imgName = this._media[i];
            this._media[i] = imgName + ext;
        }
    }
   
}
//The Design library is for static 2D work. Illustrations, print design, etc. 
class Design extends Project {
    constructor(title, media, info){
        super(title, media, info);
        this._type = 'design';
    }
}
// Use the Dev class for web design work, apps and  any other interactive work
class Dev extends Project {
    constructor(title, media, info, link){
        super(title, media, info);
        this._type = 'dev';
    }
}

//Use the Poly class for 3D work. Currently only still renders are supported
class Poly extends Project {
    constructor(title, media, info, software) {
        super(title, media, info);

    }
}
export {Project, Design, Dev, Poly};