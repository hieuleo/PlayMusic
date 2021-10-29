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
    songs : [
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
            name: 'The Nights',
            singer: 'Avicii',
            path: 'https://nhacpro.me/stream/dnh.mp3',
            image: './assets/img/playList/3.jpg',
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
            name: 'The Feels',
            singer: 'TWICE',
            path: 'https://nhacpro.me/stream/wk7c.mp3',
            image: './assets/img/playList/TheFeels-TWICE.jpg',
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

        // handle scroll.
        // const cd = $('.cd');
        cdThumbAnimation.pause()
        const cdWidth = cd.offsetWidth;
        document.onscroll = function(){
            const scrollList = window.scrollY || document.documentElement.scrollTop;
            const cdNewWidth = cdWidth - scrollList;
            cd.style.width =cdNewWidth > 0 ? cdNewWidth +'px': 0;
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
            title.textContent = `️PLAY 🎼️ : ${app.currentSong.name} 💝💝`;
            
            // cdThumb.classList.add('spin')
        }
        audio.onpause = function(){
            title.textContent = 'PAUSE ▶️ : Music mobile'
            player.classList.remove('playing')
            app.isPlaying = false;
            cdThumbAnimation.pause()
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
                audio.play();
            }else{
                app.nextCurrantSong();
                app.isPlaying?audio.play():audio.pause()
            }
        }

        // hand click prev
        prev.onclick = function(){
            if (app.isRandom){
                app.randomSong();
                audio.play();
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
    },

    //render list song
    render: function(){
        const htmls = this.songs.map((song, index) =>{
            return `
            <div class="song ${index === app.currentIndex ? "active" : ""}">
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
    },
    prevCurrantSong: function (){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1;
        }   
        this.loadCurrentSong()
        this.activeSong()
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

    start: function(){
        // this.getCurrentSong()
        this.defineProperties();
        this.render();
        this.handleEvens();
        this.loadCurrentSong();
    },
};

// if(body.clientWidth>720){
//     alert(' HIEULeo: NoTiFy⛔⛔ This is Version 2.1s for mobile!!!')
// }

window.onload = function() {
    cdThumbAnimation.pause()
    setTimeout(() => {
        app.start()
    }, 1200);
}