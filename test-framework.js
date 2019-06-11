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

var matchers = function matchers(exp) {
    return {
      toBe: function toBe(assertion) {
        if (exp === assertion) {
          console.log('pass');
          return true;
        } else {
          console.log('fail');
          return false;
        }
      }
    };
  };