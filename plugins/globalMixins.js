const GlobalMixins = {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    debounceTimer: null
                }
            },
            methods: {
                _generateID(length) {
                    var result = "";
                    var characters =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                    var charactersLength = characters.length;
                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(
                            Math.floor(Math.random() * charactersLength)
                        );
                    }
                    return result;
                },//end _generateID
                _debounce(func, timeout = 600) {
                    return (...args) => {
                        clearTimeout(this.debounceTimer);
                        this.debounceTimer = setTimeout(() => {
                            func.apply(this, args);
                        }, timeout);
                    };
                },//end _debounce

            }
        });
    }
};

export default GlobalMixins;