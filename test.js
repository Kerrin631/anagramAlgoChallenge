var string = 'NTYOPENDSGLCERAUJIR2PTSA'

function translate(str){
	var jsTechnologies = ['angular2', 'backbone', 'cappuccino', 'chaplin', 'echo', 'ember', 'jquery', 'node', 'socket', 'meteor', 'javascript', 'react', 'handlebars', 'typescript', 'redux', 'foundation', 'three', 'underscore', 'express', 'mongo', 'mongodb']
	var answers = []
	var split = str.toLowerCase().split('')
	debug(split)
	var word = ''
	var used = []

	for (var j = 0; j < jsTechnologies.length; j++) {
		var tech = jsTechnologies[j];
		for (var z = 0; z < used.length; z++) {
								split.push(used[z])
							}
							used = []
							word = ''
		
		for (var x = 0; x < jsTechnologies[j].length; x++){

			for (var i = 0; i <split.length; i++) {
				if (split[i] == tech[x]) {
					word += split[i];
					used.push(split.splice(i, 1))
					i = -1
					x = x + 1

					if (word == tech){
						answers.push(word)
						word = ''
						used = []
						// debug(answers + ' ANSWER')
					} 
				} 
			}
		}
	}
	debug(answers + ' ANSWER')
}

translate(string)

//Answers:
//NodeJS
//Angular2
//typescript


