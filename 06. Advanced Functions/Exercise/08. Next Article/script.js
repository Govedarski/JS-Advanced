function getArticleGenerator(articles) {
    const ID_CONTENT_DIV = 'content';

    return () => {
        if (!articles.length) return;

        const articleElement = document.createElement('article');
        articleElement.textContent = articles.shift();
        document.getElementById(ID_CONTENT_DIV).appendChild(articleElement);
    };
}
