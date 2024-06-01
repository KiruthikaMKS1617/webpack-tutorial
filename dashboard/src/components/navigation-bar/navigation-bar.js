import "./navigation-bar.scss";

class NavigationBar {
  render(navItems) {
    const liItems = navItems.map(
      (navItem) => `<li><a href=${navItem.path}>${navItem.title}</a></li>`
    );
    const ul = document.createElement("ul");
    ul.innerHTML = liItems;
    ul.classList.add("nav-bar");
    document.body.appendChild(ul);
  }
}

export default NavigationBar;
