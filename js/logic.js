function start(e) {
    let question = $(e).data('question');
    let CQ = $('div[name*="exam"]').length;
    let randomSet = new Set();

    for (let index = 0; index < 30; index++) {
            randomSet.add(Math.floor(Math.random() * CQ) + 1) 
        };
    let ind = Array.from(randomSet).slice(0,CQ);
    
    for (let exam = 0; exam < CQ; exam++) {
        $('#'+exam).attr('class',question+'-'+ind[exam])    
    }
    $('#end').attr('class',question+'-'+(CQ+1))
    $('.'+question+'-1').show()
    $('#start').hide()
}

function equal(e) {
    var id = $(e).data('id');
    var question = $(e).data('question');
    var number = parseInt($('#number').val());

    if (id == true) {
        $('#true').attr('data-question',question)
        $('#number').val(number+1)
        $('#true').show()
    }else if (id == false) {
        $('#false').show()
    }else{
        $('.equal').hide()
        $('.'+question+'-'+(number-1)+'').hide()
        $('.'+question+'-'+number+'').show()
    }
}