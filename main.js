const projects_repos = ["LyVim", "Monitor", "ascii-art", "project_manager", "cshell", "tetra", ];
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
	* <div class="project">
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
    div.innerText = repo + " links:";
	div.className = "project";

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

    for(let i = 0; i < projects_repos.length; ++i){
        let repo = projects_repos[i];
        console.log(repo);
        let repo_div = document.createElement("div");

        repo_div.id = repo;
        repo_div.innerText = repo;
        projects_div.appendChild(create_links(repo));
    }
}

handle_projects();
