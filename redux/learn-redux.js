const obj = {
  a: {
    // To safely update obj.a.c, we have to copy each piece
    c: 3,
  },
  b: 2,
};

const obj2 = {
  // copy obj
  ...obj,
  // overwrite a
  a: {
    // copy obj.a
    ...obj.a,
    // overwrite c
    c: 42,
  },
};

obj;
obj2;

const obj3 = {
  ...obj,
  b: 4,
  a: {
    c: 23,
  },
};

obj3;
