<template>
    <div>
    </div>
</template>
<script>


    //never 会给我们一个无穷的observable，如果我们订阅它又会发生什么事呢？...什么事都不会发生，它就是一个一直存在但却什么都不做的observable。
    // RxJS v6+
    import { never } from 'rxjs';


    export default{
        subscriptions(){
            never().subscribe({
                next: () => console.log('Next'),
                complete: () => console.log('Complete!')
            });
        }
    }

</script>