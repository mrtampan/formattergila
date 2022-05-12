// currency rupiah
var jmlKolRupiah = document.querySelectorAll('.rupiah').length;
for(var i = 0; i < jmlKolRupiah; i++) {
  $('#rupiah'+i).keyup(function(){
    var rupiah = $(this).val();
    $(this).val(currency_correction(rupiah));
    
  });

}

function currency_correction(number) {
      
    number_string = number.replace(/[^,\d]/g, '').toString()
          split = number_string.split(','),
          sisa = split[0].length % 3,
          rupiah = split[0].substr(0, sisa),
          ribuan = split[0].substr(sisa).match(/\d{3}/gi);

          if (ribuan) {
              separator = sisa ? '.' : '';
              rupiah += separator + ribuan.join('.');
          }

          return split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    
  }