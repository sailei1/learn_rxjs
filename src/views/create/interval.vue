<template>
    <div>
    </div>
</template>
<script>
    //interval有一个参数必须是数值(Number)，这的数值代表发出讯号的间隔时间(ms)。这两段程式码基本上是等价的，会持续每隔一秒送出一个从零开始递增的数值！
    // RxJS v6+
    import { interval } from 'rxjs';

    //emit value in sequence every 1 second
    const source = interval(1000);
    //output: 0,1,2,3,4,5....
    const subscribe = source.subscribe(val => console.log(val));




</script>