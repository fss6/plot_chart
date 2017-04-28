$.ajax({
  type: "POST",
  url: "repositorio.php",
  data:{data: []},
  cache: false,

  success: function(result){
    try {
      result = $.parseJSON(result);
      var problemas = result['problema']
      var votos = result['votos']
      var data = {
        labels : problemas,
        datasets : [{
          label: '# Chart.js',
          data: votos,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1,
        }]
      }

      var ctx = document.getElementById("canvas");
      window.myBar = new Chart(ctx, {
        type: 'line',
        data: data,
        responsive : true
      });
    } catch(err) {
      $("#erros").append(err.message);
    }
  }, error: function(result) {
    $("#erros").append(result);
  }
});
