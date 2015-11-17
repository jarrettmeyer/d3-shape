var tape = require("tape"),
    shape = require("../");

tape("area() returns a default area shape", function(test) {
  var a = shape.area();
  test.equal(a.x0()([42, 34]), 42);
  test.equal(a.x1()([42, 34]), 42);
  test.equal(a.y0(), 0);
  test.equal(a.y1()([42, 34]), 34);
  test.equal(a.defined(), true);
  test.equal(a.context(), null);
  test.equal(a([[0, 1], [2, 3], [4, 5]]), "M0,1L2,3L4,5");
  test.end();
});
