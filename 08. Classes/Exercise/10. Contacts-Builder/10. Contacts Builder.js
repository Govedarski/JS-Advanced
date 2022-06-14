class Contact {
    article = document.createElement('article');
    divTitle = document.createElement('div');
    button = document.createElement('button');
    divInfo = document.createElement('div');
    spanPhone = document.createElement('span');
    spanEmail = document.createElement('span');

    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
    }

    set online(value){
        if(value){
            this.divTitle.classList.add('online')
        }else{
            this.divTitle.classList.remove('online')
        }
    }

    render(id) {
        const divParent = document.getElementById(id);
        divParent.appendChild(this.article);

        this.article.appendChild(this.divTitle);
        this.article.appendChild(this.divInfo);

        this.divTitle.classList.add('title');
        this.divTitle.textContent = `${this.firstName} ${this.lastName}`;
        this.divTitle.appendChild(this.button);

        this.divInfo.classList.add('info');
        this.divInfo.style.display = 'none';
        this.divInfo.appendChild(this.spanPhone);
        this.divInfo.appendChild(this.spanEmail);

        this.button.innerHTML = '&#8505;'
        this.button.addEventListener('click', () => {
            if (this.divInfo.style.display === 'none') {
                this.divInfo.style.display = 'block';
            } else {
                this.divInfo.style.display = 'none';
            }
        });
        this.spanPhone.textContent = `\u260E ${this.phone}`
        this.spanEmail.textContent = `\u2709 ${this.email}`
    }
}


function test() {
    let contacts = [
        new Contact('Ivan', 'Ivanov', '0888 123 456', 'i.ivanov@gmail.com'),
        new Contact('Maria', 'Petrova', '0899 987 654', 'mar4eto@abv.bg'),
        new Contact('Jordan', 'Kirov', '0988 456 789', 'jordk@gmail.com')
    ];
    contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
    setTimeout(() => contacts[0].online = true, 2000);
    setTimeout(() => contacts[1].online = true, 2000);
    setTimeout(() => contacts[2].online = true, 2000);
    setTimeout(() => contacts[0].online = false, 4000);
    setTimeout(() => contacts[1].online = false, 5000);
    setTimeout(() => contacts[2].online = false, 6000);
}
