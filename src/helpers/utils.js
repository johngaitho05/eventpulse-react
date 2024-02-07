

export const formatDate = (inputDateString)=> {
    if (!inputDateString)
        return ""
    // Parse the input date string
    const inputDate = new Date(inputDateString);

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

