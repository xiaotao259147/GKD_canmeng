import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xfani.app',
  name: '稀饭动漫',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.xfani.app.MainActivity',
      rules: 'ImageView - LinearLayout - FrameLayout > FrameLayout > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/13188550',
    },
  ],
});
