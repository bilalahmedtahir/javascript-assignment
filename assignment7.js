function displayCurrentTime() {
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const second = d.getSeconds();
    const result = `${hour.toString()}:${minute.toString()}:${second.toString()}`;
    console.log(result);
}
setInterval(displayCurrentTime, 1000);
