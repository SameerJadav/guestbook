type GetEventHandlers<T extends keyof JSX.IntrinsicElements> = Extract<
  keyof JSX.IntrinsicElements[T],
  `on${string}`
>;

/**
 * Provides the event type for a given element and handler.
 *
 * @example
 * ```ts
 * type MyEvent = EventFor<"input", "onChange">;
 * ```
 */
export type EventFor<
  TElement extends keyof JSX.IntrinsicElements,
  THandler extends GetEventHandlers<TElement>,
> = JSX.IntrinsicElements[TElement][THandler] extends
  | ((e: infer TEvent) => unknown)
  | undefined
  ? TEvent
  : never;
