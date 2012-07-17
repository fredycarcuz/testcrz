function product_type(product){
    var prod_compare = product;
    switch(prod_compare){
        case "200": prod_compare = 'product_type=Health/';break;
        case "240": prod_compare = 'product_type=Medicare/';break;
        case "260": prod_compare = 'product_type=Life/';break;
        case "300": prod_compare = 'product_type=Auto/';break;
        case "301": prod_compare = 'product_type=Auto/';break;
        case "400": prod_compare = 'product_type=Home/';break;
        case "401": prod_compare = 'product_type=Renters/';break;
        case "500": prod_compare = 'product_type=Home/';break;
        case "501": prod_compare = 'product_type=Mortgage/';break;
        case "502": prod_compare = 'product_type=Mortgage/';break;
        default:prod_compare = 'product_type=General/';
    }    
    return prod_compare;
};

bw_prodid=(typeof bwapsprodid !="undefined" && bwapsprodid != "")?'product_id='+bwapsprodid+'/':"";
bw_product_type = product_type(bwapsprodid);
bw_zip=(typeof bwapszip !="undefined" && bwapszip != "")?'zipcode='+bwapszip+'/':"";
bw_ici=(typeof bwapscurrentlyinsured!= "undefined" && bwapscurrentlyinsured!="")?'is_currently_insured='+bwapscurrentlyinsured+'/':"";
bw_iho=(typeof bwapshomeowner != "undefined" && bwapshomeowner!="")?'is_home_owner='+bwapshomeowner+'/':"";
bw_age=(typeof bwapsagedriver!="undefined" && bwapsagedriver!="")?'age='+bwapsagedriver+'/':"";
bw_mdh=(typeof bwapsmultidriverhouseholds!="undefined" && bwapsmultidriverhouseholds!="")?'is_multi_driver_household='+bwapsmultidriverhouseholds+'/':"";
bw_noih=(typeof bwapsincidenthistory!="undefined" && bwapsincidenthistory!="")?'number_of_incident_history='+bwapsincidenthistory+'/':"";

var bwsrcurl='http://brokersweb.qwobl.net/'+ bw_zip +bw_ici + bw_iho + bw_age + bw_mdh + bw_noih + bw_prodid + bw_product_type + 'track.js';
document.write(unescape("%3Cscript type='text/javascript' language='javascript' src='"+ bwsrcurl +"' %3E %3C/script%3E "));