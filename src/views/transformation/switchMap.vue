<template>
    <div>
    </div>
</template>
<script>
    //switchMap 和其他打平操作符的主要区别是它具有取消效果。在每次发出时，会取消前一个内部 observable (你所提供函数的结果) 的订阅，然后订阅一个新的 observable 。
    // 你可以通过短语切换成一个新的 observable来记忆它。

    import { interval ,fromEvent} from 'rxjs';
    import { switchMap, mapTo } from 'rxjs/operators';

    // 发出每次点击
    const source = fromEvent(document, 'click');
    // 如果3秒内发生了另一次点击，则消息不会被发出
    const example = source.pipe(
        switchMap(val => interval(3000).pipe(mapTo('Hello, I made it!')))
    );
    // (点击)...3s...'Hello I made it!'...(点击)...2s(点击)...
    const subscribe = example.subscribe(val => console.log(val));

</script>