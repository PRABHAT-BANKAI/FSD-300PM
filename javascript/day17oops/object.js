let object2 = {
  name: "batman",
  object: {
    greet: function () {
      console.log(this);
    },
  },
};

object2.object.greet();
