﻿Vue.component(`hj-contant`, {

    props: [`externalPage`],

    data: function () {

        return ({

            postion: 0,
            pagebase: null,
            pagenumber: "1",


        })

    },



    template:
        ` <div style="margin-top:2px;margin-left:10px;">
                <div class="row">

                    <span type="button" style="color:blue"  id="cfirst" v-on:click="cfirst()"> <<  </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <span type="button"  style="color:blue" id="cnext" v-on:click="cnext()"> >    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <span type="button"  style="color:blue" id="cprevious" v-on:click="cprevious()"> <    </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <span type="button"  style="color:blue" id="clast" v-on:click="clast()"> >>   </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>شماره  صفحه: {{pagenumber}}</label>

                </div>
                <div class="row">
                    <iframe v-bind:src="externalPage[postion].serverPath" style="width:100%;height:650px">1</iframe>
                </div>
            </div>`,



    methods: {
        cfirst() {
            this.postion = 0;
            this.pagebase = this.externalPage[this.postion].serverPath;
            this.pagenumber = this.externalPage[this.postion].pageNumber;
        },
        cnext() {

            if (this.postion == this.externalPage.length - 1) {
                this.pagenumber = this.externalPage[this.postion].pageNumber;
                return;
            }
            else {
                this.postion++;
                this.pagenumber = this.externalPage[this.postion].pageNumber;

            }
            this.pagebase = this.externalPage[this.postion].serverPath;
            this.pagenumber = this.externalPage[this.postion].pageNumber;
        },
        cprevious() {
            if (this.postion == 0) {
                return;
            }
            else {
                this.postion--;
                this.pagenumber = this.externalPage[this.postion].pageNumber;
            }
            this.pagenumber = this.externalPage[this.postion].pageNumber;
            this.pagebase = this.externalPage[this.postion].serverPath;

        },
        clast() {
            this.pagenumber = this.externalPage[this.externalPage.length - 1].pageNumber;
            this.pagebase = this.externalPage[this.externalPage.length - 1].serverPath;
            this.postion = this.externalPage.length - 1;
        }
    },
    created: function () {
    },

})

Vue.component(`hj-movies`, {

    props: [`externalPage`],

    data: function () {

        return ({
            postion: 0,
            pagebase: null,
            pagenumber: "1",
        })

    },

 

    template:
        ` <div style="margin-top:2px;">
              
                <div class="row"  >
                <div class="col-6" v-for="item in externalPage">
               
                    <video controls="controls"   style="width:100%;height:200px"  ><source v-bind:src="item.serverPath" type="video/mp4"/></video>
                 <label>  فیلم {{item.pageNumber}}</label>
                </div>
                </div>
            </div>`,



    methods: {
        cfirst() {
            this.postion = 0;
            this.pagebase = this.externalPage[this.postion].serverPath;
            this.pagenumber = this.externalPage[this.postion].pageNumber;
        },
        cnext() {

            if (this.postion == this.externalPage.length - 1) {
                this.pagenumber = this.externalPage[this.postion].pageNumber;
                return;
            }
            else {
                this.postion++;
                this.pagenumber = this.externalPage[this.postion].pageNumber;

            }
            this.pagebase = this.externalPage[this.postion].serverPath;
            this.pagenumber = this.externalPage[this.postion].pageNumber;
        },
        cprevious() {
            if (this.postion == 0) {
                return;
            }
            else {
                this.postion--;
                this.pagenumber = this.externalPage[this.postion].pageNumber;
            }
            this.pagenumber = this.externalPage[this.postion].pageNumber;
            this.pagebase = this.externalPage[this.postion].serverPath;

        },
        clast() {
            this.pagenumber = this.externalPage[this.externalPage.length - 1].pageNumber;
            this.pagebase = this.externalPage[this.externalPage.length - 1].serverPath;
            this.postion = this.externalPage.length - 1;
        }
    },
    created: function () {

    },

})

