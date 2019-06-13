

(function(exports) {
    function NoteController() {
        this.notelist = new NoteList();
        this.notelistview = new NoteListView(this.notelist)
    }

    

    NoteController.prototype.showNote = function() {
        var listnotes = new NoteListView()
        var div = document.getElementById('app')
        div.innerHTML = listnotes.listNotes();
    }
    exports.NoteController = NoteController;
})(this);

