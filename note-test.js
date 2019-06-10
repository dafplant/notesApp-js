function testMyNotesStartsEmpty(){
    var note = new Note();
    assert.isTrue(note.getNotes().length === 0);
};

testMyNotesStartsEmpty();

function testCanAddNewNote(){
    var note = new Note();
    note.addNote("First Note");
    note.addNote("Second Note");
    assert.isTrue(note.getNotes().length === 2);
    console.log(note.myNotes);
    assert.isEqualTo(note.getNotes()[1], "Second Note");
};

testCanAddNewNote();
