let json_data = [];
function get_data(data){
	json_data = data;
}

function Note(note,key,src){
	this.note  = note;
	this.key   = key;
	this.audio = new Audio(src);
	this.is_playing = false;

	this.play  = function(){
		if(this.is_playing){return;}
		this.audio.play();
		this.is_playing = true;
	}
	this.stop = function(){
		this.audio.pause();
		this.audio.currentTime = 0;
		this.is_playing = false;
	}
}

function Metronome(src,bpm){
	let interval  = 0
	let tick      = bpm;
	let sound     = new Audio(src);
	let isOn      = false;

	let update = function(){
		sound.pause();
		sound.currentTime = 0;
		sound.play();
	}

	this.start = function(){
		interval = setInterval(update,tick);
		isOn = true;
	}

	this.stop = function(){
		clearInterval(interval);
		isOn = false;
	}

	this.toggle = function(){
		if(isOn){
			this.stop();
		}else{
			this.start();
		}
	}

	this.setBpm = function(bpm){
		tick = bpm*10;
	}

	this.setSound = function(src){
		sound.src = src;
	}
}

function Listener(){
	let interval  = 0
	let tick      = bpm;
	let sound     = new Audio(src);
	let isOn      = false;

	let update = function(){
		sound.pause();
		sound.currentTime = 0;
		sound.play();
	}

	this.start = function(){
		interval = setInterval(update,tick);
		isOn = true;
	}

	this.stop = function(){
		clearInterval(interval);
		isOn = false;
	}

	this.toggle = function(){
		if(isOn){
			this.stop();
		}else{
			this.start();
		}
	}

	this.setSound = function(src){
		sound.src = src;
	}
}

$(document).ready(function(e){
	let octave    = 0;
	let notes     = json_data;
	let keys      = ['q','w','e','r','t','y','u','i','o','p','[',']'];
	let sound_obj = [];
	var metronome = new Metronome('/static/app_main/sound/metronome.wav',60);

	function genOctave(count){
		for(let i=0;i<count;i++){
			for(let j=0;j<notes.length;j++){
				for(note in notes[j]){
					if(j%12 == 0){//go up an octave
						octave++;
					}
					let btn       = "<button type='button' class='btn btn-primary";
					let white     = " white' ";
					let black     = " black' ";
					let key       = "key='"+keys[j]+"'/>";

					let sound = new Note(note,keys[j],notes[j][note])
					sound_obj.push(sound);

					if(j > 6){
						if(j%2 == 0){
							btn = btn+black+key;
						}else{
							btn = btn+white+key;
						}
					}else{
						if(j%2 == 0 && j != 6 || j == 5){
							btn = btn+white+key;
						}else{
							btn = btn+black+key;
						}
					}

					$('.keys').append(btn);
				}
			}
		}
	}
	genOctave(1);

	$('.keys button').click(function(){
		var key = $(this).attr('key');
		
		for(var i=0;i<sound_obj.length;i++){//loop Note's
			if(key == sound_obj[i].key){
				sound_obj[i].play();
				$('.container h1').html(sound_obj[i].note);
			}
		}
	})

	$('body').keydown(function(e){
		let kids = $('.keys').children();
		for(let i=0;i<kids.length;i++){
			if($(kids[i]).attr('key') == e.key){
				$(kids[i]).addClass('press');
				$(kids[i]).click();
			}
		}
	})

	$('body').keyup(function(e){
		kids = $('.keys').children();

		for(let i=0;i<kids.length;i++){
			if($(kids[i]).attr('key') == e.key){
				$(kids[i]).removeClass('press');

				for(let j=0;j<sound_obj.length;j++){
					if($(kids[i]).attr('key') == sound_obj[j].key){
						sound_obj[j].stop();
					}
				}
			}
		}
	})

	$('#metronome').click(function(e){
		if(!this.isOn){
			this.isOn = true;
			$(this).removeClass('red');
			$(this).addClass('green')
		}else{
			this.isOn = false;
			$(this).removeClass('green');
			$(this).addClass('red')
		}
		metronome.setBpm($('#bpm').val());
		metronome.toggle();
	})
})