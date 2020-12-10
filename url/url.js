var res ;
$(document).ready(function () {
    $('#btns').click(function () {
        var text = $('#exampleInputEmail1').val()
        calc({url: text}).then(function (response){
            $('#exampleInputPassword1').val(response['result_url'])
        }).catch(function (){
            $('#exampleInputPassword1').val("you page not found")
        })
    });
});

function calc(text) {
    let promise = new Promise(((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: 'https://cleanuri.com/api/v1/shorten',
            data: text,
            beforeSend: function () {
                $('#action').hide();
            },
            complete: function () {
                $('#action').show();
            },
            success: function (response) {
                resolve(response)
            },
            fail: function (){
                reject("your url not found")
            }
        });
    }))
    return promise;
}



// function calc(text) {
//     let promise = new Promise(((resolve, reject) => ))
//     $.ajax({
//         type: "POST",
//         url: 'https://cleanuri.com/api/v1/shorten',
//         data: text,
//         beforeSend: function () {
//             $('#action').hide();
//         },
//         complete: function () {
//             $('#action').show();
//         },
//         success: function (response) {
//             console.log(response['result_url'])
//             $('#exampleInputPassword1').val(response['result_url'])
//         }
//     });
// }