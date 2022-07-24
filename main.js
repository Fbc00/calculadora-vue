
Vue.component('calculadora', {
    template: ` 

     <section class="container">
    <h1>Calculadora</h1>

    <table @click="calculadora"
    class="calculadora">
      <tr>
        <td colspan="4"><input v-model="display"></td>
      </tr>

      <tr>
        <td><button class="btn btn-clear">C</button></td>
        <td><button class="btn btn-num">(</button></td>
        <td><button class="btn btn-num">)</button></td>
        <td><button class="btn btn-num">/</button></td>
      </tr>

      <tr>
        <td><button class="btn btn-num">7</button></td>
        <td><button class="btn btn-num">8</button></td>
        <td><button class="btn btn-num">9</button></td>
        <td><button class="btn btn-num">*</button></td>
      </tr>

      <tr>
        <td><button class="btn btn-num">4</button></td>
        <td><button class="btn btn-num">5</button></td>
        <td><button class="btn btn-num">6</button></td>
        <td><button class="btn btn-num">+</button></td>
      </tr>

      <tr>
        <td><button class="btn btn-num">1</button></td>
        <td><button class="btn btn-num">2</button></td>
        <td><button class="btn btn-num">3</button></td>
        <td><button class="btn btn-num">-</button></td>
      </tr>

      <tr>
        <td><button class="btn btn-num">.</button></td>
        <td><button class="btn btn-num">0</button></td>
        <td><button class="btn btn-del">&laquo;</button></td>
        <td><button class="btn btn-eq">=</button></td>
      </tr>
    </table>

  </section>

    `,

    data()  {
        return {
            display: "",

        }
    },
    methods: {
            clear() {
                this.display = '';
            },
            apagaUm() {
                this.display = this.display.slice(0, -1);
            },
            calcula () {
                this.display = eval(this.display);
            },
            calculadora(event) {
                const numOp = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/'];
                if (numOp.includes(event.target.innerText)) {
                    this.display += event.target.innerText;
                }
                if (event.target.innerText === 'C') {
                    this.clear();
                }
                if (event.target.innerText === '«') {
                    this.apagaUm();
                }
                if (event.target.innerText === '=') {
                    this.calcula();
                }


            }


    },
})

let app = new Vue({
    el: '#app',


});
