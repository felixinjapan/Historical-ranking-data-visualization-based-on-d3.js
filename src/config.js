const config = {
  // 数据源的编码方式。
  // 默认为UTF-8。
  // 如果是国内用户，且使用旧版Execl处理数据，保存的编码很可能是GBK的，如果出现乱码则将这里改成GBK。
  // 不建议修改这里。而是建议将自己制作完毕的csv文件的内容复制到example.csv中。因为example.csv的编码格式是所有语言都支持的。
  // Encoding is not recommended to be modified.
  // Instead, it is recommended to copy the contents of the CSV file produced by yourself to example.csv.
  // The encoding format of example.csv is supported by all languages.
  encoding: "UTF-8",

  // 每个时间节点最多显示的条目数。
  max_number: 15,

  // 控制是否显示顶部附加信息文字。
  showMessage: true,

  // 时间自动排序。
  // !!!请确保打开此项时，使用的是标准日期格式！(即：YYYY-MM-DD HH:MM)
  // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
  // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
  // 开启auto_sort可以实现时间的自动补间。
  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: false,

  // 时间格式化
  timeFormat: "%Y/%m",

  // 倒序，使得最短的条位于最上方
  reverse: false,

  // 类型根据什么字段区分？如果是name，则关闭类型显示
  divide_by: 'name',

  // 颜色根据什么字段区分？
  divide_color_by: 'name',

  // 字段的值与其对应的颜色值
  color: {
    "Chinese": "#1177CC",
    "Japanese": "#667788"
  },

  // 颜色渐变：颜色绑定增长率
  changeable_color: false,

  // 添加功能：不同类型的增长率所用渐变色不同(暗→亮)
  // 如果该项为false，那么所有条目全部按照color_range变色
  // 如果该项为true，那么按照src/color_ranges.js中的color_ranges变色，默认色板为color_range
  // 一个具体的设置模板见src/_color_ranges.js，将其更名为color_ranges.js再设置即可
  divide_changeable_color_by_type: true,
  color_range: ['#ffffff', '#ffffff'],


  // 附加信息内容。
  // left label
  itemLabel: "",

  // right label
  typeLabel: "",


  // 榜首项目信息的水平位置 。
  // Top item information horizontal location
  item_x: 250,

  // 时间点间隔时间。
  interval_time: 5,

  // 上方文字水平高度。
  text_y: -700,

  // 右侧文字横坐标
  text_x: 1000,
  // 偏移量
  offset: 350,

  // 长度小于display_barInfo的bar将不显示barInfo。
  // Hide barInfo if bar is shorter than barInfo
  display_barInfo: 10,

  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: false,
  // 每个时间节点对于计数器的步长。
  // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  step: 10,

  //////////////////////////////////////////////////////////////////////////////
  // 格式化数值
  // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
  // 逗号表示每隔三位数用","分割
  // '.2f' means keeping two decimals.
  format: ",.0f",

  // 后缀
  postfix: "",

  // 如果看不懂这是在干什么的话，建议不要修改这里。
  // 反格式化函数:
  // 格式化操作可能会导致NaN问题。此函数将格式化后的数值反格式化为JS可以识别的数字。
  deformat: function (val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  //////////////////////////////////////////////////////////////////////////////

  // 图表左右上下间距。
  // 注意，left_margin不包括左侧的label，修改数值较小会导致左侧label不显示
  left_margin: 150,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // 是否开启时间标签。
  dateLabel_switch: true,
  // 时间标签坐标。建议x：1000 y：-50开始尝试，默认位置为x:null,y:null
  dateLabel_x: null,
  dateLabel_y: null,

  // 允许大于平均值的条消失时上浮。
  allow_up: false,

  // 所有条目上浮 - 用于反向排行榜等情况
  always_up: false,

  // 设置动画效果，如果为true，则新进入的条目从0开始。
  enter_from_0: true,

  // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  big_value: false,

  // 如果要使用半对数坐标，则开启此项
  use_semilogarithmic_coordinate: false,

  // barinfo太长？也许可以试试这个
  long: false,

  // 延迟多少个时间节点开始
  wait: 0,

  // 单独控制交换动画速度倍率
  update_rate: 1,

  // 开启匀速动画效果
  // animation:'linear',
  showLabel: false ,

  // label x轴位置
  labelx: 10,

  use_img: true,

  // 图片路径，本地图片或者网上图片。
  // 也可在imgs.js中配置。
  imgs: {
    "11": "https://w.namu.la/s/cff6b3f9c866b255588edfdc68381f67f1502e0cb8a27232980972b8735b0f5753fb491f2855bf46995ccd29119cdf66ef04a242fbf958df6d108bf400ba09fe22bd2c2fe1c47bed46bac8c89220e32c93a0747bba8b805ab73a659063311502",
    "FANCY" : "https://w.namu.la/s/6c0ebd6955ba04281e933e51f1d7c8ffe926779990c3552b43cfe520285039c0e53deb0542eef6058669672839a515fca23839643beb660fd0ddeede2e75d104a28447758db68361e553ac5e5e97355a5f422edbef7ff9f2ca401cb2bf44f0aa",
"YES OR YES" : "https://w.namu.la/s/b7b38def6bfd298d364e3058b301107ce8f8aab1ca3e2249ae65fa0577a92bb89c580cff6ddb48b2c642f3d9498ec09b480e7299ff4b8aefb95e02723a55ba9e33e8391f6c991ccbfde193abdc51053ffdbe2caf066161c8c646da295b14afed",
"TT" : "https://w.namu.la/s/c30f38f081c8da1404fa67642a51ee9ff3114dc839ca16b6eb4078eb81c3d33bc79c4ba8fe53314de381b2444b9ee7fbc45b3509eba5bfd734dee52301108c2be2d209392846dc13041c732973fa8bfb3e57804495b9f3a702497157db46c76b",
"LIKEY" : "https://w.namu.la/s/cff6b3f9c866b255588edfdc68381f67f1502e0cb8a27232980972b8735b0f5753fb491f2855bf46995ccd29119cdf66ef04a242fbf958df6d108bf400ba09fe22bd2c2fe1c47bed46bac8c89220e32c93a0747bba8b805ab73a659063311502",
"CHEER UP" : "https://w.namu.la/s/a2956bf07a9fa9806c5c756a34afd4d3300be5b2d5f648e8b6317400e4bb5cefd957fd341f8828f34bcda1f2d4713b6af532d049748d748acabbf03410ad0e6d2ab14c5b76449ac93a0df03de1e19d35df722629bb1dabc55508b0b68fb75ec9",
"Like OOH-AHH(OOH-AHH하게)" : "https://w.namu.la/s/bb1eea980b922ee293800aab84e9358c1c8af139b28ac7e0f44b604bd71aead00ced9e21be478034d20f3727a0c951602a48f0e21e829aa7ec7374abdfd10d460d0f152e7fb61f2418783b227890028db19297bfab91ab67b5ce160de508fdf2",
"What is Love?" : "https://w.namu.la/s/4e4f953db06c2bb30396e5e80e0dc142928a0ac7aca6b6aa5e2ae1e75f3f9adcf2a5b41bc8b4663f5d208a8d3d0f99f32f4d5f1f93346d2ee0967c7f8b5c970289b843e49946dc78a0801854758e5819083bd575747c819a5f278111541a570f",
"Heart Shaker" : "https://w.namu.la/s/30434fc05f1249ca3e5ad518ebd820ec9e25cdf9c36d525e519265b22aaf32a543393c88bf650421d0ba54d73e068ecbaeb08ba42f9d524887b6a30585eb34c4499e184fdd87818a8055793618d9fd552ecd2c8e2b603b024aaea828f29a995c",
"KNOCK KNOCK" : "https://w.namu.la/s/b3b5ca3c5dd7e2af65d4cddb48b64e280cf1cd501d5b8bd16fa5b169f37a8ed0f3d96b1728a4735185dfdc15770f20c608483a86b290f20e9d7f694a7e6eb1d99f6394735140230a8ec8690ab1f8059d458dc9fb55cf22e1fce34dee81b8d820",
"SIGNAL" : "https://w.namu.la/s/71c2c449d70dd280cd71011662b59449fcfcdba742053e64bcb59d58bc7b4fb4c9f4600b6dfaa87ace0c3009f5c7cdea2076584d63753352c90569f81836469a87ad8b4754b4b8c834bb9458db0efcf46e12cc97bb3981844cf68a80580a5259",
"Dance The Night Away" : "https://w.namu.la/s/062da3600894cb3011d56dfef56a6df0bf4002be0302a47df31004788dd24f9a463089e985bd603ff0df22c05940a005658ef5b7707737653720378ae178424e86028e4ff6601459928f8a8e53eb1b136cdd29a6ed75939c3ec952f96979b7ee",
"Candy Pop" : "https://w.namu.la/s/885885695cbbebae4f9de6902c7179ee2bbc66fd4cb257e370b5e0fbb1f68f57ad945820ef1c1a2c004f4405f703dcbdb148800121c0dcf683eb9992af6158faf3cd4ce723883460c2461ae94cffbe6dff7ac226ea18886c2ae6634f30d7e918"
  },

  // 全局背景颜色
  background_color: "#2d2e33",

  // 矩形柱是否为圆角矩形
  rounded_rectangle: true,

  // 是否显示x轴轴线
  show_x_tick: true,

  // 限制bar info 展示的长度
  // limit bar info display length
  bar_name_max: 50
};