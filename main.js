const projects_repos = ["LyVim", "Monitor", "ascii-art", "project_manager", "cshell", "tetra"];

function create_link(repo, text){

    let div = document.createElement("div");
    div.text = repo + "_ursl";

    let repo_link = document.createElement("a");
    let page_link = document.createElement("a");
    if(link == null)
        throw("fucker");
    link.href=url + repo;
    link.text=text;

    div.appendChild(link);

    return div;
}

const github_url = "https://www.github.com/HasSak-47"
const page_url   = "https://hassak-47.github.io/"

function handle_projects(){
    let projects_div = document.getElementById("projects");
    if(projects_div == null)
        return;

    for(let i = 0; i < projects_repos.length; ++i){
        let repo = projects_repos[i];
        console.log(repo);
        let repo_div = document.createElement("div");

        repo_div.id = repo;
        repo_div.text = repo;
        repo_div.appendChild(create_link(repo, github_url, "repo"));
        repo_div.appendChild(create_link(repo, page_url, "page"));
        projects_div.appendChild(repo_div);
    }
}

handle_projects();
