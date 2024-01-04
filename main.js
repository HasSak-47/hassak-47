const github_url = "https://www.github.com/HasSak-47/"
const page_url   = "https://hassak-47.github.io/"

/**
	* @param {string} base - The name of the repo
	* @param {string} text - The name of the repo
	* @param {string} repo - The name of the repo
*/
function create_link(base, text, repo){
    let lnk = document.createElement("a");

	lnk.href = base + repo;
	lnk.text = text;
	lnk.className = "proj-url";

	return lnk;
}

/**
	* returns this thingy
	* <div class="project" id="repo">
	* 	name:
	* </div>
	* <div class="urls">
	* 	name:
	* 	<a href="..." class="proj-url"> Page Url </a>
	* 	<a href="..." class="proj-url"> Repo Url </a>
	* </div>
	* <div class="status">
	* </div>
	* @param {string} repo - The name of the repo
	*/
function create_links(repo){
    let div = document.createElement("div");
	div.className = "project";

	let repo_data = document.createElement("div");
	repo_data.innerText = repo;
	repo_data.id = repo

	div.append(repo_data);

	let urls = document.createElement("div");
	urls.className = "urls"

	urls.appendChild(create_link(github_url, "Repo", repo));
	urls.appendChild(create_link(page_url, "Page", repo));

	div.append(urls);
    return div;
}

function handle_projects(){
    let projects_div = document.getElementById("projects");
    if(projects_div == null)
        return;

    for(let project in projects){
        let repo = project;
        let repo_div = document.createElement("div");

        repo_div.id = repo;
        projects_div.appendChild(create_links(repo));
    }
	return false;
}

window.onload = async () => {
	handle_projects();
	await read_statuses();
	return void 0;
};
