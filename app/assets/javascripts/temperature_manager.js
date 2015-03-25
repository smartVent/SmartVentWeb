// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

// wrapped everything in document ready function
var TemperatureManager = {
  init: function() {
    var object_temp;
    var ambient_temp;
    var current_temp;

    var spark_id = $('#room_spark_id').val();
    var access_token = $('#room_access_token').val();

    // TODO expose and calculate current_temp on Spark
    var checkTemp = function() {
      $.ajax({
        type: 'GET',
        url: 'https://api.spark.io/v1/devices/' + spark_id + '/object_temp',
        cache: false,
        data: { access_token: access_token }
      }).done(function(res) {
        console.log(res);
        object_temp = res.result;
        $('#current_temp').val(object_temp.toFixed(1) + 'º');
      }).fail(function(xhr, status, erro) {
        console.warn(status);
      });
    }

    // Checks for temperature every 3 seconds.
    setInterval(checkTemp, 3 * 1000);

    $('#update_settings').on('click', function(e) {
      e.preventDefault();
      $.ajax({
        type: 'POST',
        url: 'https://api.spark.io/v1/devices/' + spark_id + '/set_target',
        data: {
          access_token: access_token,
          params: $('#room_target_temp').val()
        }
      }).done(function(data) {
        if (data.return_value === -1) {
          alert("temperature invalid.");
          return false;
          // TODO ensure this stops the submission event.
        }

        return true;
      }).fail(function(xhr, status, err) {
        console.warn(status);
        return false;
      });
    });

























// =========================================================
    $('#open').click(function() {
      $.ajax({
        type:'POST',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/board',
        data: { access_token: access_token }
      }).done(function (res) {
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
    });

    $('#close').click(function() {
      $.ajax({
        type:'POST',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/core',
        data: { access_token: access_token }
      }).done(function (res) {
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
    });

    $('#send').click(function() {
      $.ajax({
        type: 'POST',
        url: 'https://api.spark.io/v1/devices/' + spark_id + '/set_target',
        data: {
          access_token: access_token,
          params: $('#room_target_temp').val()
        }
      }).done(function (res) {
        console.log(res);
        if (res.return_value === -1) {
          alert('temperature invalid.')
        }
      }).fail(function (res) {
        console.log(res);
      });
    });

    $('#show').click(function() {
      $.ajax({
        type:'GET',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/current_temp',
        data: { access_token: access_token }
      }).done(function (res) {
        $('#current-temp').html(res.result);
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
    });





    $('#update').click(function() {
      $.ajax({
        type:'GET',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/req_core',
        data: { access_token: access_token }
      }).done(function (res) {
        $('#close-reqs').html(res.result);
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
      $.ajax({
        type:'GET',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/req_board',
        data: { access_token: access_token }
      }).done(function (res) {
        $('#open-reqs').html(res.result);
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
      $.ajax({
        type:'GET',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/target_temp',
        data: { access_token: access_token }
      }).done(function (res) {
        $('#target-temp').html(res.result);
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
      $.ajax({
        type:'GET',
        url:'https://api.spark.io/v1/devices/' + spark_id + '/temperature',
        data: { access_token: access_token }
      }).done(function (res) {
        $('#temperature').html(res.result);
        console.log(res);
      }).fail(function (res) {
        console.log(res);
      });
    });
  },

  updateIndexTemps: function() {
    // TODO
    alert('one day we\'ll update these temperatures!');
  }
};
