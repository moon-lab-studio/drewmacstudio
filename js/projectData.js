//Meta Classes containing the different class types.
class Portfolio {
    constructor(projectList){
        this._projectList = [];
    }
    get projectList() {
        return this._projectList;
    }
    set projectList(newListItem){
        this._projectList.push(newListItem);
    }
}
/*Portfolios contain different types of work. 
All projects are grouped in to the AllWork portfolio on creation.
2D and illustration: DesignWork, 
3D: PolyWork, 
Ui: UiWork*/
const AllWork = new Portfolio;
const DesignWork = new Portfolio;
const PolyWork = new Portfolio;
const UiWork = new  Portfolio;

// Function to add work to a library, called during class creation *** Not yet working***
/*
const addWork = (project, portfolio) => {
    portfolio.projectList = project; 
}
*/

// Primary project class. Use the defualt class for illustrations, design and other still images.
class Project {
    constructor(title, media, info) {
        this._title = title;
        this._media = media;
        this._info = info;
        this._type = 'General';
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

// Use the Ui class for web design work, apps and  any other interactive work
class Ui extends Project {
    constructor(title, media, info, link){
        super(title, media, info);
        this._type = 'UI';
    }
}

//Use the Poly class for 3D work. Currently only still renders are supported
class Poly extends Project {
    constructor(title, media, info, software) {
        super(title, media, info);

    }
}

// Class Creation
const craftBeer = new Project (
    'Craft Beer Festival',
    ['craft-beer-1'],
    'Commissioned poster for the Savannah Craft Beer Festival'
);
const politicalWarfare = new Project (
    'Political Warfare',
    ['political-warfare-1'],
    'Editorial illustration for an article in the Harvard Business'
);
const seven = new Project (
    'Seven',
    ['seven-1'],
    'Personal project redesigning the poster for the movie Seven'
);

// Enter test classes below this line.
console.log(AllWork.projectList);

