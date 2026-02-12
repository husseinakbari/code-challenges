## useMemo

(why use `useMemo(() => x + y, [])` not `useMemo(x + y, [])`)?

`useMemo<T>(factory: () => T, deps: DependencyList): T`

`useMemo` expects a **function** (a “factory”) as its first argument, not a computed value. React needs that function so it can decide when to run the computation (only on the first render, or when deps change).
