var display = "";
var n1 = 0;
var n2 = 0;
var ope = "";
function CE(){
  display = "";
  $('#display').html(0);
};
$(document).on('click', '.num', function(){
  var n = $(this).html();
  display +=n;
  $('#display').html(display);
});
$(document).on('click', '.ce', function(){
  CE();
});
$(document).on('click', '.ope', function(){
  n1 = display;
  ope = $(this).html();
  CE();
});
$(document).on('click', '.calcular', function(){
n2 = display;
var resultado = 0;
if(ope == "+"){
  resultado = parseFloat(n1)+parseFloat(n2);
  $('#display').html(resultado);
}
else if(ope == "-"){
  if(n1 > n2)
  {
  resultado = parseFloat(n1)-parseFloat(n2);
  $('#display').html(resultado);
  }
  else if(n1 < n2)
  {
  resultado = parseFloat(n2)-parseFloat(n1);
  $('#display').html(resultado);
  }
  else if(n1 == n2)
  {
    resultado = parseFloat(n1)-parseFloat(n2);
    $('#display').html(resultado);
  }
}
else if(ope == "/"){
  if(n1 > n2)
  {
    resultado = parseFloat(n2)/parseFloat(n1);
    $('#display').html(resultado);
  }
  else if(n1 < n2)
  {
    resultado = parseFloat(n1)/parseFloat(n2);
    $('#display').html(resultado);
  }
  else if(n1 == n2)
  {
    resultado = parseFloat(n1)/parseFloat(n2);
    $('#display').html(resultado);
  }
}
else if(ope == "*"){
  resultado = parseFloat(n1)*parseFloat(n2);
  $('#display').html(resultado);
}
display = resultado;
});