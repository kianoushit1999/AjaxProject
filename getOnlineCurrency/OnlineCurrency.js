function action(){
    calc().then(function (response) {
        console.log('-------------')
        console.log(JSON.parse(response))
        var obj_dolor = JSON.parse(response)['Currency'][0]
        var obj_euro = JSON.parse(response)['Currency'][1]
        var obj_gold = JSON.parse(response)['Gold'][0]
        var obj_Emami = JSON.parse(response)['Gold'][1]
        var obj_header = JSON.parse(response)['LastModified']
        $('#dolor_Sell').text("Sell : "+obj_dolor['Sell'])
        $('#dolor_Buy').text("Buy : "+obj_dolor['Buy'])
        $('#gold_buy').text("Bahar Azadi Buy: "+ obj_gold['Buy'])
        $('#gold_sell').text("Bahar Azadi Sell: "+obj_gold['Sell'])
        $('#Euro_Buy').text("Euro Buy: "+ obj_euro['Buy'])
        $('#Euro_Sell').text("Euro Sell: "+obj_euro['Sell'])
        $('#Emami_Buy').text("Emami Buy: "+ obj_Emami['Buy'])
        $('#Emami_Sell').text("Emami Sell: "+obj_Emami['Sell'])
        $('#header').text("Last modified: "+obj_header)
    }).catch(function (response) {
        console.log(response)
    })
}

function calc() {
    let promise = new Promise(((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: 'https://currency.jafari.li/json',
            success: function (response) {
                resolve(response)
            },
            fail: function () {
                reject("your url not found")
            },
            complete: function () {
                setTimeout(action, 5000);
            }
        });
    }))
    return promise;
};
action()