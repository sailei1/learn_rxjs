<template>
    <div>
    </div>
</template>
<script>

    //如果内部 observable 不完成的话，forkJoin 永远不会发出值！

    // import { delay, take } from 'rxjs/operators';
    // import { of,forkJoin,interval } from 'rxjs';

    // const myPromise = val =>
    //     new Promise(resolve =>
    //         setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
    //     );
    //
    // /*
    //   当所有 observables 完成时，将每个 observable
    //   的最新值作为数组发出
    // */
    // const example = forkJoin(
    //     // 立即发出 'Hello'
    //     of('Hello'),
    //     // 1秒后发出 'World'
    //     of('World').pipe(delay(1000)),
    //     // 1秒后发出0
    //     interval(1000).pipe(take(1)),
    //     // 以1秒的时间间隔发出0和1
    //     interval(1000).pipe(take(2)),
    //     // 5秒后解析 'Promise Resolved' 的 promise
    //     myPromise('RESULT')
    // );
    // //输出: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
    // const subscribe = example.subscribe(val => console.log(val));


    import { delay, catchError } from 'rxjs/operators';
    import { forkJoin, of, throwError } from 'rxjs';

    /*
      当所有 observables 完成时，将每个 observable
      的最新值作为数组发出
    */
    // const example = forkJoin(
    //     // 立即发出 'Hello'
    //     of('Hello'),
    //     // 1秒后发出 'World'
    //     of('World').pipe(delay(1000)),
    //     // 抛出错误
    //     throwError('This will error')
    // ).pipe(catchError(error => of(error)));
    // // 输出: 'This will Error'
    // const subscribe = example.subscribe(val => console.log(val));


    /*
      当所有 observables 完成时，将每个 observable
      的最新值作为数组发出
    */
    const example = forkJoin(
        // 立即发出 'Hello'
        of('Hello'),
        // 1秒后发出 'World'
        of('World').pipe(delay(1000)),
        // 抛出错误
        throwError('This will error').pipe(catchError(error => of(error)))
    );
    // 输出: ["Hello", "World", "This will error"]
    const subscribe = example.subscribe(val => console.log(val));



</script>