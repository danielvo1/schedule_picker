var time = document.querySelector('#cur_time');

setInterval(function() { 
    time.textContent = moment().format('MM Do YYYY, h:mm:ss a');
    // console.log(time);
} , 1000 );

$('#exampleModal').on('click', function () {
    $('#exampleModal').trigger('focus')

    console.log("thisis what clicked", );
  })