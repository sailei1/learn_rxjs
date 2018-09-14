<template>
    <div>
    </div>
</template>
<script>

    // RxJS v6+
    import { interval } from 'rxjs';
    import { bufferCount } from 'rxjs/operators';

    // 收集缓冲区并在指定数量的值后发出

    // // 创建每1秒发出值的 observable
    // const source = interval(1000);
    // // 在发出3个值后，将缓冲的值作为数组传递
    // const bufferThree = source.pipe(bufferCount(3));
    // // 打印值到控制台
    // // 输出: [0,1,2]...[3,4,5]
    // const subscribe = bufferThree.subscribe(val =>
    //     console.log('Buffered Values:', val)
    // );

    //重叠的缓冲

    // 创建每1秒发出值的 observable
    const source = interval(1000);
    /*
      bufferCount 还接受第二个参数，何时开启下一个缓冲区
      举例来说，如果第一个参数(bufferSize)是3，而第二个参数(startBufferEvery)是1:
      第一次 interval 的值:
      buffer 1: [0]
      第2次 interval 的值:
      buffer 1: [0,1]
      buffer 2: [1]
      第3次 interval 的值:
      buffer 1: [0,1,2] 缓冲数量已达到3，发出缓冲区
      buffer 2: [1,2]
      buffer 3: [2]
      第4次 interval 的值:
      buffer 2: [1,2,3] 缓冲数量已达到3，发出缓冲区
      buffer 3: [2, 3]
      buffer 4: [3]
    */
    const bufferEveryOne = source.pipe(bufferCount(3, 1));
    // 打印值到控制台
    const subscribe = bufferEveryOne.subscribe(val =>
        console.log('Start Buffer Every 1:', val)
    )




</script>