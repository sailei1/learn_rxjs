<template>
    <div>
    </div>
</template>
<script>
    //windowCount 每发出x个项就开启一个新窗口

    import { timer,interval} from 'rxjs';
    import { windowCount, mergeAll, tap } from 'rxjs/operators';

    // 每1秒发出值
    const source = interval(1000);
    const example = source.pipe(
        // 每发出4个值就开启新窗口
        windowCount(4),
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
              "NEW WINDOW!"
              4
              5
              6
              7
            */
        )
        .subscribe(val => console.log(val));



</script>