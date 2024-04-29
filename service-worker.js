// service-worker.js

//self.addEventListener('push', function(event) {
//    const payload = event.data ? event.data.text() : 'No payload';
//
//    event.waitUntil(
//        self.registration.showNotification('Sample Notification', {
//            body: payload,
//            icon: 'icon.png'
//        })
//    );
//});

self.addEventListener('push', function(event) {
    const payload = event.data ? event.data.text() : 'No payload';

    const options = {
        body: payload,
        icon: 'icon.png',
        badge: 'icon.png',
        tag: 'notice', // 通知を識別するためのタグ
        requireInteraction: true, // ユーザーのインタラクションがあるまで通知を閉じない
        actions: [ // 通知にアクションボタンを追加
            {action: 'close', title: 'Close'}
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Notification', options)
    );
});

// 通知のアクションに対するリスナー
self.addEventListener('notificationclick', function(event) {
    if (event.action === 'close') {
        event.notification.close(); // アクションが'close'の場合は通知を閉じる
    } else {
        // その他のアクションの処理
        clients.openWindow('/'); // ユーザーが通知をクリックしたときに開くページ
    }
});
