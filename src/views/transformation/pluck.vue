<template>
    <div>
    </div>
</template>
<script>
    // 选择属性来发出。
    import { from,of,merge } from 'rxjs';
    import { pluck } from 'rxjs/operators';


    // const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
    // // 提取 name 属性
    // const example = source.pipe(pluck('name'));
    // // 输出: "Joe", "Sarah"
    // const subscribe = example.subscribe(val => console.log(val));


    const source = from([
        { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
        // 当找不到 job 属性的时候会返回 undefined
        { name: 'Sarah', age: 35 }
    ]);
    // 提取 job 中的 title 属性
    const example = source.pipe(pluck('job', 'title'));
    // 输出: "Developer" , undefined
    const subscribe = example.subscribe(val => console.log(val));





</script>