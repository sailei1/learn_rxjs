<template>
    <div>
    </div>
</template>
<script>

    import { map, concatAll,take } from 'rxjs/operators';
    import { of,interval } from 'rxjs';

    // // 每2秒发出值
    // const source = interval(2000);
    // const example = source.pipe(
    //     // 为了演示，增加10并作为 observable 返回
    //     map(val => of(val + 10)),
    //     // 合并内部 observables 的值
    //     concatAll()
    // );
    // // 输出: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
    // const subscribe = example.subscribe(val =>
    //     console.log('Example with Basic Observable:', val)
    // );



    // 创建并解析一个基础的 promise
    const samplePromise = val => new Promise(resolve => resolve(val));
    // 每2秒发出值
    const source = interval(2000);

    const example = source.pipe(
        map(val => samplePromise(val)),
        // 合并解析过的 promise 的值
        concatAll()
    );
    // 输出: 'Example with Promise 0', 'Example with Promise 1'...
    const subscribe = example.subscribe(val =>
        console.log('Example with Promise:', val)
    );



    // const obs1 = interval(1000).pipe(take(5));
    // const obs2 = interval(500).pipe(take(2));
    // const obs3 = interval(2000).pipe(take(1));
    // // 发出3个 observables
    // const source = of(obs1, obs2, obs3);
    // // 按顺序订阅每个内部 obserable，前一个完成了再订阅下一个
    // const example = source.pipe(concatAll());
    // /*
    //   输出: 0,1,2,3,4,0,1,0
    //   怎么运行的...
    //   订阅每个内部 observable 并发出值，当一个完成了才订阅下一个
    //   obs1: 0,1,2,3,4 (complete)
    //   obs2: 0,1 (complete)
    //   obs3: 0 (complete)
    // */
    //
    // const subscribe = example.subscribe(val => console.log(val));




</script>