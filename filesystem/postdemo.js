

router.post('/', function(req, res, next) {

    console.log(req.body);
    var id = Math.floor((Math.random()*100)+1);

    var tital = req.body.title;
    var description = req.body.description;
    var mynotes = {"Id": id, "Title":tital, "Description": description};
    
    fs.readFile('db.json','utf8', function(err,data){
        var obj = JSON.parse(data);
        obj.push(mynotes);

        var strNotes = JSON.stringify(obj);
        fs.writeFile('db.json',strNotes, function(err){
            if(err) return console.log(err);
            console.log('Note added');
        });

    })
    
    
});
