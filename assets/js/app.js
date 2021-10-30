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
// warning   
if(body.clientWidth>720){
    alert(' HIEULeo: NoTiFy⛔⛔ This is Version 2.0 for mobile!!!')
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
            path: 'https://nhacpro.me/stream/w1vd.mp3',
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
            player.classList.toggle('dark', app.isThemeTogether)
            body.classList.toggle('body-dack',app.isThemeTogether)
        }

        // handle scroll.
        // const cd = $('.cd');
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
            // console.log([cd.style])
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
            // cdThumb.classList.add('spin')
        }
        audio.onpause = function(){
            title.textContent = ` ⏯️ ${app.currentSong.name}💝💝`;
            player.classList.remove('playing')
            app.isPlaying = false;
            cdThumbAnimation.pause()
            iconTitle.href = "./assets/img/PikPng.com_itunes-logo-png_555177.png";
            // cdThumb.classList.remove('spin')
        }

            // time-line:
        audio.ontimeupdate = function(){
            if(audio.duration){
                timeLine.value = ((audio.currentTime)) / ((audio.duration)) * 100;
            }
        }
        
        //seek song:
        timeLine.oninput = function(){
            const seekTime = ((timeLine.value) * ((audio.duration)))/100;
            audio.currentTime = seekTime;
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
                }, 500);
            }
        }

        //ramdom:
        random.onclick = function(){
            app.isRandom = !app.isRandom   // when click chage boolean-value;
            random.classList.toggle('active', app.isRandom);
        };

        //repeat:
        repeat.onclick = function(){
            app.isRepeat = !app.isRepeat   // when click chage boolean-value;
            repeat.classList.toggle('active', app.isRepeat);
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
                    // app.isPlaying?audio.play():audio.pause()
                }
            }

            //option
            if(optionseleter){
                natification.style.top = '5px';
                natification.style.opacity = '1';
                setTimeout(() => {
                    natification.style.opacity = '0';
                    natification.style.top = '-25px';
                }, 3000);
            }
        }



        //volume sounds:
        volumeBtn.onclick = function(){
            app.isVolumeInput = !app.isVolumeInput;
            volumeInput.classList.toggle('active', app.isVolumeInput)
        }
            // close when click document
        player.onclick =function(e){
            // const songSeleter = e.target.closest('.song:not(.active)');
            const clickDocumentVolumentplayer = e.target.closest('.player');
            const clickDocumentVolumentInpur = e.target.closest('.volume-input');
            const clickDocumentVolument = e.target.closest('.volume');
            console.log(e)
            if (clickDocumentVolumentplayer && !clickDocumentVolumentInpur && !clickDocumentVolument){
                app.isVolumeInput = !app.isVolumeInput;
                volumeInput.classList.remove('active', app.isVolumeInput)
            }
        }

            // link value vs volume:
        volumeInputID.oninput = function(){
            const changeValume = volumeInputID.value/100;
            audio.volume = changeValume;
        }
        
        volumeInputID.oninput = function(){
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
        }

        //click menu:
        menu.onclick = function(){
            natification.style.top = '5px';
                natification.style.opacity = '1';
                setTimeout(() => {
                    natification.style.opacity = '0';
                    natification.style.top = '-25px';
                }, 3000);
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
        // title.textContent = this.currentSong.name;
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

    start: function(){
        // this.getCurrentSong()
        this.defineProperties();
        this.render();
        this.handleEvens();
        this.loadCurrentSong();
    },
};

window.onload = function() {
    cdThumbAnimation.pause()
    setTimeout(() => {
        app.start()
    }, 1500);
}

document.onkeyup = function(e){
        console.log([e])
}
