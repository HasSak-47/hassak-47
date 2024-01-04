const projects = {
	"LyVim": {"name": "ly-nvim", "progress" : false},
    "Monitor": {"name": "monitor", "progress" : false},
    "ascii-art": {"name": "ascii-art", "progress" : false},
    "project_manager": {"name": "ProjectManager", "progress" : false},
    "cshell": {"name": "cshell", "progress" : false},
    "tetra": {"name": "tetra", "progress" : false},
};

/**
	* @param {string} match 
*/
function manage_difficulty(match){
	let diff = match.replace(/diff.*/, '');
	console.log(match, diff.toString());
	let num = diff.match(/\d\.?\d+/);
	if(num == null)
		return 0;

	console.log(num);
	return parseFloat(num.toString());
}

/**
	* @param {string} toml 
*/
function manage_toml(toml){

	let done_match = toml.match(/\[\[(\done.)*done\]\]\n(.*\n){0,3}difficulty\s?=\s?\d*.?\d*/mg);
	let todo_match = toml.match(/\[\[(\todo.)*todo\]\]\n(.*\n){0,3}difficulty\s?=\s?\d*.?\d*/mg);

	if(done_match == null || todo_match == null)
		return null;
	let done = 0.;
	let todo = 0.;

	done_match.forEach(match => done += manage_difficulty(match))
	todo_match.forEach(match => todo += manage_difficulty(match))

	let total = done + todo;
	return done / total;
}

/**
	* @param {string | null} project
	* @param {string} toml 
*/
function update_project(project, toml){
	let div = document.getElementById(project);
	let total = manage_toml(toml);
	let content = div.innerText;

	if(toml == null)
		return;

	if(total == null || isNaN(total))
		return;

	div.textContent= `${div.textContent} (${(total * 100).toPrecision(2)}% done)`
}

/**
	* @param {Response} response
	* @param {string} project
*/
function act_on_correct_response(response, project){
	response.blob().then(blob => blob.text().then(toml => update_project(project, toml)));
}

async function read_statuses(){
	for(let project in projects){
		let url = `https://raw.githubusercontent.com/HasSak-47/${project}/main/status.toml`;
		fetch(url).then( response =>{
			if(response != void 2)
				act_on_correct_response(response, project)
		});
	}

	return true;
}

