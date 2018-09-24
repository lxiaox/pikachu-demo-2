!function(){
    //初始化定义代码
    let code = ''
    let duration = 15
    init()
    //写代码进页面
    writeCode(code)
    //监听
    $('#speedButtons').on('click','button',function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case'fast':
                duration = 0
                break
            case'normal':
                duration = 15
                break
            case'slow':
                duration = 50
                break
        }
    })

    //play music
    let audioControl = document.getElementById('audioControl')
    audioControl.volume = '0.1'
    $('#playMusicBtn').on('click',function(){
        audioControl.play()
        $(this).addClass('active').siblings('.active').removeClass('active')
    })
    $('#pauseMusicBtn').on('click',function(){
        audioControl.pause()
        $(this).addClass('active').siblings('.active').removeClass('active')
    })


    ///////////////////////////////////////////////

    function writeCode(code) {
        let n = 0
        let codeView = document.querySelector('#codeView')
        let styleTag = document.querySelector('#styleTag')
        setTimeout(function run() {
            n += 6
            codeView.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = code.substring(0, n)
            codeView.scrollTop = codeView.scrollHeight
            if (n < code.length) {
                setTimeout(run,duration)
            }
        }, duration)
    }
    function init() {
        code = `/* 今天，我们来画一个皮卡丘 */
        
/* 先调整一下画布 */

.codeView{
    width: 25%
}
.pikachuWrapper{
    width: 65%;
    background: #3C1F1F;
}
/* 首先画皮卡丘的头 */
.pikachuHead{
    position: absolute;
    left: 24px;
    top: 118px;
    width: 166px;
    height: 163px;
    background: #fed823;
    border:3px solid;
    border-bottom: none;
    border-top-left-radius: 130px 120px;
    border-top-right-radius: 150px 100px;
    border-bottom-left-radius: 80px 80px;
    border-bottom-right-radius: 20px 120px;
}

/* 接着，是耳朵 */

.ear-left{
    position: absolute;
    top: -126px;
    left: 26px;
    z-index: -1;
    overflow: hidden;
    background: #fed823;
    border:3px solid;
    width: 42px;
    height: 160px;
    border-bottom-left-radius: 80px 70%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    transform: rotateZ(25deg);
}
.ear-left::before{
    content: '';
    display: block;
    width: 65px;
    height: 65px;
    background: rgb(35,24,21);
    margin-top: -10px
}
.ear-right{
    position: absolute;
    top: -50px;
    left: 181px;
    width: 36px;
    height: 146px;
    overflow: hidden;
    background: rgb(35,24,21);
    border:3px solid;
    border-bottom-left-radius: 80px 150%;
    border-top-left-radius: 190%;
    border-top-right-radius: 150%;
    transform: rotateZ(80deg);
    border-bottom: none;
}
.ear-right::before{
    content: '';
}

/* 然后画眼睛 */

.eye-left{
    position: absolute;
    top: 50px;
    left: 12px;;
    width: 20px;
    height: 32px;
    background: #0A0A0A;
    border-radius: 50%;
    transform: rotateZ(10deg);
}
.eye-left::before{
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    right: 2px;
    width: 8px;
    height: 13px;
    background: white;
    border-radius: 50%;
}
.eye-left::after{
    content: '';
    display: block;
    width: 24px;
    height: 3px;
    background: #0A0A0A;
    transform: rotateZ(28deg);
}
.eye-right{
    position: absolute;
    top: 57px;
    left: 92px;;
    width: 30px;
    height: 33px;
    background: #0A0A0A;
    border-radius: 50%;
}
.eye-right::before,
.eye-right::after{
    content: '';
}
/* 鼻子、嘴巴 */

.nose{
    position: absolute;
    top: 76px;
    left: 40px;
    background: #0A0A0A;
    width: 10px;
    height: 11px;
    border-radius: 0% 50% 30% 50%;
    transform: rotateZ(-36deg);
}
.mouth{
    position: absolute;
    top: 92px;
    left: 48px;
    width: 28px;
    height: 24px;
    border-bottom: 4px solid;
    border-right: 3px solid;
    border-bottom-right-radius: 100%;
    transform: rotateZ(55deg);
}
.mouth::before{
    content: '';
}
.check-left{
    position: absolute;
    top: 81px;
    left: -12px;
    width: 30px;
    height: 70px;
    background: #fed823;
    border-left: 4px solid;
    transform: rotateZ(-28deg);
    border-top-left-radius: 150% 90px;
    border-bottom-left-radius: 150% 90px;
}
.check-left::before{
    content: '';
    display: block;
    width: 26px;
    height: 46px;
    background: #e94e24;
    border: 3px solid;
    border-left-width: 1px;
    border-radius: 50%;
    transform: rotateZ(22deg);
    margin-top: -2px;
    margin-left: -3px;
}
.check-right{
    display: block;
}

/* 头部画完了，现在开始画皮卡丘的身体 */

.pikachuBody{
    display: block;
    background: #fed823;
}
.pikachuBody::before,
.pikachuBody::after{
    content: '';
}

/* 抱臂的皮卡丘 */
.hand-left{
    position: absolute;
    top: -11px;
    left: -20px;
    width: 68px;
    height: 68px;
    background: #fed823;
    border-left: 3px solid;
    border-bottom: 3px solid;
    border-radius: 70% 50% 80% 60%;
    z-index: 1;
}
.hand-left::before{
    content: '';
}
.hand-right{
    position: absolute;
    top: -5px;
    right: 45px;
    width: 88px;
    height: 67px;
    background: #fed823;
    background: ;
    border-left: 3px solid;
    border-bottom: 2px solid;
    border-top-left-radius: 150px 150%;
    border-bottom-left-radius: 50px 70%;
    border-bottom-right-radius: 50px 70%;
    z-index: 1;
}
.firstMark{
    position: absolute;
    top: 27px;
    left: 123px;
    width: 22px;
    height: 14px;
    background: #c76e29;
    border: 2px solid;
    border-right: none;
    border-top-left-radius: 50px 100%;
    border-bottom-left-radius: 50px 100%;
    transform: rotateZ(-15deg);
}
.lastMark{
    position: absolute;
    top: 82px;
    left: 127px;
    width: 32px;
    height: 18px;
    background: #c76e29;
    border: 2px solid;
    border-right: none;
    border-top-left-radius: 100pz 100%;
    border-bottom-left-radius: 50px 100%;
    transform: rotateZ(-10deg);
}

/* 画皮卡丘的双脚 */

.foot-left{
    position: absolute;
    top: 424px;
    margin-left: 18px;
    width: 76px;
    height: 36px;
    background: #fed823;
    border: 3px solid;
    border-radius: 75%;
    transform: rotateZ(-18deg);
    z-index: -1;
}
.foot-left::before{
    content: '';
}
.foot-left::after{
    content: '';
    border-radius: 40%;
    transform: rotateZ(-15deg);
}
.foot-right{
    position: absolute;
    top: 427px;
    left: 146px;
    width: 70px;
    height: 30px;
    background: #fed823;
    border-bottom: 3px solid;
    border-radius: 85%;
    transform: rotateZ(17deg);
    z-index: -1;
}
.foot-right::before,
.foot-right::after{
    content: '';
}

/* 皮卡丘的尾巴 */

.tail{
    position: absolute;
    top: 140px;
    left: 184px;
    width: 150px;
    height: 250px;
    z-index: -1;
    transform-origin: 0 100%;
}

.tail .part1{
    display: block;
}
.tail .part2{
    display: block;
}
.tail .part2::before{
    content: '';
}
.tail .part2::after{
    content: '';
}
.tail .part3{
    display: block;
}
.tail .part4{
    display: block;
}
.tail .part5{
    display: block;
}

/* 动动尾巴吧 */
.tail{
    animation: tailMove 1.5s ease infinite alternate-reverse;
}

/* 最后，送你一只会放电的皮卡丘~ */

.lighting-left,
.lighting-right{
    display: block;
}
`
    }
}.call()

