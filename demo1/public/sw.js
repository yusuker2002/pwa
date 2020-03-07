/**
 * service worker 安装激活
 */

self.addEventListener('install', function (e) {
    console.log('SW Install')
    // 跳过等待
    //self.skipWaiting()
})

self.addEventListener('activate', function (e) {
    console.log('SW Activate')
})

self.addEventListener('fetch', function (e) {
    console.log('SW Fetch', e.request.url)
})
