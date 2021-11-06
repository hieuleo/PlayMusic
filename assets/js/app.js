const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playList = $('.playlist');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio'); 
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const playing = $('.playing');
const timeLine = $('#progress');
const body = $('body');
const next = $('.btn-next');
const prev = $('.btn-prev');
const random = $('.btn-random');
const repeat = $('.btn-repeat');
const title = $('title');
const themeTogether = $('.theme-toggler');
const toggler =  $('.toggler');
const iconTitle = $('.icon-title');
const natification = $('.natification');
const menu = $('.menu');
const volumeBtn = $('.volume');
const volumeInput = $('.volume-input');
const volumeInputID = $('#volume-input');
const iconVolume = $$('.icon-volume');
const volumeMute = $('.volume-mute');
const volumeOff = $('.volume-off');
const volumeDown = $('.volume-down');
const volumeUp = $('.volume-up');
const currentVolume = $('.currentvolume');

// constants:
const KEY_LOCATION = 'SAVE_SETTING_LOCAL';

//const audio valume 
audio.volume = 0.05;

// style-volume-color:
var volumeStyle = 10;

//style-audio-color.
var audioStyle = 0;

// warning   
if(body.clientWidth>720){
    alert(' HIEULeo: NoTiFy⛔⛔ This is Version for mobile!!!')
}

// Animations: 
const cdThumbAnimation = cdThumb.animate([{transform: 'rotate(360deg)'}],
{duration: 18000,            // spin 18s
    iterations: Infinity,   // loop vo hang
});

