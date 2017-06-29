/**
 * click_obj:点击对象    里面包含一个span，span中含有一个em标签显示图标
 * sort_tbody：排序的表格tbody  
 * order:排序方式  asc-0  desc-1
 * startrow:开始行数  默认为0
 */
function sortByNum(click_obj, sort_tbody, order, startrow) {
    // 点击元素的样式修改
    if (order == 0) {
        $(click_obj).find("em").removeClass("desc").addClass("asc");
    } else {
        $(click_obj).find("em").removeClass("asc").addClass("desc");
    }
    var index = $(click_obj).index();
    var trs = sort_tbody.find("tr");
    var _trs = new Array();
    if (startrow) {
        var j = startrow;
        for (; j < trs.length; j++) {
            if (j > 0) {
                _trs[j - startrow] = trs[j];
            }
        }
        var i = startrow;
        for (; i < trs.length; i++) {
            if (i > 0) {
                trs[i].remove();
            }
        }
    } else {
        _trs = trs;
        sort_tbody.empty();
    }

    _trs.sort(function (data1, data2) {
        var temp1 = $(data1).find("td").eq(index).find("span").html();
        var temp2 = $(data2).find("td").eq(index).find("span").html();
        var r;
        var len1 = 0,len2 = 0;
        if($(click_obj).hasClass('orderbyPrice')){
            len1 = $(data1).find("td").eq(index).find("span").html().length;
            len2 = $(data2).find("td").eq(index).find("span").html().length;
            temp1 = $(data1).find("td").eq(index).find("span").html().substring(2,len1-1);
            temp2 = $(data2).find("td").eq(index).find("span").html().substring(2,len2-1);
        };
        if (order == 0) {
            r = temp1 - temp2; //升序
        } else {
            r = temp2 - temp1; //降序
        }
        return r;
    });
    var i = 0;
    for (; i < _trs.length; i++) {
        sort_tbody.append(_trs[i].outerHTML);
    }
}
