/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#bs-3.3.7/dt-1.10.15/se-1.2.2
 *
 * Included libraries:
 *   Bootstrap 3.3.7, DataTables 1.10.15, Select 1.2.2
 */

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function(a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, c.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    };
    var e = function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
        toggle: !0
    }, d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function() {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset(),
            h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout), this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.7", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    };
    var e = function(c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();
        if (null != c && "top" == this.affixed) return e < c && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
        var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;
        return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);

/*!
 DataTables 1.10.15
 ©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h) {
    "function" === typeof define && define.amd ? define(["jquery"], function(E) {
        return h(E, window, document)
    }) : "object" === typeof exports ? module.exports = function(E, H) {
        E || (E = window);
        H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
        return h(H, E, E.document)
    } : h(jQuery, window, document)
})(function(h, E, H, k) {
    function Y(a) {
        var b, c, d = {};
        h.each(a, function(e) {
            if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
                d[c] = e, "o" === b[1] && Y(a[e])
        });
        a._hungarianMap = d
    }

    function J(a, b, c) {
        a._hungarianMap || Y(a);
        var d;
        h.each(b, function(e) {
            d = a._hungarianMap[e];
            if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e]
        })
    }

    function Fa(a) {
        var b = m.defaults.oLanguage,
            c = a.sZeroRecords;
        !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
        !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
        a.sInfoThousands && (a.sThousands = a.sInfoThousands);
        (a = a.sDecimal) && fb(a)
    }

    function gb(a) {
        A(a, "ordering", "bSort");
        A(a, "orderMulti", "bSortMulti");
        A(a, "orderClasses", "bSortClasses");
        A(a, "orderCellsTop", "bSortCellsTop");
        A(a, "order", "aaSorting");
        A(a, "orderFixed", "aaSortingFixed");
        A(a, "paging", "bPaginate");
        A(a, "pagingType", "sPaginationType");
        A(a, "pageLength", "iDisplayLength");
        A(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX =
            a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && J(m.models.oSearch, a[b])
    }

    function hb(a) {
        A(a, "orderable", "bSortable");
        A(a, "orderData", "aDataSort");
        A(a, "orderSequence", "asSorting");
        A(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" === typeof b && !h.isArray(b) && (a.aDataSort = [b])
    }

    function ib(a) {
        if (!m.__browser) {
            var b = {};
            m.__browser = b;
            var c = h("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * h(E).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(h("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(h("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        h.extend(a.oBrowser, m.__browser);
        a.oScroll.iBarWidth = m.__browser.barWidth
    }

    function jb(a, b, c, d, e, f) {
        var g, j = !1;
        c !== k && (g = c, j = !0);
        for (; d !==
            e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
        return g
    }

    function Ga(a, b) {
        var c = m.defaults.column,
            d = a.aoColumns.length,
            c = h.extend({}, m.models.oColumn, c, {
                nTh: b ? b : H.createElement("th"),
                sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                aDataSort: c.aDataSort ? c.aDataSort : [d],
                mData: c.mData ? c.mData : d,
                idx: d
            });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = h.extend({}, m.models.oSearch, c[d]);
        la(a, d, h(b).data())
    }

    function la(a, b, c) {
        var b = a.aoColumns[b],
            d = a.oClasses,
            e = h(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig =
                e.attr("width") || null;
            var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            f && (b.sWidthOrig = f[1])
        }
        c !== k && null !== c && (hb(c), J(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
        var g = b.mData,
            j = R(g),
            i = b.mRender ? R(b.mRender) : null,
            c = function(a) {
                return "string" === typeof a && -1 !== a.indexOf("@")
            };
        b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function(a, b, c) {
            var d = j(a, b, k, c);
            return i && b ? i(d, b, a, c) : d
        };
        b.fnSetData = function(a, b, c) {
            return S(g)(a, b, c)
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== h.inArray("asc", b.asSorting);
        c = -1 !== h.inArray("desc", b.asSorting);
        !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI =
            d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
    }

    function Z(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ha(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        ("" !== b.sY || "" !== b.sX) && ma(a);
        s(a, null, "column-sizing", [a])
    }

    function $(a, b) {
        var c = na(a, "bVisible");
        return "number" === typeof c[b] ? c[b] : null
    }

    function aa(a, b) {
        var c = na(a, "bVisible"),
            c = h.inArray(b,
                c);
        return -1 !== c ? c : null
    }

    function ba(a) {
        var b = 0;
        h.each(a.aoColumns, function(a, d) {
            d.bVisible && "none" !== h(d.nTh).css("display") && b++
        });
        return b
    }

    function na(a, b) {
        var c = [];
        h.map(a.aoColumns, function(a, e) {
            a[b] && c.push(e)
        });
        return c
    }

    function Ia(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = m.ext.type.detect,
            e, f, g, j, i, h, l, q, r;
        e = 0;
        for (f = b.length; e < f; e++)
            if (l = b[e], r = [], !l.sType && l._sManualType) l.sType = l._sManualType;
            else if (!l.sType) {
            g = 0;
            for (j = d.length; g < j; g++) {
                i = 0;
                for (h = c.length; i < h; i++) {
                    r[i] === k && (r[i] = B(a, i, e, "type"));
                    q = d[g](r[i], a);
                    if (!q && g !== d.length - 1) break;
                    if ("html" === q) break
                }
                if (q) {
                    l.sType = q;
                    break
                }
            }
            l.sType || (l.sType = "string")
        }
    }

    function kb(a, b, c, d) {
        var e, f, g, j, i, n, l = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                n = b[e];
                var q = n.targets !== k ? n.targets : n.aTargets;
                h.isArray(q) || (q = [q]);
                f = 0;
                for (g = q.length; f < g; f++)
                    if ("number" === typeof q[f] && 0 <= q[f]) {
                        for (; l.length <= q[f];) Ga(a);
                        d(q[f], n)
                    } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);
                else if ("string" === typeof q[f]) {
                    j = 0;
                    for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) &&
                        d(j, n)
                }
            }
        if (c) {
            e = 0;
            for (a = c.length; e < a; e++) d(e, c[e])
        }
    }

    function N(a, b, c, d) {
        var e = a.aoData.length,
            f = h.extend(!0, {}, m.models.oRow, {
                src: c ? "dom" : "data",
                idx: e
            });
        f._aData = b;
        a.aoData.push(f);
        for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== k && (a.aIds[b] = f);
        (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);
        return e
    }

    function oa(a, b) {
        var c;
        b instanceof h || (b = h(b));
        return b.map(function(b, e) {
            c = Ka(a, e);
            return N(a, c.data, e, c.cells)
        })
    }

    function B(a, b, c, d) {
        var e = a.iDraw,
            f = a.aoColumns[c],
            g = a.aoData[b]._aData,
            j = f.sDefaultContent,
            i = f.fnGetData(g, d, {
                settings: a,
                row: b,
                col: c
            });
        if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
        if ((i === g || null === i) && null !== j && d !== k) i = j;
        else if ("function" === typeof i) return i.call(g);
        return null === i && "display" == d ? "" : i
    }

    function lb(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c
        })
    }

    function La(a) {
        return h.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) {
            return a.replace(/\\\./g, ".")
        })
    }

    function R(a) {
        if (h.isPlainObject(a)) {
            var b = {};
            h.each(a, function(a, c) {
                c && (b[a] = R(c))
            });
            return function(a, c, f, g) {
                var j = b[c] || b._;
                return j !== k ? j(a, c, f, g) : a
            }
        }
        if (null === a) return function(a) {
            return a
        };
        if ("function" === typeof a) return function(b, c, f, g) {
            return a(b, c, f, g)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var c = function(a, b, f) {
                var g, j;
                if ("" !== f) {
                    j = La(f);
                    for (var i = 0, n = j.length; i < n; i++) {
                        f = j[i].match(ca);
                        g = j[i].match(V);
                        if (f) {
                            j[i] = j[i].replace(ca, "");
                            "" !== j[i] && (a = a[j[i]]);
                            g = [];
                            j.splice(0, i + 1);
                            j = j.join(".");
                            if (h.isArray(a)) {
                                i = 0;
                                for (n = a.length; i < n; i++) g.push(c(a[i], b, j))
                            }
                            a = f[0].substring(1, f[0].length - 1);
                            a = "" === a ? g : g.join(a);
                            break
                        } else if (g) {
                            j[i] = j[i].replace(V, "");
                            a = a[j[i]]();
                            continue
                        }
                        if (null === a || a[j[i]] === k) return k;
                        a = a[j[i]]
                    }
                }
                return a
            };
            return function(b, e) {
                return c(b, e, a)
            }
        }
        return function(b) {
            return b[a]
        }
    }

    function S(a) {
        if (h.isPlainObject(a)) return S(a._);
        if (null === a) return function() {};
        if ("function" === typeof a) return function(b, d, e) {
            a(b, "set", d, e)
        };
        if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
            var b = function(a, d, e) {
                var e = La(e),
                    f;
                f = e[e.length - 1];
                for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
                    g = e[i].match(ca);
                    j = e[i].match(V);
                    if (g) {
                        e[i] = e[i].replace(ca, "");
                        a[e[i]] = [];
                        f = e.slice();
                        f.splice(0, i + 1);
                        g = f.join(".");
                        if (h.isArray(d)) {
                            j = 0;
                            for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f)
                        } else a[e[i]] = d;
                        return
                    }
                    j && (e[i] = e[i].replace(V,
                        ""), a = a[e[i]](d));
                    if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
                    a = a[e[i]]
                }
                if (f.match(V)) a[f.replace(V, "")](d);
                else a[f.replace(ca, "")] = d
            };
            return function(c, d) {
                return b(c, d, a)
            }
        }
        return function(b, d) {
            b[a] = d
        }
    }

    function Ma(a) {
        return D(a.aoData, "_aData")
    }

    function pa(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function qa(a, b, c) {
        for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1)
    }

    function da(a, b, c, d) {
        var e = a.aoData[b],
            f, g = function(c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = B(a, b, d, "display")
            };
        if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data;
        else {
            var j = e.anCells;
            if (j)
                if (d !== k) g(j[d], d);
                else {
                    c = 0;
                    for (f = j.length; c < f; c++) g(j[c], c)
                }
        }
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== k) g[d].sType = null;
        else {
            c = 0;
            for (f = g.length; c < f; c++) g[c].sType = null;
            Na(a, e)
        }
    }

    function Ka(a, b, c, d) {
        var e = [],
            f = b.firstChild,
            g, j, i = 0,
            n, l = a.aoColumns,
            q = a._rowReadObject,
            d = d !== k ? d : q ? {} : [],
            r = function(a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), S(a)(d, b.getAttribute(c)))
                }
            },
            m = function(a) {
                if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (S(j.mData._)(d, n), r(j.mData.sort, a), r(j.mData.type, a), r(j.mData.filter, a)) : q ? (j._setter || (j._setter = S(j.mData)), j._setter(d, n)) : d[i] = n;
                i++
            };
        if (f)
            for (; f;) {
                g = f.nodeName.toUpperCase();
                if ("TD" == g || "TH" == g) m(f), e.push(f);
                f = f.nextSibling
            } else {
                e = b.anCells;
                f = 0;
                for (g = e.length; f < g; f++) m(e[f])
            }
        if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && S(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        }
    }

    function Ja(a, b, c, d) {
        var e = a.aoData[b],
            f = e._aData,
            g = [],
            j, i, n, l, q;
        if (null === e.nTr) {
            j = c || H.createElement("tr");
            e.nTr = j;
            e.anCells = g;
            j._DT_RowIndex = b;
            Na(a, e);
            l = 0;
            for (q = a.aoColumns.length; l < q; l++) {
                n = a.aoColumns[l];
                i = c ? d[l] : H.createElement(n.sCellType);
                i._DT_CellIndex = {
                    row: b,
                    column: l
                };
                g.push(i);
                if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
                n.sClass && (i.className += " " + n.sClass);
                n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
                n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
            }
            s(a, "aoRowCreatedCallback", null, [j, f, b])
        }
        e.nTr.setAttribute("role", "row")
    }

    function Na(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            var e = a.rowIdFn(d);
            e && (c.id = e);
            d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? sa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
            d.DT_RowData && h(c).data(d.DT_RowData)
        }
    }

    function mb(a) {
        var b, c, d, e, f, g = a.nTHead,
            j = a.nTFoot,
            i = 0 ===
            h("th, td", g).length,
            n = a.oClasses,
            l = a.aoColumns;
        i && (e = h("<tr/>").appendTo(g));
        b = 0;
        for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n);
        i && ea(a.aoHeader, g);
        h(g).find(">tr").attr("role", "row");
        h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
        h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
        if (null !== j) {
            a = a.aoFooter[0];
            b = 0;
            for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
        }
    }

    function fa(a, b, c) {
        var d, e, f, g = [],
            j = [],
            i = a.aoColumns.length,
            n;
        if (b) {
            c === k && (c = !1);
            d = 0;
            for (e = b.length; d < e; d++) {
                g[d] = b[d].slice();
                g[d].nTr = b[d].nTr;
                for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
                j.push([])
            }
            d = 0;
            for (e = g.length; d < e; d++) {
                if (a = g[d].nTr)
                    for (; f = a.firstChild;) a.removeChild(f);
                f = 0;
                for (b = g[d].length; f < b; f++)
                    if (n = i = 1, j[d][f] === k) {
                        a.appendChild(g[d][f].cell);
                        for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
                        for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
                            for (c = 0; c < i; c++) j[d + c][f + n] = 1;
                            n++
                        }
                        h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
                    }
            }
        }
    }

    function O(a) {
        var b = s(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== h.inArray(!1, b)) C(a, !1);
        else {
            var b = [],
                c = 0,
                d = a.asStripeClasses,
                e = d.length,
                f = a.oLanguage,
                g = a.iInitDisplayStart,
                j = "ssp" == y(a),
                i = a.aiDisplay;
            a.bDrawing = !0;
            g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            var g = a._iDisplayStart,
                n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
            else if (j) {
                if (!a.bDestroying && !nb(a)) return
            } else a.iDraw++;
            if (0 !== i.length) {
                f = j ? a.aoData.length : n;
                for (j = j ? 0 : g; j < f; j++) {
                    var l = i[j],
                        q = a.aoData[l];
                    null === q.nTr && Ja(a, l);
                    l = q.nTr;
                    if (0 !== e) {
                        var r = d[c % e];
                        q._sRowStripe != r && (h(l).removeClass(q._sRowStripe).addClass(r), q._sRowStripe = r)
                    }
                    s(a, "aoRowCallback", null, [l, q._aData, c, j]);
                    b.push(l);
                    c++
                }
            } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords :
                f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {
                    "class": e ? d[0] : ""
                }).append(h("<td />", {
                    valign: "top",
                    colSpan: ba(a),
                    "class": a.oClasses.sRowEmpty
                }).html(c))[0];
            s(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, i]);
            s(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, i]);
            d = h(a.nTBody);
            d.children().detach();
            d.append(h(b));
            s(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function T(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && ob(a);
        d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        O(a);
        a._drawHold = !1
    }

    function pb(a) {
        var b = a.oClasses,
            c = h(a.nTable),
            c = h("<div/>").insertBefore(c),
            d = a.oFeatures,
            e = h("<div/>", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
            });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
            g = null;
            j = f[k];
            if ("<" == j) {
                i = h("<div/>")[0];
                n = f[k + 1];
                if ("'" == n || '"' == n) {
                    l = "";
                    for (q = 2; f[k + q] != n;) l += f[k + q], q++;
                    "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
                    k += q
                }
                e.append(i);
                e = h(i)
            } else if (">" == j) e = e.parent();
            else if ("l" == j && d.bPaginate && d.bLengthChange) g = qb(a);
            else if ("f" == j && d.bFilter) g = rb(a);
            else if ("r" == j && d.bProcessing) g = sb(a);
            else if ("t" == j) g = tb(a);
            else if ("i" == j && d.bInfo) g = ub(a);
            else if ("p" ==
                j && d.bPaginate) g = vb(a);
            else if (0 !== m.ext.feature.length) {
                i = m.ext.feature;
                q = 0;
                for (n = i.length; q < n; q++)
                    if (j == i[q].cFeature) {
                        g = i[q].fnInit(a);
                        break
                    }
            }
            g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function ea(a, b) {
        var c = h(b).children("tr"),
            d, e, f, g, j, i, n, l, q, k;
        a.splice(0, a.length);
        f = 0;
        for (i = c.length; f < i; f++) a.push([]);
        f = 0;
        for (i = c.length; f < i; f++) {
            d = c[f];
            for (e = d.firstChild; e;) {
                if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                    l = 1 * e.getAttribute("colspan");
                    q = 1 * e.getAttribute("rowspan");
                    l = !l || 0 === l || 1 === l ? 1 : l;
                    q = !q || 0 === q || 1 === q ? 1 : q;
                    g = 0;
                    for (j = a[f]; j[g];) g++;
                    n = g;
                    k = 1 === l ? !0 : !1;
                    for (j = 0; j < l; j++)
                        for (g = 0; g < q; g++) a[f + g][n + j] = {
                            cell: e,
                            unique: k
                        }, a[f + g].nTr = d
                }
                e = e.nextSibling
            }
        }
    }

    function ta(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], ea(c, b)));
        for (var b = 0, e = c.length; b < e; b++)
            for (var f = 0, g = c[b].length; f < g; f++)
                if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
        return d
    }

    function ua(a, b, c) {
        s(a, "aoServerParams", "serverParams", [b]);
        if (b && h.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            h.each(b, function(a, b) {
                var c = b.name.match(e);
                c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
            });
            b = d
        }
        var f, g = a.ajax,
            j = a.oInstance,
            i = function(b) {
                s(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (h.isPlainObject(g) && g.data) {
            f = g.data;
            var n = h.isFunction(f) ? f(b, a) : f,
                b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
            delete g.data
        }
        n = {
            data: b,
            success: function(b) {
                var c = b.error || b.sError;
                c && K(a, 0, c);
                a.json = b;
                i(b)
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(b, c) {
                var d = s(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));
                C(a, !1)
            }
        };
        a.oAjaxData = b;
        s(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function(a, b) {
            return {
                name: b,
                value: a
            }
        }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, {
            url: g || a.sAjaxSource
        })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
    }

    function nb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ua(a, wb(a), function(b) {
            xb(a, b)
        }), !1) : !0
    }

    function wb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            f = a.aoPreSearchCols,
            g, j = [],
            i, n, l, k = W(a);
        g = a._iDisplayStart;
        i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var r = function(a, b) {
            j.push({
                name: a,
                value: b
            })
        };
        r("sEcho", a.iDraw);
        r("iColumns", c);
        r("sColumns", D(b, "sName").join(","));
        r("iDisplayStart", g);
        r("iDisplayLength", i);
        var ra = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: g,
            length: i,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (g = 0; g < c; g++) n = b[g],
            l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, ra.columns.push({
                data: i,
                name: n.sName,
                searchable: n.bSearchable,
                orderable: n.bSortable,
                search: {
                    value: l.sSearch,
                    regex: l.bRegex
                }
            }), r("mDataProp_" + g, i), d.bFilter && (r("sSearch_" + g, l.sSearch), r("bRegex_" + g, l.bRegex), r("bSearchable_" + g, n.bSearchable)), d.bSort && r("bSortable_" + g, n.bSortable);
        d.bFilter && (r("sSearch", e.sSearch), r("bRegex", e.bRegex));
        d.bSort && (h.each(k, function(a, b) {
            ra.order.push({
                column: b.col,
                dir: b.dir
            });
            r("iSortCol_" + a, b.col);
            r("sSortDir_" +
                a, b.dir)
        }), r("iSortingCols", k.length));
        b = m.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? j : ra : b ? j : ra
    }

    function xb(a, b) {
        var c = va(a, b),
            d = b.sEcho !== k ? b.sEcho : b.draw,
            e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
            f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
        if (d) {
            if (1 * d < a.iDraw) return;
            a.iDraw = 1 * d
        }
        pa(a);
        a._iRecordsTotal = parseInt(e, 10);
        a._iRecordsDisplay = parseInt(f, 10);
        d = 0;
        for (e = c.length; d < e; d++) N(a, c[d]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        O(a);
        a._bInitComplete ||
            wa(a, b);
        a.bAjaxDataGet = !0;
        C(a, !1)
    }

    function va(a, b) {
        var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === c ? b.aaData || b[c] : "" !== c ? R(c)(b) : b
    }

    function rb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            f = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            j = d.sSearch,
            j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
            b = h("<div/>", {
                id: !f.f ? c + "_filter" : null,
                "class": b.sFilter
            }).append(h("<label/>").append(j)),
            f = function() {
                var b = !this.value ?
                    "" : this.value;
                b != e.sSearch && (ga(a, {
                    sSearch: b,
                    bRegex: e.bRegex,
                    bSmart: e.bSmart,
                    bCaseInsensitive: e.bCaseInsensitive
                }), a._iDisplayStart = 0, O(a))
            },
            g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
            i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Qa(f, g) : f).on("keypress.DT", function(a) {
                if (13 == a.keyCode) return !1
            }).attr("aria-controls", c);
        h(a.nTable).on("search.dt.DT", function(b, c) {
            if (a === c) try {
                i[0] !== H.activeElement && i.val(e.sSearch)
            } catch (d) {}
        });
        return b[0]
    }

    function ga(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            f = function(a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            };
        Ia(a);
        if ("ssp" != y(a)) {
            yb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
            f(b);
            for (b = 0; b < e.length; b++) zb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
            Ab(a)
        } else f(b);
        a.bFiltered = !0;
        s(a, null, "search", [a])
    }

    function Ab(a) {
        for (var b =
                m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
            for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
            c.length = 0;
            h.merge(c, j)
        }
    }

    function zb(a, b, c, d, e, f) {
        if ("" !== b) {
            for (var g = [], j = a.aiDisplay, d = Ra(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
            a.aiDisplay = g
        }
    }

    function yb(a, b, c, d, e, f) {
        var d = Ra(b, d, e, f),
            f = a.oPreviousSearch.sSearch,
            g = a.aiDisplayMaster,
            j, e = [];
        0 !== m.ext.search.length && (c = !0);
        j = Bb(a);
        if (0 >= b.length) a.aiDisplay =
            g.slice();
        else {
            if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
            a.aiDisplay = e
        }
    }

    function Ra(a, b, c, d) {
        a = b ? a : Sa(a);
        c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) {
            if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                a = b ? b[1] : a;
            return a.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return RegExp(a, d ? "i" : "")
    }

    function Bb(a) {
        var b = a.aoColumns,
            c, d, e, f, g, j, i, h, l = m.ext.type.search;
        c = !1;
        d = 0;
        for (f = a.aoData.length; d < f; d++)
            if (h = a.aoData[d], !h._aFilterData) {
                j = [];
                e = 0;
                for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (xa.innerHTML = i, i = $b ? xa.textContent : xa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
                h._aFilterData = j;
                h._sFilterRow = j.join("  ");
                c = !0
            }
        return c
    }

    function Cb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }

    function Db(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }

    function ub(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = h("<div/>", {
                "class": a.oClasses.sInfo,
                id: !c ? b + "_info" : null
            });
        c || (a.aoDrawCallback.push({
            fn: Eb,
            sName: "information"
        }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }

    function Eb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart +
                1,
                e = a.fnDisplayEnd(),
                f = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                j = g ? c.sInfo : c.sInfoEmpty;
            g !== f && (j += " " + c.sInfoFiltered);
            j += c.sInfoPostFix;
            j = Fb(a, j);
            c = c.fnInfoCallback;
            null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
            h(b).html(j)
        }
    }

    function Fb(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay(),
            g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a,
            f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
    }

    function ha(a) {
        var b, c, d = a.iInitDisplayStart,
            e = a.aoColumns,
            f;
        c = a.oFeatures;
        var g = a.bDeferLoading;
        if (a.bInitialised) {
            pb(a);
            mb(a);
            fa(a, a.aoHeader);
            fa(a, a.aoFooter);
            C(a, !0);
            c.bAutoWidth && Ha(a);
            b = 0;
            for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
            s(a, null, "preInit", [a]);
            T(a);
            e = y(a);
            if ("ssp" != e || g) "ajax" == e ? ua(a, [], function(c) {
                var f = va(a, c);
                for (b = 0; b < f.length; b++) N(a, f[b]);
                a.iInitDisplayStart =
                    d;
                T(a);
                C(a, !1);
                wa(a, c)
            }, a) : (C(a, !1), wa(a))
        } else setTimeout(function() {
            ha(a)
        }, 200)
    }

    function wa(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && Z(a);
        s(a, null, "plugin-init", [a, b]);
        s(a, "aoInitComplete", "init", [a, b])
    }

    function Ta(a, b) {
        var c = parseInt(b, 10);
        a._iDisplayLength = c;
        Ua(a);
        s(a, null, "length", [a, c])
    }

    function qb(a) {
        for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
                name: c + "_length",
                "aria-controls": c,
                "class": b.sLengthSelect
            }), g = 0, j = f.length; g < j; g++) e[0][g] =
            new Option(d[g], f[g]);
        var i = h("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (i[0].id = c + "_length");
        i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        h("select", i).val(a._iDisplayLength).on("change.DT", function() {
            Ta(a, h(this).val());
            O(a)
        });
        h(a.nTable).on("length.dt.DT", function(b, c, d) {
            a === c && h("select", i).val(d)
        });
        return i[0]
    }

    function vb(a) {
        var b = a.sPaginationType,
            c = m.ext.pager[b],
            d = "function" === typeof c,
            e = function(a) {
                O(a)
            },
            b = h("<div/>").addClass(a.oClasses.sPaging +
                b)[0],
            f = a.aanFeatures;
        d || c.fnInit(a, b, e);
        f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function(a) {
                if (d) {
                    var b = a._iDisplayStart,
                        i = a._iDisplayLength,
                        h = a.fnRecordsDisplay(),
                        l = -1 === i,
                        b = l ? 0 : Math.ceil(b / i),
                        i = l ? 1 : Math.ceil(h / i),
                        h = c(b, i),
                        k, l = 0;
                    for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, i)
                } else c.fnUpdate(a, e)
            },
            sName: "pagination"
        }));
        return b
    }

    function Va(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            f = a.fnRecordsDisplay();
        0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f &&
            (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (s(a, null, "page", [a]), c && O(a));
        return b
    }

    function sb(a) {
        return h("<div/>", {
            id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function C(a, b) {
        a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
        s(a, null, "processing", [a, b])
    }

    function tb(a) {
        var b = h(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            f = a.oClasses,
            g = b.children("caption"),
            j = g.length ? g[0]._captionSide : null,
            i = h(b[0].cloneNode(!1)),
            n = h(b[0].cloneNode(!1)),
            l = b.children("tfoot");
        l.length || (l = null);
        i = h("<div/>", {
            "class": f.sScrollWrapper
        }).append(h("<div/>", {
            "class": f.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? !d ? null : v(d) : "100%"
        }).append(h("<div/>", {
            "class": f.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
            "class": f.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: !d ? null : v(d)
        }).append(b));
        l && i.append(h("<div/>", {
            "class": f.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: d ? !d ? null : v(d) : "100%"
        }).append(h("<div/>", {
            "class": f.sScrollFootInner
        }).append(n.removeAttr("id").css("margin-left",
            0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
        var b = i.children(),
            k = b[0],
            f = b[1],
            r = l ? b[2] : null;
        if (d) h(f).on("scroll.DT", function() {
            var a = this.scrollLeft;
            k.scrollLeft = a;
            l && (r.scrollLeft = a)
        });
        h(f).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = k;
        a.nScrollBody = f;
        a.nScrollFoot = r;
        a.aoDrawCallback.push({
            fn: ma,
            sName: "scrolling"
        });
        return i[0]
    }

    function ma(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY,
            b = b.iBarWidth,
            f = h(a.nScrollHead),
            g = f[0].style,
            j = f.children("div"),
            i = j[0].style,
            n = j.children("table"),
            j = a.nScrollBody,
            l = h(j),
            q = j.style,
            r = h(a.nScrollFoot).children("div"),
            m = r.children("table"),
            p = h(a.nTHead),
            o = h(a.nTable),
            t = o[0],
            s = t.style,
            u = a.nTFoot ? h(a.nTFoot) : null,
            x = a.oBrowser,
            U = x.bScrollOversize,
            ac = D(a.aoColumns, "nTh"),
            P, L, Q, w, Wa = [],
            y = [],
            z = [],
            A = [],
            B, C = function(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        L = j.scrollHeight > j.clientHeight;
        if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, Z(a);
        else {
            a.scrollBarVis = L;
            o.children("thead, tfoot").remove();
            u && (Q = u.clone().prependTo(o), P = u.find("tr"), Q = Q.find("tr"));
            w = p.clone().prependTo(o);
            p = p.find("tr");
            L = w.find("tr");
            w.find("th, td").removeAttr("tabindex");
            c || (q.width = "100%", f[0].style.width = "100%");
            h.each(ta(a, w), function(b, c) {
                B = $(a, b);
                c.style.width = a.aoColumns[B].sWidth
            });
            u && I(function(a) {
                a.style.width = ""
            }, Q);
            f = o.outerWidth();
            if ("" === c) {
                s.width = "100%";
                if (U && (o.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(o.outerWidth() - b);
                f = o.outerWidth()
            } else "" !== d && (s.width =
                v(d), f = o.outerWidth());
            I(C, L);
            I(function(a) {
                z.push(a.innerHTML);
                Wa.push(v(h(a).css("width")))
            }, L);
            I(function(a, b) {
                if (h.inArray(a, ac) !== -1) a.style.width = Wa[b]
            }, p);
            h(L).height(0);
            u && (I(C, Q), I(function(a) {
                A.push(a.innerHTML);
                y.push(v(h(a).css("width")))
            }, Q), I(function(a, b) {
                a.style.width = y[b]
            }, P), h(Q).height(0));
            I(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";
                a.style.width = Wa[b]
            }, L);
            u && I(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
                    A[b] + "</div>";
                a.style.width = y[b]
            }, Q);
            if (o.outerWidth() < f) {
                P = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(P - b);
                ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6)
            } else P = "100%";
            q.width = v(P);
            g.width = v(P);
            u && (a.nScrollFoot.style.width = v(P));
            !e && U && (q.height = v(t.offsetHeight + b));
            c = o.outerWidth();
            n[0].style.width = v(c);
            i.width = v(c);
            d = o.height() > j.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" +
                (x.bScrollbarLeft ? "Left" : "Right");
            i[e] = d ? b + "px" : "0px";
            u && (m[0].style.width = v(c), r[0].style.width = v(c), r[0].style[e] = d ? b + "px" : "0px");
            o.children("colgroup").insertBefore(o.children("thead"));
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
        }
    }

    function I(a, b, c) {
        for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
            g = b[e].firstChild;
            for (j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
            e++
        }
    }

    function Ha(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            f = d.sX,
            g = d.sXInner,
            j = c.length,
            i = na(a, "bVisible"),
            n = h("th", a.nTHead),
            l = b.getAttribute("width"),
            k = b.parentNode,
            r = !1,
            m, p, o = a.oBrowser,
            d = o.bScrollOversize;
        (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
        for (m = 0; m < i.length; m++) p = c[i[m]], null !== p.sWidth && (p.sWidth = Gb(p.sWidthOrig, k), r = !0);
        if (d || !r && !f && !e && j == ba(a) && j == n.length)
            for (m = 0; m < j; m++) i = $(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width()));
        else {
            j = h(b).clone().css("visibility", "hidden").removeAttr("id");
            j.find("tbody tr").remove();
            var t = h("<tr/>").appendTo(j.find("tbody"));
            j.find("thead, tfoot").remove();
            j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
            j.find("tfoot th, tfoot td").css("width", "");
            n = ta(a, j.find("thead")[0]);
            for (m = 0; m < i.length; m++) p = c[i[m]], n[m].style.width = null !== p.sWidthOrig && "" !== p.sWidthOrig ? v(p.sWidthOrig) : "", p.sWidthOrig && f && h(n[m]).append(h("<div/>").css({
                width: p.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)
                for (m = 0; m < i.length; m++) r = i[m], p = c[r], h(Hb(a, r)).clone(!1).append(p.sContentPadding).appendTo(t);
            h("[name]",
                j).removeAttr("name");
            p = h("<div/>").css(f || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(j).appendTo(k);
            f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
            for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), k = o.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g);
            b.style.width = v(e);
            p.remove()
        }
        l && (b.style.width =
            v(l));
        if ((l || f) && !a._reszEvt) b = function() {
            h(E).on("resize.DT-" + a.sInstance, Qa(function() {
                Z(a)
            }))
        }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
    }

    function Gb(a, b) {
        if (!a) return 0;
        var c = h("<div/>").css("width", v(a)).appendTo(b || H.body),
            d = c[0].offsetWidth;
        c.remove();
        return d
    }

    function Hb(a, b) {
        var c = Ib(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b]
    }

    function Ib(a, b) {
        for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace(bc,
            ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
        return e
    }

    function v(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function W(a) {
        var b, c, d = [],
            e = a.aoColumns,
            f, g, j, i;
        b = a.aaSortingFixed;
        c = h.isPlainObject(b);
        var n = [];
        f = function(a) {
            a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a)
        };
        h.isArray(b) && f(b);
        c && b.pre && f(b.pre);
        f(a.aaSorting);
        c && b.post && f(b.post);
        for (a = 0; a < n.length; a++) {
            i = n[a][0];
            f = e[i].aDataSort;
            b = 0;
            for (c = f.length; b < c; b++) g = f[b], j = e[g].sType ||
                "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({
                    src: i,
                    col: g,
                    dir: n[a][1],
                    index: n[a]._idx,
                    type: j,
                    formatter: m.ext.type.order[j + "-pre"]
                })
        }
        return d
    }

    function ob(a) {
        var b, c, d = [],
            e = m.ext.type.order,
            f = a.aoData,
            g = 0,
            j, i = a.aiDisplayMaster,
            h;
        Ia(a);
        h = W(a);
        b = 0;
        for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Jb(a, j.col);
        if ("ssp" != y(a) && 0 !== h.length) {
            b = 0;
            for (c = i.length; b < c; b++) d[i[b]] = b;
            g === h.length ? i.sort(function(a, b) {
                var c, e, g, j, i = h.length,
                    k = f[a]._aSortData,
                    m = f[b]._aSortData;
                for (g =
                    0; g < i; g++)
                    if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
                c = d[a];
                e = d[b];
                return c < e ? -1 : c > e ? 1 : 0
            }) : i.sort(function(a, b) {
                var c, g, j, i, k = h.length,
                    m = f[a]._aSortData,
                    p = f[b]._aSortData;
                for (j = 0; j < k; j++)
                    if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
                c = d[a];
                g = d[b];
                return c < g ? -1 : c > g ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function Kb(a) {
        for (var b, c, d = a.aoColumns, e = W(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
            c = d[f];
            var j = c.asSorting;
            b = c.sTitle.replace(/<.*?>/g,
                "");
            var i = c.nTh;
            i.removeAttribute("aria-sort");
            c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
            i.setAttribute("aria-label", b)
        }
    }

    function Xa(a, b, c, d) {
        var e = a.aaSorting,
            f = a.aoColumns[b].asSorting,
            g = function(a, b) {
                var c = a._idx;
                c === k && (c = h.inArray(a[1], f));
                return c + 1 < f.length ? c + 1 : b ? null : 0
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = h.inArray(b,
            D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
        T(a);
        "function" == typeof d && d(a)
    }

    function Oa(a, b, c, d) {
        var e = a.aoColumns[c];
        Ya(b, {}, function(b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function() {
                Xa(a, c, b.shiftKey, d);
                "ssp" !== y(a) && C(a, !1)
            }, 0)) : Xa(a, c, b.shiftKey, d))
        })
    }

    function ya(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = W(a),
            e = a.oFeatures,
            f, g;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
            e = 0;
            for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }

    function Jb(a, b) {
        var c = a.aoColumns[b],
            d = m.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, aa(a, b)));
        for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
            if (c = a.aoData[j],
                c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
    }

    function za(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: h.extend(!0, [], a.aaSorting),
                search: Cb(a.oPreviousSearch),
                columns: h.map(a.aoColumns, function(b, d) {
                    return {
                        visible: b.bVisible,
                        search: Cb(a.aoPreSearchCols[d])
                    }
                })
            };
            s(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a,
                b)
        }
    }

    function Lb(a, b, c) {
        var d, e, f = a.aoColumns,
            b = function(b) {
                if (b && b.time) {
                    var g = s(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
                    if (-1 === h.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g) && !(b.columns && f.length !== b.columns.length))) {
                        a.oLoadedState = h.extend(!0, {}, b);
                        b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
                        b.length !== k && (a._iDisplayLength = b.length);
                        b.order !== k && (a.aaSorting = [], h.each(b.order, function(b, c) {
                            a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c)
                        }));
                        b.search !==
                            k && h.extend(a.oPreviousSearch, Db(b.search));
                        if (b.columns) {
                            d = 0;
                            for (e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== k && (f[d].bVisible = g.visible), g.search !== k && h.extend(a.aoPreSearchCols[d], Db(g.search))
                        }
                        s(a, "aoStateLoaded", "stateLoaded", [a, b])
                    }
                }
                c()
            };
        if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
            g !== k && b(g)
        } else c()
    }

    function Aa(a) {
        var b = m.settings,
            a = h.inArray(a, D(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function K(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId +
            " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
        if (b) E.console && console.log && console.log(c);
        else if (b = m.ext, b = b.sErrMode || b.errMode, a && s(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }

    function F(a, b, c, d) {
        h.isArray(c) ? h.each(c, function(c, d) {
            h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d)
        }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
    }

    function Mb(a, b, c) {
        var d, e;
        for (e in b) b.hasOwnProperty(e) && (d = b[e],
            h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
        return a
    }

    function Ya(a, b, c) {
        h(a).on("click.DT", b, function(b) {
            a.blur();
            c(b)
        }).on("keypress.DT", b, function(a) {
            13 === a.which && (a.preventDefault(), c(a))
        }).on("selectstart.DT", function() {
            return !1
        })
    }

    function z(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        })
    }

    function s(a, b, c, d) {
        var e = [];
        b && (e = h.map(a[b].slice().reverse(), function(b) {
            return b.fn.apply(a.oInstance, d)
        }));
        null !== c && (b = h.Event(c +
            ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Ua(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b
    }

    function Pa(a, b) {
        var c = a.renderer,
            d = m.ext.renderer[b];
        return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
    }

    function y(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function ia(a, b) {
        var c = [],
            c = Nb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? c = X(0, b) : a <= d ? (c = X(0,
            c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = X(b - (c - 2), b) : (c = X(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
        c.DT_el = "span";
        return c
    }

    function fb(a) {
        h.each({
            num: function(b) {
                return Ba(b, a)
            },
            "num-fmt": function(b) {
                return Ba(b, a, Za)
            },
            "html-num": function(b) {
                return Ba(b, a, Ca)
            },
            "html-num-fmt": function(b) {
                return Ba(b, a, Ca, Za)
            }
        }, function(b, c) {
            x.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html)
        })
    }

    function Ob(a) {
        return function() {
            var b = [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return m.ext.internal[a].apply(this, b)
        }
    }
    var m = function(a) {
            this.$ = function(a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function(a, b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function(a) {
                return a ? new t(Aa(this[x.iApiIndex])) : new t(this)
            };
            this.fnAddData = function(a, b) {
                var c = this.api(!0),
                    d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === k || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing =
                function(a) {
                    var b = this.api(!0).columns.adjust(),
                        c = b.settings()[0],
                        d = c.oScroll;
                    a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c)
                };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === k || a) && b.draw()
            };
            this.fnClose = function(a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function(a, b, c) {
                var d = this.api(!0),
                    a = d.rows(a),
                    e = a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === k || c) && d.draw();
                return h
            };
            this.fnDestroy = function(a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function(a) {
                this.api(!0).draw(a)
            };
            this.fnFilter = function(a, b, c, d, e, h) {
                e = this.api(!0);
                null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
                e.draw()
            };
            this.fnGetData = function(a, b) {
                var c = this.api(!0);
                if (a !== k) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function(a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function(a, b) {
                var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1)
            };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === k || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() {
                return Aa(this[x.iApiIndex])
            };
            this.fnSort = function(a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener = function(a, b, c) {
                this.api(!0).order.listener(a, b, c)
            };
            this.fnUpdate = function(a, b, c, d, e) {
                var h = this.api(!0);
                c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === k || e) && h.columns.adjust();
                (d === k || d) && h.draw();
                return 0
            };
            this.fnVersionCheck = x.fnVersionCheck;
            var b = this,
                c = a === k,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = x.internal;
            for (var e in m.ext.internal) e && (this[e] = Ob(e));
            this.each(function() {
                var e = {},
                    g = 1 < d ? Mb(e, a, !0) :
                    a,
                    j = 0,
                    i, e = this.getAttribute("id"),
                    n = !1,
                    l = m.defaults,
                    q = h(this);
                if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    gb(l);
                    hb(l.column);
                    J(l, l, !0);
                    J(l.column, l.column, !0);
                    J(l, h.extend(g, q.data()));
                    var r = m.settings,
                        j = 0;
                    for (i = r.length; j < i; j++) {
                        var p = r[j];
                        if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
                            var t = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
                            if (c || t) return p.oInstance;
                            if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                                p.oInstance.fnDestroy();
                                break
                            } else {
                                K(p, 0, "Cannot reinitialise DataTable", 3);
                                return
                            }
                        }
                        if (p.sTableId == this.id) {
                            r.splice(j, 1);
                            break
                        }
                    }
                    if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;
                    var o = h.extend(!0, {}, m.models.oSettings, {
                        sDestroyWidth: q[0].style.width,
                        sInstance: e,
                        sTableId: e
                    });
                    o.nTable = this;
                    o.oApi = b.internal;
                    o.oInit = g;
                    r.push(o);
                    o.oInstance = 1 === b.length ? b : q.dataTable();
                    gb(g);
                    g.oLanguage && Fa(g.oLanguage);
                    g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                    g = Mb(h.extend(!0, {}, l), g);
                    F(o.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    F(o, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]);
                    F(o.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    F(o.oLanguage, g, "fnInfoCallback");
                    z(o, "aoDrawCallback", g.fnDrawCallback, "user");
                    z(o, "aoServerParams", g.fnServerParams, "user");
                    z(o, "aoStateSaveParams", g.fnStateSaveParams, "user");
                    z(o, "aoStateLoadParams", g.fnStateLoadParams, "user");
                    z(o, "aoStateLoaded", g.fnStateLoaded,
                        "user");
                    z(o, "aoRowCallback", g.fnRowCallback, "user");
                    z(o, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                    z(o, "aoHeaderCallback", g.fnHeaderCallback, "user");
                    z(o, "aoFooterCallback", g.fnFooterCallback, "user");
                    z(o, "aoInitComplete", g.fnInitComplete, "user");
                    z(o, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                    o.rowIdFn = R(g.rowId);
                    ib(o);
                    var u = o.oClasses;
                    g.bJQueryUI ? (h.extend(u, m.ext.oJUIClasses, g.oClasses), g.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) &&
                        !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(u, m.ext.classes, g.oClasses);
                    q.addClass(u.sTable);
                    o.iInitDisplayStart === k && (o.iInitDisplayStart = g.iDisplayStart, o._iDisplayStart = g.iDisplayStart);
                    null !== g.iDeferLoading && (o.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), o._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, o._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
                    var v = o.oLanguage;
                    h.extend(!0, v, g.oLanguage);
                    v.sUrl && (h.ajax({
                        dataType: "json",
                        url: v.sUrl,
                        success: function(a) {
                            Fa(a);
                            J(l.oLanguage, a);
                            h.extend(true, v, a);
                            ha(o)
                        },
                        error: function() {
                            ha(o)
                        }
                    }), n = !0);
                    null === g.asStripeClasses && (o.asStripeClasses = [u.sStripeOdd, u.sStripeEven]);
                    var e = o.asStripeClasses,
                        x = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(e, function(a) {
                        return x.hasClass(a)
                    })) && (h("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice());
                    e = [];
                    r = this.getElementsByTagName("thead");
                    0 !== r.length && (ea(o.aoHeader, r[0]), e = ta(o));
                    if (null === g.aoColumns) {
                        r = [];
                        j = 0;
                        for (i = e.length; j < i; j++) r.push(null)
                    } else r =
                        g.aoColumns;
                    j = 0;
                    for (i = r.length; j < i; j++) Ga(o, e ? e[j] : null);
                    kb(o, g.aoColumnDefs, r, function(a, b) {
                        la(o, a, b)
                    });
                    if (x.length) {
                        var w = function(a, b) {
                            return a.getAttribute("data-" + b) !== null ? b : null
                        };
                        h(x[0]).children("th, td").each(function(a, b) {
                            var c = o.aoColumns[a];
                            if (c.mData === a) {
                                var d = w(b, "sort") || w(b, "order"),
                                    e = w(b, "filter") || w(b, "search");
                                if (d !== null || e !== null) {
                                    c.mData = {
                                        _: a + ".display",
                                        sort: d !== null ? a + ".@data-" + d : k,
                                        type: d !== null ? a + ".@data-" + d : k,
                                        filter: e !== null ? a + ".@data-" + e : k
                                    };
                                    la(o, a)
                                }
                            }
                        })
                    }
                    var U = o.oFeatures,
                        e = function() {
                            if (g.aaSorting === k) {
                                var a = o.aaSorting;
                                j = 0;
                                for (i = a.length; j < i; j++) a[j][1] = o.aoColumns[j].asSorting[0]
                            }
                            ya(o);
                            U.bSort && z(o, "aoDrawCallback", function() {
                                if (o.bSorted) {
                                    var a = W(o),
                                        b = {};
                                    h.each(a, function(a, c) {
                                        b[c.src] = c.dir
                                    });
                                    s(o, null, "order", [o, a, b]);
                                    Kb(o)
                                }
                            });
                            z(o, "aoDrawCallback", function() {
                                (o.bSorted || y(o) === "ssp" || U.bDeferRender) && ya(o)
                            }, "sc");
                            var a = q.children("caption").each(function() {
                                    this._captionSide = h(this).css("caption-side")
                                }),
                                b = q.children("thead");
                            b.length === 0 && (b = h("<thead/>").appendTo(q));
                            o.nTHead = b[0];
                            b = q.children("tbody");
                            b.length === 0 && (b = h("<tbody/>").appendTo(q));
                            o.nTBody = b[0];
                            b = q.children("tfoot");
                            if (b.length === 0 && a.length > 0 && (o.oScroll.sX !== "" || o.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
                            if (b.length === 0 || b.children().length === 0) q.addClass(u.sNoFooter);
                            else if (b.length > 0) {
                                o.nTFoot = b[0];
                                ea(o.aoFooter, o.nTFoot)
                            }
                            if (g.aaData)
                                for (j = 0; j < g.aaData.length; j++) N(o, g.aaData[j]);
                            else(o.bDeferLoading || y(o) == "dom") && oa(o, h(o.nTBody).children("tr"));
                            o.aiDisplay = o.aiDisplayMaster.slice();
                            o.bInitialised = true;
                            n === false && ha(o)
                        };
                    g.bStateSave ? (U.bStateSave = !0, z(o, "aoDrawCallback", za, "state_save"), Lb(o, g, e)) : e()
                }
            });
            b = null;
            return this
        },
        x, t, p, u, $a = {},
        Pb = /[\r\n]/g,
        Ca = /<.*?>/g,
        cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        dc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Za = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
        M = function(a) {
            return !a || !0 === a || "-" === a ? !0 : !1
        },
        Qb = function(a) {
            var b = parseInt(a, 10);
            return !isNaN(b) &&
                isFinite(a) ? b : null
        },
        Rb = function(a, b) {
            $a[b] || ($a[b] = RegExp(Sa(b), "g"));
            return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace($a[b], ".") : a
        },
        ab = function(a, b, c) {
            var d = "string" === typeof a;
            if (M(a)) return !0;
            b && d && (a = Rb(a, b));
            c && d && (a = a.replace(Za, ""));
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        Sb = function(a, b, c) {
            return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : ab(a.replace(Ca, ""), b, c) ? !0 : null
        },
        D = function(a, b, c) {
            var d = [],
                e = 0,
                f = a.length;
            if (c !== k)
                for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e <
                    f; e++) a[e] && d.push(a[e][b]);
            return d
        },
        ja = function(a, b, c, d) {
            var e = [],
                f = 0,
                g = b.length;
            if (d !== k)
                for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
            else
                for (; f < g; f++) e.push(a[b[f]][c]);
            return e
        },
        X = function(a, b) {
            var c = [],
                d;
            b === k ? (b = 0, d = a) : (d = b, b = a);
            for (var e = b; e < d; e++) c.push(e);
            return c
        },
        Tb = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b
        },
        sa = function(a) {
            var b;
            a: {
                if (!(2 > a.length)) {
                    b = a.slice().sort();
                    for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                        if (b[d] === c) {
                            b = !1;
                            break a
                        }
                        c = b[d]
                    }
                }
                b = !0
            }
            if (b) return a.slice();
            b = [];
            var e = a.length,
                f, g = 0,
                d = 0;
            a: for (; d < e; d++) {
                c = a[d];
                for (f = 0; f < g; f++)
                    if (b[f] === c) continue a;
                b.push(c);
                g++
            }
            return b
        };
    m.util = {
        throttle: function(a, b) {
            var c = b !== k ? b : 200,
                d, e;
            return function() {
                var b = this,
                    g = +new Date,
                    h = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
                    d = k;
                    a.apply(b, h)
                }, c)) : (d = g, a.apply(b, h))
            }
        },
        escapeRegex: function(a) {
            return a.replace(dc, "\\$1")
        }
    };
    var A = function(a, b, c) {
            a[b] !== k && (a[c] = a[b])
        },
        ca = /\[.*?\]$/,
        V = /\(\)$/,
        Sa = m.util.escapeRegex,
        xa = h("<div>")[0],
        $b = xa.textContent !== k,
        bc =
        /<.*?>/g,
        Qa = m.util.throttle,
        Ub = [],
        w = Array.prototype,
        ec = function(a) {
            var b, c, d = m.settings,
                e = h.map(d, function(a) {
                    return a.nTable
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
            } else return [];
            if (c) return c.map(function() {
                b = h.inArray(this, e);
                return -1 !== b ? d[b] : null
            }).toArray()
        };
    t = function(a, b) {
        if (!(this instanceof t)) return new t(a, b);
        var c = [],
            d = function(a) {
                (a = ec(a)) && (c = c.concat(a))
            };
        if (h.isArray(a))
            for (var e = 0, f = a.length; e < f; e++) d(a[e]);
        else d(a);
        this.context = sa(c);
        b && h.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        t.extend(this, this, Ub)
    };
    m.Api = t;
    h.extend(t.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: w.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(a) {
            for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
            return this
        },
        eq: function(a) {
            var b =
                this.context;
            return b.length > a ? new t(b[a], this[a]) : null
        },
        filter: function(a) {
            var b = [];
            if (w.filter) b = w.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new t(this.context, b)
        },
        flatten: function() {
            var a = [];
            return new t(this.context, a.concat.apply(a, this.toArray()))
        },
        join: w.join,
        indexOf: w.indexOf || function(a, b) {
            for (var c = b || 0, d = this.length; c < d; c++)
                if (this[c] === a) return c;
            return -1
        },
        iterator: function(a, b, c, d) {
            var e = [],
                f, g, h, i, n, l = this.context,
                m, p, u = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            g = 0;
            for (h = l.length; g < h; g++) {
                var s = new t(l[g]);
                if ("table" === b) f = c.call(s, l[g], g), f !== k && e.push(f);
                else if ("columns" === b || "rows" === b) f = c.call(s, l[g], this[g], g), f !== k && e.push(f);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    p = this[g];
                    "column-rows" === b && (m = Da(l[g], u.opts));
                    i = 0;
                    for (n = p.length; i < n; i++) f = p[i], f = "cell" === b ? c.call(s, l[g], f.row, f.column, g, i) : c.call(s, l[g], f, g, i, m), f !== k && e.push(f)
                }
            }
            return e.length || d ? (a = new t(l, a ?
                e.concat.apply([], e) : e), b = a.selector, b.rows = u.rows, b.cols = u.cols, b.opts = u.opts, a) : this
        },
        lastIndexOf: w.lastIndexOf || function(a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function(a) {
            var b = [];
            if (w.map) b = w.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new t(this.context, b)
        },
        pluck: function(a) {
            return this.map(function(b) {
                return b[a]
            })
        },
        pop: w.pop,
        push: w.push,
        reduce: w.reduce || function(a, b) {
            return jb(this, a, b, 0, this.length,
                1)
        },
        reduceRight: w.reduceRight || function(a, b) {
            return jb(this, a, b, this.length - 1, -1, -1)
        },
        reverse: w.reverse,
        selector: null,
        shift: w.shift,
        slice: function() {
            return new t(this.context, this)
        },
        sort: w.sort,
        splice: w.splice,
        toArray: function() {
            return w.slice.call(this)
        },
        to$: function() {
            return h(this)
        },
        toJQuery: function() {
            return h(this)
        },
        unique: function() {
            return new t(this.context, sa(this))
        },
        unshift: w.unshift
    });
    t.extend = function(a, b, c) {
        if (c.length && b && (b instanceof t || b.__dt_wrapper)) {
            var d, e, f, g = function(a, b, c) {
                return function() {
                    var d =
                        b.apply(a, arguments);
                    t.extend(d, d, c.methodExt);
                    return d
                }
            };
            d = 0;
            for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt)
        }
    };
    t.register = p = function(a, b) {
        if (h.isArray(a))
            for (var c = 0, d = a.length; c < d; c++) t.register(a[c], b);
        else
            for (var e = a.split("."), f = Ub, g, j, c = 0, d = e.length; c < d; c++) {
                g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
                var i;
                a: {
                    i = 0;
                    for (var n = f.length; i < n; i++)
                        if (f[i].name === g) {
                            i =
                                f[i];
                            break a
                        }
                    i = null
                }
                i || (i = {
                    name: g,
                    val: {},
                    methodExt: [],
                    propExt: []
                }, f.push(i));
                c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
            }
    };
    t.registerPlural = u = function(a, b, c) {
        t.register(a, c);
        t.register(b, function() {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof t ? a.length ? h.isArray(a[0]) ? new t(a.context, a[0]) : a[0] : k : a
        })
    };
    p("tables()", function(a) {
        var b;
        if (a) {
            b = t;
            var c = this.context;
            if ("number" === typeof a) a = [c[a]];
            else var d = h.map(c, function(a) {
                    return a.nTable
                }),
                a = h(d).filter(a).map(function() {
                    var a = h.inArray(this,
                        d);
                    return c[a]
                }).toArray();
            b = new b(a)
        } else b = this;
        return b
    });
    p("table()", function(a) {
        var a = this.tables(a),
            b = a.context;
        return b.length ? new t(b[0]) : a
    });
    u("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(a) {
            return a.nTable
        }, 1)
    });
    u("tables().body()", "table().body()", function() {
        return this.iterator("table", function(a) {
            return a.nTBody
        }, 1)
    });
    u("tables().header()", "table().header()", function() {
        return this.iterator("table", function(a) {
            return a.nTHead
        }, 1)
    });
    u("tables().footer()",
        "table().footer()",
        function() {
            return this.iterator("table", function(a) {
                return a.nTFoot
            }, 1)
        });
    u("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(a) {
            return a.nTableWrapper
        }, 1)
    });
    p("draw()", function(a) {
        return this.iterator("table", function(b) {
            "page" === a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a))
        })
    });
    p("page()", function(a) {
        return a === k ? this.page.info().page : this.iterator("table", function(b) {
            Va(b, a)
        })
    });
    p("page.info()", function() {
        if (0 ===
            this.context.length) return k;
        var a = this.context[0],
            b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === y(a)
        }
    });
    p("page.len()", function(a) {
        return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function(b) {
            Ta(b, a)
        })
    });
    var Vb = function(a, b, c) {
        if (c) {
            var d = new t(a);
            d.one("draw", function() {
                c(d.ajax.json())
            })
        }
        if ("ssp" == y(a)) T(a, b);
        else {
            C(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            ua(a, [], function(c) {
                pa(a);
                for (var c = va(a, c), d = 0, e = c.length; d < e; d++) N(a, c[d]);
                T(a, b);
                C(a, !1)
            })
        }
    };
    p("ajax.json()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].json
    });
    p("ajax.params()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData
    });
    p("ajax.reload()", function(a, b) {
        return this.iterator("table", function(c) {
            Vb(c, !1 === b, a)
        })
    });
    p("ajax.url()", function(a) {
        var b =
            this.context;
        if (a === k) {
            if (0 === b.length) return k;
            b = b[0];
            return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function(b) {
            h.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    });
    p("ajax.url().load()", function(a, b) {
        return this.iterator("table", function(c) {
            Vb(c, !1 === b, a)
        })
    });
    var bb = function(a, b, c, d, e) {
            var f = [],
                g, j, i, n, l, m;
            i = typeof b;
            if (!b || "string" === i || "function" === i || b.length === k) b = [b];
            i = 0;
            for (n = b.length; i < n; i++) {
                j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];
                l = 0;
                for (m = j.length; l < m; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
            }
            a = x.selector[a];
            if (a.length) {
                i = 0;
                for (n = a.length; i < n; i++) f = a[i](d, e, f)
            }
            return sa(f)
        },
        cb = function(a) {
            a || (a = {});
            a.filter && a.search === k && (a.search = a.filter);
            return h.extend({
                search: "none",
                order: "current",
                page: "all"
            }, a)
        },
        db = function(a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            return a
        },
        Da = function(a, b) {
            var c,
                d, e, f = [],
                g = a.aiDisplay;
            c = a.aiDisplayMaster;
            var j = b.search;
            d = b.order;
            e = b.page;
            if ("ssp" == y(a)) return "removed" === j ? [] : X(0, c.length);
            if ("current" == e) {
                c = a._iDisplayStart;
                for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c])
            } else if ("current" == d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function(a) {
                return -1 === h.inArray(a, g) ? a : null
            });
            else if ("index" == d || "original" == d) {
                c = 0;
                for (d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
            }
            return f
        };
    p("rows()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = cb(b),
            c = this.iterator("table", function(c) {
                var e = b,
                    f;
                return bb("row", a, function(a) {
                    var b = Qb(a);
                    if (b !== null && !e) return [b];
                    f || (f = Da(c, e));
                    if (b !== null && h.inArray(b, f) !== -1) return [b];
                    if (a === null || a === k || a === "") return f;
                    if (typeof a === "function") return h.map(f, function(b) {
                        var e = c.aoData[b];
                        return a(b, e._aData, e.nTr) ? b : null
                    });
                    b = Tb(ja(c.aoData, f, "nTr"));
                    if (a.nodeName) {
                        if (a._DT_RowIndex !== k) return [a._DT_RowIndex];
                        if (a._DT_CellIndex) return [a._DT_CellIndex.row];
                        b = h(a).closest("*[data-dt-row]");
                        return b.length ? [b.data("dt-row")] : []
                    }
                    if (typeof a === "string" && a.charAt(0) === "#") {
                        var i = c.aIds[a.replace(/^#/, "")];
                        if (i !== k) return [i.idx]
                    }
                    return h(b).filter(a).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                }, c, e)
            }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    p("rows().nodes()", function() {
        return this.iterator("row", function(a, b) {
            return a.aoData[b].nTr || k
        }, 1)
    });
    p("rows().data()", function() {
        return this.iterator(!0, "rows", function(a, b) {
                return ja(a.aoData, b, "_aData")
            },
            1)
    });
    u("rows().cache()", "row().cache()", function(a) {
        return this.iterator("row", function(b, c) {
            var d = b.aoData[c];
            return "search" === a ? d._aFilterData : d._aSortData
        }, 1)
    });
    u("rows().invalidate()", "row().invalidate()", function(a) {
        return this.iterator("row", function(b, c) {
            da(b, c, a)
        })
    });
    u("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(a, b) {
            return b
        }, 1)
    });
    u("rows().ids()", "row().id()", function(a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var f = 0, g = this[d].length; f <
                g; f++) {
                var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                b.push((!0 === a ? "#" : "") + h)
            }
        return new t(c, b)
    });
    u("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData,
                f = e[c],
                g, h, i, n, l;
            e.splice(c, 1);
            g = 0;
            for (h = e.length; g < h; g++)
                if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
                    i = 0;
                    for (n = l.length; i < n; i++) l[i]._DT_CellIndex.row = g
                }
            qa(b.aiDisplayMaster, c);
            qa(b.aiDisplay, c);
            qa(a[d], c, !1);
            Ua(b);
            c = b.rowIdFn(f._aData);
            c !== k && delete b.aIds[c]
        });
        this.iterator("table", function(a) {
            for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
        });
        return this
    });
    p("rows.add()", function(a) {
        var b = this.iterator("table", function(b) {
                var c, f, g, h = [];
                f = 0;
                for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? h.push(oa(b, c)[0]) : h.push(N(b, c));
                return h
            }, 1),
            c = this.rows(-1);
        c.pop();
        h.merge(c, b);
        return c
    });
    p("row()", function(a, b) {
        return db(this.rows(a, b))
    });
    p("row().data()", function(a) {
        var b = this.context;
        if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData :
            k;
        b[0].aoData[this[0]]._aData = a;
        da(b[0], this[0], "data");
        return this
    });
    p("row().node()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    p("row.add()", function(a) {
        a instanceof h && a.length && (a = a[0]);
        var b = this.iterator("table", function(b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? oa(b, a)[0] : N(b, a)
        });
        return this.row(b[0])
    });
    var eb = function(a, b) {
            var c = a.context;
            if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow =
                k, c._details = k
        },
        Wb = function(a, b) {
            var c = a.context;
            if (c.length && a.length) {
                var d = c[0].aoData[a[0]];
                if (d._details) {
                    (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
                    var e = c[0],
                        f = new t(e),
                        g = e.aoData;
                    f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                    0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function(a, b) {
                        e === b && f.rows({
                            page: "current"
                        }).eq(0).each(function(a) {
                            a = g[a];
                            a._detailsShow && a._details.insertAfter(a.nTr)
                        })
                    }), f.on("column-visibility.dt.DT_details",
                        function(a, b) {
                            if (e === b)
                                for (var c, d = ba(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                        }), f.on("destroy.dt.DT_details", function(a, b) {
                        if (e === b)
                            for (var c = 0, d = g.length; c < d; c++) g[c]._details && eb(f, c)
                    }))
                }
            }
        };
    p("row().child()", function(a, b) {
        var c = this.context;
        if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
        if (!0 === a) this.child.show();
        else if (!1 === a) eb(this);
        else if (c.length && this.length) {
            var d = c[0],
                c = c[0].aoData[this[0]],
                e = [],
                f = function(a,
                    b) {
                    if (h.isArray(a) || a instanceof h)
                        for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                    else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0]))
                };
            f(a, b);
            c._details && c._details.detach();
            c._details = h(e);
            c._detailsShow && c._details.insertAfter(c.nTr)
        }
        return this
    });
    p(["row().child.show()", "row().child().show()"], function() {
        Wb(this, !0);
        return this
    });
    p(["row().child.hide()", "row().child().hide()"], function() {
        Wb(this, !1);
        return this
    });
    p(["row().child.remove()", "row().child().remove()"], function() {
        eb(this);
        return this
    });
    p("row().child.isShown()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var fc = /^([^:]+):(name|visIdx|visible)$/,
        Xb = function(a, b, c, d, e) {
            for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
            return c
        };
    p("columns()", function(a, b) {
        a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
        var b = cb(b),
            c = this.iterator("table", function(c) {
                var e = a,
                    f = b,
                    g = c.aoColumns,
                    j = D(g, "sName"),
                    i = D(g, "nTh");
                return bb("column", e, function(a) {
                    var b = Qb(a);
                    if (a === "") return X(g.length);
                    if (b !== null) return [b >= 0 ? b : g.length + b];
                    if (typeof a === "function") {
                        var e = Da(c, f);
                        return h.map(g, function(b, f) {
                            return a(f, Xb(c, f, 0, 0, e), i[f]) ? f : null
                        })
                    }
                    var k = typeof a === "string" ? a.match(fc) : "";
                    if (k) switch (k[2]) {
                        case "visIdx":
                        case "visible":
                            b = parseInt(k[1], 10);
                            if (b < 0) {
                                var m = h.map(g, function(a, b) {
                                    return a.bVisible ? b : null
                                });
                                return [m[m.length + b]]
                            }
                            return [$(c, b)];
                        case "name":
                            return h.map(j, function(a, b) {
                                return a ===
                                    k[1] ? b : null
                            });
                        default:
                            return []
                    }
                    if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
                    b = h(i).filter(a).map(function() {
                        return h.inArray(this, i)
                    }).toArray();
                    if (b.length || !a.nodeName) return b;
                    b = h(a).closest("*[data-dt-column]");
                    return b.length ? [b.data("dt-column")] : []
                }, c, f)
            }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    u("columns().header()", "column().header()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].nTh
        }, 1)
    });
    u("columns().footer()", "column().footer()",
        function() {
            return this.iterator("column", function(a, b) {
                return a.aoColumns[b].nTf
            }, 1)
        });
    u("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", Xb, 1)
    });
    u("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    u("columns().cache()", "column().cache()", function(a) {
        return this.iterator("column-rows", function(b, c, d, e, f) {
            return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
        }, 1)
    });
    u("columns().nodes()",
        "column().nodes()",
        function() {
            return this.iterator("column-rows", function(a, b, c, d, e) {
                return ja(a.aoData, e, "anCells", b)
            }, 1)
        });
    u("columns().visible()", "column().visible()", function(a, b) {
        var c = this.iterator("column", function(b, c) {
            if (a === k) return b.aoColumns[c].bVisible;
            var f = b.aoColumns,
                g = f[c],
                j = b.aoData,
                i, n, l;
            if (a !== k && g.bVisible !== a) {
                if (a) {
                    var m = h.inArray(!0, D(f, "bVisible"), c + 1);
                    i = 0;
                    for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null)
                } else h(D(b.aoData, "anCells", c)).detach();
                g.bVisible = a;
                fa(b, b.aoHeader);
                fa(b, b.aoFooter);
                za(b)
            }
        });
        a !== k && (this.iterator("column", function(c, e) {
            s(c, null, "column-visibility", [c, e, a, b])
        }), (b === k || b) && this.columns.adjust());
        return c
    });
    u("columns().indexes()", "column().index()", function(a) {
        return this.iterator("column", function(b, c) {
            return "visible" === a ? aa(b, c) : c
        }, 1)
    });
    p("columns.adjust()", function() {
        return this.iterator("table", function(a) {
            Z(a)
        }, 1)
    });
    p("column.index()", function(a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" ===
                a || "toData" === a) return $(c, b);
            if ("fromData" === a || "toVisible" === a) return aa(c, b)
        }
    });
    p("column()", function(a, b) {
        return db(this.columns(a, b))
    });
    p("cells()", function(a, b, c) {
        h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
        h.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === k) return this.iterator("table", function(b) {
            var d = a,
                e = cb(c),
                f = b.aoData,
                g = Da(b, e),
                j = Tb(ja(f, g, "anCells")),
                i = h([].concat.apply([], j)),
                l, n = b.aoColumns.length,
                m, p, u, t, s, v;
            return bb("cell", d, function(a) {
                var c = typeof a === "function";
                if (a === null || a === k || c) {
                    m = [];
                    p = 0;
                    for (u = g.length; p < u; p++) {
                        l = g[p];
                        for (t = 0; t < n; t++) {
                            s = {
                                row: l,
                                column: t
                            };
                            if (c) {
                                v = f[l];
                                a(s, B(b, l, t), v.anCells ? v.anCells[t] : null) && m.push(s)
                            } else m.push(s)
                        }
                    }
                    return m
                }
                if (h.isPlainObject(a)) return [a];
                c = i.filter(a).map(function(a, b) {
                    return {
                        row: b._DT_CellIndex.row,
                        column: b._DT_CellIndex.column
                    }
                }).toArray();
                if (c.length || !a.nodeName) return c;
                v = h(a).closest("*[data-dt-row]");
                return v.length ? [{
                    row: v.data("dt-row"),
                    column: v.data("dt-column")
                }] : []
            }, b, e)
        });
        var d = this.columns(b, c),
            e = this.rows(a,
                c),
            f, g, j, i, n, l = this.iterator("table", function(a, b) {
                f = [];
                g = 0;
                for (j = e[b].length; g < j; g++) {
                    i = 0;
                    for (n = d[b].length; i < n; i++) f.push({
                        row: e[b][g],
                        column: d[b][i]
                    })
                }
                return f
            }, 1);
        h.extend(l.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return l
    });
    u("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(a, b, c) {
            return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : k
        }, 1)
    });
    p("cells().data()", function() {
        return this.iterator("cell", function(a, b, c) {
            return B(a, b, c)
        }, 1)
    });
    u("cells().cache()", "cell().cache()", function(a) {
        a =
            "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    u("cells().render()", "cell().render()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            return B(b, c, d, a)
        }, 1)
    });
    u("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(a, b, c) {
            return {
                row: b,
                column: c,
                columnVisible: aa(a, c)
            }
        }, 1)
    });
    u("cells().invalidate()", "cell().invalidate()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            da(b, c, a, d)
        })
    });
    p("cell()",
        function(a, b, c) {
            return db(this.cells(a, b, c))
        });
    p("cell().data()", function(a) {
        var b = this.context,
            c = this[0];
        if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
        lb(b[0], c[0].row, c[0].column, a);
        da(b[0], c[0].row, "data", c[0].column);
        return this
    });
    p("order()", function(a, b) {
        var c = this.context;
        if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
        "number" === typeof a ? a = [
            [a, b]
        ] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(b) {
            b.aaSorting = a.slice()
        })
    });
    p("order.listener()", function(a, b, c) {
        return this.iterator("table", function(d) {
            Oa(d, a, b, c)
        })
    });
    p("order.fixed()", function(a) {
        if (!a) {
            var b = this.context,
                b = b.length ? b[0].aaSortingFixed : k;
            return h.isArray(b) ? {
                pre: b
            } : b
        }
        return this.iterator("table", function(b) {
            b.aaSortingFixed = h.extend(!0, {}, a)
        })
    });
    p(["columns().order()", "column().order()"], function(a) {
        var b = this;
        return this.iterator("table", function(c, d) {
            var e = [];
            h.each(b[d], function(b, c) {
                e.push([c, a])
            });
            c.aaSorting = e
        })
    });
    p("search()", function(a, b, c, d) {
        var e =
            this.context;
        return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function(e) {
            e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1)
        })
    });
    u("columns().search()", "column().search()", function(a, b, c, d) {
        return this.iterator("column", function(e, f) {
            var g = e.aoPreSearchCols;
            if (a === k) return g[f].sSearch;
            e.oFeatures.bFilter && (h.extend(g[f], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ?
                    !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), ga(e, e.oPreviousSearch, 1))
        })
    });
    p("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null
    });
    p("state.clear()", function() {
        return this.iterator("table", function(a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {})
        })
    });
    p("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null
    });
    p("state.save()", function() {
        return this.iterator("table", function(a) {
            za(a)
        })
    });
    m.versionCheck = m.fnVersionCheck = function(a) {
        for (var b = m.version.split("."),
                a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0
    };
    m.isDataTable = m.fnIsDataTable = function(a) {
        var b = h(a).get(0),
            c = !1;
        if (a instanceof m.Api) return !0;
        h.each(m.settings, function(a, e) {
            var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
                g = e.nScrollFoot ? h("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || f === b || g === b) c = !0
        });
        return c
    };
    m.tables = m.fnTables = function(a) {
        var b = !1;
        h.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = h.map(m.settings,
            function(b) {
                if (!a || a && h(b.nTable).is(":visible")) return b.nTable
            });
        return b ? new t(c) : c
    };
    m.camelToHungarian = J;
    p("$()", function(a, b) {
        var c = this.rows(b).nodes(),
            c = h(c);
        return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
    });
    h.each(["on", "one", "off"], function(a, b) {
        p(b + "()", function() {
            var a = Array.prototype.slice.call(arguments);
            a[0] = h.map(a[0].split(/\s/), function(a) {
                return !a.match(/\.dt\b/) ? a + ".dt" : a
            }).join(" ");
            var d = h(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    p("clear()", function() {
        return this.iterator("table",
            function(a) {
                pa(a)
            })
    });
    p("settings()", function() {
        return new t(this.context, this.context)
    });
    p("init()", function() {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    p("data()", function() {
        return this.iterator("table", function(a) {
            return D(a.aoData, "_aData")
        }).flatten()
    });
    p("destroy()", function(a) {
        a = a || !1;
        return this.iterator("table", function(b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                f = b.nTBody,
                g = b.nTHead,
                j = b.nTFoot,
                i = h(e),
                f = h(f),
                k = h(b.nTableWrapper),
                l = h.map(b.aoData, function(a) {
                    return a.nTr
                }),
                p;
            b.bDestroying = !0;
            s(b, "aoDestroyCallback", "destroy", [b]);
            a || (new t(b)).columns().visible(!0);
            k.off(".DT").find(":not(tbody *)").off(".DT");
            h(E).off(".DT-" + b.sInstance);
            e != g.parentNode && (i.children("thead").detach(), i.append(g));
            j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            ya(b);
            h(l).removeClass(b.asStripeClasses.join(" "));
            h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            b.bJUI && (h("th span." + d.sSortIcon +
                ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function() {
                var a = h("div." + d.sSortJUIWrapper, this);
                h(this).append(a.contents());
                a.detach()
            }));
            f.children().detach();
            f.append(l);
            g = a ? "remove" : "detach";
            i[g]();
            k[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function(a) {
                h(this).addClass(b.asDestroyStripes[a % p])
            }));
            c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
        })
    });
    h.each(["column",
        "row", "cell"
    ], function(a, b) {
        p(b + "s().every()", function(a) {
            var d = this.selector.opts,
                e = this;
            return this.iterator(b, function(f, g, h, i, m) {
                a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m)
            })
        })
    });
    p("i18n()", function(a, b, c) {
        var d = this.context[0],
            a = R(a)(d.oLanguage);
        a === k && (a = b);
        c !== k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
        return a.replace("%d", c)
    });
    m.version = "1.10.15";
    m.settings = [];
    m.models = {};
    m.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    m.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    m.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    m.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bJQueryUI: !1,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance +
                    "_" + location.pathname, JSON.stringify(b))
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: h.extend({}, m.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    Y(m.defaults);
    m.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    Y(m.defaults.column);
    m.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: k,
        oAjaxData: k,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        bJUI: null,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var a =
                this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    m.ext = x = {
        buttons: {},
        classes: {},
        build: "bs-3.3.7/dt-1.10.15/se-1.2.2",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: m.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: m.version
    };
    h.extend(x, {
        afnFiltering: x.search,
        aTypes: x.type.detect,
        ofnSearch: x.type.search,
        oSort: x.type.order,
        afnSortData: x.order,
        aoFeatures: x.feature,
        oApi: x.internal,
        oStdClasses: x.classes,
        oPagination: x.pager
    });
    h.extend(m.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Ea = "",
        Ea = "",
        G = Ea + "ui-state-default",
        ka = Ea + "css_right ui-icon ui-icon-",
        Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
    h.extend(m.ext.oJUIClasses,
        m.ext.classes, {
            sPageButton: "fg-button ui-button " + G,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: G + " sorting_asc",
            sSortDesc: G + " sorting_desc",
            sSortable: G + " sorting",
            sSortableAsc: G + " sorting_asc_disabled",
            sSortableDesc: G + " sorting_desc_disabled",
            sSortableNone: G + " sorting_disabled",
            sSortJUIAsc: ka + "triangle-1-n",
            sSortJUIDesc: ka + "triangle-1-s",
            sSortJUI: ka + "carat-2-n-s",
            sSortJUIAscAllowed: ka + "carat-1-n",
            sSortJUIDescAllowed: ka + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + G,
            sScrollFoot: "dataTables_scrollFoot " + G,
            sHeaderTH: G,
            sFooterTH: G,
            sJUIHeader: Yb + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Yb + " ui-corner-bl ui-corner-br"
        });
    var Nb = m.ext.pager;
    h.extend(Nb, {
        simple: function() {
            return ["previous", "next"]
        },
        full: function() {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(a, b) {
            return [ia(a,
                b)]
        },
        simple_numbers: function(a, b) {
            return ["previous", ia(a, b), "next"]
        },
        full_numbers: function(a, b) {
            return ["first", "previous", ia(a, b), "next", "last"]
        },
        first_last_numbers: function(a, b) {
            return ["first", ia(a, b), "last"]
        },
        _numbers: ia,
        numbers_length: 7
    });
    h.extend(!0, m.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, f) {
                var g = a.oClasses,
                    j = a.oLanguage.oPaginate,
                    i = a.oLanguage.oAria.paginate || {},
                    m, l, p = 0,
                    r = function(b, d) {
                        var k, t, u, s, v = function(b) {
                            Va(a, b.data.action, true)
                        };
                        k = 0;
                        for (t = d.length; k < t; k++) {
                            s = d[k];
                            if (h.isArray(s)) {
                                u =
                                    h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                                r(u, s)
                            } else {
                                m = null;
                                l = "";
                                switch (s) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        m = j.sFirst;
                                        l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "previous":
                                        m = j.sPrevious;
                                        l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "next":
                                        m = j.sNext;
                                        l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    case "last":
                                        m = j.sLast;
                                        l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                                        break;
                                    default:
                                        m = s + 1;
                                        l = e === s ? g.sPageButtonActive : ""
                                }
                                if (m !== null) {
                                    u = h("<a>", {
                                        "class": g.sPageButton +
                                            " " + l,
                                        "aria-controls": a.sTableId,
                                        "aria-label": i[s],
                                        "data-dt-idx": p,
                                        tabindex: a.iTabIndex,
                                        id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null
                                    }).html(m).appendTo(b);
                                    Ya(u, {
                                        action: s
                                    }, v);
                                    p++
                                }
                            }
                        }
                    },
                    t;
                try {
                    t = h(b).find(H.activeElement).data("dt-idx")
                } catch (u) {}
                r(h(b).empty(), d);
                t !== k && h(b).find("[data-dt-idx=" + t + "]").focus()
            }
        }
    });
    h.extend(m.ext.type.detect, [function(a, b) {
        var c = b.oLanguage.sDecimal;
        return ab(a, c) ? "num" + c : null
    }, function(a) {
        if (a && !(a instanceof Date) && !cc.test(a)) return null;
        var b = Date.parse(a);
        return null !== b && !isNaN(b) || M(a) ? "date" : null
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return ab(a, c, !0) ? "num-fmt" + c : null
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Sb(a, c) ? "html-num" + c : null
    }, function(a, b) {
        var c = b.oLanguage.sDecimal;
        return Sb(a, c, !0) ? "html-num-fmt" + c : null
    }, function(a) {
        return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]);
    h.extend(m.ext.type.search, {
        html: function(a) {
            return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : ""
        },
        string: function(a) {
            return M(a) ?
                a : "string" === typeof a ? a.replace(Pb, " ") : a
        }
    });
    var Ba = function(a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Rb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a
    };
    h.extend(x.type.order, {
        "date-pre": function(a) {
            return Date.parse(a) || -Infinity
        },
        "html-pre": function(a) {
            return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        },
        "string-pre": function(a) {
            return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
        },
        "string-asc": function(a, b) {
            return a <
                b ? -1 : a > b ? 1 : 0
        },
        "string-desc": function(a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    fb("");
    h.extend(!0, m.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                    }
                })
            },
            jqueryui: function(a, b, c, d) {
                h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                h(a.nTable).on("order.dt.DT", function(e, f, g, h) {
                    if (a === f) {
                        e = c.idx;
                        b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                        b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                    }
                })
            }
        }
    });
    var Zb = function(a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,
            "&quot;") : a
    };
    m.render = {
        number: function(a, b, c, d, e) {
            return {
                display: function(f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return Zb(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        },
        text: function() {
            return {
                display: Zb
            }
        }
    };
    h.extend(m.ext.internal, {
        _fnExternApiFunc: Ob,
        _fnBuildAjax: ua,
        _fnAjaxUpdate: nb,
        _fnAjaxParameters: wb,
        _fnAjaxUpdateDraw: xb,
        _fnAjaxDataSrc: va,
        _fnAddColumn: Ga,
        _fnColumnOptions: la,
        _fnAdjustColumnSizing: Z,
        _fnVisibleToColumnIndex: $,
        _fnColumnIndexToVisible: aa,
        _fnVisbleColumns: ba,
        _fnGetColumns: na,
        _fnColumnTypes: Ia,
        _fnApplyColumnDefs: kb,
        _fnHungarianMap: Y,
        _fnCamelToHungarian: J,
        _fnLanguageCompat: Fa,
        _fnBrowserDetect: ib,
        _fnAddData: N,
        _fnAddTr: oa,
        _fnNodeToDataIndex: function(a, b) {
            return b._DT_RowIndex !== k ? b._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(a, b, c) {
            return h.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: B,
        _fnSetCellData: lb,
        _fnSplitObjNotation: La,
        _fnGetObjectDataFn: R,
        _fnSetObjectDataFn: S,
        _fnGetDataMaster: Ma,
        _fnClearTable: pa,
        _fnDeleteIndex: qa,
        _fnInvalidate: da,
        _fnGetRowElements: Ka,
        _fnCreateTr: Ja,
        _fnBuildHead: mb,
        _fnDrawHead: fa,
        _fnDraw: O,
        _fnReDraw: T,
        _fnAddOptionsHtml: pb,
        _fnDetectHeader: ea,
        _fnGetUniqueThs: ta,
        _fnFeatureHtmlFilter: rb,
        _fnFilterComplete: ga,
        _fnFilterCustom: Ab,
        _fnFilterColumn: zb,
        _fnFilter: yb,
        _fnFilterCreateSearch: Ra,
        _fnEscapeRegex: Sa,
        _fnFilterData: Bb,
        _fnFeatureHtmlInfo: ub,
        _fnUpdateInfo: Eb,
        _fnInfoMacros: Fb,
        _fnInitialise: ha,
        _fnInitComplete: wa,
        _fnLengthChange: Ta,
        _fnFeatureHtmlLength: qb,
        _fnFeatureHtmlPaginate: vb,
        _fnPageChange: Va,
        _fnFeatureHtmlProcessing: sb,
        _fnProcessingDisplay: C,
        _fnFeatureHtmlTable: tb,
        _fnScrollDraw: ma,
        _fnApplyToChildren: I,
        _fnCalculateColumnWidths: Ha,
        _fnThrottle: Qa,
        _fnConvertToWidth: Gb,
        _fnGetWidestNode: Hb,
        _fnGetMaxLenString: Ib,
        _fnStringToCss: v,
        _fnSortFlatten: W,
        _fnSort: ob,
        _fnSortAria: Kb,
        _fnSortListener: Xa,
        _fnSortAttachListener: Oa,
        _fnSortingClasses: ya,
        _fnSortData: Jb,
        _fnSaveState: za,
        _fnLoadState: Lb,
        _fnSettingsFromNode: Aa,
        _fnLog: K,
        _fnMap: F,
        _fnBindAction: Ya,
        _fnCallbackReg: z,
        _fnCallbackFire: s,
        _fnLengthOverflow: Ua,
        _fnRenderer: Pa,
        _fnDataSource: y,
        _fnRowAttributes: Na,
        _fnCalculateEnd: function() {}
    });
    h.fn.dataTable = m;
    m.$ = h;
    h.fn.dataTableSettings = m.settings;
    h.fn.dataTableExt = m.ext;
    h.fn.DataTable = function(a) {
        return h(this).dataTable(a).api()
    };
    h.each(m, function(a, b) {
        h.fn.DataTable[a] = b
    });
    return h.fn.dataTable
});

/*!
 DataTables Bootstrap 3 integration
 ©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(a) {
        return b(a, window, document)
    }) : "object" === typeof exports ? module.exports = function(a, d) {
        a || (a = window);
        if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$;
        return b(d, a, a.document)
    } : b(jQuery, window, document)
})(function(b, a, d, m) {
    var f = b.fn.dataTable;
    b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-6 col-xs-12 mobile-left'l><'col-sm-6 col-xs-12 mobile-left'f>><'row'<'col-sm-12 col-xs-12'tr>><'row'<'col-sm-5 col-xs-12 mobile-left'i><'col-sm-7 col-xs-12 mobile-left'p>>",
        renderer: "bootstrap"
    });
    b.extend(f.ext.classes, {
        sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
        sFilterInput: "form-control input-sm",
        sLengthSelect: "form-control input-sm",
        sProcessing: "dataTables_processing panel panel-default"
    });
    f.ext.renderer.pageButton.bootstrap = function(a, h, r, s, j, n) {
        var o = new f.Api(a),
            t = a.oClasses,
            k = a.oLanguage.oPaginate,
            u = a.oLanguage.oAria.paginate || {},
            e, g, p = 0,
            q = function(d, f) {
                var l, h, i, c, m = function(a) {
                    a.preventDefault();
                    !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page")
                };
                l = 0;
                for (h = f.length; l < h; l++)
                    if (c = f[l], b.isArray(c)) q(d, c);
                    else {
                        g = e = "";
                        switch (c) {
                            case "ellipsis":
                                e = "&#x2026;";
                                g = "disabled";
                                break;
                            case "first":
                                e = k.sFirst;
                                g = c + (0 < j ? "" : " disabled");
                                break;
                            case "previous":
                                e = k.sPrevious;
                                g = c + (0 < j ? "" : " disabled");
                                break;
                            case "next":
                                e = k.sNext;
                                g = c + (j < n - 1 ? "" : " disabled");
                                break;
                            case "last":
                                e = k.sLast;
                                g = c + (j < n - 1 ? "" : " disabled");
                                break;
                            default:
                                e = c + 1, g = j === c ? "active" : ""
                        }
                        e && (i = b("<li>", {
                            "class": t.sPageButton + " " + g,
                            id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null
                        }).append(b("<a>", {
                            href: "#",
                            "aria-controls": a.sTableId,
                            "aria-label": u[c],
                            "data-dt-idx": p,
                            tabindex: a.iTabIndex
                        }).html(e)).appendTo(d), a.oApi._fnBindAction(i, {
                            action: c
                        }, m), p++)
                    }
            },
            i;
        try {
            i = b(h).find(d.activeElement).data("dt-idx")
        } catch (v) {}
        q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
        i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    };
    return f
});

/*!
 Select for DataTables 1.2.2
 2015-2016 SpryMedia Ltd - datatables.net/license/mit
*/
(function(e) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(j) {
        return e(j, window, document)
    }) : "object" === typeof exports ? module.exports = function(j, m) {
        j || (j = window);
        if (!m || !m.fn.dataTable) m = require("datatables.net")(j, m).$;
        return e(m, j, j.document)
    } : e(jQuery, window, document)
})(function(e, j, m, h) {
    function v(b, c, a) {
        var d;
        d = function(a, c) {
            if (a > c) var d = c,
                c = a,
                a = d;
            var f = !1;
            return b.columns(":visible").indexes().filter(function(b) {
                b === a && (f = !0);
                return b === c ? (f = !1, !0) : f
            })
        };
        var f =
            function(a, c) {
                var d = b.rows({
                    search: "applied"
                }).indexes();
                if (d.indexOf(a) > d.indexOf(c)) var f = c,
                    c = a,
                    a = f;
                var e = !1;
                return d.filter(function(b) {
                    b === a && (e = !0);
                    return b === c ? (e = !1, !0) : e
                })
            };
        !b.cells({
            selected: !0
        }).any() && !a ? (d = d(0, c.column), a = f(0, c.row)) : (d = d(a.column, c.column), a = f(a.row, c.row));
        a = b.cells(a, d).flatten();
        b.cells(c, {
            selected: !0
        }).any() ? b.cells(a).deselect() : b.cells(a).select()
    }

    function r(b) {
        var c = b.settings()[0]._select.selector;
        e(b.table().container()).off("mousedown.dtSelect", c).off("mouseup.dtSelect",
            c).off("click.dtSelect", c);
        e("body").off("click.dtSelect" + b.table().node().id)
    }

    function x(b) {
        var c = e(b.table().container()),
            a = b.settings()[0],
            d = a._select.selector;
        c.on("mousedown.dtSelect", d, function(a) {
            if (a.shiftKey || a.metaKey || a.ctrlKey) c.css("-moz-user-select", "none").one("selectstart.dtSelect", d, function() {
                return !1
            })
        }).on("mouseup.dtSelect", d, function() {
            c.css("-moz-user-select", "")
        }).on("click.dtSelect", d, function(a) {
            var c = b.select.items();
            if (!j.getSelection || !e.trim(j.getSelection().toString())) {
                var d =
                    b.settings()[0];
                if (e(a.target).closest("div.dataTables_wrapper")[0] == b.table().container()) {
                    var k = b.cell(e(a.target).closest("td, th"));
                    if (k.any()) {
                        var g = e.Event("user-select.dt");
                        i(b, g, [c, k, a]);
                        g.isDefaultPrevented() || (g = k.index(), "row" === c ? (c = g.row, s(a, b, d, "row", c)) : "column" === c ? (c = k.index().column, s(a, b, d, "column", c)) : "cell" === c && (c = k.index(), s(a, b, d, "cell", c)), d._select_lastCell = g)
                    }
                }
            }
        });
        e("body").on("click.dtSelect" + b.table().node().id, function(c) {
            a._select.blurable && !e(c.target).parents().filter(b.table().container()).length &&
                (c.target.getRootNode() === m && !e(c.target).parents("div.DTE").length) && p(a, !0)
        })
    }

    function i(b, c, a, d) {
        if (!d || b.flatten().length) "string" === typeof c && (c += ".dt"), a.unshift(b), e(b.table().node()).trigger(c, a)
    }

    function y(b) {
        var c = b.settings()[0];
        if (c._select.info && c.aanFeatures.i) {
            var a = b.rows({
                    selected: !0
                }).flatten().length,
                d = b.columns({
                    selected: !0
                }).flatten().length,
                f = b.cells({
                    selected: !0
                }).flatten().length,
                l = function(a, c, d) {
                    a.append(e('<span class="select-item"/>').append(b.i18n("select." + c + "s", {
                        _: "%d " +
                            c + "s selected",
                        "0": "",
                        1: "1 " + c + " selected"
                    }, d)))
                };
            e.each(c.aanFeatures.i, function(c, b) {
                var b = e(b),
                    g = e('<span class="select-info"/>');
                l(g, "row", a);
                l(g, "column", d);
                l(g, "cell", f);
                var h = b.children("span.select-info");
                h.length && h.remove();
                "" !== g.text() && b.append(g)
            })
        }
    }

    function z(b, c, a, d) {
        var f = b[c + "s"]({
                search: "applied"
            }).indexes(),
            d = e.inArray(d, f),
            l = e.inArray(a, f);
        if (!b[c + "s"]({
                selected: !0
            }).any() && -1 === d) f.splice(e.inArray(a, f) + 1, f.length);
        else {
            if (d > l) var g = l,
                l = d,
                d = g;
            f.splice(l + 1, f.length);
            f.splice(0,
                d)
        }
        b[c](a, {
            selected: !0
        }).any() ? (f.splice(e.inArray(a, f), 1), b[c + "s"](f).deselect()) : b[c + "s"](f).select()
    }

    function p(b, c) {
        if (c || "single" === b._select.style) {
            var a = new g.Api(b);
            a.rows({
                selected: !0
            }).deselect();
            a.columns({
                selected: !0
            }).deselect();
            a.cells({
                selected: !0
            }).deselect()
        }
    }

    function s(b, c, a, d, f) {
        var e = c.select.style(),
            g = c[d](f, {
                selected: !0
            }).any();
        "os" === e ? b.ctrlKey || b.metaKey ? c[d](f).select(!g) : b.shiftKey ? "cell" === d ? v(c, f, a._select_lastCell || null) : z(c, d, f, a._select_lastCell ? a._select_lastCell[d] :
            null) : (b = c[d + "s"]({
            selected: !0
        }), g && 1 === b.flatten().length ? c[d](f).deselect() : (b.deselect(), c[d](f).select())) : "multi+shift" == e ? b.shiftKey ? "cell" === d ? v(c, f, a._select_lastCell || null) : z(c, d, f, a._select_lastCell ? a._select_lastCell[d] : null) : c[d](f).select(!g) : c[d](f).select(!g)
    }

    function q(b, c) {
        return function(a) {
            return a.i18n("buttons." + b, c)
        }
    }

    function t(b) {
        b = b._eventNamespace;
        return "draw.dt.DT" + b + " select.dt.DT" + b + " deselect.dt.DT" + b
    }
    var g = e.fn.dataTable;
    g.select = {};
    g.select.version = "1.2.2";
    g.select.init =
        function(b) {
            var c = b.settings()[0],
                a = c.oInit.select,
                d = g.defaults.select,
                a = a === h ? d : a,
                d = "row",
                f = "api",
                l = !1,
                w = !0,
                k = "td, th",
                j = "selected",
                i = !1;
            c._select = {};
            if (!0 === a) f = "os", i = !0;
            else if ("string" === typeof a) f = a, i = !0;
            else if (e.isPlainObject(a) && (a.blurable !== h && (l = a.blurable), a.info !== h && (w = a.info), a.items !== h && (d = a.items), a.style !== h && (f = a.style, i = !0), a.selector !== h && (k = a.selector), a.className !== h)) j = a.className;
            b.select.selector(k);
            b.select.items(d);
            b.select.style(f);
            b.select.blurable(l);
            b.select.info(w);
            c._select.className = j;
            e.fn.dataTable.ext.order["select-checkbox"] = function(a, c) {
                return this.api().column(c, {
                    order: "index"
                }).nodes().map(function(c) {
                    return "row" === a._select.items ? e(c).parent().hasClass(a._select.className) : "cell" === a._select.items ? e(c).hasClass(a._select.className) : !1
                })
            };
            !i && e(b.table().node()).hasClass("selectable") && b.select.style("os")
        };
    e.each([{
        type: "row",
        prop: "aoData"
    }, {
        type: "column",
        prop: "aoColumns"
    }], function(b, c) {
        g.ext.selector[c.type].push(function(a, b, f) {
            var b = b.selected,
                e, g = [];
            if (b === h) return f;
            for (var k = 0, i = f.length; k < i; k++) e = a[c.prop][f[k]], (!0 === b && !0 === e._select_selected || !1 === b && !e._select_selected) && g.push(f[k]);
            return g
        })
    });
    g.ext.selector.cell.push(function(b, c, a) {
        var c = c.selected,
            d, f = [];
        if (c === h) return a;
        for (var e = 0, g = a.length; e < g; e++) d = b.aoData[a[e].row], (!0 === c && d._selected_cells && !0 === d._selected_cells[a[e].column] || !1 === c && (!d._selected_cells || !d._selected_cells[a[e].column])) && f.push(a[e]);
        return f
    });
    var n = g.Api.register,
        o = g.Api.registerPlural;
    n("select()",
        function() {
            return this.iterator("table", function(b) {
                g.select.init(new g.Api(b))
            })
        });
    n("select.blurable()", function(b) {
        return b === h ? this.context[0]._select.blurable : this.iterator("table", function(c) {
            c._select.blurable = b
        })
    });
    n("select.info()", function(b) {
        return y === h ? this.context[0]._select.info : this.iterator("table", function(c) {
            c._select.info = b
        })
    });
    n("select.items()", function(b) {
        return b === h ? this.context[0]._select.items : this.iterator("table", function(c) {
            c._select.items = b;
            i(new g.Api(c), "selectItems", [b])
        })
    });
    n("select.style()", function(b) {
        return b === h ? this.context[0]._select.style : this.iterator("table", function(c) {
            c._select.style = b;
            if (!c._select_init) {
                var a = new g.Api(c);
                c.aoRowCreatedCallback.push({
                    fn: function(a, b, d) {
                        b = c.aoData[d];
                        b._select_selected && e(a).addClass(c._select.className);
                        a = 0;
                        for (d = c.aoColumns.length; a < d; a++)(c.aoColumns[a]._select_selected || b._selected_cells && b._selected_cells[a]) && e(b.anCells[a]).addClass(c._select.className)
                    },
                    sName: "select-deferRender"
                });
                a.on("preXhr.dt.dtSelect",
                    function() {
                        var c = a.rows({
                                selected: !0
                            }).ids(!0).filter(function(a) {
                                return a !== h
                            }),
                            b = a.cells({
                                selected: !0
                            }).eq(0).map(function(c) {
                                var b = a.row(c.row).id(!0);
                                return b ? {
                                    row: b,
                                    column: c.column
                                } : h
                            }).filter(function(a) {
                                return a !== h
                            });
                        a.one("draw.dt.dtSelect", function() {
                            a.rows(c).select();
                            b.any() && b.each(function(c) {
                                a.cells(c.row, c.column).select()
                            })
                        })
                    });
                a.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function() {
                    y(a)
                });
                a.on("destroy.dtSelect", function() {
                    r(a);
                    a.off(".dtSelect")
                })
            }
            var d =
                new g.Api(c);
            r(d);
            "api" !== b && x(d);
            i(new g.Api(c), "selectStyle", [b])
        })
    });
    n("select.selector()", function(b) {
        return b === h ? this.context[0]._select.selector : this.iterator("table", function(c) {
            r(new g.Api(c));
            c._select.selector = b;
            "api" !== c._select.style && x(new g.Api(c))
        })
    });
    o("rows().select()", "row().select()", function(b) {
        var c = this;
        if (!1 === b) return this.deselect();
        this.iterator("row", function(a, c) {
            p(a);
            a.aoData[c]._select_selected = !0;
            e(a.aoData[c].nTr).addClass(a._select.className)
        });
        this.iterator("table",
            function(a, b) {
                i(c, "select", ["row", c[b]], !0)
            });
        return this
    });
    o("columns().select()", "column().select()", function(b) {
        var c = this;
        if (!1 === b) return this.deselect();
        this.iterator("column", function(a, c) {
            p(a);
            a.aoColumns[c]._select_selected = !0;
            var b = (new g.Api(a)).column(c);
            e(b.header()).addClass(a._select.className);
            e(b.footer()).addClass(a._select.className);
            b.nodes().to$().addClass(a._select.className)
        });
        this.iterator("table", function(a, b) {
            i(c, "select", ["column", c[b]], !0)
        });
        return this
    });
    o("cells().select()",
        "cell().select()",
        function(b) {
            var c = this;
            if (!1 === b) return this.deselect();
            this.iterator("cell", function(a, c, b) {
                p(a);
                c = a.aoData[c];
                c._selected_cells === h && (c._selected_cells = []);
                c._selected_cells[b] = !0;
                c.anCells && e(c.anCells[b]).addClass(a._select.className)
            });
            this.iterator("table", function(a, b) {
                i(c, "select", ["cell", c[b]], !0)
            });
            return this
        });
    o("rows().deselect()", "row().deselect()", function() {
        var b = this;
        this.iterator("row", function(c, a) {
            c.aoData[a]._select_selected = !1;
            e(c.aoData[a].nTr).removeClass(c._select.className)
        });
        this.iterator("table", function(c, a) {
            i(b, "deselect", ["row", b[a]], !0)
        });
        return this
    });
    o("columns().deselect()", "column().deselect()", function() {
        var b = this;
        this.iterator("column", function(c, a) {
            c.aoColumns[a]._select_selected = !1;
            var b = new g.Api(c),
                f = b.column(a);
            e(f.header()).removeClass(c._select.className);
            e(f.footer()).removeClass(c._select.className);
            b.cells(null, a).indexes().each(function(a) {
                var b = c.aoData[a.row],
                    d = b._selected_cells;
                b.anCells && (!d || !d[a.column]) && e(b.anCells[a.column]).removeClass(c._select.className)
            })
        });
        this.iterator("table", function(c, a) {
            i(b, "deselect", ["column", b[a]], !0)
        });
        return this
    });
    o("cells().deselect()", "cell().deselect()", function() {
        var b = this;
        this.iterator("cell", function(c, a, b) {
            a = c.aoData[a];
            a._selected_cells[b] = !1;
            a.anCells && !c.aoColumns[b]._select_selected && e(a.anCells[b]).removeClass(c._select.className)
        });
        this.iterator("table", function(c, a) {
            i(b, "deselect", ["cell", b[a]], !0)
        });
        return this
    });
    var u = 0;
    e.extend(g.ext.buttons, {
        selected: {
            text: q("selected", "Selected"),
            className: "buttons-selected",
            init: function(b, c, a) {
                var d = this;
                a._eventNamespace = ".select" + u++;
                b.on(t(a), function() {
                    var a = d.rows({
                        selected: !0
                    }).any() || d.columns({
                        selected: !0
                    }).any() || d.cells({
                        selected: !0
                    }).any();
                    d.enable(a)
                });
                this.disable()
            },
            destroy: function(b, c, a) {
                b.off(a._eventNamespace)
            }
        },
        selectedSingle: {
            text: q("selectedSingle", "Selected single"),
            className: "buttons-selected-single",
            init: function(b, c, a) {
                var d = this;
                a._eventNamespace = ".select" + u++;
                b.on(t(a), function() {
                    var a = b.rows({
                            selected: !0
                        }).flatten().length + b.columns({
                            selected: !0
                        }).flatten().length +
                        b.cells({
                            selected: !0
                        }).flatten().length;
                    d.enable(1 === a)
                });
                this.disable()
            },
            destroy: function(b, c, a) {
                b.off(a._eventNamespace)
            }
        },
        selectAll: {
            text: q("selectAll", "Select all"),
            className: "buttons-select-all",
            action: function() {
                this[this.select.items() + "s"]().select()
            }
        },
        selectNone: {
            text: q("selectNone", "Deselect all"),
            className: "buttons-select-none",
            action: function() {
                p(this.settings()[0], !0)
            },
            init: function(b, c, a) {
                var d = this;
                a._eventNamespace = ".select" + u++;
                b.on(t(a), function() {
                    var a = b.rows({
                            selected: !0
                        }).flatten().length +
                        b.columns({
                            selected: !0
                        }).flatten().length + b.cells({
                            selected: !0
                        }).flatten().length;
                    d.enable(0 < a)
                });
                this.disable()
            },
            destroy: function(b, c, a) {
                b.off(a._eventNamespace)
            }
        }
    });
    e.each(["Row", "Column", "Cell"], function(b, c) {
        var a = c.toLowerCase();
        g.ext.buttons["select" + c + "s"] = {
            text: q("select" + c + "s", "Select " + a + "s"),
            className: "buttons-select-" + a + "s",
            action: function() {
                this.select.items(a)
            },
            init: function(b) {
                var c = this;
                b.on("selectItems.dt.DT", function(b, d, e) {
                    c.active(e === a)
                })
            }
        }
    });
    e(m).on("preInit.dt.dtSelect", function(b,
        c) {
        "dt" === b.namespace && g.select.init(new g.Api(c))
    });
    return g.select
});

