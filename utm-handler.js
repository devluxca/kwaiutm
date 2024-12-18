(function() {
    const config = {
        token: '',
        pixelId: '',
        clickIdParam: 'click_id',
        isTest: false
    };

    function getScriptConfig() {
        const scriptTag = document.currentScript;
        if (scriptTag) {
            config.token = scriptTag.getAttribute('data-token') || '';
            config.pixelId = scriptTag.getAttribute('data-pixel-id') || '';
            config.clickIdParam = scriptTag.getAttribute('data-click-id-param') || 'click_id';
            config.isTest = scriptTag.getAttribute('data-is-test') || false;
        }
    }

    window.configureUtmHandler = function(options) {
        config.token = options.token || config.token;
        config.pixelId = options.pixelId || config.pixelId;
        config.clickIdParam = options.clickIdParam || config.clickIdParam;
        config.isTest = options.isTest || config.isTest;
    };

    function getUrlParams() {
        const params = {};
        const searchParams = new URLSearchParams(window.location.search);
        for (const [key, value] of searchParams) {
            params[key] = value;
        }
        return params;
    }

    function updateUrlWithNewUtm() {
        const currentParams = getUrlParams();
        const token = config.token;
        const pixelId = config.pixelId;
        const clickId = currentParams[config.clickIdParam] || '';

        const newUtmSource = `${token}--${pixelId}--${clickId}--${config.isTest ? '1' : '0'}`.replace(/^-+|-+$/g, '');

        if (newUtmSource) {
            const url = new URL(window.location.href);
            url.searchParams.set('utm_source', newUtmSource);
            
            window.history.pushState({}, '', url.toString());
        }
    }

    getScriptConfig();
    window.addEventListener('load', updateUrlWithNewUtm);
})();