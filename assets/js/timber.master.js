/*
SCRIPTS MADE BY THEMEMOUNTAIN: Swipe It, Timber, Avalanche Slider, Summit Lightbox, Snowbridge Parallax, Horizon, Retinize, Equalize, Counter
THESE PLUGINS ARE LICENSED UNDER ENVATO'S REGULAR/EXTENDED LICENSE SEPCIFICALLY FOR USE IN OUR PRODUCTS. REDISTRIBUTON PROHIBITED!
For individual licenses please visit thememountain.com.
*/
/**
 *	Swipe Plugin
 *	Version: 1.0
 */
! function (t) {
    "use strict";
    t.fn.swipeIt = function (i) {
        var e = t.extend({
            swipeThreshold: 40,
            scrollThreshold: 10,
            draggable: !1,
            preventTouchOn: "",
            onSwipeMove: null,
            onSwipeEnd: null
        }, i),
            a = this,
            n = 0,
            s = 0,
            o = e.swipeThreshold,
            r = "ontouchend" in document,
            d = r ? "touchstart" : "pointerdown",
            c = r ? "touchmove" : "pointermove",
            l = r ? "touchend" : "pointermove",
            u = function (t) {
                t.stopPropagation(), n = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t, a.on(c, h)
            },
            h = function (i) {
                if (!t(i.target).closest(e.preventTouchOn).length || "" === e.preventTouchOn) {
                    if (s = i.originalEvent.touches ? i.originalEvent.touches[0].pageX : i, Math.abs(n - s) > e.scrollThreshold && i.preventDefault(), e.draggable) {
                        var o;
                        o = -(n - s), e.onSwipeMove(o)
                    }
                    if (s === n) return !1;
                    a.on(l, p)
                }
            },
            p = function () {
                var t;
                Math.abs(s - n) > o && (t = s > n ? "left" : "right", e.onSwipeEnd(t)), a.off(c, h), a.off(l, p)
            };
        return a.on(d, u), this
    }
}(jQuery);
/**
 *	Timber
 *	Version: 1.2.6
 */
$(document).ready(function () {
    "use strict";
    var a, b = ea ? "touchstart" : "click",
        c = ".wrapper",
        d = ".element-reveal-left",
        e = ".element-reveal-right",
        f = ".side-navigation-wrapper",
        g = ".side-nav-show, a.side-nav-show",
        h = ".side-nav-hide a",
        i = ".no-scroll",
        j = ".element-show-left",
        k = ".element-show-right",
        l = "easeInOutQuint",
        m = {
            init: function () {
                if (!$(f).length) return !1;
                $("body").data("aux-nav", !1);
                var a = $(f).data("animation") ? $(f).data("animation") : "no-transition",
                    n = $(f).is("[data-no-scrollbar]") ? "no-scrollbar" : "scrollbar";
                "no-transition" === a && $(c).addClass(a + "-reset"), $(c).addClass("reveal-side-navigation"), $(f).addClass(a + "-reset " + n);
                var o = $(f).hasClass("enter-right") ? "right" : "left";
                _ ? p = "left" === o ? d : e : (p = "left" === o ? j : k, $(f).addClass("hide"));
                var p = p.split(".").join("");
                i = i.split(".").join(""), $(g).on(b, function (d) {
                    if (d.preventDefault(), $(f).hasClass("active")) m.closeNav(p, a);
                    else {
                        A.state(!0), y.state(!0), $("body").data("aux-nav", !0), $("html, body").addClass(i);
                        var e = $(window).scrollTop();
                        ea || $(".header-inner").css({
                            top: e + "px"
                        }), _ ? ($(c).addClass(p + " inactive " + a).css({
                            transitionTimingFunction: da[l]
                        }), $(f).addClass("active " + a).css({
                            transitionTimingFunction: da[l]
                        })) : ($(c).addClass(p), $(f).removeClass("hide").addClass("active")), $(c).on(ca, function (c) {
                            return c.target === $(this)[0] && (c.stopPropagation(), $(this).off(ca), void $(".reveal-side-navigation").on(b, function (c) {
                                $(".reveal-side-navigation").off(b), m.closeNav(p, a)
                            }))
                        })
                    }
                }), $(h).on(b, function (c) {
                    c.preventDefault(), $(".reveal-side-navigation").off(b), m.closeNav(p, a)
                }), $(window).on("resize", function () {
                    $("body").data("aux-nav") ? y.state(!0) : y.state(!1)
                })
            },
            closeNav: function (a, b) {
                _ ? (A.state(!0), $(c).removeClass(a + " " + b), $(f).removeClass(b), "no-transition" === b && ($("html, body").removeClass(i), $(c).removeClass("inactive"), $(f).removeClass("active")), $(c).on(ca, function (a) {
                    return a.target === $(this)[0] && (a.stopPropagation(), y.state(!1), $(this).off(ca), $("html, body").removeClass(i), $(c).removeClass("inactive"), $(f).removeClass("active"), void (ea || $(".header-inner").css({
                        top: 0
                    })))
                })) : ($(c).removeClass(a + " " + b), $(f).addClass("hide").removeClass("active")), $("body").data("aux-nav", !1)
            }
        },
        n = ".overlay-navigation-wrapper",
        o = ".overlay-navigation-inner",
        p = ".overlay-nav-show a, a.overlay-nav-show",
        q = ".overlay-nav-hide a, .one-page-nav .overlay-navigation .scroll-link",
        r = ".no-scroll",
        s = "easeInOutQuint",
        t = {
            init: function () {
                if (!$(n).length) return !1;
                var a = $(n).data("animation") ? $(n).data("animation") : "no-transition",
                    c = $(n).is("[data-no-scrollbar]") ? "no-scrollbar" : "scrollbar";
                $(n).addClass(a + "-reset " + c), r = r.split(".").join(""), $(p).on(b, function (b) {
                    b.preventDefault(), $(n).hasClass("active") ? t.closeNav(a) : ($("body").data("aux-nav", !0), $("html, body").addClass(r), _ ? $(n).addClass("active " + a).css({
                        transitionTimingFunction: da[s]
                    }) : $(n).addClass("active"), $(n).on(ca, function (a) {
                        return a.target === $(this)[0] && (a.stopPropagation(), y.state(!0), void $(this).off(ca))
                    }))
                }), $(o).on(b, function (b) {
                    b.target === this && t.closeNav(a)
                }), $(q).on(b, function (b) {
                    b.preventDefault(), t.closeNav(a)
                }), $(window).on("resize", function () {
                    $("body").data("aux-nav") ? y.state(!0) : y.state(!1)
                })
            },
            closeNav: function (a) {
                _ ? ($(n).removeClass(a), "no-transition" === a && ($("html, body").removeClass(r), $(n).removeClass("active")), $(n).on(ca, function (a) {
                    return a.target === $(this)[0] && (a.stopPropagation(), y.state(!1), $(this).off(ca), $("html, body").removeClass(r), void $(n).removeClass("active"))
                })) : $(n).removeClass("active").css({
                    top: "-100%"
                }), $("body").data("aux-nav", !1)
            }
        },
        u = ".side-navigation-wrapper, .overlay-navigation-wrapper",
        v = ".sub-menu",
        w = ".contains-sub-menu",
        x = {
            init: function () {
                function a(a) {
                    return e = $(a).siblings(v).children(), f = 0, e.each(function () {
                        f += $(this).outerHeight()
                    }), f
                }

                function c(a) {
                    $(a).parents().eq(2).is("nav") ? $(a).closest(u).find(v).css({
                        height: 0
                    }).removeClass("open") : $(a).closest("li").find(v).css({
                        height: 0
                    }).removeClass("open")
                }

                function d(a, b) {
                    $(a).parents(v).each(function () {
                        var a = parseFloat($(this).css("height")),
                            c = b ? a - f : a + f;
                        $(this).css({
                            height: c + "px"
                        })
                    })
                }
                var e, f, g = 0;
                $($(u).find(".current").children(w).get().reverse()).each(function () {
                    f = a($(this)), g += f, $(this).siblings(v).css({
                        height: g + "px"
                    }).addClass("open")
                }), $(u).find(w).each(function () {
                    $(this).on(b, function (b) {
                        return b.preventDefault(), !$(this).siblings(v).data("animating") && ($(this).siblings(v).data("animating", !0), $(this).parent().hasClass("current") ? $(this).closest("ul").find("li").removeClass("current") : ($(this).parents().eq(2).is("nav") && $(u).find("nav").find("li").removeClass("current"), $(this).parent().addClass("current")), A.state(!0), f = a($(this)), $(this).siblings(v).hasClass("open") ? (c($(this)), d($(this), !0)) : (c($(this)), $(this).siblings(v).css({
                            height: f + "px"
                        }).addClass("open"), d($(this), !1)), void $(this).siblings(v).on(ca, function (a) {
                            $(this).data("animating", !1)
                        }))
                    })
                })
            }
        },
        y = {
            state: function (a) {
                ea ? a ? $("body").addClass("aux-navigation-active") : $("body").removeClass("aux-navigation-active") : a ? $("body").addClass("aux-navigation-active") : $("body").data("aux-nav") || $("body").removeClass("aux-navigation-active")
            }
        },
        z = ".header, .header-inner, .logo, .logo a, .header .navigation",
        A = {
            init: function () {
                ea || $(window).on("scroll", function () {
                    A.state(!0)
                }), $(window).on("resize", function () {
                    A.state(!1)
                })
            },
            state: function (a) {
                a ? $(z).removeClass("no-transition") : $(z).addClass("no-transition")
            }
        },
        B = 300,
        C = ".scroll-to-top",
        D = 600,
        E = {
            init: function () {
                $(window).on("scroll", function () {
                    return !$(C).is("[data-no-hide]") && void ($(this).scrollTop() > B ? $(C).addClass("active") : $(C).removeClass("active"))
                }), $(C).on(b, function (a) {
                    a.preventDefault(), E.scrollUp()
                })
            },
            scrollUp: function () {
                $("html, body").animate({
                    scrollTop: 0
                }, D)
            }
        },
        F = ".header",
        G = ".tabs",
        H = ".tab-trigger-click",
        I = ".accordion",
        J = "icon-plus",
        K = "icon-minus",
        L = ".accordion-content",
        M = ".accordion-trigger-click",
        N = ".box.dismissable",
        O = 300,
        P = "swing",
        Q = ".dropdown",
        R = ".thumbnail",
        S = ".overlay-info, img",
        T = ".overlay-info",
        U = 400,
        V = "easeInOutQuint",
        W = ".background-image-container",
        X = {
            init: function () {
                X.tabs(), X.accordions(), X.dismissable(), X.dropdown(), X.radioInputs(), X.checkboxes(), X.rollovers(), X.thumbnailRatio(), X.setAsBackground()
            },
            tabs: function () {
                $(G).each(function () {
                    var a = $(this).children(".tab-nav").find("li > a");
                    $(this).find(".tab-panes > .active").addClass("animate-in"), a.each(function () {
                        $(this).on(b, function () {
                            if ($(this).parent().hasClass("disabled")) return !1;
                            var a = $(this).attr("href"),
                                b = $(this).closest(".tabs").find(a);
                            if ($(this).closest(".tab-nav").find(".active").removeClass("active"), $(this).parent().addClass("active"), $(this).closest(".tabs").children(".tab-panes").children(".active").removeClass("active animate-in"), b.addClass("active"), b.find(".tm-slider-container").length > 0) {
                                var c = b.find(".tm-slider-container").data("avalancheSlider");
                                c.resizeSlider()
                            }
                            var d = null;
                            return clearTimeout(d), d = setTimeout(function () {
                                b.addClass("animate-in")
                            }, 50), !1
                        }), $(this).parent().hasClass("active") && $(this).closest(".tabs").find($(this).attr("href")).addClass("active")
                    })
                }), $(H).each(function () {
                    $(this).on("click", function () {
                        var a = $(this).data("target-tab");
                        return $(G).find(a).parent().removeClass("disabled"), $(G).find(a).trigger("click"), !1
                    })
                })
            },
            accordions: function () {
                $(I).each(function () {
                    var a = $(this).children().children().children("a");
                    a.each(function () {
                        $(this).closest(I).is("[data-toggle-icon]") && ($(this).find("span").length || $(this).parent().hasClass("active") ? !$(this).find("span").length && $(this).parent().hasClass("active") && $(this).prepend('<span class="' + K + '" />') : $(this).prepend('<span class="' + J + '" />')), $(this).on(b, function () {
                            if ($(this).parent().hasClass("disabled")) return !1;
                            var a = $(this),
                                b = a.attr("href"),
                                c = a.closest(I).find(b),
                                d = a.closest(I).find(L).parent();
                            a.closest(I).children().children(".active").children("div").each(function () {
                                var a = $(this).children().outerHeight();
                                $(this).addClass("no-transition").css({
                                    height: a + "px"
                                })
                            });
                            var e = null;
                            return clearTimeout(e), e = a.parent().hasClass("active") ? setTimeout(function () {
                                a.closest(I).is("[data-toggle-multiple]") ? a.siblings(c).removeClass("no-transition").css({
                                    height: 0
                                }) : a.siblings("div").removeClass("no-transition").css({
                                    height: 0
                                }), a.parent().removeClass("active")
                            }, 50) : setTimeout(function () {
                                var b = a.siblings(c).find(L).outerHeight();
                                a.closest(I).is("[data-toggle-multiple]") || (d.removeClass("no-transition").css({
                                    height: 0
                                }), a.closest(I).children().children("li").removeClass("active")), a.parent().addClass("active"), a.siblings(c).removeClass("no-transition").css({
                                    height: b + "px"
                                })
                            }, 50), a.find("." + K).length ? a.find("." + K).removeClass(K).addClass(J) : a.find("." + J).length && (a.closest(I).is("[data-toggle-multiple]") || a.closest("ul").find("." + K).removeClass(K).addClass(J), a.find("." + J).removeClass(J).addClass(K)), !1
                        })
                    }), $(M).each(function () {
                        $(this).on("click", function () {
                            var a = $(this).data("target-accordion");
                            return $(I).find(a).parent().removeClass("disabled"), $(I).find(a).trigger("click"), !1
                        })
                    }), $(window).on("resize", function () {
                        $(I).each(function () {
                            $(this).children().children(".active").children("div").addClass("no-transition").css({
                                height: "auto"
                            })
                        })
                    })
                })
            },
            dismissable: function () {
                $(N).each(function () {
                    $(this).find(".close").length || $(this).prepend('<a href="" class="close icon-cancel" />'), $(this).find(".close").on(b, function (a) {
                        a.preventDefault(), _ ? $(this).parent().css({
                            transitionProperty: "opacity",
                            opacity: 0,
                            transitionDuration: O + "ms",
                            transitionTimingFunction: da[P]
                        }).on(ca, function (a) {
                            return a.stopPropagation(), a.target === $(this)[0] && void $(this).remove()
                        }) : $(this).parent().animate({
                            opacity: 0
                        }, U, P, function () {
                            $(this).remove()
                        })
                    })
                })
            },
            dropdown: function () {
                $(Q).each(function () {
                    $(this).children(".button, button").each(function () {
                        function a(a) {
                            return c = $(a).children(), d = 0, c.each(function () {
                                d += $(this).outerHeight()
                            }), d
                        }
                        var c, d, e = $(this);
                        e.on(b, function (b) {
                            b.preventDefault(), $(Q).children(".button, button").removeClass("active");
                            var c = $(this).parent().children(".dropdown-list");
                            if ($(this).parent().hasClass("disabled")) return !1;
                            if ($(this).parent().hasClass("list-up") && (d = $(Q).children(".button, button").outerHeight() + a(c) + 8, c.css({
                                transition: "none",
                                transform: "translateY(" + -d + "px )"
                            })), $(".dropdown-list").not(c).removeClass("active"), c.hasClass("active")) c.removeClass("active"), $(this).removeClass("active");
                            else {
                                if (c.addClass("active"), $(this).addClass("active"), c.find("input").hasClass("set-focus")) {
                                    var e, g = c.find("input");
                                    clearTimeout(e), e = setTimeout(function () {
                                        g.focus()
                                    }, 50)
                                }
                                if (c.find(".dropdown-aux-close")) {
                                    var h = c.find(".dropdown-aux-close");
                                    h.on("click", function (a) {
                                        $(this).off("click"), a.preventDefault(), f()
                                    })
                                }
                            }
                            $(document).on("click.closeDropdown", function (a) {
                                $(a.target).closest(Q).length || f()
                            })
                        }), $(this).parent().children(".dropdown-list").find("li a").on(b, function (a) {
                            if (a.preventDefault(), $(".dropdown-list").removeClass("active"), $(".dropdown-list").find(".active").removeClass("active"), $(this).addClass("active"), $(this).closest(".dropdown").is("[data-update-selection]")) {
                                var b = $(this).text();
                                $(this).closest(".dropdown").find(e).children('span:not([class*="icon-"])').text(b)
                            }
                        }), ea || $(window).on("scroll", function () {
                            f()
                        }), $(F).find(".navigation > ul > li > a").mouseenter(function () {
                            f()
                        });
                        var f = function () {
                            $(Q).each(function () {
                                $(this).find(".button, button").removeClass("active"), $(this).find(".dropdown-list").removeClass("active")
                            }), $(document).off("click.closeDropdown")
                        }
                    })
                })
            },
            radioInputs: function () {
                $("input:radio").each(function () {
                    var a = !!$(this).is("[data-toggle-content]");
                    if (a) {
                        var b = $(this).attr("name");
                        $('input[name="' + b + '"]').on("change", function () {
                            if ($(this).is("[data-toggle-content]")) {
                                var a = $(this).data("target-content");
                                c($(this)), $(a).addClass("active show")
                            } else c($(this))
                        });
                        var c = function (a) {
                            $(a).siblings("[data-toggle-content]").each(function () {
                                var a = $(this).data("target-content");
                                $(a).removeClass("active show")
                            })
                        }
                    }
                })
            },
            checkboxes: function () {
                $("input:checkbox").each(function () {
                    var a = !!$(this).is("[data-toggle-content]");
                    a && $(this).on("change", function () {
                        var a = $(this).data("target-content");
                        $(a).toggleClass("active show")
                    })
                })
            },
            rollovers: function () {
                _ ? $(R).each(function () {
                    var a, b = $(this).data("hover-speed") ? $(this).data("hover-speed") : U,
                        c = $(this).data("hover-easing") ? $(this).data("hover-easing") : V,
                        d = $(this).data("hover-bkg-opacity") ? $(this).data("hover-bkg-opacity") : 1;
                    if ($(this).data("hover-bkg-color")) {
                        var e = $(this).data("hover-bkg-color");
                        e = e.replace("#", "");
                        var f = parseInt(e.substring(0, 2), 16),
                            g = parseInt(e.substring(2, 4), 16),
                            h = parseInt(e.substring(4, 6), 16);
                        a = "rgba( " + f + "," + g + "," + h + "," + d / 1 + " )"
                    } else a = $(this).find(T).css("background-color");
                    if ($(this).find(S).css({
                        transitionDuration: b + "ms",
                        transitionTimingFunction: da[c]
                    }), $(this).is("[data-gradient]")) {
                        var i = $(this).data("gradient-spread") ? $(this).data("gradient-spread") : "50%";
                        $(this).find(T).css({
                            backgroundImage: "linear-gradient(to top, " + a + " 0%, transparent " + i + ")",
                            backgroundColor: "transparent"
                        })
                    } else $(this).find(T).css({
                        backgroundColor: a
                    })
                }) : $(R).find(".overlay-link").mouseenter(function () {
                    $(this).find(T).css({
                        opacity: 0
                    }).stop().animate({
                        opacity: 1
                    }, U, V)
                }).mouseleave(function () {
                    $(this).find(T).stop().animate({
                        opacity: 0
                    }, U, V)
                })
            },
            thumbnailRatio: function () {
                $("body").hasClass("ie-be-11") && $(window).on("resize", function () {
                    $(R).each(function () {
                        if ($(this).find(".caption-over-outer").length) {
                            var a = $(this).find("img, video"),
                                b = a.attr("width"),
                                c = a.attr("height"),
                                d = $(this).find("img, video").width(),
                                e = b >= c ? b / c : c / b,
                                f = b >= c ? d / e : d * e;
                            $(this).find(".caption-over-outer").css({
                                opacity: 1
                            }), $(this).css({
                                height: f + "px"
                            })
                        }
                    })
                }).resize()
            },
            setAsBackground: function () {
                $(W).each(function () {
                    var a = $(this).children("img").attr("src");
                    $(this).addClass("background-cover").css({
                        "background-image": "url(" + a + ")"
                    })
                })
            }
        },
        Y = document.body || document.documentElement,
        Z = Y.style,
        _ = void 0 !== Z.transition || void 0 !== Z.WebkitTransition || void 0 !== Z.MozTransition || void 0 !== Z.MsTransition || void 0 !== Z.OTransition,
        aa = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var ba in aa) void 0 !== Z[aa[ba]] && (a = "-" + aa[ba].replace("Transform", "").toLowerCase());
    var ca = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
    _ && (document.getElementsByTagName("body")[0].className += " transition-support");
    var da = {
        linear: "cubic-bezier(0, 0, 1, 1)",
        swing: "cubic-bezier(0.42, 0, 0.58, 1)",
        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
        easeInOutExpo: "cubic-bezier(1,0,0,1)",
        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
        easeInSine: "cubic-bezier(.47,0,.745,.715)",
        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
    };
    window.onpageshow = function (a) {
        a.persisted && $("body").addClass("page-fade-reset").removeClass("page-fade-out")
    };
    var ea = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (ea = !0, document.getElementsByTagName("body")[0].className += " mobile");
    var fa = "WebkitAppearance" in document.documentElement.style;
    fa && (document.getElementsByTagName("body")[0].className += " webkit");
    var ga = /constructor/i.test(window.HTMLElement);
    ga && (document.getElementsByTagName("body")[0].className += " safari-browser");
    var ha = document.all && document.addEventListener || "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
    ha && (document.getElementsByTagName("body")[0].className += " ie-browser");
    var ia = document.all && document.addEventListener;
    ia && (document.getElementsByTagName("body")[0].className += " ie-be-11", $(".flex").removeClass("flex").addClass("equalize")), m.init(), t.init(), x.init(), A.init(), E.init(), X.init()
});
/**
 *	Avalanche Slider
 *	Version: 1.3.9
 */
