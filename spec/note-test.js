function testMyNotesStartsEmpty(){
    var note = new NoteList();
    assert.isTrue(note.getNotes().length === 0);
};

testMyNotesStartsEmpty();


describe('Add multiple note models to array', function(){
    var note = new Note('manatee');
    var notelist = new NoteList();
    notelist.addNote(note);
    expect(notelist._myNotes.length === 1);
});


describe('Storing a new Note model', function(){
    var notelist = new NoteList();
    notelist.addNote('turtle');
    notelist.addNote('clownfish');
    expect(notelist._myNotes.length === 2);
});

it('takes a note list model upon instantiation', function() {
    var notelist = new NoteList();
    notelist.addNote('turtle');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview._notelist, notelist); 
    // var notelistview = new NoteListView();
    // expect(notelistview)
});

it('Returns a string of HTML', function() {
    var notelist = new NoteList();
    notelist.addNote('turtle');
    notelist.addNote('orca');
    var notelistview = new NoteListView(notelist);
    //assert.isTrue(notelistview.listNotes === '<ul><li><div>turtle</div></li><li><div>orca</div></li></ul>');
    assert.isEqualTo(notelistview.listNotes(), '<ul><li><div>turtle</div></li><li><div>orca</div></li></ul>');
}); 
