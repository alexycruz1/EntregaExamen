$(document).ready(function() {
    $('select').material_select();
});

function Submit (){
  var Nombre = $('#nombre').val();
  var Marca = $('#marca').val();
  var Color = $('#color').val();
  var Talla = $('#talla').val();
  var Tipo = $('#tipo').val();
  var Estampado = $('#estampado').val();
  var Estampado2 = $('#estampado2').val();
  var Hombre = $('#hombre').val();
  var Mujer = $('#mujer').val();
  var Unisex = $('#unisex').val();
  var Precio = $('#precio').val();
  var Sexo;

  console.log(Estampado);
  if(Estampado = 'on'){
    Estampado = "Estampado";
  }else{
    Estampado = "No esta estampado";
  }

  if(Hombre = 'on'){
    Sexo = "Hombre";
  }else if(Mujer = 'on'){
    Sexo = "Mujer"
  }else{
    Sexo = "Unisex"
  }
  

  var Calcetin = {NombreCalcetin: Nombre, MarcaCalcetin: Marca, ColorCalcetin: Color, TallaCalcetin: Talla,
              TipoCalcetin: Tipo, PrecioCalcetin: Precio, EstampadoCalcetin: Estampado, SexoCalcetin: Sexo};
  //------------------------------------------------------------
  CalcetinesTodos.push(Calcetin);
  localStorage.setItem('CalcetinInfo', JSON.stringify(CalcetinesTodos));
  //-------------------------------------------------------------------------------------------------------------
}

function Delete (){
  var Nombre = $('#nombre').val();

  for (var i = 0; i < CalcetinesTodos.length; i++) {
    if(CalcetinesTodos.NombreCalcetin = Nombre){
      CalcetinesTodos.splice(i, 1);
    }
  }
}

function Edit () {
  var Nombre = $('#nombre').val();

  for (var i = 0; i < CalcetinesTodos.length; i++) {
    if(CalcetinesTodos.NombreCalcetin = Nombre){
      CalcetinesTodos.splice(i, 1);
    }
  }

  var Nombre = $('#nombre').val();
  var Marca = $('#marca').val();
  var Color = $('#color').val();
  var Talla = $('#talla').val();
  var Tipo = $('#tipo').val();
  var Estampado = $('#estampado').val();
  var Estampado2 = $('#estampado2').val();
  var Hombre = $('#hombre').val();
  var Mujer = $('#mujer').val();
  var Unisex = $('#unisex').val();
  var Precio = $('#precio').val();
  var Sexo;

  console.log(Estampado);
  if(Estampado = 'on'){
    Estampado = "Estampado";
  }else{
    Estampado = "No esta estampado";
  }

  if(Hombre = 'on'){
    Sexo = "Hombre";
  }else if(Mujer = 'on'){
    Sexo = "Mujer"
  }else{
    Sexo = "Unisex"
  }
  

  var Calcetin = {NombreCalcetin: Nombre, MarcaCalcetin: Marca, ColorCalcetin: Color, TallaCalcetin: Talla,
              TipoCalcetin: Tipo, PrecioCalcetin: Precio, EstampadoCalcetin: Estampado, SexoCalcetin: Sexo};
  //------------------------------------------------------------
  CalcetinesTodos.push(Calcetin);
  localStorage.setItem('CalcetinInfo', JSON.stringify(CalcetinesTodos));
}

var CalcetinesTodos = [];
