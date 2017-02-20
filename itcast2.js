/**
 * Created by asus on 2017/2/20.
 */

(function (global) {
    var init,
     itcast = function (selector,context) {
        return new itcast.fn.init(selector,context);
    };
    itcast.fn = itcast.prototype = {
        constructor: itcast
    }
    init = itcast.fn.init = function (selector,context) {};
    init.prototype = itcast.fn;
    itcast.extend = itcast.fn.extend = function (source) {
        for(var k in source){
            this[k] = source[k];
        }
    };
    itcast.extend({
        each: function (obj,callback) {
            var i;
            for(i=0;i<obj.length;i++){
                if(callback.call(obj[i],obj[i],i)===false){
                 break;
                }
            }
        }
    });
    itcast.fn.extend({
        addClass: function () {
            console.log('addclass');
        }
    })
    var select = function (selector,context) {
        var ret = [];
        var doms;
        var i,j;
        if(context.nodeType&&context.nodeType==1){
            doms = context.querySelectorAll(selector);
            ret = Array.prototype.slice.call(doms);
        }
        else if (typeof context=='object'&&
            (context instanceof Array || 'length' in context)
        ){
            for(i=0;i<context.length;i++){
                doms = context[i].querySelectorAll(selector);
                for(j=0;j<doms.length;j++){
                    ret.push(doms[i]);
                }
            }
        }
        else {
            selector = context+' '+selector;
            doms = document.querySelectorAll(selector);
            ret = Array.prototype.slice.call(doms);
        }
        return ret;
    }
    global.$ = global.itcast = itcast;
}(window));