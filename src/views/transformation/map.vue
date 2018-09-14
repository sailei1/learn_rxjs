<template>
    <div>
    </div>
</template>
<script>
    //map 对源 observable 的每个值应用投射函数

    // RxJS v6+
    import { from } from 'rxjs';
    import { map } from 'rxjs/operators';

    // // 发出 (1,2,3,4,5)
    // const source = from([1, 2, 3, 4, 5]);
    // // 每个数字加10
    // const example = source.pipe(map(val => val + 10));
    // // 输出: 11,12,13,14,15
    // const subscribe = example.subscribe(val => console.log(val));

    const source = from([
        { name: 'Joe', age: 30 },
        { name: 'Frank', age: 20 },
        { name: 'Ryan', age: 50 }
    ]);
    // 提取每个 person 的 name 属性
    const example = source.pipe(map(({ name }) => name));
    // 输出: "Joe","Frank","Ryan"
    const subscribe = example.subscribe(val => console.log(val));


</script>