! function (a, b, c, d) {
    "use strict";

    function e(b) {
        b.find(".tms-caption").each(function () {
            function b() {
                a.each(d, function (a, b) {
                    b = b.split(":");
                    var d = b[0],
                        e = b[1];
                    "opacity" === d && c.data("o", e), "scale" === d && c.data("s", e), "easing" === d && c.data("e", e), "transX" === d && c.data("tx", parseFloat(e)), "transY" === d && c.data("ty", parseFloat(e)), "transZ" === d && c.data("tz", parseFloat(e)), "rotateX" === d && c.data("rx", parseFloat(e)), "rotateY" === d && c.data("ry", parseFloat(e)), "rotateZ" === d && c.data("rz", parseFloat(e)), "transOrigX" === d && c.data("ox", e), "transOrigY" === d && c.data("oy", e), "duration" === d && c.data("du", parseFloat(e)), "delay" === d && c.data("de", parseFloat(e))
                })
            }
            var c = a(this),
                d = String(c.data("animate-in")).split(";");
            c.is("[data-no-scale]") ? c.addClass("no-scale") : c.addClass("scale"), c.parent().addClass("tms-perspective"), a.inArray("preset", String(d).split(":")) != -1 ? d.filter(function (c) {
                if ("preset" === c.split(":")[0]) {
                    d.splice(a.inArray(c, d), 1);
                    var e = String(K[c.split(":")[1]]).split(";");
                    d = a.merge(e, d).filter(Boolean), b()
                }
            }) : b(), c.data("w", parseFloat(c.css("width"))), c.data("h", parseFloat(c.css("height"))), c.data("fs", parseFloat(c.css("font-size"))), c.data("lh", parseFloat(c.css("line-height"))), c.data("pt", parseFloat(c.css("padding-top"))), c.data("pr", parseFloat(c.css("padding-right"))), c.data("pb", parseFloat(c.css("padding-bottom"))), c.data("pl", parseFloat(c.css("padding-left"))), c.data("mt", parseFloat(c.css("margin-top"))), c.data("mr", parseFloat(c.css("margin-right"))), c.data("mb", parseFloat(c.css("margin-bottom"))), c.data("ml", parseFloat(c.css("margin-left"))), c.data("bt", parseFloat(c.css("border-top-width"))), c.data("br", parseFloat(c.css("border-right-width"))), c.data("bb", parseFloat(c.css("border-bottom-width"))), c.data("bl", parseFloat(c.css("border-left-width")))
        })
    }

    function f(b, d, e) {
        var f = b.find(".tms-slide"),
            h = 0;
        f.each(function () {
            var f = a(this),
                i = f.find("img").length,
                j = f.find("iframe, video").length;
            f.children(".tms-caption").length;
            u(f, d);
            var k = a('<div class="tm-loader"><svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>');
            if (i > 0 && (d.lazyLoad ? k.appendTo(f) : a(b).find(".tm-loader").length || k.appendTo(b)), j) {
                L && f.is("[data-video-bkg]") && f.children("video").css({
                    display: "none"
                });
                var l = f.find("iframe, video");
                z(b, l, d, e), s(f, d), r(b, d)
            }
            i ? f.find("img").each(function (b, k) {
                if (k = a(this).attr("srcset") && !a("body").hasClass("ie-browser") ? a(this).prop("currentSrc") : a(this).data("src") ? a(this).data("src") : a(this).attr("src"), !a(this).attr("srcset")) {
                    var l = k,
                        m = k.substr(k.lastIndexOf("."));
                    (c.isRetinaDevice() && d.retinaSupport || c.isRetinaDevice() && a(this).is("[data-retina]")) && (!L && !d.retinaSupportMobile || L && d.retinaSupportMobile) && (k.match(/\.(svg)/i) || (k = a(this).data("retina") ? a(this).data("retina") : k.replace(m, d.retinaSuffix + m)))
                }
                if (f.data("overlay-bkg-color") && !f.find(".tms-overlay").length) {
                    var n = f.data("overlay-bkg-color").replace("#", ""),
                        o = f.data("overlay-bkg-opacity") ? f.data("overlay-bkg-opacity") : .5,
                        p = parseInt(n.substring(0, 2), 16),
                        q = parseInt(n.substring(2, 4), 16),
                        r = parseInt(n.substring(4, 6), 16),
                        s = "rgba( " + p + "," + q + "," + r + "," + o / 1 + " )",
                        t = f.data("image-wrapper") ? f.find("." + f.data("image-wrapper")) : f;
                    a('<div class="tms-overlay" />').css({
                        backgroundColor: s,
                        opacity: 0
                    }).appendTo(t)
                }
                a(this).css({
                    opacity: 0
                }).attr("src", k).one("error", function () {
                    a(this).attr("src", l), console.log("Error src:" + k)
                }).one("load", function () {
                    f.css({
                        transition: "none",
                        opacity: 0
                    }), j || f.addClass("img-loaded"), a(this).data("loaded", !0).css({
                        opacity: 1
                    }), b++, b === i && (h++, g(f, h, d, e))
                }).each(function () {
                    this.complete && a(this).load()
                })
            }) : (h++, r(b, d), g(f, h, d, e))
        })
    }

    function g(b, c, d, e) {
        var f = b.closest(".tm-slider-container"),
            g = f.find(".tms-slides"),
            i = f.find("li.active"),
            j = null,
            k = null,
            l = !(!b.is("[data-video-bkg-youtube]") && !b.is("[data-video-bkg-vimeo]"));
        if (b.find(".no-transition").css({
            visibility: "visible"
        }), f.data("setup", !0), f.data("first-load", !1), f.data("animate-first-slide", !0), b.is("[data-as-bkg-image]") || b.is("[data-video-bkg]") || l) {
            var n = b.children("img").attr("srcset") && !a("body").hasClass("ie-browser") ? b.children("img").prop("currentSrc") : b.children("img").attr("src");
            n = "undefined" != typeof n ? n : b.children("img").attr("src");
            var p = b.data("image-wrapper") ? b.data("image-wrapper") : b;
            b.data("image-wrapper") ? b.find("." + p).css({
                "background-image": "url(" + n + ")"
            }) : b.css({
                "background-image": "url(" + n + ")"
            }), b.children("img").hide()
        }
        if (0 === f.height() && !f.data("height") && b.hasClass("active")) {
            i.children("img").css({
                maxHeight: "none"
            });
            var q = i.children("img").height();
            f.data("refH", q), f.css({
                height: q + "px"
            }), i.children("img").css({
                maxHeight: "100%"
            })
        }
        if (s(b, d), r(f, d), d.carousel && !d.lazyLoad && (g.children().css({
            opacity: 1
        }), g.css({
            opacity: 0
        })), l || b.find("iframe, video").css({
            opacity: 1
        }), c === g.children().length && d.onLoadEnd && d.onLoadEnd(), d.lazyLoad || c !== g.children().length ? d.lazyLoad && 1 === c && (f.data("loaded", !0), d.autoAdvance && e.initSlideshow()) : (f.data("loaded", !0), d.autoAdvance && e.initSlideshow()), d.lazyLoad) {
            if ((b.find(".tm-loader").length && !l || L) && h(f, b, d), (b.is(i) || d.carouselVisible > 1) && b.find(".tms-caption").show(), !b.hasClass("active")) return !1;
            E ? (clearTimeout(k), k = setTimeout(function () {
                m(i, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", 1e3, 0, "easeIn", d)
            }, 50)) : b.animate({
                opacity: 1
            }), l && !L || (clearTimeout(j), j = setTimeout(function () {
                i.find(".tms-caption").length > 0 && o(i, d), i.find(".tms-content-scalable").length > 0 && a(".tms-content-scalable").css({
                    opacity: 1
                })
            }, 300))
        } else c === g.children().length && ((f.find(".tm-loader").length && !l || L) && h(f, b, d), i.find(".tms-caption").show(), d.carouselVisible > 1 && f.find(".tms-caption").show(), E ? d.carousel ? m(g, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", 1e3, 0, "easeIn", d) : m(i, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", 1e3, 0, "easeIn", d) : d.carousel ? g.animate({
            opacity: 1
        }) : i.animate({
            opacity: 1
        }), l && !L || (clearTimeout(j), j = setTimeout(function () {
            i.find(".tms-caption").length > 0 && o(i, d), i.find(".tms-content-scalable").length > 0 && a(".tms-content-scalable").css({
                opacity: 1
            })
        }, 300)), f.find(".tms-arrow-nav, .tms-pagination").css({
            display: "block"
        }))
    }

    function h(a, b, c) {
        var d = ".tm-loader";
        c.lazyLoad ? b.find(d).remove() : a.find(d).remove()
    }
    var i = function (d, g) {
        var h, i = a.extend({}, a.fn.avalancheSlider.tmsOpts, g),
            o = a(d),
            t = this,
            w = i.fulscreen ? a(c).width() : i.fullwidth ? i.scaleUnder : o.data("width") ? parseFloat(o.data("width")) : parseFloat(o.css("width")),
            x = i.fulscreen ? a(c).height() : o.data("height") ? parseFloat(o.data("height")) : parseFloat(o.css("height")),
            y = o.find(".tms-slides"),
            z = y.children("li:first-child").addClass("active"),
            B = [];
        if (y.children(".tms-slide").each(function (b) {
            b++, a(this).attr("id", "tms-slide-" + b), B.push(a(this).attr("id")), i.carousel || (E ? a(this).not(".active").css({
                transition: "none",
                transform: "translate3d( 100%, 0, 0)"
            }) : a(this).not(".active").css({
                left: "100%"
            }));
            var c = !!(a(this).is("[data-video-bkg]") || a(this).is("[data-video-bkg-youtube]") || a(this).is("[data-video-bkg-vimeo]"));
            (i.forceFit || a(this).is("[data-force-fit]") || c) && a(this).addClass("tms-forcefit"), c && a(this).addClass("tms-bkg-video"), a(this).is("[data-video-bkg-youtube]") && a(this).addClass("tms-bkg-video-youtube"), a(this).is("[data-video-bkg-vimeo]") && a(this).addClass("tms-bkg-video-vimeo")
        }), i.lazyLoad || z.css({
            opacity: 0
        }), i.scaleUnder = o.data("scale-under") ? o.data("scale-under") : i.scaleUnder, i.scaleMinHeight = o.data("scale-min-height") ? o.data("scale-min-height") : i.scaleMinHeight, i.animation = o.data("animation") ? o.data("animation") : i.animation, h = i.animation, i.easing = o.data("easing") ? o.data("easing") : i.easing, i.speed = o.data("speed") ? o.data("speed") : i.speed, i.carousel = o.data("carousel") ? o.data("carousel") : i.carousel, i.carouselVisible = o.data("carousel-visible-slides") ? o.data("carousel-visible-slides") : i.carouselVisible, i.carouselVisible = i.carouselVisible > y.children().length ? y.children().length : i.carouselVisible, i.showProgressBar = !o.is('[data-progress-bar="false"]') && i.showProgressBar, i.autoAdvance = !!o.is("[data-auto-advance]") || i.autoAdvance, i.interval = o.data("auto-advance-interval") ? o.data("auto-advance-interval") : i.interval, i.pauseOnHover = !o.is('[data-pause-on-hover="false"]') && i.pauseOnHover, i.navArrows = !o.is('[data-nav-arrows="false"]') && i.navArrows, i.navPagination = !o.is('[data-nav-pagination="false"]') && i.navPagination, i.navShowOnHover = !o.is('[data-nav-show-on-hover="false"]') && i.navShowOnHover, i.navKeyboard = !o.is('[data-nav-keyboard="false"]') && i.navKeyboard, (o.is("[data-nav-dark]") || z.is("[data-nav-dark]")) && (o.addClass("tms-nav-dark"), o.is("[data-featured-slider]") && a("header").addClass("nav-dark")), i.fullscreen && (o.css({
            top: 0,
            left: 0
        }).addClass("tms-fullscreen"), i.carouselVisible = 1, i.fsUseHeightOf = i.fsUseHeightOf || o.data("fs-use-height") ? i.fsUseHeightOf && !o.data("fs-use-height") ? i.fsUseHeightOf : o.data("fs-use-height") : "", i.fsUseHeightOf = i.fsUseHeightOf ? "parent" === i.fsUseHeightOf ? o.parent() : o.closest("." + i.fsUseHeightOf) : ""), i.parallax = !!o.is("[data-parallax]") || i.parallax, i.parallaxSpeed = o.data("parallax-speed") ? o.data("parallax-speed") : i.parallaxSpeed, i.parallaxScale = !!o.is("[data-parallax-scale-in]") || i.parallaxScale, i.parallaxFadeOut = !!o.is("[data-parallax-fade-out]") || i.parallaxFadeOut, i.captionScaling || o.addClass("tms-caption-no-scaling"), !i.carousel && i.carouselVisible && (i.carouselVisible = 1), i.carouselVisible > 1 && (i.animation = "slide"), i.carousel && o.addClass("tms-carousel"), i.adaptiveHeight && o.addClass("tms-scalable-height"), i.autoPlay = !o.is('[data-video-auto-play="false"]') && i.autoPlay, i.replayOnEnd = !o.is('[data-replay-on-end="false"]') && i.replayOnEnd, i.nextSlideOnEnd = !!o.is("[data-next-slide-on-end]") || i.nextSlideOnEnd, i.muteBkgVideo = !!o.is("[data-mute-video]") || i.muteBkgVideo, L && (i.autoPlay = !1, i.useVideoAPI = !1), i.navShowOnHover && o.addClass("show-on-hover"), i.navArrows && y.children().length > 1) {
            var C = a('<a href="#" />').attr("id", "tms-prev").addClass("tms-arrow-nav").appendTo(o),
                D = a('<a href="#" />').attr("id", "tms-next").addClass("tms-arrow-nav").appendTo(o);
            C.each(function () {
                a(this).on("click", function (a) {
                    a.preventDefault(), i.autoAdvance && o.data("loaded") && t.resetSlideshow(), t.prevSlide()
                })
            }), D.each(function () {
                a(this).on("click", function (a) {
                    a.preventDefault(), i.autoAdvance && o.data("loaded") && t.resetSlideshow(), t.nextSlide()
                })
            }), i.lazyLoad && o.addClass("lazyload").find(".tms-arrow-nav").css({
                display: "block"
            })
        }
        if (i.navPagination && y.children().length > 1) {
            for (var F = a("<div>").addClass("tms-pagination").appendTo(o), G = 1; G < y.children().length + 1; G++) o.find(F).append('<a href="#" id="tms-pagination-' + G + '" data-index="' + G + '" class="tms-bullet-nav" />');
            var H = "bullets" === i.paginationType ? o.find(".tms-bullet-nav") : o.find(".tms-thumb-nav");
            H.each(function () {
                a(this).on("click", function () {
                    return z = o.find("li.active"), !a(this).hasClass("active") && (i.autoAdvance && o.data("loaded") && t.resetSlideshow(), parseFloat(a(this).data("index")) > parseFloat(F.find(".active").data("index")) ? t.slideTo(a(this).data("index"), "next") : t.slideTo(a(this).data("index"), "prev"), !1)
                })
            }), F.find(".tms-bullet-nav:first-child").addClass("active"), i.lazyLoad && F.css({
                display: "block"
            })
        }
        if (i.navKeyboard && y.children().length > 1) {
            var I = [];
            a(b).on("keydown", function (a) {
                return I[a.keyCode] = !0, (!I[37] || !I[39]) && void (I[37] ? (i.autoAdvance && o.data("loaded") && t.resetSlideshow(), i.lazyLoad ? t.prevSlide() : o.data("loaded") && t.prevSlide()) : I[39] && (i.autoAdvance && o.data("loaded") && t.resetSlideshow(), i.lazyLoad ? t.nextSlide() : o.data("loaded") && t.nextSlide()))
            }).on("keyup", function (a) {
                I[a.keyCode] = !1
            })
        }
        o.swipeIt({
            draggable: !1,
            onSwipeMove: function (a) { },
            onSwipeEnd: function (a) {
                "left" === a ? t.prevSlide() : t.nextSlide()
            }
        }), a(c).on("resize", function () {
            o.data("first-load") && (w = i.fulscreen ? a(c).width() : i.fullwidth ? i.scaleUnder : o.data("width") ? parseFloat(o.data("width")) : parseFloat(o.css("width")), x = i.fulscreen ? a(c).height() : o.data("height") ? parseFloat(o.data("height")) : parseFloat(o.css("height")), o.data("refW", w).data("refH", x).data("carousel-height", x));
            var b = o.find("li.active, li.target");
            i.carousel && i.carouselVisible > 1 ? y.children(".tms-slide").each(function () {
                s(a(this), i)
            }) : s(b, i), r(o, i), o.addClass("resizing"), A(function () {
                o.removeClass("resizing")
            }, 300, "resize")
        }), a(c).on("scroll", function () {
            o.parent().hasClass("tm-slider-parallax-container") && i.parallax ? (a(c).on("scroll", function () {
                j(o, i)
            }), k(o, i)) : !o.parent().hasClass("tm-slider-parallax-container") && i.parallax && console.log("Add the class tm-slider-parallax-container to slider parent");
            var b = o.find("li.active"),
                d = !!b.is("[data-pause-on-scroll]");
            !L && E && l(o.parent()) ? b && d && !b.hasClass("video-playing") && v(b, "play", i) : b && d && b.hasClass("video-playing") && v(b, "pause", i)
        }), o.data("setup", !1).data("loaded", !1).data("first-load", !0).data("scale-first", !0).data("transitioning", !1).data("refW", w).data("refH", x).data("carousel-height", x), e(o), r(o, i), i.onSetup && i.onSetup(), t.resizeSlider = function () {
            var a = o.find("li.active, li.target");
            s(a, i), r(o, i)
        };
        var K, M, N, O, P, Q, R, S = null,
            T = null;
        t.initSlideshow = function () {
            return !(K || y.children().length < 2) && (i.autoAdvance = !0, !L && i.pauseOnHover && (y.on("mouseleave ", t.resumeSlideshow), y.on("mouseenter ", t.pauseSlideshow)), i.showProgressBar && (R = a("<div>").addClass("tms-progress-bar").appendTo(o)), t.startSlideshow(), U(i.interval), M = (new Date).getTime(), P = i.interval, void (i.onSlideshowStart && i.onSlideshowStart()))
        }, t.startSlideshow = function (a) {
            a = a ? O : i.interval, K = setInterval(function () {
                a !== i.interval && (clearInterval(K), a = i.interval, P = i.interval, t.startSlideshow()), M = (new Date).getTime(), "undefined" != typeof R && R.css({
                    transition: "none",
                    width: "0px"
                }), U(i.interval), t.nextSlide()
            }, a)
        }, t.pauseSlideshow = function () {
            return !(Q || !K) && (clearInterval(K), N = (new Date).getTime(), O = P - (N - M) < 50 ? 50 : P - (N - M), P = 0 === P ? i.interval : O, "undefined" != typeof R && R.stop().css({
                width: R.width() + "px"
            }), Q = !0, void (i.onSlideshowPause && i.onSlideshowPause()))
        }, t.resumeSlideshow = function () {
            return !!Q && (clearInterval(K), o.data("ssPaused", !1), M = (new Date).getTime(), U(O), t.startSlideshow(O), void (Q = !1))
        }, t.resetSlideshow = function () {
            return !!K && (clearInterval(K), "undefined" != typeof R && R.css({
                transition: "none",
                width: "0px"
            }), U(i.interval), M = (new Date).getTime(), O = i.interval, P = i.interval, void t.startSlideshow(i.interval))
        }, t.endSlideshow = function () {
            return !!K && (clearInterval(K), K = "", Q = !1, !L && i.pauseOnHover && (y.off("mouseleave ", t.resumeSlideshow), y.off("mouseenter ", t.pauseSlideshow)), "undefined" != typeof R && R.remove(), void (i.onSlideshowEnd && i.onSlideshowEnd()))
        };
        var U = function (a) {
            return "undefined" != typeof R && void (E ? (clearTimeout(S), S = setTimeout(function () {
                R.css({
                    transitionProperty: "width",
                    width: "100%",
                    transitionDuration: a + "ms",
                    transitionTimingFunction: "ease"
                })
            }, 50)) : R.stop(!0, !0).animate({
                width: "100%"
            }, a))
        };
        t.nextSlide = function () {
            if (o.data("transitioning")) return !1;
            var b;
            z = o.find("li.active");
            var c = B[a.inArray(z.attr("id"), B) + 1];
            if (b = a.inArray(c, B) + 1 === 0 ? 1 : a.inArray(c, B) + 1, i.carousel && i.carouselVisible > 1) {
                var d = q(o, i);
                1 !== d && (b = b === y.children().length - (d - 2) ? 1 : a.inArray(c, B) + 1)
            }
            this.slideTo(b, "next")
        }, t.prevSlide = function () {
            if (o.data("transitioning")) return !1;
            var b;
            z = o.find("li.active");
            var c = B[a.inArray(z.attr("id"), B) - 1];
            if (b = a.inArray(c, B) + 1 === 0 ? y.children().length : a.inArray(c, B) + 1, i.carousel && i.carouselVisible > 1) {
                var d = q(o, i);
                b = b === y.children().length ? y.children().length - (d - 1) : a.inArray(c, B) + 1
            }
            this.slideTo(b, "prev")
        }, t.slideTo = function (b, c) {
            if (o.data("first-load", !1), o.data("scale-first", !1), c || (z = o.find("li.active")), o.data("transitioning") || b === a.inArray(z.attr("id"), B) + 1) return !1;
            p(o, b);
            var d = o.width(),
                e = o.height(),
                f = o.find("#tms-slide-" + b);
            f.addClass("target").css({
                zIndex: 2,
                opacity: 0 === g ? 0 : 1
            }), z.css({
                zIndex: 1
            }), i.animation = f.data("animation") ? f.data("animation") : h;
            var g = "slide" === i.animation || "slideLeftRight" === i.animation ? d : 0,
                k = "slideTopBottom" === i.animation ? e : 0;
            g *= i.carousel ? b - 1 : 1;
            var l = "scaleIn" === i.animation ? 1 - i.scaleFactor : "scaleOut" === i.animation ? 1 + i.scaleFactor : 1;
            o.is("[data-nav-dark]") || o.removeClass("tms-nav-dark"), f.is("[data-nav-dark]") ? (o.addClass("tms-nav-dark"), o.is("[data-featured-slider]") && a("header").addClass("nav-dark")) : o.is("[data-featured-slider]") && a("header").removeClass("nav-dark"), u(f, i), o.parent().hasClass("tm-slider-parallax-container") && i.parallax && j(o, i), !f.children("img").data("loaded") && f.children("img").length || s(f, i), r(o, i, f), c || (c = "next"), c = i.carousel ? 1 : "next" === c ? 1 : -1;
            var t = q(o, i);
            E ? i.carousel ? m(y, 1, -(g / t) * c, 0, 0, 0, 0, 0, 1, "50%", "50%", i.speed, 0, J[i.easing], i) : (f.css({
                opacity: 0,
                transition: "none",
                transform: "translate3d(" + g * c + "px," + k * c + "px, 0) scale3d(" + l + ", " + l + ", " + l + ")"
            }), clearTimeout(T), T = setTimeout(function () {
                m(z, 1, -g * c, -k * c, 0, 0, 0, 0, l, "50%", "50%", i.speed, 0, J[i.easing], i), m(f, 1, 0, 0, 0, 0, 0, 0, 1, "50%", "50%", i.speed, 0, J[i.easing], i)
            }, 50)) : i.carousel ? (o.data("transitioning", !0), y.animate({
                opacity: 1,
                left: -(g / t) * c + "px"
            }, i.speed, i.easingFallback, function () {
                n(o, i)
            })) : (o.data("transitioning", !0), f.css({
                left: d * c + "px",
                visibility: "visible"
            }).animate({
                opacity: 1,
                left: "0px"
            }, i.speed, i.easingFallback, function () {
                n(o, i)
            }), z.animate({
                left: -d * c + "px"
            }, i.speed, i.easingFallback))
        }, f(o, i, t)
    },
        j = function (b, d) {
            var e = a(c);
            e.data("animating") || (e.data("animating", !0), c.requestAnimationFrame(function () {
                k(b, d), e.data("animating", !1)
            }))
        },
        k = function (b, d) {
            var e = a(c),
                f = e.scrollTop(),
                g = (e.height(), b.parent().height() + b.parent().offset().top - f),
                h = f * d.parallaxSpeed,
                i = d.parallaxScale && b.is("[data-parallax-scale-in]") ? .75 * (2 - g / b.parent().height()) : 1;
            i = i < 1 ? 1 : i;
            var j = d.parallaxFadeOut ? g / b.parent().height() : 1,
                k = b.find("li.active"),
                m = k.find(".tms-content-inner > .row > .column");
            !L && E && l(b.parent()) ? b.is("[data-parallax]") && (b.css({
                position: "fixed",
                transform: "translate3d( 0, " + -h + "px, 0)"
            }).removeClass("out-of-view"), m.css({
                opacity: j.toFixed(2)
            }), m.css({
                transform: "scale3d( " + i + "," + i + ", 1 )"
            })) : b.is("[data-parallax]") && b.css({
                position: "relative"
            }).addClass("out-of-view")
        },
        l = function (b) {
            var d = a(c).scrollTop(),
                e = d + a(c).height(),
                f = b.offset().top,
                g = f + b.outerHeight();
            return e >= f && d <= g
        },
        m = function (b, c, d, e, f, g, h, i, j, k, l, m, o, p, q) {
            var r = b.closest(".tm-slider-container");
            (b.hasClass("active") || b.hasClass("target") || b.hasClass("tms-slides")) && (r.data("animate-first-slide") || r.data("transitioning", !0), q.onSlideBefore && q.onSlideBefore());
            var s = {};
            s.transform = "translate3d(" + d + "px, " + e + "px, " + f + "px) rotateX(" + g + "deg) rotateY(" + h + "deg) rotateZ(" + i + "deg) scale3d(" + j + ", " + j + ", " + j + ")", s.transitionProperty = H + ", opacity", s.transformOrigin = k + " " + l + " 0", s.transitionDuration = m + "ms", s.transitionDelay = o + "ms", s.transitionTimingFunction = p, s.visibility = "visible", s.opacity = c, b.css(s).on(I, function (b) {
                b.stopPropagation(), a(this).off(I), (a(this).hasClass("target") || a(this).hasClass("tms-slides") && !r.data("animate-first-slide")) && n(r, q), a(this).hasClass("tms-caption") && a(this).css({
                    transition: ""
                }), r.data("animate-first-slide") && r.data("animate-first-slide", !1)
            })
        },
        n = function (a, b) {
            a.data("transitioning", !1);
            var c = a.find("li.active"),
                d = a.find("li.target"),
                e = !(!d.is("[data-video-bkg-youtube]") && !d.is("[data-video-bkg-vimeo]"));
            return v(c, "pause", b), 1 === b.carouselVisible && c.find(".tms-caption").not(".no-transition").css({
                display: "none",
                visibility: "hidden"
            }), b.carousel || c.css({
                visibility: "hidden"
            }), c.removeClass("active"), d.removeClass("target").addClass("active"), c = d, b.onSlideAfter && b.onSlideAfter(), v(c, "play", b), !(b.carouselVisible > 1) && void (e && !L || o(c, b))
        },
        o = function (b, c) {
            b.find(".tms-caption").not(".no-transition").show().each(function () {
                var b = a(this),
                    d = a(this).data("ox") ? b.data("ox") : "50%",
                    e = a(this).data("oy") ? b.data("oy") : "50%",
                    f = a(this).data("du") ? b.data("du") : c.speed,
                    g = a(this).data("de") ? b.data("de") : 0,
                    h = a(this).data("e") ? J[b.data("e")] : J[c.easing],
                    i = null;
                E ? (clearTimeout(i), i = setTimeout(function () {
                    m(b, 1, 0, 0, 0, 0, 0, 0, 1, d, e, f, g, h)
                }, 500)) : (h = c.easingFallback, b.delay(g).css({
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, f, h))
            })
        },
        p = function (a, b) {
            var c = a.find(".tms-pagination");
            c.find(".active").removeClass("active"), c.find("#tms-pagination-" + b).addClass("active")
        },
        q = function (b, d) {
            var e;
            return e = a(c).width() >= 1024 && a(c).width() <= 1140 && d.carouselVisible >= 4 ? b.data("carousel-1140") ? b.data("carousel-1140") : 4 : a(c).width() >= 768 && a(c).width() <= 1023 && d.carouselVisible >= 3 ? b.data("carousel-1024") ? b.data("carousel-1024") : 3 : a(c).width() >= 480 && a(c).width() <= 767 && d.carouselVisible >= 2 ? b.data("carousel-768") ? b.data("carousel-768") : 2 : a(c).width() <= 479 ? b.data("carousel-480") ? b.data("carousel-480") : 1 : d.carouselVisible
        },
        r = function (b, c, d) {
            if (!c.carousel) return !1;
            var e, f, g = b.find(".tms-slides"),
                h = b.find("li.active"),
                i = h.index(),
                j = b.find(".tms-pagination"),
                k = g.children().length,
                l = q(b, c),
                m = b.width() / l,
                n = 0,
                o = null;
            g.children().each(function (b) {
                c.carouselVisible = 0 === c.carouselVisible ? 1 : c.carouselVisible, a(this).css({
                    width: m + "px",
                    opacity: 1,
                    visibility: "visible"
                }), n = n > a(this).outerHeight() ? n : a(this).outerHeight()
            }), 2 === l && i > g.children().length - 2 ? (e = g.children().length - 1, f = !0) : 3 === l && i > g.children().length - 3 ? (e = g.children().length - 2, f = !0) : i > g.children().length - l ? (e = g.children().length - l + 1, f = !0) : (e = i, f = !1), j.children().hide().slice(0, g.children().length - l + 1).show(), f && (h.removeClass("active"), g.find("li:nth-child(" + e + ")").addClass("active"), p(b, e)), E ? (b.data("transitioning") || g.css({
                width: m * k + "px",
                transition: "none",
                transform: "translate3d(" + -(m * e) + "px, 0, 0)"
            }), clearTimeout(o), o = setTimeout(function () {
                g.css({
                    transitionProperty: "opacity, " + H,
                    transitionDuration: c.speed + "ms"
                })
            }, 50)) : g.css({
                width: m * k + "px",
                left: -(m * e) + "px"
            })
        },
        s = function (b, d) {
            var e = b.closest(".tm-slider-container, .featured-media"),
                f = e.parent().width(),
                g = d.fsUseHeightOf ? d.fsUseHeightOf.height() : a(c).height(),
                h = e.data("refW"),
                i = e.data("refH"),
                j = d.fullscreen ? a(c).width() / g : h / i,
                k = e.data("external-padding") ? e.data("external-padding") : d.externalPadding;
            k = a.isNumeric(k) ? k : 2 * parseFloat(a(k).css("paddingLeft"));
            var l = d.fullscreen || d.fullwidth ? a(c).width() - k : f,
                m = d.fullscreen ? g - k : d.carousel && d.carouselVisible > 1 && !d.adaptiveHeight ? i : d.fullwidth && f / j > i ? i - k : f / j - k,
                n = m <= d.scaleMinHeight,
                o = n ? l / d.scaleMinHeight : l / m,
                p = !(!d.adaptiveHeight || 1 !== d.carouselVisible),
                q = d.forceFit || b.hasClass("tms-forcefit");
            if (e.data("newSW", l), e.data("newSH", m), d.carousel || d.adaptiveHeight) {
                var r = null;
                clearTimeout(r), e.css({
                    width: Math.round(l) + "px"
                }), r = setTimeout(function () {
                    e.css({
                        height: e.data("scale-first") && p ? e.find("li:first-child").find(".tms-content-scalable, img").outerHeight() + "px" : !e.data("scale-first") && p ? b.find(".tms-content-scalable, img").outerHeight() : "auto"
                    })
                }, 100)
            } else e.css({
                width: Math.round(l) + "px",
                height: m > d.scaleMinHeight || "auto" === d.scaleMinHeight ? Math.round(m) + "px" : d.scaleMinHeight + "px"
            }), d.parallax && e.parent().css({
                height: e.height() + "px"
            }), m = m > d.scaleMinHeight || "auto" === d.scaleMinHeight ? m : d.scaleMinHeight, e.data("newSH", m);
            if (!e.data("setup") || d.carousel && d.carouselVisible > 1) return !1;
            var s = b.is("[data-image]") ? "image" : "video",
                u = !!(b.is("[data-video-bkg]") || b.is("[data-video-bkg-youtube]") || b.is("[data-video-bkg-vimeo]")),
                v = b.is("[data-video-ratio]") ? parseFloat(b.data("video-ratio")) : 1.778;
            b.find("img, iframe, video, .mejs-container").not(".tms-caption img, .tms-caption iframe, .tms-caption video").each(function () {
                var c, e, f, g = 50,
                    h = m + g,
                    i = l + g;
                if ("image" === s ? (c = a(this).width(), e = a(this).height()) : "video" === s && ((!d.respectRatio && !u || d.fullscreen && !u) && b.addClass("tms-video-no-ratio"), u ? (c = d.fullscreen && d.fullwidth ? h * v : l, e = d.fullscreen && d.fullwidth ? h : l / v) : (c = a(this).attr("width") && l > a(this).attr("width") ? a(this).attr("width") : l, e = q ? c / v : c / v)), f = c / e, "image" === s && d.fullscreen || q || "video" === s && u) {
                    if (a(this).is("img") && !a(this).data("loaded")) return !1;
                    o > f ? a(this).css({
                        width: u ? i + "px" : d.fullwidth && !q ? "auto" : l + "px",
                        height: u ? Math.round(i / f) + "px" : Math.round(l / f) + "px",
                        top: u ? Math.floor((m - e) / 2) + "px" : Math.round(-((l / f - m) / 2)) + "px",
                        left: u ? -(g / 2) + "px" : 0
                    }) : a(this).css({
                        width: !d.fullwidth || q || u ? Math.round(m * f) + "px" : "auto",
                        height: m + "px",
                        top: 0,
                        left: Math.round(-((m * f - l) / 2)) + "px"
                    })
                } else "video" === s && a(this).css({
                    width: Math.floor(c) + "px",
                    height: Math.floor(e) + "px",
                    top: Math.floor((m - e) / 2) + "px",
                    left: Math.floor((l - c) / 2) + "px"
                })
            }), t(b, d)
        },
        t = function (b, c) {
            var d = b.closest(".tm-slider-container"),
                e = d.data("newSW"),
                f = d.data("newSH"),
                g = d.data("refW"),
                h = d.data("refH");
            return !(!c.captionScaling || c.carouselVisible > 1) && void b.find(".tms-caption").each(function () {
                if (!a(this).is("[data-no-scale]")) {
                    var b = a(this),
                        d = b.data("x"),
                        i = b.data("y"),
                        j = b.data("w"),
                        k = b.data("pt"),
                        l = b.data("pr"),
                        m = b.data("pb"),
                        n = b.data("pl"),
                        o = b.data("mt"),
                        p = b.data("mr"),
                        q = b.data("mb"),
                        r = b.data("ml"),
                        s = b.data("bt"),
                        t = b.data("br"),
                        u = b.data("bb"),
                        v = b.data("bl"),
                        w = b.data("fs"),
                        x = 0 === b.data("lh") ? w : b.data("lh"),
                        y = b.is("[data-offsetx]") ? parseFloat(b.data("offsetx")) : 0,
                        z = b.is("[data-offsety]") ? parseFloat(b.data("offsety")) : 0,
                        A = e * (y / g) < 0 ? e * (y / g) : e * (y / g) > y ? y : e * (y / g),
                        B = f * (z / h) < 0 ? e * (z / g) : e * (z / g) > z ? z : f * (z / h);
                    c.fullwidth && B < z && B < 0 && (B = z);
                    var C;
                    b.find("img, iframe, video").length && (C = e * (j / g) > j ? j : e * (j / g) > e ? e : e * (j / g)), b.find("img").length || b.find("iframe, video").length ? b.css({
                        width: C + "px",
                        height: b.children("iframe, video").length ? C / 1.778 + "px" : "auto"
                    }) : b.css({
                        fontSize: e * (w / g) > w ? w : e * (w / g) + "px",
                        lineHeight: e * (x / g) > x ? x + "px" : e * (x / g) + "px",
                        paddingTop: e * (k / g) > k ? k : e * (k / g) + "px",
                        paddingRight: e * (l / g) > l ? l : e * (l / g) + "px",
                        paddingBottom: e * (m / g) > m ? m : e * (m / g) + "px",
                        paddingLeft: e * (n / g) > n ? n : e * (n / g) + "px",
                        marginTop: e * (o / g) > o ? o : e * (o / g) + "px",
                        marginRight: e * (p / g) > p ? p : e * (p / g) + "px",
                        marginBottom: e * (q / g) > q ? q : e * (q / g) + "px",
                        marginLeft: e * (r / g) > r ? r : e * (r / g) + "px",
                        borderTopWidth: e * (s / g) > s ? s : Math.ceil(e * (s / g)) + "px",
                        borderRightWidth: e * (t / g) > t ? t : Math.ceil(e * (t / g)) + "px",
                        borderBottomWidth: e * (u / g) > u ? u : Math.ceil(e * (u / g)) + "px",
                        borderLeftWidth: e * (v / g) > v ? v : Math.ceil(e * (v / g)) + "px",
                        whiteSpace: "nowrap"
                    }), b.css({
                        top: "top" === i ? 0 + B : "bottom" === i ? f - b.outerHeight() - B : (f - b.outerHeight()) / 2 + B + "px",
                        left: "left" === d ? 0 + A : "right" === d ? e - b.outerWidth() - A : (e - b.outerWidth()) / 2 + A + "px"
                    })
                }
            })
        },
        u = function (b, c) {
            return !(c.carouselVisible > 1) && void b.find(".tms-caption").not(".no-transition").each(function () {
                var b = a(this),
                    c = b.data("o") ? parseFloat(b.data("o")) : 0,
                    d = b.data("tx") ? parseFloat(b.data("tx")) : 0,
                    e = b.data("ty") ? parseFloat(b.data("ty")) : 0,
                    f = b.data("tz") ? parseFloat(b.data("tz")) : 0,
                    g = b.data("rx") ? parseFloat(b.data("rx")) : 0,
                    h = b.data("ry") ? parseFloat(b.data("ry")) : 0,
                    i = b.data("rz") ? parseFloat(b.data("rz")) : 0,
                    j = b.data("s") ? parseFloat(b.data("s")) : 1;
                E ? b.css({
                    transition: "none",
                    transform: "translate3d(" + d + "px, " + e + "px, " + f + "px )rotateX(" + g + "deg) rotateY(" + h + "deg) rotateZ(" + i + "deg) scale3d(" + j + ", " + j + ", " + j + ")",
                    opacity: c
                }) : b.css({
                    opacity: 0
                })
            })
        },
        v = function (b, c, d) {
            if (!d.useVideoAPI || d.carouselVisible > 1) return !1;
            var e;
            try {
                if (b.find("iframe").length) {
                    e = "#" + b.find("iframe").attr("id");
                    var f = a(e).attr("src");
                    "undefined" != typeof f && f.indexOf("vimeo") > -1 ? (e = $f(a(e)[0]), "play" === c && d.autoPlay ? (e.api("play"), b.addClass("video-playing")) : (e.api("pause"), b.removeClass("video-playing"))) : "undefined" != typeof f && f.indexOf("youtu") > -1 && (e = e.replace("#", ""), "play" === c && d.autoPlay ? (w[e].playVideo(), b.addClass("video-playing")) : (w[e].stopVideo(), b.removeClass("video-playing")))
                } else b.find("video").length && (e = "#" + b.find("video").attr("id"), "play" === c && d.autoPlay ? (a(e)[0].play(), b.addClass("video-playing")) : (a(e)[0].pause(), b.removeClass("video-playing")))
            } catch (a) { }
        },
        w = {},
        x = !1,
        y = !1,
        z = function (d, e, f, g) {
            function i(a) {
                f.replayOnEnd && (t.loop = !0), f.nextSlideOnEnd && g.nextSlide()
            }
            if (!f.useVideoAPI || f.carouselVisible > 1) return !1;
            var j = e.closest("li"),
                k = e.attr("src"),
                l = "https:" === location.protocol ? "https:" : "http:",
                m = new Date;
            if (e.attr("id", "video-" + m.getTime()), "undefined" != typeof k && k.indexOf("vimeo") > -1) {
                if (e.attr("src", e.attr("src") + "&amp;player_id=" + e.attr("id")).addClass("vimeo"), j.is("[data-video-bkg-vimeo]") && e.attr("src", e.attr("src") + "&amp;autoplay=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;background=1").addClass("vimeo"), !x) {
                    x = !0;
                    var n = b.createElement("script");
                    n.src = l + "//f.vimeocdn.com/js/froogaloop2.min.js";
                    var p = b.getElementsByTagName("script")[0];
                    p.parentNode.insertBefore(n, p)
                }
                e.on("load", function () {
                    var b = a(this),
                        c = "#" + b.attr("id"),
                        e = $f(a(c)[0]),
                        i = b.closest("li"),
                        j = !!i.is(":first-child");
                    e.addEvent("ready", function () {
                        j && f.autoPlay && (e.api("play"), i.addClass("video-playing")), e.api("setVolume", 1), (f.muteBkgVideo || i.is("[data-mute-video]")) && e.api("setVolume", 0), e.addEvent("playProgress", function (a) {
                            h(d, i, f), i.addClass("video-bkg-loaded"), o(i, f)
                        }), e.addEvent("finish", function () {
                            f.replayOnEnd && e.api("play"), f.nextSlideOnEnd && g.nextSlide()
                        })
                    })
                })
            } else if ("undefined" != typeof k && k.indexOf("youtu") > -1) {
                if (e.addClass("youtube"), j.is("[data-video-bkg-youtube]") && e.attr("src", e.attr("src") + "&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=0&amp;loop=1&amp;iv_load_policy=3&amp;playlist=" + e.attr("src").split("embed/")[1].substring(0, 11)).addClass("youtube"), a("body").hasClass("safari-browser") && j.hasClass("active") && (e.attr("src", e.attr("src") + "&amp;autoplay=1"), h(d, j, f), j.addClass("video-bkg-loaded"), o(j, f)), !y) {
                    y = !0;
                    var q = b.createElement("script");
                    q.src = l + "//www.youtube.com/player_api";
                    var r = b.getElementsByTagName("script")[0];
                    r.parentNode.insertBefore(q, r)
                }
                var s = function () {
                    a(".youtube").each(function () {
                        var b = a(".youtube"),
                            c = b.attr("id"),
                            e = b.closest("li"),
                            i = !!e.is(":first-child");
                        w[c] = new YT.Player(c, {
                            events: {
                                onStateChange: function (a) {
                                    a.data === YT.PlayerState.PLAYING && e.is("[data-video-bkg-youtube]") && !L && (h(d, e, f), e.addClass("video-bkg-loaded"), o(e, f)), a.data === YT.PlayerState.ENDED && (f.replayOnEnd && w[c].playVideo(), f.nextSlideOnEnd && g.nextSlide())
                                },
                                onReady: function (a) {
                                    i && f.autoPlay && (w[c].playVideo(), e.addClass("video-playing")), (f.muteBkgVideo || e.is("[data-mute-video]")) && w[c].mute()
                                },
                                onError: function (a) {
                                    2 === a.data ? console.log("Avalance Slider - YouTube Video: Check video ID") : 100 === a.data ? console.log("Avalance Slider - YouTube Video: Video not found") : 101 !== a.data && 150 !== a.data || console.log("Avalance Slider - YouTube Video: Owner does not allow this video to be played as an embeded video"), b.hide(), h(d, e, f), e.addClass("error"), o(e, f)
                                }
                            }
                        })
                    })
                };
                c.onYouTubePlayerAPIReady = function () {
                    s()
                }
            } else if (e.is("video")) {
                e.addClass("html5-video"), e[0].addEventListener("ended", i, !1);
                var t = b.getElementById(e.attr("id")),
                    u = !!j.is(":first-child");
                u && f.autoPlay && (t.load(), t.autoplay = !0, j.addClass("video-playing")), t.addEventListener("playing", function () {
                    j.addClass("video-bkg-loaded")
                }), (f.muteBkgVideo || j.is("[data-mute-video]")) && (t.muted = f.muteBkgVideo)
            }
        },
        A = function () {
            var a = {};
            return function (b, c, d) {
                d || (d = "id"), a[d] && clearTimeout(a[d]), a[d] = setTimeout(b, c)
            }
        }();
    c.isRetinaDevice = function () {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !!(this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(a).matches)
    };
    var B, C = b.body || b.documentElement,
        D = C.style,
        E = D.transition !== d || D.WebkitTransition !== d || D.MozTransition !== d || D.MsTransition !== d || D.OTransition !== d,
        F = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var G in F) D[F[G]] !== d && (B = "-" + F[G].replace("Transform", "").toLowerCase());
    var H = B + "-transform",
        I = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        J = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.16,1.36,.57,.96)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeBounceIn: "cubic-bezier(.15,2.6,0,-0.2)",
            easeSwingInOut: "cubic-bezier(.35,3.8,0.3,-0.6)"
        },
        K = {
            fadeIn: "opacity: 0;easing: swing;",
            slideInUpShort: "opacity:0;transY: 50px;easing:easeFastSlow;",
            slideInRightShort: "opacity:0;transX: 50px;easing:easeFastSlow;",
            slideInDownShort: "opacity:0;transY: -50px;easing:easeFastSlow;",
            slideInLeftShort: "opacity:0;transX: -50px;easing:easeFastSlow;",
            slideInUpLong: "opacity:0;transY: 250px;easing:easeFastSlow;",
            slideInRightLong: "opacity:0;transX: 250px;easing:easeFastSlow;",
            slideInDownLong: "opacity:0;transY: -250px;easing:easeFastSlow;",
            slideInLeftLong: "opacity:0;transX: -250px;easing:easeFastSlow;",
            bounceIn: "opacity:0;scale:0.7;easing:easeBounceIn;",
            bounceOut: "opacity:0;scale:1.4;easing:easeBounceIn;",
            bounceInUp: "opacity:0;transY: 250px;easing:easeBounceIn;",
            bounceInRight: "opacity:0;transX: 250px;easing:easeBounceIn;",
            bounceInDown: "opacity:0;transY: -250px;easing:easeBounceIn;",
            bounceInLeft: "opacity:0;transX: -250px;easing:easeBounceIn;",
            scaleIn: "opacity:0;scale: 0.6;easing:easeFastSlow;",
            scaleOut: "opacity:0;scale: 1.4;easing:easeFastSlow",
            flipInX: "opacity:0;rotateX: -180deg;easing:easeFastSlow;",
            flipInY: "opacity:0;rotateY: -180deg;easing:easeFastSlow;",
            spinInX: "opacity:0;rotateX: -540deg;easing:easeFastSlow;",
            spinInY: "opacity:0;rotateY: -540deg;easing:easeFastSlow;",
            helicopterIn: "opacity:0;scale: 0.6;rotateZ: -360deg;easing:easeFastSlow;",
            helicopterOut: "opacity:0;scale: 1.4;rotateZ: -360deg;easing:easeFastSlow;",
            signSwingTop: "opacity:0;rotateX:-60deg;transOrigX:top;transOrigY:center;easing:easeSwingInOut;",
            signSwingRight: "opacity:0;rotateY:-60deg;transOrigX:right;transOrigY:center;easing:easeSwingInOut;",
            signSwingBottom: "opacity:0;rotateX:-60deg;transOrigX:bottom;transOrigY:center;easing:easeSwingInOut;",
            signSwingLeft: "opacity:0;rotateY:-60deg;transOrigX:left;transOrigY:center;easing:easeSwingInOut;",
            wiggleX: "opacity:0;rotateX:-90deg;transOrigX:center;transOrigY:center;easing:easeSwingInOut;",
            wiggleY: "opacity:0;rotateY:-90deg;transOrigX:center;transOrigY:center;easing:easeSwingInOut;",
            dropUp: "opacity:0;transY: 250px;rotateZ:60deg;transOrigX:left;transOrigY:top;easing:easeBounceBackHard;",
            dropDown: "opacity:0;transY: -250px;rotateZ:-60deg;transOrigX:left;transOrigY:top;easing:easeBounceBackHard;",
            rollInLeft: "opacity:0;transX: -250px;transY: 200px;rotateZ: -120px;transOrigX:left;transOrigY:top;easing:easeFastSlow;",
            rollInRight: "opacity:0;transX: 250px;transY: 200px;rotateZ: 120px;transOrigX:right;transOrigY:top;easing:easeFastSlow;",
            turnInRight: "opacity:0;transX: 250px;rotateX:20deg;rotateY:75deg;transOrigX:left;transOrigY:top;easing:easeBounceBack;",
            turnInLeft: "opacity:0;transX: -250px;rotateX:20deg;rotateY:-75deg;transOrigX:right;transOrigY:top;easing:easeBounceBack;"
        },
        L = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (L = !0);
    var M = b.all && b.addEventListener || "-ms-scroll-limit" in b.documentElement.style && "-ms-ime-align" in b.documentElement.style;
    M && !a("body").hasClass("ie-browser") && (b.getElementsByTagName("body")[0].className += " ie-browser"),
        function () {
            for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d) c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"];
            c.requestAnimationFrame || (c.requestAnimationFrame = function (b, d) {
                var e = (new Date).getTime(),
                    f = Math.max(0, 16 - (e - a)),
                    g = c.setTimeout(function () {
                        b(e + f)
                    }, f);
                return a = e + f, g
            }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (a) {
                clearTimeout(a)
            })
        }(), a.fn.avalancheSlider = function (b) {
            return this.each(function () {
                var c = a(this);
                if (!c.data("avalancheSlider")) {
                    var d = new i(this, b);
                    c.data("avalancheSlider", d)
                }
            })
        }, a.fn.avalancheSlider.tmsOpts = {
            animation: "slide",
            scaleFactor: .2,
            parallax: !1,
            easing: "easeInOutQuint",
            easingFallback: "easeInOutQuint",
            speed: 700,
            parallaxSpeed: .2,
            parallaxScale: !1,
            parallaxFadeOut: !1,
            navArrows: !0,
            navPagination: !0,
            navShowOnHover: !0,
            paginationType: "bullets",
            navKeyboard: !0,
            forceFit: !1,
            fullwidth: !1,
            adaptiveHeight: !1,
            fullscreen: !1,
            fsUseHeightOf: "",
            externalPadding: 0,
            scaleUnder: 1140,
            scaleMinHeight: 214,
            captionScaling: !0,
            carousel: !1,
            carouselVisible: 1,
            autoAdvance: !0,
            showProgressBar: !0,
            interval: 6e3,
            pauseOnHover: !0,
            useVideoAPI: !0,
            autoPlay: !0,
            replayOnEnd: !0,
            nextSlideOnEnd: !1,
            respectRatio: !0,
            muteBkgVideo: !1,
            lazyLoad: !0,
            retinaSupport: !0,
            retinaSupportMobile: !1,
            retinaSuffix: "@2x",
            onSetup: null,
            onLoadEnd: null,
            onSlideBefore: null,
            onSlideAfter: null,
            onSlideshowStart: null,
            onSlideshowPause: null,
            onSlideshowEnd: null
        }
}(jQuery, document, window);
/**
 *	Summit Lightbox
 *	Version: 1.1.1
 */
