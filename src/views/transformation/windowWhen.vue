<template>
    <div>
    </div>
</template>
<script>
    //根据定时器开启和关闭窗口

    import { timer,interval} from 'rxjs';
    import { windowWhen, tap, mergeAll } from 'rxjs/operators';

    // 立即发出值，然后每秒发出值
    const source = timer(0, 1000);
    const example = source.pipe(
        // 每5秒关闭窗口并发出从源 observable 中收集的值的 observable
        windowWhen(() => interval(5000)),
        tap(()=> console.log('NEW WINDOW!'))
    );

    const subscribeTwo = example
        .pipe(
            // 窗口发出嵌套的 observable
            mergeAll()
            /*
              输出:
              "NEW WINDOW!"
              0
              1
              2
              3
              4
              "NEW WINDOW!"
              5
              6
              7
              8
              9
            */
        )
        .subscribe(val => console.log(val));



</script>