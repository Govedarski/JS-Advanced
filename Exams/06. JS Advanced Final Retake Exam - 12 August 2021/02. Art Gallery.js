class ArtGallery {
    possibleArticles = {'picture': 200, 'photo': 50, 'item': 250};
    listOfArticles = [];
    guests = [];
    personalities = {
        Vip: 500,
        Middle: 250
    };

    constructor(creator) {
        this.creator = creator;
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!(articleModel in this.possibleArticles)) {
            throw Error('This article model is not included in this gallery!');
        }
        let currentArticle = this.listOfArticles.find(x => x.articleName === articleName);
        if (!currentArticle) {
            currentArticle = {articleModel, articleName, quantity: 0};
            this.listOfArticles.push(currentArticle);
        }
        currentArticle.quantity += quantity;
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        if (this.guests.some(x => x.guestName === guestName)) {
            throw Error(`${guestName} has already been invited.`);
        }
        let points = this.personalities[personality] || 50;
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let currentArticle = this.listOfArticles.find(x => x.articleName === articleName);
        if (!currentArticle || currentArticle.articleModel !== articleModel) {
            throw Error('This article is not found.');
        }

        if (currentArticle.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        let currentGuest = this.guests.find(x => x.guestName === guestName);
        if (!currentGuest) {
            return 'This guest is not invited.';
        }

        let neededPoints = this.possibleArticles[currentArticle.articleModel];
        if (currentGuest.points < neededPoints) {
            return 'You need to more points to purchase the article.';
        }

        currentGuest.points -= neededPoints;
        currentArticle.quantity--;
        currentGuest.purchaseArticle++;
        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            return this._articleInfo();
        }
        if (criteria === 'guest') {
            return this._guestInfo();
        }
    }

    _articleInfo() {
        const info = ['Articles information:'];
        this.listOfArticles.forEach(x => info.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
        return info.join('\n');
    }

    _guestInfo() {
        const info = ['Guests information:'];
        this.guests.forEach(x => info.push(`${x.guestName} - ${x.purchaseArticle}`));
        return info.join('\n');
    }
}


const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
