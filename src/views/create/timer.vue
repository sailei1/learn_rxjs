<template>
    <div>
    </div>
</template>
<script>
    // RxJS v6+
    import { timer } from 'rxjs';

    // // 1秒后发出0，然后结束，因为没有提供第二个参数
    // const source = timer(1000);
    // // 输出: 0
    // const subscribe = source.subscribe(val => console.log(val));

    /*
      timer 接收第二个参数，它决定了发出序列值的频率，在本例中我们在1秒发出第一个值，
      然后每2秒发出序列值
    */
    const source = timer(1000, 2000);
    // 输出: 0,1,2,3,4,5......
    const subscribe = source.subscribe(val => console.log(val));




</script>