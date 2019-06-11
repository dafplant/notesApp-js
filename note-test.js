function testMyNotesStartsEmpty(){
    var note = new NoteList();
    assert.isTrue(note.getNotes().length === 0);
};

testMyNotesStartsEmpty();


describe('Add multiple note models to array', function(){
    var note = new Note('manatee');
    var notelist = new NoteList();
    notelist.addNote(note);
    expect(notelist.myNotes.length === 1);
});


describe('Storing a new Note model', function(){
    var notelist = new NoteList();
    notelist.storeModel('turtle');
    notelist.storeModel('clownfish');
    expect(notelist.myNotes.length === 2);
});

it('takes a note list model upon instantiation', function() {
    var notelist = new NoteList();
    notelist.storeModel('turtle');
    var notelistview = new NoteListView(notelist);
    assert.isTrue(notelistview.notelist, notelist); 
    // var notelistview = new NoteListView();
    // expect(notelistview)
});
