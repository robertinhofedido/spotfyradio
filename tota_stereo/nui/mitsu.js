$("body").hide()


$(() => { window.addEventListener("message",function(event){

    if (event.data.abrir != undefined){
        let estatuses = event.data.abrir
        if( estatuses){
            $("body").show()
        }else{
            $("body").hide()
        }
    }
    let selected = 0;

    $(function () {
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $("body").fadeOut();
                $.post('http://tota_stereo/fechar', JSON.stringify({}));
            }
        });
    });



   


    $("#play").click(()=>{console.log("clike")})
        //$("#textInput").
        //vai setar o tempo da musica pegar do lua
    $("#botaolupe").click(()=>{$.post("http://tota_stereo/coisas", JSON.stringify({type: 'pesquisa', param: $("#textInput").val() })); $(this).blur(); });
    
    $(document).keypress(function(e) {
        if(e.which == 13) $('#botaolupe').click();
    });
    
    $('play').click(function(e) {
        alert(this.innerHTML);
    });
    
    
    // if (event.keyCode === 13) {
    //     event.preventDefault();
    //     document.getElementById("botaolupe").click();
    //    }


        //vai setar o volume e jogar pro lua
    $("#myRange").click(()=>{console.log($("#myRange").val())})

    window.addEventListener('message', function (event) {
        if (event.data.type == "open") { 
            for (let i in event.data.msc) {
                let playermsc = event.data.msc[i];
                changeProgress(playermsc);
            }
        }
     })

    const progressbar = document.querySelector(".progress");
    const changeProgress = (progress) => {
    progressbar.style.width = `${progress}%`;
    };
    let botplay = document.getElementById("play")
    let bota = 1
    
    $("#play").click(()=>{
        
        if(bota == 1 ){
            bota = 0
            $.post("http://tota_stereo/pararmsc")
            botplay.style.backgroundImage = "url('https://media.discordapp.net/attachments/759623381543813192/840087165404577842/play.png')"
        }else{
            botplay.style.backgroundImage = "url('https://media.discordapp.net/attachments/759623381543813192/840087164351021066/parar.png')"
            console.log("tocar musica")
            bota = 1
        }   
    })
    
})})