/*! Checkboxes 1.2.9
 *  Copyright (c) Gyrocode (www.gyrocode.com)
 *  License: MIT License
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "datatables.net"], function($) {
            return factory($, window, document);
        });
    } else {
        if (typeof exports === "object") {
            module.exports = function(root, $) {
                if (!root) {
                    root = window;
                }
                if (!$ || !$.fn.dataTable) {
                    $ = require("datatables.net")(root, $).$;
                }
                return factory($, root, root.document);
            };
        } else {
            factory(jQuery, window, document);
        }
    }
}(function($, window, document, undefined) {
    var DataTable = $.fn.dataTable;
    var Checkboxes = function(settings) {
        if (!DataTable.versionCheck || !DataTable.versionCheck("1.10.8")) {
            throw "DataTables Checkboxes requires DataTables 1.10.8 or newer";
        }
        this.s = {
            dt: new DataTable.Api(settings),
            columns: [],
            data: {},
            dataDisabled: {},
            ignoreSelect: false
        };
        this.s.ctx = this.s.dt.settings()[0];
        if (this.s.ctx.checkboxes) {
            return;
        }
        settings.checkboxes = this;
        this._constructor();
    };
    Checkboxes.prototype = {
        _constructor: function() {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            var hasCheckboxes = false;
            var hasCheckboxesSelectRow = false;
            var state = dt.state.loaded();
            for (var i = 0; i < ctx.aoColumns.length; i++) {
                if (ctx.aoColumns[i].checkboxes) {
                    var $colHeader = $(dt.column(i).header());
                    hasCheckboxes = true;
                    if (!$.isPlainObject(ctx.aoColumns[i].checkboxes)) {
                        ctx.aoColumns[i].checkboxes = {};
                    }
                    ctx.aoColumns[i].checkboxes = $.extend({}, Checkboxes.defaults, ctx.aoColumns[i].checkboxes);
                    var colOptions = {
                        "searchable": false,
                        "orderable": false
                    };
                    if (ctx.aoColumns[i].sClass === "") {
                        colOptions["className"] = "dt-checkboxes-cell";
                    } else {
                        colOptions["className"] = ctx.aoColumns[i].sClass + " dt-checkboxes-cell";
                    }
                    if (ctx.aoColumns[i].sWidthOrig === null) {
                        colOptions["width"] = "1%";
                    }
                    if (ctx.aoColumns[i].mRender === null) {
                        colOptions["render"] = function() {
                            return '<input type="checkbox" class="dt-checkboxes">';
                        };
                    }
                    DataTable.ext.internal._fnColumnOptions(ctx, i, colOptions);
                    $colHeader.removeClass("sorting");
                    $colHeader.off(".dt");
                    if (ctx.sAjaxSource === null) {
                        var cells = dt.cells("tr", i);
                        cells.invalidate("data");
                        $(cells.nodes()).addClass(colOptions["className"]);
                    }
                    self.s.data[i] = {};
                    self.s.dataDisabled[i] = {};
                    if (state && state.checkboxes && state.checkboxes.hasOwnProperty(i)) {
                        self.s.data[i] = state.checkboxes[i];
                    }
                    self.s.columns.push(i);
                    if (ctx.aoColumns[i].checkboxes.selectRow) {
                        if (ctx._select) {
                            hasCheckboxesSelectRow = true;
                        } else {
                            ctx.aoColumns[i].checkboxes.selectRow = false;
                        }
                    }
                    if (ctx.aoColumns[i].checkboxes.selectAll) {
                        $colHeader.data("html", $colHeader.html());
                        if (ctx.aoColumns[i].checkboxes.selectAllRender !== null) {
                            var selectAllHtml = "";
                            if ($.isFunction(ctx.aoColumns[i].checkboxes.selectAllRender)) {
                                selectAllHtml = ctx.aoColumns[i].checkboxes.selectAllRender();
                            } else {
                                if (typeof ctx.aoColumns[i].checkboxes.selectAllRender === "string") {
                                    selectAllHtml = ctx.aoColumns[i].checkboxes.selectAllRender;
                                }
                            }
                            $colHeader.html(selectAllHtml).addClass("dt-checkboxes-select-all").attr("data-col", i);
                        }
                    }
                }
            }
            if (hasCheckboxes) {
                var $table = $(dt.table().node());
                var $tableBody = $(dt.table().body());
                var $tableContainer = $(dt.table().container());
                if (hasCheckboxesSelectRow) {
                    $table.addClass("dt-checkboxes-select");
                    $table.on("user-select.dt.dtCheckboxes", function(e, dt, type, cell, originalEvent) {
                        var cellIdx = cell.index();
                        var rowIdx = cellIdx.row;
                        var colIdx = self.getSelectRowColIndex();
                        var cellData = dt.cell({
                            row: rowIdx,
                            column: colIdx
                        }).data();
                        if (!self.isCellSelectable(colIdx, cellData)) {
                            e.preventDefault();
                        }
                    });
                    $table.on("select.dt.dtCheckboxes deselect.dt.dtCheckboxes", function(e, api, type, indexes) {
                        self.onSelect(e, type, indexes);
                    });
                    dt.select.info(false);
                    $table.on("draw.dt.dtCheckboxes select.dt.dtCheckboxes deselect.dt.dtCheckboxes", function() {
                        self.showInfoSelected();
                    });
                }
                $table.on("draw.dt.dtCheckboxes", function(e) {
                    self.onDraw(e);
                });
                $tableBody.on("click.dtCheckboxes", "input.dt-checkboxes", function(e) {
                    self.onClick(e, this);
                });
                $tableContainer.on("click.dtCheckboxes", 'thead th.dt-checkboxes-select-all input[type="checkbox"]', function(e) {
                    self.onClickSelectAll(e, this);
                });
                $tableContainer.on("click.dtCheckboxes", "thead th.dt-checkboxes-select-all", function(e) {
                    $('input[type="checkbox"]', this).not(":disabled").trigger("click");
                });
                if (!hasCheckboxesSelectRow) {
                    $tableContainer.on("click.dtCheckboxes", "tbody td.dt-checkboxes-cell", function(e) {
                        $('input[type="checkbox"]', this).not(":disabled").trigger("click");
                    });
                }
                $tableContainer.on("click.dtCheckboxes", "thead th.dt-checkboxes-select-all label, tbody td.dt-checkboxes-cell label", function(e) {
                    e.preventDefault();
                });
                $(document).on("click.dtCheckboxes", '.fixedHeader-floating thead th.dt-checkboxes-select-all input[type="checkbox"]', function(e) {
                    if (ctx._fixedHeader) {
                        if (ctx._fixedHeader.dom["header"].floating) {
                            self.onClickSelectAll(e, this);
                        }
                    }
                });
                $(document).on("click.dtCheckboxes", ".fixedHeader-floating thead th.dt-checkboxes-select-all", function(e) {
                    if (ctx._fixedHeader) {
                        if (ctx._fixedHeader.dom["header"].floating) {
                            $('input[type="checkbox"]', this).trigger("click");
                        }
                    }
                });
                $table.on("init.dt.dtCheckboxes", function() {
                    if (!ctx.oFeatures.bServerSide) {
                        if (ctx.oFeatures.bStateSave) {
                            self.updateState();
                        }
                        $table.on("xhr.dt", function(e, settings, json, xhr) {
                            $.each(self.s.columns, function(index, colIdx) {
                                self.s.data[colIdx] = {};
                            });
                            if (ctx.oFeatures.bStateSave) {
                                var state = dt.state.loaded();
                                $.each(self.s.columns, function(index, colIdx) {
                                    if (state && state.checkboxes && state.checkboxes.hasOwnProperty(colIdx)) {
                                        self.s.data[colIdx] = state.checkboxes[colIdx];
                                    }
                                });
                                $table.one("draw.dt.dtCheckboxes", function(e) {
                                    self.updateState();
                                });
                            }
                        });
                    }
                    if (ctx.oFeatures.bStateSave) {
                        $table.on("stateSaveParams.dt.dtCheckboxes", function(e, settings, data) {
                            data.checkboxes = self.s.data;
                        });
                    }
                });
                $table.one("destroy.dt.dtCheckboxes", function(e, settings) {
                    $(document).off("click.dtCheckboxes");
                    $tableContainer.on(".dtCheckboxes");
                    $tableBody.off(".dtCheckboxes");
                    $table.off(".dtCheckboxes");
                    self.s.data = {};
                    $(".dt-checkboxes-select-all", $table).each(function(index, el) {
                        $(el).html($(el).data("html")).removeClass("dt-checkboxes-select-all");
                    });
                });
            }
        },
        updateData: function(cells, colIdx, isSelected) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx.aoColumns[colIdx].checkboxes) {
                var cellsData = cells.data();
                cellsData.each(function(cellData, index) {
                    if (isSelected) {
                        ctx.checkboxes.s.data[colIdx][cellData] = 1;
                    } else {
                        delete ctx.checkboxes.s.data[colIdx][cellData];
                    }
                });
                if (ctx.oFeatures.bStateSave) {
                    dt.state.save();
                }
            }
        },
        updateSelect: function(selector, isSelected) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx._select) {
                self.s.ignoreSelect = true;
                if (isSelected) {
                    dt.rows(selector).select();
                } else {
                    dt.rows(selector).deselect();
                }
                self.s.ignoreSelect = false;
            }
        },
        updateCheckbox: function(cells, colIdx, isSelected) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            var cellNodes = cells.nodes();
            if (cellNodes.length) {
                $("input.dt-checkboxes", cellNodes).not(":disabled").prop("checked", isSelected);
                if ($.isFunction(ctx.aoColumns[colIdx].checkboxes.selectCallback)) {
                    ctx.aoColumns[colIdx].checkboxes.selectCallback(cellNodes, isSelected);
                }
            }
        },
        updateState: function() {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            self.updateStateCheckboxes({
                page: "all",
                search: "none"
            });
            $.each(self.s.columns, function(index, colIdx) {
                self.updateSelectAll(colIdx);
            });
        },
        updateStateCheckboxes: function(opts) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            dt.cells("tr", self.s.columns, opts).every(function(rowIdx, colIdx) {
                var cellData = this.data();
                var isCellSelectable = self.isCellSelectable(colIdx, cellData);
                if (ctx.checkboxes.s.data[colIdx].hasOwnProperty(cellData)) {
                    self.updateCheckbox(this, colIdx, true);
                    if (ctx.aoColumns[colIdx].checkboxes.selectRow && isCellSelectable) {
                        self.updateSelect(rowIdx, true);
                    }
                }
                if (!isCellSelectable) {
                    $("input.dt-checkboxes", this.node()).prop("disabled", true);
                }
            });
        },
        onClick: function(e, ctrl) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            var cellSelector;
            var $cell = $(ctrl).closest("td");
            if ($cell.parents(".DTFC_Cloned").length) {
                cellSelector = dt.fixedColumns().cellIndex($cell);
            } else {
                cellSelector = $cell;
            }
            var cell = dt.cell(cellSelector);
            var cellIdx = cell.index();
            var colIdx = cellIdx.column;
            if (!ctx.aoColumns[colIdx].checkboxes.selectRow) {
                cell.checkboxes.select(ctrl.checked);
                e.stopPropagation();
            } else {
                setTimeout(function() {
                    var cellData = cell.data();
                    var hasData = self.s.data[colIdx].hasOwnProperty(cellData);
                    if (hasData !== ctrl.checked) {
                        self.updateCheckbox(cell, colIdx, hasData);
                        self.updateSelectAll(colIdx);
                    }
                }, 0);
            }
        },
        onSelect: function(e, type, indexes) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (self.s.ignoreSelect) {
                return;
            }
            if (type === "row") {
                var colIdx = self.getSelectRowColIndex();
                if (colIdx !== null) {
                    var cells = dt.cells(indexes, colIdx);
                    self.updateData(cells, colIdx, (e.type === "select") ? true : false);
                    self.updateCheckbox(cells, colIdx, (e.type === "select") ? true : false);
                    self.updateSelectAll(colIdx);
                }
            }
        },
        onClickSelectAll: function(e, ctrl) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            var colIdx = null;
            var $th = $(ctrl).closest("th");
            if ($th.parents(".DTFC_Cloned").length) {
                var cellIdx = dt.fixedColumns().cellIndex($th);
                colIdx = cellIdx.column;
            } else {
                colIdx = dt.column($th).index();
            }
            dt.column(colIdx, {
                page: ((ctx.aoColumns[colIdx].checkboxes && ctx.aoColumns[colIdx].checkboxes.selectAllPages) ? "all" : "current"),
                search: "applied"
            }).checkboxes.select(ctrl.checked);
            e.stopPropagation();
        },
        onDraw: function(e) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx.oFeatures.bServerSide || ctx.oFeatures.bDeferRender) {
                self.updateStateCheckboxes({
                    page: "current",
                    search: "none"
                });
            }
            $.each(self.s.columns, function(index, colIdx) {
                self.updateSelectAll(colIdx);
            });
        },
        updateSelectAll: function(colIdx) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx.aoColumns[colIdx].checkboxes && ctx.aoColumns[colIdx].checkboxes.selectAll) {
                var cells = dt.cells("tr", colIdx, {
                    page: ((ctx.aoColumns[colIdx].checkboxes.selectAllPages) ? "all" : "current"),
                    search: "applied"
                });
                var $tableContainer = dt.table().container();
                var $checkboxesSelectAll = $('.dt-checkboxes-select-all[data-col="' + colIdx + '"] input[type="checkbox"]', $tableContainer);
                var countChecked = 0;
                var cellsData = cells.data();
                $.each(cellsData, function(index, cellData) {
                    if (self.s.data[colIdx].hasOwnProperty(cellData)) {
                        countChecked++;
                    }
                });
                if (ctx._fixedHeader) {
                    if (ctx._fixedHeader.dom["header"].floating) {
                        $checkboxesSelectAll = $('.fixedHeader-floating .dt-checkboxes-select-all[data-col="' + colIdx + '"] input[type="checkbox"]');
                    }
                }
                var isSelected;
                var isIndeterminate;
                if (countChecked === 0) {
                    isSelected = false;
                    isIndeterminate = false;
                } else {
                    if (countChecked === cellsData.length) {
                        isSelected = true;
                        isIndeterminate = false;
                    } else {
                        isSelected = true;
                        isIndeterminate = true;
                    }
                }
                $checkboxesSelectAll.prop({
                    "checked": isSelected,
                    "indeterminate": isIndeterminate
                });
                if ($.isFunction(ctx.aoColumns[colIdx].checkboxes.selectAllCallback)) {
                    ctx.aoColumns[colIdx].checkboxes.selectAllCallback($checkboxesSelectAll.closest("th").get(0), isSelected, isIndeterminate);
                }
            }
        },
        showInfoSelected: function() {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (!ctx.aanFeatures.i) {
                return;
            }
            var $output = $('<span class="select-info"/>');
            var add = function(name, num) {
                $output.append($('<span class="select-item"/>').append(dt.i18n("select." + name + "s", {
                    _: "%d " + name + "s selected",
                    0: "",
                    1: "1 " + name + " selected"
                }, num)));
            };
            var colIdx = self.getSelectRowColIndex();
            if (colIdx !== null) {
                var countRows = 0;
                for (var cellData in ctx.checkboxes.s.data[colIdx]) {
                    if (ctx.checkboxes.s.data[colIdx].hasOwnProperty(cellData)) {
                        countRows++;
                    }
                }
                add("row", countRows);
                $.each(ctx.aanFeatures.i, function(i, el) {
                    var $el = $(el);
                    var $existing = $el.children("span.select-info");
                    if ($existing.length) {
                        $existing.remove();
                    }
                    if ($output.text() !== "") {
                        $el.append($output);
                    }
                });
            }
        },
        isCellSelectable: function(colIdx, cellData) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx.checkboxes.s.dataDisabled[colIdx].hasOwnProperty(cellData)) {
                return false;
            } else {
                return true;
            }
        },
        getCellIndex: function(cell) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx._oFixedColumns) {
                return dt.fixedColumns().cellIndex(cell);
            } else {
                return dt.cell(cell).index();
            }
        },
        getSelectRowColIndex: function() {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            var colIdx = null;
            for (var i = 0; i < ctx.aoColumns.length; i++) {
                if (ctx.aoColumns[i].checkboxes && ctx.aoColumns[i].checkboxes.selectRow) {
                    colIdx = i;
                    break;
                }
            }
            return colIdx;
        },
        updateFixedColumn: function(colIdx) {
            var self = this;
            var dt = self.s.dt;
            var ctx = self.s.ctx;
            if (ctx._oFixedColumns) {
                var leftCols = ctx._oFixedColumns.s.iLeftColumns;
                var rightCols = ctx.aoColumns.length - ctx._oFixedColumns.s.iRightColumns - 1;
                if (colIdx < leftCols || colIdx > rightCols) {
                    dt.fixedColumns().update();
                }
            }
        }
    };
    Checkboxes.defaults = {
        selectRow: false,
        selectAll: true,
        selectAllPages: true,
        selectCallback: null,
        selectAllCallback: null,
        selectAllRender: '<input type="checkbox">'
    };
    var Api = $.fn.dataTable.Api;
    Api.register("checkboxes()", function() {
        return this;
    });
    Api.registerPlural("columns().checkboxes.select()", "column().checkboxes.select()", function(state) {
        if (typeof state === "undefined") {
            state = true;
        }
        return this.iterator("column-rows", function(ctx, colIdx, i, j, rowsIdx) {
            if (ctx.checkboxes) {
                var selector = [];
                $.each(rowsIdx, function(index, rowIdx) {
                    selector.push({
                        row: rowIdx,
                        column: colIdx
                    });
                });
                var cells = this.cells(selector);
                var cellsData = cells.data();
                var rowsSelectableIdx = [];
                selector = [];
                $.each(cellsData, function(index, cellData) {
                    if (ctx.checkboxes.isCellSelectable(colIdx, cellData)) {
                        selector.push({
                            row: rowsIdx[index],
                            column: colIdx
                        });
                        rowsSelectableIdx.push(rowsIdx[index]);
                    }
                });
                cells = this.cells(selector);
                ctx.checkboxes.updateData(cells, colIdx, state);
                ctx.checkboxes.updateCheckbox(cells, colIdx, state);
                if (ctx.aoColumns[colIdx].checkboxes.selectRow) {
                    ctx.checkboxes.updateSelect(rowsSelectableIdx, state);
                }
                if (ctx._oFixedColumns) {
                    setTimeout(function() {
                        ctx.checkboxes.updateSelectAll(colIdx);
                    }, 0);
                } else {
                    ctx.checkboxes.updateSelectAll(colIdx);
                }
                ctx.checkboxes.updateFixedColumn(colIdx);
            }
        }, 1);
    });
    Api.registerPlural("cells().checkboxes.select()", "cell().checkboxes.select()", function(state) {
        if (typeof state === "undefined") {
            state = true;
        }
        return this.iterator("cell", function(ctx, rowIdx, colIdx) {
            if (ctx.checkboxes) {
                var cells = this.cells([{
                    row: rowIdx,
                    column: colIdx
                }]);
                var cellData = this.cell({
                    row: rowIdx,
                    column: colIdx
                }).data();
                if (ctx.checkboxes.isCellSelectable(colIdx, cellData)) {
                    ctx.checkboxes.updateData(cells, colIdx, state);
                    ctx.checkboxes.updateCheckbox(cells, colIdx, state);
                    if (ctx.aoColumns[colIdx].checkboxes.selectRow) {
                        ctx.checkboxes.updateSelect(rowIdx, state);
                    }
                    if (ctx._oFixedColumns) {
                        setTimeout(function() {
                            ctx.checkboxes.updateSelectAll(colIdx);
                        }, 0);
                    } else {
                        ctx.checkboxes.updateSelectAll(colIdx);
                    }
                    ctx.checkboxes.updateFixedColumn(colIdx);
                }
            }
        }, 1);
    });
    Api.registerPlural("cells().checkboxes.enable()", "cell().checkboxes.enable()", function(state) {
        if (typeof state === "undefined") {
            state = true;
        }
        return this.iterator("cell", function(ctx, rowIdx, colIdx) {
            if (ctx.checkboxes) {
                var cell = this.cell({
                    row: rowIdx,
                    column: colIdx
                });
                var cellData = cell.data();
                if (state) {
                    delete ctx.checkboxes.s.dataDisabled[colIdx][cellData];
                } else {
                    ctx.checkboxes.s.dataDisabled[colIdx][cellData] = 1;
                }
                var cellNode = cell.node();
                if (cellNode) {
                    $("input.dt-checkboxes", cellNode).prop("disabled", !state);
                }
                if (ctx.aoColumns[colIdx].checkboxes.selectRow) {
                    if (ctx.checkboxes.s.data[colIdx].hasOwnProperty(cellData)) {
                        ctx.checkboxes.updateSelect(rowIdx, state);
                    }
                }
            }
        }, 1);
    });
    Api.registerPlural("cells().checkboxes.disable()", "cell().checkboxes.disable()", function(state) {
        if (typeof state === "undefined") {
            state = true;
        }
        return this.checkboxes.enable(!state);
    });
    Api.registerPlural("columns().checkboxes.deselect()", "column().checkboxes.deselect()", function(state) {
        if (typeof state === "undefined") {
            state = true;
        }
        return this.checkboxes.select(!state);
    });
    Api.registerPlural("cells().checkboxes.deselect()", "cell().checkboxes.deselect()", function(state) {
        if (typeof state === "undefined") {
            state = true;
        }
        return this.checkboxes.select(!state);
    });
    Api.registerPlural("columns().checkboxes.deselectAll()", "column().checkboxes.deselectAll()", function() {
        return this.iterator("column", function(ctx, colIdx) {
            if (ctx.aoColumns[colIdx].checkboxes) {
                ctx.checkboxes.s.data[colIdx] = {};
                this.column(colIdx).checkboxes.select(false);
            }
        }, 1);
    });
    Api.registerPlural("columns().checkboxes.selected()", "column().checkboxes.selected()", function() {
        return this.iterator("column", function(ctx, colIdx) {
            if (ctx.aoColumns[colIdx].checkboxes) {
                var data = [];
                $.each(ctx.checkboxes.s.data[colIdx], function(cellData, countRows) {
                    if (ctx.checkboxes.isCellSelectable(colIdx, cellData)) {
                        data.push(cellData);
                    }
                });
                return data;
            } else {
                return [];
            }
        }, 1);
    });
    Checkboxes.version = "1.2.9";
    $.fn.DataTable.Checkboxes = Checkboxes;
    $.fn.dataTable.Checkboxes = Checkboxes;
    $(document).on("preInit.dt.dtCheckboxes", function(e, settings, json) {
        if (e.namespace !== "dt") {
            return;
        }
        new Checkboxes(settings);
    });
    return Checkboxes;
}));

$(document).ready(function() {

    var _base_url = $("input[name=_base_url]").val();
    var width = $(window).width();



    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.avatar').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function() {
        readURL(this);
    });

    if(width > 768) {
        var table1 = $('#in-process-table').DataTable({
            'ajax': _base_url + '/user/processing_list',
            'columnDefs': [{
                'targets': 0,
                'render': function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<div class=""><input type="checkbox" class="dt-checkboxes"><label></label></div>';
                    }
    
                    return data;
                },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=""><input type="checkbox" class="dt-checkboxes"><label></label></div>'
                }
            }],
            'select': 'multi',
            'order': [
                [5, 'desc']
            ]
        });
    
        var table2 = $('#completed-list-table').DataTable({
            'ajax': _base_url + '/user/completed_list',
            'columnDefs': [{
                'targets': 0,
                'render': function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<div class=""><input type="checkbox" class="dt-checkboxes"><label></label></div>';
                    }
    
                    return data;
                },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=""><input type="checkbox" class="dt-checkboxes"><label></label></div>'
                }
            }],
            'select': 'multi',
            'order': [
                [4, 'desc']
            ]
        });

        var table3 = $('#payment-history-table').DataTable({
            'ajax': _base_url + '/user/payment_history',
            'columnDefs': [{
                'targets': 0,
                'render': function(data, type, row, meta) {
                    if (type === 'display') {
                        data = '<div class=""><input type="checkbox" class="dt-checkboxes"><label></label></div>';
                    }
    
                    return data;
                },
                'checkboxes': {
                    'selectRow': true,
                    'selectAllRender': '<div class=""><input type="checkbox" class="dt-checkboxes"><label></label></div>'
                }
            }],
            'select': 'multi',
            'order': [
                [1, 'desc']
            ]
        });
    }
    else {
        var table1 = $('#mobile-in-process-table').DataTable({
            'ajax': _base_url + '/user/processing_list/mobile',
            'columnDefs': [{
                'targets': 0,
            }],
        });
    
        var table2 = $('#mobile-completed-list-table').DataTable({
            'ajax': _base_url + '/user/completed_list/mobile',
            'columnDefs': [{
                'targets': 0,
            }],
        });
        var table3 = $('#mobile-payment-history-table').DataTable({
            'ajax': _base_url + '/user/payment_history/mobile',
            'columnDefs': [{
                'targets': 0,
            }],
        });
    }



    $("#show-btn").click(function(e) {
        e.preventDefault();
        if ($(this).text() == "show more") {
            $(this).text('show less');
        } else {
            $(this).text('show more');
        }
        $('.member-ship-showmore').toggleClass('hide');
    })

})