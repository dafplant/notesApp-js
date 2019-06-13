
(function(exports) {
    function NoteController(notelist) {
        this.notelist = notelist;
        this.notelist.addNote("Favourite drink: seltzer");
        this.notelistview = new NoteListView(this.notelist);
    }

    NoteController.prototype.createNote = function(){
        var list = this.notelistview.listNotes(this.notelist);
        document.getElementById('app').textContent = list;
    };

    // NoteController.prototype.showNote = function() {
    //     var listnotes = new NoteListView()
    //     var div = document.getElementById('app')
    //     div.textContent = listnotes.listNotes();
    // }
    exports.NoteController = NoteController;

    window.onload = function(){

        var body = document.getElementById('body');
        body.style.background = '#33b5e5';
        
        var createButton = document.getElementById('create');
                createButton.addEventListener('click', function(){
                    var text_area = document.getElementById('textarea');
                    var text = text_area.value;
                    this.notelist.addNote(text);
                });
        
        }

})(this);


var notes = new NoteList();
var x = new this.NoteController(notes);
x.createNote();