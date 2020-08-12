$(document).ready(function() {
  $("#formShout").submit(function(event) {
    const speakInput = $("input#speak").val();

    $("#toShout").text(speakInput.toUpperCase());

    $("#shout").show();

    event.preventDefault();
  });
});