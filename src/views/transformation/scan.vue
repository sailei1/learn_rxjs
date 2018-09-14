<template>
    <div>
    </div>
</template>
<script>
    //scan  随着时间的推移进行归并。
    import { of ,Subject} from 'rxjs';
    import { scan } from 'rxjs/operators';


    // const source = of(1, 2, 3);
    // // 基础的 scan 示例，从0开始，随着时间的推移计算总数
    // const example = source.pipe(scan((acc, curr) => acc + curr, 0));
    // // 输出累加值
    // // 输出: 1,3,6
    // const subscribe = example.subscribe(val => console.log(val));

    const subject = new Subject();
    // scan 示例，随着时间的推移构建对象
    const example = subject.pipe(
        scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
    // 输出累加值
    const subscribe = example.subscribe(val =>
        console.log('Accumulated object:', val)
    );
    // subject 发出的值会被添加成对象的属性
    // {name: 'Joe'}
    subject.next({ name: 'Joe' });
    // {name: 'Joe', age: 30}
    subject.next({ age: 30 });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    subject.next({ favoriteLanguage: 'JavaScript' });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript2'}

    subject.next({ favoriteLanguage: 'JavaScript2' });







</script>