import {Project, Design, Dev, Poly} from './projectClasses.js';

// Libraries 
//Meta Classes containing the different class types.
class Portfolio {
    constructor() {
        this._projectList = [];
    }
    get projectList() {
        return this._projectList;
    }
    /*addProjects(newList){
        for(let i = 0; i < newList.length; i++){
            this._projectList.push(newList[i]);
        }
    }*/
    newProject(project, title, media, info){
        project = new Design (title, media, info)
        this._projectList.push(project)
        AllWork.projectList.push(project);
    }
}
/*Portfolios contain different types of work. 
All projects are grouped in to the AllWork portfolio on creation.
2D and illustration: DesignWork, 
3D: PolyWork, 
Ui: UiWork*/
let AllWork = new Portfolio;
let DesignWork = new Portfolio;
let devWork = new Portfolio;
let polyWork = new Portfolio;

// Design Library

// Class Creation
DesignWork.newProject(
    "craftBeer",
    "Craft Beer Festival",
    ["craft-beer-1"],
    'Commissioned poster for the Savannah Craft Beer Festival');
DesignWork.newProject(
    "politicalWarfare", 
    "Political Warfare",
    )
/*
const craftBeer = new Design (
    'Craft Beer Festival',
    ['craft-beer-1'],
    'Commissioned poster for the Savannah Craft Beer Festival'
);
const politicalWarfare = new Design (
    'Political Warfare',
    ['political-warfare-1'],
    'Editorial illustration for an article in the Harvard Business'
);
const seven = new Design (
    'Seven',
    ['seven-1'],
    'Personal project redesigning the poster for the movie Seven'
);
*/
// Enter test classes below this line.
console.log(`Design portfolio: first project title: ${AllWork.projectList[0].title}  | Design list length ${AllWork.projectList.length}`)
console.log(`All work portfolio: first project title: ${AllWork.projectList[0].title}  | All work list length ${AllWork.projectList.length}`)