(function(exports) {
function NoteList(){
    this._myNotes = [];
}

NoteList.prototype.addNote = function(note) {
    //note = new Note(text)
    this._myNotes.push(note);
};

NoteList.prototype.getNotes = function() {
    return this._myNotes;
};

exports.NoteList = NoteList;
})(this);

// NoteList.prototype.storeModel = function(text) {
//     var note = new Note(text);
//     console.log(note);
//     this.myNotes.push(note);
