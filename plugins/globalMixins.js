const GlobalMixins = {
    install(Vue) {
        Vue.mixin({
            mounted() {
                console.log("Component Mounted Successfully");
            },
            beforeDestroy() {
                console.log("Component Destroyed");
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
                _create_UUID(signature = 'sp') {
                    var dt = new Date().getTime();
                    var uuid = `xxxxxxxx-xxxx-${signature}xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
                        var r = (dt + Math.random() * 16) % 16 | 0;
                        dt = Math.floor(dt / 16);
                        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                    });
                    return uuid;
                },//end _create_UUID
                _convertDateTimeToPersian(DateTime) {
                    if (!DateTime) {
                        return '-'
                    }
                    let dateTime = new Date(DateTime);
                    return `${dateTime.toLocaleDateString("fa-IR")} ${dateTime.toLocaleTimeString("fa-IR")}`;
                },//end _convertDateTimeToPersian
                _convertDateToPersian(date) {
                    if (!date) {
                        return '-'
                    }
                    return `${new Date(date).toLocaleDateString("fa-IR")}`;
                },//end _convertDateToPersian
                _getDateNow() {
                    let nowDate = new Date();
                    let now = `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}_${nowDate.getHours()}-${nowDate.getMinutes()}-${nowDate.getSeconds()}`;
                    return now.replace(" ", "_");
                }, //end _getDateNow
                _convertNumbers2English(text) {
                    return text.replace(/[\u0660-\u0669]/g, function (c) {
                        return c.charCodeAt(0) - 0x0660;
                    }).replace(/[\u06f0-\u06f9]/g, function (c) {
                        return c.charCodeAt(0) - 0x06f0;
                    });
                },//end convertNumbers2English
                _jalaliToGregorian(j_y, j_m, j_d) {
                    let JalaliDate = {
                        g_days_in_month: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                        j_days_in_month: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29],
                    };
                    j_y = parseInt(j_y);
                    j_m = parseInt(j_m);
                    j_d = parseInt(j_d);
                    var jy = j_y - 979;
                    var jm = j_m - 1;
                    var jd = j_d - 1;

                    var j_day_no = 365 * jy + parseInt(jy / 33) * 8 + parseInt(((jy % 33) + 3) / 4);
                    for (var i = 0; i < jm; ++i) j_day_no += JalaliDate.j_days_in_month[i];

                    j_day_no += jd;

                    var g_day_no = j_day_no + 79;

                    var gy =
                        1600 +
                        400 *
                        parseInt(g_day_no / 146097); /* 146097 = 365*400 + 400/4 - 400/100 + 400/400 */
                    g_day_no = g_day_no % 146097;

                    var leap = true;
                    if (g_day_no >= 36525) {
                        /* 36525 = 365*100 + 100/4 */
                        g_day_no--;
                        gy += 100 * parseInt(g_day_no / 36524); /* 36524 = 365*100 + 100/4 - 100/100 */
                        g_day_no = g_day_no % 36524;

                        if (g_day_no >= 365) g_day_no++;
                        else leap = false;
                    }

                    gy += 4 * parseInt(g_day_no / 1461); /* 1461 = 365*4 + 4/4 */
                    g_day_no %= 1461;

                    if (g_day_no >= 366) {
                        leap = false;

                        g_day_no--;
                        gy += parseInt(g_day_no / 365);
                        g_day_no = g_day_no % 365;
                    }

                    for (var i = 0; g_day_no >= JalaliDate.g_days_in_month[i] + (i == 1 && leap); i++)
                        g_day_no -= JalaliDate.g_days_in_month[i] + (i == 1 && leap);
                    var gm = i + 1;
                    var gd = g_day_no + 1;

                    gm = gm < 10 ? "0" + gm : gm;
                    gd = gd < 10 ? "0" + gd : gd;

                    return [gy, gm, gd];
                },//end _jalaliToGregorian
                _convertJalaliToGregorian(date) {
                    let tempDate = date.split("/");
                    let result = this._jalaliToGregorian(tempDate[0], tempDate[1], tempDate[2]);
                    let finalResult = result.join("/");
                    return finalResult;
                }, //end _convertJalaliToGregorian
                gregorianToJalali(date) {
                    let persianDate = this._convertDateToPersian(date);
                    return this.convertNumbers2English(persianDate) || "";
                },//end gregorianToJalali
            }
        });
    }
};

export default GlobalMixins;