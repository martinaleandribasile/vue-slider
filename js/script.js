
var app = new Vue({
    el: "#app",
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        activeIndexImg: 0,
        display: "",
        interval: ""
    },
    methods: {
        assignActiveImg: function (i) {
            if (this.activeIndexImg === i) {
                display = "d-block"
                return true
            } else {
                display = "d-none"
                return false
            }
        },
        prevImg() {
            if (this.activeIndexImg === 0) {
                this.activeIndexImg = this.slides.length - 1;
            } else {
                this.activeIndexImg--;
            }
        },
        nextImg() {
            if (this.activeIndexImg === this.slides.length - 1) {
                this.activeIndexImg = 0;
            } else {
                this.activeIndexImg++;
            }
        },
        timingFunction: function () {
            this.interval = setInterval(this.nextImg, 2000);
            return this.interval
        },
        stopInterval: function () {
            clearInterval(this.interval)
        }
    },
    created: function () {
        this.timingFunction()
    }

});
