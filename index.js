const webPush = require('web-push');

// VAPIDキーの設定
webPush.setVapidDetails(
    'mailto:example@yourdomain',
    "公開キー",
    "秘密キー"
);

// 通知を送信する購読者の情報
const subscription1 = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dl_n-02hNuk:APA91bFeOhnUsVEStuGPdTB6-BugbayYut0sbuZKZ0PJqt1DwmcyCS_PVmjilqyoQIFb8Y1chODcrkhLKK1YP4gsvKQ5B7e_BOCear-LXyEd0-qQQ7hDr_Z94QpCLIs-jZj11Qs97nbV',
    keys: {
        p256dh: 'BKoIMoYGV6yo9Y2EOYhLDzVjT/KmHzWz6V98TyGbsntWR0O/hyVn8LFsWnCk4VFPdkv/E9N4B2aQXo4GBnLQVIc=',
        auth: 'QHEWTmZOicuOl5B351b5BA=='
    }
};

const subscription2 = {
    endpoint: 'https://web.push.apple.com/QAJFtmFvjspII7XTOIY7XE3eM8SLEBPNeey1it6lGC0f66GK6H6Na3qHyRAU3bPiKqiXRETJ-O0hEJX_IEwAj9we48sLbnGRnDV_6dlheVU9jekVeaLHcA7HZsCtVrTzVo55Thbgo-_N4IjL2b_x6MDBM8vM41JKQXYg1J15Rsw',
    keys: {
        p256dh: 'BBKK7FHUVTFNgIqrEJCYz+MosxiXOVWmp+T4rxDilkw6VI6yZSxuGR/V1QEAkT3T67MAiBmprIhqkoDMwnyWVqo=',
        auth: 'wxZebv2g34/pF8cvJgkowg=='
    }
};

const subscription3 = {
    endpoint: 'https://web.push.apple.com/QIgt_LidMT9-re4kwY2-FGJ7beWEpt5DqkiPLnajDsKbV3vXRRUHVYnIfjvratGpoc8mfGNAj8TAF3lKHOaQInYcsjvCn3bHzubjiGTgrj91ivonHSDlRM_iZj_UHA-BpKNJkzcqHwtcZqTPd4sJCYQ-fl24O1RfJfCmXZuLbkU',
    keys: {
        p256dh: 'BEPldk9IBl3Gy75hMP4wLEUYu0H8ZX171HsXw57hJzpo0yk1lTEhNmWqIJLxwatikh3hxpCb9jQP9KL5+BC5vDM=',
        auth: 'zSIJ1T9OYgGdZSD0AT+5Xw=='
    }
};

// 送信する通知内容
const payload = JSON.stringify({ title: 'Test Notification', body: 'Hello, world!' });

// 通知を送信
webPush.sendNotification(subscription3, payload)
    .then(result => console.log('Push Notification sent', result))
    .catch(error => console.error('Error sending notification, reason: ', error));
