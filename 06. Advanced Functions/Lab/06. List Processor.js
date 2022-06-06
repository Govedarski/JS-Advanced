function solve(commands) {
    let context = [];
    const functionsMapping = {
        add(string) {
            context.push(string);
        },
        remove(string) {
            context = context.filter(x => x !== string);
        },
        print() {
            console.log(context.join(','));
        }
    };
    for (const command of commands) {
        let [func, argument] = command.split(' ');
        functionsMapping[func](argument)
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);