! function (a, b, c, d) {
    "use strict";
    var e = function (b, d) {
        var e = a.extend({}, a.fn.summitLightbox.tmlOpts, d),
            k = a(b),
            l = this,
            p = [];
        k.on("click", function (b) {
            b.preventDefault(), a(k).data("group") && (p = g(k)), a(this).addClass("tml-active"), e.lightboxAnimation = a(this).data("lightbox-animation") ? a(this).data("lightbox-animation") : e.lightboxAnimation, e.contentAnimation = a(this).data("content-animation") ? a(this).data("content-animation") : e.contentAnimation, e.modalAnimation = a(this).data("modal-animation") ? a(this).data("modal-animation") : e.modalAnimation, e.contentMargin = a(this).data("content-margin") ? a(this).data("content-margin") : e.contentMargin, e.navExit = !a(this).is('[data-nav-exit="false"]') && e.navExit, e.videoRatio = a(this).data("video-ratio") ? a(this).data("video-ratio") : e.videoRatio, e.auxClasses = a(this).data("aux-classes") ? a(this).data("aux-classes") : e.auxClasses, i(p, e, k, l)
        }), a(c).on("load", function () {
            k.is("[data-modal-mode]") && k.is("[data-auto-launch]") && f(k)
        }), a(c).on("resize", function () {
            m(e)
        }), l.nextContent = function () {
            var b = a("#tml-content");
            if (b.data("loading")) return !1;
            o(0, e);
            var c = a(".tml-active"),
                d = g(c),
                f = d[a.inArray(c.attr("id"), d) + 1];
            f = a.inArray(f, d) + 1 === 0 ? d[0] : f, c.removeClass("tml-active"), f = a("#" + f).addClass("tml-active"), j(f, "next", e), d.length = 0
        }, l.prevContent = function () {
            var b = a("#tml-content");
            if (b.data("loading")) return !1;
            o(0, e);
            var c = a(".tml-active"),
                d = g(c),
                f = d[a.inArray(c.attr("id"), d) - 1];
            f = a.inArray(f, d) + 1 === 0 ? d[d.length - 1] : f, c.removeClass("tml-active"), f = a("#" + f).addClass("tml-active"), j(f, "prev", e), d.length = 0
        }, l.destroyLightbox = function () {
            var b = a("#tm-lightbox"),
                c = a("#tml-content"),
                d = null;
            a("body").removeClass("modal-open");
            var f = h(b, e);
            if (s) {
                if (b.data("transitioning")) return !1;
                b.children().css({
                    transition: "none"
                }), c.css({
                    transition: "none"
                }), b.one(w, function () {
                    clearTimeout(d), d = setTimeout(function () {
                        b.find("iframe").attr("src", ""), b.remove(), b = null
                    }, 50)
                }), n(b, 0, f.x, f.y, e)
            } else {
                if (b.is(":animated")) return !1;
                c.remove(), b.animate({
                    opacity: 0,
                    left: f.x + "px",
                    top: f.y + "px"
                }, e.speed, e.easing, function () {
                    b.find("iframe").attr("src", ""), b.remove(), b = null
                })
            }
            p.length = 0, a(".tml-active").removeClass("tml-active"), e.onExit && e.onExit()
        }
    },
        f = function (b) {
            function c() {
                var c = setInterval(function () {
                    a(b).trigger("click"), clearInterval(c)
                }, d)
            }
            var d = b.data("launch-delay") ? b.data("launch-delay") : 0,
                e = b.is("[data-set-cookie]") ? b.data("set-cookie") : b.data("delete-cookie");
            b.is("[data-set-cookie]") ? z.hasItem(e) || (z.setItem(e, "Fri, 31 Dec 9999 23:59:59 GMT", "/"), c()) : b.is("[data-delete-cookie]") && z.hasItem(e) ? (z.removeItem(e), c()) : c()
        },
        g = function (b) {
            if (a(b).is("[data-group]")) {
                var c = a(b).data("group"),
                    d = [];
                return a('[data-group="' + c + '"]').each(function (b) {
                    b++, a(this).attr("id") ? d.push(a(this).attr("id")) : (a(this).attr("id", c + "-tml-thumb-" + b), d.push(a(this).attr("id")))
                }), d
            }
        },
        h = function (b, d) {
            var e = d.lightboxAnimation,
                f = "slideInLeft" === e || "slideInTop" === e ? -1 : "slideInRight" === e || "slideInBottom" === e ? 1 : 0,
                g = "slideInLeft" === e || "slideInRight" === e ? a(c).width() * f : 0,
                h = "slideInTop" === e || "slideInBottom" === e ? a(c).height() * f : 0;
            return {
                x: g,
                y: h
            }
        },
        i = function (d, e, f, g) {
            if (a("#tm-lightbox").length) return !1;
            a("body").append('<div id="tm-lightbox" class="tm-lightbox"><div id="tml-content-wrapper" ><div id="tml-content" /></div><div id="tml-caption" /></div>');
            var i = a("#tm-lightbox"),
                j = a("#tml-content-wrapper"),
                l = a("#tml-content"),
                o = null;
            if (i.addClass(e.auxClasses.replace(/,/g, " ")), f.is("[data-modal-mode]")) {
                i.addClass("tml-modal-mode");
                var p = "slideInTop" === e.modalAnimation ? "slide-in-top" : "slideInBottom" === e.modalAnimation ? "slide-in-bottom" : "scaleIn" === e.modalAnimation ? "scale-in" : "scaleOut" === e.modalAnimation ? "scale-out" : "fade";
                l.addClass("modal-dialog").addClass(p), a("body").addClass("modal-open"), f.data("modal-width") && i.data("modal-width", f.data("modal-width")), f.data("modal-height") && i.data("modal-height", f.data("modal-height"))
            }
            i.data("initLoad", !0);
            var q = e.contentMargin;
            if (j.css({
                top: q + "%",
                right: q + "%",
                bottom: q + "%",
                left: q + "%"
            }), d.length >= 2 && l.swipeIt({
                preventTouchOn: ".scrollable-content",
                onSwipeMove: function (a) {
                    l.css({
                        left: a + "px"
                    })
                },
                onSwipeEnd: function (a) {
                    "left" === a ? g.prevContent() : g.nextContent()
                }
            }), e.overlay || i.css({
                background: "none"
            }), e.navArrows && d.length >= 2) {
                var r = a('<a href="#" />').attr("id", "tml-prev").addClass("tml-nav").appendTo(i),
                    t = a('<a href="#" />').attr("id", "tml-next").addClass("tml-nav").appendTo(i);
                r.on("click", function (a) {
                    a.preventDefault(), g.prevContent()
                }), t.on("click", function (a) {
                    a.preventDefault(), g.nextContent()
                })
            }
            if (e.navExit) {
                var u;
                u = i.hasClass("tml-modal-mode") ? a('<a href="" id="tml-exit" class="tml-nav" />').appendTo(l) : a('<a href="" id="tml-exit" class="tml-nav" />').appendTo(i), u.on("click", function (a) {
                    a.preventDefault(), g.destroyLightbox()
                })
            }
            if (e.navToolbar) {
                var v, x, y, z = 600,
                    A = 400,
                    B = a(c).height() / 2 - A / 2,
                    C = a(c).width() / 2 - z / 2,
                    D = a(location).attr("href"),
                    E = a('<div id="tml-tool-bar" />').appendTo(i),
                    F = String(f.data("toolbar")).split(";");
                if (e.navZoom = f.is("[data-toolbar]") ? a.inArray("zoom", F) > -1 : e.navZoom, e.navShare = f.is("[data-toolbar]") ? a.inArray("share", F) > -1 : e.navShare, e.navZoom && (x = a('<a id="tml-zoom" class="tml-nav" href="#" title="Zoom"></a>').appendTo(E), x.on("click", function (a) {
                    a.preventDefault(), j.toggleClass("zoomed"), m(e)
                })), e.navShare) {
                    var G = f.is("[data-list-vertical]") ? "list-vertical" : "list-horizontal";
                    y = a('<div id="tml-share-wrapper"><a id="tml-share" class="tml-nav" href="#" title="Share"></a><ul class="tml-social-list ' + G + '" /></div>').appendTo(E);
                    var H = f.data("networks") ? String(f.data("networks")).split(";") : e.navNetworks.split(",");
                    a.each(H, function (a, b) {
                        y.find("ul").append("<li><a data-" + b + ' class="tml-nav" href="#">' + b + "</a></li>")
                    }), y.children("a").on("click", function (a) {
                        a.preventDefault(), y.children("ul").toggleClass("active")
                    }), y.find("ul a").on("click", function (b) {
                        b.preventDefault();
                        var d = f.data("caption"),
                            e = f.data("twitter-user") ? f.data("twitter-user") : "",
                            g = f.data("image-url") ? f.data("image-url") : f.attr("href");
                        return a(this).is("[data-facebook]") ? v = "https://www.facebook.com/sharer/sharer.php?u=" + D + ",sharer" : a(this).is("[data-twitter]") ? v = "https://twitter.com/intent/tweet?url=" + g + "&amp;via=" + e : a(this).is("[data-pinterest]") && (v = "http://pinterest.com/pin/create/button/?url=" + D + "&amp;media=" + g + "&amp;description=" + d), c.open(v, "popup", "width=" + z + ",height=" + A + ", scrollbars=yes, top=" + B + ",left=" + C), !1
                    })
                }
            }
            e.navKeyboard && a(b).on("keyup", function (a) {
                37 == a.keyCode && d.length >= 2 ? g.prevContent() : 39 == a.keyCode && d.length >= 2 ? g.nextContent() : 27 == a.keyCode && g.destroyLightbox()
            }), e.overlayClickClose && i.on("click", function (a) {
                a.target !== this && "tml-content-wrapper" !== a.target.id || g.destroyLightbox()
            });
            var I = h(i, e);
            if (s) {
                if (i.css({
                    transition: "none",
                    transform: "translate3d(" + I.x + "px, " + I.y + "px, 0px)"
                }), i.data("transitioning")) return !1;
                clearTimeout(o), o = setTimeout(function () {
                    i.one(w, function () {
                        k(a(".tml-active"), "next", e)
                    }), n(i, 1, 0, 0, e)
                }, 50)
            } else i.css({
                left: I.x + "px",
                top: I.y + "px"
            }), i.animate({
                opacity: 1,
                left: 0,
                top: 0
            }, e.speed, e.easing, function () {
                k(a(".tml-active"), "next", e)
            })
        },
        j = function (b, c, d) {
            var e = (a("#tm-lightbox"), a("#tml-content"));
            e.data("loading", !0);
            var f = "fade" === d.contentAnimation ? 0 : d.slideAmount;
            if (c = "next" === c ? 1 : -1, s) e.one(w, function () {
                a(this).css({
                    visibility: "hidden"
                }), k(b, c, d)
            }), n(e, 0, -f * c, 0, d);
            else {
                var g = e.position().left;
                e.animate({
                    opacity: 0,
                    left: g - f * c + "px"
                }, d.speed, d.easing, function () {
                    a(this).css({
                        visibility: "hidden"
                    }), k(b, c, d)
                })
            }
        },
        k = function (b, d, e) {
            var f = a("#tm-lightbox"),
                g = a("#tml-content"),
                h = a("#tml-exit").clone(!0),
                i = !!f.hasClass("tml-modal-mode");
            g.find("iframe").attr("src", ""), g.removeClass("tml-error scrollable-content").data("type", "").html("");
            var j = b.is("a") ? b.attr("href") : "#" + b.attr("id"),
                k = j.match(/\.(jpeg|jpg|png|gif)/i),
                m = j.match(/(vimeo\.com|youtu(be\.com|\.be))\/(watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                n = b.is('[data-content="inline"]') || b.is("[data-modal-mode]"),
                o = b.is('[data-content="iframe"]'),
                p = b.is('[data-content="ajax"]');
            if (a("#tml-loader").length && a("#tml-loader").remove(), f.append('<div id="tml-loader" class="tm-loader"><svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'), k) {
                var q = j.substr(j.lastIndexOf("."));
                (c.isRetinaDevice() && e.retinaSupport || c.isRetinaDevice() && b.is("[data-retina]")) && (!y && !e.retinaSupportMobile || y && e.retinaSupportMobile) && (j.match(/\.(svg)/i) || (j = b.data("retina") ? b.data("retina") : j.replace(q, e.retinaSuffix + q))), g.data("type", "img"), a("<img />").addClass("tml-image").attr("src", j).one("load", function () {
                    g.html(a(this)), l(!0, d, e)
                }).each(function () {
                    this.complete && a(this).trigger("load")
                }).on("error", function () {
                    l(!1, d, e)
                })
            }
            if (m) {
                g.data("type", "video");
                var r = a('<iframe src="' + j + '" wmode="opaque" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen />');
                g.html(r), r.one("load", function () {
                    l(!0, d, e)
                })
            }
            if (n)
                if (g.addClass("scrollable-content").data("type", "inline"), a(j).length) {
                    var s = a(j).clone(!0).addClass("show").css({
                        visibility: "visible",
                        opacity: 1
                    });
                    g.html(s), l(!0, d, e)
                } else l(!1, d, e);
            if (o) {
                g.addClass("scrollable-content").data("type", "iframe");
                var t = a('<iframe src="' + j + '" frameborder="0" scrolling="auto" />');
                g.html(t), t.one("load", function () {
                    l(!0, d, e)
                })
            }
            if (p) {
                g.addClass("scrollable-content").data("type", "ajax");
                var u = b.data("target-container");
                a.ajax({
                    url: j,
                    cache: !1,
                    success: function (b) {
                        a(b).find(u).length ? g.html(a(b).find(u)) : g.html(b), l(!0, d, e)
                    },
                    error: function (a, b, c) {
                        l(!1, d, e)
                    }
                })
            }
            i && g.append(h)
        },
        l = function (b, c, d) {
            var e = a("#tm-lightbox"),
                f = a("#tml-content"),
                g = null;
            if (m(d), e.find("#tml-loader").remove(), b) {
                var h = "fade" === d.contentAnimation ? 0 : d.slideAmount;
                if (s) f.css({
                    transition: "none",
                    opacity: 0,
                    transform: "translate3d(" + h * c + "px, 0, 0)"
                }), clearTimeout(g), g = setTimeout(function () {
                    f.one(w, function () {
                        f.data("loading", !1)
                    }), n(f, 1, 0, 0, d)
                }, 50);
                else {
                    var i = f.position().left,
                        j = e.data("initLoad") ? i : 1 === c ? i + 2 * h : i - 2 * h;
                    f.css({
                        visibility: "visible",
                        left: j + "px"
                    }).animate({
                        opacity: 1,
                        left: i + "px"
                    }, d.speed, d.easing, function () {
                        f.data("loading", !1)
                    })
                }
                o(1, d), d.onLoaded && d.onLoaded()
            } else {
                var k = "";
                d.showErrorSrc && (k = ": " + a(".tml-active").attr("href")), f.css({
                    width: "100%",
                    height: "auto",
                    top: "50%",
                    left: 0,
                    transition: "none",
                    transform: "translate3d( 0, 0, 0)"
                }).addClass("tml-error").html(d.errorMessage + k), s ? (clearTimeout(g), g = setTimeout(function () {
                    f.one(w, function () {
                        f.data("loading", !1)
                    }), n(f, 1, 0, 0, d)
                }, 50)) : f.css({
                    visibility: "visible"
                }).animate({
                    opacity: 1
                }, function () {
                    f.data("loading", !1)
                })
            }
            e.data("initLoad", !1)
        },
        m = function (b) {
            var c = a("#tm-lightbox"),
                d = !!c.hasClass("tml-modal-mode"),
                e = a("#tml-content-wrapper").width(),
                f = a("#tml-content-wrapper").height(),
                g = c.data("modal-width"),
                h = c.data("modal-height"),
                i = a("#tml-content"),
                j = i.data("type"),
                k = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0;
            if (i.not(".tml-error").css({
                height: "auto",
                width: "auto",
                top: "",
                left: ""
            }), "img" === j) l = i.find("img").width(), m = i.find("img").height();
            else if ("video" === j) l = b.maxWidth, m = l / b.videoRatio;
            else if ("iframe" === j) l = e < b.maxWidth ? e : b.maxWidth, m = f;
            else {
                var p = (i.children().outerWidth(), i.children().outerHeight());
                l = d ? e < g ? e : g : e, m = d && h ? h : d && !h ? p : p < f ? p : f
            }
            "img" !== j && "video" !== j || (k = l / m > e / f ? l / e : m / f, l = l < l / k ? l : l / k, m = m < m / k ? m : m / k), o = (e - l) / 2, n = f > m ? (f - m) / 2 : 0, i.css({
                width: Math.round(l) + "px",
                height: Math.round(m) + "px",
                top: Math.round(n) + "px",
                left: Math.round(o) + "px"
            })
        },
        n = function (b, c, d, e, f) {
            var g = a("#tm-lightbox");
            a("#tml-content");
            "tm-lightbox" === b.attr("id") && g.data("transitioning", !0);
            var h = {};
            h.transform = "translate3d(" + d + "px, " + e + "px, 0px)", h.transitionProperty = v + ", opacity", h.transitionDuration = f.speed + "ms", h.transitionTimingFunction = x[f.easing], h.visibility = "visible", h.opacity = c, b.css(h).one(w, function (c) {
                c.stopPropagation(), a(this).off(w), "tm-lightbox" === b.attr("id") && g.data("transitioning", !1)
            })
        },
        o = function (b, c) {
            var d = a("#tml-caption"),
                e = a(".tml-active").data("caption");
            e ? (d.html(a("<span />").text(e)), s ? n(a("#tml-caption"), b, 0, 0, c) : a("#tml-caption").animate({
                opacity: b
            })) : d.html("")
        };
    c.isRetinaDevice = function () {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !!(this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(a).matches)
    };
    var p, q = b.body || b.documentElement,
        r = q.style,
        s = r.transition !== d || r.WebkitTransition !== d || r.MozTransition !== d || r.MsTransition !== d || r.OTransition !== d,
        t = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var u in t) r[t[u]] !== d && (p = "-" + t[u].replace("Transform", "").toLowerCase());
    var v = p + "-transform",
        w = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        x = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        },
        y = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (y = !0);
    var z = {
        getItem: function (a) {
            return a ? decodeURIComponent(b.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null : null
        },
        setItem: function (a, c, d, e, f, g) {
            if (!a || /^(?:expires|max\-age|path|domain|secure)$/i.test(a)) return !1;
            var h = "";
            if (d) switch (d.constructor) {
                case Number:
                    h = d === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + d;
                    break;
                case String:
                    h = "; expires=" + d;
                    break;
                case Date:
                    h = "; expires=" + d.toUTCString()
            }
            return b.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(c) + h + (f ? "; domain=" + f : "") + (e ? "; path=" + e : "") + (g ? "; secure" : ""), !0
        },
        removeItem: function (a, c, d) {
            return !!this.hasItem(a) && (b.cookie = encodeURIComponent(a) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (d ? "; domain=" + d : "") + (c ? "; path=" + c : ""), !0)
        },
        hasItem: function (a) {
            return !!a && new RegExp("(?:^|;\\s*)" + encodeURIComponent(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(b.cookie)
        },
        keys: function () {
            for (var a = b.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), c = a.length, d = 0; d < c; d++) a[d] = decodeURIComponent(a[d]);
            return a
        }
    };
    "undefined" != typeof module && "undefined" != typeof module.exports && (module.exports = z), a.fn.summitLightbox = function (b) {
        return this.each(function () {
            var c = a(this);
            if (!c.data("summitLightbox")) {
                var d = new e(this, b);
                c.data("summitLightbox", d)
            }
        })
    }, a.fn.summitLightbox.tmlOpts = {
        lightboxAnimation: "fade",
        contentAnimation: "slide",
        modalAnimation: "fade",
        slideAmount: 100,
        easing: "swing",
        speed: 350,
        overlay: !0,
        maxWidth: 1140,
        contentMargin: 15,
        videoRatio: 1.778,
        navArrows: !0,
        navKeyboard: !0,
        navExit: !0,
        navToolbar: !0,
        navZoom: !0,
        navShare: !0,
        navNetworks: "facebook,twitter,pinterest",
        overlayClickClose: !0,
        retinaSupport: !1,
        retinaSupportMobile: !1,
        retinaSuffix: "@2x",
        errorMessage: "Please Check",
        showErrorSrc: !0,
        auxClasses: "",
        onSetup: null,
        onLoaded: null,
        onDestroy: null
    }
}(jQuery, document, window);
/**
 *	Snowbridge Parallax
 *	Version: 1.0.5
 */
! function (a, b, c, d) {
    "use strict";

    function e(b, d) {
        var e = a('<div class="tm-parallax" />').prependTo(a(b));
        r && e.css({
            height: ""
        }).addClass("tmp-mobile");
        var g = a('<div class="tm-loader"><svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>');
        g.appendTo(e);
        var h = b.data("src"),
            i = h.substr(h.lastIndexOf("."));
        (c.isRetinaDevice() && d.retinaSupport || c.isRetinaDevice() && b.is("[data-retina]")) && (!r && !d.retinaSupportMobile || r && d.retinaSupportMobile) && (h.match(/\.(svg)/i) || (h = b.data("retina") ? b.data("retina") : b.data("src").replace(i, d.retinaSuffix + i))), a('<img class="tmp-media"/>').attr("src", h).one("load", function () {
            a(this).attr("src", h).appendTo(e), e.find(".tm-loader").remove(), f(b, d)
        }).on("error", function () {
            console.log("Error src:" + h)
        })
    }

    function f(b, d) {
        var e = b.find(".tm-parallax"),
            f = b.find(".tmp-media"),
            g = f.attr("src");
        e.css({
            "background-image": "url(" + g + ")"
        }), f.hide(), e.css({
            opacity: 0
        }), o && k(b) ? e.css({
            visibility: "visible",
            transitionProperty: "opacity",
            transitionDuration: "1000ms",
            opacity: 1
        }) : e.css({
            visibility: "visible"
        }).animate({
            opacity: 1
        }), a(c).on("resize", function () {
            i(b, d), h(b, d)
        }).resize(), a(c).on("scroll", function () {
            h(b, d)
        }), d.onLoaded && d.onLoaded()
    }
    var g = function (b, c) {
        var d = a.extend({}, a.fn.snowBridge.tmpOpts, c),
            f = a(b);
        f.data("animating", !1).data("setup", !1), d.fadeInOut = !f.is('[data-fade-in-out="false"]') && d.fadeInOut, d.parallaxFactor > 1 && (d.parallaxFactor = 1), f.data("setup", !0), e(f, d)
    },
        h = function (a, b) {
            a.data("animating") || (c.requestAnimationFrame(function () {
                j(a, b)
            }), a.data("animating", !0))
        },
        i = function (b, d) {
            var e = b.find(".tm-parallax"),
                f = a(c).height(),
                g = (b.height(), (b.height() + f) * d.parallaxFactor);
            return (d.fullscreen || d.scaleContainer) && e.css({
                height: g + "px"
            }), !!b.data("setup") && void b.data("scrollDistContainer", g)
        },
        j = function (b, d) {
            var e = b.find(".tm-parallax");
            if (k(b)) {
                if (r) return !1;
                var f = b.height() + b.offset().top - a(c).scrollTop(),
                    g = b.offset().top - a(c).scrollTop(),
                    h = 0 - e.height() / 2,
                    i = h / 2 * (f / b.data("scrollDistContainer")) * d.parallaxFactor;
                if (o ? e.css({
                    transform: "translate3d( 0px, " + i + "px, 0px)",
                    visibility: "visible"
                }).removeClass("out-of-view") : e.css({
                    top: i + "px",
                    visibility: "visible"
                }), d.fadeInOut) {
                    var j, l = a(c).height(),
                        m = d.fadeThreshold > 1 ? .5 * b.height() : b.height() * d.fadeThreshold;
                    g <= m && (j = Math.abs(f / m) > 1 ? 1 : Math.abs(f / m)), g <= l && g >= l - m && (j = (l - g) / m > 1 ? 1 : (l - g) / m), e.css({
                        opacity: (Math.ceil(100 * j) / 100).toFixed(2)
                    })
                }
            } else r || e.css({
                visibility: "hidden"
            }).addClass("out-of-view");
            b.data("animating", !1)
        },
        k = function (b) {
            var d = a(c).scrollTop(),
                e = d + a(c).height(),
                f = b.offset().top,
                g = f + b.outerHeight();
            return e >= f && d <= g
        };
    c.isRetinaDevice = function () {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return !!(this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(a).matches)
    };
    var l, m = b.body || b.documentElement,
        n = m.style,
        o = n.transition !== d || n.WebkitTransition !== d || n.MozTransition !== d || n.MsTransition !== d || n.OTransition !== d,
        p = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var q in p) n[p[q]] !== d && (l = "-" + p[q].replace("Transform", "").toLowerCase());
    var r = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (r = !0),
        function () {
            for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d) c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"];
            c.requestAnimationFrame || (c.requestAnimationFrame = function (b, d) {
                var e = (new Date).getTime(),
                    f = Math.max(0, 16 - (e - a)),
                    g = c.setTimeout(function () {
                        b(e + f)
                    }, f);
                return a = e + f, g
            }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (a) {
                clearTimeout(a)
            })
        }(), a.fn.snowBridge = function (b) {
            return this.each(function () {
                var c = a(this);
                if (!c.data("snowBridge")) {
                    var d = new g(this, b);
                    c.data("snowBridge", d)
                }
            })
        }, a.fn.snowBridge.tmpOpts = {
            fullscreen: !1,
            parallaxFactor: .6,
            fadeInOut: !1,
            fadeThreshold: .5,
            retinaSupport: !0,
            retinaSupportMobile: !1,
            retinaSuffix: "@2x",
            onLoaded: null
        }
}(jQuery, document, window);
/**
 *	Horizon
 *	Version: 1.0.4
 */
