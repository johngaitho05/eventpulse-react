

export const formatDate = (dt,  client=true)=> {
    if (dt instanceof Date){
        let year = dt.getFullYear();
        let month = ('0' + (dt.getMonth() + 1)).slice(-2);
        let day = ('0' + dt.getDate()).slice(-2);
        let hours = ('0' + dt.getHours()).slice(-2);
        let minutes = ('0' + dt.getMinutes()).slice(-2);
        let seconds = ('0' + dt.getSeconds()).slice(-2);

        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }
    if (!dt)
        return ""
    // Parse the input date string
    const inputDate = new Date(dt);

    // Options for formatting
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    // Format the date using options
    return inputDate.toLocaleDateString('en-US', options);
}


export const getUser = ()=> {
  let user =  localStorage.getItem('user')
  if (user)
    return JSON.parse(user)
  return null
}