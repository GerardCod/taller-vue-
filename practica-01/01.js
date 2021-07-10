const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo Vue',
    frutas: ['naranja', 'manzana', 'limón'],
    nombre: 'Gerardo Aguilar',
    verduras: [
      {
        nombre: 'jitomate',
        cantidad: 0,
      },
      {
        nombre: 'cebolla',
        cantidad: 10,
      },
      {
        nombre: 'calabaza',
        cantidad: 5,
      },
    ],
    nuevaVerdura: '',
    total: 0
  },
  methods: {
    invertir() {
      this.nombre = this.nombre.split('').reverse().join('');
    },
    agregarVerdura() {
      this.verduras.push({nombre: this.nuevaVerdura, cantidad: 0});
    }
  },
  computed: {
    sumaVerduras() {
      this.total = 0;
      for (const verdura of this.verduras) {
        this.total += verdura.cantidad;
      }
      return this.total;
    }
  }
});