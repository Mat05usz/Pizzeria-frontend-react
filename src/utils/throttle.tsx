/* eslint-disable no-labels */

let d = new Date();
    console.log("updated" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ":" + d.getMilliseconds())

export function throttle(func, alternateFunc, minimumInterval) {
    var executeImmediately = true, freshEvt = null;
    return function(Evt) {
        if (executeImmediately) { // Execute immediately
            executeImmediately = false;
            setTimeout(function(f){ // handle further calls
                executeImmediately = true;
                if (freshEvt !== null) func( freshEvt );
                freshEvt = null;
            }, minimumInterval);
            return func( Evt );
        } else { // Delayed execute
            freshEvt = Evt;
            if (typeof alternateFunc === "function") alternateFunc( Evt );
        }
    };
}


var ltCache: any[] = [];
function listen(obj, evt, func, _opts){
    var i = 0, Len = ltCache.length, lF:any = null, options = _opts || {};
    a: {
        for (; i < Len; i += 4)
            if (ltCache[i] === func &&
              ltCache[i+1] === (options.alternate||null) &&
              ltCache[i+2] === (options.interval||200)
            ) break a;
        lF = throttle(func, options.alternate||null, options.interval||200);
        ltCache.push(func, options.alternate||null, options.interval||200, lF);
    }
    obj.addEventListener(evt, lF || ltCache[i+3], _opts);
};
function mute(obj, evt, func, options){
    for (var i = 0, Len = ltCache.length; i < Len; i += 4)
        if (ltCache[i] === func &&
          ltCache[i+1] === (options.alternate||null) &&
          ltCache[i+2] === (options.interval||200)
        ) return obj.removeEventListener(evt, ltCache[i+3], options);
}