Vue.component(`epub`, {

    props: [`externalPage`],

    data: function () {

        return ({
            myiFrame: null,
            doc: null,

        })

    },

    template:
        ` 
<div id="app">
    <div class="row">
        <div class="col-2" id="gg">

        </div>
        <div class='col-6' id="settingsfull">

            <svg id="showsettings" fill="#000000"  viewBox="0 0 30 30" width="30px" height="30px">
                <path d="M27,14h-0.172c-0.478,0-0.904-0.337-0.98-0.809c-0.037-0.229-0.081-0.456-0.132-0.68c-0.106-0.464,0.158-0.933,0.597-1.115l0.156-0.065c0.51-0.211,0.753-0.796,0.541-1.307v0c-0.211-0.51-0.796-0.753-1.307-0.541l-0.16,0.066c-0.441,0.183-0.961,0.035-1.214-0.37c-0.122-0.196-0.25-0.388-0.384-0.576c-0.277-0.388-0.213-0.924,0.124-1.261l0.122-0.122c0.391-0.391,0.391-1.024,0-1.414l0,0c-0.391-0.391-1.024-0.391-1.414,0L22.656,5.93c-0.337,0.337-0.873,0.401-1.261,0.124c-0.188-0.134-0.38-0.262-0.576-0.384c-0.405-0.252-0.553-0.773-0.37-1.214l0.066-0.16c0.211-0.51-0.031-1.095-0.541-1.307c-0.51-0.211-1.095,0.031-1.307,0.541l-0.065,0.156c-0.182,0.439-0.651,0.703-1.115,0.597c-0.224-0.051-0.451-0.095-0.68-0.132C16.337,4.076,16,3.65,16,3.172V3c0-0.552-0.448-1-1-1s-1,0.448-1,1v0.172c0,0.478-0.337,0.904-0.809,0.98c-0.229,0.037-0.456,0.081-0.68,0.132c-0.464,0.106-0.933-0.158-1.115-0.597l-0.065-0.156c-0.211-0.51-0.796-0.753-1.307-0.541c-0.51,0.211-0.753,0.796-0.541,1.307l0.066,0.16C9.733,4.897,9.586,5.418,9.18,5.67C8.984,5.792,8.792,5.92,8.605,6.053C8.217,6.33,7.681,6.267,7.344,5.93L7.222,5.808c-0.391-0.391-1.024-0.391-1.414,0l0,0c-0.39,0.391-0.39,1.024,0,1.414L5.93,7.344C6.267,7.681,6.33,8.216,6.053,8.605C5.92,8.792,5.792,8.984,5.67,9.18C5.418,9.586,4.897,9.733,4.456,9.55l-0.16-0.066c-0.51-0.211-1.095,0.031-1.307,0.541v0c-0.211,0.51,0.031,1.095,0.541,1.307l0.156,0.065c0.439,0.182,0.703,0.651,0.597,1.115c-0.051,0.224-0.095,0.451-0.132,0.68C4.076,13.663,3.65,14,3.172,14H3c-0.552,0-1,0.448-1,1v0c0,0.552,0.448,1,1,1h0.172c0.478,0,0.904,0.337,0.98,0.809c0.037,0.229,0.081,0.456,0.132,0.68c0.106,0.464-0.158,0.933-0.597,1.115l-0.156,0.065c-0.51,0.211-0.753,0.796-0.541,1.307v0c0.211,0.51,0.796,0.753,1.307,0.541l0.16-0.066c0.441-0.183,0.961-0.035,1.214,0.37c0.122,0.196,0.25,0.388,0.384,0.576c0.277,0.388,0.213,0.924-0.124,1.261l-0.122,0.122c-0.391,0.391-0.391,1.024,0,1.414s1.024,0.391,1.414,0l0.122-0.122c0.337-0.337,0.873-0.401,1.261-0.124c0.188,0.134,0.38,0.262,0.576,0.384c0.405,0.252,0.553,0.773,0.37,1.214l-0.066,0.16c-0.211,0.51,0.031,1.095,0.541,1.307c0.51,0.211,1.095-0.031,1.307-0.541l0.065-0.156c0.182-0.439,0.651-0.703,1.115-0.597c0.224,0.051,0.451,0.095,0.68,0.132C13.663,25.924,14,26.35,14,26.828V27c0,0.552,0.448,1,1,1s1-0.448,1-1v-0.172c0-0.478,0.337-0.904,0.809-0.98c0.229-0.037,0.456-0.081,0.68-0.132c0.464-0.106,0.933,0.158,1.115,0.597l0.065,0.156c0.211,0.51,0.796,0.753,1.307,0.541c0.51-0.211,0.753-0.796,0.541-1.307l-0.066-0.16c-0.183-0.441-0.035-0.961,0.37-1.214c0.196-0.122,0.388-0.25,0.576-0.384c0.388-0.277,0.924-0.213,1.261,0.124l0.122,0.122c0.391,0.391,1.024,0.391,1.414,0s0.391-1.024,0-1.414l-0.122-0.122c-0.337-0.337-0.401-0.873-0.124-1.261c0.134-0.188,0.262-0.38,0.384-0.576c0.252-0.405,0.773-0.553,1.214-0.37l0.16,0.066c0.51,0.211,1.095-0.031,1.307-0.541v0c0.211-0.51-0.031-1.095-0.541-1.307l-0.156-0.065c-0.439-0.182-0.703-0.651-0.597-1.115c0.051-0.224,0.095-0.451,0.132-0.68C25.924,16.337,26.35,16,26.828,16H27c0.552,0,1-0.448,1-1v0C28,14.448,27.552,14,27,14z M15,23c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S19.418,23,15,23z" />
                <path d="M15 14H24V16H15z" />
                <path d="M8.25 10.103H17.25V12.103H8.25z" transform="rotate(60 12.75 11.103)" />
                <path d="M8.125 17.681H17.625V19.681H8.125z" transform="rotate(120 12.875 18.68)" />
                <path d="M15 13A2 2 0 1 0 15 17A2 2 0 1 0 15 13Z" />
            </svg>
            <div style="font-size:8px; color :#808080">تنظیمات</div>
            <section id="settings">
                <ul>
                    <li id="shabnam" v-on:click="shabnam()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br>شبنم</a></li>
                    <li id="bnazanin" v-on:click="bnazanin()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br> نازنین</a></li>
                    <li id="tahoma" v-on:click="tahoma()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br>تاهما</a></li>
                    <li id="yekan" v-on:click="yekan()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br>یکان</a></li>
                    <li id="mitra" v-on:click="mitra()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br>میترا</a></li>
                    <li id="Arial" v-on:click="Arial()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br></a>آریا</li>
                    <li id="Verdana" v-on:click="Verdana()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br></a>وردانا</li>
                </ul>
                <ul>
                    <li id="black" v-on:click="black()" class="round-red-small" style="background-color:#5c4343"><a style="color:white"><br>الف</a></li>
                    <li id="blacksolid" v-on:click="blacksolid()" class="round-red-small" style="background-color:black"><a style="color:white"><br>الف</a></li>
                    <li id="white" v-on:click="white()" class="round-red-small" style="background-color:white;color:black"><a style="color:black"><br>الف</a></li>
                    <li id="blue" v-on:click="blue()" class="round-red-small" style="background-color:#f2e5cb;color:black"><a style="color:black"><br>الف</a></li>
                    <li id="green" v-on:click="green()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a style="color:black"><br>الف</a></li>
                </ul>

                <ul>
                    <li id="larg" v-on:click="larg()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br>بزرگ</a></li>
                    <li id="medium" v-on:click="medium()" class="round-red-small" style="background-color:#c0f7b8;color:black"><a><br>معمولی</a></li>
                </ul>
            </section>
        </div>
    </div>
    <div class="row">

        <div class="col-2">

        </div>
        <div class="col-8 ">

            <iframe v-bind:src="externalPage" id="iframeID" style="height:1040px;
        width: 100%;
"></iframe>
        </div>
        <div class="col-2">

        </div>
    </div>
</div>
`,

    methods: {
        black() {

            $('#iframeID').css('background-color', '#5c4343');
            doc.body.innerHTML = doc.body.innerHTML + '<style>.WordSection1{background-color:#5c4343; } .WordSection1 span{color:white!important;}</style>';
        },
        blacksolid() {
            $('#iframeID').css('background-color', 'black');
            doc.body.innerHTML = doc.body.innerHTML + '<style>.WordSection1{background-color:black; } .WordSection1 span{color:white!important;}</style>';
        },
        white() {
            $('#iframeID').css('background-color', 'white');
            doc.body.innerHTML = doc.body.innerHTML + '<style>.WordSection1{background-color:white; } .WordSection1 span{color:black!important;}</style>';
        },

        blue() {
            $('#iframeID').css('background-color', '#f2e5cb');
            doc.body.innerHTML = doc.body.innerHTML + '<style>.WordSection1{background-color:#f2e5cb; } .WordSection1 span{color:black!important;}</style>';
        },
        green() {
            $('#iframeID').css('background-color', '#c0f7b8');
            doc.body.innerHTML = doc.body.innerHTML + '<style>.WordSection1{background-color:#c0f7b8; } .WordSection1 span{color:black!important;}</style>';
        },
        larg() {
            $('#iframeID').css('transform', 'scale(1.1)')
        },
        medium() {
            $('#iframeID').css('transform', '')
        },
        shabnam() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'Shabnam';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/Shabnam.woff') format('woff');}   .WordSection1 span{font-family:Shabnam !important;} </style>";

        },
        bnazanin() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'BNazanin';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/BNazanin.woff') format('woff');}   .WordSection1 span{font-family:BNazanin !important;} </style>";

        },
        tahoma() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'BNazanin';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/BNazanin.woff') format('woff');}   .WordSection1 span{font-family:Tahoma !important;} </style>";

        },
        yekan() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'YekanWeb-Regular';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/YekanWeb-Regular.woff') format('woff');}   .WordSection1 span{font-family:YekanWeb-Regular !important;} </style>";

        },
        mitra() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'BMitra';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/BMitra.woff') format('woff');}   .WordSection1 span{font-family:BMitra !important;} </style>";

        },
        Arial() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'BNazanin';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/BNazanin.woff') format('woff');}   .WordSection1 span{font-family:Arial !important;} </style>";

        },
        Verdana() {
            doc.body.innerHTML = doc.body.innerHTML + "<style>    @@font-face {font-family: 'BNazanin';font-style: normal;font-weight: normal;font-variant: normal;src: url('../fonts/BNazanin.woff') format('woff');}   .WordSection1 span{font-family:Verdana !important;} </style>";

        },

    },
    mounted: function () {
        $("#settings").hide();
        $("#showsettings").click(function () {
            $("#settings").slideToggle();
        });
        window.onload = function () {
            this.myiFrame = document.getElementById("iframeID");
            doc = this.myiFrame.contentDocument;
            doc.body.innerHTML = doc.body.innerHTML + '<style> .WordSection1 {background-color: #f7eedc;}</style>';
        }

    },

})



