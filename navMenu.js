
//////////  MAIN MENU COG  ///////////////
const nav_menu = document.createElement("nav")
document.getElementById("root").prepend(nav_menu)
nav_menu.className = "menuNav-main"// "nav-main"

//////////////  MENU PANEL  ///////////////
const ul_menuPanel = document.createElement("ul")
nav_menu.appendChild(ul_menuPanel)
ul_menuPanel.className = "menuNav-panel" // "nav-menu"

createMenuItem("Inicio", "./Index.html")

function createMenuItem(name, href="#") {
    const li = document.createElement("li")
    ul_menuPanel.appendChild(li)
    const ahref = document.createElement("a")
    li.appendChild(ahref)
    ahref.href = href
    ahref.innerText = name
}


///////////////   COG  ///////////////////
const ul_menuCog = document.createElement("ul")
nav_menu.appendChild(ul_menuCog)
ul_menuCog.className = "menuNav-cog" // "nav-menu-right"
ul_menuCog.onclick = () => ul_menuPanel.classList.toggle('show')

const li_menuCog = document.createElement("li")
ul_menuCog.appendChild(li_menuCog)

const ahref_menuCog = document.createElement("a")
li_menuCog.appendChild(ahref_menuCog)
ahref_menuCog.href = "#"

const i_cog = document.createElement("i")
ahref_menuCog.appendChild(i_cog)
i_cog.className = "fas fa-cog"