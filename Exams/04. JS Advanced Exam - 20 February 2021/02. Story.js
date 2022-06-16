class Story {
    #comments = [];
    #likes = [];

    sortingFunctions = {
        asc(a, b) {
            return a.id - b.id;
        },
        desc(a, b) {
            return b.id - a.id;
        },
        username(a, b) {
            return a.username.localeCompare(b.username);
        },
    };

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        }
        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw Error('You can\'t like the same story twice!');
        }
        if (username === this.creator) {
            throw Error('You can\'t like your own story!');
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw Error('You can\'t dislike this story!');
        }

        this.#likes.splice(this.#likes.findIndex(x => x === username), 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (this.#comments.length === 0 || !this.#comments.some(x => x.id === id)) {
            const commentId = this.#comments.length + 1;
            this.#comments.push({id: commentId, username, content, replies: []});
            return `${username} commented on ${this.title}`;
        }
        const comment = this.#comments.find(x => x.id === id);
        const replayID = `${comment.id}.${comment.replies.length + 1}`;
        comment.replies.push({id: replayID, username, content});
        return 'You replied successfully';
    }


    toString(sortingType) {
        let info = `Title: ${this.title}\n`;
        info += `Creator: ${this.creator}\n`;
        info += `Likes: ${this.#likes.length}\n`;
        info += `Comments:\n`;
        const sortedComments = this.#comments.sort((a, b) => this.sortingFunctions[sortingType](a, b));
        info += sortedComments
            .map(c => {
                let sortedReplies = c.replies
                    .sort((a, b) => this.sortingFunctions[sortingType](a, b))
                    .map(r => `--- ${r.id}. ${r.username}: ${r.content}`)
                    .join('\n');
                sortedReplies = sortedReplies && ('\n' + sortedReplies)
                return `-- ${c.id}. ${c.username}: ${c.content}${sortedReplies}`;
            }).join('\n');

        return info.trim();
    }
}

let art = new Story("My Story", "Anny");

art.like("a");

art.like("b");

art.dislike("b");

art.like("b")

art.like("c");

art.like("d");

art.like("v");

console.log(art.toString())