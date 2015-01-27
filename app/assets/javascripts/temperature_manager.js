# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$('#open').click(function() {
  $.ajax({
    type:'POST',
    url:'https://api.spark.io/v1/devices/smartVentCore/board',
    data: {access_token:'b6efaaaae2949ae5fabb63d002233ca207a6dc84'}
  }).done(function (res) {
    console.log(res);
  }).fail(function (res) {
    console.log(res);
  });
});

$('#close').click(function() {
  $.ajax({
    type:'POST',
    url:'https://api.spark.io/v1/devices/smartVentCore/core',
    data: {access_token:'b6efaaaae2949ae5fabb63d002233ca207a6dc84'}
  }).done(function (res) {
    console.log(res);
  }).fail(function (res) {
    console.log(res);
  });
});

$('#set').click(function() {
  $.ajax({
    type:'POST',
    url:'https://api.spark.io/v1/devices/smartVentCore/temp',
    data: {access_token:'b6efaaaae2949ae5fabb63d002233ca207a6dc84'}
  }).done(function (res) {
    $('#temp').html(res.result);
    console.log(res);
  }).fail(function (res) {
    console.log(res);
  });
});


$('#update').click(function() {
  $.ajax({
    type:'GET',
    url:'https://api.spark.io/v1/devices/smartVentCore/req_core',
    data: {access_token:'b6efaaaae2949ae5fabb63d002233ca207a6dc84'}
  }).done(function (res) {
    $('#close-reqs').html(res.result);
    console.log(res);
  }).fail(function (res) {
    console.log(res);
  });
  $.ajax({
    type:'GET',
    url:'https://api.spark.io/v1/devices/smartVentCore/req_board',
    data: {access_token:'b6efaaaae2949ae5fabb63d002233ca207a6dc84'}
  }).done(function (res) {
    $('#open-reqs').html(res.result);
    console.log(res);
  }).fail(function (res) {
    console.log(res);
  });
});
