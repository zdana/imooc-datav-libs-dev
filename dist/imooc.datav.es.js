import { ref, computed, pushScopeId, popScopeId, openBlock, createBlock, createVNode, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'TestComponent',
  setup: function setup() {
    var message = 'hello world!';
    var count = ref(1);
    var doubleCount = computed(function () {
      return count.value * 2;
    });

    var add = function add() {
      count.value++;
    };

    return {
      message: message,
      doubleCount: doubleCount,
      add: add
    };
  }
};

var _withId = /*#__PURE__*/withScopeId("data-v-07bdddea");

pushScopeId("data-v-07bdddea");

var _hoisted_1 = {
  "class": "test"
};

popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("div", null, "message:" + toDisplayString($setup.message), 1
  /* TEXT */
  ), createVNode("div", null, "doubleCount:" + toDisplayString($setup.doubleCount), 1
  /* TEXT */
  ), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.add && $setup.add.apply($setup, arguments);
    })
  }, "add count")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".test[data-v-07bdddea] {\n  color: red;\n}";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-07bdddea";
script.__file = "src/Test.vue";

/* ----------------------------------------------------------------------*/
function index (Vue) {
  Vue.component(script.name, script);
}
/*------------------------------------------*/
//commonjs文件

/*该方法不论有没有用到全部，bulid时均会被打包*/
// const a = 1
// const b = 2
// module.exports = { a, b }
// 局部打包的方法
// exports.a=1;
// exports.b=2;

/*------------------------------------------*/

export default index;
