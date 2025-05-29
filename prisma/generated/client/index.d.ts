
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Auth
 * 
 */
export type Auth = $Result.DefaultSelection<Prisma.$AuthPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Institution
 * 
 */
export type Institution = $Result.DefaultSelection<Prisma.$InstitutionPayload>
/**
 * Model UserExperience
 * 
 */
export type UserExperience = $Result.DefaultSelection<Prisma.$UserExperiencePayload>
/**
 * Model UserEducation
 * 
 */
export type UserEducation = $Result.DefaultSelection<Prisma.$UserEducationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auths
 * const auths = await prisma.auth.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auths
   * const auths = await prisma.auth.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auth`: Exposes CRUD operations for the **Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.AuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.institution`: Exposes CRUD operations for the **Institution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Institutions
    * const institutions = await prisma.institution.findMany()
    * ```
    */
  get institution(): Prisma.InstitutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userExperience`: Exposes CRUD operations for the **UserExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExperiences
    * const userExperiences = await prisma.userExperience.findMany()
    * ```
    */
  get userExperience(): Prisma.UserExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userEducation`: Exposes CRUD operations for the **UserEducation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserEducations
    * const userEducations = await prisma.userEducation.findMany()
    * ```
    */
  get userEducation(): Prisma.UserEducationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Auth: 'Auth',
    User: 'User',
    Institution: 'Institution',
    UserExperience: 'UserExperience',
    UserEducation: 'UserEducation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auth" | "user" | "institution" | "userExperience" | "userEducation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Auth: {
        payload: Prisma.$AuthPayload<ExtArgs>
        fields: Prisma.AuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findFirst: {
            args: Prisma.AuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findMany: {
            args: Prisma.AuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          create: {
            args: Prisma.AuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          createMany: {
            args: Prisma.AuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          delete: {
            args: Prisma.AuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          update: {
            args: Prisma.AuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          deleteMany: {
            args: Prisma.AuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          upsert: {
            args: Prisma.AuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.AuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Institution: {
        payload: Prisma.$InstitutionPayload<ExtArgs>
        fields: Prisma.InstitutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstitutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstitutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findFirst: {
            args: Prisma.InstitutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstitutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          findMany: {
            args: Prisma.InstitutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          create: {
            args: Prisma.InstitutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          createMany: {
            args: Prisma.InstitutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstitutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          delete: {
            args: Prisma.InstitutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          update: {
            args: Prisma.InstitutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          deleteMany: {
            args: Prisma.InstitutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstitutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstitutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>[]
          }
          upsert: {
            args: Prisma.InstitutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstitutionPayload>
          }
          aggregate: {
            args: Prisma.InstitutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstitution>
          }
          groupBy: {
            args: Prisma.InstitutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstitutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstitutionCountArgs<ExtArgs>
            result: $Utils.Optional<InstitutionCountAggregateOutputType> | number
          }
        }
      }
      UserExperience: {
        payload: Prisma.$UserExperiencePayload<ExtArgs>
        fields: Prisma.UserExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>
          }
          findFirst: {
            args: Prisma.UserExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>
          }
          findMany: {
            args: Prisma.UserExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>[]
          }
          create: {
            args: Prisma.UserExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>
          }
          createMany: {
            args: Prisma.UserExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>[]
          }
          delete: {
            args: Prisma.UserExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>
          }
          update: {
            args: Prisma.UserExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>
          }
          deleteMany: {
            args: Prisma.UserExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>[]
          }
          upsert: {
            args: Prisma.UserExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExperiencePayload>
          }
          aggregate: {
            args: Prisma.UserExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExperience>
          }
          groupBy: {
            args: Prisma.UserExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<UserExperienceCountAggregateOutputType> | number
          }
        }
      }
      UserEducation: {
        payload: Prisma.$UserEducationPayload<ExtArgs>
        fields: Prisma.UserEducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserEducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserEducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          findFirst: {
            args: Prisma.UserEducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserEducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          findMany: {
            args: Prisma.UserEducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>[]
          }
          create: {
            args: Prisma.UserEducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          createMany: {
            args: Prisma.UserEducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserEducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>[]
          }
          delete: {
            args: Prisma.UserEducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          update: {
            args: Prisma.UserEducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          deleteMany: {
            args: Prisma.UserEducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserEducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserEducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>[]
          }
          upsert: {
            args: Prisma.UserEducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserEducationPayload>
          }
          aggregate: {
            args: Prisma.UserEducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserEducation>
          }
          groupBy: {
            args: Prisma.UserEducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserEducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserEducationCountArgs<ExtArgs>
            result: $Utils.Optional<UserEducationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auth?: AuthOmit
    user?: UserOmit
    institution?: InstitutionOmit
    userExperience?: UserExperienceOmit
    userEducation?: UserEducationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserExperience: number
    UserEducation: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserExperience?: boolean | UserCountOutputTypeCountUserExperienceArgs
    UserEducation?: boolean | UserCountOutputTypeCountUserEducationArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationWhereInput
  }


  /**
   * Count Type InstitutionCountOutputType
   */

  export type InstitutionCountOutputType = {
    UserExperience: number
    UserEducation: number
  }

  export type InstitutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserExperience?: boolean | InstitutionCountOutputTypeCountUserExperienceArgs
    UserEducation?: boolean | InstitutionCountOutputTypeCountUserEducationArgs
  }

  // Custom InputTypes
  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstitutionCountOutputType
     */
    select?: InstitutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUserExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExperienceWhereInput
  }

  /**
   * InstitutionCountOutputType without action
   */
  export type InstitutionCountOutputTypeCountUserEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
  }

  export type AuthMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
  }

  export type AuthCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    _all: number
  }


  export type AuthMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
  }

  export type AuthMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
  }

  export type AuthCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type AuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithAggregationInput | AuthOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type AuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    User?: boolean | Auth$UserArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }

  export type AuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "password", ExtArgs["result"]["auth"]>
  export type AuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Auth$UserArgs<ExtArgs>
  }
  export type AuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      password: string
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = $Result.GetResult<Prisma.$AuthPayload, S>

  type AuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface AuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth'], meta: { name: 'Auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthFindManyArgs>(args?: SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends AuthCreateArgs>(args: SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCreateManyArgs>(args?: SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends AuthDeleteArgs>(args: SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUpdateArgs>(args: SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUpdateManyArgs>(args: SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(
      args?: Subset<T, AuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthGroupByArgs['orderBy'] }
        : { orderBy?: AuthGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth model
   */
  readonly fields: AuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Auth$UserArgs<ExtArgs> = {}>(args?: Subset<T, Auth$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auth model
   */
  interface AuthFieldRefs {
    readonly id: FieldRef<"Auth", 'String'>
    readonly createdAt: FieldRef<"Auth", 'DateTime'>
    readonly updatedAt: FieldRef<"Auth", 'DateTime'>
    readonly email: FieldRef<"Auth", 'String'>
    readonly password: FieldRef<"Auth", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Auth findUnique
   */
  export type AuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findUniqueOrThrow
   */
  export type AuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findFirst
   */
  export type AuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findFirstOrThrow
   */
  export type AuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findMany
   */
  export type AuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auths to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth create
   */
  export type AuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to create a Auth.
     */
    data: XOR<AuthCreateInput, AuthUncheckedCreateInput>
  }

  /**
   * Auth createMany
   */
  export type AuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth createManyAndReturn
   */
  export type AuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth update
   */
  export type AuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to update a Auth.
     */
    data: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
    /**
     * Choose, which Auth to update.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth updateMany
   */
  export type AuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth updateManyAndReturn
   */
  export type AuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth upsert
   */
  export type AuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: AuthWhereUniqueInput
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: XOR<AuthCreateInput, AuthUncheckedCreateInput>
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
  }

  /**
   * Auth delete
   */
  export type AuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter which Auth to delete.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth deleteMany
   */
  export type AuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to delete.
     */
    limit?: number
  }

  /**
   * Auth.User
   */
  export type Auth$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Auth without action
   */
  export type AuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    email: string | null
    specialization: string | null
    profilePicture: string | null
    about: string | null
    authId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    email: string | null
    specialization: string | null
    profilePicture: string | null
    about: string | null
    authId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    email: number
    specialization: number
    profilePicture: number
    about: number
    authId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    email?: true
    specialization?: true
    profilePicture?: true
    about?: true
    authId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    email?: true
    specialization?: true
    profilePicture?: true
    about?: true
    authId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    email?: true
    specialization?: true
    profilePicture?: true
    about?: true
    authId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture: string | null
    about: string | null
    authId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    specialization?: boolean
    profilePicture?: boolean
    about?: boolean
    authId?: boolean
    auth?: boolean | User$authArgs<ExtArgs>
    UserExperience?: boolean | User$UserExperienceArgs<ExtArgs>
    UserEducation?: boolean | User$UserEducationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    specialization?: boolean
    profilePicture?: boolean
    about?: boolean
    authId?: boolean
    auth?: boolean | User$authArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    specialization?: boolean
    profilePicture?: boolean
    about?: boolean
    authId?: boolean
    auth?: boolean | User$authArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    specialization?: boolean
    profilePicture?: boolean
    about?: boolean
    authId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "firstName" | "lastName" | "email" | "specialization" | "profilePicture" | "about" | "authId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | User$authArgs<ExtArgs>
    UserExperience?: boolean | User$UserExperienceArgs<ExtArgs>
    UserEducation?: boolean | User$UserEducationArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | User$authArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | User$authArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs> | null
      UserExperience: Prisma.$UserExperiencePayload<ExtArgs>[]
      UserEducation: Prisma.$UserEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      firstName: string
      lastName: string
      email: string
      specialization: string
      profilePicture: string | null
      about: string | null
      authId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends User$authArgs<ExtArgs> = {}>(args?: Subset<T, User$authArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserExperience<T extends User$UserExperienceArgs<ExtArgs> = {}>(args?: Subset<T, User$UserExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserEducation<T extends User$UserEducationArgs<ExtArgs> = {}>(args?: Subset<T, User$UserEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly specialization: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly authId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.auth
   */
  export type User$authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    where?: AuthWhereInput
  }

  /**
   * User.UserExperience
   */
  export type User$UserExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    where?: UserExperienceWhereInput
    orderBy?: UserExperienceOrderByWithRelationInput | UserExperienceOrderByWithRelationInput[]
    cursor?: UserExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExperienceScalarFieldEnum | UserExperienceScalarFieldEnum[]
  }

  /**
   * User.UserEducation
   */
  export type User$UserEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    where?: UserEducationWhereInput
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    cursor?: UserEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Institution
   */

  export type AggregateInstitution = {
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  export type InstitutionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    profilePicture: string | null
    about: string | null
    location: string | null
  }

  export type InstitutionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    profilePicture: string | null
    about: string | null
    location: string | null
  }

  export type InstitutionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    profilePicture: number
    about: number
    location: number
    _all: number
  }


  export type InstitutionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profilePicture?: true
    about?: true
    location?: true
  }

  export type InstitutionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profilePicture?: true
    about?: true
    location?: true
  }

  export type InstitutionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    profilePicture?: true
    about?: true
    location?: true
    _all?: true
  }

  export type InstitutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institution to aggregate.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Institutions
    **/
    _count?: true | InstitutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstitutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstitutionMaxAggregateInputType
  }

  export type GetInstitutionAggregateType<T extends InstitutionAggregateArgs> = {
        [P in keyof T & keyof AggregateInstitution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstitution[P]>
      : GetScalarType<T[P], AggregateInstitution[P]>
  }




  export type InstitutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstitutionWhereInput
    orderBy?: InstitutionOrderByWithAggregationInput | InstitutionOrderByWithAggregationInput[]
    by: InstitutionScalarFieldEnum[] | InstitutionScalarFieldEnum
    having?: InstitutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstitutionCountAggregateInputType | true
    _min?: InstitutionMinAggregateInputType
    _max?: InstitutionMaxAggregateInputType
  }

  export type InstitutionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    profilePicture: string | null
    about: string | null
    location: string | null
    _count: InstitutionCountAggregateOutputType | null
    _min: InstitutionMinAggregateOutputType | null
    _max: InstitutionMaxAggregateOutputType | null
  }

  type GetInstitutionGroupByPayload<T extends InstitutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstitutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstitutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
            : GetScalarType<T[P], InstitutionGroupByOutputType[P]>
        }
      >
    >


  export type InstitutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profilePicture?: boolean
    about?: boolean
    location?: boolean
    UserExperience?: boolean | Institution$UserExperienceArgs<ExtArgs>
    UserEducation?: boolean | Institution$UserEducationArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profilePicture?: boolean
    about?: boolean
    location?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profilePicture?: boolean
    about?: boolean
    location?: boolean
  }, ExtArgs["result"]["institution"]>

  export type InstitutionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    profilePicture?: boolean
    about?: boolean
    location?: boolean
  }

  export type InstitutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "profilePicture" | "about" | "location", ExtArgs["result"]["institution"]>
  export type InstitutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserExperience?: boolean | Institution$UserExperienceArgs<ExtArgs>
    UserEducation?: boolean | Institution$UserEducationArgs<ExtArgs>
    _count?: boolean | InstitutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstitutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InstitutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InstitutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Institution"
    objects: {
      UserExperience: Prisma.$UserExperiencePayload<ExtArgs>[]
      UserEducation: Prisma.$UserEducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      profilePicture: string | null
      about: string | null
      location: string | null
    }, ExtArgs["result"]["institution"]>
    composites: {}
  }

  type InstitutionGetPayload<S extends boolean | null | undefined | InstitutionDefaultArgs> = $Result.GetResult<Prisma.$InstitutionPayload, S>

  type InstitutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstitutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstitutionCountAggregateInputType | true
    }

  export interface InstitutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Institution'], meta: { name: 'Institution' } }
    /**
     * Find zero or one Institution that matches the filter.
     * @param {InstitutionFindUniqueArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstitutionFindUniqueArgs>(args: SelectSubset<T, InstitutionFindUniqueArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Institution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstitutionFindUniqueOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstitutionFindUniqueOrThrowArgs>(args: SelectSubset<T, InstitutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstitutionFindFirstArgs>(args?: SelectSubset<T, InstitutionFindFirstArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Institution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindFirstOrThrowArgs} args - Arguments to find a Institution
     * @example
     * // Get one Institution
     * const institution = await prisma.institution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstitutionFindFirstOrThrowArgs>(args?: SelectSubset<T, InstitutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Institutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Institutions
     * const institutions = await prisma.institution.findMany()
     * 
     * // Get first 10 Institutions
     * const institutions = await prisma.institution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const institutionWithIdOnly = await prisma.institution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstitutionFindManyArgs>(args?: SelectSubset<T, InstitutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Institution.
     * @param {InstitutionCreateArgs} args - Arguments to create a Institution.
     * @example
     * // Create one Institution
     * const Institution = await prisma.institution.create({
     *   data: {
     *     // ... data to create a Institution
     *   }
     * })
     * 
     */
    create<T extends InstitutionCreateArgs>(args: SelectSubset<T, InstitutionCreateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Institutions.
     * @param {InstitutionCreateManyArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstitutionCreateManyArgs>(args?: SelectSubset<T, InstitutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Institutions and returns the data saved in the database.
     * @param {InstitutionCreateManyAndReturnArgs} args - Arguments to create many Institutions.
     * @example
     * // Create many Institutions
     * const institution = await prisma.institution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstitutionCreateManyAndReturnArgs>(args?: SelectSubset<T, InstitutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Institution.
     * @param {InstitutionDeleteArgs} args - Arguments to delete one Institution.
     * @example
     * // Delete one Institution
     * const Institution = await prisma.institution.delete({
     *   where: {
     *     // ... filter to delete one Institution
     *   }
     * })
     * 
     */
    delete<T extends InstitutionDeleteArgs>(args: SelectSubset<T, InstitutionDeleteArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Institution.
     * @param {InstitutionUpdateArgs} args - Arguments to update one Institution.
     * @example
     * // Update one Institution
     * const institution = await prisma.institution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstitutionUpdateArgs>(args: SelectSubset<T, InstitutionUpdateArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Institutions.
     * @param {InstitutionDeleteManyArgs} args - Arguments to filter Institutions to delete.
     * @example
     * // Delete a few Institutions
     * const { count } = await prisma.institution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstitutionDeleteManyArgs>(args?: SelectSubset<T, InstitutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstitutionUpdateManyArgs>(args: SelectSubset<T, InstitutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Institutions and returns the data updated in the database.
     * @param {InstitutionUpdateManyAndReturnArgs} args - Arguments to update many Institutions.
     * @example
     * // Update many Institutions
     * const institution = await prisma.institution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Institutions and only return the `id`
     * const institutionWithIdOnly = await prisma.institution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstitutionUpdateManyAndReturnArgs>(args: SelectSubset<T, InstitutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Institution.
     * @param {InstitutionUpsertArgs} args - Arguments to update or create a Institution.
     * @example
     * // Update or create a Institution
     * const institution = await prisma.institution.upsert({
     *   create: {
     *     // ... data to create a Institution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Institution we want to update
     *   }
     * })
     */
    upsert<T extends InstitutionUpsertArgs>(args: SelectSubset<T, InstitutionUpsertArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Institutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionCountArgs} args - Arguments to filter Institutions to count.
     * @example
     * // Count the number of Institutions
     * const count = await prisma.institution.count({
     *   where: {
     *     // ... the filter for the Institutions we want to count
     *   }
     * })
    **/
    count<T extends InstitutionCountArgs>(
      args?: Subset<T, InstitutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstitutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstitutionAggregateArgs>(args: Subset<T, InstitutionAggregateArgs>): Prisma.PrismaPromise<GetInstitutionAggregateType<T>>

    /**
     * Group by Institution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstitutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstitutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstitutionGroupByArgs['orderBy'] }
        : { orderBy?: InstitutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstitutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstitutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Institution model
   */
  readonly fields: InstitutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Institution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstitutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserExperience<T extends Institution$UserExperienceArgs<ExtArgs> = {}>(args?: Subset<T, Institution$UserExperienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserEducation<T extends Institution$UserEducationArgs<ExtArgs> = {}>(args?: Subset<T, Institution$UserEducationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Institution model
   */
  interface InstitutionFieldRefs {
    readonly id: FieldRef<"Institution", 'String'>
    readonly createdAt: FieldRef<"Institution", 'DateTime'>
    readonly updatedAt: FieldRef<"Institution", 'DateTime'>
    readonly name: FieldRef<"Institution", 'String'>
    readonly profilePicture: FieldRef<"Institution", 'String'>
    readonly about: FieldRef<"Institution", 'String'>
    readonly location: FieldRef<"Institution", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Institution findUnique
   */
  export type InstitutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findUniqueOrThrow
   */
  export type InstitutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution findFirst
   */
  export type InstitutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findFirstOrThrow
   */
  export type InstitutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institution to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Institutions.
     */
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution findMany
   */
  export type InstitutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter, which Institutions to fetch.
     */
    where?: InstitutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Institutions to fetch.
     */
    orderBy?: InstitutionOrderByWithRelationInput | InstitutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Institutions.
     */
    cursor?: InstitutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Institutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Institutions.
     */
    skip?: number
    distinct?: InstitutionScalarFieldEnum | InstitutionScalarFieldEnum[]
  }

  /**
   * Institution create
   */
  export type InstitutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Institution.
     */
    data: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
  }

  /**
   * Institution createMany
   */
  export type InstitutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution createManyAndReturn
   */
  export type InstitutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to create many Institutions.
     */
    data: InstitutionCreateManyInput | InstitutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Institution update
   */
  export type InstitutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Institution.
     */
    data: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
    /**
     * Choose, which Institution to update.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution updateMany
   */
  export type InstitutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution updateManyAndReturn
   */
  export type InstitutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * The data used to update Institutions.
     */
    data: XOR<InstitutionUpdateManyMutationInput, InstitutionUncheckedUpdateManyInput>
    /**
     * Filter which Institutions to update
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to update.
     */
    limit?: number
  }

  /**
   * Institution upsert
   */
  export type InstitutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Institution to update in case it exists.
     */
    where: InstitutionWhereUniqueInput
    /**
     * In case the Institution found by the `where` argument doesn't exist, create a new Institution with this data.
     */
    create: XOR<InstitutionCreateInput, InstitutionUncheckedCreateInput>
    /**
     * In case the Institution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstitutionUpdateInput, InstitutionUncheckedUpdateInput>
  }

  /**
   * Institution delete
   */
  export type InstitutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
    /**
     * Filter which Institution to delete.
     */
    where: InstitutionWhereUniqueInput
  }

  /**
   * Institution deleteMany
   */
  export type InstitutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Institutions to delete
     */
    where?: InstitutionWhereInput
    /**
     * Limit how many Institutions to delete.
     */
    limit?: number
  }

  /**
   * Institution.UserExperience
   */
  export type Institution$UserExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    where?: UserExperienceWhereInput
    orderBy?: UserExperienceOrderByWithRelationInput | UserExperienceOrderByWithRelationInput[]
    cursor?: UserExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExperienceScalarFieldEnum | UserExperienceScalarFieldEnum[]
  }

  /**
   * Institution.UserEducation
   */
  export type Institution$UserEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    where?: UserEducationWhereInput
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    cursor?: UserEducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * Institution without action
   */
  export type InstitutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Institution
     */
    select?: InstitutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Institution
     */
    omit?: InstitutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstitutionInclude<ExtArgs> | null
  }


  /**
   * Model UserExperience
   */

  export type AggregateUserExperience = {
    _count: UserExperienceCountAggregateOutputType | null
    _min: UserExperienceMinAggregateOutputType | null
    _max: UserExperienceMaxAggregateOutputType | null
  }

  export type UserExperienceMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    institutionId: string | null
  }

  export type UserExperienceMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    institutionId: string | null
  }

  export type UserExperienceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    startDate: number
    endDate: number
    userId: number
    institutionId: number
    _all: number
  }


  export type UserExperienceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    institutionId?: true
  }

  export type UserExperienceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    institutionId?: true
  }

  export type UserExperienceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    institutionId?: true
    _all?: true
  }

  export type UserExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExperience to aggregate.
     */
    where?: UserExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExperiences to fetch.
     */
    orderBy?: UserExperienceOrderByWithRelationInput | UserExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExperiences
    **/
    _count?: true | UserExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExperienceMaxAggregateInputType
  }

  export type GetUserExperienceAggregateType<T extends UserExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExperience[P]>
      : GetScalarType<T[P], AggregateUserExperience[P]>
  }




  export type UserExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExperienceWhereInput
    orderBy?: UserExperienceOrderByWithAggregationInput | UserExperienceOrderByWithAggregationInput[]
    by: UserExperienceScalarFieldEnum[] | UserExperienceScalarFieldEnum
    having?: UserExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExperienceCountAggregateInputType | true
    _min?: UserExperienceMinAggregateInputType
    _max?: UserExperienceMaxAggregateInputType
  }

  export type UserExperienceGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    startDate: Date
    endDate: Date | null
    userId: string
    institutionId: string
    _count: UserExperienceCountAggregateOutputType | null
    _min: UserExperienceMinAggregateOutputType | null
    _max: UserExperienceMaxAggregateOutputType | null
  }

  type GetUserExperienceGroupByPayload<T extends UserExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], UserExperienceGroupByOutputType[P]>
        }
      >
    >


  export type UserExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExperience"]>

  export type UserExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExperience"]>

  export type UserExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExperience"]>

  export type UserExperienceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
  }

  export type UserExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "startDate" | "endDate" | "userId" | "institutionId", ExtArgs["result"]["userExperience"]>
  export type UserExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type UserExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type UserExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $UserExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExperience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      institution: Prisma.$InstitutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      startDate: Date
      endDate: Date | null
      userId: string
      institutionId: string
    }, ExtArgs["result"]["userExperience"]>
    composites: {}
  }

  type UserExperienceGetPayload<S extends boolean | null | undefined | UserExperienceDefaultArgs> = $Result.GetResult<Prisma.$UserExperiencePayload, S>

  type UserExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserExperienceCountAggregateInputType | true
    }

  export interface UserExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExperience'], meta: { name: 'UserExperience' } }
    /**
     * Find zero or one UserExperience that matches the filter.
     * @param {UserExperienceFindUniqueArgs} args - Arguments to find a UserExperience
     * @example
     * // Get one UserExperience
     * const userExperience = await prisma.userExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExperienceFindUniqueArgs>(args: SelectSubset<T, UserExperienceFindUniqueArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserExperienceFindUniqueOrThrowArgs} args - Arguments to find a UserExperience
     * @example
     * // Get one UserExperience
     * const userExperience = await prisma.userExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceFindFirstArgs} args - Arguments to find a UserExperience
     * @example
     * // Get one UserExperience
     * const userExperience = await prisma.userExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExperienceFindFirstArgs>(args?: SelectSubset<T, UserExperienceFindFirstArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceFindFirstOrThrowArgs} args - Arguments to find a UserExperience
     * @example
     * // Get one UserExperience
     * const userExperience = await prisma.userExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExperiences
     * const userExperiences = await prisma.userExperience.findMany()
     * 
     * // Get first 10 UserExperiences
     * const userExperiences = await prisma.userExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExperienceWithIdOnly = await prisma.userExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExperienceFindManyArgs>(args?: SelectSubset<T, UserExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserExperience.
     * @param {UserExperienceCreateArgs} args - Arguments to create a UserExperience.
     * @example
     * // Create one UserExperience
     * const UserExperience = await prisma.userExperience.create({
     *   data: {
     *     // ... data to create a UserExperience
     *   }
     * })
     * 
     */
    create<T extends UserExperienceCreateArgs>(args: SelectSubset<T, UserExperienceCreateArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserExperiences.
     * @param {UserExperienceCreateManyArgs} args - Arguments to create many UserExperiences.
     * @example
     * // Create many UserExperiences
     * const userExperience = await prisma.userExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExperienceCreateManyArgs>(args?: SelectSubset<T, UserExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserExperiences and returns the data saved in the database.
     * @param {UserExperienceCreateManyAndReturnArgs} args - Arguments to create many UserExperiences.
     * @example
     * // Create many UserExperiences
     * const userExperience = await prisma.userExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserExperiences and only return the `id`
     * const userExperienceWithIdOnly = await prisma.userExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserExperience.
     * @param {UserExperienceDeleteArgs} args - Arguments to delete one UserExperience.
     * @example
     * // Delete one UserExperience
     * const UserExperience = await prisma.userExperience.delete({
     *   where: {
     *     // ... filter to delete one UserExperience
     *   }
     * })
     * 
     */
    delete<T extends UserExperienceDeleteArgs>(args: SelectSubset<T, UserExperienceDeleteArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserExperience.
     * @param {UserExperienceUpdateArgs} args - Arguments to update one UserExperience.
     * @example
     * // Update one UserExperience
     * const userExperience = await prisma.userExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExperienceUpdateArgs>(args: SelectSubset<T, UserExperienceUpdateArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserExperiences.
     * @param {UserExperienceDeleteManyArgs} args - Arguments to filter UserExperiences to delete.
     * @example
     * // Delete a few UserExperiences
     * const { count } = await prisma.userExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExperienceDeleteManyArgs>(args?: SelectSubset<T, UserExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExperiences
     * const userExperience = await prisma.userExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExperienceUpdateManyArgs>(args: SelectSubset<T, UserExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExperiences and returns the data updated in the database.
     * @param {UserExperienceUpdateManyAndReturnArgs} args - Arguments to update many UserExperiences.
     * @example
     * // Update many UserExperiences
     * const userExperience = await prisma.userExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserExperiences and only return the `id`
     * const userExperienceWithIdOnly = await prisma.userExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserExperience.
     * @param {UserExperienceUpsertArgs} args - Arguments to update or create a UserExperience.
     * @example
     * // Update or create a UserExperience
     * const userExperience = await prisma.userExperience.upsert({
     *   create: {
     *     // ... data to create a UserExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExperience we want to update
     *   }
     * })
     */
    upsert<T extends UserExperienceUpsertArgs>(args: SelectSubset<T, UserExperienceUpsertArgs<ExtArgs>>): Prisma__UserExperienceClient<$Result.GetResult<Prisma.$UserExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceCountArgs} args - Arguments to filter UserExperiences to count.
     * @example
     * // Count the number of UserExperiences
     * const count = await prisma.userExperience.count({
     *   where: {
     *     // ... the filter for the UserExperiences we want to count
     *   }
     * })
    **/
    count<T extends UserExperienceCountArgs>(
      args?: Subset<T, UserExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExperienceAggregateArgs>(args: Subset<T, UserExperienceAggregateArgs>): Prisma.PrismaPromise<GetUserExperienceAggregateType<T>>

    /**
     * Group by UserExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExperienceGroupByArgs['orderBy'] }
        : { orderBy?: UserExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExperience model
   */
  readonly fields: UserExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExperience model
   */
  interface UserExperienceFieldRefs {
    readonly id: FieldRef<"UserExperience", 'String'>
    readonly createdAt: FieldRef<"UserExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"UserExperience", 'DateTime'>
    readonly title: FieldRef<"UserExperience", 'String'>
    readonly description: FieldRef<"UserExperience", 'String'>
    readonly startDate: FieldRef<"UserExperience", 'DateTime'>
    readonly endDate: FieldRef<"UserExperience", 'DateTime'>
    readonly userId: FieldRef<"UserExperience", 'String'>
    readonly institutionId: FieldRef<"UserExperience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserExperience findUnique
   */
  export type UserExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserExperience to fetch.
     */
    where: UserExperienceWhereUniqueInput
  }

  /**
   * UserExperience findUniqueOrThrow
   */
  export type UserExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserExperience to fetch.
     */
    where: UserExperienceWhereUniqueInput
  }

  /**
   * UserExperience findFirst
   */
  export type UserExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserExperience to fetch.
     */
    where?: UserExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExperiences to fetch.
     */
    orderBy?: UserExperienceOrderByWithRelationInput | UserExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExperiences.
     */
    cursor?: UserExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExperiences.
     */
    distinct?: UserExperienceScalarFieldEnum | UserExperienceScalarFieldEnum[]
  }

  /**
   * UserExperience findFirstOrThrow
   */
  export type UserExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserExperience to fetch.
     */
    where?: UserExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExperiences to fetch.
     */
    orderBy?: UserExperienceOrderByWithRelationInput | UserExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExperiences.
     */
    cursor?: UserExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExperiences.
     */
    distinct?: UserExperienceScalarFieldEnum | UserExperienceScalarFieldEnum[]
  }

  /**
   * UserExperience findMany
   */
  export type UserExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * Filter, which UserExperiences to fetch.
     */
    where?: UserExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExperiences to fetch.
     */
    orderBy?: UserExperienceOrderByWithRelationInput | UserExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExperiences.
     */
    cursor?: UserExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExperiences.
     */
    skip?: number
    distinct?: UserExperienceScalarFieldEnum | UserExperienceScalarFieldEnum[]
  }

  /**
   * UserExperience create
   */
  export type UserExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExperience.
     */
    data: XOR<UserExperienceCreateInput, UserExperienceUncheckedCreateInput>
  }

  /**
   * UserExperience createMany
   */
  export type UserExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExperiences.
     */
    data: UserExperienceCreateManyInput | UserExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserExperience createManyAndReturn
   */
  export type UserExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many UserExperiences.
     */
    data: UserExperienceCreateManyInput | UserExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExperience update
   */
  export type UserExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExperience.
     */
    data: XOR<UserExperienceUpdateInput, UserExperienceUncheckedUpdateInput>
    /**
     * Choose, which UserExperience to update.
     */
    where: UserExperienceWhereUniqueInput
  }

  /**
   * UserExperience updateMany
   */
  export type UserExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExperiences.
     */
    data: XOR<UserExperienceUpdateManyMutationInput, UserExperienceUncheckedUpdateManyInput>
    /**
     * Filter which UserExperiences to update
     */
    where?: UserExperienceWhereInput
    /**
     * Limit how many UserExperiences to update.
     */
    limit?: number
  }

  /**
   * UserExperience updateManyAndReturn
   */
  export type UserExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * The data used to update UserExperiences.
     */
    data: XOR<UserExperienceUpdateManyMutationInput, UserExperienceUncheckedUpdateManyInput>
    /**
     * Filter which UserExperiences to update
     */
    where?: UserExperienceWhereInput
    /**
     * Limit how many UserExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExperience upsert
   */
  export type UserExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExperience to update in case it exists.
     */
    where: UserExperienceWhereUniqueInput
    /**
     * In case the UserExperience found by the `where` argument doesn't exist, create a new UserExperience with this data.
     */
    create: XOR<UserExperienceCreateInput, UserExperienceUncheckedCreateInput>
    /**
     * In case the UserExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExperienceUpdateInput, UserExperienceUncheckedUpdateInput>
  }

  /**
   * UserExperience delete
   */
  export type UserExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
    /**
     * Filter which UserExperience to delete.
     */
    where: UserExperienceWhereUniqueInput
  }

  /**
   * UserExperience deleteMany
   */
  export type UserExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExperiences to delete
     */
    where?: UserExperienceWhereInput
    /**
     * Limit how many UserExperiences to delete.
     */
    limit?: number
  }

  /**
   * UserExperience without action
   */
  export type UserExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExperience
     */
    select?: UserExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserExperience
     */
    omit?: UserExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExperienceInclude<ExtArgs> | null
  }


  /**
   * Model UserEducation
   */

  export type AggregateUserEducation = {
    _count: UserEducationCountAggregateOutputType | null
    _min: UserEducationMinAggregateOutputType | null
    _max: UserEducationMaxAggregateOutputType | null
  }

  export type UserEducationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    institutionId: string | null
  }

  export type UserEducationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    userId: string | null
    institutionId: string | null
  }

  export type UserEducationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    startDate: number
    endDate: number
    userId: number
    institutionId: number
    _all: number
  }


  export type UserEducationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    institutionId?: true
  }

  export type UserEducationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    institutionId?: true
  }

  export type UserEducationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    userId?: true
    institutionId?: true
    _all?: true
  }

  export type UserEducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEducation to aggregate.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserEducations
    **/
    _count?: true | UserEducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserEducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserEducationMaxAggregateInputType
  }

  export type GetUserEducationAggregateType<T extends UserEducationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserEducation[P]>
      : GetScalarType<T[P], AggregateUserEducation[P]>
  }




  export type UserEducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserEducationWhereInput
    orderBy?: UserEducationOrderByWithAggregationInput | UserEducationOrderByWithAggregationInput[]
    by: UserEducationScalarFieldEnum[] | UserEducationScalarFieldEnum
    having?: UserEducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserEducationCountAggregateInputType | true
    _min?: UserEducationMinAggregateInputType
    _max?: UserEducationMaxAggregateInputType
  }

  export type UserEducationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    startDate: Date
    endDate: Date | null
    userId: string
    institutionId: string
    _count: UserEducationCountAggregateOutputType | null
    _min: UserEducationMinAggregateOutputType | null
    _max: UserEducationMaxAggregateOutputType | null
  }

  type GetUserEducationGroupByPayload<T extends UserEducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserEducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserEducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserEducationGroupByOutputType[P]>
            : GetScalarType<T[P], UserEducationGroupByOutputType[P]>
        }
      >
    >


  export type UserEducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducation"]>

  export type UserEducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducation"]>

  export type UserEducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userEducation"]>

  export type UserEducationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    userId?: boolean
    institutionId?: boolean
  }

  export type UserEducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "startDate" | "endDate" | "userId" | "institutionId", ExtArgs["result"]["userEducation"]>
  export type UserEducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type UserEducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }
  export type UserEducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    institution?: boolean | InstitutionDefaultArgs<ExtArgs>
  }

  export type $UserEducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserEducation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      institution: Prisma.$InstitutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      startDate: Date
      endDate: Date | null
      userId: string
      institutionId: string
    }, ExtArgs["result"]["userEducation"]>
    composites: {}
  }

  type UserEducationGetPayload<S extends boolean | null | undefined | UserEducationDefaultArgs> = $Result.GetResult<Prisma.$UserEducationPayload, S>

  type UserEducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserEducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserEducationCountAggregateInputType | true
    }

  export interface UserEducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserEducation'], meta: { name: 'UserEducation' } }
    /**
     * Find zero or one UserEducation that matches the filter.
     * @param {UserEducationFindUniqueArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserEducationFindUniqueArgs>(args: SelectSubset<T, UserEducationFindUniqueArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserEducation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserEducationFindUniqueOrThrowArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserEducationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserEducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEducation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationFindFirstArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserEducationFindFirstArgs>(args?: SelectSubset<T, UserEducationFindFirstArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserEducation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationFindFirstOrThrowArgs} args - Arguments to find a UserEducation
     * @example
     * // Get one UserEducation
     * const userEducation = await prisma.userEducation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserEducationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserEducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserEducations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserEducations
     * const userEducations = await prisma.userEducation.findMany()
     * 
     * // Get first 10 UserEducations
     * const userEducations = await prisma.userEducation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userEducationWithIdOnly = await prisma.userEducation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserEducationFindManyArgs>(args?: SelectSubset<T, UserEducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserEducation.
     * @param {UserEducationCreateArgs} args - Arguments to create a UserEducation.
     * @example
     * // Create one UserEducation
     * const UserEducation = await prisma.userEducation.create({
     *   data: {
     *     // ... data to create a UserEducation
     *   }
     * })
     * 
     */
    create<T extends UserEducationCreateArgs>(args: SelectSubset<T, UserEducationCreateArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserEducations.
     * @param {UserEducationCreateManyArgs} args - Arguments to create many UserEducations.
     * @example
     * // Create many UserEducations
     * const userEducation = await prisma.userEducation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserEducationCreateManyArgs>(args?: SelectSubset<T, UserEducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserEducations and returns the data saved in the database.
     * @param {UserEducationCreateManyAndReturnArgs} args - Arguments to create many UserEducations.
     * @example
     * // Create many UserEducations
     * const userEducation = await prisma.userEducation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserEducations and only return the `id`
     * const userEducationWithIdOnly = await prisma.userEducation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserEducationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserEducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserEducation.
     * @param {UserEducationDeleteArgs} args - Arguments to delete one UserEducation.
     * @example
     * // Delete one UserEducation
     * const UserEducation = await prisma.userEducation.delete({
     *   where: {
     *     // ... filter to delete one UserEducation
     *   }
     * })
     * 
     */
    delete<T extends UserEducationDeleteArgs>(args: SelectSubset<T, UserEducationDeleteArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserEducation.
     * @param {UserEducationUpdateArgs} args - Arguments to update one UserEducation.
     * @example
     * // Update one UserEducation
     * const userEducation = await prisma.userEducation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserEducationUpdateArgs>(args: SelectSubset<T, UserEducationUpdateArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserEducations.
     * @param {UserEducationDeleteManyArgs} args - Arguments to filter UserEducations to delete.
     * @example
     * // Delete a few UserEducations
     * const { count } = await prisma.userEducation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserEducationDeleteManyArgs>(args?: SelectSubset<T, UserEducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserEducations
     * const userEducation = await prisma.userEducation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserEducationUpdateManyArgs>(args: SelectSubset<T, UserEducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserEducations and returns the data updated in the database.
     * @param {UserEducationUpdateManyAndReturnArgs} args - Arguments to update many UserEducations.
     * @example
     * // Update many UserEducations
     * const userEducation = await prisma.userEducation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserEducations and only return the `id`
     * const userEducationWithIdOnly = await prisma.userEducation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserEducationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserEducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserEducation.
     * @param {UserEducationUpsertArgs} args - Arguments to update or create a UserEducation.
     * @example
     * // Update or create a UserEducation
     * const userEducation = await prisma.userEducation.upsert({
     *   create: {
     *     // ... data to create a UserEducation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserEducation we want to update
     *   }
     * })
     */
    upsert<T extends UserEducationUpsertArgs>(args: SelectSubset<T, UserEducationUpsertArgs<ExtArgs>>): Prisma__UserEducationClient<$Result.GetResult<Prisma.$UserEducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserEducations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationCountArgs} args - Arguments to filter UserEducations to count.
     * @example
     * // Count the number of UserEducations
     * const count = await prisma.userEducation.count({
     *   where: {
     *     // ... the filter for the UserEducations we want to count
     *   }
     * })
    **/
    count<T extends UserEducationCountArgs>(
      args?: Subset<T, UserEducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserEducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserEducationAggregateArgs>(args: Subset<T, UserEducationAggregateArgs>): Prisma.PrismaPromise<GetUserEducationAggregateType<T>>

    /**
     * Group by UserEducation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserEducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserEducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserEducationGroupByArgs['orderBy'] }
        : { orderBy?: UserEducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserEducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserEducation model
   */
  readonly fields: UserEducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserEducation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserEducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    institution<T extends InstitutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstitutionDefaultArgs<ExtArgs>>): Prisma__InstitutionClient<$Result.GetResult<Prisma.$InstitutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserEducation model
   */
  interface UserEducationFieldRefs {
    readonly id: FieldRef<"UserEducation", 'String'>
    readonly createdAt: FieldRef<"UserEducation", 'DateTime'>
    readonly updatedAt: FieldRef<"UserEducation", 'DateTime'>
    readonly title: FieldRef<"UserEducation", 'String'>
    readonly description: FieldRef<"UserEducation", 'String'>
    readonly startDate: FieldRef<"UserEducation", 'DateTime'>
    readonly endDate: FieldRef<"UserEducation", 'DateTime'>
    readonly userId: FieldRef<"UserEducation", 'String'>
    readonly institutionId: FieldRef<"UserEducation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserEducation findUnique
   */
  export type UserEducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation findUniqueOrThrow
   */
  export type UserEducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation findFirst
   */
  export type UserEducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEducations.
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEducations.
     */
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * UserEducation findFirstOrThrow
   */
  export type UserEducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducation to fetch.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserEducations.
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserEducations.
     */
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * UserEducation findMany
   */
  export type UserEducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter, which UserEducations to fetch.
     */
    where?: UserEducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserEducations to fetch.
     */
    orderBy?: UserEducationOrderByWithRelationInput | UserEducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserEducations.
     */
    cursor?: UserEducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserEducations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserEducations.
     */
    skip?: number
    distinct?: UserEducationScalarFieldEnum | UserEducationScalarFieldEnum[]
  }

  /**
   * UserEducation create
   */
  export type UserEducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserEducation.
     */
    data: XOR<UserEducationCreateInput, UserEducationUncheckedCreateInput>
  }

  /**
   * UserEducation createMany
   */
  export type UserEducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserEducations.
     */
    data: UserEducationCreateManyInput | UserEducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserEducation createManyAndReturn
   */
  export type UserEducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * The data used to create many UserEducations.
     */
    data: UserEducationCreateManyInput | UserEducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEducation update
   */
  export type UserEducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserEducation.
     */
    data: XOR<UserEducationUpdateInput, UserEducationUncheckedUpdateInput>
    /**
     * Choose, which UserEducation to update.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation updateMany
   */
  export type UserEducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserEducations.
     */
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyInput>
    /**
     * Filter which UserEducations to update
     */
    where?: UserEducationWhereInput
    /**
     * Limit how many UserEducations to update.
     */
    limit?: number
  }

  /**
   * UserEducation updateManyAndReturn
   */
  export type UserEducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * The data used to update UserEducations.
     */
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyInput>
    /**
     * Filter which UserEducations to update
     */
    where?: UserEducationWhereInput
    /**
     * Limit how many UserEducations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserEducation upsert
   */
  export type UserEducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserEducation to update in case it exists.
     */
    where: UserEducationWhereUniqueInput
    /**
     * In case the UserEducation found by the `where` argument doesn't exist, create a new UserEducation with this data.
     */
    create: XOR<UserEducationCreateInput, UserEducationUncheckedCreateInput>
    /**
     * In case the UserEducation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserEducationUpdateInput, UserEducationUncheckedUpdateInput>
  }

  /**
   * UserEducation delete
   */
  export type UserEducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
    /**
     * Filter which UserEducation to delete.
     */
    where: UserEducationWhereUniqueInput
  }

  /**
   * UserEducation deleteMany
   */
  export type UserEducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserEducations to delete
     */
    where?: UserEducationWhereInput
    /**
     * Limit how many UserEducations to delete.
     */
    limit?: number
  }

  /**
   * UserEducation without action
   */
  export type UserEducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserEducation
     */
    select?: UserEducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserEducation
     */
    omit?: UserEducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserEducationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    specialization: 'specialization',
    profilePicture: 'profilePicture',
    about: 'about',
    authId: 'authId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InstitutionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    profilePicture: 'profilePicture',
    about: 'about',
    location: 'location'
  };

  export type InstitutionScalarFieldEnum = (typeof InstitutionScalarFieldEnum)[keyof typeof InstitutionScalarFieldEnum]


  export const UserExperienceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId',
    institutionId: 'institutionId'
  };

  export type UserExperienceScalarFieldEnum = (typeof UserExperienceScalarFieldEnum)[keyof typeof UserExperienceScalarFieldEnum]


  export const UserEducationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    userId: 'userId',
    institutionId: 'institutionId'
  };

  export type UserEducationScalarFieldEnum = (typeof UserEducationScalarFieldEnum)[keyof typeof UserEducationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthWhereInput = {
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    id?: StringFilter<"Auth"> | string
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    email?: StringFilter<"Auth"> | string
    password?: StringFilter<"Auth"> | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuthOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    password?: StringFilter<"Auth"> | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "email">

  export type AuthOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AuthCountOrderByAggregateInput
    _max?: AuthMaxOrderByAggregateInput
    _min?: AuthMinOrderByAggregateInput
  }

  export type AuthScalarWhereWithAggregatesInput = {
    AND?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    OR?: AuthScalarWhereWithAggregatesInput[]
    NOT?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auth"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
    email?: StringWithAggregatesFilter<"Auth"> | string
    password?: StringWithAggregatesFilter<"Auth"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    specialization?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    authId?: StringNullableFilter<"User"> | string | null
    auth?: XOR<AuthNullableScalarRelationFilter, AuthWhereInput> | null
    UserExperience?: UserExperienceListRelationFilter
    UserEducation?: UserEducationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    authId?: SortOrderInput | SortOrder
    auth?: AuthOrderByWithRelationInput
    UserExperience?: UserExperienceOrderByRelationAggregateInput
    UserEducation?: UserEducationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    authId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    specialization?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    auth?: XOR<AuthNullableScalarRelationFilter, AuthWhereInput> | null
    UserExperience?: UserExperienceListRelationFilter
    UserEducation?: UserEducationListRelationFilter
  }, "id" | "email" | "authId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    authId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    specialization?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    authId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type InstitutionWhereInput = {
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    id?: StringFilter<"Institution"> | string
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    name?: StringFilter<"Institution"> | string
    profilePicture?: StringNullableFilter<"Institution"> | string | null
    about?: StringNullableFilter<"Institution"> | string | null
    location?: StringNullableFilter<"Institution"> | string | null
    UserExperience?: UserExperienceListRelationFilter
    UserEducation?: UserEducationListRelationFilter
  }

  export type InstitutionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    UserExperience?: UserExperienceOrderByRelationAggregateInput
    UserEducation?: UserEducationOrderByRelationAggregateInput
  }

  export type InstitutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: InstitutionWhereInput | InstitutionWhereInput[]
    OR?: InstitutionWhereInput[]
    NOT?: InstitutionWhereInput | InstitutionWhereInput[]
    createdAt?: DateTimeFilter<"Institution"> | Date | string
    updatedAt?: DateTimeFilter<"Institution"> | Date | string
    profilePicture?: StringNullableFilter<"Institution"> | string | null
    about?: StringNullableFilter<"Institution"> | string | null
    location?: StringNullableFilter<"Institution"> | string | null
    UserExperience?: UserExperienceListRelationFilter
    UserEducation?: UserEducationListRelationFilter
  }, "id" | "name">

  export type InstitutionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    about?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: InstitutionCountOrderByAggregateInput
    _max?: InstitutionMaxOrderByAggregateInput
    _min?: InstitutionMinOrderByAggregateInput
  }

  export type InstitutionScalarWhereWithAggregatesInput = {
    AND?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    OR?: InstitutionScalarWhereWithAggregatesInput[]
    NOT?: InstitutionScalarWhereWithAggregatesInput | InstitutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Institution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Institution"> | Date | string
    name?: StringWithAggregatesFilter<"Institution"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    about?: StringNullableWithAggregatesFilter<"Institution"> | string | null
    location?: StringNullableWithAggregatesFilter<"Institution"> | string | null
  }

  export type UserExperienceWhereInput = {
    AND?: UserExperienceWhereInput | UserExperienceWhereInput[]
    OR?: UserExperienceWhereInput[]
    NOT?: UserExperienceWhereInput | UserExperienceWhereInput[]
    id?: StringFilter<"UserExperience"> | string
    createdAt?: DateTimeFilter<"UserExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserExperience"> | Date | string
    title?: StringFilter<"UserExperience"> | string
    description?: StringFilter<"UserExperience"> | string
    startDate?: DateTimeFilter<"UserExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"UserExperience"> | Date | string | null
    userId?: StringFilter<"UserExperience"> | string
    institutionId?: StringFilter<"UserExperience"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }

  export type UserExperienceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
    user?: UserOrderByWithRelationInput
    institution?: InstitutionOrderByWithRelationInput
  }

  export type UserExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserExperienceWhereInput | UserExperienceWhereInput[]
    OR?: UserExperienceWhereInput[]
    NOT?: UserExperienceWhereInput | UserExperienceWhereInput[]
    createdAt?: DateTimeFilter<"UserExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserExperience"> | Date | string
    title?: StringFilter<"UserExperience"> | string
    description?: StringFilter<"UserExperience"> | string
    startDate?: DateTimeFilter<"UserExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"UserExperience"> | Date | string | null
    userId?: StringFilter<"UserExperience"> | string
    institutionId?: StringFilter<"UserExperience"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }, "id">

  export type UserExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
    _count?: UserExperienceCountOrderByAggregateInput
    _max?: UserExperienceMaxOrderByAggregateInput
    _min?: UserExperienceMinOrderByAggregateInput
  }

  export type UserExperienceScalarWhereWithAggregatesInput = {
    AND?: UserExperienceScalarWhereWithAggregatesInput | UserExperienceScalarWhereWithAggregatesInput[]
    OR?: UserExperienceScalarWhereWithAggregatesInput[]
    NOT?: UserExperienceScalarWhereWithAggregatesInput | UserExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserExperience"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserExperience"> | Date | string
    title?: StringWithAggregatesFilter<"UserExperience"> | string
    description?: StringWithAggregatesFilter<"UserExperience"> | string
    startDate?: DateTimeWithAggregatesFilter<"UserExperience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"UserExperience"> | Date | string | null
    userId?: StringWithAggregatesFilter<"UserExperience"> | string
    institutionId?: StringWithAggregatesFilter<"UserExperience"> | string
  }

  export type UserEducationWhereInput = {
    AND?: UserEducationWhereInput | UserEducationWhereInput[]
    OR?: UserEducationWhereInput[]
    NOT?: UserEducationWhereInput | UserEducationWhereInput[]
    id?: StringFilter<"UserEducation"> | string
    createdAt?: DateTimeFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeFilter<"UserEducation"> | Date | string
    title?: StringFilter<"UserEducation"> | string
    description?: StringFilter<"UserEducation"> | string
    startDate?: DateTimeFilter<"UserEducation"> | Date | string
    endDate?: DateTimeNullableFilter<"UserEducation"> | Date | string | null
    userId?: StringFilter<"UserEducation"> | string
    institutionId?: StringFilter<"UserEducation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }

  export type UserEducationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
    user?: UserOrderByWithRelationInput
    institution?: InstitutionOrderByWithRelationInput
  }

  export type UserEducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserEducationWhereInput | UserEducationWhereInput[]
    OR?: UserEducationWhereInput[]
    NOT?: UserEducationWhereInput | UserEducationWhereInput[]
    createdAt?: DateTimeFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeFilter<"UserEducation"> | Date | string
    title?: StringFilter<"UserEducation"> | string
    description?: StringFilter<"UserEducation"> | string
    startDate?: DateTimeFilter<"UserEducation"> | Date | string
    endDate?: DateTimeNullableFilter<"UserEducation"> | Date | string | null
    userId?: StringFilter<"UserEducation"> | string
    institutionId?: StringFilter<"UserEducation"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    institution?: XOR<InstitutionScalarRelationFilter, InstitutionWhereInput>
  }, "id">

  export type UserEducationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
    _count?: UserEducationCountOrderByAggregateInput
    _max?: UserEducationMaxOrderByAggregateInput
    _min?: UserEducationMinOrderByAggregateInput
  }

  export type UserEducationScalarWhereWithAggregatesInput = {
    AND?: UserEducationScalarWhereWithAggregatesInput | UserEducationScalarWhereWithAggregatesInput[]
    OR?: UserEducationScalarWhereWithAggregatesInput[]
    NOT?: UserEducationScalarWhereWithAggregatesInput | UserEducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserEducation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserEducation"> | Date | string
    title?: StringWithAggregatesFilter<"UserEducation"> | string
    description?: StringWithAggregatesFilter<"UserEducation"> | string
    startDate?: DateTimeWithAggregatesFilter<"UserEducation"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"UserEducation"> | Date | string | null
    userId?: StringWithAggregatesFilter<"UserEducation"> | string
    institutionId?: StringWithAggregatesFilter<"UserEducation"> | string
  }

  export type AuthCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    User?: UserCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    User?: UserUncheckedCreateNestedOneWithoutAuthInput
  }

  export type AuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    User?: UserUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type AuthCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
  }

  export type AuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    auth?: AuthCreateNestedOneWithoutUserInput
    UserExperience?: UserExperienceCreateNestedManyWithoutUserInput
    UserEducation?: UserEducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    authId?: string | null
    UserExperience?: UserExperienceUncheckedCreateNestedManyWithoutUserInput
    UserEducation?: UserEducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: AuthUpdateOneWithoutUserNestedInput
    UserExperience?: UserExperienceUpdateManyWithoutUserNestedInput
    UserEducation?: UserEducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUncheckedUpdateManyWithoutUserNestedInput
    UserEducation?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    authId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    authId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstitutionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
    UserExperience?: UserExperienceCreateNestedManyWithoutInstitutionInput
    UserEducation?: UserEducationCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
    UserExperience?: UserExperienceUncheckedCreateNestedManyWithoutInstitutionInput
    UserEducation?: UserEducationUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUpdateManyWithoutInstitutionNestedInput
    UserEducation?: UserEducationUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUncheckedUpdateManyWithoutInstitutionNestedInput
    UserEducation?: UserEducationUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
  }

  export type InstitutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InstitutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserExperienceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserExperienceInput
    institution: InstitutionCreateNestedOneWithoutUserExperienceInput
  }

  export type UserExperienceUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
    institutionId: string
  }

  export type UserExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserExperienceNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutUserExperienceNestedInput
  }

  export type UserExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserExperienceCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
    institutionId: string
  }

  export type UserExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEducationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserEducationInput
    institution: InstitutionCreateNestedOneWithoutUserEducationInput
  }

  export type UserEducationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
    institutionId: string
  }

  export type UserEducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserEducationNestedInput
    institution?: InstitutionUpdateOneRequiredWithoutUserEducationNestedInput
  }

  export type UserEducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEducationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
    institutionId: string
  }

  export type UserEducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserEducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuthCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AuthMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AuthMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AuthNullableScalarRelationFilter = {
    is?: AuthWhereInput | null
    isNot?: AuthWhereInput | null
  }

  export type UserExperienceListRelationFilter = {
    every?: UserExperienceWhereInput
    some?: UserExperienceWhereInput
    none?: UserExperienceWhereInput
  }

  export type UserEducationListRelationFilter = {
    every?: UserEducationWhereInput
    some?: UserEducationWhereInput
    none?: UserEducationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserEducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    profilePicture?: SortOrder
    about?: SortOrder
    authId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    profilePicture?: SortOrder
    about?: SortOrder
    authId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    specialization?: SortOrder
    profilePicture?: SortOrder
    about?: SortOrder
    authId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type InstitutionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    about?: SortOrder
    location?: SortOrder
  }

  export type InstitutionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    about?: SortOrder
    location?: SortOrder
  }

  export type InstitutionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    profilePicture?: SortOrder
    about?: SortOrder
    location?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InstitutionScalarRelationFilter = {
    is?: InstitutionWhereInput
    isNot?: InstitutionWhereInput
  }

  export type UserExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
  }

  export type UserExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
  }

  export type UserExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserEducationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
  }

  export type UserEducationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
  }

  export type UserEducationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    institutionId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAuthInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    connect?: UserWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutAuthNestedInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    upsert?: UserUpsertWithoutAuthInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthInput, UserUpdateWithoutAuthInput>, UserUncheckedUpdateWithoutAuthInput>
  }

  export type UserUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthInput
    upsert?: UserUpsertWithoutAuthInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthInput, UserUpdateWithoutAuthInput>, UserUncheckedUpdateWithoutAuthInput>
  }

  export type AuthCreateNestedOneWithoutUserInput = {
    create?: XOR<AuthCreateWithoutUserInput, AuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthCreateOrConnectWithoutUserInput
    connect?: AuthWhereUniqueInput
  }

  export type UserExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExperienceCreateWithoutUserInput, UserExperienceUncheckedCreateWithoutUserInput> | UserExperienceCreateWithoutUserInput[] | UserExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutUserInput | UserExperienceCreateOrConnectWithoutUserInput[]
    createMany?: UserExperienceCreateManyUserInputEnvelope
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
  }

  export type UserEducationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
  }

  export type UserExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExperienceCreateWithoutUserInput, UserExperienceUncheckedCreateWithoutUserInput> | UserExperienceCreateWithoutUserInput[] | UserExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutUserInput | UserExperienceCreateOrConnectWithoutUserInput[]
    createMany?: UserExperienceCreateManyUserInputEnvelope
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
  }

  export type UserEducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AuthUpdateOneWithoutUserNestedInput = {
    create?: XOR<AuthCreateWithoutUserInput, AuthUncheckedCreateWithoutUserInput>
    connectOrCreate?: AuthCreateOrConnectWithoutUserInput
    upsert?: AuthUpsertWithoutUserInput
    disconnect?: AuthWhereInput | boolean
    delete?: AuthWhereInput | boolean
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutUserInput, AuthUpdateWithoutUserInput>, AuthUncheckedUpdateWithoutUserInput>
  }

  export type UserExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExperienceCreateWithoutUserInput, UserExperienceUncheckedCreateWithoutUserInput> | UserExperienceCreateWithoutUserInput[] | UserExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutUserInput | UserExperienceCreateOrConnectWithoutUserInput[]
    upsert?: UserExperienceUpsertWithWhereUniqueWithoutUserInput | UserExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExperienceCreateManyUserInputEnvelope
    set?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    disconnect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    delete?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    update?: UserExperienceUpdateWithWhereUniqueWithoutUserInput | UserExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExperienceUpdateManyWithWhereWithoutUserInput | UserExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExperienceScalarWhereInput | UserExperienceScalarWhereInput[]
  }

  export type UserEducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    upsert?: UserEducationUpsertWithWhereUniqueWithoutUserInput | UserEducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    set?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    disconnect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    delete?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    update?: UserEducationUpdateWithWhereUniqueWithoutUserInput | UserEducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEducationUpdateManyWithWhereWithoutUserInput | UserEducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
  }

  export type UserExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExperienceCreateWithoutUserInput, UserExperienceUncheckedCreateWithoutUserInput> | UserExperienceCreateWithoutUserInput[] | UserExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutUserInput | UserExperienceCreateOrConnectWithoutUserInput[]
    upsert?: UserExperienceUpsertWithWhereUniqueWithoutUserInput | UserExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExperienceCreateManyUserInputEnvelope
    set?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    disconnect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    delete?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    update?: UserExperienceUpdateWithWhereUniqueWithoutUserInput | UserExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExperienceUpdateManyWithWhereWithoutUserInput | UserExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExperienceScalarWhereInput | UserExperienceScalarWhereInput[]
  }

  export type UserEducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput> | UserEducationCreateWithoutUserInput[] | UserEducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutUserInput | UserEducationCreateOrConnectWithoutUserInput[]
    upsert?: UserEducationUpsertWithWhereUniqueWithoutUserInput | UserEducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserEducationCreateManyUserInputEnvelope
    set?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    disconnect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    delete?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    update?: UserEducationUpdateWithWhereUniqueWithoutUserInput | UserEducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserEducationUpdateManyWithWhereWithoutUserInput | UserEducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
  }

  export type UserExperienceCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<UserExperienceCreateWithoutInstitutionInput, UserExperienceUncheckedCreateWithoutInstitutionInput> | UserExperienceCreateWithoutInstitutionInput[] | UserExperienceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutInstitutionInput | UserExperienceCreateOrConnectWithoutInstitutionInput[]
    createMany?: UserExperienceCreateManyInstitutionInputEnvelope
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
  }

  export type UserEducationCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<UserEducationCreateWithoutInstitutionInput, UserEducationUncheckedCreateWithoutInstitutionInput> | UserEducationCreateWithoutInstitutionInput[] | UserEducationUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutInstitutionInput | UserEducationCreateOrConnectWithoutInstitutionInput[]
    createMany?: UserEducationCreateManyInstitutionInputEnvelope
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
  }

  export type UserExperienceUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<UserExperienceCreateWithoutInstitutionInput, UserExperienceUncheckedCreateWithoutInstitutionInput> | UserExperienceCreateWithoutInstitutionInput[] | UserExperienceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutInstitutionInput | UserExperienceCreateOrConnectWithoutInstitutionInput[]
    createMany?: UserExperienceCreateManyInstitutionInputEnvelope
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
  }

  export type UserEducationUncheckedCreateNestedManyWithoutInstitutionInput = {
    create?: XOR<UserEducationCreateWithoutInstitutionInput, UserEducationUncheckedCreateWithoutInstitutionInput> | UserEducationCreateWithoutInstitutionInput[] | UserEducationUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutInstitutionInput | UserEducationCreateOrConnectWithoutInstitutionInput[]
    createMany?: UserEducationCreateManyInstitutionInputEnvelope
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
  }

  export type UserExperienceUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<UserExperienceCreateWithoutInstitutionInput, UserExperienceUncheckedCreateWithoutInstitutionInput> | UserExperienceCreateWithoutInstitutionInput[] | UserExperienceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutInstitutionInput | UserExperienceCreateOrConnectWithoutInstitutionInput[]
    upsert?: UserExperienceUpsertWithWhereUniqueWithoutInstitutionInput | UserExperienceUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: UserExperienceCreateManyInstitutionInputEnvelope
    set?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    disconnect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    delete?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    update?: UserExperienceUpdateWithWhereUniqueWithoutInstitutionInput | UserExperienceUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: UserExperienceUpdateManyWithWhereWithoutInstitutionInput | UserExperienceUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: UserExperienceScalarWhereInput | UserExperienceScalarWhereInput[]
  }

  export type UserEducationUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<UserEducationCreateWithoutInstitutionInput, UserEducationUncheckedCreateWithoutInstitutionInput> | UserEducationCreateWithoutInstitutionInput[] | UserEducationUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutInstitutionInput | UserEducationCreateOrConnectWithoutInstitutionInput[]
    upsert?: UserEducationUpsertWithWhereUniqueWithoutInstitutionInput | UserEducationUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: UserEducationCreateManyInstitutionInputEnvelope
    set?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    disconnect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    delete?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    update?: UserEducationUpdateWithWhereUniqueWithoutInstitutionInput | UserEducationUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: UserEducationUpdateManyWithWhereWithoutInstitutionInput | UserEducationUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
  }

  export type UserExperienceUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<UserExperienceCreateWithoutInstitutionInput, UserExperienceUncheckedCreateWithoutInstitutionInput> | UserExperienceCreateWithoutInstitutionInput[] | UserExperienceUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserExperienceCreateOrConnectWithoutInstitutionInput | UserExperienceCreateOrConnectWithoutInstitutionInput[]
    upsert?: UserExperienceUpsertWithWhereUniqueWithoutInstitutionInput | UserExperienceUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: UserExperienceCreateManyInstitutionInputEnvelope
    set?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    disconnect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    delete?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    connect?: UserExperienceWhereUniqueInput | UserExperienceWhereUniqueInput[]
    update?: UserExperienceUpdateWithWhereUniqueWithoutInstitutionInput | UserExperienceUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: UserExperienceUpdateManyWithWhereWithoutInstitutionInput | UserExperienceUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: UserExperienceScalarWhereInput | UserExperienceScalarWhereInput[]
  }

  export type UserEducationUncheckedUpdateManyWithoutInstitutionNestedInput = {
    create?: XOR<UserEducationCreateWithoutInstitutionInput, UserEducationUncheckedCreateWithoutInstitutionInput> | UserEducationCreateWithoutInstitutionInput[] | UserEducationUncheckedCreateWithoutInstitutionInput[]
    connectOrCreate?: UserEducationCreateOrConnectWithoutInstitutionInput | UserEducationCreateOrConnectWithoutInstitutionInput[]
    upsert?: UserEducationUpsertWithWhereUniqueWithoutInstitutionInput | UserEducationUpsertWithWhereUniqueWithoutInstitutionInput[]
    createMany?: UserEducationCreateManyInstitutionInputEnvelope
    set?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    disconnect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    delete?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    connect?: UserEducationWhereUniqueInput | UserEducationWhereUniqueInput[]
    update?: UserEducationUpdateWithWhereUniqueWithoutInstitutionInput | UserEducationUpdateWithWhereUniqueWithoutInstitutionInput[]
    updateMany?: UserEducationUpdateManyWithWhereWithoutInstitutionInput | UserEducationUpdateManyWithWhereWithoutInstitutionInput[]
    deleteMany?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserExperienceInput = {
    create?: XOR<UserCreateWithoutUserExperienceInput, UserUncheckedCreateWithoutUserExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExperienceInput
    connect?: UserWhereUniqueInput
  }

  export type InstitutionCreateNestedOneWithoutUserExperienceInput = {
    create?: XOR<InstitutionCreateWithoutUserExperienceInput, InstitutionUncheckedCreateWithoutUserExperienceInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserExperienceInput
    connect?: InstitutionWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutUserExperienceNestedInput = {
    create?: XOR<UserCreateWithoutUserExperienceInput, UserUncheckedCreateWithoutUserExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExperienceInput
    upsert?: UserUpsertWithoutUserExperienceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserExperienceInput, UserUpdateWithoutUserExperienceInput>, UserUncheckedUpdateWithoutUserExperienceInput>
  }

  export type InstitutionUpdateOneRequiredWithoutUserExperienceNestedInput = {
    create?: XOR<InstitutionCreateWithoutUserExperienceInput, InstitutionUncheckedCreateWithoutUserExperienceInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserExperienceInput
    upsert?: InstitutionUpsertWithoutUserExperienceInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutUserExperienceInput, InstitutionUpdateWithoutUserExperienceInput>, InstitutionUncheckedUpdateWithoutUserExperienceInput>
  }

  export type UserCreateNestedOneWithoutUserEducationInput = {
    create?: XOR<UserCreateWithoutUserEducationInput, UserUncheckedCreateWithoutUserEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEducationInput
    connect?: UserWhereUniqueInput
  }

  export type InstitutionCreateNestedOneWithoutUserEducationInput = {
    create?: XOR<InstitutionCreateWithoutUserEducationInput, InstitutionUncheckedCreateWithoutUserEducationInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserEducationInput
    connect?: InstitutionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserEducationNestedInput = {
    create?: XOR<UserCreateWithoutUserEducationInput, UserUncheckedCreateWithoutUserEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserEducationInput
    upsert?: UserUpsertWithoutUserEducationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserEducationInput, UserUpdateWithoutUserEducationInput>, UserUncheckedUpdateWithoutUserEducationInput>
  }

  export type InstitutionUpdateOneRequiredWithoutUserEducationNestedInput = {
    create?: XOR<InstitutionCreateWithoutUserEducationInput, InstitutionUncheckedCreateWithoutUserEducationInput>
    connectOrCreate?: InstitutionCreateOrConnectWithoutUserEducationInput
    upsert?: InstitutionUpsertWithoutUserEducationInput
    connect?: InstitutionWhereUniqueInput
    update?: XOR<XOR<InstitutionUpdateToOneWithWhereWithoutUserEducationInput, InstitutionUpdateWithoutUserEducationInput>, InstitutionUncheckedUpdateWithoutUserEducationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutAuthInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    UserExperience?: UserExperienceCreateNestedManyWithoutUserInput
    UserEducation?: UserEducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    UserExperience?: UserExperienceUncheckedCreateNestedManyWithoutUserInput
    UserEducation?: UserEducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
  }

  export type UserUpsertWithoutAuthInput = {
    update: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
    create: XOR<UserCreateWithoutAuthInput, UserUncheckedCreateWithoutAuthInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthInput, UserUncheckedUpdateWithoutAuthInput>
  }

  export type UserUpdateWithoutAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUpdateManyWithoutUserNestedInput
    UserEducation?: UserEducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUncheckedUpdateManyWithoutUserNestedInput
    UserEducation?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
  }

  export type AuthUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
  }

  export type AuthCreateOrConnectWithoutUserInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutUserInput, AuthUncheckedCreateWithoutUserInput>
  }

  export type UserExperienceCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    institution: InstitutionCreateNestedOneWithoutUserExperienceInput
  }

  export type UserExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    institutionId: string
  }

  export type UserExperienceCreateOrConnectWithoutUserInput = {
    where: UserExperienceWhereUniqueInput
    create: XOR<UserExperienceCreateWithoutUserInput, UserExperienceUncheckedCreateWithoutUserInput>
  }

  export type UserExperienceCreateManyUserInputEnvelope = {
    data: UserExperienceCreateManyUserInput | UserExperienceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserEducationCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    institution: InstitutionCreateNestedOneWithoutUserEducationInput
  }

  export type UserEducationUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    institutionId: string
  }

  export type UserEducationCreateOrConnectWithoutUserInput = {
    where: UserEducationWhereUniqueInput
    create: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput>
  }

  export type UserEducationCreateManyUserInputEnvelope = {
    data: UserEducationCreateManyUserInput | UserEducationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthUpsertWithoutUserInput = {
    update: XOR<AuthUpdateWithoutUserInput, AuthUncheckedUpdateWithoutUserInput>
    create: XOR<AuthCreateWithoutUserInput, AuthUncheckedCreateWithoutUserInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutUserInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutUserInput, AuthUncheckedUpdateWithoutUserInput>
  }

  export type AuthUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AuthUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: UserExperienceWhereUniqueInput
    update: XOR<UserExperienceUpdateWithoutUserInput, UserExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<UserExperienceCreateWithoutUserInput, UserExperienceUncheckedCreateWithoutUserInput>
  }

  export type UserExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: UserExperienceWhereUniqueInput
    data: XOR<UserExperienceUpdateWithoutUserInput, UserExperienceUncheckedUpdateWithoutUserInput>
  }

  export type UserExperienceUpdateManyWithWhereWithoutUserInput = {
    where: UserExperienceScalarWhereInput
    data: XOR<UserExperienceUpdateManyMutationInput, UserExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type UserExperienceScalarWhereInput = {
    AND?: UserExperienceScalarWhereInput | UserExperienceScalarWhereInput[]
    OR?: UserExperienceScalarWhereInput[]
    NOT?: UserExperienceScalarWhereInput | UserExperienceScalarWhereInput[]
    id?: StringFilter<"UserExperience"> | string
    createdAt?: DateTimeFilter<"UserExperience"> | Date | string
    updatedAt?: DateTimeFilter<"UserExperience"> | Date | string
    title?: StringFilter<"UserExperience"> | string
    description?: StringFilter<"UserExperience"> | string
    startDate?: DateTimeFilter<"UserExperience"> | Date | string
    endDate?: DateTimeNullableFilter<"UserExperience"> | Date | string | null
    userId?: StringFilter<"UserExperience"> | string
    institutionId?: StringFilter<"UserExperience"> | string
  }

  export type UserEducationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserEducationWhereUniqueInput
    update: XOR<UserEducationUpdateWithoutUserInput, UserEducationUncheckedUpdateWithoutUserInput>
    create: XOR<UserEducationCreateWithoutUserInput, UserEducationUncheckedCreateWithoutUserInput>
  }

  export type UserEducationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserEducationWhereUniqueInput
    data: XOR<UserEducationUpdateWithoutUserInput, UserEducationUncheckedUpdateWithoutUserInput>
  }

  export type UserEducationUpdateManyWithWhereWithoutUserInput = {
    where: UserEducationScalarWhereInput
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserEducationScalarWhereInput = {
    AND?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
    OR?: UserEducationScalarWhereInput[]
    NOT?: UserEducationScalarWhereInput | UserEducationScalarWhereInput[]
    id?: StringFilter<"UserEducation"> | string
    createdAt?: DateTimeFilter<"UserEducation"> | Date | string
    updatedAt?: DateTimeFilter<"UserEducation"> | Date | string
    title?: StringFilter<"UserEducation"> | string
    description?: StringFilter<"UserEducation"> | string
    startDate?: DateTimeFilter<"UserEducation"> | Date | string
    endDate?: DateTimeNullableFilter<"UserEducation"> | Date | string | null
    userId?: StringFilter<"UserEducation"> | string
    institutionId?: StringFilter<"UserEducation"> | string
  }

  export type UserExperienceCreateWithoutInstitutionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserExperienceInput
  }

  export type UserExperienceUncheckedCreateWithoutInstitutionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
  }

  export type UserExperienceCreateOrConnectWithoutInstitutionInput = {
    where: UserExperienceWhereUniqueInput
    create: XOR<UserExperienceCreateWithoutInstitutionInput, UserExperienceUncheckedCreateWithoutInstitutionInput>
  }

  export type UserExperienceCreateManyInstitutionInputEnvelope = {
    data: UserExperienceCreateManyInstitutionInput | UserExperienceCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserEducationCreateWithoutInstitutionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    user: UserCreateNestedOneWithoutUserEducationInput
  }

  export type UserEducationUncheckedCreateWithoutInstitutionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
  }

  export type UserEducationCreateOrConnectWithoutInstitutionInput = {
    where: UserEducationWhereUniqueInput
    create: XOR<UserEducationCreateWithoutInstitutionInput, UserEducationUncheckedCreateWithoutInstitutionInput>
  }

  export type UserEducationCreateManyInstitutionInputEnvelope = {
    data: UserEducationCreateManyInstitutionInput | UserEducationCreateManyInstitutionInput[]
    skipDuplicates?: boolean
  }

  export type UserExperienceUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: UserExperienceWhereUniqueInput
    update: XOR<UserExperienceUpdateWithoutInstitutionInput, UserExperienceUncheckedUpdateWithoutInstitutionInput>
    create: XOR<UserExperienceCreateWithoutInstitutionInput, UserExperienceUncheckedCreateWithoutInstitutionInput>
  }

  export type UserExperienceUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: UserExperienceWhereUniqueInput
    data: XOR<UserExperienceUpdateWithoutInstitutionInput, UserExperienceUncheckedUpdateWithoutInstitutionInput>
  }

  export type UserExperienceUpdateManyWithWhereWithoutInstitutionInput = {
    where: UserExperienceScalarWhereInput
    data: XOR<UserExperienceUpdateManyMutationInput, UserExperienceUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type UserEducationUpsertWithWhereUniqueWithoutInstitutionInput = {
    where: UserEducationWhereUniqueInput
    update: XOR<UserEducationUpdateWithoutInstitutionInput, UserEducationUncheckedUpdateWithoutInstitutionInput>
    create: XOR<UserEducationCreateWithoutInstitutionInput, UserEducationUncheckedCreateWithoutInstitutionInput>
  }

  export type UserEducationUpdateWithWhereUniqueWithoutInstitutionInput = {
    where: UserEducationWhereUniqueInput
    data: XOR<UserEducationUpdateWithoutInstitutionInput, UserEducationUncheckedUpdateWithoutInstitutionInput>
  }

  export type UserEducationUpdateManyWithWhereWithoutInstitutionInput = {
    where: UserEducationScalarWhereInput
    data: XOR<UserEducationUpdateManyMutationInput, UserEducationUncheckedUpdateManyWithoutInstitutionInput>
  }

  export type UserCreateWithoutUserExperienceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    auth?: AuthCreateNestedOneWithoutUserInput
    UserEducation?: UserEducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserExperienceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    authId?: string | null
    UserEducation?: UserEducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserExperienceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserExperienceInput, UserUncheckedCreateWithoutUserExperienceInput>
  }

  export type InstitutionCreateWithoutUserExperienceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
    UserEducation?: UserEducationCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutUserExperienceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
    UserEducation?: UserEducationUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutUserExperienceInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutUserExperienceInput, InstitutionUncheckedCreateWithoutUserExperienceInput>
  }

  export type UserUpsertWithoutUserExperienceInput = {
    update: XOR<UserUpdateWithoutUserExperienceInput, UserUncheckedUpdateWithoutUserExperienceInput>
    create: XOR<UserCreateWithoutUserExperienceInput, UserUncheckedCreateWithoutUserExperienceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserExperienceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserExperienceInput, UserUncheckedUpdateWithoutUserExperienceInput>
  }

  export type UserUpdateWithoutUserExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: AuthUpdateOneWithoutUserNestedInput
    UserEducation?: UserEducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    UserEducation?: UserEducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstitutionUpsertWithoutUserExperienceInput = {
    update: XOR<InstitutionUpdateWithoutUserExperienceInput, InstitutionUncheckedUpdateWithoutUserExperienceInput>
    create: XOR<InstitutionCreateWithoutUserExperienceInput, InstitutionUncheckedCreateWithoutUserExperienceInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutUserExperienceInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutUserExperienceInput, InstitutionUncheckedUpdateWithoutUserExperienceInput>
  }

  export type InstitutionUpdateWithoutUserExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    UserEducation?: UserEducationUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutUserExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    UserEducation?: UserEducationUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type UserCreateWithoutUserEducationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    auth?: AuthCreateNestedOneWithoutUserInput
    UserExperience?: UserExperienceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserEducationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName: string
    lastName: string
    email: string
    specialization: string
    profilePicture?: string | null
    about?: string | null
    authId?: string | null
    UserExperience?: UserExperienceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserEducationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserEducationInput, UserUncheckedCreateWithoutUserEducationInput>
  }

  export type InstitutionCreateWithoutUserEducationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
    UserExperience?: UserExperienceCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionUncheckedCreateWithoutUserEducationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    profilePicture?: string | null
    about?: string | null
    location?: string | null
    UserExperience?: UserExperienceUncheckedCreateNestedManyWithoutInstitutionInput
  }

  export type InstitutionCreateOrConnectWithoutUserEducationInput = {
    where: InstitutionWhereUniqueInput
    create: XOR<InstitutionCreateWithoutUserEducationInput, InstitutionUncheckedCreateWithoutUserEducationInput>
  }

  export type UserUpsertWithoutUserEducationInput = {
    update: XOR<UserUpdateWithoutUserEducationInput, UserUncheckedUpdateWithoutUserEducationInput>
    create: XOR<UserCreateWithoutUserEducationInput, UserUncheckedCreateWithoutUserEducationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserEducationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserEducationInput, UserUncheckedUpdateWithoutUserEducationInput>
  }

  export type UserUpdateWithoutUserEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    auth?: AuthUpdateOneWithoutUserNestedInput
    UserExperience?: UserExperienceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    authId?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InstitutionUpsertWithoutUserEducationInput = {
    update: XOR<InstitutionUpdateWithoutUserEducationInput, InstitutionUncheckedUpdateWithoutUserEducationInput>
    create: XOR<InstitutionCreateWithoutUserEducationInput, InstitutionUncheckedCreateWithoutUserEducationInput>
    where?: InstitutionWhereInput
  }

  export type InstitutionUpdateToOneWithWhereWithoutUserEducationInput = {
    where?: InstitutionWhereInput
    data: XOR<InstitutionUpdateWithoutUserEducationInput, InstitutionUncheckedUpdateWithoutUserEducationInput>
  }

  export type InstitutionUpdateWithoutUserEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUpdateManyWithoutInstitutionNestedInput
  }

  export type InstitutionUncheckedUpdateWithoutUserEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    UserExperience?: UserExperienceUncheckedUpdateManyWithoutInstitutionNestedInput
  }

  export type UserExperienceCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    institutionId: string
  }

  export type UserEducationCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    institutionId: string
  }

  export type UserExperienceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    institution?: InstitutionUpdateOneRequiredWithoutUserExperienceNestedInput
  }

  export type UserExperienceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserExperienceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEducationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    institution?: InstitutionUpdateOneRequiredWithoutUserEducationNestedInput
  }

  export type UserEducationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEducationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    institutionId?: StringFieldUpdateOperationsInput | string
  }

  export type UserExperienceCreateManyInstitutionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
  }

  export type UserEducationCreateManyInstitutionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    startDate: Date | string
    endDate?: Date | string | null
    userId: string
  }

  export type UserExperienceUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserExperienceNestedInput
  }

  export type UserExperienceUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserExperienceUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEducationUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserEducationNestedInput
  }

  export type UserEducationUncheckedUpdateWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserEducationUncheckedUpdateManyWithoutInstitutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}