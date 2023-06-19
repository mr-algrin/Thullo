
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export type OverridableStringUnion<T extends string | number, U = {}> = GenerateStringUnion<
    Overwrite<Record<T, true>, U>
>;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<
    {
        [Key in keyof T]: true extends T[Key] ? Key : never;
    }[keyof T],
    string
>;