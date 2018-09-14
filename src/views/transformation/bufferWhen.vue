<template>
    <div>
    </div>
</template>
<script>

    // RxJS v6+
    import { interval } from 'rxjs';
    import { bufferWhen } from 'rxjs/operators';

    // 每1秒发出值
    const oneSecondInterval = interval(1000);
    // 返回的 observable 每5秒发出值
    const fiveSecondInterval = () => interval(5000);
    // 每5秒发出缓冲的值
    const bufferWhenExample = oneSecondInterval.pipe(bufferWhen(fiveSecondInterval));
    // 输出值
    // 输出: [0,1,2,3]...[4,5,6,7,8,9]
    const subscribe = bufferWhenExample.subscribe(val =>
        console.log('Emitted Buffer: ', val)
    );





</script>