//list-song
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isThemeTogether: true,
    isVolumeInput: false,
    
    songs : [
        {
            name: 'You Be Love',
            singer: 'Avicii, Billy Raffoul',
            path: 'https://nhacpro.me/stream/vsrn.mp3',
            image: './assets/img/playList/avicii.jpg',
        },
        {
            name: 'The Nights',
            singer: 'Avicii',
            path: 'https://nhacpro.me/stream/dnh.mp3',
            image: './assets/img/playList/3.jpg',
        },
            {
            name: 'The Feels',
            singer: 'TWICE',
            path: 'https://nhacpro.me/stream/wk7c.mp3',
            image: './assets/img/playList/TheFeels-TWICE.jpg',
        },
        {
            name: 'Tình Đầu',
            singer: 'Tăng Day Tân',
            path: 'https://nhacpro.me/stream/wix9.mp3',
            image: './assets/img/playList/1.jpg',
        },
        {
            name: 'Da Vu',
            singer: 'Tăng Day Tân',
            path: 'https://tainhacmienphi.biz/get/song/api/325962',
            image: './assets/img/playList/2.jfif',
        },
        {
            name: 'Counting Stars',
            singer: 'OneRepublic',
            path: 'https://tainhac123.com/listen/counting-stars-onerepublic.YbKoIdmnuSFy.html',
            image: './assets/img/playList/4.jpg',
        },
        {
            name: 'Lonely Together',
            singer: 'Avicii, Rita Ora, Alan Walker',
            path: 'https://nhacpro.me/stream/vm0v.mp3',
            image: './assets/img/playList/5.jpg',
        },
        {
            name: 'You Be Love',
            singer: 'Avicii, Billy Raffoul',
            path: 'https://nhacpro.me/stream/vsrn.mp3',
            image: './assets/img/playList/avicii.jpg',
        },
        {
            name: 'Wake Me Up',
            singer: 'Avicii',
            path: 'https://nhacpro.me/stream/w95c.mp3',
            image: 'https://images.genius.com/1fc1d6e03dbd8dd0d5f5b8d9c3d96ebd.741x741x1.jpg',
        },
        {
            name: 'Paradise',
            singer: 'Alan Walker, K-391, Boy In Space',
            path: 'https://nhacpro.me/stream/wk3h.mp3',
            image: './assets/img/playList/alan.jpg',
        },
        {
            name: 'All Falls Down',
            singer: ' Alan Walker, Noah Cyrus, Digital Farm Animals, Juliander',
            path: 'https://nhacpro.me/stream/w0tf.mp3',
            image: './assets/img/playList/AllFallsDown.jpg',
        },
        {
            name: 'Faded',
            singer: 'Alan Walker, Iselin Solheim',
            path: 'https://nhacpro.me/stream/1u3d.mp3',
            image: './assets/img/playList/Faded.jpg',
        },
        {
            name: 'Anh Nhà Ở Đâu Thế?',
            singer: ' AMEE, B Ray',
            path: 'https://nhacpro.me/stream/wbut.mp3',
            image: './assets/img/playList/amee.jpg',
        },
        {
            name: 'My Universe',
            singer: 'Coldplay, BTS',
            path: 'https://nhacpro.me/stream/wk5t.mp3',
            image: './assets/img/playList/Coldplay.jpg',
        },
        {
            name: 'aenergy ',
            singer: 'aespa',
            path: 'https://nhacpro.me/stream/wkb3.mp3',
            image: './assets/img/playList/aespa.jpeg',
        },
        {
            name: 'Từ thích thích đến thương thương',
            singer: 'AMEE',
            path: 'https://tainhac123.com/listen/tu-thich-thich-thanh-thuong-thuong-amee-ft-hoang-dung.9FctgvjTB77D.html',
            image: './assets/img/playList/amee2.png',
        },
        {
            name: 'Sao Anh Chưa Về Nhà',
            singer: 'AMEE',
            path: 'https://skymp3.net/listen/sao-anh-chua-ve-nha~amee-ricky-star~tsvwmc3bq98vwq',
            image: './assets/img/playList/Amee3.jpg',
        },
        {
            name: 'MAMA Boy ',
            singer: 'AMEE',
            path: 'https://tainhac123.com/listen/mama-boy-amee.HLZHKlOcsS4c.html',
            image: './assets/img/playList/amee4.png',
        },
        {
            name: 'Đen Đá Không Đường ',
            singer: 'AMEE',
            path: 'https://tainhac123.com/listen/den-da-khong-duong-rap-version-amee-ft-d-mex.9VjRoZ3fDYsV.html',
            image: './assets/img/playList/amee5.jpg',
        },
        {
            name: 'Ex\'s Hate Me',
            singer: 'B Ray,Masew,AMee',
            path: 'https://tainhac123.com/listen/exs-hate-me-b-ray-ft-masew-ft-amee.EEQuiAXZ6Dos.html',
            image: './assets/img/playList/amee6.jpg',
        },
        {
            name: 'Muộn Rồi Mà Sao Còn ',
            singer: 'Sơn Tùng M-TP',
            path: 'https://nhacpro.me/stream/whui.mp3',
            image: './assets/img/playList/son.jfif',
        },
        {
            name: 'Gene ',
            singer: 'GeneBinz,Touliver',
            path: 'https://tainhac123.com/listen/gene-binz-ft-touliver.uHVH2dQwWak6.html',
            image: './assets/img/playList/binz.jpg',
        },
        {
            name: 'Răng Khôn ',
            singer: 'Phí Phương Anh,RIN9',
            path: 'https://tainhac123.com/listen/rang-khon-phi-phuong-anh-ft-rin9.DS5NwsGBlUhU.html',
            image: './assets/img/playList/phiphuonganh.jpg',
        },
        {
            name: 'Waiting For Love ',
            singer: 'Avicii',
            path: 'https://tainhac123.com/listen/waiting-for-love-avicii.CTCrPh2Yblky.html',
            image: './assets/img/playList/avicii5.jpg',
        },
    ],
    
    //defineProperties methods
    defineProperties: function(){
        //currentSong begin.
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },
    
    //handleEvens 
    handleEvens: function(){
        //theme-mode:
        themeTogether.onclick = function(){
            app.isThemeTogether = !app.isThemeTogether;
            app.setConfig('isThemeTogether', app.isThemeTogether);
            player.classList.toggle('dark', app.isThemeTogether);
            body.classList.toggle('body-dack',app.isThemeTogether);
            volumeInputID.classList.toggle('color',app.isThemeTogether);
            app.handleVolumeStyle();
            app.handleAudioStyle();
        }

        // handle scroll.
        cdThumbAnimation.pause()
        const cdWidth = cd.offsetWidth;
        document.onscroll = function(){
            const scrollList = window.scrollY || document.documentElement.scrollTop;
            const cdNewWidth = cdWidth - scrollList;
            if (cdNewWidth < 48){
                cdThumb.style.border= '0.8px solid #ea7aa0';
            }
            if (cdNewWidth > 50){
                cdThumb.style.border= '2px solid #ea7aa0';
            }
            cd.style.width = cdNewWidth > 0 ? cdNewWidth +'px': 0;
            cd.style.opacity = cdNewWidth/cdWidth;
        };

        // handle click play
        playBtn.onclick = function(){
            if(app.isPlaying){
                audio.pause()
            }else{
                audio.play()
            }
        };
        
        // listening even play/pause
        audio.onplay = function(){
            player.classList.add('playing')
            app.isPlaying = true;
            cdThumbAnimation.play()
            title.textContent = ` ⏸️ ${app.currentSong.name} 🎼️`;
            iconTitle.href = "./assets/img/kisspng-computer-icons-itunes-portable-network-graphics-cl-web-store-5cdee593d8b936.5054044715581116358877.png";
        }
        audio.onpause = function(){
            title.textContent = ` ⏯️ ${app.currentSong.name}💝💝`;
            player.classList.remove('playing')
            app.isPlaying = false;
            cdThumbAnimation.pause()
            iconTitle.href = "./assets/img/PikPng.com_itunes-logo-png_555177.png";
        }

            // time-line:
        audio.ontimeupdate = function(){
            if(audio.duration){
                timeLine.value = ((audio.currentTime)) / ((audio.duration)) * 100;
            }
            app.handleAudioStyle();
        }
        
        //seek song:
        timeLine.oninput = function(){
            const seekTime = ((timeLine.value) * ((audio.duration)))/100;
            audio.currentTime = seekTime;
            app.handleAudioStyle();
        }
        
        //hand click next
        next.onclick = function(){
            if (app.isRandom){
                app.randomSong();
                app.isPlaying?audio.play():audio.pause()
            }else{
                app.nextCurrantSong();
                app.isPlaying?audio.play():audio.pause()
            }
        }

        // hand click prev
        prev.onclick = function(){
            if (app.isRandom){
                app.randomSong();
                app.isPlaying?audio.play():audio.pause()
            }else{
                app.prevCurrantSong();
                app.isPlaying?audio.play():audio.pause()
            }
        }

        //next end:
        audio.onended = function (){
            if (app.isRandom){
                app.randomSong();
                audio.play();
            }else if (app.isRepeat){
                audio.play();
            }else{
                cdThumbAnimation.play();
                player.classList.add('playing');
                setTimeout(() => {
                    app.nextCurrantSong();
                    audio.play();
                }, 100);
            }
        }

        //ramdom:
        random.onclick = function(){
            app.isRandom = !app.isRandom   // when click chage boolean-value;
            random.classList.toggle('active', app.isRandom);
            app.setConfig('isRandom', app.isRandom);
        };

        //repeat:
        repeat.onclick = function(){
            app.isRepeat = !app.isRepeat   // when click chage boolean-value;
            repeat.classList.toggle('active', app.isRepeat);
            app.setConfig('isRepeat', app.isRepeat);
        }


        // EVENT KEYBOARD:
        document.onkeyup = function(e){

            //next >>
            if(e.isComposing || e.keyCode === 39){
                if (app.isRandom){
                    app.randomSong();
                    app.isPlaying?audio.play():audio.pause()
                }else{
                    app.nextCurrantSong();
                    app.isPlaying?audio.play():audio.pause()
                }
            }
            
            //prev <<
            if(e.isComposing || e.keyCode === 37){
                if (app.isRandom){
                    app.randomSong();
                    app.isPlaying?audio.play():audio.pause()
                }else{
                    app.prevCurrantSong();
                    app.isPlaying?audio.play():audio.pause()
                }
            }
        }

        // Click seleter song:
        playList.onclick = function(e){
            const songSeleter = e.target.closest('.song:not(.active)');
            const optionseleter = e.target.closest('.option');
            if(songSeleter && !optionseleter){
                // handle songSeleter:
                if (songSeleter){
                    app.currentIndex = Number(songSeleter.dataset.index);
                    app.loadCurrentSong()
                    app.activeSong()
                    setTimeout(() => {
                        audio.play()
                    }, 300);
                }
            }

            //option
            if(optionseleter){
                app.natificationError();
            }
        }

        //volume sounds:
        volumeBtn.onclick = function(){
            app.isVolumeInput = !app.isVolumeInput;
            volumeInput.classList.toggle('active', app.isVolumeInput)
        }

        // close when click document
        player.onclick =function(e){
            const clickDocumentVolumentplayer = e.target.closest('.player');
            const clickDocumentVolumentInpur = e.target.closest('.volume-input');
            const clickDocumentVolument = e.target.closest('.volume');
            if (clickDocumentVolumentplayer && !clickDocumentVolumentInpur && !clickDocumentVolument){
                app.isVolumeInput = !app.isVolumeInput;
                volumeInput.classList.remove('active', !app.isVolumeInput)
            }
        }

        // link value vs volume:
        volumeInputID.oninput = function(){
            // disableScrolling()
            const changeValume = volumeInputID.value/100;
            audio.volume = changeValume;
            currentVolume.textContent = `${volumeInputID.value}/100`;
            if (volumeInputID.value == 0){
                for(i of iconVolume){
                    i.classList.remove('active');
                    volumeMute.classList.add('active')
                }
            }else if (volumeInputID.value < 20 && volumeInputID.value > 0){
                for(i of iconVolume){
                    i.classList.remove('active');
                    volumeOff.classList.add('active')
                }
            }else if (volumeInputID.value >= 20 && volumeInputID.value < 75){
                for(i of iconVolume){
                    i.classList.remove('active');
                    volumeDown.classList.add('active')
                }
            }else{
                i.classList.remove('active');
                volumeUp.classList.add('active')
            }
            
            // call style:
            app.handleVolumeStyle();
         }

        //click menu:
        menu.onclick = function(){
            app.natificationError();
        }
    },

    //render list song
    render: function(){
        const htmls = this.songs.map((song, index) =>{
            return `
            <div class="song ${index === app.currentIndex ? "active" : ""}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')"></div>
                <div class="body">
                  <h3 class="title">${song.name}</h3>
                  <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                  <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
        });
        playList.innerHTML = htmls.join('')
    },

    // load current song
    loadCurrentSong:function(){
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    // Next/ Prev:
    nextCurrantSong: function (){
        this.currentIndex++
        if(this.currentIndex > this.songs.length -1){
            this.currentIndex = 0
        }   
        this.loadCurrentSong()
        this.activeSong()
        this.scrollActiveSong()
    },
    prevCurrantSong: function (){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1;
        }   
        this.loadCurrentSong()
        this.activeSong()
        this.scrollActiveSong()
    },

    //random song:
    randomSong: function(){
        let currentIndexRandom;
        do {
            currentIndexRandom = Math.floor(Math.random() * this.songs.length)
        } while (currentIndexRandom == this.currentIndex)
        this.currentIndex = currentIndexRandom;
        this.loadCurrentSong()
        this.activeSong()
        this.scrollActiveSong()
    },

    // active song:
    activeSong: function(){
        var loopSongs = $$('.song');
        for (song of loopSongs){
                song.classList.remove('active')
        }
        const activeSong = loopSongs[this.currentIndex]
        activeSong.classList.add('active')
    },

    //scroll active song:
    scrollActiveSong: function(){   
        const elementSongActive = $('.song.active');
        if (this.currentIndex === 0 ) {
            setTimeout(() =>{ 
                elementSongActive.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center',
                })
                document.documentElement.scrollTop = 0
            },200)
        };

        if (this.currentIndex <= 3) {
            setTimeout(() =>{ 
                elementSongActive.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest',
                })
                // document.documentElement.scrollTop = 0
            },200)
        };
        setTimeout(() =>{ 
            elementSongActive.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
            })
        })        
    },

    //natification Error:
    natificationError: function(){
        natification.style.top = '5px';
        natification.style.opacity = '1';
        setTimeout(() => {
            natification.style.opacity = '0';
            natification.style.top = '-25px';
        }, 3000);
    },

    // audio style
    handleAudioStyle: function(){
        if (app.isThemeTogether){
            audioStyle = (timeLine.value-timeLine.min)/(timeLine.max-timeLine.min)*100
            timeLine.style.background = 'linear-gradient(to right, #7200a1de 0%, #7200a1de ' + audioStyle + '%, #fff ' + audioStyle + '%, white 100%)'
        }
        if(!app.isThemeTogether){
            audioStyle = (timeLine.value-timeLine.min)/(timeLine.max-timeLine.min)*100
            timeLine.style.background = 'linear-gradient(to right, #f9c6c5 0%, #f9c6c5 ' + audioStyle + '%, #fff ' + audioStyle + '%, white 100%)'
        }
    },

    //volume style:
    handleVolumeStyle: function(){
        if (app.isThemeTogether){
            volumeStyle = (volumeInputID.value-volumeInputID.min)/(volumeInputID.max-volumeInputID.min)*100
            volumeInputID.style.background = 'linear-gradient(to right, #7200a1de 0%, #7200a1de ' + volumeStyle + '%, #fff ' + volumeStyle + '%, white 100%)'
        }
        if(!app.isThemeTogether){
            volumeStyle = (volumeInputID.value-volumeInputID.min)/(volumeInputID.max-volumeInputID.min)*100
            volumeInputID.style.background = 'linear-gradient(to right, #f9c6c5 0%, #f9c6c5 ' + volumeStyle + '%, #fff ' + volumeStyle + '%, white 100%)'
        }
    },


    // handle localStorage:
    // config
    config: JSON.parse(localStorage.getItem('KEY_LOCATION')) || {},

        //setConfig
    setConfig: function(key, value) {   
        this.config[key] = value;
        localStorage.setItem('KEY_LOCATION', JSON.stringify(this.config));
    },
        // load config:
    loadLocalConfig: function() {
        this.isThemeTogether = this.config.isThemeTogether;
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
    },
        // render views config localStorage:
    renderLocalStorage: function() {
        player.classList.toggle('dark', app.isThemeTogether);
        body.classList.toggle('body-dack',app.isThemeTogether);
        volumeInputID.classList.toggle('color',app.isThemeTogether);
        random.classList.toggle('active', app.isRandom);
        repeat.classList.toggle('active', app.isRepeat);
    },

    start: function(){
        // this.getCurrentSong()
        this.loadLocalConfig();
        this.renderLocalStorage();
        this.defineProperties();
        this.render();
        this.handleEvens();
        this.loadCurrentSong();
        this.handleAudioStyle();
        this.handleVolumeStyle();
    },
};

window.onload = function() {
    cdThumbAnimation.pause()
    setTimeout(() => {
        app.start()
        volumeBtn.style.opacity = '1'
    }, 1500);
}



//checks key:
// document.onkeyup = function(e){
//         console.log([e])
// }


// disableScrolling:
// function disableScrolling(){
//     var x=window.scrollX;
//     var y=window.scrollY;
//     window.onscroll=function(){window.scrollTo(x, y);};
// }


//enableScrolling: 
// function enableScrolling(){
//     window.onscroll=function(){};
// }
