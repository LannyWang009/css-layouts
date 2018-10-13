function createGrids (num1, num2) {
    var outputString = '';
    for (var i = 0; i < (num1 * num2); i++) {
        outputString += '<div class="grid" id="g' + String(i) + '"></div>;' + '\n'
    }
    console.log(outputString);
}

createGrids(48,36);