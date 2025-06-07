export function selectRandom<T>(lst: T[], amount: number) {
    const shuffled = [...lst.sort(() => 0.5 - Math.random())];
    return shuffled.slice(0, amount);
}