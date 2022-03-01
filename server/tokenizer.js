
function tokenizeText(text){

    const spawn = require("child_process").spawn;
    const pythonProcess = spawn('python',["./python/bow.py", text]);

    var x;
    pythonProcess.stdout.on('data', function(data) {
        console.log('this is data:'(data))
        x = data;
    } )
    return x;
}

module.exports =  tokenizeText;
