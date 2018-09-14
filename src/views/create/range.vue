<template>
    <div>
    </div>
</template>
<script>
    //range 依次发出给定区间内的数字。
    // RxJS v6+
    import { range } from 'rxjs';

    //emit 1-10 in sequence
    const source = range(1, 10);
    //output: 1,2,3,4,5,6,7,8,9,10
    const example = source.subscribe(val => console.log(val));




</script>