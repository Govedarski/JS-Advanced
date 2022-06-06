function solution(command) {
    const functionsMapping = {
        upvote: () => {
            this.upvotes += 1;
        },
        downvote: () => {
            this.downvotes += 1;
        },
        score: () => {
            let reportUpvotes = this.upvotes;
            let reportDownvotes = this.downvotes;
            const totalVotes = reportDownvotes + reportUpvotes;

            let rating = 'new';
            if (totalVotes < 10) {
                rating = 'new';
            } else if (reportUpvotes > totalVotes * 0.66) {
                rating = 'hot';
            } else if (reportDownvotes > reportUpvotes) {
                rating = 'unpopular';
            } else if (totalVotes > 100) {
                rating = 'controversial';
            }

            const votesToAdd = totalVotes > 50
                ? Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25)
                : 0;

            reportUpvotes = this.upvotes + votesToAdd;
            reportDownvotes = this.downvotes + votesToAdd;

            return [reportUpvotes, reportDownvotes, reportUpvotes - reportDownvotes, rating];
        },
    };

    return functionsMapping[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0
};


console.log(solution.call(post, 'upvote'));
// console.log(solution.call(post, 'downvote'));`
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
// console.log(solution.call(post, 'downvote'));         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
