export default {
    throttle(fn, delay){
        let lastFired = 0;
        return function() {
            const now = Date.now()
            if(now - lastFired > delay){
                fn.call(this)
                lastFired = now
            }
        }
    }
}