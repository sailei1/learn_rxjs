<template>
    <div>
    </div>
</template>
<script>

    //当我们想要同步的传递几个值时，就可以用of这个operator来简洁的表达!
    // RxJS v6+
    import { of } from 'rxjs';
    //emits values of any type
    const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
        return 'Hello';
    });
    //output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(val => console.log(val));




</script>