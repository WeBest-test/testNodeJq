var jsdom = require("jsdom");
var jq = require('jquery');

jsdom.env(
    "http://www.baidu.com/",
    function (errors, window) {
        var $ = require('jquery')(window);

        console.log($('html').find('title').html());
        console.log($('img').get(0).src);

        //below doesn't work
        /*$.get('http://www.baidu.com/',function(data){
            console.log(data);
        });*/

    }
);


//其他方案还有cheerio等。据说jsdom性能不太好




