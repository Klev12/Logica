const Punto = {
    crear: function(p1, p2) {
      return {
        p1: p1,
        p2: p2,
        suma: function(punto) {
          return Punto.crear(this.p1 + punto.p1, this.p2 + punto.p2);
        },
        tostring: function() {
          return `(${this.p1},${this.p2})`;
        },
      };
    },
  };
  
  let p1 = Punto.crear(1, 2);
  let p2 = Punto.crear(2, 3);
  
  console.log(p1.suma(p2).tostring());
  