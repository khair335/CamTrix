class CcDate {
    constructor(locale) {
        this.locale = locale;

        if (!this.toLocaleDateStringSupportsLocales()) {
            console.log("%cDates: %cBrowser does not support international locales", "color:red;font-weight:bold;", "color:initial;font-weight:initial;");
            this.locale = 'en-US';
        }
    }

    toLocaleDateStringSupportsLocales() {
        return (
            typeof Intl === "object" &&
            !!Intl &&
            typeof Intl.DateTimeFormat === "function"
        );
    }

    render() {
        const today = new Date();
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const elements = document.querySelectorAll(`[data-days-ago]`)
        for (let i = 0; i < elements.length; ++i) {
            const dateCopy = new Date(today);
            const daysAgo = elements[i].dataset.daysAgo;
            const date = dateCopy.setDate(dateCopy.getDate() - daysAgo);
            elements[i].innerHTML = new Date(date).toLocaleString(this.locale, options)
        }
    }
}

window.addEventListener('load', () => {
    new CcDate(options.locale).render();
})