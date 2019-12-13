export interface clogInfo {
    color ?: string ,
    bcolor ?: string,
    data: any,
}

export type colorName = 'red' | 'yellow' | 'green' | 'orange' | 'blue' | 'brown' | 'black' | 'BlueViolet' | any;

let isDebug = true;

export function cpriter(...args: clogInfo[]) {
    if (isDebug) {
        console.log("%c" + "<?", `color:white; background: gray;`);
        args.forEach((v: clogInfo, k )=>{

            if(!!!v.color && !!!v.bcolor)
                console.log(v.data);
            else {
                console.log("%c" + v.data + "", `color:${v.color}; background: ${v.bcolor}; font-size: 14px`);
            }
        })
        console.log("%c" + "?>", `color:white; background: gray;`);

    }

}

function clog(color: colorName = 'red', bcolor: colorName = 'black', ...args: any[]) {
    if (isDebug) {
        console.log("%c" + "<?", `color:white; background: gray;`);
        console.log("%c" + args, `color:${color}; background: ${bcolor}`);
        console.log("%c" + "?>", `color:white; background: gray;`);
    }
}

export function cerror(...args: any[]) {
    if (isDebug) clog('red', '#a7a1a1', ...args);
}

export function cinfo(...args: any[]) {
    // if (isDebug) clog('green', '#a7a1a1' , ...args);
    if (isDebug) clog('green', '#a7a1a1' , ...args);

}

export function ctip(...args: any[]) {
    if (isDebug) clog('yellow', 'a7a1a1', ...args);
}

/* 错误 */
export let error: (...args: any[]) => void = (...args: any[]) => {
    if (isDebug) console.error('【error】', ...args);
};

/* 警告 */
export let warn = function(...args: any[]) {
    if (isDebug) console.warn('【warn】', ...args);
};

/* 普通打印信息 */
export let info = function(...args: any[]) {
    if (isDebug) console.info('【info】', ...args);
};

/* debug打印 */
export let debug = function(...args: any[]) {
    if (isDebug) console.debug('【debug】', ...args);
};

/* 普通输出 */
export let trace = function(...args: any[]) {
    if (isDebug) console.trace('【trace】', ...args);
};

/* 普通log */
export let log = function(...args: any[]) {
    if (isDebug) console.log('【log】', ...args);
};

