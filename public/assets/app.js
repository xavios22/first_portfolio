var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// animation texte carousel


let btnall = document.getElementById("filtre-all");
let btnlanguage = document.getElementById("filtre-language");
let btndesign = document.getElementById("filtre-design");

let lang = document.getElementById("language");
let des = document.getElementById("design");

btnall.addEventListener("click", () => {
    lang.classList.remove("d-none");
    des.classList.remove("d-none");
});

btnlanguage.addEventListener("click", () => {
    lang.classList.remove("d-none");
    des.classList.add("d-none");
});

btndesign.addEventListener("click", () => {
    lang.classList.add("d-none");
    des.classList.remove("d-none");
});


/// fin d'animation filtre  skills 

let btnall2 = document.getElementById("filtre-all2");
let btndesign2 = document.getElementById("filtre-design2");
let btnsite = document.getElementById("filtre-site2");

let desg = document.getElementById("design2");
let sit = document.getElementById("site");

btnall2.addEventListener("click", () => {
    desg.classList.remove("d-none");
    sit.classList.remove("d-none");
});

btndesign2.addEventListener("click", () => {
    desg.classList.remove("d-none");
    sit.classList.add("d-none");
});

btnsite.addEventListener("click", () => {
    desg.classList.add("d-none");
    sit.classList.remove("d-none");
});