const form = document.getElementById('form');
const inputMetro = document.getElementById('metro');
const resultado1 = document.getElementById('result1');
const resultado2 = document.getElementById('result2');
const resultado3 = document.getElementById('result3');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const metros = parseFloat(inputMetro.value);
    
       const centímetros = metros * 100;
       resultado1.innerText = `${metros} metros equivalem a ${centímetros} centímetros.`
      
        const milímetros = metros * 1000;
        resultado2.innerText = `${metros} metros equivalem a ${milímetros} milímetros.`;
       
       
        const decímetros = metros * 10;
        resultado3.innerText = `${metros} metros equivalem a ${decímetros} decímetros.`;

      

        
    }
);
