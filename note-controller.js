

(function(exports) {
    function NoteController() {
        this.notelist = new NoteList();

        // this.notelist = new NoteList();
        // notelist.addNote('Favourite drink: seltzer')
        // var notelistview = new NoteListView(notelist);
        // notelistview.listNotes();
        // return document.getElementById("app").textContent = notelistview.listNotes();
    }

    NoteController.prototype.addToNote = function() {
        
        return this.notelist.addNote("Favourite drink: seltzer");
    }
    exports.NoteController = NoteController;
})(this);

