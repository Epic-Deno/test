/*
 * @Description: It was written by Pony
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-08-24 09:28:20
 * @LastEditors: Pony
 * @LastEditTime: 2020-08-24 09:28:42
 */
var MyMarhq = '';
clearInterval(MyMarhq);
$('.tbl-body tbody').empty();
$('.tbl-header tbody').empty();
var str = '';
var Items = [{"Ranking":"1","City":"保定","SaleIncome":"2506734.43","SaleRough":"296071.96","SalePlan":"7200000","PlanFinish":"34.82","TonOilincome":"264.15","OilTransform":"29.62","An":"53.00","Mom":"-13.00"},
    {"Ranking":"2","City":"沧州","SaleIncome":"1425935.58","SaleRough":"93717.83","SalePlan":"3200000","PlanFinish":"44.56","TonOilincome":"366.59","OilTransform":"11.23","An":"65.00","Mom":"43.00"},
    {"Ranking":"3","City":"秦皇岛","SaleIncome":"1372207.38","SaleRough":"241071.82","SalePlan":"3000000","PlanFinish":"45.74","TonOilincome":"342.32","OilTransform":"6.61","An":"34.00","Mom":"7.00"},
    {"Ranking":"4","City":"衡水","SaleIncome":"972451.15","SaleRough":"87638.60","SalePlan":"2700000","PlanFinish":"36.02","TonOilincome":"246.03","OilTransform":"11.56","An":"15.00","Mom":"-18.00"},
    {"Ranking":"5","City":"石家庄","SaleIncome":"939010.52","SaleRough":"140217.37","SalePlan":"7200000","PlanFinish":"13.04","TonOilincome":"139.44","OilTransform":"19.23","An":"-57.00","Mom":"-48.00"},
    {"Ranking":"6","City":"邢台","SaleIncome":"774274.70","SaleRough":"124693.90","SalePlan":"3700000","PlanFinish":"20.93","TonOilincome":"138.87","OilTransform":"9.44","An":"-20.00","Mom":"-44.00"},
    {"Ranking":"7","City":"唐山","SaleIncome":"680456.79","SaleRough":"50542.14","SalePlan":"3600000","PlanFinish":"18.90","TonOilincome":"243.60","OilTransform":"16.95","An":"-29.00","Mom":"-49.00"},
    {"Ranking":"8","City":"张家口","SaleIncome":"613319.87","SaleRough":"176075.96","SalePlan":"3000000","PlanFinish":"20.44","TonOilincome":"87.09","OilTransform":"7.97","An":"2.00","Mom":"-24.00"},
    {"Ranking":"9","City":"中油华奥","SaleIncome":"596575.25","SaleRough":"387024.26","SalePlan":"11000000","PlanFinish":"5.42","TonOilincome":"93.58","OilTransform":"19.06","An":"35.00","Mom":"6.00"},
    {"Ranking":"10","City":"承德","SaleIncome":"589048.12","SaleRough":"68966.73","SalePlan":"2200000","PlanFinish":"26.77","TonOilincome":"193.24","OilTransform":"11.29","An":"30.00","Mom":"-28.00"},
    {"Ranking":"11","City":"廊坊","SaleIncome":"515448.14","SaleRough":"137934.72","SalePlan":"3500000","PlanFinish":"14.73","TonOilincome":"95.47","OilTransform":"8.80","An":"-48.00","Mom":"-3.00"},
    {"Ranking":"12","City":"瑞州","SaleIncome":"399875.26","SaleRough":"85371.46","SalePlan":"2000000","PlanFinish":"19.99","TonOilincome":"114.42","OilTransform":"11.42","An":"128.00","Mom":"-30.00"},
    {"Ranking":"13","City":"石家庄中油","SaleIncome":"90543.62","SaleRough":"20065.14","SalePlan":"430000","PlanFinish":"21.06","TonOilincome":"213.44","OilTransform":"20.45","An":"-24.00","Mom":"-17.00"},
    {"Ranking":"14","City":"辛集中油","SaleIncome":"49255.52","SaleRough":"8743.12","SalePlan":"250000","PlanFinish":"19.70","TonOilincome":"202.67","OilTransform":"29.95","An":"19.00","Mom":"-6.00"},
    {"Ranking":"15","City":"井陉中油","SaleIncome":"29682.60","SaleRough":"2175.66","SalePlan":"140000","PlanFinish":"21.20","TonOilincome":"730.20","OilTransform":"25.55","An":"-74.00","Mom":"-52.00"},
    {"Ranking":"16","City":"保定中油","SaleIncome":"11887.73","SaleRough":"2944.97","SalePlan":"100000","PlanFinish":"11.89","TonOilincome":"118.12","OilTransform":"34.16","An":"-64.00","Mom":"-72.00"}]
$.each(Items,function (i, item) {
    str = '<tr>'+
        '<td>'+item.Ranking+'</td>'+
        '<td>'+item.City+'</td>'+
        '<td>'+(+item.SaleIncome/10000).toFixed(2)+'</td>'+
        '<td>'+(+item.An).toFixed(2)+'</td>'+
        '<td>'+(+item.Mom).toFixed(2)+'</td>'+
        '<td>'+(item.SalePlan/10000).toFixed(2)+'</td>'+
        '<td>'+(+item.PlanFinish).toFixed(2)+'</td>'+
        '</tr>'

    $('.tbl-body tbody').append(str);
    $('.tbl-header tbody').append(str);
});

if(Items.length > 10){
    $('.tbl-body tbody').html($('.tbl-body tbody').html()+$('.tbl-body tbody').html());
    $('.tbl-body').css('top', '0');
    var tblTop = 0;
    var speedhq = 50; // 数值越大越慢
    var outerHeight = $('.tbl-body tbody').find("tr").outerHeight();
    function Marqueehq(){
        if(tblTop <= -outerHeight*Items.length){
            tblTop = 0;
        } else {
            tblTop -= 1;
        }
        $('.tbl-body').css('top', tblTop+'px');
    }

    MyMarhq = setInterval(Marqueehq,speedhq);

    // 鼠标移上去取消事件
    $(".tbl-header tbody").hover(function (){
        clearInterval(MyMarhq);
    },function (){
        clearInterval(MyMarhq);
        MyMarhq = setInterval(Marqueehq,speedhq);
    })

}