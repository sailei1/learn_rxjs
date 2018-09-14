<template>
    <div>
    </div>
</template>
<script>
    // bufferTime 收集发出的值，直到经过了提供的时间才将其作为数组发出
    // RxJS v6+
    import { interval } from 'rxjs';
    import { bufferTime } from 'rxjs/operators';

    // 创建每500毫秒发出值的 observable
    const source = interval(500);
    /*
      bufferTime 还接受第二个参数，何时开始下一个缓冲区(时间单位为毫秒)
      举例来说，如果第一个参数(bufferTimeSpan)是2秒，而第二个参数(bufferCreationInterval)是1秒:
    */
    const example = source.pipe(bufferTime(2000, 1000));
    // 打印值到控制台
    const subscribe = example.subscribe(val =>
        console.log('Start Buffer Every 1s:', val)
    );





</script>