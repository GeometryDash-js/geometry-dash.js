interface CollectionConstructor {
    new(): Collection<unknown, unknown>;
    new<K, V>(entries?: readonly (readonly [K, V])[] | null): Collection<K, V>;
    readonly prototype: Collection<unknown, unknown>;
}

export interface Collection<K, V> extends Map<K, V> {
    constructor: CollectionConstructor
}

export class Collection<K, V> extends Map<K, V> {}