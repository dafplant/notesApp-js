function NoteList(){
    this.myNotes = [];
}

NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this.myNotes.push(note);
};

NoteList.prototype.getNotes = function() {
    return this.myNotes;
};

NoteList.prototype.storeModel = function(text) {
    var note = new Note(text);
    console.log(note);
    this.myNotes.push(note);
};