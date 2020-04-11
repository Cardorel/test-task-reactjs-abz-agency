/* 
                  @I used the fake profil))it's meaning that user must to wait to 5s and after this he can see the users.
                  i leanred it anywhere but it's just my concept to do like this!!!!
                   
*/

export const fetchEmptyData = () => {
    let empty = fetchEmpty();
    return {
        empty: wrapPromise(empty),
    }
}


const fetchEmpty = () => {
    //create the fake promise.Just to use it on fetching my users;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('');
        }, 5000);
    })
}


const wrapPromise = promise => {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        err => {
            status = "error";
            result = err;
        }
    )

    return {
        read() {
            if (status === "pending")
                throw suspender;
            else if (status === "success")
                return result;
            else if (status === "error")
                throw suspender;
        }
    }


}





