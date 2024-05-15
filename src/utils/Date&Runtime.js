

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

export function formatRunTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remaining_minutes = minutes % 60 ;
    return `${hours}h ${remaining_minutes}m` ;
}