! function (a, e, t, i) {
    "use strict";
    var n, r = function (e, n) {
        function r() {
            a.each(g, function (a, t) {
                t = t.split(":");
                var i = t[0],
                    n = t[1],
                    r = n.indexOf("px") < 0 ? n.indexOf("%") < 0 ? "px" : "%" : "px";
                n = isNaN(parseFloat(n)) ? n : parseFloat(n), c.parallax ? ("direction" === i && e.data("pd", n), "speed" === i && e.data("ps", n), "rotate" === i && e.data("pr", n), "opacity" === i && e.data("po", n)) : ("opacity" === i && e.data("o", n), "scale" === i && e.data("s", n), "easing" === i && e.data("e", n), "transX" === i && e.data("tx", n + r), "transY" === i && e.data("ty", n + r), "transZ" === i && e.data("tz", n + r), "rotateX" === i && e.data("rx", n + "deg"), "rotateY" === i && e.data("ry", n + "deg"), "rotateZ" === i && e.data("rz", n + "deg"), "transOrigX" === i && e.data("ox", n + "%"), "transOrigY" === i && e.data("oy", n + "%"), "duration" === i && e.data("du", n + "ms"), "delay" === i && e.data("de", n + "ms"))
            })
        }
        var c = a.extend({}, a.fn.horizon.tmhOpts, n);
        e = a(e), w && e.css({
            opacity: 1,
            visibility: "visible"
        }), e.data("scrolling", !1).css("-webkit-backface-visibility", "hidden");
        var g;
        e.is("[data-parallax]") || c.parallax ? (c.parallax = !0, c.threshold = 0, e.data("threshold", 0), e.parent().addClass("tmh-perspective-parallax"), e.addClass("tmh-parallax-item"), g = (e.data("parallax") + "").split(";"), o(e, c, !0)) : (e.parent().addClass("tmh-perspective"), g = (e.data("animate-in") + "").split(";")), -1 != a.inArray("preset", (g + "").split(":")) ? g.filter(function (e) {
            if ("preset" === e.split(":")[0]) {
                g.splice(a.inArray(e, g), 1);
                var t = (O[e.split(":")[1]] + "").split(";");
                g = a.merge(t, g).filter(Boolean), i !== g[0] && r()
            }
        }) : (g = g.filter(Boolean), "undefined" !== g[0] && r()), a(t).on("scroll", function () {
            s(e, c, !1)
        }), a(t).on("resize", function () {
            s(e, c, !1)
        }), c.parallax || d(e, c), s(e, c)
    },
        s = function (a, e, t) {
            a.data("scrolling") || (requestAnimationFrame(function () {
                o(a, e, t)
            }), a.data("scrolling", !0))
        },
        o = function (e, i, n) {
            if (c(e, i) || n)
                if (i.parallax) {
                    if (w) return !1; {
                        var r = e.data("pd") ? e.data("pd") : "vertical",
                            s = e.data("ps") ? e.data("ps") : i.parallaxSpeed,
                            o = e.data("pr") ? e.data("pr") : "none",
                            d = e.data("po") ? e.data("po") : "none",
                            u = a(t),
                            p = u.scrollTop(),
                            b = e.offset().top,
                            h = u.height() * s,
                            f = e.parent().height() + e.parent().offset().top - p,
                            y = -((b - p - u.height()) * s) - h,
                            O = "horizontal" === r ? y + "px" : 0,
                            x = "vertical" === r ? y + "px" : 0; - (.1 * (b - p - u.height())) - h
                    }
                    o = "clockwise" === o ? .02 * -y + "deg" : "anticlockwise" === o ? .02 * y + "deg" : 0, d = "fade" === d ? f / e.parent().height() : 1, l && (u.width() < 768 ? g(e, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, "100ms", 0, "swing", i) : g(e, d.toFixed(2), O, x, 0, o, o, o, 1, "50%", "50%", 0, 0, "ease-out", i))
                } else {
                    var I = e.data("ox") ? e.data("ox") : "50%",
                        z = e.data("oy") ? e.data("oy") : "50%",
                        S = e.data("du") ? e.data("du") : i.speed,
                        F = e.data("de") ? e.data("de") : 0,
                        X = e.data("e") ? m[e.data("e")] : m[i.easing];
                    l ? g(e, 1, 0, 0, 0, 0, 0, 0, 1, I, z, S, F, X, i) : e.css({
                        visibility: "visible"
                    }).stop().animate({
                        opacity: 1
                    }, i.speed, i.easingFallback, function () {
                        i.inView && i.inView()
                    })
                }
            e.data("scrolling", !1)
        },
        c = function (e, i) {
            var n = a(t).scrollTop(),
                r = n + a(t).height(),
                s = e.data("threshold") ? parseFloat(e.data("threshold")) : i.threshold,
                o = e.data("ty") ? parseFloat(e.data("ty")) : 0,
                c = e.offset().top,
                g = e.offset().top - o,
                u = g + e.outerHeight() - e.outerHeight() * s,
                p = g + e.outerHeight() * s;
            return (c - n > a(t).height() || c - n < -e.outerHeight()) && (i.recurring && d(e, i), i.outOfView && i.outOfView()), r >= p && u >= n
        },
        d = function (a) {
            if (w) return !1;
            var e = a.data("o") ? a.data("o") : 0,
                t = a.data("tx") ? a.data("tx") : 0,
                i = a.data("ty") ? a.data("ty") : 0,
                n = a.data("tz") ? a.data("tz") : 0,
                r = a.data("rx") ? a.data("rx") : 0,
                s = a.data("ry") ? a.data("ry") : 0,
                o = a.data("rz") ? a.data("rz") : 0,
                c = a.data("s") ? a.data("s") : 1;
            a.css(l ? {
                transition: "none",
                transform: "translate3d(" + t + ", " + i + ", " + n + " )rotateX(" + r + ") rotateY(" + s + ") rotateZ(" + o + ") scale3d(" + c + ", " + c + ", " + c + ")",
                opacity: e,
                visibility: "hidden"
            } : {
                opacity: 0
            })
        },
        g = function (e, t, i, n, r, s, o, c, d, g, u, p, l, b, h) {
            var m = {};
            m.transform = "translate3d(" + i + ", " + n + ", " + r + ") rotateX(" + s + ") rotateY(" + o + ") rotateZ(" + c + ") scale3d(" + d + ", " + d + ", " + d + ")", m.transitionProperty = f + ", opacity", m.transformOrigin = g + " " + u + " 0", m.transitionDuration = p, m.transitionDelay = l, m.transitionTimingFunction = b, m.visibility = "visible", m.opacity = t, e.css(m).on(y, function (e) {
                e.stopPropagation(), a(this).off(y), h.inView && h.inView()
            })
        },
        u = e.body || e.documentElement,
        p = u.style,
        l = p.transition !== i || p.WebkitTransition !== i || p.MozTransition !== i || p.MsTransition !== i || p.OTransition !== i,
        b = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"];
    for (var h in b) p[b[h]] !== i && (n = "-" + b[h].replace("Transform", "").toLowerCase());
    var f = n + "-transform",
        y = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        m = {
            linear: "cubic-bezier(0, 0, 1, 1)",
            swing: "cubic-bezier(0.42, 0, 0.58, 1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
            easeFastSlow: "cubic-bezier(.11,.69,.66,1.01)",
            easeBounceBack: "cubic-bezier(.16,1.36,.57,.96)",
            easeBounceBackHard: "cubic-bezier(.8,1.91,0,.94)",
            easeBounceIn: "cubic-bezier(.15,2.6,0,-0.2)",
            easeSwingInOut: "cubic-bezier(.35,3.8,0.3,-0.6)"
        },
        O = {
            fadeIn: "opacity: 0;easing: swing;",
            slideInUpShort: "opacity:0;transY: 50px;easing:easeFastSlow;",
            slideInRightShort: "opacity:0;transX: 50px;easing:easeFastSlow;",
            slideInDownShort: "opacity:0;transY: -50px;easing:easeFastSlow;",
            slideInLeftShort: "opacity:0;transX: -50px;easing:easeFastSlow;",
            slideInUpLong: "opacity:0;transY: 250px;easing:easeFastSlow;",
            slideInRightLong: "opacity:0;transX: 250px;easing:easeFastSlow;",
            slideInDownLong: "opacity:0;transY: -250px;easing:easeFastSlow;",
            slideInLeftLong: "opacity:0;transX: -250px;easing:easeFastSlow;",
            bounceIn: "opacity:0;scale:0.7;easing:easeBounceIn;",
            bounceOut: "opacity:0;scale:1.4;easing:easeBounceIn;",
            bounceInUp: "opacity:0;transY: 250px;easing:easeBounceIn;",
            bounceInRight: "opacity:0;transX: 250px;easing:easeBounceIn;",
            bounceInDown: "opacity:0;transY: -250px;easing:easeBounceIn;",
            bounceInLeft: "opacity:0;transX: -250px;easing:easeBounceIn;",
            scaleIn: "opacity:0;scale: 0.6;easing:easeFastSlow;",
            scaleOut: "opacity:0;scale: 1.4;easing:easeFastSlow",
            flipInX: "opacity:0;rotateX: -180deg;easing:easeFastSlow;",
            flipInY: "opacity:0;rotateY: -180deg;easing:easeFastSlow;",
            spinInX: "opacity:0;rotateX: -540deg;easing:easeFastSlow;",
            spinInY: "opacity:0;rotateY: -540deg;easing:easeFastSlow;",
            helicopterIn: "opacity:0;scale: 0.6;rotateZ: -360deg;easing:easeFastSlow;",
            helicopterOut: "opacity:0;scale: 1.4;rotateZ: -360deg;easing:easeFastSlow;",
            signSwingTop: "opacity:0;rotateX:-60deg;transOrigX:50%;transOrigY:0%;easing:easeSwingInOut;",
            signSwingRight: "opacity:0;rotateY:-60deg;transOrigX:100%;transOrigY:50%;easing:easeSwingInOut;",
            signSwingBottom: "opacity:0;rotateX:-60deg;transOrigX:50%;transOrigY:100%;easing:easeSwingInOut;",
            signSwingLeft: "opacity:0;rotateY:-60deg;transOrigX:0%;transOrigY:50%;easing:easeSwingInOut;",
            wiggleX: "opacity:0;rotateX:-90deg;transOrigX:50%;transOrigY:50%;easing:easeSwingInOut;",
            wiggleY: "opacity:0;rotateY:-90deg;transOrigX:50%;transOrigY:50%;easing:easeSwingInOut;",
            dropUp: "opacity:0;transY: 250px;rotateZ:20deg;transOrigX:50%;transOrigY:50%;easing:easeBounceBackHard;",
            dropDown: "opacity:0;transY: -250px;rotateZ:-20deg;transOrigX:0%;transOrigY:0%;easing:easeBounceBackHard;",
            rollInLeft: "opacity:0;transX: -250px;transY: 200px;rotateZ: -120px;transOrigX:0%;transOrigY:0%;easing:easeFastSlow;",
            rollInRight: "opacity:0;transX: 250px;transY: 200px;rotateZ: 120px;transOrigX:100%;transOrigY:0%;easing:easeFastSlow;",
            turnInRight: "opacity:0;transX: 250px;rotateX:20deg;rotateY:75deg;transOrigX:0%;transOrigY:0%;easing:easeBounceBack;",
            turnInLeft: "opacity:0;transX: -250px;rotateX:20deg;rotateY:-75deg;transOrigX:100%;transOrigY:0%;easing:easeBounceBack;"
        },
        w = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (w = !0),
        function () {
            for (var a = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[e[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function (e) {
                var i = (new Date).getTime(),
                    n = Math.max(0, 16 - (i - a)),
                    r = t.setTimeout(function () {
                        e(i + n)
                    }, n);
                return a = i + n, r
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (a) {
                clearTimeout(a)
            })
        }(), a.fn.horizon = function (e) {
            return this.each(function () {
                var t = a(this);
                if (!t.data("horizon")) {
                    var i = new r(this, e);
                    t.data("horizon", i)
                }
            })
        }, a.fn.horizon.tmhOpts = {
            easing: "swing",
            easingFallback: "swing",
            speed: "1000ms",
            threshold: 1,
            recurring: !0,
            parallax: !1,
            parallaxSpeed: .2,
            inView: null,
            outOfView: null
        }
}(jQuery, document, window);
/**
 *	Retina replacement Plugin
 *	Version: 1.0
 */
! function (i) {
    "use strict";
    i.fn.retinizeImages = function (e) {
        var t = i.extend({
            retinaSupportMobile: !1,
            retinaSuffix: "@2x"
        }, e),
            a = function () {
                var e, a = i(this);
                if (a.is("img")) e = a.attr("src");
                else if ("none" !== a.css("background-image")) e = a.css("background-image").replace(/^url\(["']?/, "").replace(/["']?\)$/, "");
                else {
                    if (!a.is("[data-2x]")) return !1;
                    e = a.data("2x")
                }
                if (n && !t.retinaSupportMobile && !a.is("[data-retina-mobile]") || a.is("[data-no-retina]") || e.match(/\.(svg)/i) || e.indexOf(t.retinaSuffix) >= 0) return !1;
                if (window.isRetinaDevice()) {
                    var r = e.substr(e.lastIndexOf("."));
                    e = e.replace(r, t.retinaSuffix + r), i.ajax({
                        type: "GET",
                        url: e,
                        success: function () {
                            i("<../img/>").attr("src", e).one("load", function () {
                                a.is("img") ? a.attr("src", e) : a.css("background-image", "url(" + e + ")")
                            })
                        }
                    })
                }
            };
        window.isRetinaDevice = function () {
            var i = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return this.devicePixelRatio > 1 || this.matchMedia && this.matchMedia(i).matches ? !0 : !1
        };
        var n = !1;
        return (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (n = !0), this.each(a)
    }
}(jQuery);
/**
 *	Equalize
 *	Version: 1.0
 */
! function (e) {
    "use strict";
    var t = function (t, i) {
        var s = e.extend({}, e.fn.equalizeHeights.tmeOpts, i),
            a = e(t),
            h = this,
            u = 0,
            n = 0,
            o = 0,
            r = [],
            c = 0,
            d = a.children(),
            g = a.data("leader"),
            l = e('[data-follow="' + g + '"]');
        h.updateHeights = function () {
            o = 0, s.equalizeByGroup ? d.each(function () {
                n = e(this).position().top, e(this).attr("class", function (e, t) {
                    return t.replace(/row-\d+/, "")
                }).css({
                    height: "auto"
                }), n !== u && (o++, c = 0, r.length = 0), 0 === o && (o = 1, c = 0), r.push(e(this)), c = c > e(this).outerHeight() ? c : e(this).outerHeight(), e.each(r, function (e) {
                    r[e].addClass("row-" + o).css({
                        height: c + "px"
                    })
                }), u = n
            }) : (e(this).css({
                height: "auto"
            }), c = 0, c = a.outerHeight(), l.css({
                height: c + "px"
            }))
        }, h.clearHeights = function () {
            s.equalizeByGroup ? d.css({
                height: "auto"
            }) : l.css({
                height: "auto"
            })
        }, e(window).on("resize", function () {
            return s.updateOnResize ? void (e(window).width() > s.clearUnder ? h.updateHeights() : h.clearHeights()) : !1
        }), h.updateHeights()
    };
    e.fn.equalizeHeights = function (i) {
        return this.each(function () {
            var s = e(this);
            if (!s.data("equalizeHeights")) {
                var a = new t(this, i);
                s.data("equalizeHeights", a)
            }
        })
    }, e.fn.equalizeHeights.tmeOpts = {
        equalizeByGroup: !0,
        updateOnResize: !0,
        clearUnder: 479
    }
}(jQuery);
/**
 *	Counter
 *	Version: 1.0.1
 */
! function (a) {
    "use strict";
    var b = function (b, c) {
        function d(a) {
            return a.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")
        }
        var e, f = a.extend({}, a.fn.counter.tmcOpts, c),
            g = a(b),
            h = this;
        h.startCounter = function () {
            h.clearCounter();
            var a = g.data("count-from") ? parseFloat(g.data("count-from")) : f.from,
                b = g.data("count-to") ? parseFloat(g.data("count-to")) : f.to,
                c = g.data("count-interval") ? parseFloat(g.data("count-interval")) : f.interval,
                i = a <= b ? "up" : "down";
            e = setInterval(function () {
                (a === b || isNaN(a) || isNaN(b)) && (clearInterval(e), f.onComplete && f.onComplete()), g.text(d(a)), "up" === i ? a++ : a--
            }, c)
        }, h.clearCounter = function () {
            clearInterval(e);
            var a = g.data("count-from") ? parseFloat(g.data("count-from")) : f.from;
            g.html(a)
        }, f.autoStart && h.startCounter()
    };
    a.fn.counter = function (c) {
        return this.each(function () {
            var d = a(this);
            if (!d.data("counter")) {
                var e = new b(this, c);
                d.data("counter", e)
            }
        })
    }, a.fn.counter.tmcOpts = {
        autoStart: !0,
        from: 0,
        to: 100,
        interval: 20,
        onComplete: null
    }
}(jQuery);
/**
 *	PreloadPage
 *	Version: 1.0
 */
! function (e) {
    "use strict";
    var t = function (t, a, i) {
        a && e.extend(u, a);
        var r = e(t).is("[data-loader-type]") ? e(t).data("loader-type") : "default";
        u.showPercentage = e(t).is("[data-show-percentage]") ? !0 : u.showPercentage, e(t).css({
            visibility: "visible"
        }), "function" == typeof i && (onComplete = i), n() ? onComplete() : o(t, r)
    },
        n = function () {
            if (u.onetimeLoad) {
                for (var e, t = document.cookie.split("; "), n = 0; e = t[n] && t[n].split("="); n++)
                    if ("preloadPage" === e.shift()) return e.join("=");
                return !1
            }
            return !1
        },
        a = function (e) {
            if (u.onetimeLoad) {
                var t = new Date;
                t.setDate(t.getDate() + e);
                var n = null === e ? "" : "expires=" + t.toUTCString();
                document.cookie = "preloadPage=loaded; " + n
            }
        },
        o = function (t, n) {
            var a = e("<div />").attr("class", "tm-pageloader-wrapper").css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 9999999
            }).appendTo(t),
                o = e("<div />").attr("class", "tm-pageloader").addClass(n).appendTo(a);
            if ("none" != n) {
                e("<div />").attr("id", "tm-pl-bar").css({
                    width: "0%",
                    height: "100%"
                }).appendTo(o)
            }
            if (u.showPercentage) {
                e("<div />").attr("id", "tm-pl-percentage").appendTo(o)
            }
            i(t)
        },
        i = function (t) {
            e(t).find("*:not(script)").each(function () {
                var t = "";
                if (-1 == e(this).css("background-image").indexOf("none") && -1 == e(this).css("background-image").indexOf("-gradient")) {
                    if (t = e(this).css("background-image"), -1 != t.indexOf("url")) {
                        var n = t.match(/url\((.*?)\)/);
                        t = n[1].replace(/\"/g, "")
                    }
                } else "img" == e(this).get(0).nodeName.toLowerCase() && "undefined" != typeof e(this).attr("src") && (t = e(this).attr("src"));
                t.length > 0 && (l.push(t), r(t))
            })
        },
        r = function (t) {
            var n = new Image;
            e(n).one("error", function () {
                p.push(e(this).attr("src")), s()
            }).one("load", function () {
                s()
            }).attr("src", t)
        },
        s = function () {
            f++;
            var t = ".tm-pageloader-wrapper",
                n = "#tm-pl-bar",
                o = "#tm-pl-percentage",
                i = Math.round(f / l.length * 100);
            e(n).stop().animate({
                width: i + "%"
            }, 500, "linear"), u.showPercentage && e(o).text(i + "%"), f >= l.length && (f = l.length, a(), u.showPercentage && e(o).text("100%"), e(n).stop().animate({
                width: "100%"
            }, 1e3, "linear", function () {
                c(t)
            }), d())
        },
        c = function (t) {
            e(t).delay(100).fadeOut(1e3, function () {
                e(t).remove(), e("body").removeClass("preload-page"), u.onComplete()
            })
        },
        d = function () {
            if (p.length > 0) {
                var e;
                e += p.length + " image file/s can not be found. \n\r", e += "Please check:\n\r";
                for (var t = 0; t < p.length; t++) e += "- " + p[t] + "\n\r";
                return console.log(e), !0
            }
            return !1
        },
        l = [],
        p = [],
        f = 0,
        u = {
            showPercentage: !1,
            onetimeLoad: !1,
            onComplete: null
        };
    e.fn.preloadPage = function (e, n) {
        return this.each(function () {
            new t(this, e, n)
        })
    }
}(jQuery);
/**
 *	Freeze
 *	Version: 1.0.3
 */
! function (a, b, c, d) {
    "use strict";
    var e = function (b, d) {
        var e = a.extend({}, a.fn.freeze.tmfOpts, d);
        b = a(b), e.extraSpaceTop = b.data("extra-space-top") ? b.data("extra-space-top") : e.extraSpaceTop, e.extraSpaceBottom = b.data("extra-space-bottom") ? b.data("extra-space-bottom") : e.extraSpaceBottom, e.pushSection = b.data("push-section") ? b.data("push-section") : e.pushSection, e.threshold = b.data("threshold") ? b.data("threshold") : e.threshold;
        var g = (a(c).scrollTop(), b.offset().top),
            i = !1;
        b.data("startup", !0).data("orignDistance", g).css({
            width: "100%",
            display: "flex",
            flexDirection: "column"
        }), h(b, e), a(c).on("scroll resize", function () {
            f(b), b.data("startup") || h(b, e), a(c).width() >= e.breakpoint && i ? (i = !1, g = b.offset().top, b.data("orignDistance", g)) : a(c).width() < e.breakpoint && (i = !0)
        }), b.wrapAll("<div class='freeze-wrapper' />"), f(b)
    },
        f = function (a) {
            var b = a.outerHeight(!0);
            a.parent().css({
                height: b + "px"
            })
        },
        g = function (b, d) {
            var e = a(c).width();
            if (e >= 960) {
                var f = a(c).scrollTop(),
                    g = b.data("orignDistance"),
                    h = b.outerHeight(!0),
                    i = Math.abs(a(d.pushSection).offset().top - (g + h) + d.extraSpaceTop),
                    j = g - f - d.extraSpaceTop,
                    k = g + (a(d.pushSection).offset().top - (g + h)) - f - d.extraSpaceTop;
                j <= 0 || j <= 0 && b.data("startup") ? (b.addClass("sticky").css({
                    maxWidth: a(b).parent().width() + "px",
                    position: "fixed",
                    top: d.extraSpaceTop + "px",
                    zIndex: 5
                }), k <= 0 + d.extraSpaceBottom && b.removeClass("sticky").css({
                    top: i - d.extraSpaceTop - d.extraSpaceBottom + "px",
                    position: "relative",
                    zIndex: 5
                })) : (f <= b.offset().top - d.extraSpaceTop && b.addClass("sticky").css({
                    maxWidth: a(b).parent().width() + "px",
                    position: "fixed",
                    top: d.extraSpaceTop + "px",
                    zIndex: 5
                }), b.offset().top <= g && b.removeClass("sticky").css({
                    maxWidth: "",
                    position: "",
                    top: "",
                    zIndex: ""
                }))
            } else b.removeClass("sticky").css({
                maxWidth: "",
                position: "",
                top: "",
                zIndex: ""
            });
            b.data("startup", !1)
        },
        h = function (a, b) {
            a.data("scrolling") || (requestAnimationFrame(function () {
                i(a, b)
            }), a.data("scrolling", !0))
        },
        i = function (a, b) {
            j(a, b) || a.data("startup") ? a.removeClass("out-of-view") : a.addClass("out-of-view"), g(a, b), a.data("scrolling", !1)
        },
        j = function (b, d) {
            var e = a(c).scrollTop(),
                f = e + a(c).height(),
                g = b.data("threshold") ? parseFloat(b.data("threshold")) : d.threshold,
                h = b.data("ty") ? parseFloat(b.data("ty")) : 0,
                i = (b.offset().top, b.offset().top - h),
                j = i + b.outerHeight() - b.outerHeight() * g,
                k = i + b.outerHeight() * g;
            return f >= k && e <= j
        },
        k = !1;
    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (k = !0),
        function () {
            for (var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0; d < b.length && !c.requestAnimationFrame; ++d) c.requestAnimationFrame = c[b[d] + "RequestAnimationFrame"], c.cancelAnimationFrame = c[b[d] + "CancelAnimationFrame"] || c[b[d] + "CancelRequestAnimationFrame"];
            c.requestAnimationFrame || (c.requestAnimationFrame = function (b, d) {
                var e = (new Date).getTime(),
                    f = Math.max(0, 16 - (e - a)),
                    g = c.setTimeout(function () {
                        b(e + f)
                    }, f);
                return a = e + f, g
            }), c.cancelAnimationFrame || (c.cancelAnimationFrame = function (a) {
                clearTimeout(a)
            })
        }(), a.fn.freeze = function (b) {
            return this.each(function () {
                if (k) return !1;
                var c = a(this);
                if (!c.data("freeze")) {
                    var d = new e(this, b);
                    c.data("freeze", d)
                }
            })
        }, a.fn.freeze.tmfOpts = {
            extraSpaceTop: 0,
            extraSpaceBottom: 0,
            pushSection: "footer",
            threshold: 1,
            breakpoint: 960
        }
}(jQuery, document, window);
/* THIRD PARTY PLUGINS */
/*! jQuery UI - v1.11.4 - 2015-03-19
 * http://jqueryui.com
 * Includes: effect.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    var t = "ui-effects-",
        i = e;
    e.effects = {
        effect: {}
    },
        function (e, t) {
            function i(e, t, i) {
                var s = d[t.type] || {};
                return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
            }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(h, function (e, a) {
                    var o, r = a.re.exec(i),
                        h = r && a.parse(r),
                        l = a.space || "rgba";
                    return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
                }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
            }

            function n(e, t, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                h = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [e[1], e[2], e[3], e[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (e) {
                        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (e) {
                        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (e) {
                        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (e) {
                        return [e[1], e[2] / 100, e[3] / 100, e[4]]
                    }
                }],
                l = e.Color = function (t, i, s, n) {
                    return new e.Color.fn.parse(t, i, s, n)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                d = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                c = l.support = {},
                p = e("<p>")[0],
                f = e.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
                t.cache = "_" + e, t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), l.fn = e.extend(l.prototype, {
                parse: function (n, o, r, h) {
                    if (n === t) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                    var d = this,
                        c = e.type(n),
                        p = this._rgba = [];
                    return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
                        p[t.idx] = i(n[t.idx], t)
                    }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
                        n[t.cache] && (d[t.cache] = n[t.cache].slice())
                    }) : f(u, function (t, s) {
                        var a = s.cache;
                        f(s.props, function (e, t) {
                            if (!d[a] && s.to) {
                                if ("alpha" === e || null == n[e]) return;
                                d[a] = s.to(d._rgba)
                            }
                            d[a][t.idx] = i(n[e], t, !0)
                        }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                    }), this) : t
                },
                is: function (e) {
                    var i = l(e),
                        s = !0,
                        n = this;
                    return f(u, function (e, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                        })), s
                    }), s
                },
                _space: function () {
                    var e = [],
                        t = this;
                    return f(u, function (i, s) {
                        t[s.cache] && e.push(i)
                    }), e.pop()
                },
                transition: function (e, t) {
                    var s = l(e),
                        n = s._space(),
                        a = u[n],
                        o = 0 === this.alpha() ? l("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        h = r.slice();
                    return s = s[a.cache], f(a.props, function (e, n) {
                        var a = n.idx,
                            o = r[a],
                            l = s[a],
                            u = d[n.type] || {};
                        null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                    }), this[n](h)
                },
                blend: function (t) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(t)._rgba;
                    return l(e.map(i, function (e, t) {
                        return (1 - s) * n[t] + s * e
                    }))
                },
                toRgbaString: function () {
                    var t = "rgba(",
                        i = e.map(this._rgba, function (e, t) {
                            return null == e ? t > 2 ? 1 : 0 : e
                        });
                    return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                },
                toHslaString: function () {
                    var t = "hsla(",
                        i = e.map(this.hsla(), function (e, t) {
                            return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                        });
                    return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                },
                toHexString: function (t) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t, i, s = e[0] / 255,
                    n = e[1] / 255,
                    a = e[2] / 255,
                    o = e[3],
                    r = Math.max(s, n, a),
                    h = Math.min(s, n, a),
                    l = r - h,
                    u = r + h,
                    d = .5 * u;
                return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
            }, u.hsla.from = function (e) {
                if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                var t = e[0] / 360,
                    i = e[1],
                    s = e[2],
                    a = e[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
            }, f(u, function (s, n) {
                var a = n.props,
                    o = n.cache,
                    h = n.to,
                    u = n.from;
                l.fn[s] = function (s) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                    var n, r = e.type(s),
                        d = "array" === r || "object" === r ? s : arguments,
                        c = this[o].slice();
                    return f(a, function (e, t) {
                        var s = d["object" === r ? e : t.idx];
                        null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                    }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
                }, f(a, function (t, i) {
                    l.fn[t] || (l.fn[t] = function (n) {
                        var a, o = e.type(n),
                            h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
                            l = this[h](),
                            u = l[i.idx];
                        return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                    })
                })
            }), l.hook = function (t) {
                var i = t.split(" ");
                f(i, function (t, i) {
                    e.cssHooks[i] = {
                        set: function (t, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                                if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                            r = e.css(o, "backgroundColor"), o = o.parentNode
                                        } catch (h) { }
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (h) { }
                        }
                    }, e.fx.step[i] = function (t) {
                        t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            }, l.hook(o), e.cssHooks.borderColor = {
                expand: function (e) {
                    var t = {};
                    return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                        t["border" + s + "Color"] = e
                    }), t
                }
            }, a = e.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(i),
        function () {
            function t(t) {
                var i, s, n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(t, i) {
                var s, n, o = {};
                for (s in i) n = i[s], t[s] !== n && (a[s] || (e.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, s) {
                e.fx.step[s] = function (e) {
                    ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (i.style(e.elem, s, e.end), e.setAttr = !0)
                }
            }), e.fn.addBack || (e.fn.addBack = function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }), e.effects.animateClass = function (i, a, o, r) {
                var h = e.speed(a, o, r);
                return this.queue(function () {
                    var a, o = e(this),
                        r = o.attr("class") || "",
                        l = h.children ? o.find("*").addBack() : o;
                    l = l.map(function () {
                        var i = e(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    }), a = function () {
                        e.each(n, function (e, t) {
                            i[t] && o[t + "Class"](i[t])
                        })
                    }, a(), l = l.map(function () {
                        return this.end = t(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), l = l.map(function () {
                        var t = this,
                            i = e.Deferred(),
                            s = e.extend({}, h, {
                                queue: !1,
                                complete: function () {
                                    i.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), e.when.apply(e, l.get()).done(function () {
                        a(), e.each(arguments, function () {
                            var t = this.el;
                            e.each(this.diff, function (e) {
                                t.css(e, "")
                            })
                        }), h.complete.call(o[0])
                    })
                })
            }, e.fn.extend({
                addClass: function (t) {
                    return function (i, s, n, a) {
                        return s ? e.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.addClass),
                removeClass: function (t) {
                    return function (i, s, n, a) {
                        return arguments.length > 1 ? e.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : t.apply(this, arguments)
                    }
                }(e.fn.removeClass),
                toggleClass: function (t) {
                    return function (i, s, n, a, o) {
                        return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
                            add: i
                        } : {
                            remove: i
                        }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                            toggle: i
                        }, s, n, a)
                    }
                }(e.fn.toggleClass),
                switchClass: function (t, i, s, n, a) {
                    return e.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, s, n, a)
                }
            })
        }(),
        function () {
            function i(t, i, s, n) {
                return e.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
            }

            function s(t) {
                return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
            }
            e.extend(e.effects, {
                version: "1.11.4",
                save: function (e, i) {
                    for (var s = 0; i.length > s; s++) null !== i[s] && e.data(t + i[s], e[0].style[i[s]])
                },
                restore: function (e, i) {
                    var s, n;
                    for (n = 0; i.length > n; n++) null !== i[n] && (s = e.data(t + i[n]), void 0 === s && (s = ""), e.css(i[n], s))
                },
                setMode: function (e, t) {
                    return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function (e, t) {
                    var i, s;
                    switch (e[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = e[0] / t.height
                    }
                    switch (e[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = e[1] / t.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function (t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        "float": t.css("float")
                    },
                        s = e("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: t.width(),
                            height: t.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (e.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), e.each(["top", "left", "bottom", "right"], function (e, s) {
                        i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(n), s.css(i).show()
                },
                removeWrapper: function (t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
                },
                setTransition: function (t, i, s, n) {
                    return n = n || {}, e.each(i, function (e, i) {
                        var a = t.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), e.fn.extend({
                effect: function () {
                    function t(t) {
                        function i() {
                            e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                        }
                        var n = e(this),
                            a = s.complete,
                            r = s.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                    }
                    var s = i.apply(this, arguments),
                        n = s.mode,
                        a = s.queue,
                        o = e.effects.effect[s.effect];
                    return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
                        s.complete && s.complete.call(this)
                    }) : a === !1 ? this.each(t) : this.queue(a || "fx", t)
                },
                show: function (e) {
                    return function (t) {
                        if (s(t)) return e.apply(this, arguments);
                        var n = i.apply(this, arguments);
                        return n.mode = "show", this.effect.call(this, n)
                    }
                }(e.fn.show),
                hide: function (e) {
                    return function (t) {
                        if (s(t)) return e.apply(this, arguments);
                        var n = i.apply(this, arguments);
                        return n.mode = "hide", this.effect.call(this, n)
                    }
                }(e.fn.hide),
                toggle: function (e) {
                    return function (t) {
                        if (s(t) || "boolean" == typeof t) return e.apply(this, arguments);
                        var n = i.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }
                }(e.fn.toggle),
                cssUnit: function (t) {
                    var i = this.css(t),
                        s = [];
                    return e.each(["em", "px", "%", "pt"], function (e, t) {
                        i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                    }), s
                }
            })
        }(),
        function () {
            var t = {};
            e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
                t[i] = function (t) {
                    return Math.pow(t, e + 2)
                }
            }), e.extend(t, {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function (e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function (e) {
                    for (var t, i = 4;
                        ((t = Math.pow(2, --i)) - 1) / 11 > e;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            }), e.each(t, function (t, i) {
                e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                    return 1 - i(1 - e)
                }, e.easing["easeInOut" + t] = function (e) {
                    return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
                }
            })
        }(), e.effects
});
/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function () {
    "use strict";

    function e() { }

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        s = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e),
            s = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, s = this.getListenersAsObject(e);
        for (r in s) s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, s = e ? this.removeListener : this.addListener,
            o = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) s.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, s, o = this.getListenersAsObject(e);
        for (r in o)
            if (o.hasOwnProperty(r))
                for (i = o[r].length; i--;) n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = s, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function (e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function () { };
        n.addEventListener ? i = function (e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function (e, n, i) {
            e[n + i] = i.handleEvent ? function () {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function () {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function () { };
        n.removeEventListener ? r = function (e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function (e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var s = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : e.eventie = s
    }(this),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
            return t(e, n, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function (e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" == f.call(e)
        }

        function s(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function o(e, t, n) {
            if (!(this instanceof o)) return new o(e, t, n);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function () {
                r.check()
            })
        }

        function h(e) {
            this.img = e
        }

        function a(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var u = e.jQuery,
            c = e.console,
            f = Object.prototype.toString;
        o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [];
            for (var e = 0; e < this.elements.length; e++) {
                var t = this.elements[e];
                this.addElementImages(t)
            }
        }, o.prototype.addElementImages = function (e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && d[t]) {
                for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var s = e.querySelectorAll(this.options.background);
                    for (i = 0; i < s.length; i++) {
                        var o = s[i];
                        this.addElementBackgroundImages(o)
                    }
                }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        o.prototype.addElementBackgroundImages = function (e) {
            for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
                var r = i && i[1];
                r && this.addBackground(r, e), i = n.exec(t.backgroundImage)
            }
        };
        var m = e.getComputedStyle || function (e) {
            return e.currentStyle
        };
        return o.prototype.addImage = function (e) {
            var t = new h(e);
            this.images.push(t)
        }, o.prototype.addBackground = function (e, t) {
            var n = new a(e, t);
            this.images.push(n)
        }, o.prototype.check = function () {
            function e(e, n, i) {
                setTimeout(function () {
                    t.progress(e, n, i)
                })
            }
            var t = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var n = 0; n < this.images.length; n++) {
                var i = this.images[n];
                i.once("progress", e), i.check()
            }
        }, o.prototype.progress = function (e, t, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t)
        }, o.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, h.prototype = new t, h.prototype.check = function () {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src))
        }, h.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, h.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("progress", this, this.img, t)
        }, h.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, h.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, h.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, h.prototype.unbindEvents = function () {
            n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype = new h, a.prototype.check = function () {
            n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function () {
            n.unbind(this.img, "load", this), n.unbind(this.img, "error", this)
        }, a.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emit("progress", this, this.element, t)
        }, o.makeJQueryPlugin = function (t) {
            t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
                var n = new o(this, e, t);
                return n.jqDeferred.promise(u(this))
            })
        }, o.makeJQueryPlugin(), o
    });
/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */
(function (t) {
    function e() { }

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function n(e, i) {
            t.fn[e] = function (n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f) return f
                            } else r("no such method '" + n + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            };
            return t.bridget = function (t, e) {
                i(e), n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window),
    function (t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            o = function () { };
        i.addEventListener ? o = function (t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (o = function (t, i, o) {
            t[i + o] = o.handleEvent ? function () {
                var i = e(t);
                o.handleEvent.call(o, i)
            } : function () {
                var i = e(t);
                o.call(t, i)
            }, t.attachEvent("on" + i, t[i + o])
        });
        var n = function () { };
        i.removeEventListener ? n = function (t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (n = function (t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (o) {
                t[e + i] = void 0
            }
        });
        var r = {
            bind: o,
            unbind: n
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(this),
    function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : r.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== n.readyState;
            if (!e.isReady && !i) {
                e.isReady = !0;
                for (var o = 0, s = r.length; s > o; o++) {
                    var a = r[o];
                    a()
                }
            }
        }

        function o(o) {
            return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
        }
        var n = t.document,
            r = [];
        e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
    }(this),
    function () {
        function t() { }

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }
        var o = t.prototype,
            n = this,
            r = n.EventEmitter;
        o.getListeners = function (t) {
            var e, i, o = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
            } else e = o[t] || (o[t] = []);
            return e
        }, o.flattenListeners = function (t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, o.getListenersAsObject = function (t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, o.addListener = function (t, i) {
            var o, n = this.getListenersAsObject(t),
                r = "object" == typeof i;
            for (o in n) n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
                listener: i,
                once: !1
            });
            return this
        }, o.on = i("addListener"), o.addOnceListener = function (t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, o.once = i("addOnceListener"), o.defineEvent = function (t) {
            return this.getListeners(t), this
        }, o.defineEvents = function (t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, o.removeListener = function (t, i) {
            var o, n, r = this.getListenersAsObject(t);
            for (n in r) r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
            return this
        }, o.off = i("removeListener"), o.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, o.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, o.manipulateListeners = function (t, e, i) {
            var o, n, r = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (o = i.length; o--;) r.call(this, e, i[o]);
            else
                for (o in e) e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
            return this
        }, o.removeEvent = function (t) {
            var e, i = typeof t,
                o = this._getEvents();
            if ("string" === i) delete o[t];
            else if (t instanceof RegExp)
                for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
            else delete this._events;
            return this
        }, o.removeAllListeners = i("removeEvent"), o.emitEvent = function (t, e) {
            var i, o, n, r, s = this.getListenersAsObject(t);
            for (n in s)
                if (s.hasOwnProperty(n))
                    for (o = s[n].length; o--;) i = s[n][o], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, o.trigger = i("emitEvent"), o.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, o.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, o._getOnceReturnValue = function () {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, o._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return n.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof o[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, n = 0, r = i.length; r > n; n++)
                    if (e = i[n] + t, "string" == typeof o[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            o = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function (t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
                var o = s[e];
                t[o] = 0
            }
            return t
        }

        function o(t) {
            function o(t) {
                if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var o = r(t);
                    if ("none" === o.display) return i();
                    var n = {};
                    n.width = t.offsetWidth, n.height = t.offsetHeight;
                    for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                        var d = s[f],
                            l = o[d];
                        l = a(t, l);
                        var y = parseFloat(l);
                        n[d] = isNaN(y) ? 0 : y
                    }
                    var m = n.paddingLeft + n.paddingRight,
                        g = n.paddingTop + n.paddingBottom,
                        v = n.marginLeft + n.marginRight,
                        _ = n.marginTop + n.marginBottom,
                        I = n.borderLeftWidth + n.borderRightWidth,
                        L = n.borderTopWidth + n.borderBottomWidth,
                        z = h && u,
                        S = e(o.width);
                    S !== !1 && (n.width = S + (z ? 0 : m + I));
                    var b = e(o.height);
                    return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
                }
            }

            function a(t, e) {
                if (n || -1 === e.indexOf("%")) return e;
                var i = t.style,
                    o = i.left,
                    r = t.runtimeStyle,
                    s = r && r.left;
                return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
            }
            var u, p = t("boxSizing");
            return function () {
                if (p) {
                    var t = document.createElement("div");
                    t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[p] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(t);
                    var o = r(t);
                    u = 200 === e(o.width), i.removeChild(t)
                }
            }(), o
        }
        var n = t.getComputedStyle,
            r = n ? function (t) {
                return n(t, null)
            } : function (t) {
                return t.currentStyle
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function (t, e) {
        function i(t, e) {
            return t[a](e)
        }

        function o(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            o(t);
            for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
                if (i[n] === t) return !0;
            return !1
        }

        function r(t, e) {
            return o(t), i(t, e)
        }
        var s, a = function () {
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
                var n = t[i],
                    r = n + "MatchesSelector";
                if (e[r]) return r
            }
        }();
        if (a) {
            var u = document.createElement("div"),
                p = i(u, "div");
            s = p ? i : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return s
        }) : window.matchesSelector = s
    }(this, Element.prototype),
    function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function n(t, n, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var u = r("transition"),
                p = r("transform"),
                h = u && p,
                f = !!r("perspective"),
                c = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[u],
                d = ["transform", "transition", "transitionDuration", "transitionProperty"],
                l = function () {
                    for (var t = {}, e = 0, i = d.length; i > e; e++) {
                        var o = d[e],
                            n = r(o);
                        n && n !== o && (t[o] = n)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function () {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function () {
                this.size = n(this.element)
            }, a.prototype.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = l[i] || i;
                    e[o] = t[i]
                }
            }, a.prototype.getPosition = function () {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    o = e.isOriginTop,
                    n = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[o ? "top" : "bottom"], 10);
                n = isNaN(n) ? 0 : n, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                n -= i ? a.paddingLeft : a.paddingRight, r -= o ? a.paddingTop : a.paddingBottom, this.position.x = n, this.position.y = r
            }, a.prototype.layoutPosition = function () {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var y = f ? function (t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function (t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = n === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - i,
                    u = e - o,
                    p = {},
                    h = this.layout.options;
                a = h.isOriginLeft ? a : -a, u = h.isOriginTop ? u : -u, p.transform = y(a, u), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = p && o(p) + ",opacity";
            a.prototype.enableTransition = function () {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(c, this, !1))
            }, a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function (t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        o = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                        var n = e.onEnd[o];
                        n.call(this), delete e.onEnd[o]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(c, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function () {
                this.css(v)
            }, a.prototype.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function () {
                if (!u || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function () {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function () {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function () {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function () {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function (t) {
                return r(t, null)
            } : function (t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === f.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = d(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, f, d, l, y) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t)) return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var o = ++g;
                this.element.outlayerGUID = o, v[o] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                v = {};
            return m.namespace = "outlayer", m.Item = y, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, f.prototype), m.prototype.option = function (t) {
                e(this.options, t)
            }, m.prototype._create = function () {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                    var s = e[n],
                        a = new i(s, this);
                    o.push(a)
                }
                return o
            }, m.prototype._filterFindItemElements = function (t) {
                t = o(t);
                for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                    var s = t[n];
                    if (c(s))
                        if (e) {
                            l(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++) i.push(a[u])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function () {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
                this.getSize()
            }, m.prototype.getSize = function () {
                this.size = d(this.element)
            }, m.prototype._getMeasurement = function (t, e) {
                var i, o = this.options[t];
                o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
            }, m.prototype.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function (t) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i];
                    n.isIgnored || e.push(n)
                }
                return e
            }, m.prototype._layoutItems = function (t, e) {
                function i() {
                    o.emitEvent("layoutComplete", [o, t])
                }
                var o = this;
                if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i);
                for (var n = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        u = this._getItemLayoutPosition(a);
                    u.item = a, u.isInstant = e || a.isLayoutInstant, n.push(u)
                }
                this._processLayoutQueue(n)
            }, m.prototype._getItemLayoutPosition = function () {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function (t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this._positionItem(o.item, o.x, o.y, o.isInstant)
                }
            }, m.prototype._positionItem = function (t, e, i, o) {
                o ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function () {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function () {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function (t, e, i) {
                function o() {
                    return n++, n === r && i.call(s), !0
                }
                for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    p.on(e, o)
                }
            }, m.prototype.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function (t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        this.ignore(o)
                    }
                }
            }, m.prototype.unstamp = function (t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var o = t[e];
                        n(o, this.stamps), this.unignore(o)
                    }
            }, m.prototype._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
            }, m.prototype._manageStamps = function () {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    o = d(t),
                    n = {
                        left: e.left - i.left - o.marginLeft,
                        top: e.top - i.top - o.marginTop,
                        right: i.right - e.right - o.marginRight,
                        bottom: i.bottom - e.bottom - o.marginBottom
                    };
                return n
            }, m.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function () {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function () {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function () {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function () {
                var t = d(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function (t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.reveal()
                    }
            }, m.prototype.hide = function (t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var o = t[i];
                        o.hide()
                    }
            }, m.prototype.getItem = function (t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    if (o.element === t) return o
                }
            }, m.prototype.getItems = function (t) {
                if (t && t.length) {
                    for (var e = [], i = 0, o = t.length; o > i; i++) {
                        var n = t[i],
                            r = this.getItem(n);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function (t) {
                t = o(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function () {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), n(s, this.items)
                    }
                }
            }, m.prototype.destroy = function () {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var o = this.items[e];
                    o.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
            }, m.data = function (t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, m.create = function (t, i) {
                function o() {
                    m.apply(this, arguments)
                }
                return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function () {
                    y.apply(this, arguments)
                }, o.Item.prototype = new y, s(function () {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                        var f, c = i[s],
                            d = c.getAttribute(n);
                        try {
                            f = d && JSON.parse(d)
                        } catch (l) {
                            u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                            continue
                        }
                        var y = new o(c, f);
                        p && p.data(c, t, y)
                    }
                }), p && p.bridget && p.bridget(t, o), o
            }, m.Item = y, m
        }
        var a = t.document,
            u = t.console,
            p = t.jQuery,
            h = function () { },
            f = Object.prototype.toString,
            c = "object" == typeof HTMLElement ? function (t) {
                return t instanceof HTMLElement
            } : function (t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            d = Array.prototype.indexOf ? function (t, e) {
                return t.indexOf(e)
            } : function (t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function (t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }
            return e.prototype = new t.Item, e.prototype._create = function () {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function () {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this)
                    }
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window),
    function (t) {
        function e(t, e) {
            function i(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }
            return function () {
                function t(t) {
                    return function () {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }
                for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                    var s = o[n];
                    i.prototype[s] = t(s)
                }
            }(), i.prototype.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight !== this.isotope.size.innerHeight
            }, i.prototype._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments)
            }, i.prototype.getColumnWidth = function () {
                this.getSegmentSize("column", "Width")
            }, i.prototype.getRowHeight = function () {
                this.getSegmentSize("row", "Height")
            }, i.prototype.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if (this._getMeasurement(i, o), !this[i]) {
                    var n = this.getFirstItemSize();
                    this[i] = n && n[o] || this.isotope.size["inner" + e]
                }
            }, i.prototype.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, i.prototype.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments)
            }, i.prototype.getSize = function () {
                this.isotope.getSize(), this.size = this.isotope.size
            }, i.modes = {}, i.create = function (t, e) {
                function o() {
                    i.apply(this, arguments)
                }
                return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
            }, i
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window),
    function (t) {
        function e(t, e) {
            var o = t.create("masonry");
            return o.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, o.prototype.measureColumns = function () {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = i && e(i).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, o.prototype.getContainerWidth = function () {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                    i = e(t);
                this.containerWidth = i && i.innerWidth
            }, o.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    o = e && 1 > e ? "round" : "ceil",
                    n = Math[o](t.size.outerWidth / this.columnWidth);
                n = Math.min(n, this.cols);
                for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                    x: this.columnWidth * a,
                    y: s
                }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++) this.colYs[a + f] = p;
                return u
            }, o.prototype._getColGroup = function (t) {
                if (2 > t) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                    var n = this.colYs.slice(o, o + t);
                    e[o] = Math.max.apply(Math, n)
                }
                return e
            }, o.prototype._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this.options.isOriginLeft ? o.left : o.right,
                    r = n + i.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s);
                var a = Math.floor(r / this.columnWidth);
                a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
                for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++) this.colYs[p] = Math.max(u, this.colYs[p])
            }, o.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, o.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, o.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, o
        }
        var i = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                if (n === e) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window),
    function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t, i) {
            var o = t.create("masonry"),
                n = o.prototype._getElementOffset,
                r = o.prototype.layout,
                s = o.prototype._getMeasurement;
            e(o.prototype, i.prototype), o.prototype._getElementOffset = n, o.prototype.layout = r, o.prototype._getMeasurement = s;
            var a = o.prototype.measureColumns;
            o.prototype.measureColumns = function () {
                this.items = this.isotope.filteredItems, a.call(this)
            };
            var u = o.prototype._manageStamp;
            return o.prototype._manageStamp = function () {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, u.apply(this, arguments)
            }, o
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
    }(window),
    function (t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function () {
                this.x = 0, this.y = 0, this.maxY = 0
            }, e.prototype._getItemLayoutPosition = function (t) {
                t.getSize(), 0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var e = {
                    x: this.x,
                    y: this.y
                };
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
            }, e.prototype._getContainerSize = function () {
                return {
                    height: this.maxY
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function (t) {
        function e(t) {
            var e = t.create("vertical", {
                horizontalAlignment: 0
            });
            return e.prototype._resetLayout = function () {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return this.y += t.size.outerHeight, {
                    x: e,
                    y: i
                }
            }, e.prototype._getContainerSize = function () {
                return {
                    height: this.y
                }
            }, e
        }
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
    }(window),
    function (t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === h.call(t)
        }

        function o(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
            else e.push(t);
            return e
        }

        function n(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t, i, r, u, h) {
            function f(t, e) {
                return function (i, o) {
                    for (var n = 0, r = t.length; r > n; n++) {
                        var s = t[n],
                            a = i.sortData[s],
                            u = o.sortData[s];
                        if (a > u || u > a) {
                            var p = void 0 !== e[s] ? e[s] : e,
                                h = p ? 1 : -1;
                            return (a > u ? 1 : -1) * h
                        }
                    }
                    return 0
                }
            }
            var c = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
            c.Item = u, c.LayoutMode = h, c.prototype._create = function () {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in h.modes) this._initLayoutMode(e)
            }, c.prototype.reloadItems = function () {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, c.prototype._itemize = function () {
                for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                    var n = e[i];
                    n.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, c.prototype._initLayoutMode = function (t) {
                var i = h.modes[t],
                    o = this.options[t] || {};
                this.options[t] = i.options ? e(i.options, o) : o, this.modes[t] = new i(this)
            }, c.prototype.layout = function () {
                return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
            }, c.prototype._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, c.prototype.arrange = function (t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function () {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, c.prototype._filter = function (t) {
                function e() {
                    f.reveal(n), f.hide(r)
                }
                var i = this.options.filter;
                i = i || "*";
                for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                    var p = t[a];
                    if (!p.isIgnored) {
                        var h = s(p);
                        h && o.push(p), h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                    }
                }
                var f = this;
                return this._isInstant ? this._noTransition(e) : e(), o
            }, c.prototype._getFilterTest = function (t) {
                return s && this.options.isJQueryFiltering ? function (e) {
                    return s(e.element).is(t)
                } : "function" == typeof t ? function (e) {
                    return t(e.element)
                } : function (e) {
                    return r(e.element, t)
                }
            }, c.prototype.updateSortData = function (t) {
                this._getSorters(), t = o(t);
                var e = this.getItems(t);
                e = e.length ? e : this.items, this._updateItemsSortData(e)
            }, c.prototype._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = d(i)
                }
            }, c.prototype._updateItemsSortData = function (t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    o.updateSortData()
                }
            };
            var d = function () {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var i = a(t).split(" "),
                        o = i[0],
                        n = o.match(/^\[(.+)\]$/),
                        r = n && n[1],
                        s = e(r, o),
                        u = c.sortDataParsers[i[1]];
                    return t = u ? function (t) {
                        return t && u(s(t))
                    } : function (t) {
                        return t && s(t)
                    }
                }

                function e(t, e) {
                    var i;
                    return i = t ? function (e) {
                        return e.getAttribute(t)
                    } : function (t) {
                        var i = t.querySelector(e);
                        return i && p(i)
                    }
                }
                return t
            }();
            c.sortDataParsers = {
                parseInt: function (t) {
                    return parseInt(t, 10)
                },
                parseFloat: function (t) {
                    return parseFloat(t)
                }
            }, c.prototype._sort = function () {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory),
                        i = f(e, this.options.sortAscending);
                    this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, c.prototype._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, c.prototype._resetLayout = function () {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, c.prototype._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t)
            }, c.prototype._manageStamp = function (t) {
                this._mode()._manageStamp(t)
            }, c.prototype._getContainerSize = function () {
                return this._mode()._getContainerSize()
            }, c.prototype.needsResizeLayout = function () {
                return this._mode().needsResizeLayout()
            }, c.prototype.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i)
                }
            }, c.prototype.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps();
                    var o = this._filterRevealAdded(e);
                    this.layoutItems(i), this.filteredItems = o.concat(this.filteredItems)
                }
            }, c.prototype._filterRevealAdded = function (t) {
                var e = this._noTransition(function () {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, c.prototype.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i, o, n = e.length;
                    for (i = 0; n > i; i++) o = e[i], this.element.appendChild(o.element);
                    var r = this._filter(e);
                    for (this._noTransition(function () {
                        this.hide(r)
                    }), i = 0; n > i; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var l = c.prototype.remove;
            return c.prototype.remove = function (t) {
                t = o(t);
                var e = this.getItems(t);
                if (l.call(this, t), e && e.length)
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        n(s, this.filteredItems)
                    }
            }, c.prototype._noTransition = function (t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var i = t.call(this);
                return this.options.transitionDuration = e, i
            }, c
        }
        var s = t.jQuery,
            a = String.prototype.trim ? function (t) {
                return t.trim()
            } : function (t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            p = u.textContent ? function (t) {
                return t.textContent
            } : function (t) {
                return t.innerText
            },
            h = Object.prototype.toString,
            f = Array.prototype.indexOf ? function (t, e) {
                return t.indexOf(e)
            } : function (t, e) {
                for (var i = 0, o = t.length; o > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window);
/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
! function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : e.fluidvids = t()
}(this, function () {
    "use strict";

    function e(e) {
        return new RegExp("^(https?:)?//(?:" + d.players.join("|") + ").*$", "i").test(e)
    }

    function t(e, t) {
        return parseInt(e, 10) / parseInt(t, 10) * 100 + "%"
    }

    function i(i) {
        if (e(i.src) && !i.getAttribute("data-fluidvids")) {
            var n = document.createElement("div");
            i.parentNode.insertBefore(n, i), i.className += (i.className ? " " : "") + "fluidvids-item", i.setAttribute("data-fluidvids", "loaded"), n.className += "fluidvids", n.style.paddingTop = t(i.height, i.width), n.appendChild(i)
        }
    }

    function n() {
        var e = document.createElement("div");
        e.innerHTML = "<p>x</p><style>" + o + "</style>", r.appendChild(e.childNodes[1])
    }
    var d = {
        selector: ["iframe"],
        players: ["www.youtube.com", "player.vimeo.com"]
    },
        o = [".fluidvids {", "width: 100%; max-width: 100%; position: relative;", "}", ".fluidvids-item {", "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;", "}"].join(""),
        r = document.head || document.getElementsByTagName("head")[0];
    return d.render = function () {
        for (var e = document.querySelectorAll(d.selector.join()), t = e.length; t--;) i(e[t])
    }, d.init = function (e) {
        for (var t in e) d[t] = e[t];
        d.render(), n()
    }, d
});
/*! http://mths.be/placeholder v2.0.8 by @mathias */
/*! http://mths.be/placeholder v2.0.8 by @mathias */
! function (e, a, t) {
    function l(e) {
        var a = {},
            l = /^jQuery\d+$/;
        return t.each(e.attributes, function (e, t) {
            t.specified && !l.test(t.name) && (a[t.name] = t.value)
        }), a
    }

    function r(e, a) {
        var l = this,
            r = t(l);
        if (l.value == r.attr("placeholder") && r.hasClass("placeholder"))
            if (r.data("placeholder-password")) {
                if (r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id")), e === !0) return r[0].value = a;
                r.focus()
            } else l.value = "", r.removeClass("placeholder"), l == d() && l.select()
    }

    function o() {
        var e, a = this,
            o = t(a),
            d = this.id;
        if ("" == a.value) {
            if ("password" == a.type) {
                if (!o.data("placeholder-textinput")) {
                    try {
                        e = o.clone().attr({
                            type: "text"
                        })
                    } catch (c) {
                        e = t("<input>").attr(t.extend(l(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": o,
                        "placeholder-id": d
                    }).bind("focus.placeholder", r), o.data({
                        "placeholder-textinput": e,
                        "placeholder-id": d
                    }).before(e)
                }
                o = o.removeAttr("id").hide().prev().attr("id", d).show()
            }
            o.addClass("placeholder"), o[0].value = o.attr("placeholder")
        } else o.removeClass("placeholder")
    }

    function d() {
        try {
            return a.activeElement
        } catch (e) { }
    }
    var c, n, i = "[object OperaMini]" == Object.prototype.toString.call(e.operamini),
        p = "placeholder" in a.createElement("input") && !i,
        u = "placeholder" in a.createElement("textarea") && !i,
        h = t.fn,
        s = t.valHooks,
        v = t.propHooks;
    p && u ? (n = h.placeholder = function () {
        return this
    }, n.input = n.textarea = !0) : (n = h.placeholder = function () {
        var e = this;
        return e.filter((p ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
            "focus.placeholder": r,
            "blur.placeholder": o
        }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, n.input = p, n.textarea = u, c = {
        get: function (e) {
            var a = t(e),
                l = a.data("placeholder-password");
            return l ? l[0].value : a.data("placeholder-enabled") && a.hasClass("placeholder") ? "" : e.value
        },
        set: function (e, a) {
            var l = t(e),
                c = l.data("placeholder-password");
            return c ? c[0].value = a : l.data("placeholder-enabled") ? ("" == a ? (e.value = a, e != d() && o.call(e)) : l.hasClass("placeholder") ? r.call(e, !0, a) || (e.value = a) : e.value = a, l) : e.value = a
        }
    }, p || (s.input = c, v.value = c), u || (s.textarea = c, v.value = c), t(function () {
        t(a).delegate("form", "submit.placeholder", function () {
            var e = t(".placeholder", this).each(r);
            setTimeout(function () {
                e.each(o)
            }, 10)
        })
    }), t(e).bind("beforeunload.placeholder", function () {
        t(".placeholder").each(function () {
            this.value = ""
        })
    }))
}(this, document, jQuery);
/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var mejs = mejs || {};
mejs.version = "2.14.2";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo",
            "video/x-vimeo"
        ]
    }]
};
mejs.Utility = {
    encodeUrl: function (a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function (a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function (a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function (a) {
        for (var b = 0, c, d = "", e = "", g, f, i = document.getElementsByTagName("script"), k = i.length, h = a.length; b < k; b++) {
            g = i[b].src;
            c = g.lastIndexOf("/");
            if (c > -1) {
                f = g.substring(c +
                    1);
                g = g.substring(0, c + 1)
            } else {
                f = g;
                g = ""
            }
            for (c = 0; c < h; c++) {
                e = a[c];
                e = f.indexOf(e);
                if (e > -1) {
                    d = g;
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function (a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
            g = Math.floor(a / 60) % 60,
            f = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (g < 10 ? "0" + g : g) + ":" + (f < 10 ? "0" + f : f) + (c ? ":" + (a < 10 ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function (a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d ==
            "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
            g = parseInt(a[2], 10),
            f = 0,
            i = 0;
        if (c) f = parseInt(a[3]) / d;
        return i = b * 3600 + e * 60 + g + f
    },
    convertSMPTEtoSeconds: function (a) {
        if (typeof a != "string") return false;
        a = a.replace(",", ".");
        var b = 0,
            c = a.indexOf(".") != -1 ? a.split(".")[1].length : 0,
            d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) {
            d = 1;
            if (e > 0) d = Math.pow(60, e);
            b += Number(a[e]) * d
        }
        return Number(b.toFixed(c))
    },
    removeSwf: function (a) {
        var b = document.getElementById(a);
        if (b && /object|embed/i.test(b.nodeName))
            if (mejs.MediaFeatures.isIE) {
                b.style.display =
                    "none";
                (function () {
                    b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
                })()
            } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function (a) {
        if (a = document.getElementById(a)) {
            for (var b in a)
                if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function (a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function (a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function (a, b, c, d) {
        var e = [0, 0, 0],
            g;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) &&
                !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (g = new ActiveXObject(c)) e = d(g)
        } catch (f) { }
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function (a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function (a) {
    var b = [0, 0, 0, 0],
        c = function (d, e, g, f) {
            for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[g] += f;
            e[g] -= f
        };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function () {
        var a = this,
            b = document,
            c = mejs.PluginDetector.nav,
            d = mejs.PluginDetector.ua.toLowerCase(),
            e, g = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null);
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") !=
            -1 || c.appName.toLowerCase().match(/trident/gi) !== null;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit && !a.isIE;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        a.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (c = 0; c < g.length; c++) e = document.createElement(g[c]);
        a.supportsMediaTag = typeof e.canPlayType !==
            "undefined" || a.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (f) {
            a.supportsMediaTag = false
        }
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasNativeFullscreen = typeof e.requestFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasMsNativeFullScreen = typeof e.msRequestFullscreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen ||
            a.hasMsNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = document.mozFullScreenEnabled;
        else if (a.hasMsNativeFullScreen) a.nativeFullScreenEnabled = document.msFullscreenEnabled;
        if (a.isChrome) a.hasSemiNativeFullScreen = false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = "";
            if (a.hasWebkitNativeFullScreen) a.fullScreenEventName = "webkitfullscreenchange";
            else if (a.hasMozNativeFullScreen) a.fullScreenEventName = "mozfullscreenchange";
            else if (a.hasMsNativeFullScreen) a.fullScreenEventName = "MSFullscreenChange";
            a.isFullScreen = function () {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen;
                else if (e.hasMsNativeFullScreen) return b.msFullscreenElement !== null
            };
            a.requestFullScreen = function (i) {
                if (a.hasWebkitNativeFullScreen) i.webkitRequestFullScreen();
                else if (a.hasMozNativeFullScreen) i.mozRequestFullScreen();
                else a.hasMsNativeFullScreen && i.msRequestFullscreen()
            };
            a.cancelFullScreen =
                function () {
                    if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                    else if (a.hasMozNativeFullScreen) document.mozCancelFullScreen();
                    else a.hasMsNativeFullScreen && document.msExitFullscreen()
                }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function (a) {
        this.currentTime = a
    },
    setMuted: function (a) {
        this.muted = a
    },
    setVolume: function (a) {
        this.volume = a
    },
    stop: function () {
        this.pause()
    },
    setSrc: function (a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.src = c.src;
                    break
                }
            }
        }
    },
    setVideoSize: function (a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function (a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType ==
                "vimeo" || this.pluginApi.loadMedia();
            this.paused = false
        }
    },
    pause: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function () {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function (a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType,
                d.version))
                for (c = 0; c < d.types.length; c++)
                    if (a == d.types[c]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function (a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function () {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function (a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b,
                c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
            }
        }
    },
    setCurrentTime: function (a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function (a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" || this.pluginType == "vimeo" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function (a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube" || this.pluginType == "vimeo") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function (a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function (a) {
        this.pluginApi !=
            null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function () {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(false)
    },
    addEventListener: function (a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function (a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (var d =
            0; d < c.length; d++)
            if (c[d] === b) {
                this.events[a].splice(d, 1);
                return true
            }
        return false
    },
    dispatchEvent: function (a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    hasAttribute: function (a) {
        return a in this.attributes
    },
    removeAttribute: function (a) {
        delete this.attributes[a]
    },
    getAttribute: function (a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function (a, b) {
        this.attributes[a] = b
    },
    remove: function () {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function (a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    unregisterPluginElement: function (a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a]
    },
    initPlugin: function (a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case "flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    b.pluginElement = document.getElementById(b.id);
                    b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b, c)
        }
    },
    fireEvent: function (a, b, c) {
        var d, e;
        if (a = this.pluginMediaElements[a]) {
            b = {
                type: b,
                target: a
            };
            for (d in c) {
                a[d] = c[d];
                b[d] = c[d]
            }
            e = c.bufferedTime || 0;
            b.target.buffered = b.buffered = {
                start: function () {
                    return 0
                },
                end: function () {
                    return e
                },
                length: 1
            };
            a.dispatchEvent(b.type, b)
        }
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    httpsBasicAuthSite: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    enablePseudoStreaming: false,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function () { },
    error: function () { }
};
mejs.MediaElement = function (a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function (a, b) {
        var c = mejs.MediaElementDefaults,
            d = typeof a == "string" ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            g = e === "audio" || e === "video",
            f = g ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var i = d.getAttribute("autoplay"),
            k = d.getAttribute("preload"),
            h = d.getAttribute("controls"),
            j;
        for (j in b) c[j] = b[j];
        f = typeof f == "undefined" || f === null || f == "" ? null : f;
        e = typeof e == "undefined" || e === null ? "" : e;
        k = typeof k == "undefined" || k === null || k === "false" ?
            "none" : k;
        i = !(typeof i == "undefined" || i === null || i === "false");
        h = !(typeof h == "undefined" || h === null || h === "false");
        j = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, g, f);
        j.url = j.url !== null ? mejs.Utility.absolutizeUrl(j.url) : "";
        if (j.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = j.url;
                d.addEventListener("click", function () {
                    d.play()
                }, false)
            }
            return this.updateNative(j, c, i, k)
        } else if (j.method !== "") return this.createPlugin(j, c, e, i, k, h);
        else {
            this.createErrorMessage(j, c, e);
            return this
        }
    },
    determinePlayback: function (a, b, c, d, e) {
        var g = [],
            f, i, k, h = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            },
            j;
        if (typeof b.type != "undefined" && b.type !== "")
            if (typeof b.type == "string") g.push({
                type: b.type,
                url: e
            });
            else
                for (f = 0; f < b.type.length; f++) g.push({
                    type: b.type[f],
                    url: e
                });
        else if (e !== null) {
            k = this.formatType(e, a.getAttribute("type"));
            g.push({
                type: k,
                url: e
            })
        } else
            for (f = 0; f < a.childNodes.length; f++) {
                i = a.childNodes[f];
                if (i.nodeType == 1 && i.tagName.toLowerCase() == "source") {
                    e = i.getAttribute("src");
                    k = this.formatType(e, i.getAttribute("type"));
                    i = i.getAttribute("media");
                    if (!i || !window.matchMedia || window.matchMedia && window.matchMedia(i).matches) g.push({
                        type: k,
                        url: e
                    })
                }
            }
        if (!d && g.length > 0 && g[0].url !== null && this.getTypeFromFile(g[0].url).indexOf("audio") > -1) h.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function (m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && !(mejs.MediaFeatures.isBustedNativeHTTPS &&
            b.httpsBasicAuthSite === true)) {
            if (!d) {
                f = document.createElement(h.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(f, a);
                a.style.display = "none";
                h.htmlMediaElement = a = f
            }
            for (f = 0; f < g.length; f++)
                if (a.canPlayType(g[f].type).replace(/no/, "") !== "" || a.canPlayType(g[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "" || a.canPlayType(g[f].type.replace(/m4a/, "mp4")).replace(/no/, "") !== "") {
                    h.method = "native";
                    h.url = g[f].url;
                    break
                }
            if (h.method === "native") {
                if (h.url !== null) a.src = h.url;
                if (b.mode !== "auto_plugin") return h
            }
        }
        if (b.mode ===
            "auto" || b.mode === "auto_plugin" || b.mode === "shim")
            for (f = 0; f < g.length; f++) {
                k = g[f].type;
                for (a = 0; a < b.plugins.length; a++) {
                    e = b.plugins[a];
                    i = mejs.plugins[e];
                    for (c = 0; c < i.length; c++) {
                        j = i[c];
                        if (j.version == null || mejs.PluginDetector.hasPluginVersion(e, j.version))
                            for (d = 0; d < j.types.length; d++)
                                if (k == j.types[d]) {
                                    h.method = e;
                                    h.url = g[f].url;
                                    return h
                                }
                    }
                }
            }
        if (b.mode === "auto_plugin" && h.method === "native") return h;
        if (h.method === "" && g.length > 0) h.url = g[0].url;
        return h
    },
    formatType: function (a, b) {
        return a && !b ? this.getTypeFromFile(a) :
            b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function (a) {
        a = a.split("?")[0];
        a = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function (a) {
        switch (a) {
            case "mp4":
            case "m4v":
            case "m4a":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
        }
    },
    createErrorMessage: function (a, b, c) {
        var d =
            a.htmlMediaElement,
            e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch (g) { }
        e.innerHTML = b.customError ? b.customError : c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function (a, b, c, d, e, g) {
        c = a.htmlMediaElement;
        var f = 1,
            i = 1,
            k = "me_" + a.method + "_" + mejs.meIndex++,
            h = new mejs.PluginMediaElement(k, a.method, a.url),
            j = document.createElement("div"),
            m;
        h.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var q = c.attributes[m];
            q.specified == true && h.setAttribute(q.name, q.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() !== "body" && m.parentNode != null;) {
            if (m.parentNode.tagName.toLowerCase() === "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            f = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : c.getAttribute("width") !==
                null ? c.getAttribute("width") : b.defaultVideoWidth;
            i = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight > 0 ? b.videoHeight : c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            f = mejs.Utility.encodeUrl(f);
            i = mejs.Utility.encodeUrl(i)
        } else if (b.enablePluginDebug) {
            f = 320;
            i = 240
        }
        h.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(k, h, c);
        j.className = "me-plugin";
        j.id = k + "_container";
        a.isVideo ? c.parentNode.insertBefore(j, c) : document.body.insertBefore(j, document.body.childNodes[0]);
        d = ["id=" + k, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + f, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + i, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        b.enablePseudoStreaming && d.push("pseudostreaming=true");
        g && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
            case "silverlight":
                j.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + k + '" name="' + k + '" width="' + f + '" height="' + i + '" class="mejs-shim"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' +
                    b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    a = document.createElement("div");
                    j.appendChild(a);
                    a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + k + '" width="' + f + '" height="' + i + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'
                } else j.innerHTML =
                    '<embed id="' + k + '" name="' + k + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + f + '" height="' + i + '" scale="default"class="mejs-shim"></embed>';
                break;
            case "youtube":
                if (a.url.lastIndexOf("youtu.be") != -1) {
                    a = a.url.substr(a.url.lastIndexOf("/") + 1);
                    if (a.indexOf("?") !=
                        -1) a = a.substr(0, a.indexOf("?"))
                } else a = a.url.substr(a.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: j,
                    containerId: j.id,
                    pluginMediaElement: h,
                    pluginId: k,
                    videoId: a,
                    height: i,
                    width: f
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                b = k + "_player";
                h.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
                j.innerHTML = '<iframe src="//player.vimeo.com/video/' + h.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" +
                    b + '" width="' + f + '" height="' + i + '" frameborder="0" class="mejs-shim" id="' + b + '"></iframe>';
                if (typeof $f == "function") {
                    var l = $f(j.childNodes[0]);
                    l.addEvent("ready", function () {
                        function o(n, p, r, s) {
                            n = {
                                type: r,
                                target: p
                            };
                            if (r == "timeupdate") {
                                p.currentTime = n.currentTime = s.seconds;
                                p.duration = n.duration = s.duration
                            }
                            p.dispatchEvent(n.type, n)
                        }
                        l.playVideo = function () {
                            l.api("play")
                        };
                        l.pauseVideo = function () {
                            l.api("pause")
                        };
                        l.seekTo = function (n) {
                            l.api("seekTo", n)
                        };
                        l.addEvent("play", function () {
                            o(l, h, "play");
                            o(l, h, "playing")
                        });
                        l.addEvent("pause", function () {
                            o(l, h, "pause")
                        });
                        l.addEvent("finish", function () {
                            o(l, h, "ended")
                        });
                        l.addEvent("playProgress", function (n) {
                            o(l, h, "timeupdate", n)
                        });
                        h.pluginApi = l;
                        mejs.MediaPluginBridge.initPlugin(k)
                    })
                } else console.warn("You need to include froogaloop for vimeo to work")
        }
        c.style.display = "none";
        c.removeAttribute("autoplay");
        return h
    },
    updateNative: function (a, b) {
        var c = a.htmlMediaElement,
            d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function () {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function (a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function (a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function () {
                        a.pluginMediaElement.pluginApi = c;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function () {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function (d) {
                        mejs.YouTubeApi.handleStateChange(d.data, c, b)
                    }
                }
            })
    },
    createEvent: function (a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function () {
                    return 0
                },
                end: function () {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function () {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function (a) {
        this.flashPlayers[a.pluginId] =
            a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' +
                c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function (a) {
        var b = this.flashPlayers[a],
            c =
                document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function (e) {
            mejs.YouTubeApi.handleStateChange(e, c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function () {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250)
    },
    handleStateChange: function (a, b, c) {
        switch (a) {
            case -1:
                c.paused = true;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = false;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = false;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "play");
                mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = true;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function (a, b) {
    var c = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    c.getLanguage = function () {
        return (c.locale.language || window.navigator.userLanguage || window.navigator.language).substr(0, 2).toLowerCase()
    };
    if (typeof mejsL10n != "undefined") c.locale.language = mejsL10n.language;
    c.methods.checkPlain = function (d) {
        var e, g, f = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        d = String(d);
        for (e in f)
            if (f.hasOwnProperty(e)) {
                g = RegExp(e, "g");
                d = d.replace(g, f[e])
            }
        return d
    };
    c.methods.t = function (d, e) {
        if (c.locale.strings &&
            c.locale.strings[e.context] && c.locale.strings[e.context][d]) d = c.locale.strings[e.context][d];
        return c.methods.checkPlain(d)
    };
    c.t = function (d, e) {
        if (typeof d === "string" && d.length > 0) {
            var g = c.getLanguage();
            e = e || {
                context: g
            };
            return c.methods.t(d, e)
        } else throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        };
    };
    b.i18n = c
})(document, mejs);
(function (a) {
    if (typeof mejsL10n != "undefined") a[mejsL10n.language] = mejsL10n.strings
})(mejs.i18n.locale.strings);
(function (a) {
    if (typeof a.de === "undefined") a.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\u00dfen"
    }
})(mejs.i18n.locale.strings);
(function (a) {
    if (typeof a.zh === "undefined") a.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    }
})(mejs.i18n.locale.strings);
/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender;
(function (f) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: false,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function (a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function (a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function (a, b) {
                b.paused || b.ended ? a.play() : a.pause()
            }
        }, {
            keys: [38],
            action: function (a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40],
            action: function (a, b) {
                b.setVolume(Math.max(b.volume -
                    0.1, 0))
            }
        }, {
            keys: [37, 227],
            action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function (a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function (a) {
                if (typeof a.enterFullScreen !=
                    "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function (a, b) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({}, mejs.MepDefaults, b);
        this.id = "mep_" + mejs.mepIndex++;
        mejs.players[this.id] = this;
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function () {
            var a = this,
                b = mejs.MediaFeatures,
                c = f.extend(true, {}, a.options, {
                    success: function (d, g) {
                        a.meReady(d, g)
                    },
                    error: function (d) {
                        a.handleError(d)
                    }
                }),
                e = a.media.tagName.toLowerCase();
            a.isDynamic = e !== "audio" && e !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo : e !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls",
                    "controls");
                b.isiPad && a.media.getAttribute("autoplay") !== null && a.play()
            } else if (!(b.isAndroid && a.options.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.container = f('<div id="' + a.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ?
                    "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " : "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video" : "audio";
                e = b.substring(0, 1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") > -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width : a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + e + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height : a.$media[0].getAttribute("height") !== null ? a.$media.attr("height") :
                    a.options["default" + e + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.width;
                c.pluginHeight = a.height
            }
            mejs.MediaElement(a.$media[0], c);
            typeof a.container != "undefined" && a.controlsAreVisible && a.container.trigger("controlsshown")
        },
        showControls: function (a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function () {
                        b.controlsAreVisible = true;
                        b.container.trigger("controlsshown")
                    });
                    b.container.find(".mejs-control").css("visibility",
                        "visible").stop(true, true).fadeIn(200, function () {
                            b.controlsAreVisible = true
                        })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown")
                }
                b.setControlsSize()
            }
        },
        hideControls: function (a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!(!b.controlsAreVisible || b.options.alwaysShowControls))
                if (a) {
                    b.controls.stop(true, true).fadeOut(200, function () {
                        f(this).css("visibility",
                            "hidden").css("display", "block");
                        b.controlsAreVisible = false;
                        b.container.trigger("controlshidden")
                    });
                    b.container.find(".mejs-control").stop(true, true).fadeOut(200, function () {
                        f(this).css("visibility", "hidden").css("display", "block")
                    })
                } else {
                    b.controls.css("visibility", "hidden").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false;
                    b.container.trigger("controlshidden")
                }
        },
        controlsTimer: null,
        startControlsTimer: function (a) {
            var b =
                this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function () {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        },
        killControlsTimer: function () {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function () {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function () {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function (a, b) {
            var c = this,
                e = mejs.MediaFeatures,
                d = b.getAttribute("autoplay");
            d = !(typeof d == "undefined" || d === null || d === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (!(e.isAndroid && c.options.AndroidUseNativeControls) && !(e.isiPad && c.options.iPadUseNativeControls) && !(e.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        e =
                            c.options.features[g];
                        if (c["build" + e]) try {
                            c["build" + e](c, c.controls, c.layers, c.media)
                        } catch (k) { }
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", function () {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else {
                            c.clickToPlayPauseCallback = function () {
                                if (c.options.clickToPlayPause) c.media.paused ? c.play() : c.pause()
                            };
                            c.media.addEventListener("click",
                                c.clickToPlayPauseCallback, false);
                            c.container.bind("mouseenter mouseover", function () {
                                if (c.controlsEnabled)
                                    if (!c.options.alwaysShowControls) {
                                        c.killControlsTimer("enter");
                                        c.showControls();
                                        c.startControlsTimer(2500)
                                    }
                            }).bind("mousemove", function () {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function () {
                                c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls && c.startControlsTimer(1E3)
                            })
                        }
                        c.options.hideVideoControlsOnLoad &&
                            c.hideControls(false);
                        d && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function (j) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(j.target.videoHeight)) {
                                c.setPlayerSize(j.target.videoWidth, j.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(j.target.videoWidth, j.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function () {
                        for (var j in mejs.players) {
                            var m = mejs.players[j];
                            m.id != c.id &&
                                c.options.pauseOtherPlayers && !m.paused && !m.ended && m.pause();
                            m.hasFocus = false
                        }
                        c.hasFocus = true
                    }, false);
                    c.media.addEventListener("ended", function () {
                        if (c.options.autoRewind) try {
                            c.media.setCurrentTime(0)
                        } catch (j) { }
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.play();
                        else !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, false);
                    c.media.addEventListener("loadedmetadata", function () {
                        c.updateDuration && c.updateDuration();
                        c.updateCurrent &&
                            c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    }, false);
                    setTimeout(function () {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    }, 50);
                    c.globalBind("resize", function () {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                d && a.pluginType == "native" && c.play();
                if (c.options.success) typeof c.options.success ==
                    "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function (a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function (a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%" || parseInt(this.$node.css("max-width").replace(/px/, ""), 10) / this.$node.offsetParent().width() === 1 || this.$node[0].currentStyle && this.$node[0].currentStyle.maxWidth ===
                "100%") {
                var c = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    e = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    d = this.container.parent().closest(":visible").width();
                c = this.isVideo || !this.options.autosizeProgress ? parseInt(d * e / c, 10) : e;
                if (isNaN(c)) c = this.container.parent().closest(":visible").height();
                if (this.container.parent()[0].tagName.toLowerCase() ===
                    "body") {
                    d = f(window).width();
                    c = f(window).height()
                }
                if (c != 0 && d != 0) {
                    this.container.width(d).height(c);
                    this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(d, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
            d = this.layers.find(".mejs-overlay-play");
            c = d.find(".mejs-overlay-button");
            d.height(this.container.height() - this.controls.height());
            c.css("margin-top", "-" + (c.height() / 2 - this.controls.height() / 2).toString() + "px")
        },
        setControlsSize: function () {
            var a = 0,
                b = 0,
                c = this.controls.find(".mejs-time-rail"),
                e = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var d = c.siblings(),
                g = d.last(),
                k = null;
            if (!(!this.container.is(":visible") || !c.length || !c.is(":visible"))) {
                if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
                if (b === 0 || !b) {
                    d.each(function () {
                        var j = f(this);
                        if (j.css("position") != "absolute" && j.is(":visible")) a += f(this).outerWidth(true)
                    });
                    b = this.controls.width() - a - (c.outerWidth(true) - c.width())
                }
                do {
                    c.width(b);
                    e.width(b - (e.outerWidth(true) - e.width()));
                    if (g.css("position") != "absolute") {
                        k = g.position();
                        b--
                    }
                } while (k != null && k.top > 0 && b > 0);
                this.setProgressRail && this.setProgressRail();
                this.setCurrentRail && this.setCurrentRail()
            }
        },
        buildposter: function (a, b, c, e) {
            var d = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : d.hide();
            e.addEventListener("play", function () {
                d.hide()
            }, false);
            a.options.showPosterWhenEnded && a.options.autoRewind && e.addEventListener("ended", function () {
                d.show()
            }, false)
        },
        setPoster: function (a) {
            var b = this.container.find(".mejs-poster"),
                c = b.find("img");
            if (c.length == 0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a);
            b.css({
                "background-image": "url(" + a + ")"
            })
        },
        buildoverlays: function (a,
            b, c, e) {
            var d = this;
            if (a.isVideo) {
                var g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                    k = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                    j = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart", function () {
                        d.options.clickToPlayPause && e.paused && e.play()
                    });
                e.addEventListener("play", function () {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("playing", function () {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("seeking", function () {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("seeked", function () {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("pause", function () {
                    mejs.MediaFeatures.isiPhone || j.show()
                }, false);
                e.addEventListener("waiting", function () {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                },
                    false);
                e.addEventListener("loadeddata", function () {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("canplay", function () {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("error", function () {
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.show();
                    k.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function (a, b, c, e) {
            this.globalBind("keydown", function (d) {
                if (a.hasFocus && a.options.enableKeyboard)
                    for (var g = 0, k = a.options.keyActions.length; g <
                        k; g++)
                        for (var j = a.options.keyActions[g], m = 0, q = j.keys.length; m < q; m++)
                            if (d.keyCode == j.keys[m]) {
                                d.preventDefault();
                                j.action(a, e, d.keyCode);
                                return false
                            }
                return true
            });
            this.globalBind("click", function (d) {
                a.hasFocus = f(d.target).closest(".mejs-container").length != 0
            })
        },
        findTracks: function () {
            var a = this,
                b = a.$media.find("track");
            a.tracks = [];
            b.each(function (c, e) {
                e = f(e);
                a.tracks.push({
                    srclang: e.attr("srclang") ? e.attr("srclang").toLowerCase() : "",
                    src: e.attr("src"),
                    kind: e.attr("kind"),
                    label: e.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function (a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function () {
            this.load();
            this.media.play()
        },
        pause: function () {
            try {
                this.media.pause()
            } catch (a) { }
        },
        load: function () {
            this.isLoaded || this.media.load();
            this.isLoaded = true
        },
        setMuted: function (a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function (a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function () {
            return this.media.currentTime
        },
        setVolume: function (a) {
            this.media.setVolume(a)
        },
        getVolume: function () {
            return this.media.volume
        },
        setSrc: function (a) {
            this.media.setSrc(a)
        },
        remove: function () {
            var a, b;
            for (a in this.options.features) {
                b = this.options.features[a];
                if (this["clean" + b]) try {
                    this["clean" + b](this)
                } catch (c) { }
            }
            if (this.isDynamic) this.$node.insertBefore(this.container);
            else {
                this.$media.prop("controls", true);
                this.$node.clone().show().insertBefore(this.container);
                this.$node.remove()
            }
            this.media.pluginType !== "native" && this.media.remove();
            delete mejs.players[this.id];
            typeof this.container ==
                "object" && this.container.remove();
            this.globalUnbind();
            delete this.node.player
        }
    };
    (function () {
        function a(c, e) {
            var d = {
                d: [],
                w: []
            };
            f.each((c || "").split(" "), function (g, k) {
                var j = k + "." + e;
                if (j.indexOf(".") === 0) {
                    d.d.push(j);
                    d.w.push(j)
                } else d[b.test(k) ? "w" : "d"].push(j)
            });
            d.d = d.d.join(" ");
            d.w = d.w.join(" ");
            return d
        }
        var b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function (c, e, d) {
            c = a(c, this.id);
            c.d && f(document).bind(c.d, e, d);
            c.w && f(window).bind(c.w, e, d)
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function (c, e) {
            c = a(c, this.id);
            c.d && f(document).unbind(c.d, e);
            c.w && f(window).unbind(c.w, e)
        }
    })();
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function (a) {
        a === false ? this.each(function () {
            var b = jQuery(this).data("mediaelementplayer");
            b && b.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function () {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this,
                a))
        });
        return this
    };
    f(document).ready(function () {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function (a, b, c, e) {
            var d = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function (g) {
                g.preventDefault();
                e.paused ? e.play() : e.pause();
                return false
            });
            e.addEventListener("play", function () {
                d.removeClass("mejs-play").addClass("mejs-pause")
            },
                false);
            e.addEventListener("playing", function () {
                d.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            e.addEventListener("pause", function () {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            e.addEventListener("paused", function () {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function (a, b, c, e) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(b).click(function () {
                e.paused || e.pause();
                if (e.currentTime > 0) {
                    e.setCurrentTime(0);
                    e.pause();
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left",
                        "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function (f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function (a, b, c, e) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var d =
                this,
                g = b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var k = b.find(".mejs-time-current"),
                j = b.find(".mejs-time-handle"),
                m = b.find(".mejs-time-float"),
                q = b.find(".mejs-time-float-current"),
                p = function (h) {
                    h = h.originalEvent.changedTouches ? h.originalEvent.changedTouches[0].pageX : h.pageX;
                    var l = g.offset(),
                        r = g.outerWidth(true),
                        n = 0,
                        o = n = 0;
                    if (e.duration) {
                        if (h < l.left) h = l.left;
                        else if (h > r + l.left) h = r + l.left;
                        o = h - l.left;
                        n = o / r;
                        n = n <= 0.02 ? 0 : n * e.duration;
                        t && n !== e.currentTime && e.setCurrentTime(n);
                        if (!mejs.MediaFeatures.hasTouch) {
                            m.css("left",
                                o);
                            q.html(mejs.Utility.secondsToTimeCode(n));
                            m.show()
                        }
                    }
                },
                t = false;
            g.bind("mousedown touchstart", function (h) {
                if (h.which === 1 || h.which === 0) {
                    t = true;
                    p(h);
                    d.globalBind("mousemove.dur touchmove.dur", function (l) {
                        p(l)
                    });
                    d.globalBind("mouseup.dur touchend.dur", function () {
                        t = false;
                        m.hide();
                        d.globalUnbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function () {
                d.globalBind("mousemove.dur", function (h) {
                    p(h)
                });
                mejs.MediaFeatures.hasTouch || m.show()
            }).bind("mouseleave", function () {
                if (!t) {
                    d.globalUnbind(".dur");
                    m.hide()
                }
            });
            e.addEventListener("progress", function (h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            e.addEventListener("timeupdate", function (h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            d.loaded = c;
            d.total = g;
            d.current = k;
            d.handle = j
        },
        setProgressRail: function (a) {
            var b = a != undefined ? a.target : this.media,
                c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() * c)
            }
        },
        setCurrentRail: function () {
            if (this.media.currentTime != undefined && this.media.duration)
                if (this.total && this.handle) {
                    var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                        b = a - Math.round(this.handle.outerWidth(true) / 2);
                    this.current.width(a);
                    this.handle.css("left", b)
                }
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function (a, b, c, e) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function () {
                a.updateCurrent()
            }, false)
        },
        buildduration: function (a, b,
            c, e) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function () {
                a.updateDuration()
            },
                false)
        },
        updateCurrent: function () {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function () {
            this.container.toggleClass("mejs-long-video", this.media.duration > 3600);
            if (this.durationD && (this.options.duration > 0 || this.media.duration)) this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration :
                this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function (a, b, c, e) {
            if (!((mejs.MediaFeatures.isAndroid || mejs.MediaFeatures.isiOS) && this.options.hideVolumeOnTouchDevices)) {
                var d = this,
                    g = d.isVideo ? d.options.videoVolume : d.options.audioVolume,
                    k = g == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' +
                        d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    j = d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    m = d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    q = d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    p = d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    t = function (n, o) {
                        if (!j.is(":visible") && typeof o == "undefined") {
                            j.show();
                            t(n, true);
                            j.hide()
                        } else {
                            n = Math.max(0, n);
                            n = Math.min(n, 1);
                            n == 0 ? k.removeClass("mejs-mute").addClass("mejs-unmute") : k.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (g == "vertical") {
                                var s = m.height(),
                                    u = m.position(),
                                    v = s - s * n;
                                p.css("top", Math.round(u.top + v - p.height() / 2));
                                q.height(s - v);
                                q.css("top", u.top + v)
                            } else {
                                s = m.width();
                                u = m.position();
                                s = s * n;
                                p.css("left", Math.round(u.left + s - p.width() / 2));
                                q.width(Math.round(s))
                            }
                        }
                    },
                    h = function (n) {
                        var o = null,
                            s = m.offset();
                        if (g == "vertical") {
                            o = m.height();
                            parseInt(m.css("top").replace(/px/, ""), 10);
                            o = (o - (n.pageY - s.top)) / o;
                            if (s.top == 0 || s.left == 0) return
                        } else {
                            o = m.width();
                            o = (n.pageX - s.left) / o
                        }
                        o = Math.max(0, o);
                        o = Math.min(o, 1);
                        t(o);
                        o == 0 ? e.setMuted(true) :
                            e.setMuted(false);
                        e.setVolume(o)
                    },
                    l = false,
                    r = false;
                k.hover(function () {
                    j.show();
                    r = true
                }, function () {
                    r = false;
                    !l && g == "vertical" && j.hide()
                });
                j.bind("mouseover", function () {
                    r = true
                }).bind("mousedown", function (n) {
                    h(n);
                    d.globalBind("mousemove.vol", function (o) {
                        h(o)
                    });
                    d.globalBind("mouseup.vol", function () {
                        l = false;
                        d.globalUnbind(".vol");
                        !r && g == "vertical" && j.hide()
                    });
                    l = true;
                    return false
                });
                k.find("button").click(function () {
                    e.setMuted(!e.muted)
                });
                e.addEventListener("volumechange", function () {
                    if (!l)
                        if (e.muted) {
                            t(0);
                            k.removeClass("mejs-mute").addClass("mejs-unmute")
                        } else {
                            t(e.volume);
                            k.removeClass("mejs-unmute").addClass("mejs-mute")
                        }
                }, false);
                if (d.container.is(":visible")) {
                    t(a.options.startVolume);
                    a.options.startVolume === 0 && e.setMuted(true);
                    e.pluginType === "native" && e.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function () {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        isInIframe: false,
        buildfullscreen: function (a, b, c, e) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = function () {
                        if (a.isFullScreen)
                            if (mejs.MediaFeatures.isFullScreen()) {
                                a.isNativeFullScreen = true;
                                a.setControlsSize()
                            } else {
                                a.isNativeFullScreen =
                                    false;
                                a.exitFullScreen()
                            }
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? a.globalBind(mejs.MediaFeatures.fullScreenEventName, c) : a.container.bind(mejs.MediaFeatures.fullScreenEventName, c)
                }
                var d = this,
                    g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + d.id + '" title="' + d.options.fullscreenText + '" aria-label="' + d.options.fullscreenText + '"></button></div>').appendTo(b);
                if (d.media.pluginType === "native" || !d.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function () {
                    mejs.MediaFeatures.hasTrueNativeFullScreen &&
                        mejs.MediaFeatures.isFullScreen() || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function () {
                        var h = document.createElement("x"),
                            l = document.documentElement,
                            r = window.getComputedStyle;
                        if (!("pointerEvents" in h.style)) return false;
                        h.style.pointerEvents = "auto";
                        h.style.pointerEvents = "x";
                        l.appendChild(h);
                        r = r && r(h, "").pointerEvents === "auto";
                        l.removeChild(h);
                        return !!r
                    }() && !mejs.MediaFeatures.isOpera) {
                        var j = false,
                            m = function () {
                                if (j) {
                                    for (var h in q) q[h].hide();
                                    g.css("pointer-events",
                                        "");
                                    d.controls.css("pointer-events", "");
                                    d.media.removeEventListener("click", d.clickToPlayPauseCallback);
                                    j = false
                                }
                            },
                            q = {};
                        b = ["top", "left", "right", "bottom"];
                        var p, t = function () {
                            var h = g.offset().left - d.container.offset().left,
                                l = g.offset().top - d.container.offset().top,
                                r = g.outerWidth(true),
                                n = g.outerHeight(true),
                                o = d.container.width(),
                                s = d.container.height();
                            for (p in q) q[p].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            q.top.width(o).height(l);
                            q.left.width(h).height(n).css({
                                top: l
                            });
                            q.right.width(o - h - r).height(n).css({
                                top: l,
                                left: h + r
                            });
                            q.bottom.width(o).height(s - n - l).css({
                                top: l + n
                            })
                        };
                        d.globalBind("resize", function () {
                            t()
                        });
                        p = 0;
                        for (c = b.length; p < c; p++) q[b[p]] = f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();
                        g.on("mouseover", function () {
                            if (!d.isFullScreen) {
                                var h = g.offset(),
                                    l = a.container.offset();
                                e.positionFullscreenButton(h.left - l.left, h.top - l.top, false);
                                g.css("pointer-events", "none");
                                d.controls.css("pointer-events", "none");
                                d.media.addEventListener("click", d.clickToPlayPauseCallback);
                                for (p in q) q[p].show();
                                t();
                                j = true
                            }
                        });
                        e.addEventListener("fullscreenchange", function () {
                            d.isFullScreen = !d.isFullScreen;
                            d.isFullScreen ? d.media.removeEventListener("click", d.clickToPlayPauseCallback) : d.media.addEventListener("click", d.clickToPlayPauseCallback);
                            m()
                        });
                        d.globalBind("mousemove", function (h) {
                            if (j) {
                                var l = g.offset();
                                if (h.pageY < l.top || h.pageY > l.top + g.outerHeight(true) || h.pageX < l.left || h.pageX > l.left + g.outerWidth(true)) {
                                    g.css("pointer-events", "");
                                    d.controls.css("pointer-events", "");
                                    j = false
                                }
                            }
                        })
                    } else g.on("mouseover",
                        function () {
                            if (k !== null) {
                                clearTimeout(k);
                                delete k
                            }
                            var h = g.offset(),
                                l = a.container.offset();
                            e.positionFullscreenButton(h.left - l.left, h.top - l.top, true)
                        }).on("mouseout", function () {
                            if (k !== null) {
                                clearTimeout(k);
                                delete k
                            }
                            k = setTimeout(function () {
                                e.hideFullscreenButton()
                            }, 1500)
                        })
                }
                a.fullscreenBtn = g;
                d.globalBind("keydown", function (h) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || d.isFullScreen) && h.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function (a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function () {
            var a = this;
            if (!(a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                f(document.documentElement).addClass("mejs-fullscreen");
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native")
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        mejs.MediaFeatures.requestFullScreen(a.container[0]);
                        a.isInIframe && setTimeout(function c() {
                            if (a.isNativeFullScreen) {
                                var e = (window.devicePixelRatio ||
                                    1) * f(window).width(),
                                    d = screen.width;
                                Math.abs(d - e) > d * 0.0020 ? a.exitFullScreen() : setTimeout(c, 500)
                            }
                        }, 500)
                    } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                        a.media.webkitEnterFullscreen();
                        return
                    }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "")
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function () {
                            if (!a.isNativeFullScreen) {
                                a.pause();
                                window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                            }
                        },
                            250);
                        else {
                            a.pause();
                            window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return
                        }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                a.containerSizeTimeout = setTimeout(function () {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                }, 500);
                if (a.media.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find(".mejs-shim").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(), f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function () {
            clearTimeout(this.containerSizeTimeout);
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() ||
                    this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                f(document.documentElement).removeClass("mejs-fullscreen");
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.media.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function (a, b, c, e) {
            if (a.tracks.length != 0) {
                var d;
                if (this.domNode.textTracks)
                    for (d = this.domNode.textTracks.length - 1; d >= 0; d--) this.domNode.textTracks[d].mode = "hidden";
                a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                a.captions =
                    f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                a.captionsText = a.captions.find(".mejs-captions-text");
                a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' +
                    a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(b);
                for (d = b = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && b++;
                this.options.toggleCaptionsButtonWhenOnlyOne && b == 1 ? a.captionsButton.on("click", function () {
                    a.setTrack(a.selectedTrack == null ? a.tracks[0].srclang : "none")
                }) : a.captionsButton.hover(function () {
                    f(this).find(".mejs-captions-selector").css("visibility", "visible")
                },
                    function () {
                        f(this).find(".mejs-captions-selector").css("visibility", "hidden")
                    }).on("click", "input[type=radio]", function () {
                        lang = this.value;
                        a.setTrack(lang)
                    });
                a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("controlsshown", function () {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function () {
                    e.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                a.trackToLoad = -1;
                a.selectedTrack = null;
                a.isLoadingTrack = false;
                for (d = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && a.addTrackButton(a.tracks[d].srclang, a.tracks[d].label);
                a.loadNextTrack();
                e.addEventListener("timeupdate", function () {
                    a.displayCaptions()
                }, false);
                if (a.options.slidesSelector != "") {
                    a.slidesContainer = f(a.options.slidesSelector);
                    e.addEventListener("timeupdate", function () {
                        a.displaySlides()
                    }, false)
                }
                e.addEventListener("loadedmetadata", function () {
                    a.displayChapters()
                }, false);
                a.container.hover(function () {
                    if (a.hasChapters) {
                        a.chapters.css("visibility",
                            "visible");
                        a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                    }
                }, function () {
                    a.hasChapters && !e.paused && a.chapters.fadeOut(200, function () {
                        f(this).css("visibility", "hidden");
                        f(this).css("display", "block")
                    })
                });
                a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function (a) {
            var b;
            if (a == "none") {
                this.selectedTrack = null;
                this.captionsButton.removeClass("mejs-captions-enabled")
            } else
                for (b = 0; b < this.tracks.length; b++)
                    if (this.tracks[b].srclang == a) {
                        this.selectedTrack ==
                            null && this.captionsButton.addClass("mejs-captions-enabled");
                        this.selectedTrack = this.tracks[b];
                        this.captions.attr("lang", this.selectedTrack.srclang);
                        this.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function () {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false;
                this.checkForTracks()
            }
        },
        loadTrack: function (a) {
            var b = this,
                c = b.tracks[a];
            f.ajax({
                url: c.src,
                dataType: "text",
                success: function (e) {
                    c.entries = typeof e == "string" &&
                        /<tt\s+xml/ig.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e);
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack();
                    c.kind == "chapters" && b.media.addEventListener("play", function () {
                        b.media.duration > 0 && b.displayChapters(c)
                    }, false);
                    c.kind == "slides" && b.setupSlides(c)
                },
                error: function () {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function (a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function (a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function () {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        checkForTracks: function () {
            var a = false;
            if (this.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < this.tracks.length; i++)
                    if (this.tracks[i].kind == "subtitles") {
                        a = true;
                        break
                    }
                if (!a) {
                    this.captionsButton.hide();
                    this.setControlsSize()
                }
            }
        },
        displayCaptions: function () {
            if (typeof this.tracks !=
                "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded)
                    for (a = 0; a < b.entries.times.length; a++)
                        if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                            this.captionsText.html(b.entries.text[a]);
                            this.captions.show().height(0);
                            return
                        }
                this.captions.hide()
            }
        },
        setupSlides: function (a) {
            this.slides = a;
            this.slides.entries.imgs = [this.slides.entries.text.length];
            this.showSlide(0)
        },
        showSlide: function (a) {
            if (!(typeof this.tracks == "undefined" || typeof this.slidesContainer ==
                "undefined")) {
                var b = this,
                    c = b.slides.entries.text[a],
                    e = b.slides.entries.imgs[a];
                if (typeof e == "undefined" || typeof e.fadeIn == "undefined") b.slides.entries.imgs[a] = e = f('<img src="' + c + '">').on("load", function () {
                    e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                });
                else !e.is(":visible") && !e.is(":animated") && e.fadeIn().siblings(":visible").fadeOut()
            }
        },
        displaySlides: function () {
            if (typeof this.slides != "undefined") {
                var a = this.slides,
                    b;
                for (b = 0; b < a.entries.times.length; b++)
                    if (this.media.currentTime >=
                        a.entries.times[b].start && this.media.currentTime <= a.entries.times[b].stop) {
                        this.showSlide(b);
                        break
                    }
            }
        },
        displayChapters: function () {
            var a;
            for (a = 0; a < this.tracks.length; a++)
                if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                    this.drawChapters(this.tracks[a]);
                    this.hasChapters = true;
                    break
                }
        },
        drawChapters: function (a) {
            var b = this,
                c, e, d = e = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                e = a.entries.times[c].stop - a.entries.times[c].start;
                e = Math.floor(e / b.media.duration * 100);
                if (e + d > 100 || c == a.entries.times.length -
                    1 && e + d < 100) e = 100 - d;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + d.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span></div></div>"));
                d += e
            }
            b.chapters.find("div.mejs-chapter").click(function () {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function (a) {
                var b = 0;
                a = mejs.TrackFormatParser.split2(a, /\r?\n/);
                for (var c = {
                    text: [],
                    times: []
                }, e, d; b < a.length; b++)
                    if (this.pattern_identifier.exec(a[b])) {
                        b++;
                        if ((e = this.pattern_timecode.exec(a[b])) && b < a.length) {
                            b++;
                            d = a[b];
                            for (b++; a[b] !== "" && b < a.length;) {
                                d = d + "\n" + a[b];
                                b++
                            }
                            d = f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                            c.text.push(d);
                            c.times.push({
                                start: mejs.Utility.convertSMPTEtoSeconds(e[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(e[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(e[3]),
                                settings: e[5]
                            })
                        }
                    }
                return c
            }
        },
        dfxp: {
            parse: function (a) {
                a = f(a).filter("tt");
                var b = 0;
                b = a.children("div").eq(0);
                var c = b.find("p");
                b = a.find("#" + b.attr("style"));
                var e, d;
                a = {
                    text: [],
                    times: []
                };
                if (b.length) {
                    d = b.removeAttr("id").get(0).attributes;
                    if (d.length) {
                        e = {};
                        for (b = 0; b < d.length; b++) e[d[b].name.split(":")[1]] = d[b].value
                    }
                }
                for (b = 0; b < c.length; b++) {
                    var g;
                    d = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (c.eq(b).attr("begin")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
                    if (!d.start && c.eq(b - 1).attr("end")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b - 1).attr("end"));
                    if (c.eq(b).attr("end")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));
                    if (!d.stop && c.eq(b + 1).attr("begin")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b + 1).attr("begin"));
                    if (e) {
                        g = "";
                        for (var k in e) g += k + ":" + e[k] + ";"
                    }
                    if (g) d.style = g;
                    if (d.start == 0) d.start = 0.2;
                    a.times.push(d);
                    d = f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                        "<a href='$1' target='_blank'>$1</a>");
                    a.text.push(d);
                    if (a.times.start == 0) a.times.start = 2
                }
                return a
            }
        },
        split2: function (a, b) {
            return a.split(b)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function (a, b) {
        var c = [],
            e = "",
            d;
        for (d = 0; d < a.length; d++) {
            e += a.substring(d, d + 1);
            if (b.test(e)) {
                c.push(e.replace(b, ""));
                e = ""
            }
        }
        c.push(e);
        return c
    }
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function (a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function (a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function (a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function (a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {
            isSeparator: true
        }, {
            render: function () {
                return mejs.i18n.t("Download Video")
            },
            click: function (a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function (a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", function (b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", function () {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", function () {
                a.startContextMenuTimer()
            })
        },
        cleancontextmenu: function (a) {
            a.contextMenu.remove()
        },
        isContextMenuEnabled: true,
        enableContextMenu: function () {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function () {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function () {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function () {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function () {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function () {
            this.contextMenu.hide()
        },
        renderContextMenu: function (a,
            b) {
            for (var c = this, e = "", d = c.options.contextMenuItems, g = 0, k = d.length; g < k; g++)
                if (d[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var j = d[g].render(c);
                    if (j != null) e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + j + "</div>"
                }
            c.contextMenu.empty().append(f(e)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function () {
                var m = f(this),
                    q = parseInt(m.data("itemindex"), 10),
                    p = c.options.contextMenuItems[q];
                typeof p.show !=
                    "undefined" && p.show(m, c);
                m.click(function () {
                    typeof p.click != "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function () {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function (f) {
    f.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildpostroll: function (a, b, c) {
            var e = this.container.find('link[rel="postroll"]').attr("href");
            if (typeof e !== "undefined") {
                a.postroll = f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();
                this.media.addEventListener("ended",
                    function () {
                        f.ajax({
                            dataType: "html",
                            url: e,
                            success: function (d) {
                                c.find(".mejs-postroll-layer-content").html(d)
                            }
                        });
                        a.postroll.show()
                    }, false)
            }
        }
    })
})(mejs.$);
/**
 *	Template Functions
 *	Version: 1.4.5
 */
$(document).ready(function () {
    "use strict";
    var a = ".header",
        b = ".header-animated",
        c = ".header-sticky",
        d = ".header-background",
        e = ".header-compact",
        f = ".header-in",
        g = ".header-out",
        h = ".header-positioned",
        i = "#bkg-retina-img, #retina-img, [data-2x]",
        j = ".equalize",
        k = ".fullscreen-sections-wrapper",
        l = ".fullscreen-section",
        m = ".scroll-link",
        n = 1e3,
        o = "easeInOutQuart",
        p = .6,
        q = ".grid-container",
        r = ".grid-item, .masonry-stamp",
        s = ".grid-filter-menu, .grid-filter-dropdown",
        t = "700ms",
        u = "700ms",
        v = !1,
        w = [".video-container iframe", ".video-container object"],
        x = ["www.youtube.com", "player.vimeo.com", "http://www.dailymotion.com"],
        y = ".mejs-container audio, .mejs-container video",
        z = ".carousel-slider",
        A = ".content-slider",
        B = ".tm-slider-container.fullscreen",
        C = ".full-width-slider",
        D = ".logo-slider",
        E = ".hero-slider",
        F = ".testimonial-slider",
        G = ".team-slider",
        H = ".recent-slider",
        I = ".slider-aux-nav",
        J = ".slider-aux-prev",
        K = ".slider-aux-next",
        L = ".slider-aux-bullet",
        M = "#tm-lightbox",
        N = ".lightbox-link",
        O = ".form-element",
        P = ".form-response",
        Q = ".form-honeypot",
        R = ".form-submit",
        S = ".signup-form",
        T = ".required-field",
        U = "Please wait.",
        V = "Sending...",
        W = "You have been added to our list!",
        X = "Oh boy an error occurred, please try again.",
        Y = "Please fill out required fields.",
        Z = "Please enter a valid email address.",
        _ = ".contact-form",
        aa = ".required-field",
        ba = "Please wait.",
        ca = "Sending...",
        da = "Thank you, your email has been received!",
        ea = "Oh boy an error occurred, please try again.",
        fa = "Please fill out required fields.",
        ga = "Please enter a valid email address.",
        ha = ".map-container",
        ia = ".map-pan-link-container",
        ja = ".map-pan-link",
        ka = ["images/assets/map-marker.png", "images/assets/map-marker-2.png"],
        la = [
            [40.723301, -74.002988]
        ],
        ma = ["Downtown New York Office<br>44 St. West 32"],
        na = 45,
        oa = 53,
        pa = 12,
        qa = !1,
        ra = !1,
        sa = !1,
        ta = !0,
        ua = !0,
        va = !1,
        wa = !0,
        xa = ".content",
        ya = ".footer-fixed",
        za = ".footer",
        Aa = !0,
        Ba = "body",
        Ca = ".fade-location, .logo a, .footer-logo a, .navigation a, .side-navigation a, .overlay-navigation a, .grid .overlay-link, .post-media .overlay-link, .post-title a, .post-read-more a, .pagination-previous, .pagination-next, .breadcrumb a, a.read-more",
        Da = ".no-page-fade, .no-page-fade a, .mail-link, .lightbox-link, .contains-sub-menu, .blog .pagination-previous, .blog .pagination-next, .disabled, .scroll-link, .navigation-show a, a.navigation-show",
        Ea = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
        Fa = {
            init: function () {
                $(Ba).removeClass("no-js"), Fa.siteHeader(), Fa.retinize(), Fa.equalize(768), Fa.parallax(".parallax", !0, !1, !0), Fa.fullScreenSection(), Fa.masonry(), Fa.logoSlider(), Fa.heroSlider(), Fa.testimonialSlider(), Fa.teamSlider(), Fa.recentSlider(), Fa.carouselSlider(), Fa.contentSlider(), Fa.fullScreenSlider(), Fa.fullWidthSlider(), Fa.sliderAuxNav(), Fa.lightbox(), Fa.counter(".stat", ".stat-counter", !1), Fa.horizon(".horizon", ".parallax .horizon", "easeInOutQuint", !1, 1), Fa.freeze(".freeze"), Fa.videos(), Fa.mediaElement(), Fa.signupForm(), Fa.contactForm(), Fa.enablePlaceHolder();
                try {
                    document.getElementsByClassName("map-canvas") && google.maps.event.addDomListener(window, "load", Fa.googleMap)
                } catch (a) { }
                Fa.fixedFooter(), Fa.pageFade(), Fa.scrollToSection(), $("body").hasClass("preload-page") && Fa.preloadPage()
            },
            retinize: function () {
                $(i).retinizeImages()
            },
            equalize: function (a) {
                imagesLoaded($(j), function () {
                    $(j).equalizeHeights({
                        clearUnder: a
                    })
                })
            },
            parallax: function (a, b, c, d) {
                $(a).snowBridge({
                    scaleContainer: b,
                    scaleUnder: 960,
                    scaleMinHeight: 400,
                    fullscreen: c,
                    fadeInOut: d,
                    fadeThreshold: .5,
                    retinaSupport: !1,
                    parallaxFactor: .6,
                    onLoaded: function () {
                        Fa.horizon(".horizon", "", "easeInOutQuint", !1, 1)
                    }
                })
            },
            horizon: function (a, b, c, d, e) {
                return !$("body").hasClass("preload-page") && void $(a).not(b).horizon({
                    easing: c,
                    recurring: d,
                    threshold: e
                })
            },
            freeze: function (a) {
                $(window).one("load", function () {
                    $(a).freeze({
                        breakpoint: 960
                    })
                })
            },
            counter: function (a, b, c) {
                $(b).counter({
                    autoStart: !1
                }), $(a).each(function () {
                    var a = $(this);
                    a.horizon({
                        recurring: c,
                        inView: function () {
                            return !a.find(b).data("counting") && void a.find(b).each(function () {
                                a.find(b).data("counting", !0);
                                var c = $(this).data("counter");
                                c.startCounter()
                            })
                        },
                        outOfView: function () {
                            return !(!c || !a.find(b).data("counting")) && void a.find(b).each(function () {
                                a.find(b).data("counting", !1);
                                var c = $(this).data("counter");
                                c.clearCounter()
                            })
                        }
                    })
                })
            },
            carouselSlider: function () {
                $(z).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    forceFit: !1,
                    scaleMinHeight: "auto",
                    carousel: !0,
                    carouselVisible: 3,
                    lazyLoad: !1,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    retinaSupport: !1
                })
            },
            contentSlider: function () {
                $(A).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    forceFit: !1,
                    scaleMinHeight: "auto",
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    retinaSupport: !1
                })
            },
            fullScreenSlider: function () {
                $(B).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    fullscreen: !0,
                    captionScaling: !1,
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    respectRatio: !1,
                    retinaSupport: !1
                })
            },
            fullWidthSlider: function () {
                $(C).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !1,
                    forceFit: !1,
                    fullwidth: !0,
                    scaleUnder: 960,
                    scaleMinHeight: 400,
                    captionScaling: !0,
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    respectRatio: !1,
                    retinaSupport: !1
                })
            },
            logoSlider: function () {
                $(D).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 700,
                    autoAdvance: !0,
                    carousel: !0,
                    carouselVisible: 5,
                    adaptiveHeight: !0,
                    lazyLoad: !1,
                    navArrows: !0,
                    navPagination: !0,
                    showProgressBar: !1,
                    navShowOnHover: !0,
                    retinaSupport: !1
                })
            },
            heroSlider: function () {
                $(E).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    scaleMinHeight: "auto",
                    carousel: !1,
                    carouselVisible: 1,
                    adaptiveHeight: !0,
                    lazyLoad: !1,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                })
            },
            testimonialSlider: function () {
                $(F).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    scaleMinHeight: "auto",
                    carousel: !0,
                    carouselVisible: 1,
                    adaptiveHeight: !0,
                    lazyLoad: !1,
                    navArrows: !1,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                })
            },
            teamSlider: function () {
                $(G).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    carousel: !0,
                    carouselVisible: 3,
                    adaptiveHeight: !0,
                    lazyLoad: !1,
                    navArrows: !1,
                    navPagination: !0,
                    navShowOnHover: !1,
                    retinaSupport: !1
                })
            },
            recentSlider: function () {
                $(H).avalancheSlider({
                    animation: "slide",
                    easing: "easeInOutQuart",
                    speed: 900,
                    autoAdvance: !1,
                    carousel: !0,
                    carouselVisible: 3,
                    adaptiveHeight: !0,
                    lazyLoad: !0,
                    navArrows: !0,
                    navPagination: !0,
                    navShowOnHover: !0,
                    retinaSupport: !1
                })
            },
            sliderAuxNav: function () {
                $(I).each(function () {
                    var a = "#" + $(this).data("target-slider"),
                        b = $(a).data("avalancheSlider");
                    $(this).is(J) ? $(this).on("click", function (a) {
                        a.preventDefault(), b.prevSlide()
                    }) : $(this).is(K) && $(this).on("click", function (a) {
                        a.preventDefault(), b.nextSlide()
                    })
                }), $(L).each(function () {
                    var a = "#" + $(this).data("target-slider"),
                        b = $(a).data("avalancheSlider");
                    $(this).on("click", function (a) {
                        a.preventDefault();
                        var c = $(this).data("slide");
                        b.slideTo(c), $(this).siblings().removeClass("active"), $(this).addClass("active")
                    })
                })
            },
            lightbox: function () {
                $(N).summitLightbox({
                    lightboxAnimation: "slideInTop",
                    contentAnimation: "slide",
                    slideAmount: 100,
                    easing: "swing",
                    speed: 350,
                    onLoaded: function () {
                        var a = $(N).data("summitLightbox"),
                            b = $(M).find(".tml-aux-exit");
                        if (0 !== b.length && b.on("click", function (b) {
                            b.preventDefault(), $(this).css({
                                transition: "none"
                            }), a.destroyLightbox()
                        }), $(".tm-lightbox").find(".wpcf7").length) {
                            var c = null;
                            $(".wpcf7 > form").each(function () {
                                var a = $(this);
                                wpcf7.initForm(a), wpcf7.cached && wpcf7.refill(a)
                            }), $(".tm-lightbox").hasClass("destroy-on-success") && document.addEventListener("wpcf7mailsent", function (b) {
                                clearTimeout(c), c = setTimeout(function () {
                                    a.destroyLightbox()
                                }, 1e3)
                            }, !1)
                        }
                    }
                })
            },
            videos: function () {
                fluidvids.init({
                    selector: w,
                    players: x
                })
            },
            mediaElement: function () {
                $(y).each(function () {
                    var a = !1;
                    $(this).is("audio") && (a = !0), $(this).mediaelementplayer({
                        features: a ? ["playpause", "progress", "volume", "fullscreen"] : ["playpause", "progress", "current", "duration", "tracks", "volume", "fullscreen"],
                        videoWidth: "100%",
                        videoHeight: "100%",
                        audioWidth: "100%",
                        videoVolume: "vertical",
                        audioVolume: "horizontal"
                    })
                })
            },
            siteHeader: function () {
                function i() {
                    j = $(window).width(), k = $(window).height(), l = Math.ceil(u.outerHeight()), m = "window-height" === u.data("bkg-threshold") ? k - l : u.data("bkg-threshold"), n = "window-height" === u.data("compact-threshold") ? k - l : u.data("compact-threshold"), o = "window-height" === u.data("sticky-threshold") ? k - l : u.data("sticky-threshold"), p = u.data("helper-in-threshold"), q = u.data("helper-out-threshold")
                }
                var j, k, l, m, n, o, p, q, r, s = 0,
                    t = 960,
                    u = $(a),
                    v = !!u.is("[data-sticky-threshold]");
                b = b.split(".").join(""), c = c.split(".").join(""), d = d.split(".").join(""), e = e.split(".").join(""), f = f.split(".").join(""), g = g.split(".").join(""), h = h.split(".").join("");
                var w = function (b) {
                    return !($("body").hasClass("mobile") || j < t) && (o && $(b).scrollTop() >= o || 0 === o ? ($(a).addClass(c), p && q && $(a).addClass(h)) : ($(a).removeClass(c), p && q && $(a).removeClass(h)), m && $(b).scrollTop() >= m ? $(a).addClass(d) : $(a).removeClass(d), n && $(b).scrollTop() >= n ? $(a).addClass(e) : $(a).removeClass(e), r = $(b).scrollTop(), r > s ? (p && $(b).scrollTop() >= p && $(a).addClass(f), $(a).removeClass(g)) : r < s && (p && $(b).scrollTop() <= p && ($(a).removeClass(f), $(a).removeClass(g)), p && $(b).scrollTop() >= p && $(b).scrollTop() <= q && ($(a).addClass(g), $(g).on(Ea, function (c) {
                        return c.stopPropagation(), c.target === $(b)[0] && void $(a).removeClass(g)
                    }))), void (s = r))
                },
                    x = function (b) {
                        return i(), !$("body").hasClass("mobile") && (j > t && v && u.css({
                            height: u.outerHeight() + "px"
                        }), j > t && $(window).scrollTop() >= o ? ($(a).addClass(c), p && q && $(a).addClass(h)) : ($(a).removeClass(c), p && q && $(a).removeClass(h)), j > t && $(window).scrollTop() < m ? $(a).removeClass(d) : j > t && $(window).scrollTop() > m && $(a).addClass(d), j > t && $(window).scrollTop() < n ? $(a).removeClass(e) : j > t && $(window).scrollTop() > n && $(a).addClass(e), void (j < t && $(a).removeClass(e)))
                    };
                $(window).on("scroll", function () {
                    w($(this))
                }), $(window).on("resize", function () {
                    x()
                }), $("body").hasClass("mobile") || $(window).one("load", function () {
                    i(), w($(this)), j > t && v && u.css({
                        height: l + "px"
                    }), $(a).addClass(b)
                })
            },
            fullScreenSection: function () {
                var a = function () {
                    var a;
                    if ($(k).find(l).length > 1) {
                        if ($("body").hasClass("mobile")) return !1;
                        var b, c = !$(k).hasClass("no-navigation");
                        if (c) {
                            b = $("<div>").addClass("fs-pagination").appendTo($(k));
                            for (var d = 1; d < $(k).children().length; d++) a = $(k).children().eq(d - 1).attr("id"), $(k).find("#" + a).data("index", d), $(k).find(b).append('<a href="#' + a + '" id="fs-pagination-' + d + '" data-index="' + d + '" class="fs-bullet-nav" />');
                            $(window).on("resize", function () {
                                e()
                            });
                            var e = function () {
                                $(b).css({
                                    marginTop: -$(b).outerHeight() / 2 + "px",
                                    opacity: 1
                                })
                            };
                            e();
                            var f = $(k).find(".fs-bullet-nav");
                            f.each(function () {
                                $(this).on("click", function (b) {
                                    if (b.preventDefault(), $(this).hasClass("active")) return !1;
                                    parseFloat($(this).data("index"));
                                    a = $(this).attr("href"), Fa.scrollPage(a, 0)
                                })
                            })
                        }
                        $(window).on("scroll", function () {
                            $(k).find(l).each(function () {
                                g($(this))
                            })
                        });
                        var g = function (a) {
                            a.data("fs-scrolling") || (window.requestAnimationFrame(function () {
                                h(a)
                            }), a.data("fs-scrolling", !0))
                        },
                            h = function (a) {
                                if (Fa.isElementVisible(a, p) && c) {
                                    $(b).css({
                                        opacity: 1
                                    });
                                    var d = $(k).find(a).data("index");
                                    b.find(".active").removeClass("active"), b.find("#fs-pagination-" + d).addClass("active"), a.hasClass("nav-dark") ? b.addClass("nav-dark") : b.removeClass("nav-dark")
                                }
                                c && Fa.isElementVisible($(k), p) ? $(b).css({
                                    opacity: 1,
                                    visibility: "visible"
                                }) : $(b).css({
                                    opacity: 0,
                                    visibility: "hidden"
                                }), a.data("fs-scrolling", !1)
                            };
                        $(k).find(l).each(function () {
                            g($(this))
                        })
                    }
                },
                    b = function () {
                        $(l).each(function () {
                            var a = $(this),
                                b = a.find(".background-image, .background-slider-wrapper");
                            if ($(this).is("[data-width],[data-height]"))
                                if ($("body").hasClass("mobile") || c <= 768) {
                                    a.addClass("fs-image-scale content-below-on-mobile");
                                    var e = a.data("width"),
                                        f = a.data("height"),
                                        g = a.data("min-height"),
                                        h = a.width(),
                                        i = e >= f ? e / f : f / e,
                                        j = e >= f ? h / i : h * i;
                                    j = g && j <= g ? g : j, a.css({
                                        height: "auto"
                                    }), b.css({
                                        height: j + "px",
                                        minHeight: j + "px"
                                    })
                                } else a.removeClass("fs-image-scale"), a.css({
                                    height: ""
                                }), b.css({
                                    height: "",
                                    minHeight: ""
                                });
                            else $("body").hasClass("mobile") || c <= 768 ? b.css({
                                height: d + "px"
                            }) : (a.removeClass("fs-image-scale"), a.css({
                                height: ""
                            }), b.css({
                                height: "",
                                minHeight: ""
                            }))
                        })
                    },
                    c = $(window).width(),
                    d = $(window).height();
                $(window).on("resize", function () {
                    c = $(window).width(), d = $(this).height(), b()
                }).resize(), a()
            },
            scrollToSection: function () {
                var b, c = [],
                    d = $(a);
                $(m).each(function () {
                    if (c.push($(this).attr("href")), d.data("compact-threshold")) {
                        var a = d.clone().addClass("header-compact").css({
                            display: "none"
                        });
                        a.appendTo("body"), b = $(a).outerHeight(), a.remove()
                    } else b = d.outerHeight();
                    $(this).on("click", function (a) {
                        a.preventDefault();
                        var c = $(this).attr("href"),
                            e = $(this).data("offset") ? $(this).data("offset") : $(window).width() < 960 ? -d.outerHeight() : -b;
                        Fa.scrollPage(c, e)
                    })
                }), $(window).one("load", function () {
                    $.each(c, function (a, b) {
                        e($(b))
                    })
                }), $(window).on("scroll", function () {
                    $.each(c, function (a, b) {
                        e($(b))
                    })
                });
                var e = function (a) {
                    a.data("section-scrolling") || (window.requestAnimationFrame(function () {
                        f(a)
                    }), a.data("section-scrolling", !0))
                },
                    f = function (a) {
                        var b = "header, .header-sub, .side-navigation-wrapper, .overlay-navigation-wrapper";
                        if (Fa.isElementVisible(a, p)) {
                            var c = a.attr("id"),
                                d = $('a[href="#' + c + '"]').closest(b);
                            d && ($(b).find(m).parent().removeClass("current"), $(b).find('a[href="#' + c + '"]').parent().addClass("current"))
                        } else 0 === $(".in-view").length && $(b).find(m).parent().removeClass("current");
                        a.data("section-scrolling", !1)
                    }
            },
            isElementVisible: function (a, b) {
                if (b = a.is("[data-visible-threshold]") ? a.data("visible-threshold") : p, "undefined" == typeof a.offset()) return console.log("template-functions.js@isElementVisible: " + a.selector + " cannot be found in your html page."), !1;
                var c = $(window).height(),
                    d = $(window).scrollTop(),
                    e = d + $(window).height(),
                    f = a.offset().top,
                    g = (a.height(), f + a.outerHeight() - c * b),
                    h = f + c * b;
                return a.is($(k)) || (e >= h && d <= g ? a.addClass("in-view") : a.removeClass("in-view")), e >= h && d <= g
            },
            scrollPage: function (a, b) {
                $("html, body").animate({
                    scrollTop: $(a).offset().top + b
                }, n, o)
            },
            masonry: function () {
                $(q).each(function () {
                    var a, b, c = $(this),
                        d = $(this).find(".grid"),
                        e = $(c).data("default-filter") ? $(c).data("default-filter") : "*";
                    if (c.hasClass("fade-in-progressively") && d.children().addClass("no-transition"), "*" !== e && ($(s).find(".active").removeClass("active"), $(s).find('[data-filter="' + e + '"]').addClass("active")), c.data("layout-mode")) {
                        a = c.data("layout-mode") ? c.data("layout-mode") : "masonry", c.is("[data-layout-mode]") && c.addClass("masonry"), c.is("[data-set-dimensions]") && c.addClass("masonry-set-dimensions"), v = !!c.is("[data-animate-resize]"), u = c.is("[data-animate-resize-duration]") ? c.data("animate-resize-duration") + "ms" : u, c.is(".masonry-set-dimensions, .masonry-set-dimensions-2") ? (c.is(".full-width.no-margins") && Fa.masonryWrapperWidth(c, d), b = Fa.masonryColWidth(c, d), Fa.masonryThumbSizes(c, d, Fa.masonryColWidth(c, d))) : b = ".grid-sizer";
                        var f = parseFloat(c.css("padding-top")),
                            g = $('<div class="tm-loader" style="margin-top: 0; top:' + f + 'px"><svg id="circle" viewBox="25 25 50 50"><circle class="stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>');
                        g.appendTo(c), imagesLoaded(d, function () {
                            d.isotope({
                                filter: e,
                                itemSelector: ".grid-item",
                                isResizeBound: !!v,
                                transitionDuration: t,
                                layoutMode: a,
                                stamp: ".masonry-stamp",
                                masonry: {
                                    columnWidth: b
                                }
                            }), c.find(g).remove(), d.css({
                                visibility: "visible",
                                minHeight: "initial"
                            }), $("body").hasClass("transition-support") && d.children().removeClass("no-transition");
                            var f = d.children().length - 1;
                            d.children().each(function (a) {
                                if (c.is("[data-as-bkg-image]") && c.is("[data-set-dimensions]") && !$(this).find(".background-image").length) {
                                    var b = $(this).find("img"),
                                        d = $(this).find("img").attr("style"),
                                        e = b.attr("srcset") && !$("body").hasClass("ie-browser") ? b.prop("currentSrc") : b.attr("src");
                                    $('<span class="background-image background-cover" style="' + d + '" />').css({
                                        "background-image": "url(" + e + ")"
                                    }).insertAfter(b), b.remove()
                                }
                                $(this).find("img").length || $(this).find(".background-image").length || $(this).addClass("no-image"), $("body").hasClass("transition-support") ? $(this).delay(100 * a).queue(function () {
                                    $(this).addClass("animate-in"), $(this).dequeue()
                                }) : $(this).delay(100 * a).animate({
                                    opacity: 1
                                }, 500, "easeInOutQuart", function () {
                                    a === f && c.removeClass("fade-in-progressively")
                                })
                            }), $(window).on("resize", function () {
                                c.removeClass("fade-in-progressively"), c.is(".full-width.no-margins") && Fa.masonryWrapperWidth(c, d), Fa.masonryThumbSizes(c, d, Fa.masonryColWidth(c, d)), v ? d.isotope({
                                    transitionDuration: u,
                                    masonry: {
                                        columnWidth: ".grid-sizer" !== b ? Fa.masonryColWidth(c, d) : ".grid-sizer"
                                    }
                                }) : (d.removeClass("filtering"), d.isotope({
                                    transitionDuration: 0,
                                    masonry: {
                                        columnWidth: ".grid-sizer" !== b ? Fa.masonryColWidth(c, d) : ".grid-sizer"
                                    }
                                }).isotope("layout").isotope({
                                    transitionDuration: u
                                }))
                            })
                        })
                    } else d.css({
                        visibility: "visible"
                    })
                }), $(s).each(function () {
                    var a, b;
                    $(this).find("ul a").on("click", function (c) {
                        c.preventDefault(), $(this).closest(s).find(".active").removeClass("active"), $(this).addClass("active"), a = $(this).closest(s).data("target-grid") ? $(this).closest(s).data("target-grid") : q, $(a).removeClass("fade-in-progressively"), t = $(a).is("[data-animate-filter-duration]") ? $(a).data("animate-filter-duration") + "ms" : t, a = $(a).find(".grid"), a.isotope({
                            transitionDuration: t
                        }), b = $(this).attr("data-filter"), $(a).addClass("filtering").isotope({
                            filter: b
                        })
                    }), $(this).find("a").each(function () {
                        if (a = $(this).closest(s).data("target-grid") ? $(this).closest(s).data("target-grid") : q, b = "*" != $(this).data("filter") ? $(this).data("filter") : ".grid-item", $(this).find(".project-count").length > 0) {
                            var c = $(a).find(b).length;
                            $(this).find(".project-count").html(c)
                        }
                    })
                })
            },
            masonryWrapperWidth: function (a, b) {
                var c = Math.ceil(1.001 * a.width());
                b.css({
                    maxWidth: c + "px",
                    width: c + "px"
                })
            },
            masonryColWidth: function (a, b) {
                var c, d = $(window).width(),
                    e = Math.ceil(a.width()),
                    f = a.is(".full-width.no-margins") ? Math.ceil(1.001 * e) : b.width();
                return a.is(".full-width.small-margins, .full-width.no-margins") ? (b.hasClass("content-grid-2") && (c = d >= 480 ? f / 2 : f / 1),
                    b.hasClass("content-grid-3") && (c = d > 768 ? f / 3 : d <= 768 && d > 480 ? f / 2 : f / 1),
                    b.hasClass("content-grid-4") && (c = d > 900 ? f / 4 : d <= 900 && d > 768 ? f / 3 : d <= 768 && d > 480 ? f / 2 : f / 1),
                    b.hasClass("content-grid-5") && (c = d > 1000 ? f / 5 : d <= 1000 && d > 900 ? f / 4 : d <= 900 && d >= 768 ? f / 3 : d <= 768 && d > 480 ? f / 2 : f / 1),
                    b.hasClass("content-grid-6") && (c = d > 1000 ? f / 6 : d <= 1000 && d > 900 ? f / 4 : d <= 900 && d >= 768 ? f / 3 : d <= 768 && d > 480 ? f / 2 : f / 1)) : (b.hasClass("content-grid-2") && (c = d >= 600 ? f / 2 : f / 1),
                        b.hasClass("content-grid-3") && (c = d > 830 ? f / 3 : d <= 830 && d > 600 ? f / 2 : f / 1),
                        b.hasClass("content-grid-4") && (c = d > 900 ? f / 4 : d <= 900 && d > 830 ? f / 3 : d <= 830 && d > 600 ? f / 2 : f / 1),
                        b.hasClass("content-grid-5") && (c = d > 1000 ? f / 5 : d <= 1000 && d > 900 ? f / 4 : d <= 900 && d > 830 ? f / 3 : d <= 830 && d > 600 ? f / 2 : f / 1),
                        b.hasClass("content-grid-6") && (c = d > 1000 ? f / 6 : d <= 1000 && d > 900 ? f / 4 : d <= 900 && d > 830 ? f / 3 : d <= 830 && d > 600 ? f / 2 : f / 1)), c = Math.floor(c)
            },
            masonryThumbSizes: function (a, b, c) {
                var d, e = $(window).width(),
                    f = 2,
                    g = $(".masonry-set-dimensions").hasClass("no-margins") ? 0 : parseFloat(b.find(".grid-item").css("padding-left")),
                    h = a.is(".masonry-set-dimensions") ? a.is("[data-grid-ratio]") ? parseFloat(a.data("grid-ratio")) : 1.5 : 1;
                if (d = Math.floor((c - g) / h + g), a.is(".masonry-set-dimensions")) {
                    var i = a.is(".full-width.small-margins, .full-width.no-margins") ? 480 : 600;
                    b.find(r).each(function () {
                        $(this).is(".large, .masonry-stamp.large") ? $(this).is(".portrait, .masonry-stamp.portrait") ? $(this).css({
                            width: e > i ? Math.floor(c * f) + "px" : c + "px",
                            height: e > i ? Math.floor(d * (2 * f)) + "px" : 2 * d + "px"
                        }) : $(this).css({
                            width: e > i ? Math.floor(c * f) + "px" : c + "px",
                            height: e > i ? Math.floor(d * f) + "px" : d + "px"
                        }) : $(this).is(".wide, .masonry-stamp.wide") ? $(this).css({
                            width: e > i ? Math.floor(c * f) + "px" : c + "px",
                            height: e > i ? d + "px" : d / 2 + "px"
                        }) : $(this).is(".portrait, .masonry-stamp.portrait") ? $(this).css({
                            width: c + "px",
                            height: Math.floor(d * f) + "px"
                        }) : $(this).css({
                            width: c + "px",
                            height: d + "px"
                        })
                    })
                }
                a.is(".masonry-set-dimensions-2") && (e > 600 ? b.find(r).each(function () {
                    $(this).hasClass("horizontal") ? $(this).hasClass("two-third") ? $(this).children(".item-description").length ? $(this).css({
                        width: Math.floor(c * (f + 1)) + "px",
                        height: Math.floor(d) + "px"
                    }) : $(this).addClass("no-description").css({
                        width: Math.floor(c * f) + "px",
                        height: Math.floor(d) + "px"
                    }) : $(this).css({
                        width: Math.floor(c * f) + "px",
                        height: Math.floor(d) + "px"
                    }) : $(this).hasClass("vertical") ? $(this).hasClass("two-third") && $(this).children(".item-description").length ? $(this).css({
                        width: c + "px",
                        height: Math.floor(c * (f + 1)) + "px"
                    }) : $(this).css({
                        width: c + "px",
                        height: Math.floor(d * f) + "px"
                    }) : $(this).css({
                        width: c + "px",
                        height: Math.floor(d) + "px"
                    })
                }) : b.find(r).each(function () {
                    $(this).find("iframe, video, .tm-slider-container").length ? $(this).css({
                        width: c + "px",
                        height: d + "px"
                    }) : $(this).css({
                        width: "",
                        height: ""
                    })
                }))
            },
            signupForm: function () {
                $(S).submit(function (a) {
                    a.preventDefault();
                    var b = $(this),
                        c = b.parent().find(P),
                        d = b.find(O),
                        e = b.find('input[type="email"]'),
                        f = b.find(Q),
                        g = b.find(R),
                        h = b.attr("action"),
                        i = b.attr("method"),
                        j = b.serialize(),
                        k = !1,
                        l = !1,
                        m = !1;
                    if (T = T.split(".").join(""), d.removeClass(T), d.each(function () {
                        $(this).attr("required") && ($(this).val() || (k = !0, $(this).addClass(T), c.hide().text(Y).fadeIn(200)))
                    }), k || (l = !0), e.val() && !Fa.isValidEmail(e.val()) ? (c.hide().text(Z).fadeIn(200), e.addClass(T)) : m = !0, "" !== f.val()) return !1;
                    if (k && e.val() && !Fa.isValidEmail(e.val()) && c.hide().text(Y + " " + Z).fadeIn(200), l && m) {
                        var n = $(g).val();
                        $(g).css({
                            width: $(g).outerWidth() + "px"
                        }).val(V).attr("disabled", !0), c.hide().text(U).fadeIn(200), $.ajax({
                            url: h,
                            type: i,
                            data: j,
                            dataType: "json"
                        }).done(function (a) {
                            try {
                                a.response === !0 ? (c.text(W), c.delay(1500).fadeOut(200), d.val("")) : c.hide().text(a.json.error_message).fadeIn(200)
                            } catch (a) {
                                console.log("error in parsing returned ajax data: " + a), c.hide().text("Error occurred. Please see the console for details.").fadeIn(200)
                            }
                        }).fail(function (a, b, d) {
                            console.log("Error occured in processing your request:"), console.log(a), console.log("Text status"), console.log(b), console.log("Error thrown"), console.log(d), console.log("Server response"), console.log(a.status), console.log("Response Text may contain error output from PHP"), console.log(a.responseText), c.hide().text(X + b + " (" + d + ")").fadeIn(200)
                        }).always(function () {
                            $(g).css({
                                width: ""
                            }).val(n).attr("disabled", !1)
                        })
                    }
                })
            },
            contactForm: function () {
                $(_).submit(function (a) {
                    a.preventDefault();
                    var b = $(this),
                        c = b.parent().find(P),
                        d = b.find(O),
                        e = b.find('input[type="email"]'),
                        f = b.find(Q),
                        g = b.find(R),
                        h = b.attr("action"),
                        i = b.attr("method"),
                        j = [],
                        k = encodeURIComponent(b.find("textarea[name=message]").val() + "\n"),
                        l = [];
                    b.find("input:not([type=submit]),select,textarea").each(function (a, b) {
                        var c = $(b),
                            d = c.attr("name");
                        if (c.hasClass("form-aux") && d) {
                            var e = c.data("label") || d,
                                f = c.find("option:selected").text(),
                                g = c.val();
                            !g && c.is("select") ? g = e == f ? "Not selected" : c.find("option:selected").text() : "checkbox" != c.attr("type") || c.prop("checked") || (g = "Not checked"), l.push({
                                name: d,
                                label: encodeURIComponent(e),
                                value: encodeURIComponent(g)
                            })
                        } else d && "message" != d && j.push(d + "=" + encodeURIComponent(c.val()))
                    });
                    for (var m = 0; m < l.length; m++) {
                        var n = encodeURIComponent("\n") + l[m].label + "%3A%20" + l[m].value;
                        k += n
                    }
                    j.push("message=" + k), j = j.join("&");
                    var o = !1,
                        p = !1,
                        q = !1;
                    if (aa = aa.split(".").join(""), d.removeClass(aa), d.each(function () {
                        ($(this).attr("required") || $(this).children().attr("required")) && ($(this).is(":checkbox") ? $(this).is(":checkbox:checked") || (o = !0, $(this).addClass(aa)) : $(this).children().is("select") ? $(this).children().val() == $(this).children().find("option:selected").text() && (o = !0, $(this).addClass(aa)) : $(this).val() || (o = !0, $(this).addClass(aa)), o && c.hide().text(fa).fadeIn(200))
                    }), o || (p = !0), e.val() && !Fa.isValidEmail(e.val()) ? (c.hide().text(ga).fadeIn(200), e.addClass(aa)) : q = !0, "" !== f.val()) return !1;
                    if (o && e.val() && !Fa.isValidEmail(e.val()) && c.hide().text(fa + " " + ga).fadeIn(200), p && q) {
                        var r = $(g).val();
                        $(g).css({
                            width: $(g).outerWidth() + "px"
                        }).val(ca).attr("disabled", !0), c.hide().text(ba).fadeIn(200), $.ajax({
                            url: h,
                            type: i,
                            data: j,
                            dataType: "json"
                        }).done(function (a) {
                            try {
                                if (a.response === !0) c.text(da), c.delay(1500).fadeOut(200), d.val("");
                                else {
                                    var b = "undefined" == typeof a.json.error_message ? "There is a possibility that your message was not sent. Please check up the server or script configuration." : a.json.error_message;
                                    c.hide().text(ea + " " + b).fadeIn(200)
                                }
                            } catch (b) {
                                console.log("error in parsing returned ajax data: " + b), console.log(a), c.hide().text("Error occurred. Please see the console for details.").fadeIn(200)
                            }
                        }).fail(function (a, b, d) {
                            console.log("Error occured in processing your request:"), console.log(a), console.log("Text status"), console.log(b), console.log("Error thrown"), console.log(d), console.log("Server response"), console.log(a.status), console.log("Response Text may contain error output from PHP"), console.log(qXHR.responseText), c.hide().text(ea + " (Please see the console for error details.)").fadeIn(200)
                        }).always(function () {
                            $(g).css({
                                width: ""
                            }).val(r).attr("disabled", !1)
                        })
                    }
                })
            },
            isValidEmail: function (a) {
                var b = new RegExp(/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i);
                return b.test(a)
            },
            enablePlaceHolder: function () {
                $("input, textarea").placeholder()
            },
            googleMap: function () {
                $(ha).each(function () {
                    var a = $(this).children().attr("id");
                    ka = $(this).data("icon") ? JSON.parse("[" + $(this).data("icon") + "]") : ka, la = $(this).data("coordinates") ? $(this).data("coordinates") : la, ma = $(this).data("info") ? JSON.parse("[" + $(this).data("info") + "]") : ma, pa = $(this).data("zoom-level") ? parseFloat($(this).data("zoom-level")) : pa, wa = !(!$(this).data("style") || "greyscale" !== $(this).data("style"));
                    var b = wa ? -100 : 0,
                        c = !$("body").hasClass("mobile"),
                        d = {
                            draggable: c,
                            zoom: pa,
                            center: new google.maps.LatLng(la[0][0], la[0][1]),
                            mapTypeControl: ra,
                            mapTypeControlOptions: {
                                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                                position: google.maps.ControlPosition.TOP_RIGHT
                            },
                            panControl: sa,
                            panControlOptions: {
                                position: google.maps.ControlPosition.TOP_LEFT
                            },
                            zoomControl: ta,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle.SMALL,
                                position: google.maps.ControlPosition.LEFT_TOP
                            },
                            scrollwheel: qa,
                            scaleControl: ua,
                            streetViewControl: va,
                            streetViewControlOptions: {
                                position: google.maps.ControlPosition.LEFT_TOP
                            },
                            styles: [{
                                stylers: [{
                                    saturation: b
                                }]
                            }]
                        },
                        e = new google.maps.Map(document.getElementById(a), d);
                    $(this).children().data("mapref", e);
                    for (var f, g, h = 0, i = 0; i < la.length; i++) f = new google.maps.Marker({
                        position: new google.maps.LatLng(la[i][0], la[i][1]),
                        map: e,
                        icon: new google.maps.MarkerImage(ka[h], null, null, null, new google.maps.Size(na, oa))
                    }), g = new google.maps.InfoWindow({
                        content: ma[i]
                    }), google.maps.event.addListener(f, "click", function (a, b) {
                        return function () {
                            g.setContent(ma[b]), g.open(e, a)
                        }
                    }(f, i)), h++;
                    google.maps.event.addDomListener(window, "resize", function () {
                        var a = e.getCenter();
                        google.maps.event.trigger(e, "resize"), e.setCenter(a)
                    })
                }), $(ja).each(function () {
                    $(this).data("marker", !1), $(this).on("click", function (a) {
                        a.preventDefault();
                        var b, c, d = $("#" + $(this).data("target-map")).data("mapref"),
                            e = $(this).data("coordinates"),
                            f = new google.maps.LatLng(e[0][0], e[0][1]),
                            g = $(this).data("icon") ? JSON.parse("[" + $(this).data("icon") + "]") : null,
                            h = $(this).data("icon") ? JSON.parse("[" + $(this).data("info") + "]") : null;
                        d.panTo(f), $(this).data("marker") || ($(this).data("icon") && (b = new google.maps.Marker({
                            position: new google.maps.LatLng(e[0][0], e[0][1]),
                            map: d,
                            icon: new google.maps.MarkerImage(g[0], null, null, null, new google.maps.Size(na, oa))
                        })), $(this).data("info") && (c = new google.maps.InfoWindow({
                            content: h[0]
                        }), google.maps.event.addListener(b, "click", function (a, b) {
                            return function () {
                                c.setContent(h[0]), c.open(d, a)
                            }
                        }(b, 0))), $(this).data("marker", !0)), $(this).closest(ia).hasClass(ia.split(".").join("")) && ($(this).closest(ia).find(".active").removeClass("active"), $(this).addClass("active"))
                    })
                })
            },
            fixedFooter: function () {
                function a() {
                    $(za).hasClass(d) && $(window).width() > 960 && $(xa).css({
                        marginBottom: c + "px"
                    }), $(za).is("[data-animate-reveal]") && (b = $(xa).outerHeight() + e - $(window).scrollTop(), b <= $(window).height() && $(window).width() > 960 ? $(xa).addClass("animate-content") : $(xa).removeClass("animate-content"))
                }
                if ($("body").hasClass("mobile")) return !1;
                var b, c = $(ya).outerHeight(),
                    d = ya.split(".").join(""),
                    e = $(xa).offset().top;
                $(za).hasClass(d) && $(xa).addClass("reveal-footer"), $(window).on("scroll", function () {
                    a()
                }), $(window).on("resize", function () {
                    c = $(ya).outerHeight(), a()
                }), a()
            },
            pageFade: function () {
                return !!Aa && void $(Ca).each(function () {
                    "_blank" === $(this).attr("target") && $(this).addClass("no-page-fade"), $(this).not(Da).on("click", function (a) {
                        a.preventDefault();
                        var b = this.href;
                        $("body").hasClass("transition-support") ? $(Ba).addClass("page-fade-out").on(Ea, function (a) {
                            return a.stopPropagation(), a.target === $(this)[0] && void Fa.goToNewPage(b)
                        }) : Fa.goToNewPage(b)
                    })
                })
            },
            goToNewPage: function (a) {
                window.location = a
            },
            preloadPage: function (a) {
                $("body").preloadPage({
                    onComplete: function () {
                        Fa.horizon(".horizon", ".parallax .horizon", "easeInOutQuint", !1, 1)
                    }
                })
            }
        };
    ! function () {
        for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (b, c) {
            var d = (new Date).getTime(),
                e = Math.max(0, 16 - (d - a)),
                f = window.setTimeout(function () {
                    b(d + e)
                }, e);
            return a = d + e, f
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
            clearTimeout(a)
        })
    }(), Fa.init()
});