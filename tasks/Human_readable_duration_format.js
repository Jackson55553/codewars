// 4kyu
function formatDuration(seconds) {
    if (!seconds) {
        return "now";
    }

    const y = Math.floor(seconds / (3600 * 24 * 365));
    const d = Math.floor((seconds % (3600 * 24 * 365)) / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    const yDisplay = y > 0 ? y + (y == 1 ? " year" : " years") : "";
    const dDisplay = d > 0 ? d + (d == 1 ? " day" : " days") : "";
    const hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";

    let temp = [yDisplay, dDisplay, hDisplay, mDisplay, sDisplay];
    let res = temp
        .filter((val) => val !== "")
        .reduce((prev, curr, i, arr) => {
            if (i == arr.length - 1 && arr.length > 1) {
                return (prev += ` and ${curr}`);
            } else {
                return (prev += `, ${curr}`);
            }
        });

    return res;
}
console.log(formatDuration(0)); //now
console.log(formatDuration(1)); //1 second
console.log(formatDuration(62)); //1 minute and 2 seconds
console.log(formatDuration(120)); //2 minutes
console.log(formatDuration(3600)); //1 hour
console.log(formatDuration(3662)); //1 hour, 1 minute and 2 seconds
console.log(formatDuration(86401)); //1 day and 1 second
console.log(formatDuration(31536002)); //1 year and 2 seconds

// best practice from codewars

// function formatDuration (seconds) {
//     var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//         res = [];

//     if (seconds === 0) return 'now';

//     for (var key in time) {
//       if (seconds >= time[key]) {
//         var val = Math.floor(seconds/time[key]);
//         res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//         seconds = seconds % time[key];
//       }
//     }

//     return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
//   }
