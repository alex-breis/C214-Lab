<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let sexo = '';
	const var_mas = [18.5, 25, 30, 35, 39];
	const var_fem = [17.5, 24, 29, 34, 38];
	let var_imc = []

  
	// Função para calcular o IMC
	function calcularIMC() {
		const formulario = document.getElementById("radio-form");
		const opcoes = formulario.elements.opcao;
		for (const opcao of opcoes) {
			if (opcao.checked) {
				sexo = opcao.value;
				break;
			}
		}

	  if (sexo === 'homem') {
		var_imc = var_mas;
	  } else {
		var_imc = var_fem;
	  }
	
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
	  } else {
		imc = 0;
	  }
	}
  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<div>
		<fieldset>
			<legend>Selecione seu sexo</legend>
			<form id='radio-form'>
				<label>
					<input type="radio" name="opcao" value="homem"> Homem
				</label>
				<label>
					<input type="radio" name="opcao" value="mulher"> Mulher
				</label>
			</form>
		</fieldset>
	</div>
	<br>
	
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p0>Seu IMC é {imc}<br></p0>
	  {#if imc < var_imc[0]}
	  <p1>Você está abaixo do peso!</p1>
	  {:else if imc >= var_imc[0] && imc < var_imc[1]}
	  <p2>Peso ideal, parabéns! 👌<br></p2>
	  {:else if imc >= var_imc[1] && imc < var_imc[2]}
	  <p3>Levemente acima do peso</p3>
	  {:else if imc >= var_imc[2] && imc < var_imc[3]}
	  <p4>Obesidade Grau 1</p4>
	  {:else if imc >= var_imc[3] && imc <= var_imc[4]}
	  <p5>Obesidade Grau 2 (Severa)</p5>
	  {:else if imc > var_imc[4]}
	  <p6>Obesidade Grau 3 (Mórbida)</p6>
	  {/if}
	{/if}
	
  </main>
  
  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	  font-size: 1rem;
	}
	div {
		display: flex;
  		justify-content: center;
	}
	legend {
		color: black;
		font-weight: bold;
	}
  
	input {
	  padding: 0.25rem;
	}

	p0 {
		background-color: #CCCCCC;
		line-height: 3;
		color: black;
		font-weight: bold;
		font-size: 1.2;
	}
	
	p1 {
        color: black;
		font-weight: 600;
        font-size: 1.05rem;
		background-color: #ecea45;
	}

	p2 {
		color: black;
        background-color: #45ec69;
		font-weight: 680;
        font-size: 1.2rem;
	}

	p3 {
		color: black;
        background-color: #b4b236;
		font-weight: 750;
        font-size: 1.2rem;
	}

	p4 {
		color: black;
        background-color: #eca945;
		font-weight: 830;
        font-size: 1.3rem;
	}

	p5 {
		color: black;
        background-color: #ee4d38;
		font-weight: 850;
        font-size: 1.4rem;
	}

	p6 {
		color: black;
        background-color: #f30606;
		font-weight: 900;
        font-size: 1.5rem;
	}

  </style>
  