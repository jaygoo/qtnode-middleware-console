
var colors = require('colors');

colors.setTheme({
    log: 'grey',
    info: 'blue',
    data: 'gray',
    help: 'green',
    warn: 'magenta',
    debug: 'cyan',
    error: 'red',
    tip: 'yellow'
});

export function warn(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log((colors.warn("【warn " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function error(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log((colors.error("【error " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function debug(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log((colors.debug("【debug " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function data(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(colors.data(("【data " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function help(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log((colors.help("【help " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function info(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log((colors.info("【info " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function log(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(colors.log(("【log " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

export function tip(...args: any) {
    let bo = true;
    let iter = args[Symbol.iterator]();
    while (bo) {
        let c = iter.next();
        if( bo = !c.done)
            console.log(colors.tip(("【tip " + format("yyyy-MM-dd HH:mm:ss") + '】' + c.value.toString())));
    }
}

function format(fmt: any) {
    let date: Date = new Date();
    let o: any = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "H+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}