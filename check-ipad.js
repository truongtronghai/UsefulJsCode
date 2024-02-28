// iPad will have multitouch and 'iPad' word OR 'Macintosh'
// if containing 'Macintosh' but not multitouch => not Ipad
const isIpad = /iPad|Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
