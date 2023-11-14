export class NavBar {

    NavBar = () => {
        const navBar = document.createElement('nav');
        const div = document.createElement('div');
        const iconFavorite = document.createElement('img');
        const iconPerson = document.createElement('img');

        iconFavorite.src = "https://cdn-icons-png.flaticon.com/512/60/60993.png";
        iconPerson.src = "https://static.thenounproject.com/png/4851855-200.png";

        iconFavorite.className = 'icons';
        iconPerson.className = 'icons';

        div.appendChild(iconFavorite);
        div.appendChild(iconPerson);

        navBar.appendChild(div);
        root.appendChild(navBar);

        const divModal = document.createElement('div')
        divModal.className = 'modal'
        divModal.style.display = 'none'
        root.appendChild(divModal)
        iconFavorite.onclick = () => {
            if (divModal.style.display === 'block') {
                divModal.style.display = 'none'
            } else {
                divModal.style.display = 'block'
            }
        }


    }

}