<template>
    <div>
    </div>
</template>
<script>
    // reduce 将源 observalbe 的值归并为单个值，当源 observable 完成时将这个值发出。
    // 如果每次发送时都需要当前的累加值，请使用 scan!
    import { from,of,merge } from 'rxjs';
    import { reduce } from 'rxjs/operators';



    const source = of(1, 2, 3, 4);
    const example = source.pipe(reduce((acc, val) => acc + val));
    // 输出: Sum: 10'
    const subscribe = example.subscribe(val => console.log('Sum:', val));

</script>