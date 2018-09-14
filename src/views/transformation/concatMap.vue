<template>
    <div>
    </div>
</template>
<script>

    //concatMap 将值映射成内部 observable，并按顺序订阅和发出。
    // 注意 concatMap 和 mergeMap 之间的区别。 因为 concatMap 之前前一个内部 observable 完成后才会订阅下一个， source 中延迟 2000ms 值会先发出。
    // 对比的话， mergeMap 会立即订阅所有内部 observables， 延迟少的 observable (1000ms) 会先发出值，然后才是 2000ms 的 observable 。

    // RxJS v6+
    import { of } from 'rxjs';
    import { concatMap, delay, mergeMap } from 'rxjs/operators';

    // 发出延迟值
    const source = of(2000, 1000);
    // 将内部 observable 映射成 source，当前一个完成时发出结果并订阅下一个
    const example = source.pipe(
        concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    );
    // 输出: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
    const subscribe = example.subscribe(val =>
        console.log(`With concatMap: ${val}`)
    );

    // 展示 concatMap 和 mergeMap 之间的区别
    const mergeMapExample = source
        .pipe(
            // 只是为了确保 meregeMap 的日志晚于 concatMap 示例
            delay(5000),
            mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
        )
        .subscribe(val => console.log(`With mergeMap: ${val}`));


    // // 发出 'Hello' 和 'Goodbye'
    // const source = of('Hello', 'Goodbye');
    // // 使用 promise 的示例
    // const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
    // // 将 source 的值映射成内部 observable，当一个完成发出结果后再继续下一个
    // const example = source.pipe(concatMap(val => examplePromise(val)));
    // // 输出: 'Example w/ Promise: 'Hello World', Example w/ Promise: 'Goodbye World'
    // const subscribe = example.subscribe(val =>
    //     console.log('Example w/ Promise:', val)
    // );







</script>