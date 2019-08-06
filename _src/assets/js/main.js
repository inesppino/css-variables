'use strict';

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';  //dataset coge todos los data-atributos que le hayas añadido tu
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //vigila todo el documento para poder acceder a las variables y modificarlas.
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));