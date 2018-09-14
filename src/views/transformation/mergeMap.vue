<template>
    <div>
    </div>
</template>
<script>
    //mapTo 将每个发出值映射成常量。

    // RxJS v6+
    import { interval,of } from 'rxjs';
    import { mergeMap ,take} from 'rxjs/operators';


    // /*
    //   你还可以提供第二个参数，它接收源 observable 的值并发出内部 observable 或 promise 的值
    // */
    // // 发出 'Hello'
    // const source = of('Hello');
    // // mergeMap 还会发出 promise 的结果
    // const myPromise = val =>
    //     new Promise(resolve => resolve(`${val} World From Promise!`));
    // const example = source.pipe(
    //     mergeMap(
    //         val => myPromise(val),
    //         (valueFromSource, valueFromPromise) => {
    //             return `Source: ${valueFromSource}, Promise: ${valueFromPromise}`;
    //         }
    //     )
    // );
    // // 输出: "Source: Hello, Promise: Hello World From Promise!"
    // const subscribe = example.subscribe(val => console.log(val));

    // 每1秒发出值
    const source = interval(1000);

    const example = source.pipe(
        mergeMap(
            //project
            val => interval(5000).pipe(take(2)),
            //resultSelector
            (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
            //concurrent
            2
        )
    );
    /*
            输出:
            [0, 0, 0, 0] <--第一个内部 observable
            [1, 1, 0, 0] <--第二个内部 observable
            [0, 0, 1, 1] <--第一个内部 observable
            [1, 1, 1, 1] <--第二个内部 observable
            [2, 2, 0, 0] <--第三个内部 observable
            [3, 3, 0, 0] <--第四个内部 observable
    */
    const subscribe = example.subscribe(val => console.log(val));




</script>