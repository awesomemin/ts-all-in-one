function zip(
  x: number,
  y: string,
  z: boolean
): { x: number; y: string; z: boolean } {
  return { x, y, z };
}

type ZipParams = Parameters<typeof zip>;
type ZipReturn = ReturnType<typeof zip>;

type MyParameters<F extends (...args: any[]) => any> = F extends (
  ...args: infer A
) => any
  ? A
  : never;
type MyReturn<F extends (...args: any[]) => any> = F extends (
  ...args: any[]
) => infer A
  ? A
  : never;

type MyZipParams = MyParameters<typeof zip>;
type MyZipReturn = MyReturn<typeof zip>;
