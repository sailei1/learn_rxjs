<template>
    <div>
    </div>
</template>
<script>


    //empty会给我们一个空的observable，如果我们订阅这个observable会发生什么事呢？它会立即送出complete的讯息！
    // RxJS v6+
    import { empty } from 'rxjs';


    export default{
        subscriptions(){
            //output: 'Complete!'
            empty().subscribe({
                next: () => console.log('Next'),
                complete: () => console.log('Complete!')
            });
        }
    }

</script>