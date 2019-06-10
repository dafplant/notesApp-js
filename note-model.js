function Note(){
    this.myNotes = [];
}

Note.prototype.addNote = function(text) {
    this.myNotes.push(text);
};

Note.prototype.getNotes = function() {
    return this.myNotes;
};

Note.prototype.listNotes = function() {
    
};