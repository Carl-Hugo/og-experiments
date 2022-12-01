export function css(...args: any[]) {
    if (args.length == 1) {
        return args[0][0];
    }
    let result = '';
    for (let i = 0; i < args[0].length; i++) {
        result += args[0][i];

        const nextIndex = i + 1;
        if (nextIndex < args.length) {
            result += args[nextIndex];
        }
    }
    return result;
}
