var MouseStats_PlaybackCommands = MouseStats_PlaybackCommands || [], MouseStatsVisitorPlaybacks = {
    isDebug: "undefined" == typeof playbackDebug ? !1 : playbackDebug, isLoaded: !1, msds: { msdm: { mscx: 0, mscr: 0, mscz: 0, mscw: 0, mscl: 0, msdj: "" }, msby: [], msdp: { x: 0, y: 0 }, mscu: +new Date, msde: 0, msba: [], mscq: [], mscf: { x: 0, y: 0 }, msbz: { x: 0, y: 0 }, mscb: { x: 0, y: 0 }, msbt: { x: 0, y: 0 }, msbe: { x: 0, y: 0 }, msao: [], msaj: [], msdf: !1 }, msca: { msdk: 0, msag: null, msal: null, msaa: null, msaw: null, msaf: null }, msbs: null, msdq: null, msbi: !0, mscp: function () {
        this.msdv("[15] Start");
        if (!MouseStatsSharedControl.msah()) return !0; this.msbo(); this.msaq(); this.msbv(); this.msck(); this.msbk(); this.msas(); this.msak(); this.msaw(); this.msbh(); this.msdv("[15] End")
    }, msbo: function () { MouseStatsVisitorPlaybacks.msds = JSON.parse(JSON.stringify(MouseStatsVisitorPlaybacks.msbs)); this.isLoaded = !1; this.msds.mscu = +new Date }, msck: function () {
        this.msdv("[16] Start"); var a = "ss=pb&a=init&wi=" + this.msds.msdm.mscx + "&p=" + this.msds.msdm.mscr + "&vn=" + this.msco(this.msds.msdm.msdj) + "&v=" + this.msds.msdm.mscz +
        "&s=" + this.msds.msdm.mscw + "&r=" + this.msds.msdm.mscl + "&path=" + this.msco(location.href) + "&ref=" + this.msco(document.referrer) + "&title=" + this.msco(document.title) + "&sc=" + screen.width + "x" + screen.height + "&tou=" + ("ontouchstart" in document.documentElement && MouseStatsSharedControl.msbj()) + "&browser=" + this.msco(MouseStatsSharedControl.msap.browser) + "&browserversion=" + this.msco(MouseStatsSharedControl.msap.version) + "&os=" + this.msco(MouseStatsSharedControl.msap.OS) + "&html=" + MouseStatsSharedControl.msbv.encode(MouseStatsVisitorPlaybacks.msdl());
        MouseStatsSharedControl.msaw("", a, function () { MouseStatsVisitorPlaybacks.mscd() }, !0); this.msdv("[16] End")
    }, mscd: function () { this.msdv("[17] called"); this.msds.msdf = !0; this.isLoaded = this.msds.msdf }, msbj: function () { this.msdq(window).off(".mousestats"); this.msdq(document).off(".mousestats") }, msbk: function () {
        this.msdv("[12] Start"); this.msbj(); try { self.clearInterval(this.msca.msag) } catch (a) { } this.msca.msag = self.setInterval("MouseStatsVisitorPlaybacks.mscj();", 200); MouseStatsVisitorPlaybacks.msdq(window).on("blur.mousestats",
        function (a) { MouseStatsVisitorPlaybacks.msae(15) && (MouseStatsVisitorPlaybacks.msdu({ type: 15 }), MouseStatsVisitorPlaybacks.msbi = !1) }).on("focus.mousestats", function (a) { MouseStatsVisitorPlaybacks.msae(16) && (MouseStatsVisitorPlaybacks.msdu({ type: 16 }), MouseStatsVisitorPlaybacks.msbi = !0) }); MouseStatsVisitorPlaybacks.msdq(document).on("scroll.mousestats", function (a) { MouseStatsVisitorPlaybacks.msds.mscb = { x: MouseStatsVisitorPlaybacks.msdq(window).scrollLeft(), y: MouseStatsVisitorPlaybacks.msdq(window).scrollTop() } }).on("mousemove.mousestats",
        function (a) { MouseStatsVisitorPlaybacks.msds.mscf = { x: a.pageX, y: a.pageY } }).on("click.mousestats", function (a) { MouseStatsVisitorPlaybacks.msae(1) && MouseStatsVisitorPlaybacks.msdu({ type: 1, x: a.pageX, y: a.pageY, target: MouseStatsVisitorPlaybacks.msdb(a.target, "data-ms-id") }) }).on("mousedown.mousestats", "a, :input", function (a) { MouseStatsVisitorPlaybacks.msdu({ type: 6, x: a.pageX, y: a.pageY, target: MouseStatsVisitorPlaybacks.msdb(this, "data-ms-id") }) }).on("focus.mousestats", ":input", function (a) {
            MouseStatsVisitorPlaybacks.msdu({
                type: 10,
                target: MouseStatsVisitorPlaybacks.msdb(a.target, "data-ms-id")
            })
        }).on("blur.mousestats", ":input", function (a) { MouseStatsVisitorPlaybacks.msdu({ type: 11, target: MouseStatsVisitorPlaybacks.msdb(a.target, "data-ms-id") }) }).on("submit.mousestats", "form", function (a) { MouseStatsVisitorPlaybacks.msdu({ type: 12, target: MouseStatsVisitorPlaybacks.msdb(a.target, "data-ms-id") }) }).on("change.mousestats", ":input:not([type=password]):not(.sensitive)", function (a) { }).on("keyup.mousestats", ":input:not([type=password]):not(.sensitive)",
        function (a) { }); try { self.clearInterval(this.msca.msaf) } catch (b) { } this.msca.msaf = setInterval(MouseStatsVisitorPlaybacks.msau, 1E3); this.msan(); var c = MouseStatsVisitorPlaybacks.msaz(); MouseStatsVisitorPlaybacks.msdq(c).on("mouseenter.mousestats", function (a) { MouseStatsVisitorPlaybacks.msdu({ type: 26, x: a.pageX, y: a.pageY, target: MouseStatsVisitorPlaybacks.msdb(MouseStatsVisitorPlaybacks.msdq(this)[0], "data-ms-id") }) }).on("mouseleave.mousestats", function (a) {
            MouseStatsVisitorPlaybacks.msdu({
                type: 27, x: a.pageX,
                y: a.pageY, target: MouseStatsVisitorPlaybacks.msdb(MouseStatsVisitorPlaybacks.msdq(this)[0], "data-ms-id")
            })
        }); if ("ontouchstart" in document.documentElement && MouseStatsSharedControl.msbj()) MouseStatsVisitorPlaybacks.msdq(document).on("touchstart.mousestats", function (a) { a = a.originalEvent.changedTouches; 0 !== a.length && MouseStatsVisitorPlaybacks.msdu({ type: 21, x: a[0].pageX, y: a[0].pageY }) }).on("touchend.mousestats", function (a) {
            MouseStatsVisitorPlaybacks.msds.mscb = {
                x: MouseStatsVisitorPlaybacks.msdq(window).scrollLeft(),
                y: MouseStatsVisitorPlaybacks.msdq(window).scrollTop()
            }; a = a.originalEvent.changedTouches; 0 !== a.length && MouseStatsVisitorPlaybacks.msdu({ type: 22, x: a[0].pageX, y: a[0].pageY })
        }).on("touchmove.mousestats", function (a) {
            MouseStatsVisitorPlaybacks.msds.mscb = { x: MouseStatsVisitorPlaybacks.msdq(window).scrollLeft(), y: MouseStatsVisitorPlaybacks.msdq(window).scrollTop() }; a = a.originalEvent.changedTouches; 0 !== a.length && (MouseStatsVisitorPlaybacks.msds.mscf = { x: a[0].pageX, y: a[0].pageY }, MouseStatsVisitorPlaybacks.msae(23) &&
            MouseStatsVisitorPlaybacks.mscj(!0, !0, !1))
        }).on("orientationchange.mousestats", function (a) { MouseStatsVisitorPlaybacks.msdu({ type: 24, x: void 0 == window.orientation ? 0 : window.orientation }) }); this.msdv("[12] End")
    }, msau: function () {
        MouseStatsVisitorPlaybacks.msdq(":input").each(function (a, b) {
            null === MouseStatsVisitorPlaybacks.msdb(b, "data-ms-val") && setInterval(function () {
                if (!MouseStatsVisitorPlaybacks.msbi) return !1; var a = MouseStatsVisitorPlaybacks.msdq(b); if (a) {
                    var d = MouseStatsVisitorPlaybacks.msdb(a[0],
                    "data-ms-val"); "\x00" === d && (d = ""); var f = MouseStatsVisitorPlaybacks.msce(a); d !== f && ("undefined" != typeof d && null != d && MouseStatsVisitorPlaybacks.msdu({ type: 14, target: MouseStatsVisitorPlaybacks.msdb(a[0], "data-ms-id"), value: f }), null === f && (f = "\x00"), MouseStatsVisitorPlaybacks.msdc(a[0], "data-ms-val", f))
                }
            }, 350)
        })
    }, msan: function () {
        MouseStatsVisitorPlaybacks.msdq("*").on("scroll.mousestats", function (a) {
            ("scroll" === MouseStatsVisitorPlaybacks.msdq(this).css("overflow") || "scroll" === MouseStatsVisitorPlaybacks.msdq(this).css("overflow-y") ||
            "scroll" === MouseStatsVisitorPlaybacks.msdq(this).css("overflow-x") || "auto" === MouseStatsVisitorPlaybacks.msdq(this).css("overflow") || "auto" === MouseStatsVisitorPlaybacks.msdq(this).css("overflow-y")) && (a = MouseStatsVisitorPlaybacks.msdb(this, "data-ms-id")) && (MouseStatsVisitorPlaybacks.msds.msao[a] = { x: MouseStatsVisitorPlaybacks.msdq(this).scrollLeft(), y: MouseStatsVisitorPlaybacks.msdq(this).scrollTop() })
        })
    }, msce: function (a) {
        if (!a) return ""; var b = ""; a.attr("type") && (b = a.attr("type").toLowerCase()); if ("checkbox" ===
        b || "radio" === b) return a.prop("checked").toString(); var c = null !== a.val() ? a.val() : ""; if ("password" === b || a.hasClass("sensitive")) c = c.replace(/[^\s\\]/g, "*"); return c
    }, mscj: function (a, b, c, d) {
        void 0 == a && (a = !0); void 0 == b && (b = !0); void 0 == c && (c = !0); void 0 == d && (d = !0); a && (MouseStatsVisitorPlaybacks.msdi(MouseStatsVisitorPlaybacks.msds.mscf, MouseStatsVisitorPlaybacks.msds.msbz) || MouseStatsVisitorPlaybacks.msdu({ type: 0, x: MouseStatsVisitorPlaybacks.msds.mscf.x, y: MouseStatsVisitorPlaybacks.msds.mscf.y }), MouseStatsVisitorPlaybacks.msds.msbz.x =
        MouseStatsVisitorPlaybacks.msds.mscf.x, MouseStatsVisitorPlaybacks.msds.msbz.y = MouseStatsVisitorPlaybacks.msds.mscf.y); b && (MouseStatsVisitorPlaybacks.msdi(MouseStatsVisitorPlaybacks.msds.mscb, MouseStatsVisitorPlaybacks.msds.msbt) || MouseStatsVisitorPlaybacks.msdu({ type: 2, x: MouseStatsVisitorPlaybacks.msds.mscb.x, y: MouseStatsVisitorPlaybacks.msds.mscb.y }), MouseStatsVisitorPlaybacks.msds.msbt.x = MouseStatsVisitorPlaybacks.msds.mscb.x, MouseStatsVisitorPlaybacks.msds.msbt.y = MouseStatsVisitorPlaybacks.msds.mscb.y);
        if (d) { a = MouseStatsVisitorPlaybacks.msds.msao; b = MouseStatsVisitorPlaybacks.msds.msaj; for (var f in a) a.hasOwnProperty(f) && (b[f] || (b[f] = { x: 0, y: 0 }), MouseStatsVisitorPlaybacks.msdi(a[f], b[f]) || MouseStatsVisitorPlaybacks.msdu({ type: 29, x: a[f].x, y: a[f].y, target: f }), MouseStatsVisitorPlaybacks.msds.msaj[f].x = MouseStatsVisitorPlaybacks.msds.msao[f].x, MouseStatsVisitorPlaybacks.msds.msaj[f].y = MouseStatsVisitorPlaybacks.msds.msao[f].y) } c && this.msam() && MouseStatsVisitorPlaybacks.msdu({
            type: 3, x: MouseStatsVisitorPlaybacks.msds.msbe.x,
            y: MouseStatsVisitorPlaybacks.msds.msbe.y
        })
    }, msdi: function (a, b) { return a.x === b.x && a.y === b.y ? !0 : !1 }, msam: function () {
        var a = { x: 0, y: 0 }, a = { x: "undefined" != typeof window.innerWidth ? window.innerWidth : MouseStatsVisitorPlaybacks.msdq(window).width(), y: "undefined" != typeof window.innerHeight ? window.innerHeight : MouseStatsVisitorPlaybacks.msdq(window).height() }; 0 == a.x && 0 == a.y && (a = { x: document.getElementsByTagName("body")[0].clientWidth, y: document.getElementsByTagName("body")[0].clientHeight }); return MouseStatsVisitorPlaybacks.msdi(a,
        MouseStatsVisitorPlaybacks.msds.msbe) ? !1 : (MouseStatsVisitorPlaybacks.msds.msbe.x = a.x, MouseStatsVisitorPlaybacks.msds.msbe.y = a.y, !0)
    }, msbr: function () { this.msdv("[2] called"); var a = MouseStatsVisitorPlaybacks.msdq(window).width(), b = MouseStatsVisitorPlaybacks.msdq(window).height(); return { x: a, y: b } }, msaq: function () {
        this.msdv("[13] called"); this.msds.msdm.mscx = MouseStatsSharedControl.msbb.msbl; this.msds.msdm.mscr = mousestats_playbackProject; this.msds.msdm.mscl = MouseStatsSharedControl.msaj(); this.msds.msdm.mscz =
        MouseStatsSharedControl.msbb.msbq; this.msds.msdm.mscw = MouseStatsSharedControl.msbb.msbp; this.msds.msdm.msdj = MouseStatsSharedControl.msbb.msbu
    }, msdv: function (a) { if (this.isDebug) { if ("undefined" != typeof debugDic) for (var b = 0; b < debugDic.length; b++) a = a.replace("[" + debugDic[b][0] + "]", debugDic[b][1]); console.log("MSPD: " + a) } }, msaz: function () {
        for (var a = "", b = {}, a = /:hover/, c = 0; c < window.document.styleSheets.length; c++) {
            var d = window.document.styleSheets[c]; try {
                for (var f = d.cssRules ? d.cssRules : d.rules, d = 0; d < f.length; d++) {
                    var e =
                    f[d]; if (a.test(e.selectorText)) for (var h = e.selectorText.split(","), g, m = 0; m < h.length; m++) g = h[m].trim(), a.test(a) && (-1 < g.indexOf("::") && (g = g.substring(0, g.indexOf("::"))), -1 < g.indexOf(":") && (g = g.substring(0, g.indexOf(":"))), b[g] = !0)
                }
            } catch (k) { this.msdv("[20] has external css.") }
        } a = ".mslisten, a"; for (s in b) a += ", " + s; return a
    }, msdu: function (a) {
        this.msdv("[6] start:" + JSON.stringify(a)); "undefined" == typeof a && (a = {}); if ("undefined" == typeof a.type || null == a.type || 0 > a.type) a.type = -1; if ("undefined" == typeof a.x ||
        null == a.x || 0 > a.x) a.x = 0; if ("undefined" == typeof a.y || null == a.y || 0 > a.y) a.y = 0; if ("undefined" == typeof a.target || null == a.target) a.target = ""; if ("undefined" == typeof a.value || null == a.value) a.value = ""; -1 !== a.type && (a.date = +new Date - this.msds.mscu, this.msdv("[6] end obj: " + JSON.stringify(a)), this.msds.msby.push(a), (200 < this.msds.msby.length || 10240 < this.msax(this.msds.msby)) && this.mscm())
    }, msak: function () {
        if ("undefined" !== typeof MouseStats_PlaybackCommands && 0 < MouseStats_PlaybackCommands.length) {
            for (var a = 0; a <
            MouseStats_PlaybackCommands.length; a++) try { this.msdu({ type: 17, target: MouseStats_PlaybackCommands[a].key, value: MouseStats_PlaybackCommands[a].value }) } catch (b) { } MouseStats_PlaybackCommands = []
        } try { self.clearInterval(this.msca.msaa) } catch (c) { } this.msca.msaa = self.setInterval("MouseStatsVisitorPlaybacks.msak();", 2E3)
    }, mscm: function (a) {
        this.msdv("[7] called"); if (0 !== this.msds.msby.length) if (this.msds.msdf) {
            var b = [], b = this.msds.msby.slice(); this.msds.msby = []; a = ""; for (var c = 0; c < b.length; c++) {
                var d = b[c]; a +=
                d.type + "\x00" + d.date + "\x00" + d.x + "\x00" + d.y + "\x00" + this.msac(d.target) + "\x00" + this.msac(d.value) + "\x00\u0001"
            } b = b[b.length - 1].date; c = b - this.msds.msde; this.msds.msde = b; MouseStatsSharedControl.msbi(1, "a=data&wi=" + this.msds.msdm.mscx + "&p=" + this.msds.msdm.mscr + "&v=" + this.msds.msdm.mscz + "&s=" + this.msds.msdm.mscw + "&r=" + this.msds.msdm.mscl + "&t=" + b + "&td=" + c); MouseStatsSharedControl.msbg(1, a); this.msas()
        } else this.msdv("[7] jump-out:1")
    }, msas: function () {
        try { self.clearInterval(this.msca.msal) } catch (a) { } this.msca.msal =
        self.setInterval("MouseStatsVisitorPlaybacks.mscm();", 6E3)
    }, msaw: function () { var a = 1; "undefined" !== typeof MouseStats_PlaybackTrackPerformance && 0 < MouseStats_PlaybackTrackPerformance && (a = MouseStats_PlaybackTrackPerformance); try { self.clearInterval(this.msca.msaw) } catch (b) { } this.msca.msaw = self.setInterval("MouseStatsVisitorPlaybacks.msap();", 1E3 * a) }, msci: function () {
        this.msdv("[10] called"); if (window.XMLHttpRequest && !/msie 5|msie 6|msie 7/i.test(navigator.appVersion)) {
            var a = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function () {
                if (-1 == arguments[1].indexOf(".mousestats.com/monitor") && -1 == arguments[1].indexOf("localhost:") && -1 == arguments[1].indexOf("::1:1111") && -1 == arguments[1].indexOf("/monitorpv2/")) {
                    MouseStatsVisitorPlaybacks.msdv("[10] prot.open"); this.mscv = MouseStatsVisitorPlaybacks.msds.mscq.length; var b = { _sequence: this.mscv + 1, _time: +new Date - MouseStatsVisitorPlaybacks.msds.mscu, _url: arguments[1], _postData: "", _responseText: "", _contentType: "" }; MouseStatsVisitorPlaybacks.msds.mscq.push(b);
                    MouseStatsVisitorPlaybacks.msdu({ type: 19, x: b._sequence, y: 0 }); this.addEventListener ? this.addEventListener("readystatechange", MouseStatsVisitorPlaybacks.msai, !1) : this.attachEvent && this.attachEvent("onreadystatechange", MouseStatsVisitorPlaybacks.msai); MouseStatsVisitorPlaybacks.msdv("[10] aj: " + b._sequence + ", url: " + b._url)
                } a.apply(this, arguments)
            }; var b = XMLHttpRequest.prototype.send; XMLHttpRequest.prototype.send = function () {
                if (void 0 != this.mscv && 0 < arguments.length) {
                    MouseStatsVisitorPlaybacks.msdv("[10] prot.send");
                    var a = MouseStatsVisitorPlaybacks.msds.mscq[this.mscv]; a._postData = arguments[0] || ""; MouseStatsVisitorPlaybacks.msdv("[10] aj: " + a._sequence + ", datal: " + a._postData.length)
                } b.apply(this, arguments)
            }
        }
    }, msai: function () {
        MouseStatsVisitorPlaybacks.msdv("[11] ready: " + this.readyState); if (4 == this.readyState && (200 == this.status || 304 == this.status)) {
            var a = MouseStatsVisitorPlaybacks.msds.mscq[this.mscv]; a._responseText = this.responseText; a._contentType = this.getResponseHeader("content-type"); MouseStatsVisitorPlaybacks.msdv("[11] ready store: " +
            a._sequence); MouseStatsVisitorPlaybacks.msdu({ type: 20, x: a._sequence, y: 0, target: "", value: JSON.stringify(a) })
        }
    }, msae: function (a) { var b = 10; switch (a) { case 1: b = 25; break; case 15: case 16: b = 10; break; case 23: b = 200; break; default: b = 10 } if (0 === b) return !0; var c = MouseStatsVisitorPlaybacks.msds.msba[a]; if (c && 0 != c && +new Date - c < b) return !1; MouseStatsVisitorPlaybacks.msds.msba[a] = +new Date; return !0 }, msax: function (a) {
        var b = []; a = [a]; for (var c = 0; a.length;) {
            var d = a.pop(); if ("boolean" === typeof d) c += 4; else if ("string" === typeof d) c +=
            2 * d.length; else if ("number" === typeof d) c += 8; else if ("object" === typeof d && -1 === b.indexOf(d)) for (i in b.push(d), d) a.push(d[i])
        } return c
    }, msco: function (a) { return encodeURIComponent(a) }, msac: function (a) { return a.replace(/\0/g, "").replace(/\1/g, "") }, msdt: function () { this.msak(); self.clearInterval(this.msca.msal); self.clearInterval(this.msca.msag); self.clearInterval(this.msca.msaa); this.msbj(); this.msdu({ type: 25 }); this.mscm(!1); this.msbo() }, msbh: function () { if ("undefined" !== typeof window.onMouseStatsPlaybackStartRecording) try { window.onMouseStatsPlaybackStartRecording() } catch (a) { } },
    sessionId: function () { return this.msds.msdm.mscw }, visitorId: function () { return this.msds.msdm.mscz }, recordId: function () { return this.msds.msdm.mscl }, customVariable: function (a, b) { MouseStatsVisitorPlaybacks.msdu(17, { target: a, value: b }); return !0 }, Resume: function () { "undefined" !== typeof MouseStats_PausedPlaybacks && !0 === MouseStats_PausedPlaybacks && (MouseStats_PausedPlaybacks = void 0, MouseStatsVisitorPlaybacks.msdg()) }, NewRecording: function () { this.Stop(); this.mscp() }, Stop: function () { this.msdt() }, isRecording: function () { return this.msds.msdf },
    trackNewElements: function () { this.msbk() }, msdg: function () {
        this.msdv("[19] called"); if (!MouseStatsSharedControl.msah()) return !0; if ("undefined" !== typeof MouseStats_PausedPlaybacks && !0 === MouseStats_PausedPlaybacks) return !1; MouseStatsVisitorPlaybacks.msdq = MouseStatsSharedControl.j; null === MouseStatsVisitorPlaybacks.msbs && (MouseStatsVisitorPlaybacks.msbs = JSON.parse(JSON.stringify(MouseStatsVisitorPlaybacks.msds))); var a = !1; MouseStatsVisitorPlaybacks.msdq(document).ready(function () { a = !0; MouseStatsVisitorPlaybacks.mscp() });
        "complete" !== window.document.readyState && MouseStatsVisitorPlaybacks.msdq(document).load(function () { a || (a = !0, this.msdv("[19] method B"), MouseStatsVisitorPlaybacks.mscp()) }); MouseStatsVisitorPlaybacks.msdq(window).unload(function () { MouseStatsVisitorPlaybacks.Stop() })
    }, msdw: {
        msbx: function () { for (var a, b = [], c = 0; 256 > c; c++) { a = c; for (var d = 0; 8 > d; d++) a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1; b[c] = a } return b }, msdr: function (a) {
            for (var b = window.msdn || (window.msdn = MouseStatsVisitorPlaybacks.msdw.msbx()), c = -1, d = 0; d < a.length; d++) c =
            c >>> 8 ^ b[(c ^ a.charCodeAt(d)) & 255]; return (c ^ -1) >>> 0
        }
    }, msdh: function () { this.msbv() }, msbf: function (a) { var b = a; 8 < b.length && (b = this.msdw.msdr(a)); return b }, msbm: function (a) { return "/" == a.charAt(0) || "#" == a.charAt(0) || "!" == a.charAt(0) || /SCRIPT|STYLE|META|PARAM|EMBED|FIELD|HTML/.test(a.toUpperCase()) ? !1 : !0 }, msah: function (a, b) {
        return "undefined" !== typeof a && "undefined" !== typeof a.attributes["class"] && 0 <= a.attributes["class"].value.indexOf("sensitive") && "value" == b || /^(data-|on|aria|action|method|ajaxify|ng-|_)/.test(b.toLowerCase()) ?
        !1 : !0
    }, msdd: function (a) { if (0 === a.childElementCount) return !1; for (var b = 0; b < a.children.length; b++) if (this.msbm(a.children[b].tagName)) return !0; return !1 }, msdc: function (a, b, c) { if (!a) return null; "undefined" == typeof a.msDataSpace && (a.msDataSpace = {}); a.msDataSpace[b] = c.toString(); return !0 }, mscg: function (a, b) { if (!a) return null; delete a.msDataSpace[b]; return !0 }, msdb: function (a, b) {
        if (!a) return null; "undefined" == typeof a.msDataSpace && (a.msDataSpace = {}); var c = a.msDataSpace[b]; "undefined" == typeof c && (c = null);
        return c
    }, mscc: function (a) { if (!a) return null; "undefined" == typeof a.msDataSpace && (a.msDataSpace = []); var b = [], c; for (c in a.msDataSpace) a.msDataSpace.hasOwnProperty(c) && b.push({ key: c, value: a.msDataSpace[c] }); return b }, mscs: function (a, b, c) { if (b && null !== this.msdb(a, "data-ms-txtcrc") && this.msdd(a)) return this.mscg(a, "data-ms-txtcrc"), !1; if (c) { if (this.msdd(a)) return !1; this.msdc(a, "data-ms-txtcrc", this.msbf(a.innerHTML)) } return !0 }, msbb: function (a, b) {
        if (b) for (var c = this.mscc(a), d = 0; d < c.length; d++) 0 === c[d].key.indexOf("data-ms-crc-") &&
        this.mscg(a, c[d].key); for (var d = 0, c = a.attributes, f = c.length; d < f; d++) { var e = c.item(d).nodeName.toLowerCase(); this.msah(a, e) && this.msdc(a, "data-ms-crc-" + e, this.msbf(c.item(d).value)) } return !0
    }, msct: function (a) {
        MouseStatsVisitorPlaybacks.msca.msdk += 1; this.msdc(a, "data-ms-id", MouseStatsVisitorPlaybacks.msca.msdk); if (a.parentNode && 1 === a.parentNode.nodeType) {
            var b = this.msdb(a.parentNode, "data-ms-childs"); null === b && (b = ""); b += "" + MouseStatsVisitorPlaybacks.msca.msdk.toString() + "."; this.msdc(a.parentNode, "data-ms-childs",
            b)
        } return !0
    }, msab: function (a, b) { if (a && 1 === a.nodeType) { var c = this.msdb(a, "data-ms-childs"); null !== c && (c = ("." + c + ".").replace("." + b + ".", "."), 2 <= c.length && (c = c.slice(0, -1).substring(1)), 0 < c.length ? this.msdc(a, "data-ms-childs", c) : this.mscg(a, "data-ms-childs")) } return !0 }, msbl: function (a) { this.msct(a); this.msbb(a, !1); this.mscs(a, !1, !0) }, msar: function (a) { if (a && a.parentNode) for (var b = 0; b < a.parentNode.children.length; b++) if (a.parentNode.children[b] == a) return b; return 0 }, msbv: function () {
        for (var a = document.getElementsByTagName("*"),
        b = a.length; b--;) { var c = a[b]; this.msbm(c.tagName) && (this.msdb(c, "data-ms-id") ? this.mscs(c, !0, !0) : this.msbl(c)) }
    }, msap: function () {
        for (var a = +new Date, b = document.getElementsByTagName("*"), c = b.length; c--;) {
            var d = b[c]; if (this.msbm(d.tagName)) {
                var f = !0; if (this.msdb(d, "data-ms-id")) {
                    f = !1; this.msdb(d, "data-ms-id"); for (var e = !1, h = this.mscc(d), g = 0; g < h.length; g++) if (-1 !== h[g].key.indexOf("data-ms-crc-")) { var m = h[g].key.replace("data-ms-crc-", ""); "undefined" === typeof d.attributes[m] && (this.msbg(6, d, m), e = !0) } g =
                    0; h = d.attributes; for (m = h.length; g < m; g++) { var k = h.item(g).nodeName.toLowerCase(); if (this.msah(d, k)) { var l = this.msbf(h.item(g).value), n = this.msdb(d, "data-ms-crc-" + k); null == n ? (this.msbg(5, d, k, h.item(g).value), e = !0) : l.toString() !== n.toString() && (this.msbg(4, d, k, h.item(g).value), e = !0) } } e && this.msbb(d, !0); g = !1; if (this.msdb(d, "data-ms-childs")) {
                        k = this.msdb(d, "data-ms-childs").slice(0, -1).split("."); h = k.slice(); m = Array(k.length); for (e = 0; e < d.children.length; e++) if (l = this.msdb(d.children[e], "data-ms-id")) if (l =
                        k.indexOf(l), 0 <= l) k[l] = "", m[l] = !0; else for (this.msbl(d.children[e]), l = this.msdb(d, "data-ms-id"), this.msbg(3, d.children[e], null, null, l), l = 0; l < d.children[e].children.length; l++) if (n = this.msdb(d.children[e].children[l], "data-ms-id")) this.msab(d.children[e], n), this.msbl(d.children[e].children[l]); k = []; for (e = 0; e < m.length; e++) !0 !== m[e] && (this.msab(d, h[e]), k.push(h[e])); k.length === h.length && (k = [], this.msdd(d) || (g = !0)); if (0 < k.length) for (c = 0; c < k.length; c++) this.msbg(1, k[c], null, null, this.msdb(d, "data-ms-id"))
                    } if (null !==
                    this.msdb(d, "data-ms-txtcrc") || g) l = this.msbf(d.innerHTML), n = null !== this.msdb(d, "data-ms-txtcrc") ? this.msdb(d, "data-ms-txtcrc") : "-1", l.toString() !== n.toString() && this.msbg(2, d); this.mscs(d, !0, !0)
                } if (f) if ((f = d.parentNode) && this.msdb(f, "data-ms-id") && !this.msdb(f, "data-ms-txtcrc")) {
                    g = !1; for (e = 0; e < f.children.length; e++) this.msdb(f.children[e], "data-ms-id") && (g = !0); this.msbl(d); if (g) l = d.parentNode ? this.msdb(d.parentNode, "data-ms-id") : "", this.msbg(3, d, null, null, l); else {
                        for (e = 0; e < f.children.length; e++) this.msdb(f.children[e],
                        "data-ms-id") || this.msbl(f.children[e]); this.msbg(2, f)
                    }
                } else this.msbl(d)
            }
        } a = 3 * (+new Date - a); 1E3 > a && (a = 1E3); MouseStats_PlaybackTrackPerformance = Math.ceil(a / 1E3); this.msaw()
    }, msbg: function (a, b, c, d, f) { b = this.msad(a, b, c, d, f); MouseStatsVisitorPlaybacks.msdu({ type: 28, x: a, y: 0, target: f ? f : b.id, value: JSON.stringify(b) }) }, msad: function (a, b, c, d, f) {
        var e = {}; e.action = a; e.id = "string" == typeof b ? b : this.msdb(b, "data-ms-id"); switch (a) {
            case 1: e.parent = f; break; case 2: this.msbq(b); e.html = this.msbc(b.innerHTML); this.msbn(b);
                break; case 3: this.msbq(b.parent); e.html = this.msbc(this.msat(b)); this.msbn(b.parent); e.pos = this.msar(b); e.id = f; break; case 4: case 5: e.attrName = c; e.attrValue = d; break; case 6: e.attrName = c
        } return e
    }, msat: function (a) { if (!a || !a.tagName) return ""; if (a.outerHTML) return a.outerHTML; var b = document.createElement("div"); b.appendChild(a.cloneNode(!0)); return b.innerHTML }, msbq: function (a) {
        a = ("undefined" == typeof a ? document : a).getElementsByTagName("*"); for (var b = a.length; b--;) {
            var c = a[b], d = this.msdb(c, "data-ms-id");
            d && c.setAttribute("data-ms-id", d)
        }
    }, msbn: function (a) { a = ("undefined" == typeof a ? document : a).getElementsByTagName("*"); for (var b = a.length; b--;) { var c = a[b]; c.getAttribute("data-ms-id") && c.removeAttribute("data-ms-id") } }, msbd: function (a) { var b = document.createElement("div"); b.innerHTML = a; return b }, msbc: function (a) {
        a = this.msbd(a); for (var b = a.getElementsByTagName("*"), c = b.length; c--;) {
            for (var d = b[c], f = d.tagName.toString().toUpperCase(), e = [], h = 0, g = d.attributes, m = g.length; h < m && !(h >= g.length) ; h++) {
                var k = g.item(h).nodeName.toLowerCase();
                this.msah(d, k) || -1 !== k.indexOf("data-ms-id") || e.push(k)
            } for (h = 0; h < e.length; h++) d.removeAttribute(e[h]); "SCRIPT" !== f && "NOSCRIPT" !== f || d.parentNode.removeChild(d)
        } a = a.innerHTML; a = a.replace(/\s+/g, " ").replace(/\x3c!--[\s\S]*?--\x3e/g, " "); return a = a.replace(/\x3c!-- StartMouseStatsHide ([\s\S]*?)--\x3e([\s\S]*?)\x3c!-- EndMouseStatsHide --\x3e/g, "\x3c!--MShide--\x3e")
    }, msdl: function () {
        function a(a) {
            var b = document.getElementsByTagName(a)[0].attributes; a = "<" + a; for (var c = 0, h = b.length; c < h; c++) a += " " + b[c].name +
            '="' + b[c].value + '"'; return a + ">"
        } function b(a) { a = "head" == a ? (document.head || document.getElementsByTagName("head")[0]).innerHTML : (document.body || document.getElementsByTagName("body")[0]).innerHTML; return MouseStatsVisitorPlaybacks.msbc(a) } this.msbq(); var c = function () { if (!document.doctype) return ""; var a = document.doctype; return "<!DOCTYPE " + a.name + (a.publicId ? ' PUBLIC "' + a.publicId + '"' : "") + (!a.publicId && a.systemId ? " SYSTEM" : "") + (a.systemId ? ' "' + a.systemId + '"' : "") + ">" }() + "\n" + a("html") + a("head") + b("head") +
        "</head>" + a("body") + b("body") + "</body></html>"; this.msbn(); return c
    }
}; MouseStatsVisitorPlaybacks.msdg();