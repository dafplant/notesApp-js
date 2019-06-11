var describe = function(desc, fn){
    console.log(desc)
    fn();
};

var it = function(msg, fn){
    describe(' ' + msg, fn);
};

var expect = function(value){
    return value;
};