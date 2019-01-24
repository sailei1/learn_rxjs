<template>
    <div>
    </div>
</template>
<script>




    import { concat, catchError,retry } from 'rxjs/operators';
    import { Observable, of, throwError } from 'rxjs';
    //来源 https://stackblitz.com/edit/rxjs-refresh-token?file=app%2Fhello.component.ts

    {

        // demo starts with an expired access token
        let accessToken = 'expired'
        let refreshed = false

        // auth service to refresh access token
        const demoRefreshAccessToken = Observable.create(o => {
            // this should call auth service to get a new access token with a refresh token
            console.log('>>> simulate getting a new access token with refresh token...')
            refreshed = true
            accessToken = 'ok'
            o.complete()
        })

        // domain logic that requires valid access token
        const demoAuthHttpRequest = Observable.create(o => {
            // set testFailAfterRefreshAccessToken to true to test permanent error
            const testFailAfterRefreshAccessToken = false

            if (testFailAfterRefreshAccessToken) {
                o.error('access token expired')
            } else {
                if (accessToken === 'expired') {
                    console.log('>>> simulate access token expired!')
                    o.error('access token expired')
                } else {
                    o.next('Demo OK!')
                    o.complete()
                }
            }
        })

        // OBJECTIVE: rxjs logic to renew access token as needed when performing HTTP calls
        // make the demo http call
        // if 'access token expired' error happens
        // refresh the access token via demoRefreshAccessToken
        // then run the source observable (i.e. the demo http call) again
        // if 'access token expired' error happens again, give up with the throwError() to prevent refreshing forever
        demoAuthHttpRequest.pipe(
            catchError((e, source) => {
                // check "e" for actual 401 errors caused by expired token
                if (!refreshed && e === 'access token expired') {
                    return demoRefreshAccessToken.pipe(concat(source))
                } else {
                    return throwError('Unable to access resource after refreshing access token')
                }
            })
        ).subscribe(val => {
            console.log(val)
        })


    }








</script>