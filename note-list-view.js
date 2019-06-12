function NoteListView(notelist){
    this._notelist = notelist;
    this._listNotes = [];
};

NoteListView.prototype.listNotes = function(){
    this._listNotes.push('<ul><li><div>');
    this._listNotes.push(this._notelist._myNotes.join('</div></li><li><div>'));
    this._listNotes.push('</div></li></ul>');
    return this._listNotes.join("");
};