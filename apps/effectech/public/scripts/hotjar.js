/** @format */

/* cSpell:disable */

/* eslint-disable func-names -- 3rd party script */
/* eslint-disable no-param-reassign -- 3rd party script */
/* eslint-disable prefer-destructuring -- 3rd party script */
/* eslint-disable prefer-rest-params -- 3rd party script */
/* eslint-disable no-console -- 3rd party script */

// Hotjar Tracking Code for https://www.effectechconference.com/
(function (h, o, t, j, a, r) {
    h.hj =
        h.hj ||
        function () {
            (h.hj.q = h.hj.q || []).push(arguments);
        };
    h._hjSettings = { hjid: 3681471, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
    console.log('Effectech HJ loaded!');
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
