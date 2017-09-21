$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var number = $("#numberEntry").val();
    var output = "";
    var numbersArray = number.split(",");
    var totalEvens = 0;
    var totalOdds = 0;
    numbersArray.forEach(function(numberArray) {
      if (numberArray % 2 === 0)  {
          totalEvens = totalEvens + 1;
        output = alert(totalEvens);
       } else {
         output = alert("not a even number");

       }
    });

        $("#output").text(totalEvens);

  });
});
