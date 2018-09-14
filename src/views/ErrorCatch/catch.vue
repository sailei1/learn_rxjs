<template>
    <div>
    </div>
</template>
<script>


    // // RxJS v6+
    // import { throwError, of } from 'rxjs';
    // import { catchError } from 'rxjs/operators';
    // //emit error
    // const source = throwError('This is an error!');
    // //gracefully handle error, returning observable with error message
    // const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
    // //output: 'I caught: This is an error'
    // const subscribe = example.subscribe(val => console.log(val));


    // RxJS v6+
    import { timer, from, of } from 'rxjs';
    import { mergeMap, catchError } from 'rxjs/operators';

    // 创建立即拒绝的 Promise
    const myBadPromise = () =>
        new Promise((resolve, reject) => reject('Rejected!'));
    // 1秒后发出单个值
    const source = timer(1000);
    // 捕获拒绝的 promise，并返回包含错误信息的 observable
    const example = source.pipe(
        mergeMap(_ =>
            fromPromise(myBadPromise()).pipe(
                catchError(error => of(`Bad Promise: ${error}`))
            )
        )
    );
    // 输出: 'Bad Promise: Rejected'
    const subscribe = example.subscribe(val => console.log(val));


</script>