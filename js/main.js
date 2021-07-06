import Canvas from './Canvas.js';
import Grid from './Grid.js';

const start = () => {
        
    let [ctx, display] = new Canvas().create();

    let rows = document.querySelector('#rows').value;
    let cols = document.querySelector('#columns').value;

    let xGrid = new Grid(ctx, display, rows, cols).create();
    // console.log(xGrid);

    // handle input onChanges
    const handleColChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        // console.log(xGrid);
        rows = e.target.value;
        }

    let colChange = document.querySelector('#columns');
    colChange.addEventListener('change', handleColChange)

    const handleRowChange = (e) => {
        e.preventDefault();
        // console.log(e.target.value);
        cols = e.target.value;   
    }

    let rowChange = document.querySelector('#rows');
    rowChange.addEventListener('change', handleRowChange)

    // handle clicks
    const createClicked = (e) => {
        e.preventDefault();
        xGrid = new Grid(ctx, display, rows, cols).create(); 
    }

    let createButton = document.querySelector('#createButton');
    createButton.addEventListener('click', createClicked)

    const addClicked = (e) => {
        e.preventDefault();
        xGrid.addBox();
    }

    let addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', addClicked);
}

window.onload = start();