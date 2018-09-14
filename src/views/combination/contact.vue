<template>
    <div>
    </div>
</template>
<script>
    //conact  按照顺序，前一个 observable 完成了再订阅下一个 observable 并发出值。

    // 你可以把 concat 想象成 ATM 机前的长队，下一次交易 (subscription) 不能在前一个交易完成前开始！

    // 此操作符可以既有静态方法，又有实例方法！

    // 如果生产量是首要考虑的，而不需要关心产生值的顺序，那么试试用 merge 来代替！

    // concat 2个基础的 observables
    // import { concat } from 'rxjs/operators';
    // import { of } from 'rxjs';
    //
    // // 发出 1,2,3
    // const sourceOne = of(1, 2, 3);
    // // 发出 4,5,6
    // const sourceTwo = of(4, 5, 6);
    // // 先发出 sourceOne 的值，当完成时订阅 sourceTwo
    // const example = sourceOne.pipe(concat(sourceTwo));
    // // 输出: 1,2,3,4,5,6
    // const subscribe = example.subscribe(val =>
    //     console.log('Example: Basic concat:', val)
    // );

    //  concat 作为静态方法
    // import { of,concat } from 'rxjs';
    //
    // // 发出 1,2,3
    // const sourceOne = of(1, 2, 3);
    // // 发出 4,5,6
    // const sourceTwo = of(4, 5, 6);
    //
    // // 作为静态方法使用
    // const example = concat(sourceOne, sourceTwo);
    // // 输出: 1,2,3,4,5,6
    // const subscribe = example.subscribe(val => console.log(val));


    import { delay, concat } from 'rxjs/operators';
    import { of } from 'rxjs';

    // 发出 1,2,3
    const sourceOne = of(1, 2, 3);
    // 发出 4,5,6
    const sourceTwo = of(4, 5, 6);

    // 延迟3秒，然后发出
    const sourceThree = sourceOne.pipe(delay(3000));
    // sourceTwo 要等待 sourceOne 完成才能订阅
    const example = sourceThree.pipe(concat(sourceTwo));
    // 输出: 1,2,3,4,5,6
    const subscribe = example.subscribe(val =>
        console.log('Example: Delayed source one:', val)
    );



</script>