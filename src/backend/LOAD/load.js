/*   
                                            HERE IS NOT SO IMPORTANT

*/


/*
      It's the first method how i can get my data but i would like to use Redux 
      and have the possibility to keep all my data in the store and take it anywhere
      I know the project it's not biggest but i will do it with Redux )))

*/

export const fetchdata = async (setData) => {
    try {
        let response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5');
        let data = await response.json();
        setData(data);
    } catch (error) {
        console.log(error);      
    }
}



/* 
    ******This Section give you the possibility to see and it's possible to do in MY FILE users.js*******
           *******Like i said , i would prefered to use Redux and leaved this way************
              ***********For the cleaner my File prefere to leave it @here!!!********
*/

/* 

     LOAD DATA WITH ASYNC AWAIT BUT IT'S NOT NOT NECESSARY BECAUSE I WILL USE REDUX!!!!!!!!!!!
     BUT I WANT TO KEEP IT JUST  )))))

    useEffect(() => {
        fetchdata(setdata);
    }, [])

    const { users } = data;
      

*/